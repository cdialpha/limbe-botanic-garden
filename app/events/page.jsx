import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative top-20">
      <div className="pt-10 container mx-auto text-3xl font-bold">
        <h1> Private Events </h1>
        <h1> Group Tours </h1>
        <h1> Weddings </h1>
        <h1> Renting Space </h1>
      </div>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">
          Schedule Private Events and Group Tours
        </h1>
        <p className="text-lg mb-8">
          Experience the beauty of our botanical garden by scheduling private
          events and group tours. Below, you'll find information about admission
          prices for these special experiences.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Private Events</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Maximum capacity: 50 guests</li>
              <li>Duration: 4 hours</li>
              <li>Exclusive access to designated event area</li>
              <li>Guided tour included</li>
              <li>Price: $500</li>
            </ul>
            <p className="text-sm text-gray-500">
              For booking inquiries, please contact our Events Coordinator at
              events@botanicalgarden.com.
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Group Tours</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Minimum group size: 10 guests</li>
              <li>Duration: 2 hours</li>
              <li>Guided tour included</li>
              <li>Price per person: $20</li>
            </ul>
            <p className="text-sm text-gray-500">
              To schedule a group tour, please contact our Visitor Services team
              at tours@botanicalgarden.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
