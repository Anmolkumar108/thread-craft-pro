<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the existing TanStack Start routing and Vite scaffold; it is required by the hosting environment.
- Application UI uses React and semantic Tailwind/CSS styles with local lightweight controls; do not import external UI component libraries.
- Shared mock CMS state lives in a React provider with browser-only localStorage persistence; no remote data services, real authentication, or database calls are used.
- Public content pages use separate TanStack leaf routes; admin routes bypass the public shell and use a sessionStorage demo gate, not a security boundary.
- Bundle local photography through ES module imports so image URLs resolve correctly after deployment.
- Public page introductions share photographic banners; the homepage carousel reuses CMS hero content and pauses for focus, hover, and reduced motion to preserve editing and accessibility.
- Default photography updates use versioned, image-only CMS migrations that preserve custom images and other edits; gallery additions run once so later admin changes remain authoritative.

- Scope homepage editorial styles through the public main element; keep shared masthead spacing independent of banners so navigation never overlaps imagery.
