import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const modelUrl = new URL(
    "/models/computer-optimized-transformed.glb",
    import.meta.url
  ).href;

  const { nodes, materials } = useGLTF(modelUrl);

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  new URL("/models/computer-optimized-transformed.glb", import.meta.url).href
);

export default Computer;
