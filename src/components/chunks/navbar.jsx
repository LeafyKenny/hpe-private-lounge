import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  const dropdownData = {
    "HPE Greenlake": {
      cols: 3,
      firstCol: {
        title: "Hybrid cloud",
        subtitle: "HPE GreenLake",
        description:
          "Bring the cloud experience to all your IT. Deploy and manage resources across your private and public clouds while retaining control of your data and flexibility over how you consume and manage your services.",
        buttonText: "Explore HPE GreenLake",
      },
      columns: [
        ["Hybrid cloud", "Public Cloud", "Private Cloud", "Edge Cloud"],
        ["Cloud Services", "Cloud Consulting", "Cloud Security", "Cloud Migration"],
        ["Cloud Pricing", "Cloud Cost Management", "Cloud Optimization", "Cloud Analytics"],
      ],
    },
    Solutions: {
      cols: 3,
      columns: [
        ["Compute", "Servers", "Workstations", "Blades"],
        ["Storage", "SAN", "NAS", "Backup"],
        ["Networking", "Switches", "Routers", "Wireless"],
      ],
    },
    Products: {
      cols: 5,
      firstCol: {
        title: "Hybrid cloud",
        subtitle: "HPE GreenLake",
        description:
          "Bring the cloud experience to all your IT. Deploy and manage resources across your private and public clouds while retaining control of your data and flexibility over how you consume and manage your services.",
        buttonText: "Explore HPE GreenLake",
      },
      columns: [
        ["Servers", "ProLiant", "Apollo", "Edgeline"],
        ["Storage", "Nimble", "3PAR", "Alletra"],
        ["Networking", "Aruba", "Cumulus", "Mellanox"],
        ["Software", "OneView", "InfoSight", "Data Services"],
        ["Support & Services", "Warranty", "Consulting", "Training"],
      ],
    },
    Learn: {
      cols: 4,
      columns: [
        ["Resources", "Blogs", "Whitepapers", "Webinars"],
        ["Training", "Certifications", "Courses", "Events"],
        ["Community", "Forums", "User Groups", "Partner Network"],
        ["Support", "Documentation", "FAQs", "Contact Support"],
      ],
    },
  };

  const links = [
    "HPE Greenlake",
    "Solutions",
    "Products",
    "Services",
    "Learn",
    "Support",
    "Contact",
  ];

  const shouldShowDropdown = hovered && (dropdownData[hovered] || isHoveringDropdown);

  return (
    <nav className="relative z-50 font-metric">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/FED17427-9067-4CD4-A168-ECFB56E564D2.png`}
              alt="HPE Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-center relative">
            {links.map((item) => (
              <div
                key={item}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href="#"
                  className="text-black font-medium px-3 py-2 transition hover:bg-[#eaeaea] hover:text-black-900 hover:rounded-full flex items-center space-x-1 select-none"
                >
                  <span>{item}</span>
                  {dropdownData[item] && (
                    <svg
                      className="w-3 h-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="text-gray-500 hover:bg-[#eaeaea] p-2 rounded-full transition"
              >
                <Icon />
              </a>
            ))}
            <a
              href="#"
              className="bg-[#1cd3a8] text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
            >
              Jetzt anmelden!
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div
        onMouseEnter={() => setIsHoveringDropdown(true)}
        onMouseLeave={() => {
          setHovered(null);
          setIsHoveringDropdown(false);
        }}
        className={`absolute top-[72px] left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40
        transition-all duration-300 ease-in-out
        ${shouldShowDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        {hovered && dropdownData[hovered] && (
          <div
            className="max-w-7xl mx-auto px-8 py-10 grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${dropdownData[hovered].cols}, minmax(0, 1fr))`,
            }}
          >
            {dropdownData[hovered].firstCol && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{dropdownData[hovered].firstCol.title}</h3>
                <h4 className="text-xl font-bold">{dropdownData[hovered].firstCol.subtitle}</h4>
                <p className="text-sm text-gray-700">{dropdownData[hovered].firstCol.description}</p>
                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  {dropdownData[hovered].firstCol.buttonText}
                </button>
              </div>
            )}

            {dropdownData[hovered].columns.map((col, idx) => (
              <div
                key={idx}
                className={idx === dropdownData[hovered].cols - 1 ? "bg-[#eaeaea] p-4 rounded" : ""}
              >
                {col.map((title, i) =>
                  i === 0 ? (
                    <div key={i} className="font-bold border-b border-gray-400 pb-1 mb-2">
                      {title}
                    </div>
                  ) : (
                    <a
                      key={i}
                      href="#"
                      className="block py-1 text-gray-700 hover:text-green-700 transition"
                    >
                      {title}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-200 mt-[72px]">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-black font-medium py-2 px-2 rounded hover:bg-[#eaeaea] transition flex justify-between items-center"
              onClick={() => setMenuOpen(false)}
            >
              {item}
              {dropdownData[item] && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              )}
            </a>
          ))}
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="text-gray-500 hover:bg-[#eaeaea] p-2 rounded-full transition"
              >
                <Icon />
              </a>
            ))}
          </div>
          <a
            href="#"
            className="block bg-[#1cd3a8] text-white text-center mt-3 px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            Jetzt anmelden!
          </a>
        </div>
      )}
    </nav>
  );
}
