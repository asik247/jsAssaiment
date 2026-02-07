// Problem no:01
/*function signature/sample */
function newPrice(currentPrice , discount ) {
          // You have to write your code here
          let discoutnResutl = (currentPrice*discount)/100;
        //   return discoutnResutl
         let newTaka = currentPrice - discoutnResutl
         return newTaka
}
// console.log();
let value = newPrice(2500,20);
console.log(value);

