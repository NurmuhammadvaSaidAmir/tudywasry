alert ('n harifi ishtiroq etgan hariflar');
alert('n harifi ishtiroq etmagan hariflar');

let names = ['non', 'banan', 'mashina', 'asal', 'olma', 'Aziza', 'gul'];
console.log(names);
let nBor = [];
let nYoq = [];

for (let element of names){
    if (element.includes('n')){
        nBor.push(element)
    }else{
        nYoq.push(element)
    }
}
console.log(nBor);
console.log(nYoq);