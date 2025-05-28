import React from "react";

export default function Register() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-metric">
      {/* Title centered */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Steigern Sie Ihre Gewinnchancen
      </h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left image */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-w-md">
          <img
            src="/assets/26F87B64-ACE4-4B6D-89F2-EDD5C912B0A6.jpeg"
            alt="Aktivurlaub Verlosung"
            className="w-full h-auto rounded-[2rem] object-cover"
            style={{ aspectRatio: "1 / 1", maxHeight: "600px", maxWidth: "800px" }}
          />
        </div>

        {/* Right column: main text + extra paragraph + button */}
        <div className="w-full md:w-1/2 text-lg md:text-xl text-gray-900 leading-relaxed space-y-6">
          <p>
            Mit jedem Kauf eines HPE Smart Choice, HPE MSA Storage oder HPE Networking Instant On sammeln Sie Lose für eine exklusive Verlosung. Pro Kauf eines der aufgeführten Geräte (separiert in HPE & HPE Networking Instant On) erhalten Sie ein Los. Gewinnen Sie einen unvergesslichen Aktivurlaub im Wert von 199,90 €. Je mehr Sie kaufen, desto höher Ihre Gewinnchancen!
          </p>

          <p>
            Verpassen Sie nicht Ihre Chance auf fantastische Gewinne – registrieren Sie sich noch heute und profitieren Sie von exklusiven Vorteilen!
          </p>

          <div className="pt-4">
            <a
              href="https://www.also.com/ec/cms5/de_1010/1010/informationen/promotions/hpe-2021-q4-hpe-private-lounge/hpe_2021_q4_hpe_private_lounge_webform.jsp"
              className="inline-block bg-[#1cd3a8] text-white px-6 py-3 text-lg font-medium rounded-full hover:bg-green-800 transition"
            >
              Jetzt registrieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
