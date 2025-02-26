export interface Project {
    id: number;
    title: string;
    description: string;
    liveLink?: string;
    githubLink: string;
    technologies?: string[];
    learnings?: string[];
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
    "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass",
    "JavaScript", "React", "React Router", "React Hook Form",
    "Git", "GitHub", "GitHub Actions", "Netlify", "Vercel",
    "NPM", "Yarn", "Node.js", "Express","JQuery", "Markdown",
    "TypeScript", "Next.js", "Remix", "Firebase",
    "MongoDB", "MySQL", "PostgreSQL", "Redis", "Supabase",
    "Nginx", "Cloudflare", "BullMQ", "Nodemon", "Socket.io",
    "JWT", "Auth.js",
    "ESLint", "Storybook", "Postman", "Monorepo",
    "GNU Bash", "Powershell", "Python", "Docker", "Amazon AWS",
    "Nginx", "Redis", "Cloudflare",
    "React Native", "Vite", "Blender",
    "C", "Stack Overflow"
];

export const projectsData: Project[] = [
    {
        id: 1,
        title: "CoursePros",
        description: "An online learning platform for students and teachers. It allows users to purchase courses, take classes, and track their learning progress.",
        technologies: ["next-js", "tailwind Css", "postgreSQL", "auth.js", "razorpay", "framer-motion", "shadcn-ui"],
        learnings: [
            "First Next.js app, learning Next.js app routing",
            "payment gateway integration, using Razorpay",
            "authentication in Next.js",
        ],
        liveLink: "https://50xcourses.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/courseApp"
    },
    {
        id: 2,
        title: "Instagram",
        description: "An end-to-end Instagram clone with features like chat, reels, and more.",
        githubLink: "https://github.com/hanuchaudhary/instagram",
        technologies: ["React", "Tailwind Css", "postgreSQL", "expressJs", "socket.io", "zustand", "JWT", "Framer Motion", "Cloudinary"],
        learnings: [
            "Shared state management using zustand",
            "Real-time chat using socket.io",
            "Reels feature using Framer Motion",
            "Authentication using JWT",
        ],
    },
    {
        id: 3,
        title: "50xOpportunities",
        description: "A platform where people can create jobs, find and apply for them. It connects job seekers with employers.",
        liveLink: "https://50x0pportunities.vercel.app/jobs",
        githubLink: "https://github.com/hanuchaudhary/50x0pportunities",
        learnings: [
            "Job creation and application feature",
            "User authentication",
            "User roles and permissions",
            "Job search and filtering",
        ],
        technologies: ["reactJs", "Tailwind Css", "postgreSQl", "HonoJs", "prisma"],
    },
    {
        id: 4,
        title: "Anonymous Comments",
        description: "An application that allows users to share feedback anonymously. It ensures privacy and encourages honest feedback.",
        liveLink: "https://anonymous-comments.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/anonymous-comments",
        learnings: [
            "authentication using next-auth",
            "AI-based comment moderation",
            "mailing feature using resend",
            "comment posting and fetching",
        ],
        technologies: [
            "Next.js",
            "Tailwind Css",
            "MongoDB",
            "Next-auth",
            "shad-cn",
            "gemini",
            "resend",
        ],
    },
    {
        id: 5,
        title: "rePay",
        description: "A peer-to-peer payment application that allows users to send and receive money from friends and family.",
        liveLink: "https://repay-three.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/paytm-react",
        learnings: [
            "Transaction implementation in database",
            "User authentication",
            "User transaction history",
            "serverless backend using HonoJs",
        ],
        technologies: [
            "react.js",
            "Tailwind Css",
            "postgreSQL",
            "HonoJs",
            "JWT",
            "Framer Motion",
            "cloudflare",
        ],
    }, {
        id: 6,
        title: "Medium Clone",
        description: "A clone of the Medium website that allows users to read and write articles on various topics.",
        liveLink: "https://medium-blog-6pkc.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/medium-blog",
        learnings: [
            "Article posting and fetching",
            "User authentication",
            "Article search and filtering",
        ],
        technologies: [
            "react.js",
            "HonoJs",
            "Tailwind Css",
            "JWT",
            "postgreSQL",
            "cloudflare",
        ],
    }
];

export const OpenSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    title: "SWOC/Leetcode-Journal",
    description: "Social Winter Of Code 2025 project.",
    image: "/githubLink.svg",
    link: "https://github.com/hanuchaudhary/Leetcode-Journal",
  },
  {
    id: 2,
    title: "100xdev/photo-ai",
    description: "Implemented Transaction Management & Purchase History UI",
    image: "/githubLink.svg",
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
]
