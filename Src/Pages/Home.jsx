import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Travel Booking</h1>
      <p className="text-lg mb-6">Select your booking type:</p>
      <div>
        <Link to="/cab-booking">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4">
            Book a Cab
          </button>
        </Link>
        <Link to="/bus-booking">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Book a Bus Tour
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

