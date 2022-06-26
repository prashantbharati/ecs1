import { Grid, Typography } from "@mui/material";
import React from "react";
import Tabel from "../tabel.js";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import "antd/es/date-picker/style/css";
import "./styles.css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const fields = ["Name", "Level", "Count", "Last Login Date"];

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
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
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
                Summary
              </Typography>

              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
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
                Detail
              </Typography>
              <Box style={{ width: "100%", marginLeft: "12px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {
                      <FontAwesomeIcon
                        className="txicon"
                        style={{ height: "20px" }}
                        icon={faAlignRight}
                      />
                    }
                    {"         "}
                    All
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
        </Grid>
      </div>

      <div style={{ height: "60vh", margin: "10px" }}>
        <Tabel fields={fields} />
      </div>
    </>
  );
};

export default fileimport;
