import React from "react";
import "./Welcome.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

// import Earth from "./components/earth/Earth";

import TopSection from "./components/topSection/TopSection";
import Earth from "./components/earth/Earth";

const CanvasContainer = styled.div`
  width: 100%;

  height: 100%;
`;

function Welcome() {
  return (
    <CanvasContainer>
      <TopSection />

      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default Welcome;
