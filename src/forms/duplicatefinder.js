import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel";
import "./styles.css";
const fields = [
  "Select",
  "Name",
  "PAN",
  "Family Head",
  "Relationship Manager",
  "Email",
  "Mobile",
  "Date Of Birth",
  "Address",
  "AUM	Source",
  "Created Date/Time",
];

const duplicatefinder = () => {
  return (
    <>
      <div style={{ height: "40vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              margin: "0 12px 0 12px",
              color: "#596278",
            }}
          >
            Duplicate Parameters
          </Typography>
          <br />
          <Grid container style={{ margin: "0 12px 0 12px" }}>
            <Grid item xs={1}>
              <input type="checkbox" style={{ height: "15px" }} />
              &nbsp; Name
            </Grid>

            <Grid item xs={1}>
              <input type="checkbox" style={{ height: "15px" }} />
              &nbsp; Pan
            </Grid>

            <Grid item xs={1}>
              <input type="checkbox" style={{ height: "15px" }} />
              &nbsp; Email Id
            </Grid>

            <Grid item xs={1}>
              <input type="checkbox" style={{ height: "15px" }} />
              &nbsp; Mobile
            </Grid>

            <Grid item xs={2}>
              <input type="checkbox" style={{ height: "15px" }} />
              &nbsp; Date of Birth
            </Grid>

            <Grid item xs={1}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "90%", height: "100%" }}
              >
                Apply
              </Button>
            </Grid>

            <Grid item xs={2}></Grid>

            <Grid item xs={3}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",

                  color: "#596278",
                }}
              >
                Bulk Action Mode
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      <div style={{ height: "60vh", margin: "10px" }}>
        <Tabel fields={fields} />
      </div>
    </>
  );
};

export default duplicatefinder;
