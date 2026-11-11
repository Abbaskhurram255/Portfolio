import {
	p1,
	p2,
	p3,
	dict,
	music_player,
	file_finder,
	alarm
} from "./assets/images";
import {
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
		link: 'https://github.com/abbaskhurram255',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/Khurram.Ali',
	}
];

export const projects = [
	{
		iconUrl: p1,
		theme: 'btn-back-yellow',
		name: 'Klang (Custom Programming Language)',
		description: 'A huge Domain Specific Programming Language that makes Python feel like Urdu (every famous data science project comes pre-installed, 2+GB in size).',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/klang_setup_final_parts.exe',
	},
	{
		iconUrl: p2,
		theme: 'btn-back-pink',
		name: 'AyeshaGPT',
		description: 'My very own Small Language Model (GPT) trained with Pytorch, made alive with CustomTkinter, capable of automation tasks like opening/closing applications, sending emails, sending quick whatsapp messages, reading/editing/deleting files/folders, and much more.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/AyeshaGPT1.2_beta.exe',
	},
	{
		iconUrl: p3,
		theme: 'btn-back-green',
		name: 'Kreact',
		description: 'Another heavy programming language that translates readable Urdu-like React code to javascript.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/kreact_gui_9.1_beta.exe',
	},
	{
		iconUrl: nodejs,
		theme: 'btn-back-blue',
		name: 'Review Generator',
		description: 'A node.js backend used to provide example reviews for an underrated website.',
		link: 'https://randusers-api.vercel.app/',
	},
	{
		iconUrl: dict,
		theme: 'btn-back-red',
		name: 'kDictionary',
		description: 'An English to Urdu dictionary made with Python.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/ayeshdict.exe',
	},
	{
		iconUrl: music_player,
		theme: 'btn-back-orange',
		name: 'kMusicPlayer',
		description: 'A Python Music Player application with attractive user interface that can speak.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/kMusicPlayer1.1.exe',
	},
	{
		iconUrl: file_finder,
		theme: 'btn-back-pink',
		name: 'File Finder',
		description: 'A File Finder utility that can help find hidden files in a directory.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/file_finder_0.0.0.0.exe',
	},
	{
		iconUrl: alarm,
		theme: 'btn-back-yellow',
		name: 'kAlarm',
		description: 'No more forgotten meetings. Fix an schedule, get commited to it.',
		link: 'https://github.com/Abbaskhurram255/hindCPlusPlus/releases/download/0.8b4/kAlarm.exe',
	}
];