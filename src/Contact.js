import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="mt-32 mb-8 text-center text-3xl font-semibold">
        Feel Free To Contact Us
      </h2>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57876.36933440366!2d67.08512142368201!3d24.95682190243532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34760beb2d8a1%3A0x554a7a62506ad696!2sGulzar-e-Hijri%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695484132474!5m2!1sen!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-[100vw] mt-8">
        <div className="m-auto p-5  max-w-lg">
          <form
            action="https://formspree.io/f/xgejnrbl"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="username"
              name="Username"
              required
              autoComplete="off"
              className="py-2 px-4 border-2 border-gray-200 focus:border-blue-500 outline-none  shadow-sm"
              // value=""
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="py-2 px-4 border-2 border-gray-200 focus:border-blue-500 outline-none  shadow-sm"
              // value=""
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
              className="py-2 px-4 border-2 border-gray-200 focus:border-blue-500 outline-none  shadow-sm"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="cursor-pointer py-2 px-6 text-white uppercase font-semibold bg-blue-500 hover:scale-95 transition duration-300 w-28"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
