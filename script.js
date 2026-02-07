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

// Problem solved no:03  
function finalScore(omr) {
    if (typeof omr !== "object" || Array.isArray(omr) || omr === null) {
        return "Invalid";
    }
    let { right, wrong, skip } = omr;
    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ) {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }
    let score = (right * 1) - (wrong * 0.5);
    return Math.round(score);
}


