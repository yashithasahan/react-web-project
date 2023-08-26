import React from "react";

const AppointmentTable = () => {
 const appointments = [
  { id: 1, date: "2023-08-25", time: "10:00 AM", client: "John Doe", status: "Upcoming" },
  { id: 2, date: "2023-08-26", time: "2:00 PM", client: "Jane Smith", status: "Finished" },
  { id: 3, date: "2023-08-27", time: "3:30 PM", client: "Alice Johnson", status: "Upcoming" },
  { id: 4, date: "2023-08-28", time: "11:15 AM", client: "Bob Brown", status: "Finished" },
  { id: 5, date: "2023-08-29", time: "9:45 AM", client: "Eva Williams", status: "Upcoming" },
  { id: 6, date: "2023-08-30", time: "1:00 PM", client: "Mike Davis", status: "Finished" },
  { id: 7, date: "2023-08-31", time: "4:30 PM", client: "Lisa Martinez", status: "Upcoming" },
  { id: 8, date: "2023-09-01", time: "12:45 PM", client: "Chris Rodriguez", status: "Finished" },
  { id: 9, date: "2023-09-02", time: "8:15 AM", client: "Olivia Taylor", status: "Upcoming" },
  { id: 10, date: "2023-09-03", time: "5:00 PM", client: "David Anderson", status: "Finished" },
];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Appointments</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Status</th> {/* New column */}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border px-4 py-2">{appointment.id}</td>
              <td className="border px-4 py-2">{appointment.date}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
              <td className="border px-4 py-2">{appointment.client}</td>
              <td className="border px-4 py-2">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { AppointmentTable };