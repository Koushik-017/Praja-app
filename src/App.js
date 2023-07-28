import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Aselector from "./Areaselector";

import Container from "@material-ui/core/Container";
import KoppalAssembly from "./KoppalAssembly";
import YadgirAssembly from "./YadgirAssembly";
import UttarKannadaAssembly from "./UttarKannadaAssembly";
import KolarAssembly from "./KolarAssembly";
import MandyaAssembly from "./MandyaAssembly";
import MysoreAssembly from "./MysoreAssembly";
import AssemblyListShimoga from "./shimogaassembly";
import HaveriAssembly from "./HaveriAssembly";
import KodaguAssembly from "./KodaguAssembly";
import AssemblyListUdupi from "./udupiassembly";
import GulbargaAssembly from "./GulbargaAssembly";
import AssemblyListBelgaum from "./Belgaumassembly";
import AssemblyListBagalkot from "./BagalkotAssembly";
import AssemblyListBellary from "./BellaryAssembly";
import AssemblyListBengaluruRural from "./BengaluruRuralAssembly";
import AssemblyListBidar from "./BidarAssembly";
import BangaloreAssembly from "./BangaloreAssembly";
import RamanagaraAssembly from "./RamanagaraAssembly";
import BijapurAssembly from "./BijapurAssembly";
import ChamrajanagarAssembly from "./ChamrajnagarAssembly";
import ChikkaballapuraAssembly from "./ChikkaballapuraAssembly";
import ChikmagalurAssembly from "./ChikmagalurAssembly";
import ChitradurgaAssembly from "./ChitradurgaAssembly";
import DavanagereAssembly from "./DavanagereAssembly";
import DharwadAssembly from "./DharwadAssembly";
import GadagAssembly from "./GadagAssembly";
import HassanAssembly from "./HassanAssembly";
import RaichurAssembly from "./RaichurAssembly";
import TumkurAssembly from "./TumkurAssembly";

import "./App.css";

// import Home from "./Home";

import Chart3 from "./Chart3";

import Chart1 from "./Chart1";

