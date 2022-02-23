// src/App.js

import React from "react";
import About from "./pages/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Content from "./components/HomeContent";
import Hero from "./components/HomeHero";
import PageControl from "./components/PageControl";

export default function App() {
  return (
    <main>
      <PageControl/>
    </main>
  );
}