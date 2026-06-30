const categories = {
  mono: {
    label: "Monostructural",
    levels: {
      high: [
        ["Run", "5.000 m", "engine"],
        ["Row", "2.000 m", "engine"],
        ["BikeErg", "10.000 m", "engine"],
        ["Assault Bike", "60 cal", "engine"],
        ["SkiErg", "2.000 m", "engine"],
        ["Double unders", "300 reps", "coordination"]
      ],
      medium: [
        ["Run", "400-1.000 m", "engine"],
        ["Row", "500-1.500 m", "engine"],
        ["BikeErg", "1.000-3.000 m", "engine"],
        ["Assault Bike", "15-35 cal", "engine"],
        ["SkiErg", "400-1.000 m", "engine"],
        ["Double unders", "75-150 reps", "coordination"]
      ],
      low: [
        ["Sprint", "50-200 m", "speed"],
        ["Row", "100-250 m", "engine"],
        ["BikeErg", "250-750 m", "engine"],
        ["Assault Bike", "5-12 cal", "engine"],
        ["SkiErg", "100-250 m", "engine"],
        ["Double unders", "25-50 reps", "coordination"],
        ["Shuttle run", "5-10 lengths", "speed"]
      ]
    }
  },
  gym: {
    label: "Gymnastic",
    levels: {
      high: [
        ["Ring muscle-ups", "1-5 per ronde", "pull + dip"],
        ["Bar muscle-ups", "1-6 per ronde", "pull + press"],
        ["Strict HSPU", "2-7 per ronde", "overhead push"],
        ["Handstand walk", "5-15 m", "balance"],
        ["Pistols", "6-14 totaal", "single-leg"],
        ["Legless rope climbs", "1-3 climbs", "pull"]
      ],
      medium: [
        ["Pull-ups", "8-15 per ronde", "pull"],
        ["Chest-to-bar pull-ups", "5-12 per ronde", "pull"],
        ["Toes-to-bar", "8-15 per ronde", "core + grip"],
        ["Kipping HSPU", "5-12 per ronde", "overhead push"],
        ["Ring dips", "6-12 per ronde", "press"],
        ["Rope climbs", "1-3 climbs", "pull"]
      ],
      low: [
        ["Air squats", "15-40 per ronde", "squat"],
        ["Push-ups", "10-25 per ronde", "push"],
        ["AbMat sit-ups", "15-35 per ronde", "core"],
        ["Walking lunges", "12-30 steps", "single-leg"],
        ["Burpees", "8-20 per ronde", "full body"],
        ["Ring rows", "10-20 per ronde", "pull"],
        ["Hanging knee raises", "10-20 per ronde", "core + grip"]
      ]
    }
  },
  weight: {
    label: "Weightlifting",
    levels: {
      high: [
        ["Squat snatch", "1-3 reps", "70-85%"],
        ["Clean & jerk", "1-3 reps", "70-85%"],
        ["Squat clean", "1-5 reps", "70-85%"],
        ["Split jerk", "1-4 reps", "70-85%"],
        ["Overhead squat", "2-6 reps", "65-80%"],
        ["Heavy thruster", "2-6 reps", "65-80%"],
        ["Deadlift", "3-7 reps", "75-90%"]
      ],
      medium: [
        ["Power snatch", "4-8 reps", "50-70%"],
        ["Power clean", "4-10 reps", "50-70%"],
        ["Push jerk", "5-10 reps", "50-70%"],
        ["Front squat", "5-10 reps", "50-70%"],
        ["Hang power clean", "5-10 reps", "50-70%"],
        ["Thruster", "5-12 reps", "45-65%"]
      ],
      low: [
        ["Dumbbell snatch", "10-24 reps", "light/moderate"],
        ["Dumbbell clean", "10-20 reps", "light/moderate"],
        ["Kettlebell swing", "12-30 reps", "light/moderate"],
        ["Wall ball", "12-30 reps", "light/moderate"],
        ["Dumbbell thruster", "8-20 reps", "light/moderate"],
        ["Goblet squat", "12-25 reps", "light/moderate"],
        ["Medball clean", "12-25 reps", "light"]
      ]
    }
  }
};

