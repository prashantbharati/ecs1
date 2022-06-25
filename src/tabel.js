import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const entries = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function CustomizedTables({ fields }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ height: 500 }} aria-label="customized table">
        <TableHead style={{ backgroundColor: "white" }}>
          <TableRow>
            {fields.map((field) => {
              return (
                <StyledTableCell>
                  <Typography style={{ fontFamily: "Poppins", color: "grey" }}>
                    {field}
                  </Typography>
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => {
            return (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  25-06-2022 08:06 AM
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  W0M3323.dbf
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  FolioMaster
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  Karvy
                </StyledTableCell>{" "}
                <StyledTableCell component="th" scope="row">
                  processed
                </StyledTableCell>{" "}
                <StyledTableCell component="th" scope="row">
                  ARN-1668
                </StyledTableCell>{" "}
                <StyledTableCell component="th" scope="row">
                  {" "}
                  {
                    <FontAwesomeIcon
                      className="txicon"
                      style={{ color: "#006DFF" }}
                      icon={faArrowRightToBracket}
                    />
                  }
                </StyledTableCell>{" "}
                <StyledTableCell component="th" scope="row">
                  {
                    <FontAwesomeIcon
                      className="txicon"
                      style={{ color: "#006DFF" }}
                      icon={faArrowsRotate}
                    />
                  }
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
