export interface Project {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
  technologies?: string[];
  keyFeatures?: string[];
}

export interface OpenSourceContribution {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Writings {
  title: string;
  link: string;
  Date: string;
}

export const skillsData: string[] = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "JavaScript",
  "React",
  "React Router",
  "React Hook Form",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Netlify",
  "Vercel",
  "NPM",
  "Yarn",
  "Node.js",
  "Express",
  "JQuery",
  "Markdown",
  "TypeScript",
  "Next.js",
  "Remix",
  "Firebase",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "Nginx",
  "Cloudflare",
  "BullMQ",
  "Nodemon",
  "Socket.io",
  "JWT",
  "Auth.js",
  "Prisma",
  "ESLint",
  "Storybook",
  "Postman",
  "Monorepo",
  "GNU Bash",
  "Powershell",
  "Python",
  "Docker",
  "Amazon AWS",
  "Nginx",
  "Redis",
  "Cloudflare",
  "React Native",
  "Vite",
  "Blender",
  "C",
  "Stack Overflow",
  "Zustand",
  "Framer Motion",
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CoursePros",
    description:
      "An online learning platform for students and teachers. It allows users to purchase courses, take classes, and track their learning progress.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Auth.js",
      "Razorpay",
      "Framer Motion",
      "Shadcn-UI",
    ],
    keyFeatures: [
      "Seamless course purchase with Razorpay integration",
      "Secure authentication using Auth.js",
      "Modern UI with Tailwind CSS and Shadcn-UI",
      "Animated user experience using Framer Motion",
    ],
    liveLink: "https://50xcourses.vercel.app/",
    githubLink: "https://github.com/hanuchaudhary/courseApp",
  },
  {
    id: 2,
    title: "Instagram Clone",
    description:
      "An end-to-end Instagram clone with features like chat, reels, and more.",
    githubLink: "https://github.com/hanuchaudhary/instagram",
    technologies: [
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Express.js",
      "Socket.io",
      "Zustand",
      "JWT",
      "Framer Motion",
      "Cloudinary",
    ],
    keyFeatures: [
      "Real-time chat with Socket.io",
      "Reels feature with smooth animations using Framer Motion",
      "User authentication with JWT",
      "State management with Zustand",
    ],
  },
  {
    id: 3,
    title: "50xOpportunities",
    description:
      "A platform where people can create jobs, find and apply for them. It connects job seekers with employers.",
    liveLink: "https://50x0pportunities.vercel.app/jobs",
    githubLink: "https://github.com/hanuchaudhary/50x0pportunities",
    keyFeatures: [
      "Job creation and application system",
      "User authentication with role-based access",
      "Advanced job search and filtering",
      "Employer-dashboard for managing job postings",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Hono.js",
      "Prisma",
    ],
  },
  {
    id: 4,
    title: "Anonymous Comments",
    description:
      "An application that allows users to share feedback anonymously. It ensures privacy and encourages honest feedback.",
    liveLink: "https://anonymous-comments.vercel.app/",
    githubLink: "https://github.com/hanuchaudhary/anonymous-comments",
    keyFeatures: [
      "Anonymous feedback submission",
      "AI-based comment moderation with Gemini",
      "Email notifications using Resend",
      "Next-auth for authentication",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Next-auth",
      "Shadcn-UI",
      "Gemini",
      "Resend",
    ],
  },
  {
    id: 5,
    title: "rePay",
    description:
      "A peer-to-peer payment application that allows users to send and receive money from friends and family.",
    liveLink: "https://repay-three.vercel.app/",
    githubLink: "https://github.com/hanuchaudhary/paytm-react",
    keyFeatures: [
      "Seamless money transfer between users",
      "Transaction history with filtering",
      "Secure authentication using JWT",
      "Serverless backend with Hono.js",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Hono.js",
      "JWT",
      "Framer Motion",
      "Cloudflare",
    ],
  },
  {
    id: 6,
    title: "Medium Clone",
    description:
      "A clone of the Medium website that allows users to read and write articles on various topics.",
    liveLink: "https://medium-blog-6pkc.vercel.app/",
    githubLink: "https://github.com/hanuchaudhary/medium-blog",
    keyFeatures: [
      "Article creation and publishing",
      "User authentication and profile management",
      "Article search and filtering",
      "Responsive UI with Tailwind CSS",
    ],
    technologies: [
      "React.js",
      "Hono.js",
      "Tailwind CSS",
      "JWT",
      "PostgreSQL",
      "Cloudflare",
    ],
  },
];

export const OpenSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    title: "SWOC/Leetcode-Journal",
    description: "Social Winter Of Code 2025 project.",
    image: "/LC.png",
    link: "https://github.com/hanuchaudhary/Leetcode-Journal",
  },
  {
    id: 3,
    title: "100xdev/photo-ai",
    description:
      "Merged PRs for saving transactions in DB, refactoring the entire dashboard UI and theme toggle.",
    image: "/100xdev.webp",
    link: "https://github.com/code100x/photo-ai/pull/36",
  },
];

export const writingsData: Writings[] = [
  {
    title: "Setting up Tailwind CSS in a dJango project on windows",
    link: "https://medium.com/@kushchaudharyog/setting-up-tailwind-css-in-a-django-project-on-windows-ffe0d2132cdc",
    Date: "Dec 26, 2024",
  },
  {
    title: "How to integrate RazorPay in Next.js 14/15 with easy steps.",
    link: "https://medium.com/@kushchaudharyog/how-to-integrate-razorpay-in-next-js-14-15-with-easy-steps-f2d80772009c",
    Date: "Jan 24, 2025",
  },
];
