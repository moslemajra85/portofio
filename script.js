const projects = [
  {
    title: "Zakn",
    type: "Business validation platform",
    image: "assets/zakn.png",
    alt: "Zakn Arabic landing page screenshot with a dark hero and green call to action",
    summary:
      "An Arabic web product that helps founders test a business idea before spending heavily on it.",
    challenge:
      "Explain a serious business service quickly, build trust, and make the first action obvious.",
    uxMove:
      "Strong promise, direct call to action, Arabic-first layout, and a landing page that focuses on decision confidence.",
    next: "Turn this into a case study with funnel goals, conversion copy tests, and a cleaner before/after story.",
    tags: ["Arabic UX", "Landing page", "Founder tools", "Market validation"],
    liveUrl: "https://zakintest-c7j3qezy.manus.space/",
  },
  {
    title: "Recipe Assistant Pro",
    type: "Recipe discovery app",
    image: "assets/recipe-assistant.png",
    alt: "Recipe app screenshot showing category filters and a grid of recipe cards",
    summary:
      "A recipe browsing experience with category filters, search entry points, and saved-recipe affordances.",
    challenge:
      "Help users scan food options quickly without overwhelming them with recipe data.",
    uxMove:
      "Visual recipe cards, clear category chips, visible search, and a simple account path for saved recipes.",
    next: "Improve empty states, add loading feedback per section, and document the search/filter decisions.",
    tags: ["Food app", "Search", "Filtering", "Responsive UI"],
    liveUrl: "https://recipe-assistant-pro.vercel.app/",
  },
  {
    title: "Nathra",
    type: "AI health risk assessment app",
    image: "assets/nathra.png",
    alt: "Nathra health risk assessment web app screenshot",
    summary:
      "A health-focused web application that demonstrates how patient inputs can be used to estimate heart disease risk through an AI-powered prediction flow.",
    challenge:
      "Present a sensitive AI health feature in a way that feels clear, serious, and understandable without making the interface overwhelming.",
    uxMove:
      "Structured form flow, direct result presentation, and educational copy that helps users understand that the tool is decision support, not a medical diagnosis.",
    next: "Improve the case study with model limits, API architecture, validation rules, safety disclaimers, and a clearer before/after explanation of the prediction flow.",
    tags: ["AI app", "Health tech", "Machine learning", "Form UX", "Vercel"],
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

// function createProjectCase(project, index) {
//   const article = document.createElement("article");
//   article.className = "project-case";

//   const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");
//   const projectNumber = String(index + 1).padStart(2, "0");

//   article.innerHTML = `
//     <div class="project-visual">
//       <img src="${project.image}" alt="${project.alt}" loading="lazy">
//     </div>
//     <div class="project-content">
//       <span class="project-index">${projectNumber} / ${project.type}</span>
//       <h3>${project.title}</h3>
//       <p>${project.summary}</p>
//       <ul class="project-facts">
//         <li><strong>Challenge</strong><span>${project.challenge}</span></li>
//         <li><strong>UX move</strong><span>${project.uxMove}</span></li>
//         <li><strong>Next pass</strong><span>${project.next}</span></li>
//       </ul>
//       <ul class="tag-list" aria-label="${project.title} tags">${tags}</ul>
//       <div class="project-actions">
//         <a class="button button-dark" href="${project.liveUrl}" target="_blank" rel="noreferrer">Visit live project</a>
//       </div>
//     </div>
//   `;

//   return article;
// }

function createProjectCase(project, index) {
  const article = document.createElement("article");
  article.className = "project-case";

  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");

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

      <ul class="project-facts">
        <li>
          <strong>Challenge</strong>
          <span>${project.challenge}</span>
        </li>

        <li>
          <strong>UX move</strong>
          <span>${project.uxMove}</span>
        </li>

        <li>
          <strong>Next pass</strong>
          <span>${project.next}</span>
        </li>
      </ul>

      <ul class="tag-list">
        ${tags}
      </ul>

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
