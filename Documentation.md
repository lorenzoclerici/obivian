# Landing Page — "Il Potere dell'Aria" (Obivian)
### Copy completo, ottimizzato per la conversione · Dual-audience B2B + B2C

> **Prodotto promosso:** il libro *Il Potere dell'Aria* di Roberto Tisato e Viviana Degan (lead magnet gratuito).
> **Obiettivo:** lead generation — compilazione form per ricevere il link al libro.
> **Pubblici:** privati/proprietari di casa (B2C) + installatori, architetti, progettisti, rivenditori (B2B).
> **Stack di riferimento:** Framer Motion 12 (animazioni), Heroicons (icone), Tailwind CSS 4.1+ (impostazione grafica).

---

## 🎨 Token di brand (per Tailwind 4.1+)

Definire i colori come variabili di tema (`@theme` in Tailwind 4.1) per usarli come utility:

| Ruolo | HEX | Uso consigliato |
|---|---|---|
| Petrolio (istituzionale) | `#2e7d92` | Testi titolo, percorso B2B, sezioni "solide" |
| Azzurro "aria" | `#6ac6dd` | Sfondi, accenti, linee/animazioni d'aria |
| Verde | `#008439` | Percorso B2C, spunte benefici, coerenza copertina |
| Arancio | `#fc4f00` | **Esclusivo delle CTA** (massimo contrasto) |
| Giallo | `#f8f200` | Solo micro-accenti / badge (mai su testo lungo) |

- **Font:** Klein Condensed — titoli in maiuscolo/condensed (come la copertina); body in peso Regular per leggibilità.
- **Tailwind 4.1+:** sfruttare le nuove utility `text-shadow-*` sui titoli hero, `mask-*` per dissolvenze morbide sulle immagini, e le container queries per adattare le card di segmentazione.
- **Regola visiva:** arancio = solo bottoni CTA. Verde = codice-colore percorso B2C. Petrolio = codice-colore percorso B2B.

---

## 1 · HERO (above the fold)

**Occhiello:**
IL LIBRO #1 SULLA QUALITÀ DELL'ARIA IN CASA

**Headline:**
# L'aria che respiri in casa è fino a 5 volte più inquinata di quella fuori. Questo libro ti spiega come cambiarla.

**Sottotitolo:**
*Il Potere dell'Aria* di Roberto Tisato e Viviana Degan. Che tu voglia respirare meglio a casa tua o proporre la VMC ai tuoi clienti con sicurezza, qui trovi tutto quello che serve sapere sulla Ventilazione Meccanica Controllata — spiegato semplice, con storie vere.

**CTA primaria:**
👉 Ricevi il libro gratis

**Reassurance sotto il bottone:**
Invio immediato del link · Nessun costo · Nessun impegno

**Elementi visivi & animazioni:**
- Layout split (Tailwind: `grid md:grid-cols-2`, `items-center`, `gap-12`). A destra la **copertina 3D** con badge "#1 Bestseller"; sfondo `bg-gradient-to-br from-[#6ac6dd] to-[#008439]`.
- **Framer Motion 12:** ingresso in `staggerChildren` — occhiello, headline, sottotitolo e CTA entrano in sequenza (`initial={{opacity:0, y:24}}` → `animate`). Copertina con `whileHover` leggero tilt/scale.
- **Micro-animazione "aria":** linee azzurre curve che scorrono lente dietro la copertina, in loop infinito (`repeat: Infinity`, ease lineare).
- **Heroicons:** `SparklesIcon` accanto all'occhiello; `ArrowRightIcon` dentro il bottone CTA.
- Header minimale: solo logo Obivian, **nessun menu** (zero vie di fuga).

---

## 2 · SEZIONE DI SEGMENTAZIONE (cuore del dual-audience)

**Titolo:**
## In quale di queste due persone ti riconosci?

