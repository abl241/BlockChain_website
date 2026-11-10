# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Emory students** deciding whether to join. Any major or year. Their job: understand what the club does, see that it is active and real, and apply during the recruiting window.
- **Companies, protocols and sponsors**, including recruiters. Their job: judge in seconds whether the club is credible enough to partner with, sponsor, or hire from, and find a way to get in touch.

The home page serves both with separate paths: Students → Apply, Companies → Connect.

## Product Purpose

Blockchain at Emory is Emory University's student blockchain organization. The site recruits members, shows partners and sponsors what the club builds and researches, and gives both audiences a way to act. Success means students apply during recruiting, and companies reach out.

## Positioning

A student club that runs real on-chain infrastructure, not just meetings: it operates its own Solana validator, publishes research, and ships open-source code. That work is verifiable and is the club's strongest claim.

## Operating Context

- Recruiting runs each semester through a Google Form (link in `index.html`). Recruiting dates change every cycle, so the site must not show expired windows.
- Events are announced on Luma (lu.ma/emoryblockchain).
- Research is published on Substack (emoryblockchain.substack.com).
- Code lives on GitHub (github.com/blockchainemory).
- Contact: blockchainemory@gmail.com, plus Instagram, LinkedIn, X, and a Telegram group.

## Capabilities and Constraints

- Static HTML/CSS/JS site with no build step. Hosted from the GitHub repo (fork abl241/BlockChain_website, upstream philipcardozo/BlockChain_website).
- **Divisions that exist today:** Board, Hacker Team, Research & Investments, Education, Governance.
  - Consulting, Design and "Xcelerator" do **not** run and must not be claimed.
- **Decisions made for the redesign:**
  - The Projects, Research and Finances pages are folded into the home page.
  - `locked.html` and the Finances board login stay untouched until the board confirms whether those treasury figures are real and public.
- **Open, not yet confirmed:**
  - Member count, event count, number of partners, and the validator's current stats.
  - Current-semester recruiting dates.
  - Do not display figures for any of these until the owner supplies them.

## Brand Commitments

- **Name:** "Blockchain at Emory".
- **Logos:** `Images/Logo/` (Logo_Official.png, Logo_noBG.png, Logo_banner.png, Logo_name.png, Black_logo.png).
- **Emory identity:** navy plus gold.
- **Quality bar** set by the owner: oregonblockchain.org and blockchain.studentorg.berkeley.edu.

## Evidence on Hand

Confirmed real and publishable:

- **Solana validator:** run by the club. Links to StakeWiz/Validators.app.
  - Two addresses appear in the code and they disagree (`finances.html:460` vs `:540`). Confirm the correct one before publishing.
  - Current stake, rank and APY are not confirmed.
- **Research:**
  - "State of Bittensor in 2025" on Substack.
  - "Exploring Style Factors in Cryptocurrencies" (PDF and cover in `Research/`).
- **Code:** the Crypto MEV Simulator / Frontrunning Bot (github.com/blockchainemory/Crypto-MEV-Simulator-Frontrunning-Bot).
- **Events and trips, with photos:**
  - `Images/Gallery/`: ETHDenver, Bitcoin 2025, Cornell Blockchain, 1st Event Dinner, Waffle House.
  - `Images/Meetings/` and `Images/end event/`: Genesis meeting, Accelerate, Starknet, Sui workshop, Sui pizza, Near AI.
  - Some slider date captions in the current site are wrong.
- **Partners**, logos in `Images/Partners/` and `Images/Partners2/`:
  - Coinbase, Gemini, Kraken, Solana Foundation, Near Foundation, Starknet, EigenLayer, Fenbushi Capital, SUI, Celo, Jupiter, Obol, Gaia, OCAM, College DAO, BAF, 50T, Origin.
- **Team:** roster with headshots and LinkedIn links in `Team.html` and `Team/`.

Must not be fabricated or kept:

- About's invented metrics: 156 internships, 23 papers, 8 grants, 12 competition wins.
- The conflicting "25+ / 20+ projects" and "30+ partners" stats.
- Hard-coded "live" validator status.
- The fake newsletter success message.

## Product Principles

1. **Only verifiable claims.** Every number and name on the site must be real and current. Remove a claim rather than estimate it.
2. **Show the work.** Real infrastructure, research, code and event photos are the proof. Lead with them instead of describing them.
3. **Two clear paths.** Students and companies should each find their next step within seconds.
4. **Never stale.** Anything time-bound, such as recruiting windows and "next event", must be dated, and removed or hidden once it has passed.

## Accessibility & Inclusion

Meet WCAG 2.1 AA:

- Text contrast of at least 4.5:1.
- Keyboard-navigable, with visible focus states.
- Respect the reduced-motion setting.
- Content readable without JavaScript.
- 44px touch targets on mobile.
