export const personal = {
  name: "Fran Abellán",
  suffix: "PhD",
  title: "Lead Data Scientist & AI Expert",
  summary:
    "Data Science leader with 7+ years driving high-impact ML and AI initiatives across insurance, energy, and telecom. PhD in Astrophysics with deep expertise in LLMs, predictive modeling, and cross-functional team leadership. Proven track record translating complex AI capabilities into measurable business outcomes.",
  email: "fran.abellan88@gmail.com",
  linkedin: "https://www.linkedin.com/in/franabellan/",
  cvFile: "/FranAbellan_CV_Mar26.pdf",
  photo: "/photo.jpg",
} as const;

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  highlight?: boolean;
}

export const experience: Experience[] = [
  {
    role: "Lead Data Scientist",
    company: "CoverWallet, an Aon company",
    period: "Sep 2025 — Present",
    summary:
      "Leading the Data Science team, driving AI strategy, and delivering agentic and LLM-powered solutions at the core of the company's operational workflows.",
    bullets: [
      "Architected the AI Document Engine — a production API that classifies insurance documents across 30+ types and extracts 15+ structured fields, reducing manual processing time by ~70%",
      "Designed and deployed internal MCP integrations enabling natural language interaction with internal APIs, cutting time-to-insight by ~40%",
      "Built agentic workflows for case and email analysis using RAG pipelines and FastAPI, automating triage for ~100 daily interactions",
      "Mentored a team of 3 data scientists, establishing code review processes and career development frameworks",
      "Represented Data Science in company-level AI strategy decisions with C-suite and product leadership",
    ],
    tags: ["Python", "LLMs", "Agentic AI", "MCP", "RAG", "FastAPI", "Team Leadership"],
    highlight: true,
  },
  {
    role: "Senior Data Scientist",
    company: "CoverWallet, an Aon company",
    period: "May 2022 — Sep 2025",
    summary:
      "Delivered AI-powered insurance solutions for risk assessment, agent productivity, and document automation.",
    bullets: [
      "Architected the Risk Assessment Tool using LLMs and NAICS-based industry classification, increasing cross-selling conversion by ~20%",
      "Designed an ML-driven Capacity Model scoring account complexity across 10+ variables, reducing overallocation incidents by ~30%",
      "Led Industry Classification and Lead Scoring ML models, increasing qualified lead conversion rate by ~15%",
    ],
    tags: ["Python", "LLMs", "NLP", "Computer Vision", "FastAPI", "MLOps"],
  },
  {
    role: "Senior Data Scientist",
    company: "Endesa",
    period: "May 2020 — Apr 2022",
    summary:
      "Strategic data science initiatives in energy optimization, demand forecasting, and customer intelligence.",
    bullets: [
      "Developed consumption optimization algorithms for 100K+ customers, reducing average energy cost by ~8% per household",
      "Created time-series forecasting models for electricity and gas demand with MAPE <4%",
      "Engineered a dynamic pricing system balancing profitability with churn risk, improving customer retention by ~5%",
      "Built an automated data enrichment pipeline (NLP + web scraping) enhancing profiles for 200K+ customers",
    ],
    tags: ["Python", "SQL", "Redshift", "Time Series", "NLP"],
  },
  {
    role: "Data Scientist",
    company: "Telefonica — LUCA AI",
    period: "Nov 2018 — May 2020",
    summary:
      "End-to-end data science solutions for 5 enterprise clients across finance, pharma, energy, and telecom.",
    bullets: [
      "Built a predictive maintenance system for Santander Tecnologia using sensor time-series, reducing unplanned downtime by ~25%",
      "Developed inventory forecasting models for Lilly across 15+ manufacturing materials, achieving >92% accuracy",
      "Created a fraud detection system for Naturgy analyzing 2M+ smart meter readings per month, flagging ~95% of fraudulent patterns",
      "Delivered GLP demand forecasting for Repsol, reducing stockout events by ~20%",
    ],
    tags: ["Python", "AWS", "PySpark", "PostgreSQL", "Tableau"],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  detailUrl?: string;
}

export const education: Education[] = [
  {
    degree: "PhD in Astrophysics, Cum Laude",
    institution: "University of Valencia",
    period: "2014 — 2017",
    detail: "Tomography of the SN 1987A ejecta and AGN core-shifts with high-precision astrometry",
    detailUrl: "https://roderic.uv.es/items/599fe72b-adf6-40d9-a627-bbe74785dbf4",
  },
  {
    degree: "MSc in Astrophysics",
    institution: "Univ. Complutense Madrid & Univ. Autonoma Madrid",
    period: "2011 — 2013",
  },
  {
    degree: "BSc in Physics",
    institution: "University of Murcia",
    period: "2006 — 2011",
  },
];

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "AI & LLMs",
    icon: "brain",
    skills: ["LangChain", "RAG", "Agentic AI", "MCP", "Prompt Engineering", "Vector DBs"],
  },
  {
    category: "ML & Data Science",
    icon: "chart",
    skills: ["Python", "scikit-learn", "XGBoost", "PyTorch", "MLflow", "Time Series", "NLP", "Computer Vision"],
  },
  {
    category: "Engineering & MLOps",
    icon: "code",
    skills: ["Docker", "AWS", "FastAPI", "Airflow", "SQL", "GCP", "CI/CD"],
  },
  {
    category: "Leadership",
    icon: "users",
    skills: ["Team Management", "Mentoring", "Stakeholder Communication", "AI Roadmap", "Strategic Planning"],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "NBA Fantasy Analytics Platform",
    description:
      "Full-stack app with daily-updated NBA player performance analytics and automated data pipelines — built with Next.js, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Vercel", "Data Pipelines", "Analytics"],
    url: "https://nba-yahoo-fantasy-daily-dose.vercel.app/?tab=home",
  },
  {
    title: "E-commerce Business",
    description:
      "Founded and operate a data-driven e-commerce business applying ML-based growth strategies for customer acquisition and retention.",
    tags: ["ML", "Growth Strategy", "Entrepreneurship", "Data-Driven"],
  },
];

export const publications = {
  count: "20+",
  label: "Peer-Reviewed Papers",
  url: "https://ui.adsabs.harvard.edu/search/filter_database_fq_database=OR&filter_database_fq_database=database%3A%22astronomy%22&format=SHORT&fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3A%22astronomy%22)&q=author%3A(%22Abellan%5C%2C%20F.%20J.%22)&sort=score%20desc%2C%20bibcode%20desc&unprocessed_parameter=adsobj_query&unprocessed_parameter=qform&p_=0",
} as const;

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
] as const;
