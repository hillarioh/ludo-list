import pic from "./assets/default-prof.png";

function createData(name, shames, profile) {
  return { name, shames, profile };
}

const rows = [
  
  createData("Godwill Omwando", 9, {
    prof: pic,
    dates: [["15/NOV/2020", 3],["19/NOV/2020",3],["13/DEC/2020",2],["19/DEC/2020", 1]],
  }),
  createData("Chris Nyabuto", 7, {
    prof: pic,
    dates: [["16/NOV/2020", 3],["19/NOV/2020",3],["13/DEC/2020", 1]],
  }),
   createData("Anthony Masese", 6, {
    prof: pic,
    dates: [["15/NOV/2020", 1],["30/NOV/2020",1],["5/DEC/2020",2],["21/DEC/2020", 2]],
  }),createData("Titus Omwando", 3, {
    prof: pic,
    dates: [["12/NOV/2020", 1],["21/DEC/2020", 2]],
  }),
  createData("Bravon Darwin", 3, {
    prof: pic,
    dates: [
      ["1/NOV/2020", 1],
      ["12/NOV/2020", 1],
      ["15/NOV/2020", 1],
    ],
  }),
  createData("Edwin Oroni", 3, {
    prof: pic,
    dates: [["1/DEC/2020", 3]],
  }),
    createData("Steve Ongeri", 3, {
    prof: pic,
    dates: [["22/NOV/2020", 2],["20/DEC/2020",1]],
  }),
  createData("Faith Kemunto", 1, {
    prof: pic,
    dates: [["1/NOV/2020", 1]],
  }),
  
 
    createData("Wambete", 1, {
    prof: pic,
    dates: [["24/NOV/2020", 1]],
  }),
   createData("Felloh", 1, {
    prof: pic,
    dates: [["30/NOV/2020", 1]],
  }),
createData("KidInk", 1, {
    prof: pic,
    dates: [["17/DEC/2020", 1]],
  }),
createData("BOBO", 1, {
    prof: pic,
    dates: [["19/DEC/2020", 1]],
  }),
];

export default rows;
