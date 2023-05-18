import React from "react";

const page = () => {
  return (
    <div className="relative top-[80px] pt-5">
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">Plan Your Visit</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Directions</h2>
            <p className="mb-4">The tropical botanical garden is located at:</p>
            <p className="mb-2">123 Garden Street</p>
            <p className="mb-2">City, State, ZIP Code</p>
            <p className="mb-2">Country</p>
            <p className="mb-4">
              Parking facilities are available onsite. Public transportation
              options and detailed driving directions can be found on our
              website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Admission</h2>
            <p className="mb-4">General Admission: $10</p>
            <p className="mb-4">Children (under 12): Free</p>
            <p className="mb-4">Seniors (65+): $8</p>
            <p className="mb-4">
              Special discounts and membership options are available. Please
              visit our website for more information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Nearby Accommodations</h2>
            <p className="mb-2">1. Garden View Hotel</p>
            <p className="mb-2">2. Palm Resort</p>
            <p className="mb-2">3. Tropical Retreat</p>
            <p className="mb-2">4. Rainforest Inn</p>
            <p className="mb-4">
              Please contact the accommodations directly for availability and
              reservations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
            <p className="mb-4">
              The garden is wheelchair accessible, with ramps and designated
              parking available. Accessible restrooms and seating areas are also
              provided. If you have any specific accessibility needs or
              questions, please contact us in advance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
