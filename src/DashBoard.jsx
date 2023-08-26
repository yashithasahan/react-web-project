import React, { useState } from "react";
import { AppointmentCalendar } from "./Components/AppointmentCalendar";
import { AppointmentTable } from "./Components/AppointmentTable";
import Footer from './Components/Fotter';
import HomeDash from "./Components/HomeDash";
const Dashboard = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const renderScreen = () => {
    if (currentScreen === "appointments") {
      return <AppointmentTable />;
    } else if (currentScreen === "booking") {
      return <AppointmentCalendar />;
    } else if (currentScreen === "home") { // Display HomeDash for the "home" screen
      return <HomeDash />;
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          {currentScreen === "settings" ? "Settings Page" : ""}
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-lg">Get your JoB</div>
          <div className="space-x-4">
            <button
              className={`text-white hover:underline ${
                currentScreen === "home" && "font-bold"
              }`}
              onClick={() => setCurrentScreen("home")}
            >
              Home
            </button>
            <button
              className={`text-white hover:underline ${
                currentScreen === "appointments" && "font-bold"
              }`}
              onClick={() => setCurrentScreen("appointments")}
            >
              Appointments
            </button>
            <button
              className={`text-white hover:underline ${
                currentScreen === "booking" && "font-bold"
              }`}
              onClick={() => setCurrentScreen("booking")}
            >
              Booking
            </button>
            <button
              className={`text-white hover:underline ${
                currentScreen === "settings" && "font-bold"
              }`}
              onClick={() => setCurrentScreen("settings")}
            >
              Settings
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">{renderScreen()}</div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
