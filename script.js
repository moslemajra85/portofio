const projects = [
  {
    title: "Brand Nexus",
    type: "Pharma marketplace / AI UX contribution",
    image: "assets/brandnexusmea.png",
    alt: "Brand Nexus pharmaceutical marketing marketplace homepage showing AI-powered positioning and marketplace options",
    role: "GUI design, AI experience shaping, product consulting",
    summary:
      "A pharmaceutical marketing marketplace connecting companies with vetted agencies, with an AI-assisted experience that supports discovery, brief shaping, and smarter vendor evaluation.",
    challenge:
      "Translate a complex B2B workflow into a credible interface for two sides: pharmaceutical companies that need quality and compliance control, and agencies that need clear opportunities.",
    uxMove:
      "Contributed graphical user interface design and shaped the AI section so users can understand the marketplace flow, compare options, and see how AI supports decisions without hiding the business logic.",
    next: "Validate the AI section with real procurement scenarios, tighten empty states, and document the pharma-specific compliance assumptions behind the workflow.",
    proof: [
      "Structured the AI section around practical marketplace decisions, not decorative AI messaging.",
      "Helped turn the product story into a clearer interface for pharma buyers and marketing agencies.",
      "Focused the screen hierarchy on trust, compliance, and procurement clarity.",
    ],
    stack: ["GUI design", "AI UX", "B2B marketplace", "Product consulting"],
    liveUrl: "https://www.brandnexusmea.com/",
  },
  {
    title: "FabMom",
    type: "Motherhood companion app / product consulting",
    image: "assets/fabmom.png",
    alt: "FabMom landing page showing a motherhood companion app hero and beta signup form",
    role: "Product idea formulation, user story translation, UX direction",
    summary:
      "A motherhood companion experience shaped around tracking, learning, and connection for mothers who need calm guidance instead of another noisy app.",
    challenge:
      "Turn early user stories into a practical product direction with a clear first experience, beta capture, and feature framing that speaks to real parent needs.",
    uxMove:
      "Helped formulate the product idea, translate user stories into concrete screens and flows, and shape the experience around clarity, emotional tone, and a simple beta path.",
    next: "Expand the app story with onboarding states, content strategy, retention loops, and clearer proof of how user feedback will guide the roadmap.",
    proof: [
      "Converted early user needs into a concrete product narrative and first landing experience.",
      "Kept the beta path simple so the page can collect interest without overexplaining the product.",
      "Balanced emotional tone with practical app positioning for mothers and families.",
    ],
    stack: ["Product strategy", "User stories", "UX direction", "Beta validation"],
    liveUrl: "https://fabmom.app/",
  },
  {
    title: "Zakn",
    type: "Business validation platform",
    image: "assets/zakn.png",
    alt: "Zakn Arabic landing page screenshot with a dark hero and green call to action",
    role: "Landing page UX, Arabic-first product positioning, conversion flow",
    summary:
      "An Arabic web product that helps founders test a business idea before spending heavily on it.",
    challenge:
      "Explain a serious business service quickly, build trust, and make the first action obvious.",
    uxMove:
      "Strong promise, direct call to action, Arabic-first layout, and a landing page that focuses on decision confidence.",
    next: "Turn this into a case study with funnel goals, conversion copy tests, and a cleaner before/after story.",
    proof: [
      "Built the page around one decision: helping founders understand whether the service fits their idea.",
      "Used Arabic-first copy and layout choices instead of treating localization as an afterthought.",
      "Prioritized trust-building sections and a direct call to action over generic startup language.",
    ],
    stack: ["Arabic UX", "Landing page", "Responsive UI", "Founder validation"],
    liveUrl: "https://zakintest-c7j3qezy.manus.space/",
  },
  {
    title: "Recipe Assistant Pro",
    type: "Recipe discovery app",
    image: "assets/recipe-assistant.png",
    alt: "Recipe app screenshot showing category filters and a grid of recipe cards",
    role: "Frontend UI, browsing flow, responsive recipe discovery",
    summary:
      "A recipe browsing experience with category filters, search entry points, and saved-recipe affordances.",
    challenge:
      "Help users scan food options quickly without overwhelming them with recipe data.",
    uxMove:
      "Visual recipe cards, clear category chips, visible search, and a simple account path for saved recipes.",
    next: "Improve empty states, add loading feedback per section, and document the search/filter decisions.",
    proof: [
      "Designed the browsing experience around fast visual scanning rather than long recipe lists.",
      "Made categories and search visible early so users can quickly narrow their intent.",
      "Used responsive card layouts to keep the experience usable across screen sizes.",
    ],
    stack: ["Frontend UI", "Search UX", "Filtering", "Responsive layouts"],
    liveUrl: "https://recipe-assistant-pro.vercel.app/",
  },
  {
    title: "Nathra",
    type: "AI health risk assessment app",
    image: "assets/nathra.png",
    alt: "Nathra health risk assessment web app screenshot",
    role: "AI product flow, form UX, health risk interface",
    summary:
      "A health-focused web application that demonstrates how patient inputs can be used to estimate heart disease risk through an AI-powered prediction flow.",
    challenge:
      "Present a sensitive AI health feature in a way that feels clear, serious, and understandable without making the interface overwhelming.",
    uxMove:
      "Structured form flow, direct result presentation, and educational copy that helps users understand that the tool is decision support, not a medical diagnosis.",
    next: "Improve the case study with model limits, API architecture, validation rules, safety disclaimers, and a clearer before/after explanation of the prediction flow.",
    proof: [
      "Separated patient input, prediction, and explanation into a clearer decision-support flow.",
      "Used direct result presentation while keeping the health context serious and understandable.",
      "Positioned the AI output as supportive information, not a replacement for medical judgment.",
    ],
    stack: ["AI workflow", "Form UX", "Health tech", "Vercel"],
    liveUrl: "https://nathra.vercel.app/",
    githubUrl: "https://github.com/moslemajra85/nathra",
  },
];

