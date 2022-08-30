/* const a = 10;
const b = 20;
const c = 15;
let sum = a + b + c;
// console.log(sum);
const s = sum / 2;
// console.log(s)
let x = s * (s-a) * (s-b) * (s-c);
// console.log(x);
let Area = Math.pow(x,(1/2));
console.log(Area); */
function Area(a, b, c){
    if(a + b > c){
        let s = (a + b + c)/2;
    let x = s * (s - a) * (s - b) * (s - c);
    const area = Math.pow(x,(1/2));
    console.log(area);
    return area;
    }
    else{
        console.log('invalid input: make sure a + b > c');
        return 0;
    }
}
Area(10, 25, 30);