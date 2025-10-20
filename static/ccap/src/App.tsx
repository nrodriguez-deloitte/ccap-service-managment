import React, { useEffect, useState } from "react";

import "./css/globals.css";
import "./css/tailwind.css";
import "./css/variables.css";

import Nav from "./components/molecules/Navigation/Navigation";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Outage from "./pages/Outage";
import Records from "./pages/Records";
import { DUMMY_CONSTANTS } from "./lib/constants";
import { IOutageDataProps } from "./types/global.types";

const App: React.FC = () => {
  const [page, setPage] = useState<string>("home");

  const [outageData, setOutageData] = useState<IOutageDataProps>(
    {} as IOutageDataProps
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOutageData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://mock.httpstatus.io/200");
      if (!res.ok) throw new Error("Failed to fetch users");
      // const data = await res.json();

      setOutageData(DUMMY_CONSTANTS);
    } catch (err) {
      // Type guard to safely access error message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOutageData();
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "map":
        return <Map outageData={outageData} />;

      case "outage":
        return <Outage outageData={outageData} />;

      case "records":
        return <Records outageData={outageData} />;

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
