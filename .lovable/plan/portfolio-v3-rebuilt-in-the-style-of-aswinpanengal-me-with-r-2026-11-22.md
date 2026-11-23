# Portfolio v3: rebuilt in the style of aswinpanengal.me, with Raju's own content

All words, projects, dates and links come from the current portfolio. Nothing from Aswin's site is copied as content.

## What was checked on the reference site
- Background: a faded wall of code (a JS object describing the person) covering the page. When you move the mouse, the code under the cursor turns darker, like a flashlight.
- Top bar: small black pill in the center with the name, a moon (dark mode) button, and a "..." menu button.
- Menu: a white panel slides in from the right, page behind goes dim. Top right shows "close" next to a round black X button. Big links (Projects, About, Contact), a row of small links, email at the bottom left, round social icons at the bottom right. Escape also closes it.
- Hero: huge "< SOFTWARE ENGINEER />", black-and-white photo in the middle, "©2026" bottom left, "{{ /AI & FULL-STACK DEVELOPMENT }}" bottom right with a blinking cursor.
- Sections: Tech Stack in 3 groups, Featured Projects as folders you open to see details, Experience, Contact.
- Footer: black strip with name and role on the left, link columns in the middle, "Get in touch" email and copyright on the right, big "See you around." with "Back to top". Below it a huge pale name ("ASWIN.") and a hand-drawn crowd illustration, ending in a thin black bar with a one-line joke.

## What Raju's version gets
1. Code wall background built from Raju's real data (name, Citi role, projects, skills), with the mouse flashlight effect. Turned off on phones and for people who prefer less motion.
2. Center pill top bar: "Raju", dark mode switch, "..." menu.
3. Slide-in menu with "close" + round X button, dim backdrop, Escape and backdrop click to close, links: Projects, About, Contact, then Skills, Experience, Recognition; email + LinkedIn, GitHub icons.
4. Hero: "< SENIOR SOFTWARE ENGINEER />", Raju's portrait in black and white, "©2026", "{{ /ENTERPRISE & APPLIED AI }}" with blinking cursor, then "Hi, I'm RJ." and the current headline, "Currently at Citi", and the "Email me to talk AI Architecture" button.
5. North Star block (January 2027 goal, honest "not launched yet" note).
6. Tech Stack: 3 groups (Applied AI, Languages & Frameworks, Cloud & Data) from existing skills.
7. Featured Projects as folders: AI Voice Agents, JobChat.AI, SchoolPool. Clicking a folder opens its Problem / What I did / Result / Takeaway plus GitHub links.
8. Experience (Citi, Rate, Carelon with correct dates), Recognition (DSI photo, awards), Education.
9. Footer matching the reference layout: "Raju." + role, link columns, Get in touch + email, "© 2026 Raju Boga", "See you around." + Back to top, then a huge pale "RAJU." and a bottom bar line "Designed & built with care from INDIA."
10. Light and dark mode both work.

## Left out on purpose
- Aswin's crowd illustration (his own artwork) and "World of Aswin" game. I can generate a new original illustration of you later if you want.
- "Ask AI" chat button (needs a backend).
- Upwork and Instagram icons (you have no links for them).

## Technical details
- Replace PortfolioV2 with a new single-page component still reading from portfolio-data.ts.
- Fonts: Space Grotesk (closest free match) for headings, JetBrains Mono for the code wall.
- Flashlight: CSS mask with a radial gradient following pointer via CSS variables, throttled with requestAnimationFrame.
- Menu: shadcn Sheet (handles focus trap, Escape, backdrop).
- Dark mode via a class on html, all colors as semantic tokens in index.css.
- Verify with Playwright: menu open/close, hover effect, footer links, phone width.
