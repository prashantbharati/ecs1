import { Grid } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

import "antd/es/date-picker/style/css";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const fields = [
  "Date",
  "Sender Email ID",
  "Client Name / PAN",
  "Email ID",
  "Subject Line",
  "Status",
  "Reason",
];

const fileimport = () => {
  return (
    <>
      <div style={{ height: "40vh" }}>
        <Grid container>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={4}>
            <div
              style={{
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <RangePicker picker="week" />
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: "60vh", margin: "10px" }}>
        <Tabel fields={fields} />
      </div>
    </>
  );
};

export default fileimport;
