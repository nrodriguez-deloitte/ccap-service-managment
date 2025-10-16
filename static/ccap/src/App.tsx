import React from "react";

import "./css/globals.css";
import "./css/tailwind.css";
import "./css/variables.css";

import Nav from "./components/molecules/Navigation/Navigation";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Outage from "./pages/Outage";
import Records from "./pages/Records";

const App: React.FC = () => {
  const [page, setPage] = React.useState<string>("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "map":
        return <Map />;

      case "outage":
        return <Outage />;

      case "records":
        return <Records />;

      default:
        return (
          <>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
          </>
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
