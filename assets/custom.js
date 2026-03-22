document.addEventListener("DOMContentLoaded", () => {
  const currentPath = (
    window.location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();
  const isAboutPage = currentPath === "about.html";
  const isExperimentHomepage = currentPath === "index-experiment.html";
  const homepagePaths = new Set(["index.html", "index-experiment.html"]);
  const isHomepageLike = homepagePaths.has(currentPath);
  const shouldMountHomepageTitleAccent = currentPath === "index.html";
  const shouldMountHomepageInjectedSections =
    isHomepageLike && !isExperimentHomepage;
  const prefersHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const isFileProtocol = window.location.protocol === "file:";
  const pageOrigin = /^https?:/i.test(window.location.origin || "")
    ? window.location.origin
    : "";
  const siteResourceConfig = {
    brochure: {
      viewUrl:
        "https://drive.google.com/file/d/1TUeSqrF_R89I4VUyZLpKcrgpXgdqXuC4/view?usp=drivesdk",
      downloadUrl:
        "https://drive.google.com/uc?export=download&id=1TUeSqrF_R89I4VUyZLpKcrgpXgdqXuC4",
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
        description:
          "A concise introduction to UZHNAQ Technology, our capabilities, and the precision mindset behind every component.",
      },
      {
        id: "mhKvjHgMpLw",
        title: "Factory Highlights",
        eyebrow: "Factory Tour",
        description:
          "A closer look at the production environment, machinery, and the manufacturing discipline that powers our exports.",
      },
      {
        id: "IzcgKQa2tWQ",
        title: "Heat Treatment",
        eyebrow: "Process Focus",
        description:
          "See how advanced heat-treatment capabilities strengthen durability, consistency, and performance in critical parts.",
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
        image: "./assets/source/machines/021.png",
        imageAlt: "Heat-treatment line at UZHNAQ",
      },
      instagramPosts: [
        {
          shortcode: "DRORgo8D6tN",
          label: "Workshop Update",
          caption:
            "Transmission, reverse engineering, and gear development from the latest shop-floor post.",
          image: "./assets/source/general/close-up-metallic-gear.jpg",
          imageAlt: "Close-up of precision gears on a dark surface",
        },
        {
          shortcode: "DD_YGHVvSUI",
          label: "Component Spotlight",
          caption:
            "A recent production snapshot showing precision-machined components ready for the next stage.",
          image: "./assets/source/general/DSC02783.JPG",
          imageAlt: "Precision-machined gear components",
        },
        {
          shortcode: "DByBsQbPqGv",
          label: "Team Update",
          caption:
            "A recent company update shared through the official Instagram profile.",
          image: "./assets/source/general/DSC02800.JPG",
          imageAlt: "UZHNAQ team on the shop floor",
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
        image: "./assets/source/general/DSC02800.JPG",
        imageAlt: "UZHNAQ workforce group photo",
        imageFit: "cover",
        imagePosition: "center 26%",
        imagePadding: "0",
        imageScale: "1.1",
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
        image: "./assets/source/general/DSC02747.JPG",
        imageAlt: "Finished precision gears prepared for global export orders",
        imageFit: "cover",
        imagePadding: "0",
        imagePosition: "center",
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
        image: "./assets/source/machines/021.png",
        imageAlt: "Glowing components moving through the heat treatment line",
        imageFit: "cover",
        imagePadding: "0",
        imagePosition: "center 46%",
        imageScale: "1.06",
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
        {
          title: "Our Mission",
          subtitle: "What drives the company",
          href: "./about.html#mission",
        },
        {
          title: "Our Vision",
          subtitle: "Where we are heading",
          href: "./about.html#vision",
        },
        {
          title: "Our Promise",
          subtitle: "Quality and delivery standards",
          href: "./about.html#promise",
        },
        {
          title: "Leadership Team",
          subtitle: "Meet the people behind UZHNAQ",
          href: "./about.html#team",
        },
      ],
    },
    Products: {
      triggerId: "undefined-14p26ei",
      lead: "Jump directly to core drivetrain and transmission components.",
      items: [
        {
          title: "Main Drive",
          subtitle: "Heavy-duty gear systems",
          href: "./products.html#maindrive",
        },
        {
          title: "Differential Gear",
          subtitle: "Balanced torque transfer",
          href: "./products.html#differentialgear",
        },
        {
          title: "Planet Gear",
          subtitle: "Compact power distribution",
          href: "./products.html#planetgear",
        },
        {
          title: "Synchro Assembly",
          subtitle: "Smooth shifting components",
          href: "./products.html#synchroassembly",
        },
      ],
    },
  };
  let footerAnchorSyncRegistered = false;
  const responsiveNavBreakpoint = window.matchMedia("(max-width: 1199px)");
  let responsiveFoundationRefreshQueued = false;
  let responsiveFoundationListenersRegistered = false;
  const responsiveDropdownStates = [];
  let responsiveDropdownGlobalsRegistered = false;
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
  const industriesShowcaseCards = [
    {
      title: "Automotive",
      eyebrow: "Powertrain",
      copy: "Precision gears and shafts for driveline assemblies, tooling, and high-repeatability automotive production systems.",
    },
    {
      title: "Electric Vehicles",
      eyebrow: "E-Mobility",
      copy: "Compact, accuracy-driven components for EV transmissions, charging hardware, and next-generation mobility platforms.",
    },
    {
      title: "Heavy & Light Duty Vehicles",
      eyebrow: "Commercial",
      copy: "Durable parts engineered for demanding torque loads across trucks, utility vehicles, and transport fleets.",
    },
    {
      title: "Material Handling",
      eyebrow: "Industrial Flow",
      copy: "Reliable motion components for conveyors, lifting systems, warehouse automation, and shop-floor logistics.",
    },
    {
      title: "Oil & Gas",
      eyebrow: "Harsh Duty",
      copy: "Robust drivetrain-ready parts suited to pump systems, process equipment, and tough operating environments.",
    },
    {
      title: "Agriculture",
      eyebrow: "Field Equipment",
      copy: "Dependable gearing for tillage, harvesting, and off-road machinery where uptime and torque consistency matter.",
    },
    {
      title: "Construction",
      eyebrow: "High Load",
      copy: "Heavy-duty engineered components for mixers, compactors, earthmoving support systems, and site equipment.",
    },
    {
      title: "Railway Sector",
      eyebrow: "Transit",
      copy: "Precision-machined parts aligned to railway and mobility applications that demand repeatability and long service life.",
    },
  ];
  const machinesOverviewHighlights = [
    "Responsive machine catalogue coming soon",
    "Clearer machine groups and process coverage",
    "Faster path to brochure and enquiry actions",
  ];
  const aboutHeroShowcaseSlides = [
    {
      id: "group-team",
      image: "./assets/source/general/DSC02800.JPG",
      imageAlt: "UZHNAQ workforce group photo",
      imagePositionDesktop: "center 22%",
      imagePositionMobile: "center 18%",
      imageScaleDesktop: "1.045",
      imageScaleMobile: "1.08",
      imageScaleEndDesktop: "1",
      imageScaleEndMobile: "1.03",
      focusX: "74%",
      focusY: "24%",
      tint: "rgba(221, 243, 68, 0.14)",
      edgeGlow: "rgba(120, 202, 255, 0.18)",
    },
    {
      id: "worker-assembly",
      image: "./assets/source/general/DSC02714.JPG",
      imageAlt: "Worker assembling precision gears",
      imagePositionDesktop: "center 20%",
      imagePositionMobile: "center 16%",
      imageScaleDesktop: "1.06",
      imageScaleMobile: "1.12",
      imageScaleEndDesktop: "1.015",
      imageScaleEndMobile: "1.06",
      focusX: "68%",
      focusY: "28%",
      tint: "rgba(221, 243, 68, 0.12)",
      edgeGlow: "rgba(255, 255, 255, 0.12)",
    },
    {
      id: "worker-inspection",
      image: "./assets/source/general/DSC02695.JPG",
      imageAlt: "Worker inspecting a precision component",
      imagePositionDesktop: "center 18%",
      imagePositionMobile: "center 16%",
      imageScaleDesktop: "1.05",
      imageScaleMobile: "1.11",
      imageScaleEndDesktop: "1.01",
      imageScaleEndMobile: "1.05",
      focusX: "72%",
      focusY: "26%",
      tint: "rgba(95, 176, 255, 0.14)",
      edgeGlow: "rgba(126, 215, 255, 0.14)",
    },
    {
      id: "worker-machine",
      image: "./assets/source/general/DSC02687.JPG",
      imageAlt: "Worker operating machining equipment",
      imagePositionDesktop: "center 24%",
      imagePositionMobile: "center 20%",
      imageScaleDesktop: "1.05",
      imageScaleMobile: "1.1",
      imageScaleEndDesktop: "1.01",
      imageScaleEndMobile: "1.04",
      focusX: "66%",
      focusY: "30%",
      tint: "rgba(255, 255, 255, 0.1)",
      edgeGlow: "rgba(0, 111, 220, 0.14)",
    },
    {
      id: "worker-bench",
      image: "./assets/source/general/DSC02702.JPG",
      imageAlt: "Worker handling a gear assembly at the workbench",
      imagePositionDesktop: "center 18%",
      imagePositionMobile: "center 16%",
      imageScaleDesktop: "1.05",
      imageScaleMobile: "1.1",
      imageScaleEndDesktop: "1.01",
      imageScaleEndMobile: "1.05",
      focusX: "70%",
      focusY: "28%",
      tint: "rgba(221, 243, 68, 0.12)",
      edgeGlow: "rgba(255, 255, 255, 0.12)",
    },
  ];
  const aboutHeroShowcaseControllers = new WeakMap();
  const aboutHeroSlideDurationMs = 6500;
  let aboutHeroShowcaseStartTime = null;

  decorateHeaderNavigation();
  highlightActiveLinks();
  initializeDropdowns();
  initializeEnquiryForms();
  syncHomepageHeroContentPolish();
  syncHomepageHeroMachine();
  initializeFooterEnhancements();
  initializeHomepageHeroBrochureCtas();
  initializeAboutHeroShowcase();
  if (shouldMountHomepageInjectedSections) {
    initializeHomepageFactsGallery();
    initializeHomepageVideoGallery();
    initializeHomepageSocialHub();
  }
  initializeResponsiveFoundation();

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

  function polarToCartesian(cx, cy, radius, angle) {
    return {
      x: Number((cx + Math.cos(angle) * radius).toFixed(2)),
      y: Number((cy + Math.sin(angle) * radius).toFixed(2)),
    };
  }

  function buildGearOutlinePath({
    cx,
    cy,
    outerRadius,
    coreRadius,
    toothCount,
    toothDepth,
  }) {
    const rootRadius = outerRadius - toothDepth;
    const toothStep = (Math.PI * 2) / toothCount;
    let d = "";

    for (let index = 0; index < toothCount; index += 1) {
      const startAngle = index * toothStep - Math.PI / 2;
      const points = [
        polarToCartesian(cx, cy, rootRadius, startAngle),
        polarToCartesian(cx, cy, outerRadius, startAngle + toothStep * 0.22),
        polarToCartesian(cx, cy, outerRadius, startAngle + toothStep * 0.52),
        polarToCartesian(cx, cy, rootRadius, startAngle + toothStep * 0.82),
      ];

      d += `${index === 0 ? "M" : "L"} ${points[0].x} ${points[0].y}`;
      d += ` L ${points[1].x} ${points[1].y}`;
      d += ` L ${points[2].x} ${points[2].y}`;
      d += ` L ${points[3].x} ${points[3].y}`;
    }

    d += " Z";
    d += ` M ${cx + coreRadius} ${cy}`;
    d += ` A ${coreRadius} ${coreRadius} 0 1 0 ${cx - coreRadius} ${cy}`;
    d += ` A ${coreRadius} ${coreRadius} 0 1 0 ${cx + coreRadius} ${cy} Z`;

    return d;
  }

  function buildGearSpokesMarkup({ cx, cy, coreRadius, spokes, spokeOrbit }) {
    const spokeWidth = Math.max(14, Math.round(coreRadius * 0.62));
    const capRadius = Number(Math.max(spokeWidth * 0.72, 14).toFixed(2));
    const armTop = Number((cy - spokeOrbit + capRadius * 0.2).toFixed(2));
    const armBottom = Number((cy - (coreRadius + 8)).toFixed(2));
    const armHeight = Number(Math.max(armBottom - armTop, 26).toFixed(2));
    const spokeX = Number((cx - spokeWidth / 2).toFixed(2));
    const highlightX = Number((cx - spokeWidth * 0.16).toFixed(2));
    const capY = Number((cy - spokeOrbit).toFixed(2));
    const armCenterX = cx.toFixed(2);

    return Array.from({ length: spokes })
      .map((_, index) => {
        const angle = (360 / spokes) * index;
        return `
          <g
            class="site-home-hero-machine-spoke-assembly"
            transform="rotate(${angle.toFixed(2)} ${cx} ${cy})"
          >
            <circle
              class="site-home-hero-machine-spoke-cap"
              cx="${cx}"
              cy="${capY}"
              r="${capRadius}"
            ></circle>
            <rect
              class="site-home-hero-machine-spoke"
              x="${spokeX}"
              y="${armTop}"
              width="${spokeWidth}"
              height="${armHeight}"
              rx="${Math.max(spokeWidth / 2, 9).toFixed(2)}"
            ></rect>
            <path
              class="site-home-hero-machine-spoke-highlight"
              d="M ${armCenterX} ${(armTop + 7).toFixed(2)} L ${armCenterX} ${(armTop + armHeight - 8).toFixed(2)}"
            ></path>
            <path
              class="site-home-hero-machine-spoke-shadow"
              d="M ${highlightX} ${(armTop + 9).toFixed(2)} L ${highlightX} ${(armTop + armHeight - 10).toFixed(2)}"
            ></path>
          </g>
        `;
      })
      .join("");
  }

  function buildGearBoltsMarkup({ cx, cy, bolts, boltOrbit }) {
    return Array.from({ length: bolts })
      .map((_, index) => {
        const angle = -Math.PI / 2 + (index / bolts) * Math.PI * 2;
        const point = polarToCartesian(cx, cy, boltOrbit, angle);
        return `
          <g class="site-home-hero-machine-bolt">
            <circle cx="${point.x}" cy="${point.y}" r="7.5"></circle>
            <circle cx="${point.x}" cy="${point.y}" r="3.2"></circle>
          </g>
        `;
      })
      .join("");
  }

  function buildHomepageHeroGearMarkup(config) {
    const outlinePath = buildGearOutlinePath(config);
    const ringRadius = Math.max(
      config.coreRadius + 18,
      config.outerRadius - config.toothDepth - 16,
    );
    const secondaryRingRadius = Math.max(config.coreRadius + 12, ringRadius - 28);
    const accentRadius = Math.max(config.coreRadius + 10, secondaryRingRadius - 26);
    const boltOrbit = Math.max(config.coreRadius + 24, secondaryRingRadius - 8);
    const faceRadius = Number((ringRadius - 7).toFixed(2));
    const innerFaceRadius = Number((secondaryRingRadius - 8).toFixed(2));
    const outerHighlightRadius = Number((config.outerRadius - 9).toFixed(2));
    const neonOuterRadius = Number((outerHighlightRadius - 10).toFixed(2));
    const neonInnerRadius = Number((Math.max(config.coreRadius + 28, secondaryRingRadius - 24)).toFixed(2));
    const reflectionRadiusX = Number((config.outerRadius * 0.72).toFixed(2));
    const reflectionRadiusY = Number((config.outerRadius * 0.28).toFixed(2));
    const reflectionCx = Number((config.cx - config.outerRadius * 0.1).toFixed(2));
    const reflectionCy = Number((config.cy - config.outerRadius * 0.24).toFixed(2));
    const shadowCx = Number((config.cx + config.outerRadius * 0.08).toFixed(2));
    const shadowCy = Number((config.cy + config.outerRadius * 0.1).toFixed(2));
    const shadowRadius = Number((config.outerRadius * 0.9).toFixed(2));

    return `
      <g class="site-home-hero-machine-gear ${config.className}">
        <circle
          class="site-home-hero-machine-gear-shadow-disc"
          cx="${shadowCx}"
          cy="${shadowCy}"
          r="${shadowRadius}"
        ></circle>
        <path
          class="site-home-hero-machine-gear-body"
          fill-rule="evenodd"
          d="${outlinePath}"
        ></path>
        <circle
          class="site-home-hero-machine-gear-face"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${faceRadius}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-face-inner"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${innerFaceRadius}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-ring"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${ringRadius}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-ring site-home-hero-machine-gear-ring--secondary"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${secondaryRingRadius}"
        ></circle>
        ${buildGearSpokesMarkup({
          cx: config.cx,
          cy: config.cy,
          coreRadius: accentRadius,
          spokes: config.spokes,
          spokeOrbit: boltOrbit,
        })}
        ${buildGearBoltsMarkup({
          cx: config.cx,
          cy: config.cy,
          bolts: config.spokes,
          boltOrbit,
        })}
        <circle
          class="site-home-hero-machine-gear-hub"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${config.coreRadius + 6}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-hub-cap"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${Math.max(12, config.coreRadius * 0.56).toFixed(2)}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-pulse"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${Math.max(config.coreRadius + 16, secondaryRingRadius - 12).toFixed(
            2,
          )}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-highlight-ring"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${outerHighlightRadius}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-neon-ring site-home-hero-machine-gear-neon-ring--outer"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${neonOuterRadius}"
        ></circle>
        <circle
          class="site-home-hero-machine-gear-neon-ring site-home-hero-machine-gear-neon-ring--inner"
          cx="${config.cx}"
          cy="${config.cy}"
          r="${neonInnerRadius}"
        ></circle>
        <ellipse
          class="site-home-hero-machine-gear-reflection"
          cx="${reflectionCx}"
          cy="${reflectionCy}"
          rx="${reflectionRadiusX}"
          ry="${reflectionRadiusY}"
          transform="rotate(-18 ${config.cx} ${config.cy})"
        ></ellipse>
        <ellipse
          class="site-home-hero-machine-gear-reflection site-home-hero-machine-gear-reflection--inner"
          cx="${reflectionCx}"
          cy="${Number((reflectionCy + config.outerRadius * 0.1).toFixed(2))}"
          rx="${Number((reflectionRadiusX * 0.72).toFixed(2))}"
          ry="${Number((reflectionRadiusY * 0.58).toFixed(2))}"
          transform="rotate(-18 ${config.cx} ${config.cy})"
        ></ellipse>
      </g>
    `;
  }

  function buildHomepageHeroMachineMarkup() {
    const gearConfigs = [
      {
        className: "site-home-hero-machine-gear--alpha",
        cx: 736,
        cy: 274,
        outerRadius: 176,
        coreRadius: 46,
        toothCount: 20,
        toothDepth: 24,
        spokes: 6,
        bolts: 5,
      },
      {
        className: "site-home-hero-machine-gear--gamma",
        cx: 544,
        cy: 500,
        outerRadius: 134,
        coreRadius: 36,
        toothCount: 17,
        toothDepth: 18,
        spokes: 5,
        bolts: 5,
      },
      {
        className: "site-home-hero-machine-gear--delta",
        cx: 720,
        cy: 736,
        outerRadius: 96,
        coreRadius: 28,
        toothCount: 14,
        toothDepth: 14,
        spokes: 4,
        bolts: 4,
      },
    ];
    const routePaths = [
      "M 544 500 C 610 520 655 561 694 618",
      "M 704 68 L 704 840",
      "M 780 332 C 798 388 792 460 758 548",
    ];
    const routeMarkup = routePaths
      .map(
        (path, index) => `
          <path class="site-home-hero-machine-route" data-home-hero-draw="true" d="${path}"></path>
          <path class="site-home-hero-machine-route-flow site-home-hero-machine-route-flow--${
            (index % 3) + 1
          }" d="${path}"></path>
        `,
      )
      .join("");

    return `
      <div class="site-home-hero-machine" data-site-home-hero-machine-mounted="true">
        <div class="site-home-hero-machine-shell">
          <span class="site-home-hero-machine-ambience site-home-hero-machine-ambience--lime"></span>
          <span class="site-home-hero-machine-ambience site-home-hero-machine-ambience--blue"></span>
          <span class="site-home-hero-machine-sweep"></span>
          <svg
            class="site-home-hero-machine-svg"
            viewBox="0 0 1000 900"
            preserveAspectRatio="xMidYMid slice"
            role="presentation"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="site-home-hero-metal" x1="10%" y1="5%" x2="88%" y2="92%">
                <stop offset="0%" stop-color="#f7fbff"></stop>
                <stop offset="10%" stop-color="#cbd4df"></stop>
                <stop offset="42%" stop-color="#566171"></stop>
                <stop offset="68%" stop-color="#171f29"></stop>
                <stop offset="100%" stop-color="#070a10"></stop>
              </linearGradient>
              <linearGradient id="site-home-hero-metal-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2d3643"></stop>
                <stop offset="34%" stop-color="#151b24"></stop>
                <stop offset="72%" stop-color="#090c12"></stop>
                <stop offset="100%" stop-color="#040608"></stop>
              </linearGradient>
              <radialGradient id="site-home-hero-metal-face" cx="34%" cy="26%" r="78%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96"></stop>
                <stop offset="18%" stop-color="#dbe1eb" stop-opacity="0.96"></stop>
                <stop offset="48%" stop-color="#768292" stop-opacity="0.92"></stop>
                <stop offset="76%" stop-color="#202731" stop-opacity="0.96"></stop>
                <stop offset="100%" stop-color="#0a0d12" stop-opacity="1"></stop>
              </radialGradient>
              <radialGradient id="site-home-hero-metal-face-inner" cx="42%" cy="34%" r="70%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.42"></stop>
                <stop offset="44%" stop-color="#8490a1" stop-opacity="0.18"></stop>
                <stop offset="100%" stop-color="#121820" stop-opacity="0.12"></stop>
              </radialGradient>
              <linearGradient id="site-home-hero-black-oxide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1b232d"></stop>
                <stop offset="38%" stop-color="#0f151d"></stop>
                <stop offset="100%" stop-color="#04070b"></stop>
              </linearGradient>
              <linearGradient id="site-home-hero-brass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fde9ba"></stop>
                <stop offset="18%" stop-color="#f0c974"></stop>
                <stop offset="46%" stop-color="#af8248"></stop>
                <stop offset="100%" stop-color="#3d2a16"></stop>
              </linearGradient>
              <linearGradient id="site-home-hero-gear-neon" x1="8%" y1="0%" x2="92%" y2="100%">
                <stop offset="0%" stop-color="#dff969" stop-opacity="0.95"></stop>
                <stop offset="32%" stop-color="#fbfcff" stop-opacity="0.82"></stop>
                <stop offset="62%" stop-color="#6df8dd" stop-opacity="0.88"></stop>
                <stop offset="100%" stop-color="#4f92ff" stop-opacity="0.94"></stop>
              </linearGradient>
              <linearGradient id="site-home-hero-beam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fbfcff"></stop>
                <stop offset="10%" stop-color="#dff969"></stop>
                <stop offset="38%" stop-color="#7cffd8"></stop>
                <stop offset="66%" stop-color="#1f7cff"></stop>
                <stop offset="100%" stop-color="#fbfcff"></stop>
              </linearGradient>
              <radialGradient id="site-home-hero-glow-lime" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#f5ffbf" stop-opacity="0.92"></stop>
                <stop offset="40%" stop-color="#dff969" stop-opacity="0.42"></stop>
                <stop offset="100%" stop-color="#dff969" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="site-home-hero-glow-blue" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#e2f1ff" stop-opacity="0.8"></stop>
                <stop offset="40%" stop-color="#4f92ff" stop-opacity="0.34"></stop>
                <stop offset="100%" stop-color="#4f92ff" stop-opacity="0"></stop>
              </radialGradient>
              <filter id="site-home-hero-beam-blur" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
              </filter>
              <filter id="site-home-hero-gear-neon-blur" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="4.8"></feGaussianBlur>
              </filter>
            </defs>
              <g class="site-home-hero-machine-stage">
              <g class="site-home-hero-machine-plate-stack" data-home-hero-reveal="true">
                <rect
                  class="site-home-hero-machine-plate site-home-hero-machine-plate--outer"
                  x="434"
                  y="42"
                  width="424"
                  height="812"
                  rx="44"
                ></rect>
                <rect
                  class="site-home-hero-machine-plate site-home-hero-machine-plate--inner"
                  x="484"
                  y="94"
                  width="274"
                  height="674"
                  rx="30"
                ></rect>
                <rect
                  class="site-home-hero-machine-plate site-home-hero-machine-plate--spine"
                  x="670"
                  y="34"
                  width="68"
                  height="830"
                  rx="39"
                ></rect>
                <circle
                  class="site-home-hero-machine-plate-glow site-home-hero-machine-plate-glow--lime"
                  cx="724"
                  cy="278"
                  r="204"
                ></circle>
                <circle
                  class="site-home-hero-machine-plate-glow site-home-hero-machine-plate-glow--blue"
                  cx="718"
                  cy="730"
                  r="138"
                ></circle>
              </g>
              <g class="site-home-hero-machine-structure" data-home-hero-reveal="true">
                <path class="site-home-hero-machine-rail" d="M 326 472 L 494 464"></path>
                <path class="site-home-hero-machine-rail" d="M 332 510 L 478 522"></path>
                <path class="site-home-hero-machine-rail site-home-hero-machine-rail--accent" d="M 826 168 L 826 748"></path>
                <circle class="site-home-hero-machine-bearing" cx="736" cy="274" r="208"></circle>
                <circle class="site-home-hero-machine-bearing" cx="720" cy="736" r="120"></circle>
                <path class="site-home-hero-machine-panel-line" d="M 496 122 L 742 122"></path>
                <path class="site-home-hero-machine-panel-line" d="M 498 422 L 742 422"></path>
                <path class="site-home-hero-machine-panel-line" d="M 500 760 L 738 760"></path>
              </g>
              <g class="site-home-hero-machine-beam" data-home-hero-reveal="true">
                <rect
                  class="site-home-hero-machine-beam-housing"
                  x="672"
                  y="48"
                  width="64"
                  height="808"
                  rx="35"
                ></rect>
                <path class="site-home-hero-machine-beam-sheath site-home-hero-machine-beam-sheath--left" d="M 690 66 L 690 838"></path>
                <path class="site-home-hero-machine-beam-sheath site-home-hero-machine-beam-sheath--right" d="M 718 66 L 718 838"></path>
                <path class="site-home-hero-machine-beam-glow" d="M 704 58 L 704 846"></path>
                <path class="site-home-hero-machine-beam-core" d="M 704 80 L 704 824"></path>
                ${routeMarkup}
              </g>
              ${gearConfigs.map((config) => buildHomepageHeroGearMarkup(config)).join("")}
              <g class="site-home-hero-machine-clamps" data-home-hero-reveal="true">
                <rect class="site-home-hero-machine-clamp-block" x="622" y="98" width="150" height="44" rx="18"></rect>
                <rect class="site-home-hero-machine-clamp-arm site-home-hero-machine-clamp-arm--wide" x="594" y="114" width="206" height="12" rx="6"></rect>
                <rect class="site-home-hero-machine-clamp-block" x="626" y="600" width="148" height="52" rx="22"></rect>
                <rect class="site-home-hero-machine-clamp-arm" x="602" y="620" width="196" height="12" rx="6"></rect>
              </g>
              <g class="site-home-hero-machine-indicators" data-home-hero-reveal="true">
                <circle class="site-home-hero-machine-indicator site-home-hero-machine-indicator--amber" cx="804" cy="152" r="7"></circle>
                <circle class="site-home-hero-machine-indicator site-home-hero-machine-indicator--white" cx="804" cy="178" r="5"></circle>
                <circle class="site-home-hero-machine-indicator site-home-hero-machine-indicator--blue" cx="804" cy="608" r="6"></circle>
              </g>
            </g>
          </svg>
        </div>
      </div>
    `;
  }

  function playHomepageHeroMachineIntro(mount) {
    if (
      !(mount instanceof HTMLElement) ||
      mount.dataset.siteHomeHeroMachineIntroPlayed === "true"
    ) {
      return;
    }

    mount.dataset.siteHomeHeroMachineIntroPlayed = "true";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    mount
      .querySelectorAll("[data-home-hero-reveal='true'], [data-home-hero-reveal]")
      .forEach((node, index) => {
        if (!(node instanceof SVGElement || node instanceof HTMLElement)) {
          return;
        }

        node.animate(
          [
            { opacity: 0, transform: "translateY(18px) scale(0.975)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ],
          {
            duration: 900,
            delay: 80 + index * 90,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards",
          },
        );
      });

    // Measure each SVG trace so the draw reveal always matches the path length.
    mount
      .querySelectorAll("[data-home-hero-draw='true'], [data-home-hero-draw]")
      .forEach((node, index) => {
        if (!(node instanceof SVGPathElement)) {
          return;
        }

        const length = node.getTotalLength();
        node.style.strokeDasharray = `${length.toFixed(2)} ${length.toFixed(2)}`;
        node.style.strokeDashoffset = `${length.toFixed(2)}`;
        node.animate(
          [
            { strokeDashoffset: length, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          {
            duration: 1320,
            delay: 180 + index * 120,
            easing: "cubic-bezier(0.19, 1, 0.22, 1)",
            fill: "forwards",
          },
        );
      });
  }

  function syncHomepageHeroMachine() {
    if (currentPath !== "index.html") {
      return;
    }

    const placeholder = document.querySelector(
      "[data-home-hero-visual-placeholder='true']",
    );

    if (!(placeholder instanceof HTMLElement)) {
      return;
    }

    // Keep the exported hero box intact and only replace the inert visual payload.
    placeholder.classList.add("site-home-hero-machine-mount");

    if (placeholder.dataset.siteHomeHeroMachineMounted !== "true") {
      placeholder.dataset.siteHomeHeroMachineMounted = "true";
      placeholder.innerHTML = buildHomepageHeroMachineMarkup();
    }

    playHomepageHeroMachineIntro(placeholder);
  }

  function syncHomepageHeroContentPolish() {
    if (currentPath !== "index.html") {
      return;
    }

    document
      .querySelectorAll(".uzhnaq-10mrn1k .uzhnaq-text")
      .forEach((node) => {
        if (
          node instanceof HTMLElement &&
          /performace/i.test(node.textContent || "")
        ) {
          node.textContent = "PERFORMANCE";
        }
      });

    document
      .querySelectorAll(".uzhnaq-4t8071, .uzhnaq-l9l7f4")
      .forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.add("site-home-hide-decor");
        }
      });

    document.querySelectorAll(".uzhnaq-1gltdb").forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add("site-home-copy-clean");
      }
    });
  }

  function buildAboutHeroSlideStyle(slide) {
    return [
      `--about-image-position-desktop:${slide.imagePositionDesktop}`,
      `--about-image-position-mobile:${slide.imagePositionMobile}`,
      slide.imageScaleDesktop
        ? `--about-image-scale-desktop:${slide.imageScaleDesktop}`
        : "",
      slide.imageScaleMobile
        ? `--about-image-scale-mobile:${slide.imageScaleMobile}`
        : "",
      slide.imageScaleEndDesktop
        ? `--about-image-scale-end-desktop:${slide.imageScaleEndDesktop}`
        : "",
      slide.imageScaleEndMobile
        ? `--about-image-scale-end-mobile:${slide.imageScaleEndMobile}`
        : "",
      `--about-focus-x:${slide.focusX}`,
      `--about-focus-y:${slide.focusY}`,
      `--about-slide-tint:${slide.tint}`,
      `--about-edge-glow:${slide.edgeGlow}`,
      slide.portraitTilt ? `--about-portrait-tilt:${slide.portraitTilt}` : "",
      slide.portraitWidth
        ? `--about-portrait-width:${slide.portraitWidth}`
        : "",
      slide.portraitRight
        ? `--about-portrait-right:${slide.portraitRight}`
        : "",
      slide.portraitBottom
        ? `--about-portrait-bottom:${slide.portraitBottom}`
        : "",
    ]
      .filter(Boolean)
      .join(";");
  }

  function buildAboutHeroShowcaseMarkup(variant) {
    return `
      <div
        class="site-about-hero-showcase site-about-hero-showcase--${escapeAttribute(variant)}"
        data-site-about-hero-showcase-root="true"
        data-site-about-hero-variant="${escapeAttribute(variant)}"
        data-site-about-hero-slide-index="0"
        aria-hidden="true"
      >
        <div class="site-about-hero-slides">
          ${aboutHeroShowcaseSlides
            .map(
              (slide, index) => `
                <div
                  class="site-about-hero-slide${index === 0 ? " is-active" : ""}"
                  data-site-about-hero-slide="${index}"
                  style="${buildAboutHeroSlideStyle(slide)}"
                >
                  <img
                    class="site-about-hero-slide-image"
                    src="${escapeAttribute(slide.image)}"
                    alt=""
                    ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                    decoding="async"
                  >
                  <span class="site-about-hero-slide-glow" aria-hidden="true"></span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function setActiveAboutHeroSlide(root, nextIndex) {
    if (!(root instanceof HTMLElement)) {
      return;
    }

    const slides = Array.from(
      root.querySelectorAll("[data-site-about-hero-slide]"),
    );

    slides.forEach((slide, index) => {
      if (!(slide instanceof HTMLElement)) {
        return;
      }

      slide.classList.toggle("is-active", index === nextIndex);
      slide.setAttribute("aria-hidden", index === nextIndex ? "false" : "true");
    });

    root.dataset.siteAboutHeroSlideIndex = String(nextIndex);
  }

  function syncAboutHeroProgress(progress) {
    const normalizedProgress = Number(
      Math.min(Math.max(progress, 0), 1).toFixed(4),
    );
    document
      .querySelectorAll(
        '#main[data-uzhnaq-hydrate-v2*="OqIkOPFU_"] :is(.uzhnaq-1xuhw5j, .uzhnaq-c8t7kq)',
      )
      .forEach((panel) => {
        if (panel instanceof HTMLElement) {
          panel.style.setProperty(
            "--about-progress",
            String(normalizedProgress),
          );
        }
      });
  }

  function initializeAboutHeroAutoplay(root) {
    if (
      !(root instanceof HTMLElement) ||
      aboutHeroShowcaseControllers.has(root)
    ) {
      return;
    }

    const slides = Array.from(
      root.querySelectorAll("[data-site-about-hero-slide]"),
    ).filter((slide) => slide instanceof HTMLElement);

    if (!slides.length) {
      return;
    }

    let activeIndex = 0;
    setActiveAboutHeroSlide(root, activeIndex);
    syncAboutHeroProgress(0);

    // CSS owns the visual motion; JS only advances the active slide so the
    // first frame still looks complete if the enhancement never runs.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      aboutHeroShowcaseControllers.set(root, { stop() {} });
      return;
    }

    if (typeof aboutHeroShowcaseStartTime !== "number") {
      aboutHeroShowcaseStartTime = performance.now();
    }

    const cycleDuration = slides.length * aboutHeroSlideDurationMs;
    let frameId = 0;
    let previousIndex = -1;

    const step = (now) => {
      const elapsed = Math.max(0, now - aboutHeroShowcaseStartTime);
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration;
      const nextIndex =
        Math.floor(cycleProgress * slides.length) % slides.length;

      if (nextIndex !== previousIndex) {
        setActiveAboutHeroSlide(root, nextIndex);
        previousIndex = nextIndex;
      }

      syncAboutHeroProgress(cycleProgress);
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    aboutHeroShowcaseControllers.set(root, {
      stop() {
        window.cancelAnimationFrame(frameId);
      },
    });
  }

  function mountAboutHeroShowcase(target, variant) {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    let showcase = target.querySelector("[data-site-about-hero-showcase-root]");
    if (!(showcase instanceof HTMLElement)) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = buildAboutHeroShowcaseMarkup(variant);
      showcase = wrapper.firstElementChild;
      if (!(showcase instanceof HTMLElement)) {
        return;
      }

      if (variant === "mobile") {
        target.prepend(showcase);
      } else {
        target.appendChild(showcase);
      }
    }

    initializeAboutHeroAutoplay(showcase);
  }

  function syncAboutHeroShowcase() {
    if (!isAboutPage) {
      return;
    }

    document
      .querySelectorAll(
        '#main[data-uzhnaq-hydrate-v2*="OqIkOPFU_"] .site-about-hero-background',
      )
      .forEach((mount) => mountAboutHeroShowcase(mount, "desktop"));

    document
      .querySelectorAll(
        '#main[data-uzhnaq-hydrate-v2*="OqIkOPFU_"] .uzhnaq-mzx7zk',
      )
      .forEach((mount) => mountAboutHeroShowcase(mount, "mobile"));
  }

  function initializeAboutHeroShowcase() {
    syncAboutHeroShowcase();
  }

  function buildIndustriesShowcaseMarkup() {
    return `
      <section class="site-industries-grid-section" data-site-industries-grid-mounted="true" aria-labelledby="site-industries-grid-heading">
        <div class="site-industries-grid-shell">
          <div class="site-industries-grid-header">
            <p class="site-industries-eyebrow">Applications</p>
            <h2 id="site-industries-grid-heading">Precision components for demanding sectors.</h2>
            <p class="site-industries-intro">
              UZHNAQ supports a wide mix of motion, driveline, and transmission applications with components built for fit,
              durability, and repeatable performance.
            </p>
          </div>
          <div class="site-industries-grid" role="list">
            ${industriesShowcaseCards
              .map(
                (card) => `
                  <article class="site-industry-card" role="listitem">
                    <span class="site-industry-card-eyebrow">${escapeHtml(card.eyebrow)}</span>
                    <h3>${escapeHtml(card.title)}</h3>
                    <p>${escapeHtml(card.copy)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function buildMachinesOverviewMarkup() {
    return `
      <section class="site-machines-overview-section" data-site-machines-overview-mounted="true" aria-labelledby="site-machines-overview-heading">
        <div class="site-machines-overview-shell">
          <div class="site-machines-overview-copy">
            <p class="site-machines-eyebrow">Machine Suite</p>
            <h1 id="site-machines-overview-heading">Machine suite updates are on the way.</h1>
            <p class="site-machines-intro">
              We are rebuilding this page so machine coverage is easier to browse across desktop, tablet, and mobile.
              Until the full release is ready, you can explore the core product range or send us an enquiry directly.
            </p>
            <ul class="site-machines-highlight-list">
              ${machinesOverviewHighlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
            <div class="site-machines-actions">
              <a class="site-machines-action site-machines-action--primary" href="./products.html">Explore Products</a>
              <a class="site-machines-action site-machines-action--secondary" href="./contact.html">Enquire Now</a>
            </div>
          </div>
          <aside class="site-machines-overview-panel" aria-label="Upcoming machine coverage">
            <p class="site-machines-panel-eyebrow">Next Up</p>
            <h2>Better structure, cleaner navigation, and clearer technical storytelling.</h2>
            <p>
              The upcoming machine page will group equipment more cleanly, reduce visual clutter, and make brochure and enquiry
              actions easier to reach at every breakpoint.
            </p>
            <a class="site-machines-panel-link" href="${escapeAttribute(siteResourceConfig.brochure.viewUrl)}" target="_blank" rel="noopener">View Company Profile</a>
          </aside>
        </div>
      </section>
    `;
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

    return /^https?:\/\//i.test(trimmedValue)
      ? trimmedValue
      : `https://${trimmedValue.replace(/^\/+/, "")}`;
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
      emailInput.setAttribute(
        "aria-label",
        emailInput.getAttribute("placeholder") || "Email address",
      );
    }

    const submitControl = form.querySelector(
      'input[type="submit"], button[type="submit"]',
    );
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
      extractText(root.querySelector(".uzhnaq-1r1llpm")).replace(
        /\s+([!?.,:;])/g,
        "$1",
      ) || "Partner with Us for Excellence!";
    const website = extractText(root.querySelector(".uzhnaq-155pa7s"));
    const email = extractText(root.querySelector(".uzhnaq-cpge1f"));
    const phone = extractText(root.querySelector(".uzhnaq-xkjyig"));
    const address = extractText(root.querySelector(".uzhnaq-9pv2is"));
    const newsletterTitle =
      extractText(root.querySelector(".uzhnaq-1wpygkq")) ||
      "Subscribe to our newsletter";
    const newsletterCopy =
      extractText(root.querySelector(".uzhnaq-1mu0ah0")) ||
      "Send in your email and receive all updates!";

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
      newsletterForm: cloneNewsletterForm(
        root.querySelector(".uzhnaq-svmtds-container"),
      ),
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
    if (
      formSlot instanceof HTMLElement &&
      data.newsletterForm instanceof HTMLElement
    ) {
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
    const footerShells = Array.from(
      document.querySelectorAll(".site-footer-shell"),
    );
    footerShells.forEach((shell) => {
      if (shell instanceof HTMLElement) {
        shell.removeAttribute("id");
      }
    });

    const visibleShell = footerShells.find(
      (shell) => shell instanceof HTMLElement && isRenderable(shell),
    );
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
      anchor.innerHTML = anchor.innerHTML.replace(
        /watch video|view brochure|download brochure|view socials/gi,
        label,
      );
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

  function createHomepageBrochureButton(
    sourceAnchor,
    label,
    href,
    variantClass,
    iconName,
    external = true,
  ) {
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
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
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
    if (!isHomepageLike) {
      return;
    }

    document
      .querySelectorAll('a[href*="youtube.com/watch"]')
      .forEach((watchAnchor) => {
        if (
          !(watchAnchor instanceof HTMLAnchorElement) ||
          watchAnchor.dataset.siteBrochureHydrated === "true"
        ) {
          return;
        }

        const watchLabel = extractText(watchAnchor).toLowerCase();
        if (!watchLabel.includes("watch video")) {
          return;
        }

        const actionRow = watchAnchor.parentElement?.parentElement;
        const enquireAnchor = actionRow?.querySelector(
          'a[href="./contact.html"]',
        );
        if (
          !(actionRow instanceof HTMLElement) ||
          !(enquireAnchor instanceof HTMLAnchorElement)
        ) {
          return;
        }

        actionRow.classList.add("site-hero-cta-row");
        enquireAnchor.classList.add(
          "site-hero-cta-link",
          "site-hero-enquiry-link",
        );
        ensureHeroCtaIcon(enquireAnchor, "phone");

        watchAnchor.dataset.siteBrochureHydrated = "true";
        watchAnchor.classList.add(
          "site-hero-cta-link",
          "site-hero-brochure-link",
          "site-hero-brochure-link--view",
        );
        watchAnchor.href = siteResourceConfig.brochure.viewUrl;
        watchAnchor.target = "_blank";
        watchAnchor.rel = "noopener";
        replaceButtonLabel(watchAnchor, "View Brochure");
        ensureHeroCtaIcon(watchAnchor, "brochure");

        const watchContainer = watchAnchor.parentElement;
        if (
          !(watchContainer instanceof HTMLElement) ||
          actionRow.querySelector('[data-site-hero-socials="true"]')
        ) {
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
    if (
      !(element instanceof HTMLElement) ||
      !element.isConnected ||
      element.offsetWidth <= 0 ||
      element.offsetHeight <= 0
    ) {
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

  function syncHomepageTitleLoaderAccent() {
    if (!shouldMountHomepageTitleAccent) {
      return;
    }

    document
      .querySelectorAll(".site-home-title-has-loader")
      .forEach((element) => {
        element.classList.remove("site-home-title-has-loader");
      });

    document.querySelectorAll("#ajax-load").forEach((element) => {
      element.remove();
    });

    const visibleTitle = Array.from(
      document.querySelectorAll(".uzhnaq-10mrn1k"),
    )
      .filter(
        (element) => element instanceof HTMLElement && isRenderable(element),
      )
      .find((element) =>
        /passion.*precision.*performa/i.test(
          (element.textContent || "").replace(/\s+/g, "").toLowerCase(),
        ),
      );

    if (!(visibleTitle instanceof HTMLElement)) {
      return;
    }

    const ajaxLoad = document.createElement("div");
    ajaxLoad.id = "ajax-load";
    ajaxLoad.setAttribute("aria-hidden", "true");

    Array.from({ length: 15 }).forEach((_, index) => {
      const loadingBar = document.createElement("div");
      loadingBar.className = "loading-bar";
      loadingBar.style.setProperty("--ajax-index", `${index}`);
      ajaxLoad.appendChild(loadingBar);
    });

    visibleTitle.classList.add("site-home-title-has-loader");
    visibleTitle.prepend(ajaxLoad);
  }

  function buildYouTubeEmbed(video) {
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
    const instagramPostUrl = latestInstagramPost
      ? `https://www.instagram.com/p/${latestInstagramPost.shortcode}/`
      : siteResourceConfig.social.instagram;
    const instagramCards = siteResourceConfig.socialHub.instagramPosts
      .map((post) => {
        const postUrl = `https://www.instagram.com/p/${post.shortcode}/`;
        return `
          <a class="site-social-mini-card" href="${escapeAttribute(postUrl)}" target="_blank" rel="noopener">
            <span class="site-social-mini-card-label">${escapeHtml(post.label)}</span>
            <span class="site-social-mini-card-copy">${escapeHtml(post.caption)}</span>
          </a>
        `;
      })
      .join("");
    const youtubeCards = siteResourceConfig.featuredVideos
      .map((video) => {
        const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
        return `
          <a class="site-social-mini-card site-social-mini-card--video" href="${escapeAttribute(watchUrl)}" target="_blank" rel="noopener">
            <span class="site-social-mini-card-label">${escapeHtml(video.eyebrow)}</span>
            <span class="site-social-mini-card-copy">${escapeHtml(video.title)}</span>
          </a>
        `;
      })
      .join("");

    return `
      <div class="site-social-hub-shell">
        <div class="site-social-hub-header">
          <div class="site-social-hub-intro">
            <span class="site-social-hub-eyebrow">Official UZHNAQ Channels</span>
            <h2 class="site-social-hub-title">Socials</h2>
          </div>
          <div class="site-social-hub-links" role="list" aria-label="UZHNAQ social channels">
            <a class="site-social-hub-link" href="${escapeAttribute(siteResourceConfig.social.instagram)}" target="_blank" rel="noopener">
              <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.instagram}</span>
              <span>Instagram</span>
            </a>
            <a class="site-social-hub-link" href="${escapeAttribute(siteResourceConfig.social.youtube)}" target="_blank" rel="noopener">
              <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.youtube}</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <div class="site-social-hub-grid">
          <section class="site-social-panel site-social-panel--instagram">
            <div class="site-social-panel-head">
              <div class="site-social-panel-label">
                <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.instagram}</span>
                <h3 class="site-social-panel-title">Instagram</h3>
              </div>
              <a class="site-social-panel-link" href="${escapeAttribute(siteResourceConfig.social.instagram)}" target="_blank" rel="noopener">
                Open Feed
              </a>
            </div>
            <a class="site-social-preview-card" href="${escapeAttribute(instagramPostUrl)}" target="_blank" rel="noopener">
              <div class="site-social-preview-media site-social-preview-media--instagram">
                <img
                  class="site-social-preview-image"
                  src="${escapeAttribute(latestInstagramPost.image)}"
                  alt="${escapeAttribute(latestInstagramPost.imageAlt || latestInstagramPost.label)}"
                  loading="lazy"
                >
                <span class="site-social-preview-badge">Latest Post</span>
              </div>
              <div class="site-social-preview-copy">
                <span class="site-social-preview-eyebrow">${escapeHtml(latestInstagramPost.label)}</span>
                <h4 class="site-social-preview-title">${escapeHtml(latestInstagramPost.caption)}</h4>
                <p class="site-social-preview-text">Open the official Instagram feed for factory-floor snapshots, product close-ups, and quick shop updates.</p>
              </div>
            </a>
            <div class="site-social-mini-grid">
              ${instagramCards}
            </div>
          </section>
          <section class="site-social-panel site-social-panel--youtube">
            <div class="site-social-panel-head">
              <div class="site-social-panel-label">
                <span class="site-social-panel-icon" aria-hidden="true">${inlineFooterIcons.youtube}</span>
                <h3 class="site-social-panel-title">YouTube</h3>
              </div>
              <a class="site-social-panel-link" href="${escapeAttribute(siteResourceConfig.social.youtube)}" target="_blank" rel="noopener">
                Visit Channel
              </a>
            </div>
            <a class="site-social-preview-card site-social-preview-card--video" href="${escapeAttribute(latestVideo.watchUrl)}" target="_blank" rel="noopener">
              <div class="site-social-preview-media site-social-preview-media--video">
                <img
                  class="site-social-preview-image"
                  src="${escapeAttribute(latestVideo.image)}"
                  alt="${escapeAttribute(latestVideo.imageAlt || latestVideo.title)}"
                  loading="lazy"
                >
                <span class="site-social-preview-badge">Latest Upload</span>
                <span class="site-social-preview-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M8 6.5L18 12L8 17.5V6.5Z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
              <div class="site-social-preview-copy">
                <span class="site-social-preview-eyebrow">${escapeHtml(latestVideo.eyebrow)}</span>
                <h4 class="site-social-preview-title">${escapeHtml(latestVideo.title)}</h4>
                <p class="site-social-preview-text">${escapeHtml(latestVideo.description)}</p>
              </div>
            </a>
            <div class="site-social-mini-grid">
              ${youtubeCards}
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

  function syncHomepageFactsGallery(attempt = 0) {
    if (!isHomepageLike) {
      return;
    }

    const factsGallery = document.querySelector(
      "[data-site-facts-gallery-mounted='true']",
    );
    const factsHost = findVisibleElement(".uzhnaq-es2yhr", (section) => {
      const heading = extractText(section.querySelector("h1, h2, h3, h4, p"));
      return /trusted by 150\+ clients worldwide/i.test(heading);
    });

    if (!(factsHost instanceof HTMLElement)) {
      if (!(factsGallery instanceof HTMLElement) && attempt < 8) {
        window.setTimeout(
          () => initializeHomepageFactsGallery(attempt + 1),
          120,
        );
      }
      return;
    }

    const sourceGrid = factsHost.querySelector(".uzhnaq-z4ble0");
    if (!(sourceGrid instanceof HTMLElement)) {
      if (!(factsGallery instanceof HTMLElement) && attempt < 8) {
        window.setTimeout(
          () => initializeHomepageFactsGallery(attempt + 1),
          120,
        );
      }
      return;
    }

    factsHost.classList.add("site-facts-host");
    document.querySelectorAll(".uzhnaq-z4ble0").forEach((grid) => {
      if (grid instanceof HTMLElement) {
        grid.classList.add("site-facts-source-hidden");
      }
    });

    let gallery = factsGallery;
    if (!(gallery instanceof HTMLElement)) {
      gallery = document.createElement("div");
      gallery.className = "site-facts-gallery";
      gallery.dataset.siteFactsGalleryMounted = "true";
      gallery.innerHTML = buildHomepageFactsGalleryMarkup();
    }

    if (gallery.previousElementSibling !== sourceGrid) {
      sourceGrid.insertAdjacentElement("afterend", gallery);
    }

    if (gallery.dataset.siteFactsGalleryBound === "true") {
      return;
    }

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

    gallery.dataset.siteFactsGalleryBound = "true";
  }

  function initializeHomepageFactsGallery(attempt = 0) {
    syncHomepageFactsGallery(attempt);
  }

  function syncHomepageVideoGallery(attempt = 0) {
    const gallerySection = document.querySelector(
      "[data-site-video-gallery-mounted='true']",
    );

    if (gallerySection instanceof HTMLElement) {
      gallerySection.remove();
    }

    if (!isHomepageLike) {
      return;
    }
  }

  function initializeHomepageVideoGallery(attempt = 0) {
    syncHomepageVideoGallery(attempt);
  }

  function syncHomepageSocialHub(attempt = 0) {
    if (!isHomepageLike) {
      return;
    }

    const socialHubSection = document.querySelector(
      "[data-site-social-hub-mounted='true']",
    );
    const visibleTestimonials = findVisibleElement(
      '[data-uzhnaq-name="Testimonials"]',
    );

    if (!(visibleTestimonials instanceof HTMLElement)) {
      if (!(socialHubSection instanceof HTMLElement) && attempt < 8) {
        window.setTimeout(() => initializeHomepageSocialHub(attempt + 1), 120);
      }
      return;
    }

    const insertionAnchor =
      visibleTestimonials.closest(".ssr-variant") || visibleTestimonials;
    if (!(insertionAnchor instanceof HTMLElement)) {
      return;
    }

    let mountedSection = socialHubSection;
    if (!(mountedSection instanceof HTMLElement)) {
      mountedSection = document.createElement("section");
      mountedSection.className = "site-social-hub-section";
      mountedSection.id = "site-social-hub-section";
      mountedSection.dataset.siteSocialHubMounted = "true";
      mountedSection.innerHTML = buildHomepageSocialHubMarkup();
    }

    if (mountedSection.previousElementSibling !== insertionAnchor) {
      insertionAnchor.insertAdjacentElement("afterend", mountedSection);
    }
  }

  function initializeHomepageSocialHub(attempt = 0) {
    syncHomepageSocialHub(attempt);
  }

  function getVisibleRoot() {
    return (
      document.querySelector("[data-uzhnaq-root]") ||
      document.getElementById("main") ||
      document.body
    );
  }

  function getDirectChild(root, descendant) {
    let current = descendant;
    while (current && current.parentElement && current.parentElement !== root) {
      current = current.parentElement;
    }
    return current && current.parentElement === root ? current : null;
  }

  function findActiveVariantDescendant(selector, predicate = () => true) {
    return Array.from(document.querySelectorAll(selector)).find((element) => {
      if (!(element instanceof HTMLElement) || !predicate(element)) {
        return false;
      }

      const variant = element.closest(".ssr-variant");
      if (variant instanceof HTMLElement) {
        return isRenderable(variant);
      }

      return true;
    });
  }

  function isCompactNavigationMode() {
    return responsiveNavBreakpoint.matches || window.innerWidth < 1200;
  }

  function updateResponsiveFoundationMode() {
    const mode = isCompactNavigationMode() ? "accordion" : "desktop";
    document.documentElement.dataset.uzhnaqResponsiveMode = mode;
    document.documentElement.dataset.uzhnaqNavMode = mode;
  }

  function scheduleResponsiveFoundationRefresh() {
    if (responsiveFoundationRefreshQueued) {
      return;
    }

    responsiveFoundationRefreshQueued = true;
    window.requestAnimationFrame(() => {
      responsiveFoundationRefreshQueued = false;
      refreshResponsiveFoundation();
    });
  }

  function initializeResponsiveFoundation() {
    if (!responsiveFoundationListenersRegistered) {
      responsiveFoundationListenersRegistered = true;
      window.addEventListener("resize", scheduleResponsiveFoundationRefresh);
      window.addEventListener(
        "orientationchange",
        scheduleResponsiveFoundationRefresh,
      );

      if (typeof responsiveNavBreakpoint.addEventListener === "function") {
        responsiveNavBreakpoint.addEventListener(
          "change",
          scheduleResponsiveFoundationRefresh,
        );
      } else if (typeof responsiveNavBreakpoint.addListener === "function") {
        responsiveNavBreakpoint.addListener(
          scheduleResponsiveFoundationRefresh,
        );
      }
    }

    scheduleResponsiveFoundationRefresh();
  }

  function refreshResponsiveFoundation() {
    updateResponsiveFoundationMode();
    syncResponsiveNavigation();
    syncVisibleFooterAnchor();
    syncAboutHeroShowcase();
    syncHomepageHeroMachine();
    syncHomepageTitleLoaderAccent();
    syncHomepageInjectedSections();
    syncCatalogResponsiveEnhancements();
  }

  function findVisibleElement(selector, predicate = () => true) {
    return Array.from(document.querySelectorAll(selector)).find(
      (element) =>
        element instanceof HTMLElement &&
        isRenderable(element) &&
        predicate(element),
    );
  }

  function syncHomepageInjectedSections() {
    if (!shouldMountHomepageInjectedSections) {
      return;
    }

    syncHomepageFactsGallery();
    syncHomepageVideoGallery();
    syncHomepageSocialHub();
  }

  function syncCatalogResponsiveEnhancements() {
    syncIndustriesShowcase();
    syncMachinesOverview();
  }

  function syncIndustriesShowcase(attempt = 0) {
    if (currentPath !== "industries.html") {
      return;
    }

    const mountedSection = document.querySelector(
      "[data-site-industries-grid-mounted='true']",
    );
    const footerShell = document.getElementById("site-footer-shell");
    const footerAnchor =
      footerShell instanceof HTMLElement
        ? footerShell.closest(".site-footer-wrapper") ||
          footerShell.closest(".footer-live-root") ||
          footerShell.parentElement
        : null;
    const headingAnchor = findVisibleElement(
      '#main[data-uzhnaq-hydrate-v2*="Z9QSHmA22"] .uzhnaq-1oe4f0f',
      (element) => /industries served/i.test(element.textContent || ""),
    );
    const legacyShowcase = findVisibleElement(
      '#main[data-uzhnaq-hydrate-v2*="Z9QSHmA22"] .uzhnaq-1sw4mw3',
    );
    const headingShell =
      headingAnchor instanceof HTMLElement &&
      headingAnchor.parentElement instanceof HTMLElement
        ? headingAnchor.parentElement
        : headingAnchor;
    const legacyShell =
      legacyShowcase instanceof HTMLElement &&
      legacyShowcase.parentElement instanceof HTMLElement
        ? legacyShowcase.parentElement
        : legacyShowcase;
    const insertionAnchor =
      footerAnchor instanceof HTMLElement
        ? footerAnchor
        : headingShell instanceof HTMLElement
          ? headingShell
          : legacyShell instanceof HTMLElement
            ? legacyShell
            : null;

    if (!(insertionAnchor instanceof HTMLElement)) {
      if (!(mountedSection instanceof HTMLElement) && attempt < 8) {
        window.setTimeout(() => syncIndustriesShowcase(attempt + 1), 140);
      }
      return;
    }

    let section = mountedSection;
    if (!(section instanceof HTMLElement)) {
      section = document.createElement("div");
      section.innerHTML = buildIndustriesShowcaseMarkup();
      section = section.firstElementChild;
    }

    if (!(section instanceof HTMLElement)) {
      return;
    }

    if (footerAnchor instanceof HTMLElement) {
      if (section.nextElementSibling !== footerAnchor) {
        footerAnchor.insertAdjacentElement("beforebegin", section);
      }
      return;
    }

    if (section.previousElementSibling !== insertionAnchor) {
      insertionAnchor.insertAdjacentElement("afterend", section);
    }
  }

  function syncMachinesOverview(attempt = 0) {
    if (currentPath !== "machines.html") {
      return;
    }

    const mountedSection = document.querySelector(
      "[data-site-machines-overview-mounted='true']",
    );
    const navAnchor = findVisibleElement(
      '#main[data-uzhnaq-hydrate-v2*="D8q3x66Ry"] nav[data-uzhnaq-name]',
    );

    if (!(navAnchor instanceof HTMLElement)) {
      if (!(mountedSection instanceof HTMLElement) && attempt < 8) {
        window.setTimeout(() => syncMachinesOverview(attempt + 1), 140);
      }
      return;
    }

    let section = mountedSection;
    if (!(section instanceof HTMLElement)) {
      section = document.createElement("div");
      section.innerHTML = buildMachinesOverviewMarkup();
      section = section.firstElementChild;
    }

    if (!(section instanceof HTMLElement)) {
      return;
    }

    if (section.previousElementSibling !== navAnchor) {
      navAnchor.insertAdjacentElement("afterend", section);
    }
  }

  function syncResponsiveNavigation() {
    responsiveDropdownStates.forEach((state) =>
      syncResponsiveDropdownState(state),
    );
  }

  function syncResponsiveDropdownState(state) {
    if (
      !(state?.trigger instanceof HTMLElement) ||
      !(state?.dropdown instanceof HTMLElement)
    ) {
      return;
    }

    const nextMode = isCompactNavigationMode() ? "accordion" : "desktop";
    if (state.mode !== nextMode) {
      state.mode = nextMode;
      state.dropdown.dataset.mode = nextMode;
      state.dropdown.classList.toggle(
        "site-nav-accordion-panel",
        nextMode === "accordion",
      );
      state.dropdown.classList.toggle(
        "site-nav-dropdown-panel",
        nextMode === "desktop",
      );
      state.dropdown.style.left = "";
      state.dropdown.style.top = "";
      state.dropdown.dataset.placement = "bottom";

      if (nextMode === "accordion") {
        state.trigger.insertAdjacentElement("afterend", state.dropdown);
      } else {
        document.body.appendChild(state.dropdown);
      }
    }

    if (!state.isOpen) {
      state.trigger.setAttribute("aria-expanded", "false");
      state.dropdown.setAttribute("aria-hidden", "true");
      state.dropdown.classList.remove("visible");
      return;
    }

    if (nextMode === "desktop") {
      positionResponsiveDropdown(state);
      state.dropdown.classList.add("visible");
      state.dropdown.setAttribute("aria-hidden", "false");
      state.trigger.setAttribute("aria-expanded", "true");
    } else {
      state.dropdown.classList.add("visible");
      state.dropdown.setAttribute("aria-hidden", "false");
      state.trigger.setAttribute("aria-expanded", "true");
    }
  }

  function positionResponsiveDropdown(state) {
    if (
      !(state?.trigger instanceof HTMLElement) ||
      !(state?.dropdown instanceof HTMLElement)
    ) {
      return;
    }

    const rect = state.trigger.getBoundingClientRect();
    const dropdownWidth = state.dropdown.offsetWidth || 320;
    const dropdownHeight = state.dropdown.offsetHeight || 260;
    const maxLeft = window.innerWidth - dropdownWidth - 12;
    const centeredLeft = rect.left + rect.width / 2 - dropdownWidth / 2;
    const left = Math.min(Math.max(12, centeredLeft), Math.max(12, maxLeft));
    const preferredTop = rect.bottom + 4;
    const fitsBelow = preferredTop + dropdownHeight < window.innerHeight - 12;
    const top = fitsBelow
      ? preferredTop
      : Math.max(12, rect.top - dropdownHeight - 10);

    state.dropdown.style.left = `${left}px`;
    state.dropdown.style.top = `${top}px`;
    state.dropdown.dataset.placement = fitsBelow ? "bottom" : "top";
  }

  function openResponsiveDropdown(state) {
    if (
      !(state?.trigger instanceof HTMLElement) ||
      !(state?.dropdown instanceof HTMLElement)
    ) {
      return;
    }

    responsiveDropdownStates.forEach((otherState) => {
      if (otherState !== state) {
        closeResponsiveDropdown(otherState);
      }
    });

    state.isOpen = true;
    state.trigger.setAttribute("aria-expanded", "true");
    state.dropdown.setAttribute("aria-hidden", "false");
    state.dropdown.classList.add("visible");

    if (state.mode === "desktop") {
      positionResponsiveDropdown(state);
    }
  }

  function closeResponsiveDropdown(state) {
    if (
      !(state?.trigger instanceof HTMLElement) ||
      !(state?.dropdown instanceof HTMLElement)
    ) {
      return;
    }

    state.isOpen = false;
    state.trigger.setAttribute("aria-expanded", "false");
    state.dropdown.setAttribute("aria-hidden", "true");
    state.dropdown.classList.remove("visible");
  }

  function toggleResponsiveDropdown(state) {
    if (state.isOpen) {
      closeResponsiveDropdown(state);
    } else {
      openResponsiveDropdown(state);
    }
  }

  function buildResponsiveDropdownState(trigger, label, config) {
    const dropdown = document.createElement("div");
    const stateId = `site-nav-dropdown-${String(label)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}-${responsiveDropdownStates.length + 1}`;
    dropdown.className = "premium-dropdown site-nav-dropdown-panel";
    dropdown.id = stateId;
    dropdown.dataset.placement = "bottom";
    dropdown.dataset.mode = isCompactNavigationMode() ? "accordion" : "desktop";
    dropdown.setAttribute("aria-hidden", "true");
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

    const state = {
      trigger,
      dropdown,
      mode: isCompactNavigationMode() ? "accordion" : "desktop",
      isOpen: false,
    };

    responsiveDropdownStates.push(state);
    trigger.dataset.dropdownReady = "true";
    trigger.classList.add("has-premium-dropdown");
    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", stateId);

    if (state.mode === "accordion") {
      trigger.insertAdjacentElement("afterend", dropdown);
    } else {
      document.body.appendChild(dropdown);
    }

    trigger.addEventListener("focusin", () => openResponsiveDropdown(state));
    trigger.addEventListener("focusout", (event) => {
      const nextTarget = event.relatedTarget;
      if (
        nextTarget instanceof Node &&
        (trigger.contains(nextTarget) || dropdown.contains(nextTarget))
      ) {
        return;
      }

      closeResponsiveDropdown(state);
    });
    dropdown.addEventListener("focusin", () => openResponsiveDropdown(state));
    dropdown.addEventListener("focusout", (event) => {
      const nextTarget = event.relatedTarget;
      if (
        nextTarget instanceof Node &&
        (trigger.contains(nextTarget) || dropdown.contains(nextTarget))
      ) {
        return;
      }

      closeResponsiveDropdown(state);
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleResponsiveDropdown(state);
      }

      if (event.key === "Escape") {
        closeResponsiveDropdown(state);
      }
    });
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      toggleResponsiveDropdown(state);
    });

    if (prefersHover) {
      trigger.addEventListener("pointerenter", () => {
        if (!isCompactNavigationMode()) {
          openResponsiveDropdown(state);
        }
      });

      trigger.addEventListener("pointerleave", (event) => {
        if (!isCompactNavigationMode()) {
          const nextTarget = event.relatedTarget;
          if (nextTarget instanceof Node && dropdown.contains(nextTarget)) {
            return;
          }

          closeResponsiveDropdown(state);
        }
      });

      dropdown.addEventListener("pointerenter", () => {
        if (!isCompactNavigationMode()) {
          openResponsiveDropdown(state);
        }
      });

      dropdown.addEventListener("pointerleave", (event) => {
        if (!isCompactNavigationMode()) {
          const nextTarget = event.relatedTarget;
          if (nextTarget instanceof Node && trigger.contains(nextTarget)) {
            return;
          }

          closeResponsiveDropdown(state);
        }
      });
    }

    return state;
  }

  function decorateHeaderNavigation() {
    document
      .querySelectorAll(
        'nav[data-uzhnaq-name] [data-uzhnaq-name="Links"] a.uzhnaq-text',
      )
      .forEach((link) => {
        link.classList.add("site-nav-link");
        const shell =
          link.closest('[data-uzhnaq-name="Inline Link"]') ||
          link.closest('[data-uzhnaq-component-type="RichTextContainer"]');
        shell?.classList.add("site-nav-item-shell");
      });

    Object.values(dropdownGroups).forEach((config) => {
      document
        .querySelectorAll(`[id="${config.triggerId}"]`)
        .forEach((trigger) => {
          trigger.classList.add("site-nav-trigger", "site-nav-item-shell");
        });
    });
  }

  function highlightActiveLinks() {
    document.querySelectorAll("a.uzhnaq-text").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/^\.\//, "");
      if (
        link.getAttribute("data-uzhnaq-page-link-current") === "true" ||
        href === currentPath
      ) {
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

    document
      .querySelectorAll(`[id="${activeTriggerId}"]`)
      .forEach((trigger) => {
        trigger.classList.add("active-uzhnaq-link");
        trigger.classList.add("site-nav-current");
        trigger.querySelectorAll(".uzhnaq-text").forEach((node) => {
          node.classList.add("active-uzhnaq-link");
        });
      });
  }

  function initializeDropdowns() {
    Object.entries(dropdownGroups).forEach(([label, config]) => {
      document
        .querySelectorAll(`[id="${config.triggerId}"]`)
        .forEach((trigger) => {
          if (trigger.dataset.dropdownReady === "true") {
            return;
          }
          buildResponsiveDropdownState(trigger, label, config);
        });
    });

    if (!responsiveDropdownGlobalsRegistered) {
      responsiveDropdownGlobalsRegistered = true;

      document.addEventListener("click", (event) => {
        responsiveDropdownStates.forEach((state) => {
          if (
            !(state.trigger instanceof HTMLElement) ||
            !(state.dropdown instanceof HTMLElement)
          ) {
            return;
          }

          if (
            !state.dropdown.contains(event.target) &&
            !state.trigger.contains(event.target)
          ) {
            closeResponsiveDropdown(state);
          }
        });
      });

      window.addEventListener(
        "scroll",
        () => {
          if (isCompactNavigationMode()) {
            return;
          }

          responsiveDropdownStates.forEach((state) => {
            if (state.isOpen) {
              positionResponsiveDropdown(state);
            }
          });
        },
        true,
      );
    }

    syncResponsiveNavigation();
  }

  function resolveEnquiryEndpoint() {
    const configuredEndpoint =
      window.UZHNAQ_ENQUIRY_API ||
      document
        .querySelector('meta[name="uzhnaq-enquiry-api"]')
        ?.getAttribute("content") ||
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
      submitControl.dataset.defaultLabel ||=
        submitControl.textContent?.trim() || "Submit";
      submitControl.textContent = isSubmitting
        ? "Sending..."
        : submitControl.dataset.defaultLabel;
      return;
    }

    if (submitControl instanceof HTMLInputElement) {
      submitControl.dataset.defaultLabel ||= submitControl.value || "Submit";
      submitControl.value = isSubmitting
        ? "Sending..."
        : submitControl.dataset.defaultLabel;
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
      subject:
        readFieldValue(fields.subject) || `Website enquiry from ${currentPath}`,
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
    return (
      firstFieldMessage ||
      message ||
      "Please review the enquiry form and try again."
    );
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
            setEnquiryStatus(
              statusNode,
              "error",
              getErrorSummary(data?.message, errors),
            );
            return;
          }

          form.reset();
          clearEnquiryErrors(fields);
          setEnquiryStatus(
            statusNode,
            "success",
            data.message || "Enquiry sent successfully.",
          );
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
