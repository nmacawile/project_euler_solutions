var sumMultiples = function(a,b,limit){
	var sum = 0;
	var multiples = [];		
  
	for (var x = 1; x<limit; x++)
		if(x%a===0 || x%b===0){
		  sum+=x;
		  multiples.push(x);
		}
   
	document.getElementById("multiplesH").innerHTML = "Sum of all multiples of " + a + " and " + b + " less than " + limit + ":";
	document.getElementById("multiples").innerHTML = "<strong>Multiples of " + a +" and "+ b + ":</strong> " + multiples.join(" ");
	document.getElementById("multiplesSum").innerHTML = "<strong>Sum:</strong> " + sum;
  
};

var sumEvenFibonacci = function(limit) {
	var x = 1;
	var y = 1;
	
//	var seq = [1];			//Uncomment for complete fibonacci sequence
//	var sum = 1; 			//Uncomment for complete fibonacci sequence
	  
	var seq	= [];			//Comment out for complete fibonacci sequence
	var sum = 0; 			//Comment out for complete fibonacci sequence
	  
	while(y<limit){
		if (y%2===0){		//Comment out this condition and its closing bracket for complete fibonacci sequence
			seq.push(y);
			sum += y;
		}					//
		
		var temp = y;
		y+=x;
		x = temp;   
	}
	  
	document.getElementById("fibonacciH").innerHTML = "Sum of even-numbered fibonacci terms not greater than " + limit + ":";
	document.getElementById("fibonacciSeq").innerHTML = "<strong>Fibonacci sequence:</strong> "+seq.join(" ");
	document.getElementById("fibonacciSum").innerHTML = "<strong>Sum:</strong> " + sum;	
};

var largestPrimeFactor = function(input) {
	var primes = [];  
	var factor = input;
	var x = 2;
  
 	while(x<=factor){
		while(factor%x===0){
		  primes.push(x);      
		  factor/=x;
		}
		if (x===2)
			x++;
		else
			x+=2;
	}
  
	document.getElementById("primeFactorsH").innerHTML = "Largest prime factor of " + input + ":";
	document.getElementById("primefactors").innerHTML = "<strong>Prime factors: </strong> "+primes.join(" ");
 	document.getElementById("primefactorsLargest").innerHTML = "<strong>Largest:</strong> " + Math.max(...primes);
};

sumMultiples(3,5,1000);
sumEvenFibonacci(4000000);
largestPrimeFactor(600851475143);
