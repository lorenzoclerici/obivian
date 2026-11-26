/**
 * Obivian — Il Potere dell'Aria
 * Reveal, FAQ accordion, form validation, sticky CTA
 */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal], [data-stagger]");

  if (revealEls.length && "IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- FAQ accordion (one open at a time) ---------- */
  const faqItems = document.querySelectorAll(".faq-item");

  const setFaqOpen = (item, open) => {
    const trigger = item.querySelector(".faq-item__trigger");
    const panel = item.querySelector(".faq-item__panel");
    item.classList.toggle("is-open", open);
    if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) {
      if (open) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    }
  };

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-item__trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => setFaqOpen(other, false));
      if (!isOpen) setFaqOpen(item, true);
    });
  });

  /* ---------- Smooth scroll for segment cards / CTAs ---------- */
  document.querySelectorAll('[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (id === "#form") {
        const firstField = target.querySelector("input, select");
        if (firstField) {
          setTimeout(() => firstField.focus({ preventScroll: true }), 450);
        }
      }
    });
  });

  /* ---------- Sticky mobile CTA ---------- */
  const sticky = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");
  const formSection = document.querySelector("#form");

  if (sticky && hero && formSection && "IntersectionObserver" in window) {
    let heroVisible = true;
    let formVisible = false;

    const updateSticky = () => {
      const show = !heroVisible && !formVisible;
      sticky.classList.toggle("is-visible", show);
      sticky.setAttribute("aria-hidden", show ? "false" : "true");
      document.body.classList.toggle("has-sticky-cta", show);
    };

    const heroIo = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateSticky();
      },
      { threshold: 0.2 }
    );

    const formIo = new IntersectionObserver(
      ([entry]) => {
        formVisible = entry.isIntersecting;
        updateSticky();
      },
      { threshold: 0.15 }
    );

    heroIo.observe(hero);
    formIo.observe(formSection);
  }

  /* ---------- Lead form ---------- */
  const form = document.getElementById("lead-form");
  const success = document.getElementById("form-success");

  if (!form) return;

  const fields = {
    nome: form.querySelector("#nome"),
    email: form.querySelector("#email"),
    telefono: form.querySelector("#telefono"),
    ruolo: form.querySelector("#ruolo"),
    privacy: form.querySelector("#privacy"),
    cartaceo: form.querySelector("#cartaceo"),
    indirizzo: form.querySelector("#indirizzo"),
    cap: form.querySelector("#cap"),
    citta: form.querySelector("#citta"),
    provincia: form.querySelector("#provincia"),
  };

  const addressBox = form.querySelector("#indirizzo-spedizione");
  const addressFields = [fields.indirizzo, fields.cap, fields.citta, fields.provincia];

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  /* Copia cartacea: i campi dell'indirizzo compaiono (e sono obbligatori) solo se la casella è spuntata */
  const syncAddress = () => {
    const wantsPaper = fields.cartaceo.checked;
    addressBox.hidden = !wantsPaper;
    if (!wantsPaper) addressFields.forEach((el) => setInvalid(el, false));
  };

  const setInvalid = (el, invalid, message) => {
    const group = el.closest(".form-group") || el.closest(".form-check");
    if (!group) return;
    group.classList.toggle("is-invalid", invalid);
    el.setAttribute("aria-invalid", invalid ? "true" : "false");
    const err = group.querySelector(".form-error");
    if (err && message) err.textContent = message;
  };

  const validate = () => {
    let ok = true;

    if (!fields.nome.value.trim() || fields.nome.value.trim().length < 2) {
      setInvalid(fields.nome, true, "Inserisci nome e cognome.");
      ok = false;
    } else {
      setInvalid(fields.nome, false);
    }

    if (!emailOk(fields.email.value.trim())) {
      setInvalid(fields.email, true, "Inserisci un'email valida.");
      ok = false;
    } else {
      setInvalid(fields.email, false);
    }

    const phone = fields.telefono.value.trim().replace(/\s/g, "");
    if (phone && !/^[\d+]{8,15}$/.test(phone)) {
      setInvalid(fields.telefono, true, "Numero non valido.");
      ok = false;
    } else {
      setInvalid(fields.telefono, false);
    }

    if (!fields.ruolo.value) {
      setInvalid(fields.ruolo, true, "Seleziona un'opzione.");
      ok = false;
    } else {
      setInvalid(fields.ruolo, false);
    }

    if (fields.cartaceo.checked) {
      if (fields.indirizzo.value.trim().length < 3) {
        setInvalid(fields.indirizzo, true, "Inserisci l'indirizzo di spedizione.");
        ok = false;
      } else {
        setInvalid(fields.indirizzo, false);
      }

      if (!/^\d{5}$/.test(fields.cap.value.trim())) {
        setInvalid(fields.cap, true, "Inserisci un CAP di 5 cifre.");
        ok = false;
      } else {
        setInvalid(fields.cap, false);
      }

      if (fields.citta.value.trim().length < 2) {
        setInvalid(fields.citta, true, "Inserisci la città.");
        ok = false;
      } else {
        setInvalid(fields.citta, false);
      }

      if (fields.provincia.value.trim().length < 2) {
        setInvalid(fields.provincia, true, "Inserisci la provincia.");
        ok = false;
      } else {
        setInvalid(fields.provincia, false);
      }
    }

    if (!fields.privacy.checked) {
      setInvalid(fields.privacy, true, "Il consenso privacy è obbligatorio.");
      ok = false;
    } else {
      setInvalid(fields.privacy, false);
    }

    return ok;
  };

  Object.values(fields).forEach((el) => {
    if (!el) return;
    const eventName = el.type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(eventName, () => {
      if (el.closest(".is-invalid")) validate();
    });
  });

  fields.cartaceo.addEventListener("change", syncAddress);
  syncAddress();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Invio in corso…";
    }

    // Per il tracciamento: professionista vs privato, PDF vs cartaceo.
    // "altro" resta a parte perché non è classificabile.
    const ruolo = fields.ruolo.value;
    const tipo = ruolo === "privato" ? "privato" : ruolo === "altro" ? "altro" : "professionista";
    const wantsPaper = fields.cartaceo.checked;
    const formato = wantsPaper ? "pdf+cartaceo" : "pdf";

    // Placeholder: collega qui il tuo endpoint (Apps Script, CRM, Formspree, ecc.)
    const payload = {
      nome: fields.nome.value.trim(),
      email: fields.email.value.trim(),
      telefono: fields.telefono.value.trim(),
      ruolo,
      tipo,
      formato,
      copia_cartacea: wantsPaper,
      marketing: form.querySelector("#marketing")?.checked ?? false,
      source: "landing-potere-dell-aria",
      ts: new Date().toISOString(),
    };

    if (wantsPaper) {
      payload.indirizzo = fields.indirizzo.value.trim();
      payload.cap = fields.cap.value.trim();
      payload.citta = fields.citta.value.trim();
      payload.provincia = fields.provincia.value.trim();
    }

    console.info("[Obivian lead]", payload);

    window.setTimeout(() => {
      form.classList.add("is-hidden");
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
      if (typeof fbq === "function") {
        fbq("track", "Lead", { audience: tipo, formato });
      }
    }, 600);
  });
})();
