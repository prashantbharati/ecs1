import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const fields = [
  "Date",
  "Clients",
  "File name",
  "Status",
  "Rejections left",
  "Rejection File",
  "Actions",
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
                Choose Client
              </Typography>
              <Box style={{ width: "100%", margin: "12px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {
                      <FontAwesomeIcon
                        className="txicon"
                        style={{ height: "20px" }}
                        icon={faFilter}
                      />
                    }
                    {"         "}
                    Enter Client Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="query"
                  >
                    <MenuItem value={1}>PAN Missing</MenuItem>
                    <MenuItem value={2}>Email ID Missing</MenuItem>
                    <MenuItem value={2}>KYC Missing</MenuItem>
                    <MenuItem value={2}>Folios Without Nominee</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>

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
                  marginLeft: "30px",
                  color: "#596278",
                }}
              >
                Password
              </Typography>
              <TextField
                name="table"
                fullWidth
                variant="outlined"
                style={{
                  width: "90%",
                  marginLeft: "30px",

                  paddingBottom: 0,
                  marginTop: 0,
                  fontWeight: 500,
                }}
                label="Enter Password"
              />
            </div>
          </Grid>

          <Grid item xs={3}>
            <div
              style={{
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: "50%", height: "20%", marginTop: "20px" }}
              >
                {
                  <FontAwesomeIcon
                    className="txicon"
                    style={{ height: "20px", marginRight: "20px" }}
                    icon={faArrowUpFromBracket}
                  />
                }
                {"          "}
                Upload
              </Button>
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
