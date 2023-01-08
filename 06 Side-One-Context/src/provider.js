import React, { useState } from "react";

import PackageContext from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to Russia",
    agent: "007",
    accept: "NOT ACCEPTED",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "Accepted" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};


export default Provider;
