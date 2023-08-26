import React from "react";

const HomeDash = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Upcoming Bookings</h2>
          <p>Your upcoming booking information will be displayed here.</p>
        </div>

     
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Latest Job Opportunities</h2>
          <p>Explore the latest job openings in your field.</p>
        </div>

  
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Related Information</h2>
          <p>Get valuable tips and resources related to job searching.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
