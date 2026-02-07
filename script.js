// Problem solve no:01
function newPrice(currentPrice, discount) {
    if (
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ) {
        return "Invalid";
    }

    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;


    return finalPrice.toFixed(3);
}
// console.log(newPrice(1500, 20));     
// console.log(newPrice(2000, 15));     
// console.log(newPrice(1200, 7));      
// console.log(newPrice("1000", 10));   
// console.log(newPrice(2000, 17.17));  
// console.log(newPrice(500, "5"));  

// Problem solve no:02
function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }

    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    }

    return false;
}
// console.log(validOtp("ph-10985"))
// console.log(validOtp("ph-1234")); 
// console.log(validOtp("abc-12345"))
// console.log(validOtp(["ph-10985"]));
// console.log(validOtp(12345678));    

