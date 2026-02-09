// src/constants/index.js
// Keep model paths as strings. Resolve them at load site with:
// const url = new URL(modelPath, import.meta.url).href

// -------------------- NAV --------------------
const navLinks = [
  { name: "Projects",       link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills",     link: "#skills" },
];

// -------------------- HERO WORDS --------------------
const words = [
  { text: "Ideas",    imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs",  imgPath: "/images/designs.svg" },
  { text: "Code",     imgPath: "/images/code.svg" },
  { text: "Ideas",    imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs",  imgPath: "/images/designs.svg" },
  { text: "Code",     imgPath: "/images/code.svg" },
];

// -------------------- COUNTERS --------------------
const counterItems = [
  { value: 3,  suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "+", label: "Technologies Learned" },
  { value: 12, suffix: " ", label: "Projects Built" },
  { value: 50, suffix: "%", label: "Coursework Completed" },
];

// -------------------- LOGO MARQUEE --------------------
const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

// -------------------- ABILITIES --------------------
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Scalable Solutions",
    desc: "Delivering scalable, high-quality solutions while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

// -------------------- TECH STACK (2D ICONS) --------------------
const techStackImgs = [
  { name: "React Developer",       imgPath: "/images/logos/react.png" },
  { name: "Python Developer",      imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer",     imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager",       imgPath: "/images/logos/git.svg" },
];

// -------------------- TECH STACK (3D MODELS as STRINGS) --------------------
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// -------------------- EXPERIENCE CARDS --------------------
const expCards = [
  {
    review:
      "Geeran is an exceptional frontend developer. His expertise in Nuxt.js and attention to detail have significantly improved our web applications.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer Intern",
    date: "January 2024 - April 2024",
    responsibilities: [
      "Delivered three client-facing web applications by implementing responsive front-end components and integrating backend data flows using HTML, CSS, and JavaScript across production features and client requirements.",
      "Improved page load time by 30% by optimizing SQL queries and restructuring indexes in a MySQL database, reducing query latency and backend load on high-traffic endpoints and core application flows.",
      "Built a monitoring dashboard using JavaScript and Chart.js to visualize API latency, query performance, and user interaction metrics, reducing manual performance checks by 40% and improving issue response time by 25%.",
    ],
  },
  {
    review:
      "Geeran has demonstrated strong leadership, organization, and creativity in his role.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Outreach Coordinator",
    date: "August 2023 - April 2025",
    responsibilities: [
      "Facilitated communication between the Laurier Computing Society and first-year students, resulting in a 15% increase in first-year engagement with club events and workshops",
      "Supported digital outreach efforts by maintaining event pages, optimizing communication workflows, and leveraging analytics to improve turnout, communication clarity, and response rates across multiple academic semesters.",
      "Planned and executed orientation sessions, networking events, and hands-on workshops for 200+ students, collaborating closely with executives, sponsors, and external partners to support student onboarding and professional development.",
    ],
  },
];

// -------------------- EXPERIENCE LOGOS --------------------
const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
];

// -------------------- SOCIALS --------------------
const socialImgs = [
  {
    name: "github",
    imgPath: "/images/x.png",
    url: "https://github.com/geeranbalaranjan",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/geeranbalaranjan/",
  },
  {
    name: "x",
    imgPath: "/images/x.svg",
    url: "https://x.com/GeeranBala",
  },
  {
    name: "spotify",
    imgPath: "/images/spotify.svg",
    url: "https://open.spotify.com/user/geeran101?si=c18a5f2d0ecd4991",
  },
  {
    name: "substack",
    imgPath: "/images/substack.png",
    url: "https://substack.com/@geeranbalaranjan",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
