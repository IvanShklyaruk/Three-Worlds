import React from "react";
import { Canvas } from "@react-three/fiber";
import { ThreeWorlds } from "../components/ThreeWorlds";
import LoadingScreen from "../components/LoadingScreen";
import "../styles/ThreeWorldsPage.css";

const LibraryPage = () => {
  return (
    <>
      <LoadingScreen />
      <div className="three-worlds-page">
        <Canvas>
          <ThreeWorlds />
        </Canvas>
      </div>
    </>
  );
};

export default LibraryPage;
