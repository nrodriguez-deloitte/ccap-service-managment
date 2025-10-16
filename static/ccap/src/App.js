import React, { useEffect, useState } from "react";
// import { invoke } from "@forge/bridge"; // ! Uncomment when connecting with Jira

function App() {
  //   const [data, setData] = useState(null); // ! Uncomment when connecting with Jira

  useEffect(() => {
    // ! Uncomment when connecting with Jira
    // if (!process.env.BASE_URL) {
    //   invoke("getText", { example: "my-invoke-variable" }).then(setData);
    // }
  }, []);

  // ! Uncomment when connecting with Jira
  //   return <div>{data ? data : "Loading..."}</div>;
  return <div>hello world!</div>;
}

export default App;
