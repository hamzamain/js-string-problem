function findTallest(number){
    let largest = 0;
    for(let i = 0; i < number.length; i++){
        const index = i;
        let element = number[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const array =[120, 156, 552, 965, 220, 699, 698, 1200];
let tallestPerson = findTallest(array);
console.log('the tallest person is: ', tallestPerson);