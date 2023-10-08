import { Grid, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import { Character } from "./Character";

export const Experience = () => {

  return (
    <>
      <Perf position="top-left"/>

      <Grid
        args={[300, 300]}
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, -0.99, 0]}
        userData={{ camExcludeCollision: true }} // this won't be collide by camera ray
      />

      <Lights />

      <Physics debug>
        <Character />
        <OrbitControls />
      </Physics>
    </>
  );
};
