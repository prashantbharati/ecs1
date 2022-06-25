import React from "react";
import Tabel from "../tabel.js";

const fields = [
  "Date",
  "File Name",
  "File Type",
  "Register",
  "Status",
  "Arn No",
  "Download",
  "Reprocess",
];

const fileimport = () => {
  return (
    <>
      <Tabel fields={fields} />
    </>
  );
};

export default fileimport;
