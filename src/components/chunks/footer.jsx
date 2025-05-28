import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EEEEEE] text-sm text-gray-700 font-metric">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* MOBILE: collapsible toggles */}
        <div className="space-y-6 md:hidden">
          {/* Column 1 */}
          <div className="pt-4">
              <img
                src={`${import.meta.env.BASE_URL}assets/FED17427-9067-4CD4-A168-ECFB56E564D2.png`}
                alt="HPE Logo"
                className="h-28 max-w-full object-contain relative -left-4 mb-6"
              />
              <ul className="space-y-4 text-lg">
                {[
                  { href: "#how-to-buy", label: "How to Buy" },
                  { href: "#product-support", label: "Product Support" },
                  { href: "mailto:sales@hpe.com", label: "Email Sales" },
                  { href: "#chat-sales", label: "Chat with Sales" },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <a href={href} className="hover:underline inline-flex items-center gap-1">
                      {label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-6-6l6 6-6 6" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="font-semibold mb-3">Follow HPE on</p>
                <div className="flex gap-4 flex-wrap">
                  {["LinkedIn", "Twitter", "Facebook", "Instagram", "YouTube"].map((social) => (
                    <a
                      key={social}
                      href={"#" + social.toLowerCase()}
                      aria-label={social}
                      className="hover:underline"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          {/* Column 2 */}
          <details>
            <summary className="cursor-pointer text-base font-semibold py-2 border-b border-gray-300">
              Company
            </summary>
            <ul className="space-y-1 pl-4 pt-2 text-sm">
              <li><a href="#about-hpe" className="hover:underline">About HPE</a></li>
              <li><a href="#accessibility" className="hover:underline">Accessibility</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#corporate-responsibility" className="hover:underline">Corporate responsibility</a></li>
              <li><a href="#hewlett-packard-labs" className="hover:underline">Hewlett Packard Labs</a></li>
              <li><a href="#modern-slavery" className="hover:underline" target="_blank" rel="noopener noreferrer">HPE Modern Slavery Transparency Statement (PDF)</a></li>
              <li><a href="#investor-relations" className="hover:underline">Investor relations</a></li>
              <li><a href="#leadership" className="hover:underline">Leadership</a></li>
              <li><a href="#public-policy" className="hover:underline">Public policy</a></li>
            </ul>
          </details>

          {/* Column 3 */}
          <details>
            <summary className="cursor-pointer text-base font-semibold py-2 border-b border-gray-300">
              Support & Events
            </summary>
            <ul className="space-y-1 pl-4 pt-2 text-sm mb-4">
              <li><a href="#operational-support-services" className="hover:underline">Operational support services</a></li>
              <li><a href="#product-return-recycling" className="hover:underline">Product return and recycling</a></li>
              <li><a href="#product-support" className="hover:underline">Product support</a></li>
              <li><a href="#software-drivers" className="hover:underline">Software and drivers</a></li>
              <li><a href="#warranty-check" className="hover:underline">Warranty check</a></li>
            </ul>

            <ul className="space-y-1 pl-4 text-sm">
              <li><a href="#events" className="hover:underline">Events</a></li>
              <li><a href="#hpe-discover" className="hover:underline">HPE Discover</a></li>
              <li><a href="#local-events" className="hover:underline">Local events</a></li>
              <li><a href="#newsroom" className="hover:underline">Newsroom</a></li>
            </ul>
          </details>

          {/* Column 4 */}
          <details>
            <summary className="cursor-pointer text-base font-semibold py-2 border-b border-gray-300">
              Customer Resources & Partners
            </summary>
            <ul className="space-y-1 pl-4 pt-2 text-sm mb-4">
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#education-training" className="hover:underline">Education and training</a></li>
              <li><a href="#email-signup" className="hover:underline">Email signup</a></li>
              <li><a href="#enterprise-glossary" className="hover:underline">Enterprise glossary</a></li>
              <li><a href="#financial-services" className="hover:underline">Financial services</a></li>
              <li><a href="#hpe-communities" className="hover:underline">HPE communities</a></li>
              <li><a href="#customer-centers" className="hover:underline">HPE customer centers</a></li>
              <li><a href="#voice-of-customer" className="hover:underline">Voice of the Customer signup</a></li>
            </ul>

            <ul className="space-y-1 pl-4 text-sm">
              <li><a href="#certifications" className="hover:underline">Certifications</a></li>
              <li><a href="#find-a-partner" className="hover:underline">Find a partner</a></li>
              <li><a href="#partner-programs" className="hover:underline">Partner programs</a></li>
            </ul>
          </details>
        </div>

        {/* DESKTOP: original four columns */}
        <div className="hidden md:flex flex-row justify-between gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 max-w-xs">
            <img
              src={`${import.meta.env.BASE_URL}assets/FED17427-9067-4CD4-A168-ECFB56E564D2.png`}
              alt="HPE Logo"
              className="h-28 max-w-full object-contain relative -left-4 mb-9"
            />
            <ul className="space-y-5 leading-loose text-2xl">
              {[
                { href: "#how-to-buy", label: "How to Buy" },
                { href: "#product-support", label: "Product Support" },
                { href: "mailto:sales@hpe.com", label: "Email Sales" },
                { href: "#chat-sales", label: "Chat with Sales" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="hover:underline inline-flex items-center gap-1">
                    {label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-600 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="font-semibold mb-9">Follow HPE on</p>
              <div className="flex gap-4">
                <a href="#linkedin" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
                <a href="#twitter" aria-label="Twitter" className="hover:underline">Twitter</a>
                <a href="#facebook" aria-label="Facebook" className="hover:underline">Facebook</a>
                <a href="#instagram" aria-label="Instagram" className="hover:underline">Instagram</a>
                <a href="#youtube" aria-label="YouTube" className="hover:underline">YouTube</a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1 leading-loose">
              <li><a href="#about-hpe" className="hover:underline">About HPE</a></li>
              <li><a href="#accessibility" className="hover:underline">Accessibility</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#corporate-responsibility" className="hover:underline">Corporate responsibility</a></li>
              <li><a href="#hewlett-packard-labs" className="hover:underline">Hewlett Packard Labs</a></li>
              <li><a href="#modern-slavery" className="hover:underline" target="_blank" rel="noopener noreferrer">HPE Modern Slavery Transparency Statement (PDF)</a></li>
              <li><a href="#investor-relations" className="hover:underline">Investor relations</a></li>
              <li><a href="#leadership" className="hover:underline">Leadership</a></li>
              <li><a href="#public-policy" className="hover:underline">Public policy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-semibold mb-3">Support</h3>
            <ul className="space-y-1 leading-loose mb-6">
              <li><a href="#operational-support-services" className="hover:underline">Operational support services</a></li>
              <li><a href="#product-return-recycling" className="hover:underline">Product return and recycling</a></li>
              <li><a href="#product-support" className="hover:underline">Product support</a></li>
              <li><a href="#software-drivers" className="hover:underline">Software and drivers</a></li>
              <li><a href="#warranty-check" className="hover:underline">Warranty check</a></li>
            </ul>

            <h3 className="text-base font-semibold mb-3">Events and news</h3>
            <ul className="space-y-1 leading-loose">
              <li><a href="#events" className="hover:underline">Events</a></li>
              <li><a href="#hpe-discover" className="hover:underline">HPE Discover</a></li>
              <li><a href="#local-events" className="hover:underline">Local events</a></li>
              <li><a href="#newsroom" className="hover:underline">Newsroom</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-base font-semibold mb-3">Customer resources</h3>
            <ul className="space-y-1 leading-loose mb-6">
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#education-training" className="hover:underline">Education and training</a></li>
              <li><a href="#email-signup" className="hover:underline">Email signup</a></li>
              <li><a href="#enterprise-glossary" className="hover:underline">Enterprise glossary</a></li>
              <li><a href="#financial-services" className="hover:underline">Financial services</a></li>
              <li><a href="#hpe-communities" className="hover:underline">HPE communities</a></li>
              <li><a href="#customer-centers" className="hover:underline">HPE customer centers</a></li>
              <li><a href="#voice-of-customer" className="hover:underline">Voice of the Customer signup</a></li>
            </ul>

            <h3 className="text-base font-semibold mb-3">Partners</h3>
            <ul className="space-y-1 leading-loose">
              <li><a href="#certifications" className="hover:underline">Certifications</a></li>
              <li><a href="#find-a-partner" className="hover:underline">Find a partner</a></li>
              <li><a href="#partner-programs" className="hover:underline">Partner programs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom legal and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6 gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
              <li>
                <a
                  href="https://www.hpe.com/emea_europe/en/legal/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.hpe.com/emea_europe/en/about/legal/terms-of-use.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.hpe.com/emea_europe/en/legal/privacy.html#datacollection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ad Choices & Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.hpe.com/emea_europe/en/sitemap.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Sitemap
                </a>
              </li>
            </ul>

            <div>&copy; {new Date().getFullYear()} Hewlett Packard Enterprise Development LP</div>
          </div>

          <button
            type="button"
            className="flex items-center gap-3 bg-white rounded-[12px] px-6 py-3 text-base font-regular text-gray-700 hover:text-green-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 010 20" />
            </svg>
            European Regional Site (EN)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-green-600 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
