let first = 5;
let secend = 7;
console.log(first, secend);
//wrong aproch
// first = secend;
// secend = first;

//aproch: 1;
// const tempo = first;
// first = secend;
// secend = tempo;

//aproch: 2
//-------------distructure----------------
[first, secend] = [secend, first];
console.log(first, secend);