**Elementi visivi & animazioni:**
- Due **card affiancate** (`grid md:grid-cols-2 gap-8`, `rounded-2xl`, `shadow-lg`), impilate su mobile. Card A accento verde, card B accento petrolio.
- **Framer Motion 12:** `whileInView` con reveal alternato (card A da sinistra, card B da destra); `whileHover={{ scale: 1.02 }}` per invitare al click.
- Click su ciascuna card → **scroll morbido** alla sezione dedicata (àncora). Entrambe convergono sullo stesso form.

### 🏠 Card A — B2C
**VIVO LA MIA CASA E VOGLIO STARCI BENE**
Combatti ogni giorno contro muffa, condensa e cattivi odori? Apri le finestre, accendi il deumidificatore, ma il problema torna sempre? E quella stanchezza che non sai spiegarti? Il nemico è invisibile: è l'aria che respiri. Un'aria stagnante che logora la tua salute, danneggia i muri e ti toglie energia invece di dartela. La buona notizia è che si risolve — e questo libro ti mostra come, senza tecnicismi.
→ *Scopri cosa cambia per te*
**Heroicon:** `HomeIcon`

### 🛠️ Card B — B2B
**PROGETTO, INSTALLO O CONSIGLIO IMPIANTI**
Il tuo cliente non dice "no alla VMC". Dice "no" a quello che non ha capito: "fa rumore", "costa troppo", "poi c'è la manutenzione". E ogni preventivo muore sulle stesse tre obiezioni. Questo libro ti dà le parole giuste per smontarle, ti fa scegliere come il vero esperto della qualità dell'aria e ti aiuta a chiudere più progetti — grazie anche al Metodo OBIVIAN in 7 passi.
→ *Scopri cosa cambia per te*
**Heroicon:** `WrenchScrewdriverIcon`

---

## 3 · PERCORSO B2C — "Cosa cambia per chi vive la casa"

**Badge:** PER TE CHE VIVI LA CASA (verde)

**Titolo:**
## Un ambiente che ti ridà energia, invece di togliertela

**Benefici (spunte verdi):**
- **Addio muffa, condensa e cattivi odori** — capisci finalmente da dove nascono e come eliminarli per sempre.
- **Più energia e lucidità mentale** — un'aria sana cambia come ti senti ogni giorno, dentro casa.
- **Muri e casa protetti** — stop ai danni silenziosi dell'umidità e dell'aria stagnante.
- **La verità sui falsi miti della VMC** — rumore, costi, manutenzione: cosa è vero e cosa no.
- **Un investimento che si ripaga** — in salute, comfort e risparmio in bolletta.

**Elementi visivi & animazioni:**
- Foto reale e calda di un interno domestico luminoso.
- **Framer Motion 12:** lista benefici con reveal `staggerChildren` allo scroll (`whileInView`, `once: true`).
- **Heroicons:** `CheckCircleIcon` (verde) per ogni spunta; `HeartIcon`/`BoltIcon` come accento su "energia e salute".

---

## 4 · PERCORSO B2B — "Cosa cambia per chi lavora con l'aria"

**Badge:** PER TE CHE PROGETTI E INSTALLI (petrolio)

**Titolo:**
## Lo strumento che ti fa scegliere come l'esperto (e ti fa chiudere di più)

**Benefici (spunte petrolio):**
- **Risposte pronte alle 3 obiezioni** che ti fanno perdere i preventivi: rumore, costi, manutenzione.
- **Argomenti che spostano la VMC da "costo" a "investimento"** — la leva che chiude la trattativa.
- **Il Metodo OBIVIAN in 7 passi** per progettare senza errori costosi in cantiere.
- **Un linguaggio semplice** per spiegare la VMC a qualunque cliente.
- **Un libro da consigliare ai tuoi clienti** — ti posiziona come punto di riferimento.

**Elementi visivi & animazioni:**
- Foto di contesto professionale (progetto, cantiere pulito, griglia di design Obivian).
- **Framer Motion 12:** stessa logica reveal della sezione B2C, per simmetria visiva tra i due pubblici.
- **Heroicons:** `CheckBadgeIcon` (petrolio) per le spunte; `SpeakerWaveIcon`, `CurrencyEuroIcon`, `ArrowPathIcon` come icone delle 3 obiezioni (rumore, costi, manutenzione).

