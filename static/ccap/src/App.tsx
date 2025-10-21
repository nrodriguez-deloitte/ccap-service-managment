import React, { useState } from "react";

import "./styles/globals.css";

import Nav from "./components/molecules/Navigation/Navigation";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Outage from "./pages/Outage";

const App: React.FC = () => {
  const [page, setPage] = useState<string>("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "map":
        return <Map />;

      case "outage":
        return <Outage />;

      default:
        return (
          <div
            style={{
              width: "100vw",
              height: "calc(100vh - 150px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <p>Page not found</p>
            <p>The page you are looking for does not exist.</p>
          </div>
        );
    }
  };

  return (
    <main className="main landing">
      <Nav setPage={setPage} page={page} />

      {renderPage()}
    </main>
  );
};

export default App;
