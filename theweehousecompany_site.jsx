import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen p-6 grid place-items-center">
    <h1 className="text-4xl font-bold mb-4">The Wee House Company</h1>
    <p className="text-lg max-w-xl text-center">Beautifully crafted small homes, designed for modern living.</p>
  </div>
);

const Products = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Products</h2>
    <p>Explore our range of small, sustainable homes.</p>
  </div>
);

const Services = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Services</h2>
    <p>We provide bespoke design, build, and installation services.</p>
  </div>
);

const Projects = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <p>View our completed Wee House projects.</p>
  </div>
);

const About = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <p>We are dedicated to designing and building small homes with character.</p>
  </div>
);

const Contact = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p>Get in touch to talk about your Wee House project.</p>
  </div>
);

const Nav = () => (
  <nav className="p-4 shadow flex gap-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/products" className="hover:underline">Products</Link>
    <Link to="/services" className="hover:underline">Services</Link>
    <Link to="/projects" className="hover:underline">Projects</Link>
    <Link to="/about" className="hover:underline">About</Link>
    <Link to="/contact" className="hover:underline">Contact</Link>
  </nav>
);

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
