const array =[120, 156, 552, 965, 220, 100, 699, 698, 12, 1200];
let smallest = 1000000;
for(let i = 0; i<array.length; i++){
    const index = i;
    let element = array[index];
    if(element < smallest){
        smallest = element;
    }
}
console.log('the dullest person is: ', smallest, 'cm');