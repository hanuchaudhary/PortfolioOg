interface Skill {
    name: string;
    icon: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
}

interface OpenSourceContribution {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

interface Blogs {
    title: string;
    link: string;
    Date: string;
}

export const Skills: Skill[] = [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Python', icon: 'python' },
    { name: 'React', icon: 'react' },
    { name: 'Nextjs', icon: 'nextjs' },
    { name: 'React Native', icon: 'reactNative' },
    { name: 'NodeJs', icon: 'nodejs' },
    { name: 'ExpressJs', icon: 'expressjs' },
    { name: 'HonoJs', icon: 'hono' },
    { name: 'Socket.io', icon: 'socketjs' },
    { name: 'WebSockets', icon: 'websocket' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Prisma', icon: 'prisma' },
    { name: 'RecoilJs', icon: 'recoil' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'SQL', icon: 'sql' },
    { name: 'GitHub', icon: 'githubLink' },
    { name: 'Tailwind Css', icon: 'tailwind' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Redis', icon: 'redis' },
    { name: 'Notion', icon: 'notion' },
    { name: 'Zustand', icon: 'zustand' },
    { name: 'Turborepo', icon: 'turborepo' },
    { name: 'C', icon: 'c' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'React Router Dom', icon: 'react-router-dom' },
    { name: 'MUI', icon: 'material-ui' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Git', icon: 'git' },
    { name: 'Yarn', icon: 'yarn' },
    { name: 'NPM', icon: 'npm' },
    { name: 'JWT', icon: 'jsonwebtokens' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'Vercel', icon: 'vercel' },
];

export const Projects: Project[] = [
    {
        id: 1,
        title: "CoursePros.",
        description: "An online learning platform for students and teachers.",
        liveLink: "https://50xcourses.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/courseApp"
    },
    {
        id: 2,
        title: "Instagram",
        description: "end-to-end instagram clone with chat, reels, etc.",
        liveLink: "x",
        githubLink: "https://github.com/hanuchaudhary/instagram"
    },
    {
        id: 3,
        title: "50xOpportunities",
        description: "platform where people can create jobs and find and apply for them.",
        liveLink: "https://50x0pportunities.vercel.app/jobs",
        githubLink: "https://github.com/hanuchaudhary/50x0pportunities"
    },
    {
        id: 4,
        title: "Anonymous Comments",
        description: "application that allows users to share feedback anonymously.",
        liveLink: "https://anonymous-comments.vercel.app/",
        githubLink: "https://github.com/hanuchaudhary/anonymous-comments"
    },
];

export const OpenSourceContributions: OpenSourceContribution[] = [
    {
        id: 1,
        title: "SWOC/Leetcode-Journal",
        description: "Social Winter Of Code 2025 project.",
        image: "/githubLink.svg",
        link: "https://github.com/hanuchaudhary/Leetcode-Journal"
    },
];

export const InfoArray: string[] = [
    "I'm a full-stack engineer from India.",
    "Write technical blogs on Medium",
    "Currently pursuing B.Tech in Computer Science.",
    "Let's talk how we can work together!",
];

export const Blogs: Blogs[] = [
    {
        title: "Setting Up Tailwind CSS in a Django Project on Windows",
        link: "https://medium.com/@kushchaudharyog/setting-up-tailwind-css-in-a-django-project-on-windows-ffe0d2132cdc",
        Date: "Dec 26, 2024",
    },
    {
        title: "How to Integrate Razorpay in Next.js 14/15 with Easy Steps.",
        link: "https://medium.com/@kushchaudharyog/how-to-integrate-razorpay-in-next-js-14-15-with-easy-steps-f2d80772009c",
        Date: "Jan 24, 2025",
    },
]
