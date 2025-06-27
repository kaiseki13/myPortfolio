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
          <a
            href="#education"
            className="hover:text-cyan-400 transition-colors"
          >
            // education
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
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              // education
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
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rotate-45 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-6 h-6 border-2 border-amber-500 rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-cyan-400 animate-float" style={{animationDelay: '0.5s'}}></div>
          
          {/* Animated 3D Objects */}
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-amber-500/30 to-amber-700/30 backdrop-blur-sm border border-amber-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl"
            style={{
              transform: `translate3d(-50%, -50%, 0) rotate(${
                45 + scrollY * 0.05
              }deg)`,
            }}
          ></div>

          <div
            className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-blue-700/30 backdrop-blur-sm border border-cyan-500/20 transform translate-x-1/2 -translate-y-1/2 rotate-12 rounded-2xl"
            style={{
              transform: `translate3d(50%, -50%, 0) rotate(${
                12 - scrollY * 0.03
              }deg)`,
            }}
          ></div>

          {/* Gradient orbs */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              top: "20%",
              left: "10%",
              transform: `translate(${
                Math.sin(scrollY * 0.01) * 30
              }px, ${
                Math.cos(scrollY * 0.01) * 20
              }px, 0)`,
            }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              top: "60%",
              right: "10%",
              transform: `translate(${
                Math.sin(scrollY * 0.01 + 1) * 25
              }px, ${
                Math.cos(scrollY * 0.01) * 20
              }px, 0)`,
              animationDelay: '1s'
            }}
          ></div>
        </div>

        {/* Main Content with Photo and Text side by side */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 p-4 md:p-8 w-full max-w-6xl">
          {/* Photo Container with Border Effect */}
          <div className="relative mb-8 md:mb-0 animate-fadeInUp">
            <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 overflow-hidden group">
              {/* Main Photo */}
              <div className="absolute inset-0 p-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-amber-500 rounded-2xl animate-glow">
                <div className="w-full h-full overflow-hidden rounded-2xl bg-[#121621] p-0.5 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/mifoto.JPG"
                    alt="Giovanni Podbersig"
                    width={384}
                    height={384}
                    className="rounded-2xl w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    priority
                  />
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-500 rounded-2xl blur opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-2xl backdrop-blur-sm animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 -right-6 w-3 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-6 w-3 h-20 bg-gradient-to-b from-amber-500/50 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Main Text */}
          <div className="text-center md:text-left md:pl-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30 mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
              <span className="gradient-text">Full-Stack</span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            
            <div className="mb-6">
              <p className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                Giovanni Podbersig
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-amber-500 rounded-full mx-auto md:mx-0"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl leading-relaxed">
              Specialized in <span className="text-cyan-400 font-semibold">AI & Software Development</span>, crafting innovative digital experiences with cutting-edge technologies in <span className="text-amber-500 font-semibold">Metaverse & Digital Twins</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">
              <a
                href="#expertise"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 glass-effect"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Let's Talk</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="#" className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-cyan-400/10 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-blue-400/10 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-110 hover:bg-amber-400/10 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400 font-medium">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-amber-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section id="expertise" className="min-h-screen p-6 md:p-10 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-amber-500/5"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">// expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized in cutting-edge technologies and modern development practices
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-amber-500 rounded-full mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 glass-effect rounded-2xl border border-cyan-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Frontend Development</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">JavaScript</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Angular, React</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Node.js</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group p-8 glass-effect rounded-2xl border border-amber-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Backend Development</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Python, Django, FastAPI</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">REST API Design</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">SQL, MongoDB, PostgreSQL</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Machine Learning & LLM</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group p-8 glass-effect rounded-2xl border border-purple-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Unity & Mobile Development</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Unity, .NET, C#</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Mobile Applications</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">VR & Immersive Reality</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group p-8 glass-effect rounded-2xl border border-green-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Tools & Workflow</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Git, GitHub</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Docker</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Machine Learning & Data Analysis</span>
                  </li>
                </ul>
              </div>
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
              <h3 className="text-2xl font-bold">Internship Full-Stack Developer</h3>
              <p className="text-xl text-gray-400 mb-4">
                Viva Drive, Poland | February 2025 - May 2025
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Development of an AI Agent network for data management automation</li>
                <li>
                  Implementation of a customized Chat-Bot for customer service
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="border-l-4 border-cyan-400 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">
                Internship Full-Stack Developer
              </h3>
              <p className="text-xl text-gray-400 mb-4">
                Aindo s.p.a | May 2024 - August 2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Web development of the API documentation page with Astro.js</li>
                <li>Training of machine-learning algorithms using K-nearest neighbors</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="border-l-4 border-cyan-400 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">Trainer for Extra-Curricular Programming Courses</h3>
              <p className="text-xl text-gray-400 mb-4">
                School of Robotics | December 2024 - February 2025
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Educational IT and STEAM activities in middle and elementary schools in Triveneto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="min-h-screen p-6 md:p-10 pt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400">
            // education
          </h2>

          <div className="space-y-12">
            {/* Education 1 */}
            <div className="border-l-4 border-amber-500 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">Higher Technical Course in Metaverse and Digital Twin</h3>
              <p className="text-xl text-gray-400 mb-4">
                ITS Alto Adriatico (Amaro) | Currently attending
              </p>
              <p className="text-gray-300">
                Specialized training in AI and Software development, focusing on cutting-edge technologies in metaverse and digital twin applications.
              </p>
            </div>

            {/* Education 2 */}
            <div className="border-l-4 border-amber-500 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">Scientific Diploma</h3>
              <p className="text-xl text-gray-400 mb-4">
                Liceo Scientifico Marinelli, Udine | 2017 - 2022
              </p>
              <p className="text-gray-300">
                Comprehensive scientific education with strong foundation in mathematics, physics, and natural sciences.
              </p>
            </div>

            {/* Education 3 */}
            <div className="border-l-4 border-amber-500 pl-6 transform transition-transform hover:translate-x-2">
              <h3 className="text-2xl font-bold">American Dual Diploma</h3>
              <p className="text-xl text-gray-400 mb-4">
                Mater Virtual Academy High School | 2017 - 2022
              </p>
              <p className="text-gray-300">
                International program providing knowledge about American history, global social issues, and basic concepts of computer engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-6 md:p-10 pt-24 flex items-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400">
            // about me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              During my studies at Liceo Scientifico Marinelli in Udine from 2017-2022, I participated in the 
              "Dual Diploma" project which allowed me to gain knowledge about American history, global social issues, 
              and basic concepts of computer engineering.
            </p>
            
            <p>
              After completing these studies, I dedicated myself to programming by enrolling in the ITS Metaverse 
              and Digital Twins course, which I am still attending, to pursue a position as a Specialized Technician 
              in AI and Software development.
            </p>
            
            <div className="mt-8 p-6 bg-[#1a1f2e] rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                  giovanni.podbersig@outlook.it
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                  giopoddi13@gmail.com
                </p>
              </div>
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
