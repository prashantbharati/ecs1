import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

const fields = [
  "RTA",
  "ARN No",
  "Folio",
  "Applicant",
  "Scheme",
  "Request Created time",
  "Download",
];

const fileimport = () => {
  return (
    <>
      <div style={{ height: "40vh" }}>
        <Grid container>
          <Grid item xs={3}>
            <div
              style={{
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  marginLeft: "12px",
                  color: "#596278",
                }}
              >
                Search
              </Typography>
              <TextField
                name="table"
                fullWidth
                variant="outlined"
                style={{
                  width: "90%",
                  marginLeft: "10px",

                  paddingBottom: 0,
                  marginTop: 0,
                  fontWeight: 500,
                }}
                label="Search folio for scheme"
              />
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
