function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

//sum computes the sum of an array
function sum (array) {
	//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
	return array = array.reduce(add, 0);
}

function multiply (array) {
	var sum = 1;
    for (var i = 0; i < array.length; i++) {
			sum = sum * array[i];
		}
		return sum;
}

function power(x, y) {
	let pow;
	return pow = Math.pow(x, y);
}

function factorial(x) {
	let answer = 1;
  if (x == 0 || x == 1){
    return answer;
  }else{
    for(let i = x; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  } 
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}