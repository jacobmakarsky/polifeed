
  fetch('resources/json/politicianData.json')
  	.then(function (response) 
  	{
    	return response.json();
  	})
  	.then(function (data) 
  	{
    	appendData(data);
  	})
  	.catch(function (err) 
  	{
    	console.log(err);
  });

 var mainContainer = document.getElementById("arData");
