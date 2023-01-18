import "./App.css";
import Title from "./Components/Title";
import Interest from "./Components/Interest";
import Way from "./Components/Way";
import Triangle from "./Components/Triangle";
import Join from "./Components/Join";
import Curriculum from "./Components/Curriculum";


function App() {
  return (
    <body className=" bg-title-green/25 font-sans text-font-color">
      <Title />
      <Interest />
      <Way />
      <Triangle />
      <Join />
      <Curriculum />
    </body>
  );
}

export default App;
