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

import MTitle from "./Components/mobile/Title";
import MInterest from "./Components/mobile/Interest";
import MWay from "./Components/mobile/Way";
import MTriangle from "./Components/mobile/Triangle";
import MJoin from "./Components/mobile/Join";
import MCurriculum from "./Components/mobile/Curriculum";
import MTicket from "./Components/mobile/Ticket";
import MApply from "./Components/mobile/Apply";

function App() {
  return (
    <div className="bg-title-green/25 font-sans text-font-color">
      <div className="hidden md:block">
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
      <div className=" md:hidden ">
        <MTitle />
        <main>
          <MInterest />
          <MWay />
          <MTriangle />
          <MJoin />
          <MCurriculum />
          <MTicket />
          <MApply />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
