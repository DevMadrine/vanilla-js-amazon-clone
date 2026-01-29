import formatCurrency from "../../scripts/utils/money.js";

console.log('Test suite for formatCurrency');

console.log('Converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log("Test 1 passed");
}

else{
  console.log('String failed');
}


console.log('Works with 0');
if(formatCurrency(0) === '0.00'){
    console.log("Test 2 passed");
}

else{
  console.log('String failed');
}

console.log('Rouunds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
    console.log("Test 3 passed");
}

else{
  console.log('String failed');
}

console.log('Rounds correctly down to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
    console.log("Test 4 passed");
}

else{
  console.log('String failed');
}