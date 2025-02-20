	function Product() {
      		var a = document.getElementById('a-value').value;
      		var b = document.getElementById('b-value').value;
			var ab = a * b;
			document.getElementById('answer').innerHTML = 'The product of A and B is ' + ab.toFixed(2) + ' .'
	      	}

	    function Quotient() {
      		var a = document.getElementById('a-value').value;
      		var b = document.getElementById('b-value').value;
			var a_over_b = a/b;
			document.getElementById('answer').innerHTML = 'The quotient of A divided by B is ' + a_over_b.toFixed(2) + ' .'
	      	}

	    function PowerOf() {
      		var a = document.getElementById('a-value').value;
      		var b = document.getElementById('b-value').value;
			var exponent = a**b;
			document.getElementById('answer').innerHTML = 'The product of A raised to B is ' + exponent.toFixed(2) + ' .'
	      	}

	     function Difference() {
      		var a = document.getElementById('a-value').value;
      		var b = document.getElementById('b-value').value;
			var a_b = a - b;
			document.getElementById('answer').innerHTML = 'The difference of A and B is ' + a_b.toFixed(2) + ' .'
	      	}
