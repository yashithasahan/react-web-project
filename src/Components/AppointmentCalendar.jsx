import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState("");
  const [message, setMessage] = useState("");

  const consultants = [
    "Consultant 1",
    "Consultant 2",
    "Consultant 3",
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedConsultant || !message) {
      alert("Please fill in all fields before booking.");
      return;
    }

    console.log("Booking Details:", {
      date: selectedDate,
      consultant: selectedConsultant,
      message: message,
    });
  };

  return (
    <div className="mb-8 flex items-center">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Consultant</label>
          <select
            value={selectedConsultant}
            onChange={(e) => setSelectedConsultant(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a consultant</option>
            {consultants.map((consultant, index) => (
              <option key={index} value={consultant}>
                {consultant}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline // Set inline to true
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full max-w-full px-3 py-2 border rounded"
            rows="4"
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book
        </button>
      </div>
      <div className="w-1/2 text-center">
        {selectedDate && (
          <div className="text-3xl font-semibold mt-8">
            {selectedDate.toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
};

export { AppointmentCalendar };
