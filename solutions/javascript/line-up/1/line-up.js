//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, orderNumber) => {
  let orderNumberString = orderNumber.toString();
  let ordinalNumeral = "";
  let lastTwoCharOfOrderNumber = "";
  if (orderNumberString.length > 1) {
    lastTwoCharOfOrderNumber = orderNumberString.slice(-2);
  }
  else {
    lastTwoCharOfOrderNumber = orderNumberString;
  }
 
  console.log(lastTwoCharOfOrderNumber);
  
  switch (lastTwoCharOfOrderNumber.slice(-1)) {
  case "1":
      if (lastTwoCharOfOrderNumber === "11") {
        ordinalNumeral = orderNumberString + "th";
        break;
      }
    else {
      ordinalNumeral = orderNumberString + "st";
      break;
    }
  case "2":
      if (lastTwoCharOfOrderNumber == "12") {
        ordinalNumeral = orderNumberString + "th";
        break;
      }
    else {
      ordinalNumeral = orderNumberString + "nd";
      break;
    }
  case "3":
      if (lastTwoCharOfOrderNumber == "13") {
        ordinalNumeral = orderNumberString + "th";
        break;
      }
    else {
      ordinalNumeral = orderNumberString + "rd";
      break;
    }
  default:
    ordinalNumeral = orderNumberString + "th";
}
  return `${name}, you are the ${ordinalNumeral} customer we serve today. Thank you!`;
  
  
};