> Nota UX: mantenere §3 e §4 di **pari peso visivo** (stessa lunghezza e struttura), così nessun pubblico si sente secondario.

---

## 5 · CONVERGENZA — "Cosa scoprirai nel libro"

**Titolo:**
## Dentro il libro, in ogni caso, troverai:

- Come eliminare per sempre muffa, condensa e cattivi odori.
- La verità oltre i falsi miti sulla VMC (rumore, costi, manutenzione).
- Come recuperare energia e lucidità grazie a un'aria sana.
- Come funziona davvero la Ventilazione Meccanica Controllata.
- Il Metodo OBIVIAN in 7 passi per l'impianto perfetto.
- Perché la VMC è un investimento che si ripaga da solo.

**Elementi visivi & animazioni:**
- Griglia `grid sm:grid-cols-2 lg:grid-cols-3 gap-6` di card su sfondo bianco, `rounded-xl`.
- **Framer Motion 12:** card con reveal a cascata (`stagger` ~0.08s) e leggero `y` in ingresso.
- **Heroicons:** una icona per card — es. `BeakerIcon` (aria/qualità), `LightBulbIcon` (falsi miti), `BoltIcon` (energia), `CloudIcon` (funzionamento VMC), `MapPinIcon`/`AcademicCapIcon` (metodo 7 passi), `CurrencyEuroIcon` (investimento).

---

## 6 · IL METODO OBIVIAN IN 7 PASSI

**Titolo:**
## Il cuore del libro: il Metodo OBIVIAN in 7 passi

**Corpo:**
Non teoria: un percorso operativo, passo dopo passo, per capire, scegliere e progettare l'impianto VMC giusto. Utile a chi installa e progetta — e prezioso per chi, in casa, vuole finalmente fare la scelta corretta.

**Elementi visivi & animazioni:**
- **Timeline** orizzontale (desktop) / verticale (mobile) con 7 tappe numerate.
- **Framer Motion 12:** la linea di collegamento si "disegna" all'ingresso in viewport (animazione `pathLength` su un `motion.path` SVG); i 7 nodi compaiono in sequenza.
- **Effetto curiosità:** step mostrati con etichette generiche/offuscate → CTA "Scopri i 7 passi completi dentro il libro".
- **Heroicons:** numeri dentro cerchi + `ArrowRightIcon` tra le tappe; `AcademicCapIcon` come icona-sezione.

---

## 7 · CREDIBILITÀ

**Titolo:**
## Perché fidarti

- 🏆 **#1 Bestseller** — badge grande, ripreso dalla copertina.
- ✍️ **Roberto Tisato & Viviana Degan** — gli autori, con una riga sull'autorevolezza sul tema aria/VMC.
- 🏢 **Un progetto Obivian** — punto di riferimento nella distribuzione dell'aria, tra efficienza ed estetica.
- 💬 **Testimonianze** *(placeholder)* — inserire una recensione di un privato e una di un professionista, per rafforzare entrambi i percorsi.

**Elementi visivi & animazioni:**
- Striscia su fondo petrolio `#2e7d92`, testo bianco per stacco e senso di solidità.
- **Framer Motion 12:** badge bestseller con `pop-in` a molla (`type: "spring"`); card testimonianze in reveal orizzontale.
- **Heroicons:** `TrophyIcon` (bestseller), `StarIcon` (rating recensioni), `BuildingOffice2Icon` (Obivian).

> Se il cliente non ha ancora recensioni, costruire questa sezione appena arrivano le prime lead.

---

## 8 · A CHI SERVE

**Titolo:**
## Questo libro è per te se…

**Colonna B2C — Vivi la tua casa** 🏠
Vuoi eliminare muffa e umidità, respirare meglio e capire se la VMC fa per te — senza farti travolgere dai tecnicismi.

