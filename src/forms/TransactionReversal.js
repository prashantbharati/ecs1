import { Grid, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUser } from "@fortawesome/free-solid-svg-icons";
import "antd/es/date-picker/style/css";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const fields = [
  "Date",
  "Scheme",
  "Folio",
  "Applicant",
  "Transaction Type",
  "Purchase Price",
  "Download",
  "Units",
  "Amount",
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
                Filter
              </Typography>
              <Box style={{ width: "100%", marginLeft: "12px" }}>
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
                marginRight: "12px",
              }}
            >
              <RangePicker picker="week" />
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
              <Box
                style={{
                  width: "100%",
                  marginTop: "12px",
                  backgroundColor: "#4579e3",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "white" }}
                  >
                    {
                      <FontAwesomeIcon
                        className="txicon"
                        style={{ height: "20px", color: "white" }}
                        icon={faUser}
                      />
                    }
                    {"         "}
                    Select User(s)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="query"
                  >
                    <MenuItem value={1}>Relationship Manager</MenuItem>
                    <MenuItem value={2}>Sub Broker</MenuItem>
                    <MenuItem value={2}>Family Head</MenuItem>
                    <MenuItem value={2}>Client</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
