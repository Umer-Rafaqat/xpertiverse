import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../utils/constants/projectsdata";

const filters = [
  "All",
  "Websites",
  "Mobile Apps",
  "AI",
  "Automation",
  "Web Apps",
];

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-20 bg-[#0D0F14] min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-[#DC2828] text-sm font-semibold tracking-wider mb-2">
          PROJECTS
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="text-white">All Our</span>

          <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
            {" "}
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-base mt-3 max-w-2xl mx-auto">
          Explore all the innovative projects we have delivered across different
          domains.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer ${
                active === f
                  ? "bg-[#DC2828]  text-white shadow-md"
                  : "bg-[#1F2937] text-gray-300 border border-[#374151] hover:bg-[#2C2F3B]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.id}
            className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group bg-[#121721] hover:border border-[#DC2828]"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500"></div>

            <motion.div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[#DC2828] text-xs font-semibold">
                {p.tag}
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">{p.desc}</p>

              <div className="flex mt-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      idx < p.rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.955z" />
                  </svg>
                ))}
              </div>

              <button
                onClick={() => navigate(`/projects/${p.id}`)}
                className="
    mt-4 px-4 py-2 text-sm font-semibold
    bg-[#DC2828] text-white 
    border border-transparent 
    rounded-lg cursor-pointer 
    transition
    hover:bg-transparent hover:border-[#DC2828] hover:text-[#DC2828]
  "
              >
                View Details
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
