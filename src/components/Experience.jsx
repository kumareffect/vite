import { OrbitControls } from "@react-three/drei";
import { Gate } from "./Gate";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        {/* <boxGeometry /> */}
        {/* <meshNormalMaterial /> */}
        <Gate />
      </mesh>
    </>
  );
};
