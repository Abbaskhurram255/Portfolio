import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './main.css'

createRoot(
	document.querySelector(
		"#root"
	)
).render(
	<App />
);