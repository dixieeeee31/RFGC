# RFGC website — content still needed

Every item below appears on the site as a visible placeholder. Nothing has been
invented to fill a gap. Search the `pages/` folder for `Content needed`, `[add`,
or `tbc` to find them in the markup.

Ordered by how much they block.

---

## 1. Resolved — founding year

**1989, confirmed.** Every `[1988 or 1989 — confirm]` marker has been replaced
with 1989, and "February 1988" on the Partnerships page now reads February 1989.
The homepage hero carries a 37-year mark — "37 / Years of Filipino property
development / Established 1989" — which needs bumping to 38 in 2027.

Your existing live site and its footer still say 1988; those should be corrected
too.

Note: the 5 / 8 / 1 property counts have been removed from the homepage. They
still appear on the About page under "Track record", where they are drawn from
your own property records.

---

## 2. Per-property content

All 14 property pages are live and correctly categorised, with verified name,
location, status, and contact number. Each needs:

| Field | Notes |
|---|---|
| Description | 2–3 sentences. Only Vivere Hotel & Resorts has one so far. |
| Location detail | Nearby landmarks, transport, and a map embed. |
| The opportunity | Hospitality: rooms, function spaces, partnership scope. Leasing: unit types, terms, inclusions, availability. Commercial: available floors, floor plates, parking, fit-out terms. |
| Year completed | |
| Floors / units | |
| Amenities | |
| Photographs | 2–3 more per property. Each has exactly one right now. |

**Property websites — three still to confirm.** These are now linked:

| Property | Link |
|---|---|
| Vivere Hotel & Resorts | viverehotel.com.ph |
| Vivere Azure | vivereazure.com |
| Amari El Nido by Vivere | amarielnido.com |
| The One Dasma Place | theonedasmaplace.com.ph |
| The One Santo Tomas, P. Campa, P. Campa 2, Richville Place | theone.com.ph (portfolio site) |

Not linked, because we do not know whether they belong on theone.com.ph or have
sites of their own: **Legarda Suites**, **E.G Galeria Suites @ P. Noval**,
**Mayon Galeria Suites**. Also unlinked: Vivere Sta. Rosa, Richville Corporate
Tower, Richville Corporate Center.

Property cards now open the official site directly in a new tab. The eight RFGC
property pages for those properties are still built and installed, but nothing
in the navigation points to them — see the note in README-wordpress-install.md.

Please click each of the five links once to confirm it resolves — they were
supplied by hand and have not been tested from this build.

**Missing contact numbers:** Amari El Nido by Vivere and Vivere Sta. Rosa
currently read "Details available on request" and "Details coming soon" —
carried over from your existing site.

**Names to confirm:**
- "Amari El Nido by Vivere" — your brief calls it "Amari By Vivere Hospitality Group"
- "The One P. Campa" — your brief calls it "The One P. Campa 1"
- Vivere Azure is shown as "Anilao, Mabini, Batangas" (both are correct; confirm which you prefer sitewide)
- Confirm Richville Corporate Center is office-only, or tell us its retail component

---

## 3. Our Impact

Both real initiatives are written up and live. Neither has a photograph, so both
cards show a marked image placeholder.

- **People & inclusion** — a photo from the internship placement
- **Environment** — photos of the El Nido tree planting

**Before publishing the internship story:** please secure written consent from
the intern and, if applicable, their guardian. We recommend not naming the
individual and not stating any medical information. Under the Data Privacy Act,
health data is sensitive personal information, and the story works without it.

The third card is a deliberate "more to come" placeholder. Replace it as soon as
a real programme starts; the layout takes more cards without a redesign.

---

## 4. News & updates

The section is now a four-card band, on both the homepage and the News page.
Card one holds the only verified item (Vivere Sta. Rosa). Cards two to four are
placeholders reading `[add date]`, `[add source]`, `[add headline]`.

For each real announcement, send:

- **Date** — e.g. "August 13, 2026"
- **Source** — "RFGC" for your own announcements, or the publication and author
  for press coverage, e.g. "AR. JOHN LEE, PHILIPPINE DAILY INQUIRER"
- **Headline** — one line
- **Photograph** — one landscape image
- **Link target** — the article, or a property page

If RFGC staff should publish these without a developer, build the band as a
WordPress Posts loop (Elementor Loop Grid) rather than fixed HTML. One `.ncard`
block is one loop item.

## 4b. Status labels — confirm the wording

Status pills read differently by vertical, because one phrase cannot serve a
hotel and an office tower:

| Vertical | Label shown |
|---|---|
| Hospitality, operating | **Now Welcoming Guests** |
| Commercial, operating | **Now Leasing** |
| Leasing units | **Move-In Ready** |
| Anything in development | **Soon to Rise** |

Two things to check. "Now Leasing" on the two Richville towers implies space is
actually available — confirm that before launch, or we soften it to "Now
Operating". And "Move-In Ready" is applied to all eight leasing communities from
your existing site's data; if any building is currently full, tell us and we will
change that one.

## 5. Corporate and legal

- SEC registration number
- BIR TIN
- NPC DPO/DPS registration number — and the official NPC seal image file, to
  replace the CSS mock-up in the footer
- Number of audited financial years available to lenders
- Depository bank names, if you want them listed on the Partnerships page
- A finance email and a procurement email, if those inquiries should be separated
- Privacy notice: last-updated date and your data-retention period

---

## 6. About page

- Confirm the milestone years shown (1990s expansion, 2000s hospitality) and add
  any the group considers significant — incorporation date, first hotel opening,
  awards
- RFGC's official vision and mission statements, if published versions exist.
  The four values currently shown are drafted from your existing site's language
  and need approval before they go live.

---

## 7. Functional, for the developer

- The forms are markup only. Rebuild with a real form plugin and keep the data
  privacy consent checkbox as a **required** field. Route each "I'm interested
  in" option to the right mailbox.
- The Contact page map is a styled placeholder; drop in a Maps embed.
- Footer social icons and "All updates" link nowhere yet.
