import { Canvas } from "@react-three/fiber";
import { ThreeWorlds } from "../components/ThreeWorlds";
import "../styles/ThreeWorldsPage.css";

const LibraryPage = () => {
  return (
    <div className="three-worlds-page">
      <Canvas>
        <ThreeWorlds />
      </Canvas>
    </div>
  );
};

export default LibraryPage;
