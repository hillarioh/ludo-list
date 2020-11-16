import "./App.css";
import pic from "./assets/default-prof.png";
import anto from "./assets/team-anto.jpg";
import titus from "./assets/team-titus.jpg";
import fefe from "./assets/team-fai.jpg";
import bravo from "./assets/bravon.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, shames, profile) {
  return { name, shames, profile };
}

const rows = [
  createData("Bravon Darwin", 3, {
    prof: bravo,
    dates: [
      ["1/NOV/2020", 1],
      ["12/NOV/2020", 1],
      ["15/NOV/2020", 1],
    ],
  }),
  createData("Godwill Omwando", 3, {
    prof: pic,
    dates: [["15/NOV/2020", 3]],
  }),
  createData("Faith Kemunto", 1, {
    prof: fefe,
    dates: [["1/NOV/2020", 1]],
  }),
  createData("Titus Omwando", 1, {
    prof: titus,
    dates: [["12/NOV/2020", 1]],
  }),
  createData("Anthony Masese", 1, {
    prof: anto,
    dates: [["15/NOV/2020", 1]],
  }),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.shames}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>

              <div style={{ display: "flex" }}>
                <img
                  src={row.profile.prof}
                  alt="player"
                  style={{ width: "200px" }}
                />
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Count</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.profile.dates.map((dateRow) => (
                      <TableRow key={dateRow[0]}>
                        <TableCell component="th" scope="row">
                          {dateRow[0]}
                        </TableCell>
                        <TableCell>{dateRow[1]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shames: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired,
  }).isRequired,
};

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white", marginTop: 0 }}>Hall of shamers</h1>
      <TableContainer
        component={Paper}
        style={{
          maxWidth: "70%",
          margin: "auto",
          opacity: "90%",
          background: "white",
        }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
