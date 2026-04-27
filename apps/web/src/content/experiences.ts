import type { BulletEntry } from "../types/resume";

export const EXPERIENCES: BulletEntry[] = [
  {
    id: "nvidia",
    title: "NVIDIA",
    url: "https://www.nvidia.com",
    subtitle: "Software Engineering Intern, Web Applications — incoming summer 2026",
    location: "Santa Clara, California, United States · On-site",
    period: "Dec 2025 -- Present",
    incoming: true,
    bullets: [
      "Delivered end-to-end chip-development workflow tooling using Java, Vue.js, and SQL across teams.",
      "Built backend APIs and microservices using Java, Spring Boot, and MongoDB for core services.",
      "Developed responsive workflow UI using Vue.js and JavaScript with performance profiling and UX iteration.",
      "Deployed containerized services using Docker, Kubernetes, and ELK for scalable operations and observability.",
    ],
    tags: [
      "Java", "TypeScript", "JavaScript", "Vue.js", "HTML", "CSS",
      "SQL", "Relational Database", "MongoDB", "Spring Boot",
      "Docker", "Kubernetes", "Git", "npm", "Postman", "Object-Oriented Design",
      "Backend", "Software Engineering", "Data Analysis", "Agile (Scrum)", "Jupyter",
    ],
  },
  {
    id: "basta",
    title: "BASTA",
    subtitle: "Basta Discovery Fellow (part-time)",
    location: "Brooklyn, New York, United States · Remote",
    period: "Sep 2025 -- Present",
    bullets: [
      "Discovery fellowship supporting pathways into tech; remote collaboration with the BASTA program.",
    ],
    tags: [
      "JavaScript", "TypeScript", "Python", "Node.js", "npm", "Jupyter", "SQL", "HTML",
      "Data Analysis", "Data Visualization", "Agile (Scrum)", "Software Engineering", "Microsoft Excel",
    ],
  },
  {
    id: "propel2excel",
    title: "Propel2Excel",
    subtitle: "Phase 2 Fellow (part-time)",
    location: "Boston, Massachusetts, United States · Remote",
    period: "Sep 2025 -- Present",
    bullets: [
      "Cohort-based fellowship: skills development, projects, and professional growth (Phase 2).",
    ],
    tags: [
      "Data Analysis", "Data Visualization", "JavaScript", "Python", "Jupyter", "SQL", "Node.js", "npm",
      "Agile (Scrum)", "Software Engineering", "Microsoft Excel", "Object-Oriented Design",
    ],
  },
  {
    id: "neu-lab",
    title: "Northeastern University — Computer Architecture Research Lab",
    subtitle: "Software Engineer/Research Assistant (part-time)",
    location: "Boston, Massachusetts, United States · On-site",
    period: "May 2024 -- Mar 2026",
    bullets: [
      "Simulated cache with 98% hits using NVBit and CUDA, diagnosing bottlenecks in Nsight Systems.",
      "Architected Luthier tools for AMD DBI, enabling cross-vendor profiling and kernel-level instrumentation.",
      "Analyzed batch-sizes across LLaMA, RNN, Transformer, and MLP models with Numpy, PyTorch, and TorchMetrics.",
      "Standardized CNN training pipelines on CIFAR-10 and FashionMNIST with CUDA, delivering 40% faster epochs.",
      "Automated machine learning HPC runs on Linux with Slurm sbatch Bash scripts for reproducibility.",
    ],
    tags: [
      "CUDA", "C++", "NVBit", "PyTorch", "TorchMetrics", "Slurm", "Python", "Nsight Systems", "OpenCV", "OpenMP", "Pthreads", "pandas",
      "NumPy", "Parallel Programming", "Linux", "Bash/Shell", "Git", "Jupyter",
      "Data Analysis", "Data Visualization", "Software Engineering", "Object-Oriented Design",
    ],
  },
  {
    id: "red-sox",
    title: "Boston Red Sox",
    url: "https://www.redsox.com",
    subtitle: "Software Engineer Co-op",
    location: "Boston, Massachusetts, United States · On-site",
    period: "Jul 2025 -- Dec 2025",
    bullets: [
      "Shipped features and bug fixes across 15+ projects in Agile sprints, accelerating production release cycles.",
      "Migrated legacy applications from C#/.NET to Django, Vue.js, and React, modernizing the technology stack.",
      "Architected resilient backend APIs and data models using Django MTV and PostgreSQL, impacting 500+ users.",
      "Debugged GCP production incidents, reducing deployment failures by 40% using Kubernetes and Terraform.",
      "Enhanced code quality and team velocity by reviewing 50+ pull requests across backend and frontend on all apps.",
    ],
    tags: [
      "C#", "TypeScript", "JavaScript", "HTML", "CSS", "React", "Vue.js", "jQuery", "Bootstrap", "Tailwind",
      "Django", "Celery", "MVC", "PostgreSQL", "Redis", "Relational Database",
      "GCP (GKE, Ingress)", "Kubernetes", "Terraform", "Docker", "Node.js", "npm", "Postman",
      "Agile (Scrum)", "Git", "Backend", "Software Engineering", "Object-Oriented Design",
      "Data Analysis", "Data Visualization", "SQL", "pandas",
    ],
  },
  {
    id: "lfx-magma",
    title: "The Linux Foundation",
    url: "https://github.com/magma/magma",
    subtitle: "LFX Open-Source Software Engineer @ Magma Core (part-time)",
    location: "San Francisco, California, United States · Remote",
    period: "Aug 2025 -- Nov 2025",
    bullets: [
      "Contributed to the Magma open-source platform (access networks, modular network services) with Git-based workflows and Linux-based tooling (AGW, Orc8r, Magma / magma GitHub).",
    ],
    tags: [
      "Linux", "Git", "Docker", "Python", "Kubernetes", "Bash/Shell", "Node.js", "C++", "C",
      "Software Engineering", "Backend", "Agile (Scrum)", "Data Analysis", "Homebrew", "Slurm",
    ],
  },
  {
    id: "lokey-school",
    title: "Lorry I. Lokey Graduate School of Business at Mills College (Northeastern)",
    subtitle: "Data Engineer/Research Assistant (part-time)",
    location: "Oakland, California, United States · Remote",
    period: "Jun 2024 -- Feb 2025",
    bullets: [
      "Processed 350K+ articles for legal research by building a Python ETL pipeline for ProQuest data.",
      "Automated 5,000+ extractions, handling pagination and rate limiting with Selenium, Scrapy, and BeautifulSoup.",
      "Normalized and deduplicated records, enforced type consistency for analysis-ready data using pandas.",
      "Standardized 10GB of text using tokenization and lemmatization with NLTK.",
      "Reduced query latency by 30% by adding views and indexes to a MySQL schema normalized to 3NF.",
    ],
    tags: [
      "Python", "ETL", "Selenium", "Scrapy", "BeautifulSoup", "bs4", "pandas", "NLTK", "MySQL", "SQL", "Bash/Shell", "Relational Database",
      "Jupyter", "NLP", "Data Analysis", "Data Visualization", "Git", "Software Engineering", "Object-Oriented Design", "Microsoft Excel", "Agile (Scrum)",
    ],
  },
  {
    id: "rev",
    title: "rev",
    subtitle: "Cohort 3 (part-time)",
    location: "Boston, Massachusetts, United States · Hybrid",
    period: "Jan 2025 -- Apr 2025",
    bullets: [
      "Cohort program with part-time, hybrid engagement in the Boston area.",
    ],
    tags: [
      "Data Analysis", "Agile (Scrum)", "Software Engineering", "JavaScript", "Python", "TypeScript", "Microsoft Excel", "Data Visualization",
    ],
  },
  {
    id: "neu-ieee",
    title: "Northeastern University IEEE Student Branch",
    subtitle: "Workshop Coordinator, Executive Board (part-time)",
    location: "Boston, Massachusetts, United States · On-site",
    period: "Sep 2024 -- Dec 2024",
    bullets: [
      "Planned and ran technical workshops; coordinated logistics with the e-board for student members.",
    ],
    tags: [
      "Agile (Scrum)", "Software Engineering", "Python", "JavaScript", "TypeScript", "Data Analysis", "Git", "Microsoft Excel", "Data Visualization", "HTML", "CSS",
    ],
  },
  {
    id: "headstarter",
    title: "Headstarter AI",
    subtitle: "Software Engineering Fellow (part-time)",
    location: "Boston, Massachusetts, United States · Remote",
    period: "Jul 2024 -- Sep 2024",
    bullets: [
      "Software engineering fellowship: shipped projects, code reviews, and async collaboration in a fast-paced cohort (remote from Boston).",
    ],
    tags: [
      "JavaScript", "Python", "React", "Node.js", "OpenAI", "Next.js", "TypeScript", "HTML", "CSS", "Express.js",
      "Git", "npm", "Software Engineering", "Backend", "Object-Oriented Design", "Data Analysis", "Agile (Scrum)",
    ],
  },
  {
    id: "neu-fintech-london",
    title: "Northeastern London FinTech Society",
    subtitle: "Secretary, Executive Committee & Founding Member (part-time)",
    location: "London, England, United Kingdom · On-site",
    period: "Sep 2023 -- Dec 2023",
    tags: [
      "Agile (Scrum)", "Software Engineering", "Data Analysis", "Data Visualization", "Microsoft Excel", "JavaScript", "Python", "Git", "HTML", "CSS",
    ],
  },
  {
    id: "ikala",
    title: "iKALA",
    subtitle: "Software Engineer Intern",
    location: "Haikou, Hainan, China",
    period: "Apr 2023 -- Jun 2023",
    bullets: [
      "Delivered a WeChat Mini Program prototype with payment integrations (Alipay, WeChat Pay).",
      "Refined app theme for Mainland China user norms and co-built a virtual fitting room with partner teams.",
    ],
    tags: [
      "JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "npm", "Agile (Scrum)", "Software Engineering", "Backend", "Object-Oriented Design", "Data Analysis", "SQL", "Data Visualization", "Python",
    ],
  },
  {
    id: "dawka-daily",
    title: "Dawka Daily",
    subtitle: "Founder & Chief Technology Officer",
    location: "Warsaw, Poland",
    period: "Aug 2021 -- May 2023",
    bullets: [
      "Launched a student gazette site with 8+ writers; maintained WordPress (15+ plugins, 3 themes) with 100% uptime.",
      "Set editorial workflows, a simple editor backend, and publication timelines; DAWKA shares student ideas and work.",
    ],
    tags: [
      "phpMyAdmin", "jQuery", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "Relational Database", "Agile (Scrum)", "Software Engineering", "Backend", "Data Analysis", "Microsoft Excel", "Node.js", "npm",
    ],
  },
  {
    id: "asw-media",
    title: "American School of Warsaw — ASW Media Club",
    subtitle: "Livestream Specialist / Photographer",
    location: "Warsaw, Poland",
    period: "Aug 2021 -- Apr 2023",
    bullets: ["Ran live streams and photography for school events and productions."],
    tags: [
      "Software Engineering", "Data Analysis", "Data Visualization", "Agile (Scrum)", "JavaScript", "HTML", "CSS", "Microsoft Excel", "TypeScript",
    ],
  },
  {
    id: "asw-council",
    title: "American School of Warsaw — Executive Student Council",
    subtitle: "Co-Publicist",
    location: "Warsaw, Poland",
    period: "Aug 2020 -- Jul 2022",
    bullets: ["Led publicity and comms for student government initiatives and events."],
    tags: [
      "Software Engineering", "Agile (Scrum)", "JavaScript", "HTML", "CSS", "Data Analysis", "Data Visualization", "Microsoft Excel", "Python", "TypeScript",
    ],
  },
  {
    id: "asw-bbb",
    title: "American School of Warsaw — Bulletin Brief Broadcast",
    subtitle: "Broadcast Coordinator & Founder",
    location: "Warsaw, Poland",
    period: "Nov 2021 -- Jun 2022",
    bullets: [
      "Coordinated scripts and writers weekly; gathered briefs and aligned stakeholders before each publish.",
    ],
    tags: [
      "Software Engineering", "Agile (Scrum)", "JavaScript", "HTML", "CSS", "Data Analysis", "Data Visualization", "Microsoft Excel", "TypeScript", "Python",
    ],
  },
  {
    id: "inspirit-ai",
    title: "Inspirit AI",
    subtitle: "AI Scholar (AI Scholars program · full-time)",
    location: "Palo Alto, California, United States · Remote",
    period: "Jun 2022 -- Jul 2022",
    bullets: [
      "Intensive AI/ML program focused on data-driven investment strategies; built models with TensorFlow, Keras, PyTorch.",
      "Sentiment analysis on tweets (NLTK, TextBlob, Tweepy) and linear regression for stock performance; team collaboration.",
    ],
    tags: [
      "TensorFlow", "Keras", "PyTorch", "NLTK", "pandas", "Scikit-Learn", "Python", "Tweepy", "TextBlob", "Jupyter",
      "TorchMetrics", "NLP", "Data Analysis", "Data Visualization", "NumPy", "Seaborn", "Matplotlib", "Plotly",
      "Software Engineering", "Agile (Scrum)", "Object-Oriented Design", "Microsoft Excel", "RAG", "Vector Database",
    ],
  },
  {
    id: "globalshala-iit",
    title: "GlobalShala (with Illinois Institute of Technology)",
    subtitle: "Data Analyst & Project Manager (internship)",
    location: "Warsaw, Mazowieckie, Poland · Remote",
    period: "Nov 2021 -- Dec 2021",
    bullets: [
      "Led a cross-functional analysis effort that improved click-through rate by 15% with data-driven changes.",
      "Kept a 12-person team on schedule with clear comms, milestones, and shared insights.",
    ],
    tags: [
      "Data Analysis", "pandas", "Microsoft Excel", "Python", "Agile (Scrum)", "Software Engineering", "Data Visualization", "Jupyter", "SQL", "HTML", "CSS", "JavaScript", "TypeScript",
    ],
  },
  {
    id: "shopify",
    title: "Shopify",
    subtitle: "Dropshipper",
    location: "Warsaw, Poland",
    period: "Oct 2019 -- Jun 2020",
    bullets: [
      "Market research and supplier relationships; end-to-end procurement and store UX tuned for conversion.",
      "Used analytics to iterate on campaigns, layout, and product mix.",
    ],
    tags: [
      "Data Analysis", "Agile (Scrum)", "Software Engineering", "Data Visualization", "Microsoft Excel", "JavaScript", "HTML", "CSS", "SQL", "Python", "TypeScript", "npm", "Node.js", "Relational Database",
    ],
  },
  {
    id: "amazon-fba",
    title: "Amazon",
    subtitle: "Amazon FBA Merchant",
    location: "Warsaw, Poland",
    period: "Dec 2017 -- Oct 2018",
    bullets: [
      "Custom iPhone case niche: China sourcing, inventory across US, competitive pricing, keyword-optimized listings, Facebook Ads.",
    ],
    tags: [
      "Data Analysis", "Agile (Scrum)", "Software Engineering", "Data Visualization", "Microsoft Excel", "SQL", "JavaScript", "Python", "TypeScript", "HTML", "CSS", "Node.js", "npm", "Relational Database",
    ],
  },
];