const girls = [
  { name: "Barbara", lines: ["5 rounds for time", "20 pull-ups", "30 push-ups", "40 sit-ups", "50 air squats", "Rest 3 min between rounds"] },
  { name: "Chelsea", lines: ["EMOM 30", "5 pull-ups", "10 push-ups", "15 air squats"] },
  { name: "Mary", lines: ["AMRAP 20", "5 handstand push-ups", "10 pistols", "15 pull-ups"] },
  { name: "Cindy", lines: ["AMRAP 20", "5 pull-ups", "10 push-ups", "15 air squats"] },
  { name: "Annie", lines: ["50-40-30-20-10", "Double unders", "Sit-ups"] },
  { name: "Nicole", lines: ["AMRAP 20", "400 m run", "Max rep pull-ups"] },
  { name: "Angie", lines: ["For time", "100 pull-ups", "100 push-ups", "100 sit-ups", "100 air squats"] },
  { name: "Eva", lines: ["5 rounds for time", "800 m run", "30 kettlebell swings 2 pood", "30 pull-ups"] },
  { name: "Helen", lines: ["3 rounds for time", "400 m run", "21 kettlebell swings 1.5 pood", "12 pull-ups"] },
  { name: "Kelly", lines: ["5 rounds for time", "400 m run", "30 box jumps 24 inch", "30 wall balls 20 lb"] },
  { name: "Karen", lines: ["For time", "150 wall balls 20 lb"] },
  { name: "Amanda", lines: ["9-7-5", "Muscle-ups", "Snatches 61 kg"] },
  { name: "Jackie", lines: ["For time", "1.000 m row", "50 thrusters 20 kg", "30 pull-ups"] },
  { name: "Diane", lines: ["21-15-9", "Deadlifts 102 kg", "Handstand push-ups"] },
  { name: "Fran", lines: ["21-15-9", "Thrusters 43 kg", "Pull-ups"] },
  { name: "Elizabeth", lines: ["21-15-9", "Cleans 61 kg", "Ring dips"] },
  { name: "Nancy", lines: ["5 rounds for time", "400 m run", "15 overhead squats 43 kg"] },
  { name: "Lynne", lines: ["5 rounds max reps", "Bodyweight bench press", "Pull-ups"] },
  { name: "Isabel", lines: ["For time", "30 snatches 61 kg"] },
  { name: "Linda", lines: ["10-9-8-7-6-5-4-3-2-1", "Deadlift 1.5 x bodyweight", "Bench press bodyweight", "Clean 0.75 x bodyweight"] },
  { name: "Grace", lines: ["For time", "30 clean & jerks 61 kg"] }
];

const heroes = [
  { name: "Murph", lines: ["For time", "1 mile run", "100 pull-ups", "200 push-ups", "300 air squats", "1 mile run", "With or without weight vest"] },
  { name: "Glen", lines: ["For time", "30 clean & jerks 61/43 kg", "1 mile run", "10 rope climbs", "1 mile run", "100 burpees"] },
  { name: "Nate", lines: ["AMRAP 20", "2 muscle-ups", "4 handstand push-ups", "8 kettlebell swings 2/1.5 pood"] },
  { name: "Bert", lines: ["For time", "50 burpees", "400 m run", "100 push-ups", "400 m run", "150 walking lunges", "400 m run", "200 air squats", "400 m run", "150 walking lunges", "400 m run", "100 push-ups", "400 m run", "50 burpees"] },
  { name: "Randy", lines: ["For time", "75 snatches 34/25 kg"] },
  { name: "DT", lines: ["5 rounds for time", "12 deadlifts 70/48 kg", "9 hang power cleans 70/48 kg", "6 push jerks 70/48 kg"] },
  { name: "Chad1000X", lines: ["For time", "1.000 box step-ups", "20 inch box", "20/15 kg ruck"] },
  { name: "The Seven", lines: ["7 rounds for time", "7 handstand push-ups", "7 thrusters 61/43 kg", "7 knees-to-elbows", "7 deadlifts 111/75 kg", "7 burpees", "7 kettlebell swings 2/1.5 pood", "7 pull-ups"] },
  { name: "JT", lines: ["21-15-9", "Handstand push-ups", "Ring dips", "Push-ups"] },
  { name: "Bull", lines: ["2 rounds for time", "200 double unders", "50 overhead squats 61/43 kg", "50 pull-ups", "1 mile run"] },
  { name: "Michael", lines: ["3 rounds for time", "800 m run", "50 back extensions", "50 sit-ups"] },
  { name: "Jack", lines: ["AMRAP 20", "10 push presses 52/34 kg", "10 kettlebell swings 1.5/1 pood", "10 box jumps 60/50 cm"] },
  { name: "Loredo", lines: ["6 rounds for time", "24 air squats", "24 push-ups", "24 walking lunge steps", "400 m run"] },
  { name: "Daniel", lines: ["For time", "50 pull-ups", "400 m run", "21 thrusters 43/29 kg", "800 m run", "21 thrusters 43/29 kg", "400 m run", "50 pull-ups"] },
  { name: "Lumberjack 20", lines: ["For time", "20 deadlifts 125/84 kg", "400 m run", "20 kettlebell swings 2/1.5 pood", "400 m run", "20 overhead squats 52/34 kg", "400 m run", "20 burpees", "400 m run", "20 chest-to-bar pull-ups", "400 m run", "20 box jumps 60/50 cm", "400 m run", "20 dumbbell squat cleans 20/15 kg", "400 m run"] }
];

