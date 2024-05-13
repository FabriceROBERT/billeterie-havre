import React from "react";
import Navbar from "../components/Navbar.js";
import Container from "../components/Container.js";
import Header from "../components/Header.js";

export default function HomePage() {
  return (
    <div className="bg-green-500">
      <Navbar />
      <Container>
        <Header />
      </Container>
    </div>
  );
}