const featuredImage = document.querySelector("#featured-image");
const featuredTitle = document.querySelector("#featured-title");
const featuredLink = document.querySelector("#featured-link");
const projectSwitcher = document.querySelector("#project-switcher");
const projectList = document.querySelector("#project-list");
const year = document.querySelector("#year");

function setFeaturedProject(index) {
  const project = projects[index];
  featuredImage.src = project.image;
  featuredImage.alt = project.alt;
  featuredTitle.textContent = project.title;
  featuredLink.href = project.liveUrl;

  document.querySelectorAll(".switch-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
}

function renderSwitcher() {
  const buttons = projects.map((project, index) => {
    const button = document.createElement("button");
    button.className = "switch-button";
    button.type = "button";
    button.textContent = project.title;
    button.addEventListener("click", () => setFeaturedProject(index));
    return button;
  });

  projectSwitcher.replaceChildren(...buttons);
}

function renderItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createProjectCase(project, index) {
  const article = document.createElement("article");
  article.className = "project-case";

  const proofItems = renderItems(project.proof);
  const stackItems = renderItems(project.stack);

  const projectNumber = String(index + 1).padStart(2, "0");

  const githubButton = project.githubUrl
    ? `
      <a class="button button-light" href="${project.githubUrl}" target="_blank" rel="noreferrer">
        View source code
      </a>
    `
    : "";

  article.innerHTML = `
    <div class="project-visual">
      <img src="${project.image}" alt="${project.alt}">
    </div>

    <div class="project-content">
      <div class="project-index">${projectNumber} / ${project.type}</div>

      <h3>${project.title}</h3>

      <p>${project.summary}</p>

      <div class="project-role">
        <strong>My role</strong>
        <span>${project.role}</span>
      </div>

      <ul class="project-facts">
        <li>
          <strong>Problem</strong>
          <span>${project.challenge}</span>
        </li>

        <li>
          <strong>Contribution</strong>
          <span>${project.uxMove}</span>
        </li>

        <li>
          <strong>Next step</strong>
          <span>${project.next}</span>
        </li>
      </ul>

      <div class="project-proof">
        <h4>Evidence of work</h4>
        <ul>
          ${proofItems}
        </ul>
      </div>

      <div class="project-stack">
        <h4>Relevant skills</h4>
        <ul class="tag-list">
          ${stackItems}
        </ul>
      </div>

      <div class="project-actions">
        <a class="button button-dark" href="${project.liveUrl}" target="_blank" rel="noreferrer">
          Visit live project
        </a>

        ${githubButton}
      </div>
    </div>
  `;

  return article;
}
function renderProjects() {
  projectList.replaceChildren(...projects.map(createProjectCase));
}

year.textContent = new Date().getFullYear();
renderSwitcher();
renderProjects();
setFeaturedProject(0);
