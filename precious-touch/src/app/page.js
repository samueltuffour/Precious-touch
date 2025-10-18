"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="text-center">
          <div className="loading-logo mb-4">Precious Touch</div>
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-300 border-t-pink-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-6 bg-gradient-to-r from-pink-50 to-yellow-50 animate-[slideDown_0.8s_ease-out]">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif text-transparent bg-gradient-to-r from-yellow-600 via-pink-500 to-rose-500 bg-clip-text italic font-bold">
            Precious
          </h1>
          <span className="text-xs md:text-sm text-yellow-600 ml-2 font-medium">
            TOUCH
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
          >
            HOME
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
          >
            ABOUT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
          <nav className="px-4 py-4 space-y-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-rose-500 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-16 max-w-7xl mx-auto bg-gradient-to-br from-yellow-50 via-pink-50 to-rose-50 rounded-3xl my-4 md:my-8 animate-[fadeInUp_1s_ease-out_0.2s_both]">
        <div className="flex-1 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left animate-[fadeInLeft_1.2s_ease-out_0.4s_both]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-pink-600 to-rose-600 bg-clip-text mb-4 md:mb-6 leading-tight animate-[textGlow_2s_ease-in-out_infinite_alternate]">
            Precious Touch
          </h2>
          <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hi Beauties! My name is Precious, and I’m a young, self-taught
            braider from the Bronx, now located in Buffalo, NY. I’m very eager
            and passionate about expanding my business and connecting with all
            you beautiful people! Braiding isn’t just a skill for me but it’s an
            art and a way to make others feel confident and cared for. I can’t
            wait to bless your crown and give you an experience you’ll love
            every time you sit in my chair! Happy Booking❣️
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white px-6 md:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg w-fit mx-auto lg:mx-0">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex-1 animate-[fadeInRight_1.2s_ease-out_0.6s_both] w-full lg:w-auto">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <Image
              src="/braid1.jpg"
              alt="Beautiful braided hairstyle"
              width={500}
              height={600}
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-500 shadow-2xl animate-[float_3s_ease-in-out_infinite] w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-yellow-50 animate-[fadeInUp_1s_ease-out_1s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-rose-500 font-medium mb-4 text-sm tracking-wide">
              WHY MY CUSTOMERS LOVE ME
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text">
              My Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-[staggerIn_1.5s_ease-out_1.2s_both]">
            {/* Online Booking */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.4s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-4">
                Online Booking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily book online anytime and anywhere! Calling and texting is
                optional.
              </p>
            </div>

            {/* No walk-ins */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.5s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-4">
                No walk-ins
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For a better experience, I take appointments only. No walk-ins
                are accepted.
              </p>
            </div>

            {/* Clean and Safe */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.6s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-4">
                Clean and Safe
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your safety is top of mind. I follow strict sanitation
                guidelines.
              </p>
            </div>

            {/* Professional Service */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.7s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-4">
                Professional Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                My service is professional, clean and welcoming. My customers
                love the experience I provide.
              </p>
            </div>

            {/* No Wait time */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.8s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-4">
                No Wait time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Because you book online, there's very little to no wait time
                when you arrive.
              </p>
            </div>

            {/* Professional Expert */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_1.9s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-4">
                Professional Expert
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I am a skilled and experienced braider, well trained to serve
                you with the best results.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_2s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-4">
                Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                My pricing is transparent and available upfront when booking.
              </p>
            </div>

            {/* Fun */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-[fadeInUp_0.6s_ease-out_2.1s_both]">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-4">
                Fun
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You might catch me dancing to afro beats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I AM Section */}
      <section className="py-12 md:py-20 bg-white animate-[fadeInUp_1s_ease-out_0.8s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-pink-500 font-medium mb-4 text-sm tracking-wide">
                LEARN MORE ABOUT PRECIOUS TOUCH
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-6 md:mb-8">
                WHO I AM
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Braids by Precious is a professional and natural hair braiding
                  service that focuses on providing outstanding customer care &
                  high quality natural hair styles. Each hair style is crafted
                  with the utmost care and passion to exceed your expectations.
                </p>
                <p>
                  My customers not only love their hair, but also my clean and
                  professional service, easy to use online booking and the warm
                  atmosphere I provide.
                </p>
              </div>

              <button className="mt-6 md:mt-8 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 md:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto lg:mx-0 block w-fit">
                📅 BOOK ONLINE
              </button>
            </div>
            <div className="flex-1 w-full lg:w-auto max-w-md lg:max-w-none mx-auto">
              <Image
                src="/braid4.jpg"
                alt="Professional hair braider"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-pink-100 via-rose-100 to-yellow-100 py-16 animate-[fadeInUp_1s_ease-out_1.4s_both]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_1.6s_both]">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-4">
                All-natural
              </h3>
              <p className="text-gray-600">
                No harsh chemicals used. I provide natural hair braiding
                services.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_1.8s_both]">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite_0.5s]">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-4">
                Easy online booking
              </h3>
              <p className="text-gray-600">
                I only take appointments. Book online anytime.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_2s_both]">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite_1s]">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-4">
                Transparent pricing
              </h3>
              <p className="text-gray-600">
                All of my prices showed when booking. No bait and switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section
        id="services"
        className="py-12 md:py-20 relative overflow-hidden animate-[fadeInUp_1s_ease-out_1.6s_both]"
      >
        {/* Dark textured background */}
        <div className="absolute inset-0 bg-gray-900 opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text mb-4 md:mb-6 drop-shadow-2xl">
              Precious Touch
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-4">
              Styles with/without boho
            </h2>
            <div className="w-48 md:w-64 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              $15 DEPOSIT UPON BOOKING
            </p>
          </div>

          {/* Pricing Menu */}
          <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 md:py-4 border-b border-gray-700 gap-2 sm:gap-0">
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                Small Knotless Braids
              </h3>
              <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                $130
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 md:py-4 border-b border-gray-700 gap-2 sm:gap-0">
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                Medium Knotless Braids
              </h3>
              <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                $120
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 md:py-4 border-b border-gray-700 gap-2 sm:gap-0">
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                Large Knotless Braids
              </h3>
              <span className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                $110
              </span>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <h3 className="text-2xl text-white font-light">
                Bob Knotless Braids
              </h3>
              <span className="text-2xl text-white font-bold">$100</span>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <h3 className="text-2xl text-white font-light">Locs</h3>
              <span className="text-2xl text-white font-bold">$115</span>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <h3 className="text-2xl text-white font-light">Passion Twist</h3>
              <span className="text-2xl text-white font-bold">$115</span>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <h3 className="text-2xl text-white font-light">
                Senegalese Twist{" "}
                <span className="text-lg text-gray-400">(All Sizes)</span>
              </h3>
              <span className="text-2xl text-white font-bold">$120</span>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <h3 className="text-2xl text-white font-light">
                Twist, Braids, Cornrows
              </h3>
              <span className="text-2xl text-white font-bold">$65</span>
            </div>
          </div>

          {/* Payment Notice */}
          <div className="text-center mt-12 p-6 bg-black bg-opacity-50 rounded-lg border border-gray-600">
            <h3 className="text-2xl text-white font-bold mb-2">
              REMAINING BALANCE PAID
            </h3>
            <p className="text-xl text-white">
              VIA <span className="font-bold underline">CASH OR ZELLE!</span>
            </p>
          </div>

          {/* Book Now Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold px-12 py-4 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Braids by Precious Section */}
      <section className="py-12 md:py-20 bg-white animate-[fadeInUp_1s_ease-out_1.8s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full lg:w-auto max-w-md lg:max-w-none mx-auto order-2 lg:order-1">
              <Image
                src="/braid3.jpg"
                alt="Beautiful braided hairstyle"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <p className="text-yellow-600 font-medium mb-4 text-sm tracking-wide">
                WHY WE'RE SPECIAL
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-rose-600 bg-clip-text mb-6 md:mb-8">
                Why choose me?
              </h2>

              <div className="space-y-6 md:space-y-8 text-left">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-2">
                      Perfect Braids. Everytime.
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      I love what I do, I take the time I need to listen to your
                      needs and give you perfect, neat and well-defined braids
                      every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-2">
                      Your health and safety first.
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      I follow strict sanity and safety protocols. Each station
                      is sanitized after use and all of my equipment is
                      sterilized.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-rose-500 to-yellow-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-2">
                      I take pride in my work.
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      I take great pride in my work and put a lot of effort when
                      serving you. Braiding requires patience from both
                      customers, I ensure that you are comfortable and satisfied
                      with my work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-rose-100 animate-[fadeInUp_1s_ease-out_2s_both]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-pink-600 to-rose-600 bg-clip-text mb-12 text-center">
            Follow my IG @precious.touch__
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative overflow-hidden rounded-lg animate-[fadeInUp_0.6s_ease-out_2.2s_both] hover:shadow-2xl transition-all duration-300">
              <Image
                src="/braid1.jpg"
                alt="Instagram post 1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg animate-[fadeInUp_0.6s_ease-out_2.3s_both] hover:shadow-2xl transition-all duration-300">
              <Image
                src="/braid6.jpg"
                alt="Instagram post 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg animate-[fadeInUp_0.6s_ease-out_2.4s_both] hover:shadow-2xl transition-all duration-300">
              <Image
                src="/braid5.jpg"
                alt="Instagram post 3"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg animate-[fadeInUp_0.6s_ease-out_2.5s_both] hover:shadow-2xl transition-all duration-300">
              <Image
                src="/braid7.jpg"
                alt="Instagram post 4"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/precious.touch__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @precious.touch__
            </a>
          </div>
        </div>
      </section>

      {/* Reviews/Testimonials Section */}
      <section className="py-12 md:py-20 bg-white animate-[fadeInUp_1s_ease-out_2.6s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-6 md:mb-8">
              My Reviews
            </h2>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                {/* Review 1 */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_2.8s_both]">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-center mb-6 italic leading-relaxed">
                    "My daughter had her hair braided by Precious. She is
                    perfect, service wise. Her work is very clean, professional
                    and has a refreshing atmosphere! I absolutely loved the
                    experience, and I would certainly recommend her for a friend
                    or relative. I am making her our permanent braiding choice."
                  </p>
                  <p className="text-center font-semibold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
                    - Anonymous.
                  </p>
                </div>

                {/* Review 2 */}
                <div className="bg-gradient-to-br from-yellow-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_3s_both]">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-center mb-6 italic leading-relaxed">
                    "Booking experience was so easy, stylist was punctual. The
                    service is very professional, and it was my first time and I
                    am definitely coming back. My braids were beautiful, it came
                    out exactly the way I wanted them."
                  </p>
                  <p className="text-center font-semibold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text">
                    - Anonymous.
                  </p>
                </div>

                {/* Review 3 */}
                <div className="bg-gradient-to-br from-rose-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_3.2s_both]">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-center mb-6 italic leading-relaxed">
                    "Precious does a great job and I can tell she loves what she
                    does. She pays close attention to the details. She was the first person to ever give me braids and
                    I have gone back again just a month later..."
                  </p>
                  <p className="text-center font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text">
                    - Anonymous.
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors underline"
            >
              READ MORE REVIEWS
            </a>
          </div>
        </div>
      </section>

      {/* Booking & Business Hours Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50 animate-[fadeInUp_1s_ease-out_3.4s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Booking Section */}
            <div className="animate-[fadeInLeft_1s_ease-out_3.6s_both]">
              <div className="text-center mb-6 md:mb-8">
                <p className="text-pink-500 font-medium mb-4 text-sm tracking-wide">
                  Ready to experience Precious Touch?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text mb-4 md:mb-6">
                  Let's get you booked!
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Booking your appointment is very easy. Simply click on the
                  "Book your Appointment" below. If you have any questions, you
                  can reach me by text or email at precious.touch@gmail.com
                </p>

                <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  📅 BOOK YOUR APPOINTMENT
                </button>
              </div>
            </div>

            {/* Contact & Gallery */}
            <div className="animate-[fadeInRight_1s_ease-out_3.6s_both]">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text mb-6">
                  BUSINESS HOURS
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sunday:</span>
                    <span className="text-red-500 font-semibold">CLOSED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday:</span>
                    <span className="text-red-500 font-semibold">CLOSED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Tuesday:</span>
                    <span className="text-gray-700">9:30AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Wednesday:
                    </span>
                    <span className="text-gray-700">9:30AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Thursday:</span>
                    <span className="text-gray-700">9:30AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Friday:</span>
                    <span className="text-gray-700">9:30AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Saturday:</span>
                    <span className="text-gray-700">9:30AM - 6PM</span>
                  </div>
                </div>

                <div className="text-center border-t border-pink-200 pt-6">
                  <p className="text-gray-600 font-medium mb-2">📍 Location</p>
                  <a
                    href="https://instagram.com/precious.touch__"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    University of Buffalo, Buffalo, NY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-20 bg-white animate-[fadeInUp_1s_ease-out_4.2s_both]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="animate-[fadeInUp_1s_ease-out_4.4s_both]">
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden h-[500px] lg:h-[600px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.0899!2d-78.7811!3d43.0003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126152dce4c5%3A0x982304a5181f8171!2sUniversity%20at%20Buffalo!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Precious Touch Location"
              ></iframe>

              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Precious Touch
                    </h4>
                    <p className="text-gray-600 text-xs">
                      University of Buffalo, Buffalo, NY
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        4.8 • 231 reviews
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 text-xs hover:underline"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 md:py-16 bg-gradient-to-br from-rose-100 via-pink-100 to-yellow-100 animate-[fadeInUp_1s_ease-out_4.6s_both]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-pink-600 to-rose-600 bg-clip-text mb-4">
                Precious Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md text-sm md:text-base">
                Professional hair braiding services in Union, NJ. We specialize
                in knotless braids, box braids, locs, and more. Book online for
                the best braiding experience!
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/precious.touch__"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Useful Links Column */}
            <div>
              <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text mb-4">
                USEFUL LINKS
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    Booking Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    Read our reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    Services & Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    Hair Care Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text mb-4">
                GET IN TOUCH
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/precious.touch__"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:precious.touch@gmail.com"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    precious.touch@gmail.com
                  </a>
                </li>
                <li className="text-gray-600 text-sm">
                  University of Buffalo
                  <br />
                  Buffalo, NY
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-pink-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Precious Touch. All rights reserved.
              |
              <span className="text-pink-500">
                {" "}
                Made with ❤️ for beautiful hair
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
