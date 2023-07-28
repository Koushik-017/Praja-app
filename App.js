import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Aselector from "./Areaselector";
import Container from "@material-ui/core/Container";
import AssemblyListShimoga from "./shimogaassembly";
import AssemblyListUdupi from "./udupiassembly";
import AssemblyListBelgaum from "./Belgaumassembly";
import "./App.css";
import App1 from "./App1";
import Chart3 from "./Chart3";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart4 from "./Chart4";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="md" style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<App1 />} />
          <Route path="/react-india-region-selector"element={<Aselector />}></Route>
          <Route path="/assembly/Shimoga"element={<AssemblyListShimoga />}></Route>
          <Route path="/assembly/Udupi" element={<AssemblyListUdupi />}></Route>
          <Route
            path="/assembly/Belgaum"
            element={<AssemblyListBelgaum />}></Route>
          <Route path="/population-graph/:id" element={<Chart1 />}></Route>
          <Route
            path="/population-graph/Belgaum/:id"
            element={<Chart2 />}></Route>
          <Route
            path="/population-graph/udupi/:id"
            element={<Chart3 />}></Route>
             <Route path="/population-graph/Bagalkote/:id"element={<Chart4 />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
