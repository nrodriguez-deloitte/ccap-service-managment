import React from "react";
import { IOutageDataProps } from "../types/global.types";

type RecordsPageProps = {
  outageData: IOutageDataProps;
};

const Records: React.FC<RecordsPageProps> = ({
  outageData,
}: RecordsPageProps) => {
  return (
    <>
      <h1>Records</h1>
      <p>Records management coming soon.</p>
    </>
  );
};

export default Records;
