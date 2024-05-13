import React from "react";
import Container from "./Container";
import Logo from "../assets/logos/logo.png";

export default function Navbar() {
  return (
    <div className="bg-red-500  ">
      <Container>
        <div className="pt-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <img src={Logo} alt="" />
              <h1 className="text-white text-5xl font-thin">LE HAVRE</h1>
            </div>
            <div className="flex flex-row gap-10">
              <button>Se Connecter</button>
              <button>S'inscrire</button>
            </div>
          </div>
          <h1>Billeterie</h1>
        </div>
      </Container>
    </div>
  );
}
