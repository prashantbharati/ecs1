import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import "antd/es/date-picker/style/css";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
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
                Search File Name
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
                label="Search File Name"
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
                Filter
              </Typography>
              <Box style={{ width: "100%" }}>
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
                    Add a Filter
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="query"
                  >
                    <MenuItem value={1}>Status</MenuItem>
                    <MenuItem value={2}>RTA</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>

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
