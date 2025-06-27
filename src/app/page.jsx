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
      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg">GP</span>
            </div>
            <div>
              <div className="text-xl font-bold">
                <span className="gradient-text">Giovanni</span>
                <span className="text-white"> Podbersig</span>
              </div>
              <div className="text-xs text-gray-400">Full-Stack Developer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5">
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#expertise" className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5">
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// expertise</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#experience" className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5">
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// experience</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#education" className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5">
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// education</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Contact Me
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {/* Enhanced Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 glass-effect pt-20 p-6 md:hidden animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5"></div>
          <nav className="relative z-10 flex flex-col space-y-8 text-xl">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// home</span>
            </a>
            <a
              href="#expertise"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// expertise</span>
            </a>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// experience</span>
            </a>
            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">// education</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
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
                    src="/immagine.jpg"
                    alt="Giovanni Podbersig"
                    width={384}
                    height={384}
                    className="rounded-2xl w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    priority
                    unoptimized
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
      <section id="experience" className="min-h-screen p-6 md:p-10 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-cyan-500/5"></div>
        <div className="absolute top-40 left-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">// experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey in software development and technology
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-8">
            {/* Job 1 */}
            <div className="group glass-effect rounded-2xl p-8 border border-cyan-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-16 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Internship Full-Stack Developer</h3>
                      <p className="text-lg text-cyan-400 font-medium">Viva Drive, Poland</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium border border-cyan-500/30">
                    Feb 2025 - May 2025
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Development of an AI Agent network for data management automation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Implementation of a customized Chat-Bot for customer service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group glass-effect rounded-2xl p-8 border border-amber-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-16 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Internship Full-Stack Developer</h3>
                      <p className="text-lg text-amber-400 font-medium">Aindo s.p.a</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium border border-amber-500/30">
                    May 2024 - Aug 2024
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Web development of the API documentation page with Astro.js</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Training of machine-learning algorithms using K-nearest neighbors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 3 */}
            <div className="group glass-effect rounded-2xl p-8 border border-green-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-16 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Programming Courses Trainer</h3>
                      <p className="text-lg text-green-400 font-medium">School of Robotics</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium border border-green-500/30">
                    Dec 2024 - Feb 2025
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Educational IT and STEAM activities in middle and elementary schools in Triveneto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="min-h-screen p-6 md:p-10 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 right-32 w-36 h-36 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">// education</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-8">
            {/* Education 1 */}
            <div className="group glass-effect rounded-2xl p-8 border border-purple-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Higher Technical Course</h3>
                      <p className="text-lg text-purple-400 font-medium">Metaverse and Digital Twin</p>
                      <p className="text-gray-400">ITS Alto Adriatico (Amaro)</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30">
                    Currently attending
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Specialized training in <span className="text-purple-400 font-semibold">AI and Software development</span>, focusing on cutting-edge technologies in metaverse and digital twin applications.
                </p>
              </div>
            </div>

            {/* Education 2 */}
            <div className="group glass-effect rounded-2xl p-8 border border-amber-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-amber-500/30">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Scientific Diploma</h3>
                      <p className="text-lg text-amber-400 font-medium">Scientific High School</p>
                      <p className="text-gray-400">Liceo Scientifico Marinelli, Udine</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium border border-amber-500/30">
                    2017 - 2022
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive scientific education with strong foundation in <span className="text-amber-400 font-semibold">mathematics, physics, and natural sciences</span>.
                </p>
              </div>
            </div>

            {/* Education 3 */}
            <div className="group glass-effect rounded-2xl p-8 border border-blue-500/20 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">American Dual Diploma</h3>
                      <p className="text-lg text-blue-400 font-medium">International Program</p>
                      <p className="text-gray-400">Mater Virtual Academy High School</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/30">
                    2017 - 2022
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  International program providing knowledge about <span className="text-blue-400 font-semibold">American history, global social issues, and basic concepts of computer engineering</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-6 md:p-10 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/5 to-cyan-500/5"></div>
        <div className="absolute top-32 left-16 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">// about me</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl">
                  Durante i miei studi al <span className="text-cyan-400 font-semibold">Liceo Scientifico Marinelli</span> di Udine dal 2017-2022, ho partecipato al progetto 
                  <span className="text-green-400 font-semibold"> "Dual Diploma"</span> che mi ha permesso di acquisire conoscenze sulla storia americana, questioni sociali globali 
                  e concetti di base dell'ingegneria informatica.
                </p>
                
                <p className="text-xl">
                  Dopo aver completato questi studi, mi sono dedicato alla programmazione iscrivendomi al corso 
                  <span className="text-purple-400 font-semibold"> ITS Metaverse e Digital Twins</span>, che sto ancora frequentando, per perseguire una posizione come 
                  <span className="text-amber-400 font-semibold"> Tecnico Specializzato in AI e Sviluppo Software</span>.
                </p>
              </div>

              {/* Skills highlight */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-effect p-4 rounded-xl border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-semibold mb-2">Specializzazione</h4>
                  <p className="text-gray-300 text-sm">AI & Software Development</p>
                </div>
                <div className="glass-effect p-4 rounded-xl border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-2">Focus</h4>
                  <p className="text-gray-300 text-sm">Metaverse & Digital Twins</p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Card */}
            <div className="lg:ml-8">
              <div className="glass-effect p-8 rounded-2xl border border-green-500/20 card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Contattami</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <a href="mailto:giovanni.podbersig@outlook.it" className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email Principale</p>
                        <p className="text-cyan-400 text-sm">giovanni.podbersig@outlook.it</p>
                      </div>
                    </a>
                    
                    <a href="mailto:giopoddi13@gmail.com" className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email Alternativa</p>
                        <p className="text-green-400 text-sm">giopoddi13@gmail.com</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-center text-gray-400 text-sm">
                      Disponibile per opportunità di lavoro e collaborazioni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen p-6 md:p-10 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-32 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col justify-center min-h-screen">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">// contact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pronto per nuove sfide e opportunità di collaborazione
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="glass-effect rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <div className="relative z-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-blue-400">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 glass-effect border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Il tuo nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-blue-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 glass-effect border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="la-tua-email@esempio.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-blue-400">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 glass-effect border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-blue-400">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 glass-effect border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Scrivi il tuo messaggio qui..."
                    required
                  ></textarea>
                </div>

                {formStatus.isSubmitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Messaggio inviato con successo! Grazie per avermi contattato.</span>
                  </div>
                )}

                {formStatus.isError && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Errore nell'invio del messaggio. Riprova o contattami direttamente via email.</span>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="group px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-3 mx-auto"
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <span>Invia Messaggio</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-t from-[#0a0f1a] to-[#121621] border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center">
            {/* Logo and name */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="gradient-text">Giovanni Podbersig</span>
                </h3>
                <p className="text-gray-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/giovanni-podbersig-8449ba1a4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-blue-400/10 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:giovanni.podbersig@outlook.it"
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-cyan-400/10 group"
              >
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:bg-purple-400/10 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>

            {/* Navigation links */}
            <div className="flex justify-center space-x-8 mb-8 text-sm">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#expertise" className="text-gray-400 hover:text-cyan-400 transition-colors">Expertise</a>
              <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#education" className="text-gray-400 hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Giovanni Podbersig. Tutti i diritti riservati. 
                <span className="block mt-2 text-xs">Creato con passione e tecnologie moderne</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
