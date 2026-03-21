document.addEventListener("DOMContentLoaded", () => {
  const currentPath = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const prefersHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isFileProtocol = window.location.protocol === "file:";
  const pageOrigin = /^https?:/i.test(window.location.origin || "") ? window.location.origin : "";
  const siteResourceConfig = {
    brochure: {
      viewUrl: "https://drive.google.com/file/d/1TUeSqrF_R89I4VUyZLpKcrgpXgdqXuC4/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1TUeSqrF_R89I4VUyZLpKcrgpXgdqXuC4",
    },
    social: {
      youtube: "https://youtube.com/@uzhnaqtechnologypvtltd",
      instagram: "https://www.instagram.com/uzhnaq/",
    },
    featuredVideos: [
      {
        id: "gY1X9zkKRNU",
        title: "UZHNAQ TECHNOLOGY PVT LTD",
        eyebrow: "Company Story",
        description: "A concise introduction to UZHNAQ Technology, our capabilities, and the precision mindset behind every component.",
      },
      {
        id: "mhKvjHgMpLw",
        title: "Factory Highlights",
        eyebrow: "Factory Tour",
        description: "A closer look at the production environment, machinery, and the manufacturing discipline that powers our exports.",
      },
      {
        id: "IzcgKQa2tWQ",
        title: "Heat Treatment",
        eyebrow: "Process Focus",
        description: "See how advanced heat-treatment capabilities strengthen durability, consistency, and performance in critical parts.",
      },
    ],
    socialHub: {
      latestYouTubeVideo: {
        id: "IzcgKQa2tWQ",
        title: "Heat Treatment",
        eyebrow: "Latest Official Upload",
        description:
          "The latest public upload from the official UZHNAQ channel highlights heat-treatment capability, process control, and component durability.",
        watchUrl: "https://www.youtube.com/watch?v=IzcgKQa2tWQ",
      },
      instagramPosts: [
        {
          shortcode: "DRORgo8D6tN",
          label: "Workshop Update",
          caption: "Transmission, reverse engineering, and gear development from the latest shop-floor post.",
        },
        {
          shortcode: "DD_YGHVvSUI",
          label: "Component Spotlight",
          caption: "A recent production snapshot showing precision-machined components ready for the next stage.",
        },
        {
          shortcode: "DByBsQbPqGv",
          label: "Team Update",
          caption: "A recent company update shared through the official Instagram profile.",
        },
      ],
    },
    homepageFactsGallery: [
      {
        stat: "150+ Clients",
        title: "Trusted Worldwide",
        copy: "Serving domestic and export customers with precision gears and engineering components built for demanding applications.",
        icon: "clients",
        image: "./assets/source/general/close-up-metallic-gear.jpg",
        imageAlt: "Close-up of metallic gears",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#ddf344",
        glow: "rgba(221, 243, 68, 0.3)",
        shadeA: "rgba(13, 21, 42, 0.96)",
        shadeB: "rgba(4, 10, 25, 0.98)",
      },
      {
        stat: "1000+ Products",
        title: "Gears and Shafts",
        copy: "A broad catalog of drivetrain-ready gears and shafts engineered for durability, fit, and repeatable performance.",
        icon: "gear",
        image: "./assets/source/general/DSC02783.JPG",
        imageAlt: "Large group of precision machined gear components",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#006fdc",
        glow: "rgba(0, 111, 220, 0.32)",
        shadeA: "rgba(4, 33, 84, 0.95)",
        shadeB: "rgba(5, 15, 41, 0.98)",
      },
      {
        stat: "100+ Workers",
        title: "Skilled Workforce",
        copy: "Each product is backed by an experienced team committed to process discipline, quality checks, and timely execution.",
        icon: "workforce",
        image: "./assets/source/brand/graphics/engineers.png",
        imageAlt: "Engineering team illustration",
        imageFit: "contain",
        imagePadding: "10px 10px 0",
        imageScale: "1.04",
        accent: "#7ed7ff",
        glow: "rgba(126, 215, 255, 0.28)",
        shadeA: "rgba(11, 28, 54, 0.95)",
        shadeB: "rgba(8, 15, 33, 0.98)",
      },
      {
        stat: "Since 1996",
        title: "Engineering Legacy",
        copy: "Nearly three decades of manufacturing evolution, from conventional operations to advanced process capability.",
        icon: "timeline",
        image: "./assets/source/brand/graphics/gear 2.png",
        imageAlt: "Stylized gear graphic",
        imageFit: "contain",
        imagePadding: "10px",
        imageScale: "1.08",
        accent: "#f6f8ff",
        glow: "rgba(246, 248, 255, 0.18)",
        shadeA: "rgba(30, 36, 61, 0.95)",
        shadeB: "rgba(9, 12, 25, 0.98)",
      },
      {
        stat: "Tier 1 & Tier 2",
        title: "Railway and Defence",
        copy: "Proud suppliers to railway and defence sectors where reliability, traceability, and consistency matter most.",
        icon: "shield",
        image: "./assets/source/machines/011.png",
        imageAlt: "Industrial machining setup",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#3ea3ff",
        glow: "rgba(62, 163, 255, 0.3)",
        shadeA: "rgba(8, 30, 72, 0.96)",
        shadeB: "rgba(5, 12, 28, 0.98)",
      },
      {
        stat: "9 Industries",
        title: "Multi-Sector Capability",
        copy: "From automotive and EV to agriculture, oil and gas, construction, material handling, railway, and defence.",
        icon: "sectors",
        image: "./assets/source/general/DSC02660.JPG",
        imageAlt: "Rows of machined metal components",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#8eb8ff",
        glow: "rgba(142, 184, 255, 0.26)",
        shadeA: "rgba(10, 33, 81, 0.95)",
        shadeB: "rgba(3, 9, 24, 0.98)",
      },
      {
        stat: "4 New Export Markets",
        title: "Growing Global Reach",
        copy: "The export portfolio expanded with four additional countries, including Japan, reinforcing international confidence.",
        icon: "globeArrow",
        image: "./assets/source/general/DSC02764.JPG",
        imageAlt: "Precision components organized across production shelving",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#57dfff",
        glow: "rgba(87, 223, 255, 0.28)",
        shadeA: "rgba(4, 47, 99, 0.95)",
        shadeB: "rgba(4, 12, 30, 0.98)",
      },
      {
        stat: "Advanced Heat Treatment",
        title: "Sealed Quench Upgrade",
        copy: "State-of-the-art heat-treatment capability strengthened consistency, hardness control, and component life.",
        icon: "heat",
        image: "./assets/source/machines/020.png",
        imageAlt: "Industrial heat treatment equipment",
        imageFit: "cover",
        imagePadding: "0",
        accent: "#c7f24a",
        glow: "rgba(199, 242, 74, 0.28)",
        shadeA: "rgba(32, 47, 16, 0.94)",
        shadeB: "rgba(7, 16, 24, 0.98)",
      },
    ],
  };
  const footerBlueprintAsset = "./assets/footer/blueprint-bg.png";
  const footerGearOverlayAsset = "./assets/footer/gear-overlay.png";
  const dropdownGroups = {
    "About Us": {
      triggerId: "undefined-1njxbrf",
      lead: "Quick links to the story, direction, and people behind UZHNAQ.",
      items: [
        { title: "Our Mission", subtitle: "What drives the company", href: "./about.html#mission" },
        { title: "Our Vision", subtitle: "Where we are heading", href: "./about.html#vision" },
        { title: "Our Promise", subtitle: "Quality and delivery standards", href: "./about.html#promise" },
        { title: "Leadership Team", subtitle: "Meet the people behind UZHNAQ", href: "./about.html#team" },
      ],
    },
    Products: {
      triggerId: "undefined-14p26ei",
      lead: "Jump directly to core drivetrain and transmission components.",
      items: [
        { title: "Main Drive", subtitle: "Heavy-duty gear systems", href: "./products.html#maindrive" },
        { title: "Differential Gear", subtitle: "Balanced torque transfer", href: "./products.html#differentialgear" },
        { title: "Planet Gear", subtitle: "Compact power distribution", href: "./products.html#planetgear" },
        { title: "Synchro Assembly", subtitle: "Smooth shifting components", href: "./products.html#synchroassembly" },
      ],
    },
  };
  let footerAnchorSyncRegistered = false;
  const inlineFooterIcons = {
    world: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h18"/><path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z"/><path d="M20 7.5A11 11 0 0 0 4 7.5"/><path d="M20 16.5A11 11 0 0 1 4 16.5"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4.5h3.2l1.6 4.2-1.9 1.8a15 15 0 0 0 5.2 5.2l1.8-1.9 4.2 1.6V19a1.5 1.5 0 0 1-1.5 1.5C10 20.5 3.5 14 3.5 6A1.5 1.5 0 0 1 5 4.5Z"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5A2.5 2.5 0 0 1 5 6h14a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 18H5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="m10 9 5 3-5 3z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.2"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"/></svg>`,
    brochure: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3.5h6.5L19.5 8v11A1.5 1.5 0 0 1 18 20.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5Z"/><path d="M14 3.5V8h5.5"/><path d="M9.5 12h5"/><path d="M9.5 15.5h5"/></svg>`,
    arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></svg>`,
    clients: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2 2.2 3.2 5.2 3.2 8.5S14 18.3 12 20.5c-2-2.2-3.2-5.2-3.2-8.5S10 5.7 12 3.5Z"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9.2 3.8.6 1.9a7.6 7.6 0 0 1 4.4 0l.6-1.9 2.1.9-.6 2a7.8 7.8 0 0 1 3.1 3.1l2-.6.9 2.1-1.9.6a7.6 7.6 0 0 1 0 4.4l1.9.6-.9 2.1-2-.6a7.8 7.8 0 0 1-3.1 3.1l.6 2-2.1.9-.6-1.9a7.6 7.6 0 0 1-4.4 0l-.6 1.9-2.1-.9.6-2a7.8 7.8 0 0 1-3.1-3.1l-2 .6-.9-2.1 1.9-.6a7.6 7.6 0 0 1 0-4.4l-1.9-.6.9-2.1 2 .6a7.8 7.8 0 0 1 3.1-3.1l-.6-2Z"/><circle cx="12" cy="12" r="2.8"/></svg>`,
    workforce: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.2" r="2.8"/><path d="M6.8 18c.8-2.5 2.8-4 5.2-4s4.4 1.5 5.2 4"/><circle cx="5.2" cy="10.4" r="2"/><circle cx="18.8" cy="10.4" r="2"/><path d="M2.8 18c.4-1.8 1.6-3 3.2-3.6"/><path d="M21.2 18c-.4-1.8-1.6-3-3.2-3.6"/></svg>`,
    timeline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3.5v3"/><path d="M17 3.5v3"/><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 9.5h16"/><path d="M12 12v3.2l2 1.2"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5 18.5 6v5.8c0 4.1-2.6 7.6-6.5 8.7-3.9-1.1-6.5-4.6-6.5-8.7V6Z"/><path d="m9.2 12.1 1.8 1.9 3.8-4"/></svg>`,
    sectors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.2"/><rect x="14" y="4" width="6" height="6" rx="1.2"/><rect x="4" y="14" width="6" height="6" rx="1.2"/><rect x="14" y="14" width="6" height="6" rx="1.2"/></svg>`,
    globeArrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="12" r="7.5"/><path d="M3.5 12H18"/><path d="M11 4.5c1.8 2 2.8 4.7 2.8 7.5s-1 5.5-2.8 7.5c-1.8-2-2.8-4.7-2.8-7.5s1-5.5 2.8-7.5Z"/><path d="m15.8 5.8 4.7.2-.2 4.7"/><path d="m20.4 6-5.1 5.1"/></svg>`,
    heat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.4 3.5c1.3 2.1 1.5 4.1.5 5.9-.7 1.2-.5 2.4.5 3.4 1.6-1 2.6-2.8 2.6-4.8 2.2 1.6 3.5 4 3.5 6.7 0 3.8-3 6.8-7 6.8s-7-3-7-6.8c0-2.8 1.5-5.4 4-7 .1 1.7.7 3 1.9 4 .8-1 .9-2.2.5-3.6-.4-1.4-.2-2.9.5-4.6Z"/></svg>`,
  };

  decorateHeaderNavigation();
  highlightActiveLinks();
  initializeDropdowns();
  initializeEnquiryForms();
  initializeFooterEnhancements();
  initializeHomepageHeroBrochureCtas();
  initializeHomepageFactsGallery();
  initializeHomepageVideoGallery();
  initializeHomepageSocialHub();

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  function buildYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  }

  function extractText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function createExternalHref(value) {
    const trimmedValue = extractText({ textContent: value });
    if (!trimmedValue) {
      return "";
    }

    return /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue.replace(/^\/+/, "")}`;
  }

  function createPhoneHref(value) {
    const trimmedValue = extractText({ textContent: value });
    const normalizedValue = trimmedValue.replace(/(?!^\+)[^\d]/g, "");
    return normalizedValue ? `tel:${normalizedValue}` : "";
  }

  function cloneNewsletterForm(sourceContainer) {
    if (!(sourceContainer instanceof HTMLElement)) {
      return null;
    }

    const clone = sourceContainer.cloneNode(true);
    clone.classList.add("site-footer-newsletter-form-shell");
    clone.removeAttribute("style");

    const visibleWrapper = clone.firstElementChild;
    if (visibleWrapper instanceof HTMLElement) {
      visibleWrapper.classList.add("site-footer-newsletter-form-frame");
      visibleWrapper.removeAttribute("style");
    }

    const form = clone.querySelector("form");
    if (!(form instanceof HTMLFormElement)) {
      return clone;
    }

    form.classList.add("site-footer-newsletter-form");
    form.removeAttribute("style");

    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput instanceof HTMLInputElement) {
      emailInput.classList.add("site-footer-email-input");
      emailInput.removeAttribute("style");
      emailInput.setAttribute("autocomplete", "email");
      emailInput.setAttribute("aria-label", emailInput.getAttribute("placeholder") || "Email address");
    }

    const submitControl = form.querySelector('input[type="submit"], button[type="submit"]');
    if (submitControl instanceof HTMLElement) {
      submitControl.classList.add("site-footer-submit-button");
      submitControl.removeAttribute("style");

      const submitWrapper = submitControl.parentElement;
      if (submitWrapper instanceof HTMLElement && submitWrapper !== form) {
        submitWrapper.classList.add("site-footer-submit-wrap");
        submitWrapper.removeAttribute("style");
      }
    }

    return clone;
  }

  function buildCanonicalSocialItems() {
    return [
      {
        icon: "youtube",
        label: "YouTube",
        href: siteResourceConfig.social.youtube,
        external: true,
      },
      {
        icon: "instagram",
        label: "Instagram",
        href: siteResourceConfig.social.instagram,
        external: true,
      },
    ];
  }

  function collectFooterData(root) {
    const headline =
      extractText(root.querySelector(".uzhnaq-1r1llpm")).replace(/\s+([!?.,:;])/g, "$1") ||
      "Partner with Us for Excellence!";
    const website = extractText(root.querySelector(".uzhnaq-155pa7s"));
    const email = extractText(root.querySelector(".uzhnaq-cpge1f"));
    const phone = extractText(root.querySelector(".uzhnaq-xkjyig"));
    const address = extractText(root.querySelector(".uzhnaq-9pv2is"));
    const newsletterTitle =
      extractText(root.querySelector(".uzhnaq-1wpygkq")) || "Subscribe to our newsletter";
    const newsletterCopy =
      extractText(root.querySelector(".uzhnaq-1mu0ah0")) || "Send in your email and receive all updates!";

    const contactItems = [
      {
        icon: "world",
        label: website,
        href: createExternalHref(website),
        external: Boolean(website),
      },
      {
        icon: "mail",
        label: email,
        href: email ? `mailto:${email}` : "",
      },
      {
        icon: "phone",
        label: phone,
        href: createPhoneHref(phone),
      },
      {
        icon: "mapPin",
        label: address,
        href: "",
      },
    ].filter((item) => item.label);

    const legalItems = Array.from(root.querySelectorAll(".uzhnaq-1jupf1z > *"))
      .map((item) => extractText(item))
      .filter(Boolean);

    return {
      headline,
      contactItems,
      socialItems: buildCanonicalSocialItems(),
      brochureAction: {
        icon: "brochure",
        label: "View Brochure",
        eyebrow: "Company Profile",
        href: siteResourceConfig.brochure.viewUrl,
        external: true,
      },
      newsletterTitle,
      newsletterCopy,
      newsletterForm: cloneNewsletterForm(root.querySelector(".uzhnaq-svmtds-container")),
      legalItems,
    };
  }

  function buildFooterItemMarkup(item, extraClass = "") {
    const icon = inlineFooterIcons[item.icon] || inlineFooterIcons.world;
    const content = item.href
      ? `<a class="site-footer-item-link" href="${escapeAttribute(item.href)}"${item.external ? ' target="_blank" rel="noopener"' : ""}>${escapeHtml(item.label)}</a>`
      : `<span class="site-footer-item-text">${escapeHtml(item.label)}</span>`;

    return `
      <div class="site-footer-item ${extraClass}">
        <span class="site-footer-icon" aria-hidden="true">${icon}</span>
        <div class="site-footer-item-copy">${content}</div>
      </div>
    `;
  }

  function buildFooterShell(data) {
    const shell = document.createElement("section");
    shell.className = "site-footer-shell";
    shell.dataset.siteFooterShell = "true";
    shell.innerHTML = `
      <div class="site-footer-bg" aria-hidden="true">
        <img class="site-footer-blueprint" src="${escapeAttribute(footerBlueprintAsset)}" alt="">
        <img class="site-footer-gear-overlay" src="${escapeAttribute(footerGearOverlayAsset)}" alt="">
      </div>
      <div class="site-footer-inner">
        <div class="site-footer-headline-row">
          <h2 class="site-footer-headline">${escapeHtml(data.headline)}</h2>
          <a class="site-footer-brochure-button" href="${escapeAttribute(data.brochureAction.href)}" target="_blank" rel="noopener">
            <span class="site-footer-brochure-icon" aria-hidden="true">${inlineFooterIcons[data.brochureAction.icon]}</span>
            <span class="site-footer-brochure-copy">
              <span class="site-footer-brochure-eyebrow">${escapeHtml(data.brochureAction.eyebrow)}</span>
              <span class="site-footer-brochure-text">${escapeHtml(data.brochureAction.label)}</span>
            </span>
          </a>
        </div>
        <div class="site-footer-main">
          <section class="site-footer-section site-footer-contact-panel">
            <h3 class="site-footer-section-title">Contact</h3>
            <div class="site-footer-item-list">
              ${data.contactItems.map((item) => buildFooterItemMarkup(item, "is-contact")).join("")}
            </div>
          </section>
          <section class="site-footer-section site-footer-social-panel">
            <h3 class="site-footer-section-title">Follow Us</h3>
            <div class="site-footer-item-list">
              ${data.socialItems.map((item) => buildFooterItemMarkup(item, "is-social")).join("")}
            </div>
          </section>
          <section class="site-footer-newsletter-card">
            <h3 class="site-footer-newsletter-title">${escapeHtml(data.newsletterTitle)}</h3>
            <p class="site-footer-newsletter-copy">${escapeHtml(data.newsletterCopy)}</p>
            <div class="site-footer-newsletter-form-slot"></div>
          </section>
        </div>
        <div class="site-footer-legal">
          ${data.legalItems.map((item) => `<span class="site-footer-legal-item">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    `;

    const formSlot = shell.querySelector(".site-footer-newsletter-form-slot");
    if (formSlot instanceof HTMLElement && data.newsletterForm instanceof HTMLElement) {
      formSlot.appendChild(data.newsletterForm);
    }

    if (!data.contactItems.length) {
      shell.querySelector(".site-footer-contact-panel")?.remove();
    }

    if (!data.socialItems.length) {
      shell.querySelector(".site-footer-social-panel")?.remove();
    }

    if (!data.legalItems.length) {
      shell.querySelector(".site-footer-legal")?.remove();
    }

    return shell;
  }

  function hideFooterSourceNodes(root) {
    root
      .querySelectorAll(
        '[data-uzhnaq-background-image-wrapper="true"], .uzhnaq-1r1llpm, .uzhnaq-1d0rkid, .uzhnaq-hashds, .uzhnaq-l3ry8h, .uzhnaq-48xil1, .uzhnaq-1jupf1z',
      )
      .forEach((node) => {
        if (node instanceof HTMLElement) {
          node.classList.add("footer-source-hidden");
        }
      });
  }

  function initializeFooterEnhancements() {
    document.querySelectorAll(".uzhnaq-1jtqeum").forEach((footerRoot) => {
      if (
        !(footerRoot instanceof HTMLElement) ||
        footerRoot.dataset.footerShellReady === "true" ||
        !footerRoot.querySelector(".uzhnaq-1d0rkid") ||
        !footerRoot.querySelector(".uzhnaq-l3ry8h")
      ) {
        return;
      }

      const footerData = collectFooterData(footerRoot);
      const footerShell = buildFooterShell(footerData);

      footerRoot.dataset.footerShellReady = "true";
      footerRoot.parentElement?.classList.add("site-footer-wrapper");
      footerRoot.classList.add("footer-live-root", "site-footer-mounted");
      footerRoot.appendChild(footerShell);
      hideFooterSourceNodes(footerRoot);
    });

    syncVisibleFooterAnchor();

    if (!footerAnchorSyncRegistered) {
      footerAnchorSyncRegistered = true;
      window.addEventListener("resize", syncVisibleFooterAnchor);
    }
  }

  function syncVisibleFooterAnchor() {
    const footerShells = Array.from(document.querySelectorAll(".site-footer-shell"));
    footerShells.forEach((shell) => {
      if (shell instanceof HTMLElement) {
        shell.removeAttribute("id");
      }
    });

    const visibleShell = footerShells.find((shell) => shell instanceof HTMLElement && isRenderable(shell));
    if (visibleShell instanceof HTMLElement) {
      visibleShell.id = "site-footer-shell";
    }
  }

  function replaceButtonLabel(anchor, label) {
    const textNodes = Array.from(anchor.querySelectorAll(".uzhnaq-text"));
    let changed = false;

    textNodes.forEach((node) => {
      const normalizedText = extractText(node).toLowerCase();
      if (
        normalizedText === "watch video" ||
        normalizedText === "view brochure" ||
        normalizedText === "download brochure" ||
        normalizedText === "view socials"
      ) {
        node.textContent = label;
        changed = true;
      }
    });

    if (!changed) {
      anchor.innerHTML = anchor.innerHTML.replace(/watch video|view brochure|download brochure|view socials/gi, label);
    }
  }

  function ensureHeroCtaIcon(anchor, iconName) {
    const iconMarkup = inlineFooterIcons[iconName];
    if (!(anchor instanceof HTMLAnchorElement) || !iconMarkup) {
      return;
    }

    const leadingSlot = anchor.firstElementChild;
    if (
      leadingSlot instanceof HTMLElement &&
      !extractText(leadingSlot) &&
      !leadingSlot.querySelector("img, svg")
    ) {
      leadingSlot.classList.add("site-hero-cta-empty-slot");
    }

    let iconNode = anchor.querySelector(".site-hero-cta-icon");
    if (!(iconNode instanceof HTMLElement)) {
      iconNode = document.createElement("span");
      iconNode.className = "site-hero-cta-icon";
      iconNode.setAttribute("aria-hidden", "true");
      anchor.appendChild(iconNode);
    }

    iconNode.innerHTML = iconMarkup;
    anchor.dataset.siteHeroCtaIcon = iconName;
  }

  function createHomepageBrochureButton(sourceAnchor, label, href, variantClass, iconName, external = true) {
    const clone = sourceAnchor.cloneNode(true);
    clone.dataset.siteBrochureHeroButton = "true";
    clone.dataset.siteBrochureHydrated = "true";
    clone.href = href;
    if (external) {
      clone.target = "_blank";
      clone.rel = "noopener";
    } else {
      clone.removeAttribute("target");
      clone.removeAttribute("rel");
    }
    clone.classList.remove("site-hero-brochure-link--view");
    clone.classList.add("site-hero-brochure-link", variantClass);
    replaceButtonLabel(clone, label);
    ensureHeroCtaIcon(clone, iconName);
    return clone;
  }

  function scrollToVisibleFooter(event) {
    syncVisibleFooterAnchor();
    const targetFooter = document.getElementById("site-footer-shell");
    if (!(targetFooter instanceof HTMLElement)) {
      return;
    }

    event.preventDefault();
    targetFooter.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });

    if (window.history?.replaceState) {
      const nextUrl = new URL(window.location.href);
      nextUrl.hash = "site-footer-shell";
      window.history.replaceState(null, "", nextUrl.toString());
    } else {
      window.location.hash = "site-footer-shell";
    }
  }

  function initializeHomepageHeroBrochureCtas() {
    if (currentPath !== "index.html") {
      return;
    }

    document.querySelectorAll('a[href*="youtube.com/watch"]').forEach((watchAnchor) => {
      if (!(watchAnchor instanceof HTMLAnchorElement) || watchAnchor.dataset.siteBrochureHydrated === "true") {
        return;
      }

      const watchLabel = extractText(watchAnchor).toLowerCase();
      if (!watchLabel.includes("watch video")) {
        return;
      }

      const actionRow = watchAnchor.parentElement?.parentElement;
      const enquireAnchor = actionRow?.querySelector('a[href="./contact.html"]');
      if (!(actionRow instanceof HTMLElement) || !(enquireAnchor instanceof HTMLAnchorElement)) {
        return;
      }

      actionRow.classList.add("site-hero-cta-row");
      enquireAnchor.classList.add("site-hero-cta-link", "site-hero-enquiry-link");
      ensureHeroCtaIcon(enquireAnchor, "phone");

      watchAnchor.dataset.siteBrochureHydrated = "true";
      watchAnchor.classList.add("site-hero-cta-link", "site-hero-brochure-link", "site-hero-brochure-link--view");
      watchAnchor.href = siteResourceConfig.brochure.viewUrl;
      watchAnchor.target = "_blank";
      watchAnchor.rel = "noopener";
      replaceButtonLabel(watchAnchor, "View Brochure");
      ensureHeroCtaIcon(watchAnchor, "brochure");

      const watchContainer = watchAnchor.parentElement;
      if (!(watchContainer instanceof HTMLElement) || actionRow.querySelector('[data-site-hero-socials="true"]')) {
        return;
      }

      const socialsContainer = watchContainer.cloneNode(false);
      const socialsAnchor = createHomepageBrochureButton(
        watchAnchor,
        "View Socials",
        "#site-footer-shell",
        "site-hero-brochure-link--socials",
        "arrowDown",
        false,
      );
      socialsAnchor.dataset.siteHeroSocials = "true";
      socialsAnchor.addEventListener("click", scrollToVisibleFooter);
      socialsContainer.classList.add("site-hero-socials-slot");
      socialsContainer.appendChild(socialsAnchor);
      watchContainer.insertAdjacentElement("afterend", socialsContainer);
    });
  }

  function isRenderable(element) {
    if (!(element instanceof HTMLElement) || !element.isConnected || element.offsetWidth <= 0 || element.offsetHeight <= 0) {
      return false;
    }

    let current = element;
    while (current instanceof HTMLElement) {
      const style = window.getComputedStyle(current);
      if (style.display === "none" || style.visibility === "hidden") {
        return false;
      }
      current = current.parentElement;
    }

    return element.getClientRects().length > 0;
  }

  function buildYouTubeEmbed(video) {
    const fallbackNote = isFileProtocol
      ? `
        <div class="yt-local-note">
          Embedded YouTube playback can be blocked when opening the site directly from your computer. If that happens, run the site through a local server.
        </div>
      `
      : "";

    return `
      <div class="yt-embed-shell">
        <iframe
          class="yt-embed-frame"
          src="${buildYouTubeEmbedUrl(video.id)}"
          title="${escapeAttribute(video.title)}"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="origin"
          allowfullscreen
        ></iframe>
        ${fallbackNote}
      </div>
    `;
  }

  function buildVideoGalleryMarkup() {
    const activeVideo = siteResourceConfig.featuredVideos[0];

    return `
      <div class="site-video-gallery-shell">
        <div class="site-video-gallery-header">
          <div class="site-video-gallery-copy">
            <span class="site-video-gallery-kicker">Official UZHNAQ Media</span>
            <h2 class="site-video-gallery-title">Inside Precision, Process, and Production</h2>
            <p class="site-video-gallery-subtitle">
              Explore the company story, factory floor, and heat-treatment capability through curated videos from the official UZHNAQ channel.
            </p>
          </div>
          <a class="site-video-gallery-channel-link" href="${escapeAttribute(siteResourceConfig.social.youtube)}" target="_blank" rel="noopener">
            Visit YouTube Channel
          </a>
        </div>
        <div class="site-video-gallery-player-shell">
          <div class="site-video-gallery-frame-slot" data-site-video-gallery-frame>
            ${buildYouTubeEmbed(activeVideo)}
          </div>
          <div class="site-video-gallery-meta">
            <p class="site-video-gallery-meta-label">Now Playing</p>
            <h3 class="site-video-gallery-meta-title" data-site-video-gallery-title>${escapeHtml(activeVideo.title)}</h3>
            <p class="site-video-gallery-meta-copy" data-site-video-gallery-copy>${escapeHtml(activeVideo.description)}</p>
          </div>
        </div>
        <div class="site-video-gallery-card-grid" role="list">
          ${siteResourceConfig.featuredVideos
            .map(
              (video, index) => `
                <button
                  type="button"
                  class="site-video-gallery-card${index === 0 ? " is-active" : ""}"
                  data-site-video-card
                  data-video-id="${escapeAttribute(video.id)}"
                  data-video-title="${escapeAttribute(video.title)}"
                  data-video-copy="${escapeAttribute(video.description)}"
                  aria-pressed="${index === 0 ? "true" : "false"}"
                >
                  <span class="site-video-gallery-card-thumb" style="background-image:url('https://i.ytimg.com/vi/${escapeAttribute(video.id)}/hqdefault.jpg')"></span>
                  <span class="site-video-gallery-card-copy">
                    <span class="site-video-gallery-card-eyebrow">${escapeHtml(video.eyebrow)}</span>
                    <span class="site-video-gallery-card-title">${escapeHtml(video.title)}</span>
                  </span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function buildHomepageFactCardMarkup(fact, index) {
    const iconMarkup = inlineFooterIcons[fact.icon] || inlineFooterIcons.world;
    const styleTokens = [
      `--fact-index:${index}`,
      `--fact-accent:${fact.accent}`,
      `--fact-glow:${fact.glow}`,
      `--fact-shade-a:${fact.shadeA}`,
      `--fact-shade-b:${fact.shadeB}`,
      fact.imageFit ? `--fact-image-fit:${fact.imageFit}` : "",
      fact.imagePosition ? `--fact-image-position:${fact.imagePosition}` : "",
      fact.imagePadding ? `--fact-image-padding:${fact.imagePadding}` : "",
      fact.imageScale ? `--fact-image-scale:${fact.imageScale}` : "",
    ]
      .filter(Boolean)
      .join(";");

    return `
      <article class="site-fact-card" role="listitem" style="${styleTokens}">
        <div class="site-fact-card-media">
          <img
            class="site-fact-card-image"
            src="${escapeAttribute(fact.image)}"
            alt="${escapeAttribute(fact.imageAlt || fact.title)}"
            loading="lazy"
          >
        </div>
        <div class="site-fact-card-body">
          <span class="site-fact-icon" aria-hidden="true">${iconMarkup}</span>
          <p class="site-fact-stat">${escapeHtml(fact.stat)}</p>
          <h3 class="site-fact-title">${escapeHtml(fact.title)}</h3>
          <p class="site-fact-copy">${escapeHtml(fact.copy)}</p>
        </div>
      </article>
    `;
  }

  function buildHomepageSocialHubMarkup() {
    const latestVideo = siteResourceConfig.socialHub.latestYouTubeVideo;
    const latestInstagramPost = siteResourceConfig.socialHub.instagramPosts[0];
    const instagramEmbedUrl = latestInstagramPost
      ? `https://www.instagram.com/p/${latestInstagramPost.shortcode}/embed/`
      : "";

    return `
      <div class="site-social-hub-shell">
        <div class="site-social-hub-header">
          <h2 class="site-social-hub-title">Socials</h2>
        </div>
        <div class="site-social-hub-grid">
          <section class="site-social-panel site-social-panel--instagram">
            <div class="site-social-panel-head">
              <div class="site-social-panel-label">
                <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.instagram}</span>
                <h3 class="site-social-panel-title">Instagram</h3>
              </div>
            </div>
            <div class="site-instagram-feed-frame-shell">
              <iframe
                class="site-instagram-feed-embed"
                src="${escapeAttribute(instagramEmbedUrl)}"
                title="Latest Instagram post from UZHNAQ"
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </section>
          <section class="site-social-panel site-social-panel--youtube">
            <div class="site-social-panel-head">
              <div class="site-social-panel-label">
                <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.youtube}</span>
                <h3 class="site-social-panel-title">YouTube</h3>
              </div>
            </div>
            <div class="site-social-youtube-frame">
              ${buildYouTubeEmbed(latestVideo)}
            </div>
          </section>
        </div>
      </div>
    `;
  }

  function buildHomepageFactsGalleryMarkup() {
    const facts = siteResourceConfig.homepageFactsGallery;

    return `
      <div class="site-facts-gallery-shell">
        <div class="site-facts-rotor">
          <div class="site-facts-ring" role="list" style="--fact-count:${facts.length}">
            ${facts.map((fact, index) => buildHomepageFactCardMarkup(fact, index)).join("")}
          </div>
          <div class="site-facts-rotor-shadow" aria-hidden="true"></div>
        </div>
      </div>
    `;
  }

  function initializeHomepageFactsGallery(attempt = 0) {
    if (currentPath !== "index.html") {
      return;
    }

    if (document.querySelector("[data-site-facts-gallery-mounted='true']")) {
      return;
    }

    const factsHost = Array.from(document.querySelectorAll(".uzhnaq-es2yhr")).find((section) => {
      if (!(section instanceof HTMLElement) || !isRenderable(section)) {
        return false;
      }

      const heading = extractText(section.querySelector("h1, h2, h3, h4, p"));
      return /trusted by 150\+ clients worldwide/i.test(heading);
    });

    if (!(factsHost instanceof HTMLElement)) {
      if (attempt < 8) {
        window.setTimeout(() => initializeHomepageFactsGallery(attempt + 1), 120);
      }
      return;
    }

    const sourceGrid = factsHost.querySelector(".uzhnaq-z4ble0");
    if (!(sourceGrid instanceof HTMLElement)) {
      return;
    }

    factsHost.classList.add("site-facts-host");
    sourceGrid.classList.add("site-facts-source-hidden");

    const gallery = document.createElement("div");
    gallery.className = "site-facts-gallery";
    gallery.dataset.siteFactsGalleryMounted = "true";
    gallery.innerHTML = buildHomepageFactsGalleryMarkup();
    sourceGrid.insertAdjacentElement("afterend", gallery);

    const factsRing = gallery.querySelector(".site-facts-ring");
    const factCards = Array.from(gallery.querySelectorAll(".site-fact-card"));

    if (factsRing instanceof HTMLElement) {
      factCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          factsRing.classList.add("is-paused");
        });

        card.addEventListener("mouseleave", () => {
          factsRing.classList.remove("is-paused");
        });
      });
    }
  }

  function initializeHomepageVideoGallery(attempt = 0) {
    if (currentPath !== "index.html") {
      return;
    }

    if (document.querySelector("[data-site-video-gallery-mounted='true']")) {
      return;
    }

    const visibleCarousel = Array.from(document.querySelectorAll(".static-tech-carousel")).find((section) =>
      isRenderable(section),
    );

    if (!(visibleCarousel instanceof HTMLElement)) {
      if (attempt < 8) {
        window.setTimeout(() => initializeHomepageVideoGallery(attempt + 1), 120);
      }
      return;
    }

    const gallerySection = document.createElement("section");
    gallerySection.className = "site-video-gallery-section";
    gallerySection.id = "site-video-gallery-section";
    gallerySection.dataset.siteVideoGalleryMounted = "true";
    gallerySection.innerHTML = buildVideoGalleryMarkup();
    visibleCarousel.insertAdjacentElement("afterend", gallerySection);

    const frameSlot = gallerySection.querySelector("[data-site-video-gallery-frame]");
    const titleNode = gallerySection.querySelector("[data-site-video-gallery-title]");
    const copyNode = gallerySection.querySelector("[data-site-video-gallery-copy]");
    const cards = Array.from(gallerySection.querySelectorAll("[data-site-video-card]"));

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const videoId = card.getAttribute("data-video-id") || "";
        const videoTitle = card.getAttribute("data-video-title") || "";
        const videoCopy = card.getAttribute("data-video-copy") || "";

        if (!(frameSlot instanceof HTMLElement) || !videoId || !videoTitle) {
          return;
        }

        frameSlot.innerHTML = buildYouTubeEmbed({
          id: videoId,
          title: videoTitle,
        });

        if (titleNode instanceof HTMLElement) {
          titleNode.textContent = videoTitle;
        }

        if (copyNode instanceof HTMLElement) {
          copyNode.textContent = videoCopy;
        }

        cards.forEach((item) => {
          const isActive = item === card;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
      });
    });
  }

  function initializeHomepageSocialHub(attempt = 0) {
    if (currentPath !== "index.html") {
      return;
    }

    if (document.querySelector("[data-site-social-hub-mounted='true']")) {
      return;
    }

    const visibleTestimonials = Array.from(document.querySelectorAll('[data-uzhnaq-name="Testimonials"]')).find(
      (section) => section instanceof HTMLElement && isRenderable(section),
    );

    if (!(visibleTestimonials instanceof HTMLElement)) {
      if (attempt < 8) {
        window.setTimeout(() => initializeHomepageSocialHub(attempt + 1), 120);
      }
      return;
    }

    const insertionAnchor = visibleTestimonials.closest(".ssr-variant") || visibleTestimonials;
    if (!(insertionAnchor instanceof HTMLElement)) {
      return;
    }

    const socialHubSection = document.createElement("section");
    socialHubSection.className = "site-social-hub-section";
    socialHubSection.id = "site-social-hub-section";
    socialHubSection.dataset.siteSocialHubMounted = "true";
    socialHubSection.innerHTML = buildHomepageSocialHubMarkup();
    insertionAnchor.insertAdjacentElement("afterend", socialHubSection);
  }

  function getVisibleRoot() {
    return document.querySelector("[data-uzhnaq-root]") || document.getElementById("main") || document.body;
  }

  function getDirectChild(root, descendant) {
    let current = descendant;
    while (current && current.parentElement && current.parentElement !== root) {
      current = current.parentElement;
    }
    return current && current.parentElement === root ? current : null;
  }

  function decorateHeaderNavigation() {
    document.querySelectorAll('nav[data-uzhnaq-name] [data-uzhnaq-name="Links"] a.uzhnaq-text').forEach((link) => {
      link.classList.add("site-nav-link");
      const shell =
        link.closest('[data-uzhnaq-name="Inline Link"]') ||
        link.closest('[data-uzhnaq-component-type="RichTextContainer"]');
      shell?.classList.add("site-nav-item-shell");
    });

    Object.values(dropdownGroups).forEach((config) => {
      document.querySelectorAll(`[id="${config.triggerId}"]`).forEach((trigger) => {
        trigger.classList.add("site-nav-trigger", "site-nav-item-shell");
      });
    });
  }

  function highlightActiveLinks() {
    document.querySelectorAll("a.uzhnaq-text").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/^\.\//, "");
      if (link.getAttribute("data-uzhnaq-page-link-current") === "true" || href === currentPath) {
        link.classList.add("active-uzhnaq-link");
        link.classList.add("site-nav-current");
        link.closest(".site-nav-item-shell")?.classList.add("site-nav-current");
      }
    });

    const triggerHighlightMap = {
      "about.html": "undefined-1njxbrf",
      "products.html": "undefined-14p26ei",
    };
    const activeTriggerId = triggerHighlightMap[currentPath];
    if (!activeTriggerId) {
      return;
    }

    document.querySelectorAll(`[id="${activeTriggerId}"]`).forEach((trigger) => {
      trigger.classList.add("active-uzhnaq-link");
      trigger.classList.add("site-nav-current");
      trigger.querySelectorAll(".uzhnaq-text").forEach((node) => {
        node.classList.add("active-uzhnaq-link");
      });
    });
  }

  function initializeDropdowns() {
    Object.entries(dropdownGroups).forEach(([label, config]) => {
      document.querySelectorAll(`[id="${config.triggerId}"]`).forEach((trigger) => {
        if (trigger.dataset.dropdownReady === "true") {
          return;
        }

        trigger.dataset.dropdownReady = "true";
        trigger.classList.add("has-premium-dropdown");
        trigger.setAttribute("tabindex", "0");
        trigger.setAttribute("role", "button");
        trigger.setAttribute("aria-haspopup", "true");
        trigger.setAttribute("aria-expanded", "false");

        const dropdown = document.createElement("div");
        dropdown.className = "premium-dropdown";
        dropdown.dataset.placement = "bottom";
        dropdown.innerHTML = `
          <div class="dropdown-header">
            <span class="dropdown-eyebrow">${label}</span>
            <p class="dropdown-lead">${config.lead}</p>
          </div>
          <ul class="dropdown-list">
            ${config.items
              .map(
                (item) => `
                  <li>
                    <a href="${item.href}" class="dropdown-item">
                      <span class="dropdown-item-copy">
                        <span class="dropdown-item-title">${item.title}</span>
                        <span class="dropdown-item-subtitle">${item.subtitle}</span>
                      </span>
                      <span class="dropdown-item-arrow" aria-hidden="true">&#8594;</span>
                    </a>
                  </li>
                `,
              )
              .join("")}
          </ul>
        `;

        document.body.appendChild(dropdown);

        const positionDropdown = () => {
          const rect = trigger.getBoundingClientRect();
          const dropdownWidth = dropdown.offsetWidth || 320;
          const dropdownHeight = dropdown.offsetHeight || 260;
          const maxLeft = window.innerWidth - dropdownWidth - 12;
          const centeredLeft = rect.left + rect.width / 2 - dropdownWidth / 2;
          const left = Math.min(Math.max(12, centeredLeft), Math.max(12, maxLeft));
          const preferredTop = rect.bottom + 4;
          const fitsBelow = preferredTop + dropdownHeight < window.innerHeight - 12;
          const top = fitsBelow ? preferredTop : Math.max(12, rect.top - dropdownHeight - 10);

          dropdown.style.left = `${left}px`;
          dropdown.style.top = `${top}px`;
          dropdown.dataset.placement = fitsBelow ? "bottom" : "top";
        };

        const showDropdown = () => {
          dropdown.classList.add("visible");
          trigger.setAttribute("aria-expanded", "true");
          positionDropdown();
        };

        const hideDropdownNow = () => {
          dropdown.classList.remove("visible");
          trigger.setAttribute("aria-expanded", "false");
        };

        const hideDropdown = () => {
          hideDropdownNow();
        };

        if (prefersHover) {
          trigger.addEventListener("pointerenter", showDropdown);
          trigger.addEventListener("pointerleave", hideDropdown);
          dropdown.addEventListener("pointerenter", showDropdown);
          dropdown.addEventListener("pointerleave", hideDropdown);
        }

        trigger.addEventListener("focusin", showDropdown);
        trigger.addEventListener("focusout", hideDropdown);
        trigger.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (dropdown.classList.contains("visible")) {
              hideDropdownNow();
            } else {
              showDropdown();
            }
          }

          if (event.key === "Escape") {
            hideDropdownNow();
          }
        });

        trigger.addEventListener("click", (event) => {
          if (prefersHover) {
            return;
          }

          event.preventDefault();
          if (dropdown.classList.contains("visible")) {
            hideDropdownNow();
          } else {
            showDropdown();
          }
        });

        document.addEventListener("click", (event) => {
          if (!dropdown.contains(event.target) && !trigger.contains(event.target)) {
            hideDropdownNow();
          }
        });

        window.addEventListener("resize", () => {
          if (dropdown.classList.contains("visible")) {
            positionDropdown();
          }
        });

        window.addEventListener(
          "scroll",
          () => {
            if (dropdown.classList.contains("visible")) {
              positionDropdown();
            }
          },
          true,
        );
      });
    });
  }

  function resolveEnquiryEndpoint() {
    const configuredEndpoint =
      window.UZHNAQ_ENQUIRY_API ||
      document.querySelector('meta[name="uzhnaq-enquiry-api"]')?.getAttribute("content") ||
      document.documentElement?.getAttribute("data-uzhnaq-enquiry-api") ||
      document.body?.getAttribute("data-uzhnaq-enquiry-api") ||
      "";

    if (configuredEndpoint) {
      try {
        return new URL(configuredEndpoint, window.location.href).toString();
      } catch (_error) {
        return configuredEndpoint;
      }
    }

    if (isFileProtocol) {
      return "http://127.0.0.1:3001/api/enquiry";
    }

    if (pageOrigin) {
      try {
        return new URL("./api/enquiry", window.location.href).toString();
      } catch (_error) {
        return `${pageOrigin}/api/enquiry`;
      }
    }

    return "/api/enquiry";
  }

  function isEnquiryForm(form) {
    return (
      form instanceof HTMLFormElement &&
      Boolean(form.querySelector('input[name="Name"]:not([type="hidden"])')) &&
      Boolean(form.querySelector('input[name="Email"]:not([type="hidden"])')) &&
      Boolean(form.querySelector('textarea[name="Ask us anything!"]'))
    );
  }

  function getEnquiryFields(form) {
    return {
      name: form.querySelector('input[name="Name"]:not([type="hidden"])'),
      email: form.querySelector('input[name="Email"]:not([type="hidden"])'),
      message: form.querySelector('textarea[name="Ask us anything!"]'),
      phone:
        form.querySelector('input[name="Phone"]:not([type="hidden"])') ||
        form.querySelector('input[name="phone"]:not([type="hidden"])') ||
        form.querySelector('input[name="Telephone"]:not([type="hidden"])') ||
        form.querySelector('input[name="Mobile"]:not([type="hidden"])'),
      company:
        form.querySelector('input[name="Company"]:not([type="hidden"])') ||
        form.querySelector('input[name="company"]:not([type="hidden"])'),
      subject:
        form.querySelector('input[name="Subject"]:not([type="hidden"])') ||
        form.querySelector('input[name="subject"]:not([type="hidden"])'),
      preferredContact:
        form.querySelector('select[name="preferredContact"]') ||
        form.querySelector('input[name="preferredContact"]:checked') ||
        form.querySelector('input[name="Preferred Contact"]:checked'),
      honeypot:
        form.querySelector('input[name="website"]') ||
        form.querySelector('input[name="webSite"]') ||
        form.querySelector('input[name="companyWebsite"]') ||
        form.querySelector('input[name="urlField"]'),
      submit: form.querySelector('button[type="submit"], input[type="submit"]'),
    };
  }

  function createEnquiryStatus(form, submitControl) {
    const status = document.createElement("div");
    status.className = "enquiry-form-status";
    status.hidden = true;
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    if (submitControl?.parentElement && submitControl.parentElement !== form) {
      submitControl.parentElement.insertAdjacentElement("afterend", status);
      return status;
    }

    form.appendChild(status);
    return status;
  }

  function setEnquiryStatus(statusNode, tone, message) {
    statusNode.hidden = !message;
    statusNode.className = "enquiry-form-status";
    statusNode.textContent = message || "";

    if (!message) {
      return;
    }

    statusNode.classList.add("is-visible", `is-${tone}`);
  }

  function clearEnquiryErrors(fields) {
    Object.values(fields).forEach((field) => {
      if (!(field instanceof HTMLElement)) {
        return;
      }

      field.removeAttribute("data-enquiry-invalid");
      field.removeAttribute("aria-invalid");
    });
  }

  function applyEnquiryErrors(fields, errors = {}) {
    Object.entries(errors).forEach(([fieldName]) => {
      const field = fields[fieldName];
      if (!(field instanceof HTMLElement)) {
        return;
      }

      field.setAttribute("data-enquiry-invalid", "true");
      field.setAttribute("aria-invalid", "true");
    });
  }

  function setEnquirySubmitting(form, submitControl, isSubmitting) {
    form.dataset.enquiryLoading = String(isSubmitting);

    if (!(submitControl instanceof HTMLElement)) {
      return;
    }

    submitControl.toggleAttribute("disabled", isSubmitting);

    if (submitControl instanceof HTMLButtonElement) {
      submitControl.dataset.defaultLabel ||= submitControl.textContent?.trim() || "Submit";
      submitControl.textContent = isSubmitting ? "Sending..." : submitControl.dataset.defaultLabel;
      return;
    }

    if (submitControl instanceof HTMLInputElement) {
      submitControl.dataset.defaultLabel ||= submitControl.value || "Submit";
      submitControl.value = isSubmitting ? "Sending..." : submitControl.dataset.defaultLabel;
    }
  }

  function readFieldValue(field) {
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement ||
      field instanceof HTMLSelectElement
    ) {
      return field.value.trim();
    }

    return "";
  }

  function buildEnquiryPayload(fields) {
    return {
      name: readFieldValue(fields.name),
      email: readFieldValue(fields.email),
      phone: readFieldValue(fields.phone),
      company: readFieldValue(fields.company),
      subject: readFieldValue(fields.subject) || `Website enquiry from ${currentPath}`,
      message: readFieldValue(fields.message),
      page: window.location.href || currentPath,
      preferredContact: readFieldValue(fields.preferredContact) || "Email",
      website: readFieldValue(fields.honeypot),
    };
  }

  async function parseResponseBody(response) {
    const responseText = await response.text();
    if (!responseText) {
      return null;
    }

    try {
      return JSON.parse(responseText);
    } catch (_error) {
      return null;
    }
  }

  function getErrorSummary(message, errors = {}) {
    const firstFieldMessage = Object.values(errors).find(Boolean);
    return firstFieldMessage || message || "Please review the enquiry form and try again.";
  }

  function initializeEnquiryForms() {
    const endpoint = resolveEnquiryEndpoint();
    document.querySelectorAll("form").forEach((form) => {
      if (!isEnquiryForm(form) || form.dataset.enquiryReady === "true") {
        return;
      }

      form.dataset.enquiryReady = "true";
      form.setAttribute("novalidate", "true");

      const fields = getEnquiryFields(form);
      const statusNode = createEnquiryStatus(form, fields.submit);

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        clearEnquiryErrors(fields);
        setEnquiryStatus(statusNode, "pending", "Sending your enquiry...");
        setEnquirySubmitting(form, fields.submit, true);

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(buildEnquiryPayload(fields)),
          });

          const data = await parseResponseBody(response);

          if (!response.ok || !data?.ok) {
            const errors = data?.errors || {};
            applyEnquiryErrors(fields, errors);
            setEnquiryStatus(statusNode, "error", getErrorSummary(data?.message, errors));
            return;
          }

          form.reset();
          clearEnquiryErrors(fields);
          setEnquiryStatus(statusNode, "success", data.message || "Enquiry sent successfully.");
        } catch (_error) {
          const fallbackMessage = isFileProtocol
            ? "The enquiry backend is not reachable. Start the server and try again."
            : "Unable to send your enquiry right now. Please try again shortly.";
          setEnquiryStatus(statusNode, "error", fallbackMessage);
        } finally {
          setEnquirySubmitting(form, fields.submit, false);
        }
      });
    });
  }

  

  

  

  

  

  

  
});
