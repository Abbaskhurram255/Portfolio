import { useRef } from 'react'
import {
	useGLTF
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/sky.glb'

export default function Sky({isRotating, ...props}) {
	const sky = useGLTF(
		skyScene
	);
	const skyRef = useRef();
	useFrame((_, delta) => {
		if (!isRotating)
			return;
		skyRef.current.rotation.y += 0.2 * delta;
	});
	return (
		<>
			<mesh ref={skyRef}>
				<primitive
					object={sky.scene}
				/>
			</mesh>
		</>
	);
};