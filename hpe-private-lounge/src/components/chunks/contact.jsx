import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../elements/button.jsx";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 font-metric text-gray-800">
        {/* Left: Kontakt Info */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Kontakt</h3>
          <div className="flex items-start gap-3">
            <Icon icon="mdi:email" className="text-xl mt-1" style={{ color: "#1cd3a8" }} />
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hpe-solutions-de@also.com"
                className="hover:underline"
                style={{ color: "#1cd3a8" }}
              >
                hpe-solutions-de@also.com
              </a>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Icon icon="mdi:phone" className="text-xl mt-1" style={{ color: "#1cd3a8" }} />
            <p><strong>Telefon:</strong> +49 2921 99-54 45</p>
          </div>
          <div className="flex items-start gap-3">
            <Icon icon="mdi:check-circle-outline" className="text-xl mt-1" style={{ color: "#1cd3a8" }} />
            <p>Bereits registrierte Kunden müssen sich nicht erneut registrieren und nehmen automatisch am Incentive teil.</p>
          </div>
          <div className="flex items-start gap-3">
            <Icon icon="mdi:calendar-check-outline" className="text-xl mt-1" style={{ color: "#1cd3a8" }} />
            <p>Gültig solange der Vorrat reicht.</p>
          </div>
          <div className="flex items-start gap-3">
            <Icon icon="mdi:alert-outline" className="text-xl mt-1" style={{ color: "#1cd3a8" }} />
            <p>Gewinne müssen versteuert und dem Finanzamt gemeldet werden.</p>
          </div>
        </div>

        {/* Right: Newsletter Form */}
        <div className="border-t border-gray-300 md:border-t-0 md:border-l md:pl-10">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Newsletter abonnieren</h4>
          <form className="flex flex-col gap-4">
            <label htmlFor="newsletter-email" className="sr-only">E-Mail-Adresse</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Ihre E-Mail-Adresse"
              className="px-4 py-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1cd3a8]"
              required
            />
            <Button asChild>
              <button
                type="submit"
                className="text-lg font-medium bg-[#1cd3a8] text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
              >
                Abonnieren
              </button>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