const cyclePattern = [
  { slot: "Sessie 1", types: ["mono"], intensity: "high" },
  { slot: "Sessie 2", types: ["gym", "weight"], intensity: "medium" },
  { slot: "Sessie 3", types: ["mono", "gym", "weight"], intensity: "low" },
  { slot: "Girl", benchmark: "girl" },
  { slot: "Sessie 4", types: ["gym"], intensity: "high" },
  { slot: "Sessie 5", types: ["weight", "mono"], intensity: "medium" },
  { slot: "Sessie 6", types: ["gym", "weight", "mono"], intensity: "low" },
  { slot: "Girl", benchmark: "girl" },
  { slot: "Sessie 7", types: ["weight"], intensity: "high" },
  { slot: "Sessie 8", types: ["mono", "gym"], intensity: "medium" },
  { slot: "Sessie 9", types: ["weight", "mono", "gym"], intensity: "low" },
  { slot: "Girl", benchmark: "girl" },
  { slot: "Hero", benchmark: "hero" }
];

const formatTemplates = {
  high: ["EMOM 12", "Every 2 min x 8", "For quality"],
  medium: ["5 rounds for time", "AMRAP 16", "4 rounds for time"],
  low: ["AMRAP 12", "3 rounds for time", "Chipper"]
};

const focusedTemplates = {
  mono: {
    high: ["For time", "Time trial", "Steady hard effort"],
    medium: ["4 rounds for time", "AMRAP 16"],
    low: ["AMRAP 12", "3 rounds for time"]
  },
  gym: {
    high: ["EMOM 12", "Every 2 min x 8", "For quality"],
    medium: ["AMRAP 16", "5 rounds for time"],
    low: ["AMRAP 12", "3 rounds for time"]
  },
  weight: {
    high: ["Every 2 min x 8", "EMOM 12", "For quality"],
    medium: ["5 rounds for time", "AMRAP 16"],
    low: ["AMRAP 12", "3 rounds for time"]
  }
};

