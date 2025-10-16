import React from "react";

interface NavProps {
  setPage: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ setPage }) => (
  <nav style={{ marginBottom: 24 }}>
    <button onClick={() => setPage("home")} style={{ marginRight: 12 }}>
      Home
    </button>
    <button onClick={() => setPage("map")} style={{ marginRight: 12 }}>
      Map
    </button>
    <button onClick={() => setPage("outage")} style={{ marginRight: 12 }}>
      Outage
    </button>
    <button onClick={() => setPage("records")}>Records</button>
  </nav>
);

export default Nav;
