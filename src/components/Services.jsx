// src/components/Services.js
import React from 'react';
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { RiVuejsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";




function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            SKILLS
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] mx-auto rounded-full"></div>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            My core technical skills and tools I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Skill Card */}
          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-orange-500 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <TiHtml5 />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              HTML
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              Semantic, accessible & modern HTML5 markup with best practices.
            </p>

          </div>


          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-cyan-400 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <RiTailwindCssFill />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              Tailwind CSS
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              Rapid UI development with utility-first CSS framework.
            </p>

          </div>


          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-yellow-400 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <DiJavascript />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              JavaScript
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              DOM manipulation, events, ES6+ features & interactivity.
            </p>

          </div>


          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-cyan-500 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <FaReact />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              React.js
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              Component-based UI development with hooks & state management.
            </p>

          </div>


          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-green-500 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <RiVuejsFill />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              Vue.js
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              Progressive framework for building interactive UIs.
            </p>

          </div>


          <div className="group bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-[#E96600]/60 hover:shadow-[0_0_25px_rgba(233,102,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#1e1e1e]">

            <div className="text-orange-400 text-5xl md:text-6xl mb-6 transition-colors duration-300">
              <FaAws />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-4">
              AWS
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              Cloud deployment, S3, EC2, Amplify & basic serverless.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;