const els = {
  seedInput: document.querySelector("#seedInput"),
  levelSelect: document.querySelector("#levelSelect"),
  durationSelect: document.querySelector("#durationSelect"),
  activeSlot: document.querySelector("#activeSlot"),
  activePattern: document.querySelector("#activePattern"),
  activeTitle: document.querySelector("#activeTitle"),
  activeWorkout: document.querySelector("#activeWorkout"),
  activeDetails: document.querySelector("#activeDetails"),
  dayLabel: document.querySelector("#dayLabel"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  rerollAllButton: document.querySelector("#rerollAllButton"),
  randomWorkoutButton: document.querySelector("#randomWorkoutButton"),
  randomWorkoutWideButton: document.querySelector("#randomWorkoutWideButton"),
  finishButton: document.querySelector("#finishButton"),
  previousButton: document.querySelector("#previousButton"),
  skipButton: document.querySelector("#skipButton"),
  resetProgressButton: document.querySelector("#resetProgressButton"),
  rerollSessionButton: document.querySelector("#rerollSessionButton"),
  copyButton: document.querySelector("#copyButton"),
  installButton: document.querySelector("#installButton"),
  toast: document.querySelector("#toast")
};

let deferredInstallPrompt = null;
let state = {
  activeIndex: Number(localStorage.getItem("cfg-active-index") || 0),
  completedCount: Number(localStorage.getItem("cfg-completed-count") || 0),
  cycleComplete: localStorage.getItem("cfg-cycle-complete") === "true",
  seed: localStorage.getItem("cfg-seed") || String(Date.now()).slice(-6),
  level: localStorage.getItem("cfg-level") || "intermediate",
  duration: localStorage.getItem("cfg-duration") || "standard",
  sessionSalts: JSON.parse(localStorage.getItem("cfg-salts") || "[]"),
  randomSlotBag: JSON.parse(localStorage.getItem("cfg-random-slot-bag") || "[]")
};

function hashString(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function rngFromSeed(seed) {
  let value = hashString(seed);
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(list, rng) {
  return list[Math.floor(rng() * list.length)];
}

function shuffledIndexes(length, rng) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function levelForIntensity(intensity) {
  return intensity === "high" ? "high" : intensity === "medium" ? "medium" : "low";
}

function levelText(intensity) {
  return {
    high: "hoog",
    medium: "middel",
    low: "licht"
  }[intensity];
}

function pickTemplate(entry, rng) {
  if (entry.types.length === 1) {
    const type = entry.types[0];
    return pick(focusedTemplates[type][entry.intensity], rng);
  }
  return pick(formatTemplates[entry.intensity], rng);
}

function normalizeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function tagsFromText(text) {
  const value = text.toLowerCase();
  const tags = new Set();
  if (/pull|rope|toes|knee|muscle|ring row|chest-to-bar/.test(value)) tags.add("grip");
  if (/deadlift|swing|clean|snatch|back extension/.test(value)) tags.add("hinge");
  if (/handstand|hspu|overhead|push jerk|push press|thruster|wall walk/.test(value)) tags.add("overhead");
  if (/handstand|hspu/.test(value)) tags.add("invertedPress");
  if (/squat|wall ball|box step|box jump|lunge|pistol/.test(value)) tags.add("squat");
  if (/run|row|bike|ski|double under|shuttle/.test(value)) tags.add("engine");
  if (/burpee/.test(value)) tags.add("fullBody");
  return [...tags];
}

function movementFromArray(type, selected) {
  const text = selected.join(" ");
  return {
    type,
    movement: selected[0],
    prescription: selected[1],
    tag: selected[2],
    tags: [...new Set([selected[2], ...tagsFromText(text)])]
  };
}

function benchmarkMeta(benchmark) {
  return {
    ...benchmark,
    movement: benchmark.name,
    tags: tagsFromText([benchmark.name, ...benchmark.lines].join(" "))
  };
}

function createBuildContext() {
  return {
    bags: {},
    previousMovements: new Set(),
    previousTags: new Set(),
    benchmarkHistory: {
      girl: [],
      hero: []
    }
  };
}

function takeFromBag(context, key, list, rng, accept) {
  if (!list.length) return undefined;
  if (!context.bags[key] || context.bags[key].length === 0) {
    context.bags[key] = shuffledIndexes(list.length, rng);
  }

  let bagPosition = context.bags[key].findIndex((itemIndex) => accept(list[itemIndex], itemIndex));

  if (bagPosition === -1) {
    context.bags[key] = shuffledIndexes(list.length, rng);
    bagPosition = context.bags[key].findIndex((itemIndex) => accept(list[itemIndex], itemIndex));
  }

  if (bagPosition === -1) bagPosition = 0;

  const [selectedIndex] = context.bags[key].splice(bagPosition, 1);
  return list[selectedIndex];
}

function blocksMovement(candidate, sessionTags, context) {
  const name = normalizeName(candidate.movement);
  const tags = new Set(candidate.tags);
  if (context.previousMovements.has(name)) return true;
  if (tags.has("grip") && sessionTags.has("grip")) return true;
  if (tags.has("hinge") && context.previousTags.has("hinge")) return true;
  if (tags.has("invertedPress") && context.previousTags.has("invertedPress")) return true;
  return false;
}

function rememberSession(session, context) {
  context.previousMovements = new Set(session.movements.map((movement) => normalizeName(movement)));
  context.previousTags = new Set(session.tags);
}

function buildSession(entry, index, context) {
  const salt = state.sessionSalts[index] || 0;
  const rng = rngFromSeed(`${state.seed}:${state.level}:${state.duration}:${index}:${salt}`);

  if (entry.benchmark === "girl") {
    const girl = takeFromBag(context, "benchmark:girl", girls, rng, (candidate) => (
      !context.benchmarkHistory.girl.includes(candidate.name)
    )) || pick(girls, rng);
    const meta = benchmarkMeta(girl);
    const session = {
      ...entry,
      title: girl.name,
      subtitle: "Original Girl",
      lines: girl.lines,
      details: [{ label: "Benchmark", value: "Originele CrossFit Girl" }],
      movements: [girl.name],
      tags: meta.tags
    };
    context.benchmarkHistory.girl = [girl.name, ...context.benchmarkHistory.girl].slice(0, 3);
    rememberSession(session, context);
    return session;
  }

  if (entry.benchmark === "hero") {
    const hero = takeFromBag(context, "benchmark:hero", heroes, rng, (candidate) => (
      !context.benchmarkHistory.hero.includes(candidate.name)
    )) || pick(heroes, rng);
    const meta = benchmarkMeta(hero);
    const session = {
      ...entry,
      title: hero.name,
      subtitle: "Original Hero",
      lines: hero.lines,
      details: [{ label: "Benchmark", value: "Originele Hero WOD" }],
      movements: [hero.name],
      tags: meta.tags
    };
    context.benchmarkHistory.hero = [hero.name, ...context.benchmarkHistory.hero].slice(0, 3);
    rememberSession(session, context);
    return session;
  }

  const template = pickTemplate(entry, rng);
  const level = levelForIntensity(entry.intensity);
  const sessionTags = new Set();
  const choices = entry.types.map((type) => {
    const list = categories[type].levels[level];
    const key = `${type}:${level}`;
    const selected = takeFromBag(context, key, list, rng, (candidate) => (
      !blocksMovement(movementFromArray(type, candidate), sessionTags, context)
    )) || pick(list, rng);
    const movement = movementFromArray(type, selected);
    movement.tags.forEach((tag) => sessionTags.add(tag));
    return {
      type,
      category: categories[type].label,
      movement: movement.movement,
      prescription: movement.prescription,
      tag: movement.tag,
      tags: movement.tags
    };
  });

  const lines = [template, ...choices.map((choice) => `${choice.prescription} ${choice.movement}`)];
  const typeNames = entry.types.map((type) => categories[type].label).join(" + ");

  const session = {
    ...entry,
    title: `${entry.slot}: ${typeNames}`,
    subtitle: `${typeNames} - ${levelText(entry.intensity)}`,
    lines,
    details: choices.map((choice) => ({
      label: choice.category,
      value: `${choice.movement} - ${choice.tag}`
    })),
    movements: choices.map((choice) => choice.movement),
    tags: [...sessionTags]
  };
  rememberSession(session, context);
  return session;
}

function buildCycle() {
  const context = createBuildContext();
  return cyclePattern.map((entry, index) => buildSession(entry, index, context));
}

function renderWorkoutLines(container, lines, mini = false) {
  container.innerHTML = lines.map((line, index) => {
    if (mini) {
      return `<div><b>${index === 0 ? "" : index}</b><span>${line}</span></div>`;
    }
    return `<div class="workout-line"><span class="line-count">${index === 0 ? "" : index}</span><span>${line}</span></div>`;
  }).join("");
}

function render() {
  const cycle = buildCycle();
  state.activeIndex = ((state.activeIndex % cycle.length) + cycle.length) % cycle.length;
  const active = cycle[state.activeIndex];
  const cycleNumber = Math.floor(state.completedCount / cycle.length) + 1;
  const dayNumber = state.activeIndex + 1;
  const progress = state.cycleComplete ? 100 : ((state.activeIndex + 1) / cycle.length) * 100;

  els.seedInput.value = state.seed;
  els.levelSelect.value = state.level;
  els.durationSelect.value = state.duration;
  els.dayLabel.textContent = `Dag ${dayNumber} van ${cycle.length}`;
  els.progressLabel.textContent = state.cycleComplete ? "Hero voltooid" : `Cyclus ${cycleNumber}`;
  els.progressBar.style.width = `${progress}%`;
  els.finishButton.hidden = state.cycleComplete;
  els.rerollAllButton.hidden = !state.cycleComplete;
  els.skipButton.hidden = state.cycleComplete;
  els.activeSlot.textContent = active.slot;
  els.activePattern.textContent = active.subtitle;
  els.activeTitle.textContent = active.title;
  renderWorkoutLines(els.activeWorkout, active.lines);
  els.activeDetails.innerHTML = active.details.map((detail) => (
    `<div class="detail"><b>${detail.label}</b><span>${detail.value}</span></div>`
  )).join("");

  persist();
}

function navLabel(session, index) {
  if (session.benchmark === "girl") return "Girl";
  if (session.benchmark === "hero") return "Hero";
  return String(index + 1);
}

function persist() {
  localStorage.setItem("cfg-active-index", String(state.activeIndex));
  localStorage.setItem("cfg-completed-count", String(state.completedCount));
  localStorage.setItem("cfg-cycle-complete", String(state.cycleComplete));
  localStorage.setItem("cfg-seed", state.seed);
  localStorage.setItem("cfg-level", state.level);
  localStorage.setItem("cfg-duration", state.duration);
  localStorage.setItem("cfg-salts", JSON.stringify(state.sessionSalts));
  localStorage.setItem("cfg-random-slot-bag", JSON.stringify(state.randomSlotBag));
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 1700);
}

function rerollAll() {
  state.seed = String(Math.floor(Math.random() * 900000) + 100000);
  state.activeIndex = 0;
  state.cycleComplete = false;
  state.sessionSalts = [];
  state.randomSlotBag = [];
  render();
  showToast("Nieuwe cyclus gestart");
}

function rerollSession() {
  if (state.cycleComplete) return;
  state.sessionSalts[state.activeIndex] = (state.sessionSalts[state.activeIndex] || 0) + 1;
  render();
}

function finishSession() {
  if (state.cycleComplete) return;
  state.completedCount += 1;

  if (state.activeIndex >= cyclePattern.length - 1) {
    state.cycleComplete = true;
    render();
    showToast("Hero voltooid");
    return;
  }

  state.activeIndex += 1;
  render();
  showToast("Volgende sessie klaar");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function previousSession() {
  if (state.activeIndex === 0) return;
  state.activeIndex -= 1;
  state.cycleComplete = false;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function skipSession() {
  if (state.cycleComplete) return;
  if (state.activeIndex >= cyclePattern.length - 1) {
    finishSession();
    return;
  }
  state.activeIndex += 1;
  render();
  showToast("Sessie overgeslagen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetProgress() {
  state.activeIndex = 0;
  state.cycleComplete = false;
  render();
  showToast("Terug naar dag 1");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function randomWorkout() {
  state.cycleComplete = false;
  if (!state.randomSlotBag.length) {
    state.randomSlotBag = shuffledIndexes(cyclePattern.length, Math.random);
  }
  let nextIndex = state.randomSlotBag.shift();
  if (nextIndex === state.activeIndex && state.randomSlotBag.length) {
    state.randomSlotBag.push(nextIndex);
    nextIndex = state.randomSlotBag.shift();
  }
  state.activeIndex = nextIndex;
  state.sessionSalts[state.activeIndex] = (state.sessionSalts[state.activeIndex] || 0) + 1;
  render();
  showToast("Willekeurige training geladen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function activeText() {
  const session = buildCycle()[state.activeIndex];
  return [session.title, ...session.lines].join("\n");
}

els.rerollAllButton.addEventListener("click", rerollAll);
els.randomWorkoutButton.addEventListener("click", randomWorkout);
els.randomWorkoutWideButton.addEventListener("click", randomWorkout);
els.finishButton.addEventListener("click", finishSession);
els.previousButton.addEventListener("click", previousSession);
els.skipButton.addEventListener("click", skipSession);
els.resetProgressButton.addEventListener("click", resetProgress);
els.rerollSessionButton.addEventListener("click", rerollSession);
els.copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(activeText());
    showToast("Gekopieerd");
  } catch {
    showToast("Kopiëren lukte niet");
  }
});

els.seedInput.addEventListener("input", (event) => {
  state.seed = event.target.value.trim() || "crossfit";
  render();
});
els.levelSelect.addEventListener("change", (event) => {
  state.level = event.target.value;
  render();
});
els.durationSelect.addEventListener("change", (event) => {
  state.duration = event.target.value;
  render();
});
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  els.installButton.hidden = false;
});
els.installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    showToast("Installatie via browsermenu");
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

render();
