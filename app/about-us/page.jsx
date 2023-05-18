import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <h1>About Us</h1>
        <h1>History</h1>
        <h1>Staff</h1>
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-8">
            Welcome to our botanical garden! We are dedicated to preserving and
            showcasing the beauty of nature. Our garden features a diverse
            collection of plants from around the world, educational programs,
            and exciting events for visitors of all ages.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-8">
            Our mission is to inspire a love for plants and nature, promote
            environmental stewardship, and provide a peaceful and educational
            sanctuary for our community. We strive to create a sustainable and
            inclusive environment where visitors can connect with the wonders of
            the natural world.
          </p>
          <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
          <p className="mb-8">
            Come and explore our botanical garden to experience the tranquility
            and beauty of nature. We are open year-round and offer guided tours,
            educational workshops, and special events. Whether you are a plant
            enthusiast, a nature lover, or simply looking for a serene escape,
            we have something for everyone.
          </p>
          <h2 className="text-2xl font-bold mb-4">Support Us</h2>
          <p className="mb-8">
            As a non-profit organization, we rely on the support of our
            community to maintain and enhance our botanical garden. You can
            support us by becoming a member, making a donation, or volunteering
            your time. Together, we can continue to preserve and share the
            wonders of nature for future generations.
          </p>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">
            If you have any questions or would like more information, please
            don't hesitate to contact us. We'd be happy to assist you.
          </p>
          <p className="text-lg font-bold">Phone: (123) 456-7890</p>
          <p className="text-lg font-bold">Email: info@botanicalgarden.com</p>
        </div>
      </div>
    </div>
  );
};

export default page;
