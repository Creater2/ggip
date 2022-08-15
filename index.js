function func(){


    let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    
      
    console.log(JSON.stringify(data, null, 2,));

    $(".div_1").text('Акраман гей и его ебет ясик')



    });
    
    }
    
    setTimeout(func, 1)
    