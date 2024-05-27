"use client";
import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Aboutsection from "./components/Aboutsection";
import Projectsection from "./components/Projectsection";
import Emailsection from "./components/Emailsection.jsx";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Herosection />
        <Aboutsection />
        <Services/>
        <Projectsection />
        <Emailsection/>
      </div>
      <Footer />
    </main>
  );
}
