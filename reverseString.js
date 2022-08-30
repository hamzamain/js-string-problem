function reverseString(text){
    let reversetext ='';
    for(let i = text.length-1; i>= 0; i--){
        const index = i;
        let element = text[index];
        reversetext = reversetext + element;
        // console.log(element, reversetext);
    }
    return reversetext;
}
let str = "I am a good boy. my name is Mainuddin. what's your name ?";
let reverseText = reverseString(str);
console.log(reverseText);