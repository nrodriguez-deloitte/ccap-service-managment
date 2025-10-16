import React from "react";

const Home: React.FC = () => (
  <>
    <section className="landing__content">
      <img src="/images/logo-ai.png" alt="AI Logo" width={420} height={263} />

      <div className="landing__text">
        <h2>Explore network outages</h2>

        <p>
          Use AI to find details on both open and resolved outages, along with
          associated communication notifications.
        </p>

        {/* <AiChat /> */}
      </div>
    </section>
  </>
);

export default Home;