**Colonna B2B — Lavori con l'aria** 🛠️
Sei installatore, architetto, progettista o rivenditore e vuoi proporre la VMC con più sicurezza, argomenti e progetti chiusi.

**Elementi visivi & animazioni:**
- Due colonne (`grid md:grid-cols-2`), icone `HomeIcon` e `WrenchScrewdriverIcon`.
- **Framer Motion 12:** reveal speculare (una colonna da sinistra, una da destra).

---

## 9 · CALL TO ACTION FINALE + FORM

**Titolo:**
## Ricevi subito *Il Potere dell'Aria*

**Sottotitolo:**
Compila il form: ti inviamo il link al libro via email. Gratis, subito, senza impegno.

**Campi del form:**
- Nome e Cognome
- Email
- Telefono
- **Sei…** *(menù a tendina: Privato / Installatore / Architetto o Progettista / Rivenditore / Altro)* — segmenta le lead B2C vs B2B per il CRM.
- ☑️ Consenso privacy (GDPR) — obbligatorio
- ☐ Consenso marketing — facoltativo

**CTA:**
👉 Inviami il libro

**Reassurance:**
📩 Link in pochi minuti · 🔒 Dati al sicuro, niente spam · ✅ Gratis, nessun impegno

**Elementi visivi & animazioni:**
- Fondo `bg-gradient-to-br` azzurro→verde chiaro; form a sinistra, copertina 3D a destra (chiude il cerchio con l'hero).
- **Framer Motion 12:** campi che entrano in `stagger`; sul submit, transizione a messaggio di conferma con `AnimatePresence`; stato di successo con `CheckCircleIcon` animato.
- **Bottone CTA:** unico elemento arancio della pagina; `whileHover={{ scale: 1.03 }}`, `whileTap={{ scale: 0.98 }}`.
- **Heroicons:** `EnvelopeIcon`, `LockClosedIcon`, `PaperAirplaneIcon` (bottone invio).
- **Mobile:** valutare **CTA sticky** in basso che appare dopo il primo scroll (Framer Motion + `useScroll`).

---

## 10 · MICRO-FAQ (abbatti le ultime obiezioni)

- **È davvero gratis?** Sì, compili il form e ricevi il link, senza costi.
- **Devo essere un tecnico per capirlo?** No: è scritto in modo semplice, con storie vere. Perfetto anche per chi non è del settore.
- **Sono un professionista: mi serve davvero?** Sì: ti dà argomenti di vendita e il Metodo in 7 passi, ed è ottimo da consigliare ai clienti.
- **Cosa ricevo esattamente?** Il link per accedere al libro, nella tua email.
- **I miei dati?** Solo per inviarti il libro e, se lo autorizzi, comunicazioni Obivian. Mai spam.

**Elementi visivi & animazioni:**
- Accordion (`space-y-3`), un solo pannello aperto per volta.
- **Framer Motion 12:** apertura/chiusura con `AnimatePresence` e `height: auto`; freccia che ruota.
- **Heroicons:** `ChevronDownIcon` (rotazione allo stato aperto), `QuestionMarkCircleIcon` come icona-sezione.

---

## ✅ Linee guida finali di conversione

- **Un solo obiettivo, due percorsi:** la segmentazione non crea due pagine, ma due letture della stessa pagina. Tutte le CTA portano all'unico form.
- **Ripeti la CTA** almeno 3 volte lungo lo scroll (hero · fine percorsi · sezione finale) + eventuale sticky mobile.
- **Gerarchia colore:** arancio solo CTA · verde percorso B2C · petrolio percorso B2B · giallo solo micro-accenti.
- **Mobile-first:** hero e primo bottone above the fold anche su smartphone; card di segmentazione impilate.
- **Performance animazioni:** usare `viewport={{ once: true }}` su tutti i reveal per non ri-animare allo scroll e mantenere fluidità.
- **Campo "Sei…" = oro per il CRM:** consente di instradare le lead su due flussi diversi (privati → contenuti comfort/salute; professionisti → materiali tecnici/commerciali).
