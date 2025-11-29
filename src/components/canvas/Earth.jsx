import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'; // Import the THREE library
import CanvasLoader from "../Loader";


const Earth = () => {
    const earth = useGLTF("./avatar/avatar.glb");


    // This will iterate through all children (objects) in the loaded scene.
    earth.scene.traverse((object) => {
        // We only want to apply the material change to actual Meshes
        if (object.isMesh) {
            // Apply a new MeshStandardMaterial for metallic look
            object.material = new THREE.MeshStandardMaterial({
                color: '#008bf8',   // Gold color
                metalness: 1.0,     // Fully metallic
                roughness: 0.2,
                wireframe: true,  // Shiny look
            });
            // Ensure the geometry casts and receives shadows
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
    // 🌟 END OF TRAVERSE 🌟

    return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            className="canvas"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                {/* Add an ambient light and directional light for better visibility of the metallic surface */}
                {/* <ambientLight intensity={0.001} /> */}
                <directionalLight position={[2, 2, 2]} intensity={4} color="#d7dbdf" />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;