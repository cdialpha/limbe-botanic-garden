import React from "react";
import Image from "next/image";

import ContactForm from "../../components/ContactForm";

const page = () => {
  return (
    <div className="bg-primary-light pb-10">
      <div className="relative h-[30vh] flex ">
        <div className="z-10 w-2/3 font-bold ml-auto mr-auto mt-auto mb-auto">
          <h1 className="text-8xl">LET'S GET IN TOUCH</h1>
          <h2 className="text-4xl mt-5 italic">... asking never hurts</h2>
        </div>
        {/* <Image
          src={contact}
          fill
          alt="architectural background for hero image"
          className="relative z-1 object-cover"
        /> */}
      </div>
      <div className="w-2/3 ml-auto mr-auto mt-10 text-2xl ">
        <div className="flex flex-col border-4 border-black bg-white rounded-2xl pl-5 pr-5 pt-5 pb-5 mt-10 mb-10">
          <h1 className="font-bold underline text-center">
            Contact Information
          </h1>
          <div className="mt-2 mb-2 ">
            <h2 className="underline font-bold">Address:</h2>
            <h2 className="ml-2">Beltsville Maryland, USA.</h2>
          </div>
          <div className="mt-2 mb-2 ">
            <h2 className="underline font-bold">Business Hours:</h2>
            <h2 className="ml-2">Monday-Friday: 8am – 6pm EST</h2>
            <h2 className="ml-2">Saturday: 9am – 5pm EST</h2>
          </div>
          <div className="mt-2 mb-2 ">
            <h2 className="underline font-bold">Phone:</h2>
            <h2 className="ml-2">Corporate Office: +1 (240) 391-6281</h2>
            <h2 className="ml-2">Corporate Mobile: +1 (202)-600-0221</h2>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;

// .parent {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: 1fr 3fr 5fr repeat(2, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }

//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }
//   .div3 { grid-area: 1 / 3 / 2 / 4; }
//   .div4 { grid-area: 2 / 1 / 3 / 2; }
//   .div5 { grid-area: 2 / 2 / 3 / 3; }
//   .div6 { grid-area: 2 / 3 / 3 / 4; }
//   .div7 { grid-area: 3 / 1 / 4 / 2; }
//   .div8 { grid-area: 3 / 2 / 4 / 3; }
//   .div9 { grid-area: 3 / 3 / 4 / 4; }

//Great contact forms typically:
// Explain why someone should contact your business.
// Describe how your business can help solve the visitors' problems.
// Include an email and phone number so visitors can get in touch with you on their first attempt.
// Include a short form using fields that'll help your business understand who's contacting them.
// Have a call-to-action to provide visitors with another action to take if they choose not to complete the form.
// Leverage key contact form design elements — like user-friendly layouts and clear formatting — to create the optimal user experience for visitors.
// Showcase the company's thought leadership, whether by including a list of recent blog posts or articles about the company in the press.
// Link to active social media accounts like Twitter, Facebook, Instagram, and LinkedIn to give visitors another way to engage with the business.
// Redirect to a thank you page that explains when and how you'll be contacting the visitor.
// Promote helpful content and resources.
// Are creative and memorable, allowing visitors to associate contacting your brand with a positive or funny memory.
// Show off what your brand does so visitors and potential customers can get a sense of the work you do before they even get in touch.
// Avoid unnecessary fields and words, so your page remains as straightforward as possible — no fluff.
