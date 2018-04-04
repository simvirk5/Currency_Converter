var foreignCurrency = "http://data.fixer.io/api/latest?access_key=399cceec47a720a5be49147284a86eb2&format=1"


$.get(foreignCurrency, (response) => {
console.log(response)

		let conversion;
		// let currency = event.target.id
  		
  		$("#EUR").click( function () {
  		conversion = $('#convert').val()
  		console.log(conversion);
  		$("#output_amount").text(conversion);
  		$("#output_currency").text('');
		})

  		$('#GBP').click(function () {
  		conversion = $('#convert').val() * response.rates.GBP
  		console.log(conversion);
  		$("#output_amount").text(conversion);
  		$("#output_currency").text(response.rates.GBP);
  		})

  		$("#CNY").click(function () {
  		conversion = $('#convert').val() * response.rates.CNY
  		console.log(conversion);
  		$("#output_amount").text(conversion);
  		$("#output_currency").text(response.rates.CNY);
  		})

  		$("#JPY").click(function () {
  		conversion = $('#convert').val() * response.rates.JPY
  		console.log(conversion);
  		$("#output_amount").text(conversion);
		$("#output_currency").text(response.rates.JPY);
  		})

})




  	
 

