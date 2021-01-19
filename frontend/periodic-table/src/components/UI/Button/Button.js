import React from "react";

const button = (propos) => {
  return <button className={propos.buttonType}>{propos.children}</button>;
};

export default button;
