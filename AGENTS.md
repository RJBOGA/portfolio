# Project architecture

- Keep the portfolio (currently v3) as a single React page composed from the existing portfolio data, so career details and links have one source of truth.
- Bundle portfolio photos through local asset imports so both Lovable and repository-based hosting resolve them correctly.
- Keep all v2 colors and layout styling in the global stylesheet with semantic tokens so the page has a consistent theme.