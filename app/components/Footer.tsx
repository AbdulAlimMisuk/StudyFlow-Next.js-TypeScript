import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-12">
      <div className="max-w-6xl mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-30 lg:px-4">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            StudyFlow is a modern learning platform designed to help students
            understand complex subjects in a simple and engaging way. Our
            mission is to make education accessible, enjoyable, and effective
            for everyone.
          </p>
        </div>
        <div className="lg:px-12">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Link</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Dhaka, Bangladesh</p>
          <p>Email: admin@gmail.com</p>
          <p>phone: +8801849114997</p>
        </div>
      </div>
      <p className="text-center text-sm pt-8">© 2025 StudyFlow. All rights reserved.</p>
    </footer>
  );
}
