let str ='amar shonar bangla amai tomay valo bashi.cirodin tomar akash tomar batash amar prane bajay bashi shonar bangla ami tomay valo bashi';
let spliped = str.split(' ');
// console.log(spliped);
function wordReverse(words){
    let reversed = [];
    for(let i = words.length-1; i>= 0; i--){
        const index = i;
        let element = words[i];
        reversed.push(element);
        // reversed = reversed +' '+ element;
        // console.log(element, reversed);
    }
    
    let joined = reversed.join(' ');
    return joined;
}
let reversedText = wordReverse(spliped);
console.log(reversedText);