import Chart2 from "./Chart2";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";
import Chart6 from "./Chart6";
import Chart7 from "./Chart7";
import Chart8 from "./Chart8";
import Chart9 from "./Chart9";
import Chart10 from "./Chart10";
import Chart11 from "./Chart11";
import Chart12 from "./Chart12";
import Chart13 from "./Chart13";
import Chart14 from "./Chart14";
import Chart15 from "./Chart15";
import Chart16 from "./Chart16";
import Chart17 from "./Chart17";
import Chart18 from "./Chart18";
import Chart19 from "./Chart19";
import Chart20 from "./Chart20";
import Chart21 from "./Chart21";
import Chart22 from "./Chart22";
import Chart23 from "./Chart23";
import Chart24 from "./Chart24";
import Chart25 from "./Chart25";
import Chart26 from "./Chart26";
import Welcome from "./Welcome";
import Login from "./Login";
const App = () => {
  return (
    <BrowserRouter style={{ overflow: "scroll" }}>
      <Container maxWidth="md" style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route path="/Home" element={<Welcome />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route
            path="/react-india-region-selector"
            element={<Aselector />}
          ></Route>
          <Route
            path="/assembly/Ramanagara"
            element={<RamanagaraAssembly />}
          ></Route>
          <Route
            path="/assembly/UttaraKannada"
            element={<UttarKannadaAssembly />}
          ></Route>
          <Route path="/assembly/Yadgir" element={<YadgirAssembly />}></Route>
          <Route path="/assembly/Tumkur" element={<TumkurAssembly />}></Route>
          <Route path="/assembly/Raichur" element={<RaichurAssembly />}></Route>
          <Route path="/assembly/Mysore" element={<MysoreAssembly />}></Route>
          <Route path="/assembly/Mandya" element={<MandyaAssembly />}></Route>
          <Route path="/assembly/Koppal" element={<KoppalAssembly />}></Route>
          <Route path="/assembly/Kolar" element={<KolarAssembly />}></Route>
          <Route path="/assembly/Kodagu" element={<KodaguAssembly />}></Route>
          <Route path="/assembly/Haveri" element={<HaveriAssembly />}></Route>
          <Route
            path="/assembly/Gulbarga"
            element={<GulbargaAssembly />}
          ></Route>
          <Route path="/assembly/Hassan" element={<HassanAssembly />}></Route>
          <Route
            path="/assembly/Davanagere"
            element={<DavanagereAssembly />}
          ></Route>
          <Route path="/assembly/Gadag" element={<GadagAssembly />}></Route>
          <Route
            path="/assembly/Shimoga"
            element={<AssemblyListShimoga />}
          ></Route>
          <Route
            path="/assembly/Chikmagalur"
            element={<ChikmagalurAssembly />}
          ></Route>
          <Route
            path="/assembly/Bangalore"
            element={<BangaloreAssembly />}
          ></Route>
          <Route path="/assembly/Udupi" element={<AssemblyListUdupi />}></Route>
          <Route
            path="/assembly/Chitradurga"
            element={<ChitradurgaAssembly />}
          ></Route>
          <Route
            path="/assembly/Belgaum"
            element={<AssemblyListBelgaum />}
          ></Route>
          <Route path="/assembly/Bijapur" element={<BijapurAssembly />}></Route>
          <Route
            path="/assembly/Chikkaballapura"
            element={<ChikkaballapuraAssembly />}
          ></Route>
          <Route
            path="/assembly/Chamrajnagar"
            element={<ChamrajanagarAssembly />}
          ></Route>
          <Route
            path="/assembly/Bellary"
            element={<AssemblyListBellary />}
          ></Route>
          <Route
            path="/assembly/BengaluruRural"
            element={<AssemblyListBengaluruRural />}
          ></Route>
          <Route path="/assembly/Bidar" element={<AssemblyListBidar />}></Route>
          <Route
            path="/assembly/Bagalkot"
            element={<AssemblyListBagalkot />}
          ></Route>
          <Route path="/assembly/Dharwad" element={<DharwadAssembly />}></Route>

          <Route path="/population-graph/:id" element={<Chart1 />}></Route>
          <Route
            path="/population-graph/Belgaum/:id"
            element={<Chart2 />}
          ></Route>
          <Route
            path="/population-graph/udupi/:id"
            element={<Chart3 />}
          ></Route>
          <Route
            path="/population-graph/Bagalkote/:id"
            element={<Chart4 />}
          ></Route>

          <Route
            path="/population-graph/Bengaluru/:id"
            element={<Chart5 />}
          ></Route>
          <Route
            path="/population-graph/Bidar/:id"
            element={<Chart6 />}
          ></Route>
          <Route
            path="/population-graph/Bijapura/:id"
            element={<Chart7 />}
          ></Route>
          <Route
            path="/population-graph/Chamarajanagara/:id"
            element={<Chart8 />}
          ></Route>
          <Route
            path="/population-graph/Chikkaballapura/:id"
            element={<Chart9 />}
          ></Route>
          <Route
            path="/population-graph/Chikmagalur/:id"
            element={<Chart10 />}
          ></Route>
          <Route
            path="/population-graph/Kodagu/:id"
            element={<Chart18 />}
          ></Route>

          <Route
            path="/population-graph/Chitradurga/:id"
            element={<Chart11 />}
          ></Route>
          <Route
            path="/population-graph/Davanagere/:id"
            element={<Chart12 />}
          ></Route>
          <Route
            path="/population-graph/Dharwad/:id"
            element={<Chart13 />}
          ></Route>
          <Route
            path="/population-graph/Gadag/:id"
            element={<Chart14 />}
          ></Route>
          <Route
            path="/population-graph/Gulbarga/:id"
            element={<Chart15 />}
          ></Route>
          <Route
            path="/population-graph/Hassan/:id"
            element={<Chart16 />}
          ></Route>
          <Route
            path="/population-graph/Haveri/:id"
            element={<Chart17 />}
          ></Route>
          <Route
            path="/population-graph/Kolar/:id"
            element={<Chart19 />}
          ></Route>
          <Route
            path="/population-graph/Koppal/:id"
            element={<Chart20 />}
          ></Route>
          <Route
            path="/population-graph/Mandya/:id"
            element={<Chart21 />}
          ></Route>
          <Route
            path="/population-graph/Mysore/:id"
            element={<Chart22 />}
          ></Route>
          <Route
            path="/population-graph/Raichur/:id"
            element={<Chart23 />}
          ></Route>
          <Route
            path="/population-graph/Ramanagara/:id"
            element={<Chart24 />}
          ></Route>
          <Route
            path="/population-graph/Tumkur/:id"
            element={<Chart25 />}
          ></Route>
          {/* <Route
            path="/population-graph/UttarKannada/:id"
            element={<Chart26 />}
          ></Route> */}
          <Route
            path="/population-graph/Yadgir/:id"
            element={<Chart26 />}
          ></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
