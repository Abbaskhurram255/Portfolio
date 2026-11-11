import {
	meta,
	shopify,
	starbucks,
	tesla
} from "./assets/images";
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
	python,
	pandas,
	numpy,
	sklearn,
	fastapi,
	tkinter,
	pysimplegui,
	pytorch,
	sqlite
} from "./assets/icons";

export const skills = [
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
	{
		imageUrl: python,
		name: "Python",
		type: "Backend",
	},
	{
		imageUrl: pandas,
		name: "Pandas",
		type: "Backend",
	},
	{
		imageUrl: numpy,
		name: "Numpy",
		type: "Backend",
	},
	{
		imageUrl: sklearn,
		name: "Sklearn",
		type: "Backend",
	},
	{
		imageUrl: fastapi,
		name: "FastAPI",
		type: "Backend",
	},
	{
		imageUrl: tkinter,
		name: "Tkinter",
		type: "Frontend",
	},
	{
		imageUrl: pysimplegui,
		name: "PySimpleGUI",
		type: "Frontend",
	},
	{
		imageUrl: pytorch,
		name: "PyTorch",
		type: "Backend",
	},
	{
		imageUrl: sqlite,
		name: "Sqlite3",
		type: "Backend",
	}
];

export const experiences = [
	{
		title: "React.js Developer",
		company_name: "Star Software House, Malir",
		icon: react,
		iconBg: "#accbe1",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "ML Developer",
		company_name: "House of Data Software House, Nazimabad",
		icon: sklearn,
		iconBg: "#fbc3bc",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developed and maintained data applications using Streamlit, Dash, and other related technologies (PyTorch, OpenCV, Matplotlib, Seaborn, Plotly).",
			"Cleaned multiple datasets, and made an analysis of the data.",
			"Implemented classification of data among various different contexts (regression with LinearRegression & HistGradientBoostingRegressor, and classification with LogisticRegression & KNeighborsClassifier.)",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Backend Developer",
		company_name: "SnS (SoftnSoft) Software House, Malir",
		icon: nodejs,
		iconBg: "#b7e4c7",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using Node.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing no-delay server design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "FastAPI Backend Developer",
		company_name: "AI-tomation Software House, Quaidabad",
		icon: fastapi,
		iconBg: "#92d2cc",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web backends using FastAPI, BeautfulSoup, and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing no-delay server design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/YourGitHubUsername',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/YourLinkedInUsername',
	}
];

export const projects = [
	{
		iconUrl: summiz,
		theme: 'btn-back-yellow',
		name: 'Klang (Custom Programming Language)',
		description: 'A huge Domain Specific Programming Language that makes Python feel like Urdu (every famous data science project comes pre-installed, 2+GB in size).',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/klang_setup_final_parts.exe',
	},
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'AyeshaGPT',
		description: 'My very own Small Language Model (GPT) trained with Pytorch, made alive with CustomTkinter, capable of automation tasks like opening/closing applications, sending emails, sending quick whatsapp messages, reading/editing/deleting files/folders, and much more.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/AyeshaGPT1.2_beta.exe',
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Full Stack Threads Clone',
		description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: 'https://github.com/adrianhajdin/threads',
	},
	{
		iconUrl: car,
		theme: 'btn-back-blue',
		name: 'Car Finding App',
		description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
		link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'Full Stack Instagram Clone',
		description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
		link: 'https://github.com/adrianhajdin/social_media_app',
	},
	{
		iconUrl: estate,
		theme: 'btn-back-black',
		name: 'Real-Estate Application',
		description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
		link: 'https://github.com/adrianhajdin/projects_realestate',
	},
];