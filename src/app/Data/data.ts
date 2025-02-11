export interface Project {
    id: number;
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
}

export interface OpenSourceContribution {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface Blogs {
    title: string;
    link: string;
    Date: string;
}

export const Skills: string[] = [
    'TypeScript',
    'JavaScript',
    'React',
    'Nextjs',
    'NodeJs',
    'Tailwind Css',
    'ExpressJs',
    'HonoJs',
    'MongoDB',
    'Prisma',
    'PostgreSQL',
    'Framer Motion',
    'Socket.io',
    'C',
    'HTML5',
    'CSS3',
    'Postman',
    'Docker',
    'Redis',
    'Python',
    'Firebase',
    'GitHub',
    'RecoilJs',
    'Turborepo',
    'Zustand',
    'WebSockets',
    'React Native',
    'Notion',
    'React Router Dom',
    'MUI',
    'Bootstrap',
    'Git',
    'Netlify',
    'Vercel',
];

export const Projects: Project[] = [
    {
        id: 1,
        title: "CoursePros",
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

export const Blogs: Blogs[] = [
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
