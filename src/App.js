import "./App.css";
import { Line } from "./components/Line";
import Navbar from "./components/Navbar";
import { Sectiion1 } from "./components/Sectiion1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";

function App() {
  return (
    <div className=" w-full h-full items-center flex flex-col mx-auto ">
    <Navbar></Navbar>
    <Sectiion1></Sectiion1>
    <Section2></Section2>
    <Line></Line>
    <Section3></Section3>
    </div>
  );
}


export default App;
