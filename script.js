function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
  let remaining = num
  let res = ""
  while(remaining > 0){
      if(remaining >= 900 && remaining < 1000){
          remaining = remaining - 900
          res = res +"CM"
      }
       else if(remaining >= 400 && remaining < 500){
          remaining = remaining - 400
          res = res + "CD"
      }
      else if(remaining >= 90 && remaining < 100){
          remaining = remaining - 90
          res = res + "XC"
      }
      else if(remaining >= 40 && remaining < 50){
          remaining = remaining - 50
          res = res + "XL"
      }
      else if(remaining >= 9 && remaining < 10){
          remaining = remaining - 9
          res = res + "IX"
      }
      else if(remaining >= 4 && remaining < 5){
          remaining = remaining - 90
          res = res + "IV"
      }
      else if(remaining >= obj["0"][1]){
          remaining = remaining - obj["0"][1];
          res += obj["0"][0];
      }
      else if(remaining >= 500){
          remaining = remaining - obj["1"][1];
          res += obj["1"][0]
      }
      else if(remaining >= obj["2"][1]){
          remaining = remaining - obj["2"][1];
          res += obj["2"][0]
      }
      else if(remaining >= obj["3"][1]){
          remaining = remaining - obj["3"][1];
          res += obj["3"][0]
      }
      else if(remaining >= obj["4"][1]){
          remaining = remaining - obj["4"][1]
          res += obj["4"][0]
      }
       else if(remaining >= obj["5"][1]){
          remaining = remaining - obj["5"][1]
          res += obj["5"][0]
      }
       else if(remaining >= obj["6"][1]){
          remaining = remaining - obj["6"][1]
          res += obj["6"][0]
      }
  }
  return res
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
