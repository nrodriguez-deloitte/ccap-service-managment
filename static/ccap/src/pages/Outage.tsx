import React from "react";
import { IOutageDataProps } from "../types/global.types";

type OutagePageProps = {
  outageData: IOutageDataProps;
};

const Outage: React.FC<OutagePageProps> = (props: OutagePageProps) => (
  <>
    <h1>Outage</h1>
    <p>Outage information will be displayed here.</p>
  </>
);

export default Outage;
