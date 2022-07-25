import React from 'react';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/80e8bea5-1113-40e6-9c36-3dfa655075f7"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300
          "
          >
            {' '}
            Contact
          </p>
          <p className="text-gray-300 py-4">if there any </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4  bg-[#ccd6f6] p-2"
        />
        <textarea
          name="message"
          rows="10"
          className=" bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
