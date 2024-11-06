---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Jeff Nawroth"
  tagline: Hi, I am Jeff Nawroth, a master’s student in Business Informatics and a web developer from Germany.
  image:
    src: /favicon.svg
    alt: Jeff Nawroth

  actions:
    - theme: brand
      text: Projects
      link: /projects
---

<style>

/* Dark Mode Styles */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #dab89f 30%, #685043);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #dab89f 50%, #685043 50%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-home-hero-actions-after: linear-gradient(120deg, #dab89f 30%, #685043);

  --vp-c-brand-1: #8a6f63;
  --vp-c-brand-2:    #a28373;
  --vp-c-brand-3:    #8a6f63;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
