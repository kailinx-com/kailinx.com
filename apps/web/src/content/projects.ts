import type { BulletEntry } from "../types/resume";

export const PROJECTS: BulletEntry[] = [
  {
    id: "isdp",
    title: "International Student Data Platform",
    subtitle: "",
    period: "August 2025 -- November 2025",
    bullets: [
      "Architected analytics platform reducing time-to-insight 40% using Express.js (Apollo GraphQL), Prisma, PostgreSQL.",
      "Improved search relevance for 400K+ employers via Meilisearch tuning and Redis caching.",
      "Reduced p95 latency 60% with Node.js and Apollo GraphQL optimizations, input validation, and rate-limiting.",
      "Automated CI with Jest, Playwright, GitHub Actions; halved pipeline time, doubled releases.",
      "Reduced AWS spend 2K/month by right-sizing Docker services and caching background workloads.",
    ],
    tags: [
      "Express.js", "TypeScript", "JavaScript", "Python", "SQL", "PostgreSQL", "Redis", "Node.js", "Docker", "ETL",
      "AWS (Amplify, ECS, EC2, ELB)", "Kubernetes", "Terraform", "MongoDB", "Spring Boot",
      "npm", "Postman", "Backend", "Relational Database", "Software Engineering", "Agile (Scrum)", "Git", "Data Analysis",
    ],
  },
  {
    id: "baseball-dashboard",
    title: "Baseball Game Management Dashboard",
    subtitle: "",
    period: "Jul 2025 -- Sep 2025",
    bullets: [
      "Shipped production releases serving 300+ users for an outward-facing management portal.",
      "Structured modular server-side backend with 20+ models and serializers using Django MTV.",
      "Implemented real-time, low-latency ingestion using Celery, Redis, and PostgreSQL-backed REST APIs.",
      "Maintained zero downtime on GCP by managing Kubernetes GKE Ingress using Terraform CI/CD on GitHub Actions.",
      "Engineered 20+ views and templates with JavaScript Vue.js, Tailwind CSS, and Bootstrap.",
    ],
    tags: [
      "Django", "Celery", "Redis", "PostgreSQL", "GCP (GKE, Ingress)", "Kubernetes", "Terraform", "Vue.js", "JavaScript", "TypeScript", "C#",
      "Tailwind", "Bootstrap", "Node.js", "npm", "SQL", "MVC", "Relational Database", "Backend", "Software Engineering", "Git", "Data Analysis", "jQuery", "Postman",
    ],
  },
  {
    id: "edgedetectr",
    title: "EdgeDetectr",
    url: "https://github.com/kailinx-com/EdgeDetectr",
    subtitle: "",
    period: "Dec 2024 -- Mar 2025",
    bullets: [
      "Shipped a fullstack computer vision Edge Detection platform with 100+ monthly users and 99% uptime.",
      "Parallelized 5+ image kernels for 3x CPU speedups using C++, OpenMP, and factory polymorphism; MongoDB in stack.",
      "Deployed containerized services on AWS ECS with Docker behind ELB, frontend via AWS Amplify.",
      "Web UI with Express, React, and Node.js for operator/format selection and real-time previews.",
      "Architected safeguarded REST API endpoints with fixed window rate limits in Express.js and Node.js.",
    ],
    tags: [
      "C", "C++", "MongoDB", "OpenMP", "Pthreads", "CUDA", "OpenCV", "NumPy", "TensorFlow", "Keras", "Jupyter", "TypeScript",
      "React", "Next.js", "AWS (Amplify, ECS, EC2, ELB)", "Docker", "Express.js", "Node.js", "JavaScript", "HTML", "CSS", "Parallel Programming",
      "Backend", "Software Engineering", "Data Visualization", "Object-Oriented Design", "MVC", "Nsight Systems", "NVBit", "Git", "OpenCV", "NumPy", "TensorFlow", "Keras", "Jupyter", "TypeScript",
    ],
  },
  {
    id: "spotify-unwrapped",
    title: "Spotify UnWrapped: Content-Based Recommendation System",
    url: "https://github.com/kailinxGitHub/spotify-unwrapped",
    subtitle: "",
    period: "Nov 2024 -- Nov 2024",
    bullets: [
      "Engineered personalized insights from 1,000+ tracks, enabling quick playlist discovery for users.",
      "Architected content-based model on audio features to rank similar songs with TensorFlow.",
      "Implemented OAuth, scopes, and token refresh with integrated Spotify Web API using Spotipy.",
      "Designed 10+ Plotly and Matplotlib metrics across dashboards from prototypes in Jupyter Notebook.",
      "Reduced API calls by 30% by caching JSON on Streamlit UI with Pandas pipelines.",
    ],
    tags: [
      "TensorFlow", "Spotipy", "Plotly", "Matplotlib", "Streamlit", "pandas", "Jupyter", "Conda", "RAG", "Pinecone", "Vector Database", "LangChain", "Scikit-Learn",
      "Keras", "Data Analysis", "NLP", "Data Visualization", "Git", "Python", "Node.js", "OpenAI", "Backend", "Software Engineering", "Seaborn", "NumPy", "TextBlob", "Tweepy", "NLTK",
    ],
  },
  {
    id: "advisor-ai",
    title: "Academic Advisor AI Chatbot (AdvisorU)",
    url: "https://devpost.com/software/advisoru",
    subtitle: "",
    period: "Mar 2024 -- Mar 2024",
    bullets: [
      "Answered 100+ questions with fullstack advisor chatbot deployed on AWS ECS with Django and Vue.js.",
      "RAG with Pinecone and LangChain over 120+ courses; Streamlit + MySQL admin for data handling and UX.",
      "Streamlined queries with auto-completion and search, reducing end-user query time by ~20%.",
      "Automated data ingestion with BeautifulSoup and crawlers; also see GitHub: github.com/AdvisorU.",
    ],
    tags: [
      "AWS (Amplify, ECS, EC2, ELB)", "Django", "Vue.js", "JavaScript", "HTML", "CSS", "Pinecone", "LangChain", "MySQL", "Streamlit", "TypeScript", "RAG", "Vector Database",
      "BeautifulSoup", "bs4", "Selenium", "Scrapy", "Express.js", "Node.js", "Docker", "ETL", "MongoDB", "Redis", "Jupyter", "NLP", "Python", "Git", "Backend", "Relational Database", "OpenAI", "Software Engineering", "Data Analysis",
    ],
  },
  {
    id: "three-trios",
    title: "Three Trios: Strategy-Based Modular Card Game",
    subtitle: "",
    period: "Oct 2024 -- Dec 2024",
    bullets: [
      "Modular two-player card game in Java using MVC, Swing UI, and strategy features (e.g. max card flip, corner targeting).",
      "Extensible grid, card flip, and rule modules with JUnit tests at 100% coverage for core gameplay.",
    ],
    tags: [
      "Java", "Swing", "MVC", "Object-Oriented Design", "JUnit", "Git", "SQL", "Software Engineering", "Data Analysis", "Agile (Scrum)", "Python", "TypeScript", "JavaScript",
    ],
  },
  {
    id: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    url: "https://github.com/kailinxGitHub/linkedinPostGenerator",
    subtitle: "",
    period: "Mar 2024 -- Mar 2024",
    bullets: [
      "ChatGPT-powered Streamlit app with modular content pipelines, ~60% faster post drafting.",
      "Conda-based setup, modular generation + UI, and simple deployment path for maintainers.",
    ],
    tags: [
      "Streamlit", "OpenAI", "Conda", "Python", "npm", "Postman", "Homebrew", "Jupyter", "TypeScript", "Data Analysis", "Git", "RAG", "NLP", "Node.js", "Express.js", "Software Engineering", "Agile (Scrum)",
    ],
  },
  {
    id: "myvisajobs-crawler",
    title: "MyVisaJobs 2023 Crawler",
    url: "https://github.com/kailinxGitHub/MyVisaJobs_2023_Crawler",
    subtitle: "American School of Warsaw",
    period: "Apr 2023 -- Aug 2023",
    bullets: [
      "Python crawler to extract and analyze university visa data from myvisajobs.com; work aligned with site robots policy.",
    ],
    tags: [
      "Python", "Selenium", "Scrapy", "BeautifulSoup", "bs4", "ETL", "NLP", "Jupyter", "SQL", "Git", "Bash/Shell", "pandas", "RAG", "Data Analysis", "Data Visualization", "NumPy", "Matplotlib", "Microsoft Excel", "Object-Oriented Design",
    ],
  },
  {
    id: "smarter-tomorrow",
    title: "SmarterTomorrow — Company-Specific Twitter Analysis",
    url: "https://github.com/kailinxGitHub/SmarterTomorrow",
    subtitle: "American School of Warsaw",
    period: "May 2022 -- Jan 2023",
    bullets: [
      "Real-time tweet filter and sentiment analysis for target companies; ~20% pipeline efficiency gain.",
      "~90% predictive accuracy after feature work with pandas, TensorFlow, Seaborn, and scikit-learn.",
    ],
    tags: [
      "TensorFlow", "Keras", "pandas", "Scikit-Learn", "Seaborn", "Data Analysis", "NLP", "Jupyter", "Conda", "Tweepy", "TextBlob", "NLTK", "Matplotlib", "Plotly", "Data Visualization", "Git", "TorchMetrics", "RAG", "Streamlit", "Software Engineering", "Object-Oriented Design",
    ],
  },
];
