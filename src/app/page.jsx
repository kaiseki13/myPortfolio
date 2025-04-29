"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    try {
      // Encode the subject for email
      const subject = encodeURIComponent(
        formData.subject || "Portfolio Contact Form",
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
      );

      // Create mailto link and open it
      window.location.href = `mailto:giovanni.podbersig@outlook.it?subject=${subject}&body=${body}`;

      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Set success status after a short delay to allow the mailto to open
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
        });
      }, 500);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
    }
  };

  return (
    <div className="min-h-screen bg-[#121621] text-white font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-[#121621] bg-opacity-90">
        <div className="text-2xl font-mono text-cyan-400">
          Giovanni Podbersig<span className="text-cyan-400">._</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            // home
          </a>
          <a
            href="#expertise"
            className="hover:text-cyan-400 transition-colors"
          >
            // expertise
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition-colors"
          >
            // experience
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            // contact
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121621] pt-20 p-6 md:hidden">
          <nav className="flex flex-col space-y-6 text-xl">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // home
            </a>
            <a
              href="#expertise"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // expertise
            </a>
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // work
            </a>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // experience
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // contact
            </a>
          </nav>
        </div>
      )}
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        {/* 3D Objects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cube 1 */}
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-amber-600 to-amber-800 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
            style={{
              transform: `translate3d(-50%, -50%, 0) rotate(${
                45 + scrollY * 0.05
              }deg)`,
            }}
          ></div>

          {/* Cube 2 */}
          <div
            className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 transform translate-x-1/2 -translate-y-1/2 rotate-12"
            style={{
              transform: `translate3d(50%, -50%, 0) rotate(${
                12 - scrollY * 0.03
              }deg)`,
            }}
          ></div>

          {/* Cylinder (simplified as rectangle) */}
          <div
            className="absolute bottom-1/4 right-1/3 w-20 h-48 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full transform rotate-45"
            style={{
              transform: `translate3d(0, ${scrollY * 0.08}px, 0) rotate(45deg)`,
            }}
          ></div>

          {/* Glowing orb */}
          <div
            className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 opacity-80 blur-md"
            style={{
              transform: `translate3d(${Math.sin(scrollY * 0.01) * 20}px, ${
                Math.cos(scrollY * 0.01) * 20
              }px, 0)`,
            }}
          ></div>
        </div>

        {/* Main Content with Photo and Text side by side */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8 w-full max-w-6xl">
          {/* Photo Container with Border Effect */}
          <div className="relative mb-8 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 overflow-hidden">
              {/* Main Photo */}
              <div className="absolute inset-0 p-1 bg-gradient-to-br from-cyan-400 to-amber-500 rounded-lg">
                <div className="w-full h-full overflow-hidden rounded-lg bg-[#121621] p-0.5">
                  <Image
                    src="/mifoto.JPG"
                    alt="Giovanni Podbersig"
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Animated Border Effect */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-amber-600 rounded-lg blur opacity-30 animate-pulse"
                style={{
                  animationDuration: "3s",
                }}
              ></div>
            </div>

            {/* Decorative elements around photo */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-amber-600 opacity-20 rounded"></div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-cyan-400 opacity-20 rounded"></div>
            <div className="absolute top-1/4 -right-4 w-2 h-16 bg-cyan-400 opacity-30"></div>
            <div className="absolute bottom-1/4 -left-4 w-2 h-16 bg-amber-600 opacity-30"></div>
          </div>

          {/* Main Text */}
          <div className="text-center md:text-left md:pl-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8">
              J. Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl tracking-wide">
              Giovanni Podbersig
            </p>

            {/* Optional: Add a short intro line */}
            <p className="mt-4 text-gray-300 max-w-lg">
              Crafting digital experiences with clean code and creative
              solutions.
            </p>

            {/* Optional: Call to action button */}
            <a
              href="#expertise"
              className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-md hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section id="expertise" className="min-h-screen p-6 md:p-10 pt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400">
            // expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1a1f2e] rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  React
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                  </svg>
                  Vue, Vuex
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <polyline points="9 10 12 7 15 10"></polyline>
                    <line x1="12" y1="7" x2="12" y2="17"></line>
                  </svg>
                  JavaScript, TypeScript
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  HTML5, CSS3, SASS
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  Tailwind CSS, Material UI
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[#1a1f2e] rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                  Node.js, Python
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  REST API Design
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                  MongoDB, PostgreSQL
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="M8 17h8"></path>
                  </svg>
                  Firebase, AWS
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[#1a1f2e] rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  React Native
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Unity
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                  iOS & Android
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 22h10"></path>
                    <path d="M12 11v7"></path>
                    <path d="M3 15a7 7 0 1 0 14 0m0 0a7 7 0 1 0-14 0"></path>
                  </svg>
                  Flask
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[#1a1f2e] rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Tools & Workflow</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                  Git, GitHub
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="2" x2="9" y2="4"></line>
                    <line x1="15" y1="2" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="22"></line>
                    <line x1="15" y1="20" x2="15" y2="22"></line>
                    <line x1="20" y1="9" x2="22" y2="9"></line>
                    <line x1="20" y1="14" x2="22" y2="14"></line>
                    <line x1="2" y1="9" x2="4" y2="9"></line>
                    <line x1="2" y1="14" x2="4" y2="14"></line>
                  </svg>
                  Linux
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                  Docker, Kubernetes
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="8 14 12 16 16 14"></polyline>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Agile, Scrum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Experience Section */}
      <section id="experience" className="min-h-screen p-6 md:p-10 pt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400">
            // experience
          </h2>

          <div className="space-y-12">
            {/* Job 1 */}
            <div className="border-l-4 border-cyan-400 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">Junior FullStack Developer</h3>
              <p className="text-xl text-gray-400 mb-4">
                VivaDrive, Poland | February 2025 - Present
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Development of multi-agentic chatbot</li>
                <li>
                  Maintenance of web-application, working on Django backend and
                  React for frontend
                </li>
                <li>Linux Server with Nginx for deployment</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="border-l-4 border-cyan-400 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">
                FullStack Developer Intership
              </h3>
              <p className="text-xl text-gray-400 mb-4">
                Aindo s.p.a, Trieste | May 2024 - August 2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Built documentation website using Astro.js</li>
                <li>Machine learning training</li>
                <li>
                  Front-end maintenance of the main website updating with new
                  contents
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="border-l-4 border-cyan-400 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">Teacher</h3>
              <p className="text-xl text-gray-400 mb-4">
                Scuola di Robotica | December 2024 - February 2025
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>STEM activities for middle-school classes</li>
                <li>
                  Front lessons aimed help students learn the basics of
                  programming
                </li>
                <li>
                  Used programming with blocks like Scratch and Lego Mindstorms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen p-6 md:p-10 pt-24 flex flex-col justify-center"
      >
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400">
            // contact
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1a1f2e] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1a1f2e] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#1a1f2e] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#1a1f2e] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              ></textarea>
            </div>

            {formStatus.isSubmitted && (
              <div className="p-3 bg-emerald-900 bg-opacity-50 border border-emerald-700 rounded-md text-emerald-300">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}

            {formStatus.isError && (
              <div className="p-3 bg-red-900 bg-opacity-50 border border-red-700 rounded-md text-red-300">
                There was a problem sending your message. Please try again or
                contact directly via email.
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className="px-8 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="p-10 text-center bg-[#0f121a]">
        <div className="flex justify-center mb-6">
          <a
            href="https://www.linkedin.com/in/giovanni-podbersig-8449ba1a4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-400">
          © 2025 Giovanni Podbersig. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
