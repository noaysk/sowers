import "./App.css";
import Title from "./Components/Title";
import Interest from "./Components/Interest";
import Way from "./Components/Way";
import Triangle from "./Components/Triangle";
import Join from "./Components/Join";
import Curriculum from "./Components/Curriculum";
import Ticket from "./Components/Ticket";
import Apply from "./Components/Apply";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-title-green/25 font-sans text-font-color">
      <div className="">
        <Title />
        <main>
          <Interest />
          <Way />
          <Triangle />
          <Join />
          <Curriculum />
          <Ticket />
          <Apply />
        </main>
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
