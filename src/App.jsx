import React from "react";
import LoadingScreen from "./components/chunks/loading"; // adjust path if needed
import Navbar from "./components/chunks/navbar";
import Hero from "./components/chunks/hero";
import Info from "./components/chunks/info";
import Footer from "./components/chunks/footer";
import Register from "./components/chunks/register";
import Cookies from "./components/chunks/cookies";
import ScrollToTopButton from "./components/elements/scrolltotopbutton";
import Contact from "./components/chunks/contact";
import キャッシュ from "./components/cache";

export default function App() {
  return (
    <キャッシュ>
    <LoadingScreen>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Hero />
          <Info />
          <Register />
          <Contact />
        </div>
        <Footer />
        <ScrollToTopButton />
        <Cookies />  {/* Shows cookie banner on all pages */}
      </main>
    </LoadingScreen>
    </キャッシュ>
  );
}
