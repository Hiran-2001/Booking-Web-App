import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import FlightTicketBooking from "./Components/FlightTicket/FlightTicketBooking";
import HotelBooking from "./Components/HotelBooking/HotelBooking";
import BusTicketBooking from "./Components/BusTicketBooking/BusTicketBooking";
import TrainTicketBooking from "./Components/TrainTicketBooking/TrainTicketBooking";
import CarBooking from "./Components/CarBooking/CarBooking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="flight" element={<FlightTicketBooking />}></Route>
            <Route path="hotel" element={<HotelBooking />}></Route>
            <Route path="bus" element={<BusTicketBooking />}></Route>
            <Route path="train" element={<TrainTicketBooking/>}></Route>
            <Route path="cab" element={<CarBooking/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
