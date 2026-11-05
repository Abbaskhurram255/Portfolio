import {
	useState,
	useRef,
	Suspense
} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
	const formRef = useRef(null);
	const INITIAL_FORM_FIELDS = {
		"name": "",
		"email": "",
		"message": ""
	};
	const [
		form,
		setForm
	] = useState(INITIAL_FORM_FIELDS);
	const resetForm = () => {
		setForm(INITIAL_FORM_FIELDS);
	};
	const [
		isLoading,
		setIsLoading
	] = useState(false);
	const [
		currentAnimation,
		setCurrentAnimation
	] = useState("idle");
	const {
		alert,
		showAlert,
		hideAlert
	} = useAlert();
	const handleChange = (e) => {
		setForm(
			{
				...form,
				[e.target.name]: e.target.value
			}
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setCurrentAnimation("hit");
		emailjs.send(
			import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
			{
				from_name: form.name,
				to_name: "Khurram Ali",
				from_email: form.email,
				to_email: "abbaskhurram255@gmail.com",
				message: form.message
			},
			import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
		).then(() => {
			setIsLoading(false);
			showAlert(
				{
					text: 'Message sent successfully!',
					type: 'success'
				}
			);
			setTimeout(() => {
				hideAlert();
				setCurrentAnimation("idle");
				resetForm();
			}, 3000);
		}).catch(error => {
			setIsLoading(false);
			setCurrentAnimation("idle");
			console.log(error);
			showAlert({
				text: 'Message failed to send.',
				type: 'danger'
			});
		});
	};
	const handleFocus = (e) => {
		setCurrentAnimation("walk");
	}
	const handleBlur = (e) => {
		setCurrentAnimation("idle");
	}
	return (
		<>
			<section
				className="relative flex lg:flex-row flex-col max-container"
			>
				{
					alert.show
						&& <Alert {...alert} />
				}
				<div
					className="flex-1 min-w-[50%] flex flex-col"
				>
					<h1
						className="head-text"
					>
						Get in Touch
					</h1>
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col gap-7 mt-14"
					>
						<label
							className="text-black-500 font-semibold"
						>
							Name
							<input
								type="text"
								name="name"
								className="input"
								placeholder="John"
								title="Please enter your name *"
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</label>
						<label
							className="text-black-500 font-semibold"
						>
							Email
							<input
								type="email"
								name="email"
								className="input"
								placeholder="john@site.com"
								title="Please enter your email *"
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</label>
						<label
							className="text-black-500 font-semibold"
						>
							Your Message
							<textarea
								name="message"
								rows={4}
								className="textarea"
								placeholder="Let me know how I can help you!"
								title="Please enter your message *"
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</label>
						<button
							type="submit"
							className="mt-2 text-lg py-1 md:py-2 text-white rounded-md bg-green-800 hover:bg-green-600 transition-transform ease-in-out duration-600 hover:scale-105"
							onFocus={handleFocus}
							onBlur={handleBlur}
							disabled={isLoading}
						>
							{
								isLoading
									? "Sending..."
									: "Send Message"
							}
						</button>
					</form>
				</div>
				<div
					className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
				>
					<Canvas
						camera={
							{
								"position": [0, 0, 5],
								"fov": 75,
								"near": 0.1,
								"far": 1000
							}
						}
					>
						<directionalLight
							intensity={2.5}
							position={[0, 0, 1]}
							
						/>
						<ambientLight
							intensity={.7}
							
						/>
						<Suspense
							fallback={<Loader />}
						>
							<Fox
								position={[0.5, 0.35, 0]}
								rotation={[12.6, -0.5, 0]}
								scale={[0.5, 0.5, 0.5]}
																currentAnimation={currentAnimation}
						setCurrentAnimation={setCurrentAnimation}				
							/>
						</Suspense>
					</Canvas>
				</div>
			</section>
		</>
	);
};

export default Contact;