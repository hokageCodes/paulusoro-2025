/* eslint-disable react/prop-types */
"use client"
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import Locations from "@/components/Locations";

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-black text-white">
      <ParallaxSection imageUrl="/assets/img/contact.webp" />

      <TextSection>
        <div className="mt-24">
          <Locations />
        </div>
      </TextSection>

      <ParallaxSection imageUrl="/assets/img/inquiry.webp" />

      <TextSection>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-4">
            Enquiries about recruitment?
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            We are here to help. Learn more about our recruitment process and find the right career opportunity for you.
          </p>
          <a
            href="/careers"
            className="px-6 py-3 bg-[#01553d] text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#01553d] rounded"
            aria-label="Explore Careers"
          >
            Explore Careers
          </a>
        </div>
      </TextSection>

      <ParallaxSection imageUrl="/assets/img/small.webp" />

      <TextSection>
        <div className="flex flex-col items-center text-center p-8 bg-white">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-4">
            For further enquiries, send us a message
          </h2>
          <p className="text-gray-600 mb-6">
            We are always available to assist you with any questions. Reach out and we will get back to you shortly.
          </p>
          <button
            onClick={openModal}
            className="px-6 py-3 bg-[#01553d] text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#01553d] rounded"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </div>
      </TextSection>

      {isModalOpen && <ContactModal closeModal={closeModal} />}
    </main>
  );
};

const ParallaxSection = ({ title, imageUrl }) => (
  <section
    className="bg-cover bg-center bg-fixed h-[50vh] md:h-[35vh] lg:h-[50vh] flex justify-center items-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {title && <h2 className="text-4xl font-bold text-white">{title}</h2>}
  </section>  
);

const TextSection = ({ children }) => (
  <section className="px-4 py-12 bg-white text-black text-lg">
    {children}
  </section>
);

export default ContactPage;