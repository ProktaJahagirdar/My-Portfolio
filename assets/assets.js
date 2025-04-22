import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Task Management System',
        description: "A comprehensive task management API that enables users to create, track, and manage tasks. It supports task deadlines, priorities, and collaboration features for teams.",
        techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Chart.js", "CSS3"],
        bgImage: '/work-1.png',
        githubLink: 'https://github.com/ProktaJahagirdar/Task-Management-System',
    },
    {
        title: 'Weather API ',
        description: 'A weather forecasting API that provides real-time data on weather conditions, forecasts, and climate statistics, including temperature, humidity, and precipitation for any location.',
        bgImage: '/project2.png',
        githubLink: 'https://github.com/ProktaJahagirdar/WeatherAPI',
    },
    {
        title: 'Expense Tracker API',
        description: 'A robust API that helps users manage and track their expenses by categorizing transactions, setting budget limits, and generating detailed spending reports.',
        bgImage: '/project3.png',
        githubLink: 'https://github.com/ProktaJahagirdar/Expense-Tracker-API',
    },
    {
        title: 'Clothing Inventory Management System',
        description: 'A system designed to manage clothing inventory for retail businesses, tracking stock, updating product details, and generating sales reports in real-time.',
        bgImage: '/project4.png',
        githubLink: 'https://github.com/ProktaJahagirdar/Fashion-Clothes-Shopping-Database-Management-System',
    },
    {
        title: 'RecipeFit',
        description: 'RecipeFit is a mobile app that helps users discover personalized recipes based on their dietary preferences, providing detailed nutritional information. It allows users to search, save favorites, and customize their meal plans with ease.',
        bgImage: '/project6.png',
        githubLink: 'https://github.com/ProktaJahagirdar/RecipeFit',
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my development projects, skills, and achievements, serving as an online resume and platform for collaboration.',
        bgImage: '/project5.png',
        githubLink: 'https://github.com/ProktaJahagirdar/My-Portfolio',
    },
]

export const educationData = [
    {
        "degree": "Master of Science in Computer Science",
        "university": "New Jersey Institute of Technology",
        "timePeriod": "2022 - 2024",
        "coursework": ["Cloud Computing", "Data Structures & Algorithms", "Big Data", "Web System Development", "Database Management System", "Operating Systems", " Data Mining"]
    },
    {
        "degree": "Bachelor of Engineering in Computer Science",
        "university": "BNM Institute of Technology",
        "timePeriod": "2018 - 2022",
        "coursework": ["Algorithms", "Operating Systems", "Databases", "Software Engineering", "Computer Networks", "Java Programming", "Web Technologies", "C Programming"]
    }
]

export const experienceData = [
    {
        "company": "PNC",
        "role": "Software Engineer",
        "timePeriod": "2024 - Present",
        "description": [
            "Developed 5+ RESTful microservices with Spring Boot & Docker, reducing API latency by 20%.",
            "Improved banking UI responsiveness with Angular/JavaScript, boosting user satisfaction by 10%.",
            "Optimized AWS Lambda & S3, cutting server maintenance by 30% and scaling to 200K+ daily file transactions.",
            "Delivered 95% of sprint commitments in Agile teams, ensuring consistent bi-weekly releases."
        ]
    },
    {
        "company": "Neon IT Systems",
        "role": "Software Engineer",
        "timePeriod": "2020 - 2022",
        "description": [
            "Built high-throughput Spring Boot microservices, handling 100K+ transactions/min and cutting latency by 40%.",
            "Developed React.js apps, boosting user engagement by 25% and simplifying financial data visualization.",
            "Optimized PostgreSQL & MongoDB, reducing query times by 30% for faster financial reporting.",
            "Automated data workflows with Python, saving 200+ hours/month and reducing data errors by 15%."
        ]
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Programming Languages', skills: ['Java', 'Python', 'Javascript', 'C', 'SQL', 'HTML', 'CSS', 'PHP', 'Typescript', 'C++'] },
    { icon: assets.mobile_icon, title: 'Databases', skills: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Oracle', 'SQL Server'] },
    { icon: assets.ui_icon, title: 'Frameworks & Technologies', skills: ['Sping-boot', 'Express.js', 'React.js', 'Node.js', 'Flask', 'Flutter', 'Tailwind CSS'] },
    { icon: assets.graphics_icon, title: 'Cloud Services', skills: ['Amazon Web Services(AWS)', 'Microsoft Azure', 'Google Cloud Platform(GCP)'] },
    { icon: assets.graphics_icon, title: 'Tools', skills: ['Docker', 'Git', 'Github', 'Jira', 'Jenkins', 'Figma', 'Postman', 'Bitbucket', 'Bootstrap'] },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];