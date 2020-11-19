import pic from "./assets/default-prof.png";

function createData(name, shames, profile) {
  return { name, shames, profile };
}

const rows = [
  
  createData("Godwill Omwando", 6, {
    prof: pic,
    dates: [["15/NOV/2020", 3],["19/NOV/2020",3]],
  }),
  createData("Chris Nyabuto", 6, {
    prof: pic,
    dates: [["16/NOV/2020", 3],["19/NOV/2020",3]],
  }),
  createData("Bravon Darwin", 3, {
    prof: pic,
    dates: [
      ["1/NOV/2020", 1],
      ["12/NOV/2020", 1],
      ["15/NOV/2020", 1],
    ],
  }),
  createData("Faith Kemunto", 1, {
    prof: pic,
    dates: [["1/NOV/2020", 1]],
  }),
  createData("Titus Omwando", 1, {
    prof: pic,
    dates: [["12/NOV/2020", 1]],
  }),
  createData("Anthony Masese", 1, {
    prof: pic,
    dates: [["15/NOV/2020", 1]],
  }),
];

export default rows;
