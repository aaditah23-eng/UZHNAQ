document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("site-home-experiment")) {
    return;
  }

  const shell = document.querySelector("[data-site-machine-shell='true']");
  const visualShell = document.querySelector(
    "[data-site-experiment-visual-shell='true']",
  );
  const root = document.querySelector("[data-uzhnaq-root]");
  const heroSection = document.querySelector(
    ".uzhnaq-ws79ko[data-uzhnaq-name='Hero']",
  );
  const viewport = document.querySelector("[data-site-machine-viewport='true']");
  const svg = document.querySelector(".site-machine-svg");
  const world = document.querySelector("[data-machine-world]");
  const marblePath = document.getElementById("site-machine-marble-path");
  const marble = document.querySelector("[data-machine-marble]");
  const marbleShadow = document.querySelector("[data-machine-marble-shadow]");
  const activeLabel = document.querySelector("[data-machine-active-label]");
  const hudCopy = document.querySelector(".site-machine-hud-copy");
  const progressIndicator = document.querySelector(
    "[data-machine-progress-indicator]",
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const desktopMachineLayout = window.matchMedia("(min-width: 1200px)");
  const originalVisualParent =
    visualShell instanceof HTMLElement ? visualShell.parentElement : null;
  const originalVisualNextSibling =
    visualShell instanceof HTMLElement ? visualShell.nextSibling : null;
  const debugProgressValue = Number.parseFloat(
    new URLSearchParams(window.location.search).get("machineProgress") || "",
  );
  let debugProgressApplied = false;
  let ajaxLoadFrame = 0;
  let renderFrame = 0;

  const moduleTimeline = [
    {
      id: "intake",
      label: "Master Intake Chamber",
      copy: "The bearing seats in the pressure bowl while the master drive pre-loads the release gate.",
      start: 0,
      end: 0.14,
      offsetX: -5,
    },
    {
      id: "gate",
      label: "Metering Release Gate",
      copy: "A compact latch meters the marble into the main track and commits the run.",
      start: 0.12,
      end: 0.2,
      offsetX: 7,
    },
    {
      id: "rails",
      label: "Guided S-Bend Rails",
      copy: "Guard rails bias the marble through a long lateral sweep before it reaches the lift section.",
      start: 0.19,
      end: 0.3,
      offsetX: -8,
    },
    {
      id: "conveyor",
      label: "Vertical Conveyor Stack",
      copy: "Gear-linked drums pull the belt and elevate the marble into the piston manifold.",
      start: 0.28,
      end: 0.42,
      offsetX: 6,
    },
    {
      id: "pistons",
      label: "Piston Manifold",
      copy: "Alternating cylinders redirect the marble across the centerline with visible mechanical recoil.",
      start: 0.4,
      end: 0.52,
      offsetX: 8,
    },
    {
      id: "balance",
      label: "Balancing Transfer Arm",
      copy: "A weighted arm rocks under load to hand the marble into the turbine section.",
      start: 0.5,
      end: 0.6,
      offsetX: -6,
    },
    {
      id: "turbine",
      label: "Indexed Turbine Wheel",
      copy: "The wheel locks, rotates, and releases the marble into a narrow guarded drop stack.",
      start: 0.58,
      end: 0.72,
      offsetX: 7,
    },
    {
      id: "channel",
      label: "Drop Channel Stack",
      copy: "Twin shutters meter the descent through the vertical channels without losing guidance.",
      start: 0.7,
      end: 0.81,
      offsetX: -5,
    },
    {
      id: "clamp",
      label: "Clamp Release Transfer",
      copy: "The clamp opens only long enough to pass the marble into the final collection line.",
      start: 0.79,
      end: 0.91,
      offsetX: 8,
    },
    {
      id: "output",
      label: "Final Output Chute",
      copy: "The last wheel settles the marble and the chute resolves the run into the lower collector.",
      start: 0.89,
      end: 1,
      offsetX: -4,
    },
  ];

  const moduleMap = new Map(
    moduleTimeline.map((module) => [module.id, module]),
  );

  const moduleGroups = new Map(
    Array.from(document.querySelectorAll("[data-machine-module]")).map(
      (element) => [element.dataset.machineModule, element],
    ),
  );

  const lightGroups = new Map(moduleTimeline.map((module) => [module.id, []]));
  document
    .querySelectorAll("[data-machine-light-group]")
    .forEach((lightElement) => {
      const groupName = lightElement.dataset.machineLightGroup;
      if (!lightGroups.has(groupName)) {
        lightGroups.set(groupName, []);
      }

      lightGroups.get(groupName).push(lightElement);
    });

  const pieces = {
    trackCore: document.querySelector(".site-machine-track-core"),
    gateRotor: document.querySelector("[data-machine-rotor='gate']"),
    intakeFlywheel: document.querySelector("[data-machine-gear='intake-flywheel']"),
    intakeTension: document.querySelector("[data-machine-gear='intake-tension']"),
    intakeRollers: Array.from(
      document.querySelectorAll("[data-machine-roller^='intake-']"),
    ),
    intakeLatch: document.querySelector("[data-machine-gate='latch']"),
    conveyorA: document.querySelector("[data-machine-gear='conveyor-a']"),
    conveyorB: document.querySelector("[data-machine-gear='conveyor-b']"),
    beltSlats: Array.from(document.querySelectorAll(".site-machine-belt-slat")),
    pistonLeft: document.querySelector("[data-machine-piston='left']"),
    pistonRight: document.querySelector("[data-machine-piston='right']"),
    balanceArm: document.querySelector("[data-machine-balance='arm']"),
    turbineWheel: document.querySelector("[data-machine-wheel='turbine']"),
    outputWheel: document.querySelector("[data-machine-wheel='output']"),
    upperShutter: document.querySelector("[data-machine-shutter='upper']"),
    lowerShutter: document.querySelector("[data-machine-shutter='lower']"),
    clampLeft: document.querySelector("[data-machine-clamp='left']"),
    clampRight: document.querySelector("[data-machine-clamp='right']"),
    steamA: document.querySelector("[data-machine-effect='steam-a']"),
    steamB: document.querySelector("[data-machine-effect='steam-b']"),
    sparks: document.querySelector("[data-machine-effect='sparks']"),
  };

  const pistonLeftRod =
    pieces.pistonLeft instanceof SVGGElement
      ? pieces.pistonLeft.querySelector(".site-machine-cylinder-rod")
      : null;
  const pistonRightRod =
    pieces.pistonRight instanceof SVGGElement
      ? pieces.pistonRight.querySelector(".site-machine-cylinder-rod")
      : null;

  const state = {
    shellTop: 0,
    shellHeight: 1,
    viewportHeight: 1,
    stickyTop: 0,
    scrollSpan: 1,
    pathLength: 1,
    maxWorldShift: 0,
    viewHeight: 1200,
    lastProgress: 0,
  };

  function setMachineTextVisibility() {
    if (!(svg instanceof SVGSVGElement)) {
      return;
    }

    svg.querySelectorAll(".site-machine-svg-label").forEach((label) => {
      label.setAttribute("aria-hidden", "true");
    });
  }

  function isRenderable(element) {
    const styles = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return (
      styles.display !== "none" &&
      styles.visibility !== "hidden" &&
      rect.width > 0 &&
      rect.height > 0
    );
  }

  function mountAjaxLoadAccent() {
    document
      .querySelectorAll(".site-experiment-title-has-loader")
      .forEach((element) => {
        element.classList.remove("site-experiment-title-has-loader");
      });

    document.querySelectorAll("#ajax-load").forEach((element) => {
      element.remove();
    });

    const visibleTitle = Array.from(
      document.querySelectorAll(".uzhnaq-10mrn1k"),
    ).find(
      (element) => element instanceof HTMLElement && isRenderable(element),
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

    visibleTitle.classList.add("site-experiment-title-has-loader");
    visibleTitle.prepend(ajaxLoad);
  }

  function scheduleAjaxLoadAccent() {
    if (ajaxLoadFrame) {
      return;
    }

    ajaxLoadFrame = window.requestAnimationFrame(() => {
      ajaxLoadFrame = 0;
      mountAjaxLoadAccent();
    });
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function mix(start, end, amount) {
    return start + (end - start) * amount;
  }

  function smoothstep(start, end, value) {
    if (start === end) {
      return value >= end ? 1 : 0;
    }

    const normalized = clamp((value - start) / (end - start), 0, 1);
    return normalized * normalized * (3 - 2 * normalized);
  }

  function easeInOutCubic(value) {
    return value < 0.5
      ? 4 * value * value * value
      : 1 - Math.pow(-2 * value + 2, 3) / 2;
  }

  function getModuleProgress(moduleId, bleed = 0) {
    const module = moduleMap.get(moduleId);

    if (!module) {
      return 0;
    }

    return clamp(
      (state.lastProgress - (module.start - bleed)) /
        (module.end - module.start + bleed * 2),
      0,
      1,
    );
  }

  function getModuleActivity(moduleId, bleed = 0) {
    const moduleProgress = getModuleProgress(moduleId, bleed);
    if (moduleProgress <= 0 || moduleProgress >= 1) {
      return 0;
    }

    return Math.sin(moduleProgress * Math.PI);
  }

  function setSvgTransform(element, transformValue) {
    if (!(element instanceof SVGElement)) {
      return;
    }

    element.setAttribute("transform", transformValue);
  }

  function updateLightGroup(groupName, power) {
    const lights = lightGroups.get(groupName) || [];
    lights.forEach((lightElement, lightIndex) => {
      const pulseOffset = prefersReducedMotion.matches
        ? 0
        : Math.sin((state.lastProgress * 16 + lightIndex * 0.6) * Math.PI) * 0.03;
      lightElement.style.opacity = `${clamp(0.22 + power * 0.7 + pulseOffset, 0.18, 1)}`;
    });
  }

  function computeMetrics() {
    if (
      !(shell instanceof HTMLElement) ||
      !(viewport instanceof HTMLElement) ||
      !(svg instanceof SVGSVGElement) ||
      !(world instanceof SVGGElement) ||
      !(marblePath instanceof SVGPathElement)
    ) {
      return;
    }

    const shellRect = shell.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const worldBounds = world.getBBox();

    state.shellTop = shellRect.top + window.scrollY;
    state.shellHeight = shell.offsetHeight;
    state.viewportHeight = viewportRect.height;
    state.stickyTop = Number.parseFloat(
      window.getComputedStyle(viewport).top || "0",
    );
    state.scrollSpan = Math.max(
      1,
      state.shellHeight - state.viewportHeight - state.stickyTop,
    );
    state.pathLength = marblePath.getTotalLength();
    state.viewHeight = viewBox && viewBox.height ? viewBox.height : 1200;
    state.maxWorldShift = Math.max(
      0,
      worldBounds.y + worldBounds.height - state.viewHeight + 24,
    );
  }

  function syncShellPlacement() {
    if (
      !(visualShell instanceof HTMLElement) ||
      !(root instanceof HTMLElement) ||
      !(heroSection instanceof HTMLElement)
    ) {
      return;
    }

    if (!desktopMachineLayout.matches) {
      if (
        originalVisualParent instanceof HTMLElement &&
        visualShell.parentElement !== originalVisualParent
      ) {
        originalVisualParent.insertBefore(visualShell, originalVisualNextSibling);
      }

      visualShell.style.top = "";
      visualShell.style.right = "";
      visualShell.style.height = "";
      return;
    }

    if (visualShell.parentElement !== root) {
      root.appendChild(visualShell);
    }

    const rootRect = root.getBoundingClientRect();
    const heroRect = heroSection.getBoundingClientRect();
    const heroStyles = window.getComputedStyle(heroSection);
    const heroPaddingTop = Number.parseFloat(heroStyles.paddingTop || "0");
    const heroPaddingRight = Number.parseFloat(heroStyles.paddingRight || "0");
    const machineTop = heroRect.top - rootRect.top + Math.max(0, heroPaddingTop - 18);
    const machineRight = Math.max(8, heroPaddingRight - 38);

    visualShell.style.top = `${Math.round(machineTop)}px`;
    visualShell.style.right = `${Math.round(machineRight)}px`;

    let contentBottom = 0;
    Array.from(root.children).forEach((child) => {
      if (!(child instanceof HTMLElement) || child === visualShell) {
        return;
      }

      const styles = window.getComputedStyle(child);
      if (styles.display === "none" || styles.visibility === "hidden") {
        return;
      }

      const rect = child.getBoundingClientRect();
      contentBottom = Math.max(contentBottom, rect.bottom + window.scrollY);
    });

    const shellTop = visualShell.getBoundingClientRect().top + window.scrollY;
    const bottomClearance = Math.max(28, window.innerHeight * 0.03);
    const targetHeight = Math.max(
      window.innerHeight * 2,
      contentBottom - shellTop + Math.max(120, window.innerHeight * 0.18) - bottomClearance,
    );

    visualShell.style.height = `${Math.round(targetHeight)}px`;
  }

  // The sticky shell defines the scroll runway. We normalize its travel into
  // a single 0..1 value so the marble, camera, and every mechanism can derive
  // their state deterministically in both forward and reverse scroll.
  function getScrollProgress() {
    const scrollOffset = window.scrollY - (state.shellTop - state.stickyTop);
    return clamp(scrollOffset / state.scrollSpan, 0, 1);
  }

  function getActiveModule(progress) {
    return (
      moduleTimeline.find(
        (module) => progress >= module.start && progress <= module.end,
      ) ||
      moduleTimeline.find((module) => progress < module.start) ||
      moduleTimeline[moduleTimeline.length - 1]
    );
  }

  function renderMachine() {
    if (
      !(world instanceof SVGGElement) ||
      !(marble instanceof SVGGElement) ||
      !(marbleShadow instanceof SVGGElement) ||
      !(marblePath instanceof SVGPathElement)
    ) {
      return;
    }

    const progress = getScrollProgress();
    state.lastProgress = progress;

    if (progressIndicator instanceof HTMLElement) {
      progressIndicator.style.transform = `scaleY(${progress.toFixed(4)})`;
    }

    if (pieces.trackCore instanceof SVGPathElement) {
      pieces.trackCore.style.strokeDashoffset = `${(-progress * 980).toFixed(2)}`;
    }

    const activeModule = getActiveModule(progress);
    if (activeLabel instanceof HTMLElement) {
      activeLabel.textContent = activeModule.label;
    }

    if (hudCopy instanceof HTMLElement) {
      hudCopy.textContent = activeModule.copy;
    }

    // Scroll progress maps directly to a length along the SVG path, which keeps
    // the marble physically locked to the machine instead of free-floating.
    const pathPosition = state.pathLength * progress;
    const point = marblePath.getPointAtLength(pathPosition);
    const ahead = marblePath.getPointAtLength(
      clamp(pathPosition + 12, 0, state.pathLength),
    );
    const behind = marblePath.getPointAtLength(
      clamp(pathPosition - 12, 0, state.pathLength),
    );
    const deltaX = ahead.x - behind.x;
    const deltaY = ahead.y - behind.y;
    const tangentAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    const cameraTarget = clamp((point.y - 280) * 0.72, 0, state.maxWorldShift);

    setSvgTransform(world, `translate(0 ${(-cameraTarget).toFixed(2)})`);
    setSvgTransform(
      marble,
      `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)}) rotate(${(
        tangentAngle * 0.35
      ).toFixed(2)})`,
    );

    const shadowScaleX = clamp(1 + Math.abs(deltaX) / 70, 1, 1.32);
    const shadowScaleY = clamp(1 - Math.abs(deltaY) / 180, 0.78, 1);
    setSvgTransform(
      marbleShadow,
      `translate(${point.x.toFixed(2)} ${(point.y + 26).toFixed(2)}) scale(${shadowScaleX.toFixed(3)} ${shadowScaleY.toFixed(3)})`,
    );

    moduleTimeline.forEach((module) => {
      const moduleGroup = moduleGroups.get(module.id);
      const moduleActivity = getModuleActivity(module.id, 0.025);
      const moduleLift = prefersReducedMotion.matches ? 0 : moduleActivity * -5;
      const moduleShift = module.offsetX * moduleActivity;

      setSvgTransform(
        moduleGroup,
        `translate(${moduleShift.toFixed(2)} ${moduleLift.toFixed(2)})`,
      );
      updateLightGroup(module.id, 0.25 + moduleActivity * 0.75);
    });

    // Each module owns a progress window on the 0..1 master timeline. Those
    // local windows drive the individual mechanical states and naturally scrub
    // backward when the user reverses direction.
    const intakeDrive = easeInOutCubic(getModuleProgress("intake", 0.02));
    const gateDrive = easeInOutCubic(getModuleProgress("gate", 0.04));
    const railsDrive = easeInOutCubic(getModuleProgress("rails", 0.03));
    const conveyorDrive = easeInOutCubic(getModuleProgress("conveyor", 0.03));
    const pistonsDrive = getModuleProgress("pistons", 0.03);
    const balanceDrive = easeInOutCubic(getModuleProgress("balance", 0.025));
    const turbineDrive = easeInOutCubic(getModuleProgress("turbine", 0.03));
    const channelDrive = getModuleProgress("channel", 0.03);
    const clampDrive = getModuleProgress("clamp", 0.03);
    const outputDrive = easeInOutCubic(getModuleProgress("output", 0.03));

    setSvgTransform(
      pieces.gateRotor,
      `rotate(${mix(0, 318, intakeDrive + gateDrive * 0.28).toFixed(2)})`,
    );
    setSvgTransform(
      pieces.intakeFlywheel,
      `rotate(${mix(0, -560, intakeDrive).toFixed(2)})`,
    );
    setSvgTransform(
      pieces.intakeTension,
      `rotate(${mix(0, 760, intakeDrive).toFixed(2)})`,
    );
    setSvgTransform(
      pieces.intakeLatch,
      `translate(${mix(0, 38, gateDrive).toFixed(2)} 0)`,
    );

    pieces.intakeRollers.forEach((roller, rollerIndex) => {
      const rotationDirection = rollerIndex % 2 === 0 ? 1 : -1;
      const rollerAngle = mix(0, 520, intakeDrive + gateDrive * 0.18);
      setSvgTransform(
        roller,
        `rotate(${(rollerAngle * rotationDirection).toFixed(2)})`,
      );
    });

    setSvgTransform(
      pieces.conveyorA,
      `rotate(${mix(0, 720, conveyorDrive).toFixed(2)})`,
    );
    setSvgTransform(
      pieces.conveyorB,
      `rotate(${mix(0, -720, conveyorDrive).toFixed(2)})`,
    );

    pieces.beltSlats.forEach((element, index) => {
      const wrappedOffset =
        (((index * 32 - conveyorDrive * 190) % 160) + 160) % 160;
      element.setAttribute("y", `${(1116 + wrappedOffset).toFixed(2)}`);
      element.style.opacity = `${clamp(0.72 + conveyorDrive * 0.28, 0.72, 1)}`;
    });

    const pistonLeftStroke =
      Math.sin(clamp(pistonsDrive * 1.2, 0, 1) * Math.PI) * 34;
    const pistonRightStroke =
      Math.sin(clamp((pistonsDrive - 0.18) / 0.82, 0, 1) * Math.PI) * 30;
    setSvgTransform(
      pieces.pistonLeft,
      `translate(${(-pistonLeftStroke * 0.14).toFixed(2)} ${(
        Math.sin(pistonsDrive * Math.PI) * -2
      ).toFixed(2)})`,
    );
    setSvgTransform(
      pieces.pistonRight,
      `translate(${(pistonRightStroke * 0.14).toFixed(2)} ${(
        Math.sin((pistonsDrive + 0.2) * Math.PI) * 2
      ).toFixed(2)})`,
    );

    if (pistonLeftRod instanceof SVGRectElement) {
      pistonLeftRod.setAttribute("width", `${(60 + pistonLeftStroke).toFixed(2)}`);
    }

    if (pistonRightRod instanceof SVGRectElement) {
      pistonRightRod.setAttribute("x", `${(-90 - pistonRightStroke).toFixed(2)}`);
      pistonRightRod.setAttribute(
        "width",
        `${(60 + pistonRightStroke).toFixed(2)}`,
      );
    }

    const balanceAngle =
      mix(-18, 16, balanceDrive) + Math.sin(balanceDrive * Math.PI) * 5;
    setSvgTransform(pieces.balanceArm, `rotate(${balanceAngle.toFixed(2)})`);

    setSvgTransform(
      pieces.turbineWheel,
      `rotate(${mix(0, 990, turbineDrive).toFixed(2)})`,
    );

    const upperShutterOpen =
      smoothstep(0.12, 0.44, channelDrive) *
      (1 - smoothstep(0.72, 0.94, channelDrive));
    const lowerShutterOpen =
      smoothstep(0.34, 0.7, channelDrive) *
      (1 - smoothstep(0.86, 1, channelDrive));
    setSvgTransform(
      pieces.upperShutter,
      `translate(${mix(0, -54, upperShutterOpen).toFixed(2)} 0)`,
    );
    setSvgTransform(
      pieces.lowerShutter,
      `translate(${mix(0, 58, lowerShutterOpen).toFixed(2)} 0)`,
    );

    const clampSpan =
      Math.sin(clamp((clampDrive - 0.16) / 0.68, 0, 1) * Math.PI) * 34;
    setSvgTransform(
      pieces.clampLeft,
      `translate(${(-clampSpan).toFixed(2)} 0)`,
    );
    setSvgTransform(
      pieces.clampRight,
      `translate(${clampSpan.toFixed(2)} 0)`,
    );

    setSvgTransform(
      pieces.outputWheel,
      `rotate(${mix(0, 600, outputDrive).toFixed(2)})`,
    );

    const railsModule = moduleGroups.get("rails");
    if (railsModule instanceof SVGGElement) {
      const sway = Math.sin(railsDrive * Math.PI) * -4;
      setSvgTransform(
        railsModule,
        `translate(${(-8 * getModuleActivity("rails", 0.025)).toFixed(2)} ${sway.toFixed(2)})`,
      );
    }

    const steamAOpacity = prefersReducedMotion.matches
      ? 0
      : getModuleActivity("turbine", 0.04) * 0.62;
    const steamBOpacity = prefersReducedMotion.matches
      ? 0
      : getModuleActivity("channel", 0.04) * 0.48;
    const sparkOpacity = prefersReducedMotion.matches
      ? 0
      : Math.pow(getModuleActivity("clamp", 0.03), 1.4) * 0.95;

    if (pieces.steamA instanceof SVGGElement) {
      pieces.steamA.style.opacity = `${steamAOpacity}`;
      setSvgTransform(
        pieces.steamA,
        `translate(0 ${mix(0, -18, steamAOpacity).toFixed(2)})`,
      );
    }

    if (pieces.steamB instanceof SVGGElement) {
      pieces.steamB.style.opacity = `${steamBOpacity}`;
      setSvgTransform(
        pieces.steamB,
        `translate(0 ${mix(0, -14, steamBOpacity).toFixed(2)})`,
      );
    }

    if (pieces.sparks instanceof SVGGElement) {
      pieces.sparks.style.opacity = `${sparkOpacity}`;
      setSvgTransform(
        pieces.sparks,
        `translate(${mix(0, 8, sparkOpacity).toFixed(2)} ${mix(0, -10, sparkOpacity).toFixed(2)})`,
      );
    }
  }

  function scheduleRender() {
    if (renderFrame) {
      return;
    }

    renderFrame = window.requestAnimationFrame(() => {
      renderFrame = 0;
      renderMachine();
    });
  }

  function refreshMachine() {
    syncShellPlacement();
    computeMetrics();

    if (!debugProgressApplied && Number.isFinite(debugProgressValue)) {
      const clampedDebugProgress = clamp(debugProgressValue, 0, 1);
      const targetScroll =
        state.shellTop - state.stickyTop + state.scrollSpan * clampedDebugProgress;
      debugProgressApplied = true;
      window.scrollTo({
        top: targetScroll,
        behavior: "auto",
      });
    }

    scheduleAjaxLoadAccent();
    scheduleRender();
  }

  window.requestAnimationFrame(() => {
    mountAjaxLoadAccent();
    setMachineTextVisibility();
    syncShellPlacement();
    computeMetrics();
    renderMachine();
  });

  if (
    !(shell instanceof HTMLElement) ||
    !(viewport instanceof HTMLElement) ||
    !(svg instanceof SVGSVGElement) ||
    !(world instanceof SVGGElement) ||
    !(marblePath instanceof SVGPathElement)
  ) {
    window.addEventListener("resize", scheduleAjaxLoadAccent, {
      passive: true,
    });
    return;
  }

  window.addEventListener("scroll", scheduleRender, { passive: true });
  window.addEventListener("resize", refreshMachine, { passive: true });
  window.addEventListener("load", refreshMachine, { passive: true });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => {
      refreshMachine();
    });
    observer.observe(shell);
  }

  const handleMotionPreference = () => {
    refreshMachine();
  };

  if ("addEventListener" in prefersReducedMotion) {
    prefersReducedMotion.addEventListener("change", handleMotionPreference);
  } else if ("addListener" in prefersReducedMotion) {
    prefersReducedMotion.addListener(handleMotionPreference);
  }
});
