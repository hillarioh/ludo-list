import pic from "./assets/default-prof.png";

function createData(name, shames, profile) {
  return { name, shames, profile };
}

const rows = [
  
  createData("Godwill Omwando", 13, {
    prof: pic,
    dates: [["15/NOV/2020", 3],["19/NOV/2020",3],["13/DEC/2020",2],["19/DEC/2020", 1],["22/DEC/2020", 1],["25/DEC/2020", 1],["31/DEC/2020", 2]],
  }),
  createData("Chris Nyabuto", 7, {
    prof: pic,
    dates: [["16/NOV/2020", 3],["19/NOV/2020",3],["13/DEC/2020", 1]],
  }),
   createData("Anthony Masese", 6, {
    prof: pic,
    dates: [["15/NOV/2020", 1],["30/NOV/2020",1],["5/DEC/2020",2],["21/DEC/2020", 2]],
  }),
createData("Bravon Darwin", 6, {
    prof: pic,
    dates: [
      ["1/NOV/2020", 1],
      ["12/NOV/2020", 1],
      ["15/NOV/2020", 1],["1/JAN/2021", 3]
    ],
  }),
createData("Titus Omwando", 5, {
    prof: pic,
    dates: [["12/NOV/2020", 1],["21/DEC/2020", 2],["28/DEC/2020", 2]],
  }),
createData("BOBO", 5, {
    prof: pic,
    dates: [["19/DEC/2020", 1],["24/DEC/2020", 4]],
  })
,
  
  createData("Edwin Oroni", 3, {
    prof: pic,
    dates: [["1/DEC/2020", 3]],
  }),
    createData("Steve Ongeri", 5, {
    prof: pic,
    dates: [["22/NOV/2020", 2],["20/DEC/2020",1],["29/DEC/2020", 2]],
  }),
createData("Felloh", 2, {
    prof: pic,
    dates: [["30/NOV/2020", 1],["23/DEC/2020", 1]],
  }),
  createData("Faith Kemunto", 1, {
    prof: pic,
    dates: [["1/NOV/2020", 1]],
  }),
  
 
    createData("Wambete", 1, {
    prof: pic,
    dates: [["24/NOV/2020", 1]],
  }),
   
createData("KidInk", 1, {
    prof: pic,
    dates: [["17/DEC/2020", 1]],
  }),

];

export default rows;
