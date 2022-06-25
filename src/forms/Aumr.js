import React from "react";
import { Grid, Typography } from "@mui/material";
import Tabel from "../tabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const entries = [
  "Scheme Name",
  "Investor Name",
  " Folio No",
  "Freeze Date",
  "Units",
  "Our Units",
  "Unit Diff",
];

const Aumr = () => {
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
                ARN
              </Typography>
              <Box style={{ width: "100%", marginLeft: "10px" }}>
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
                    Select ARN
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="query"
                  >
                    <MenuItem value={1}>ARN 1668</MenuItem>
                    <MenuItem value={2}>ARN 00000</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: "60vh", margin: "10px" }}>
        <Tabel fields={entries} />
      </div>
    </>
  );
};

export default Aumr;
