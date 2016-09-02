$.get('https://openexchangerates.org/api/latest.json', {app_id: 'b54fc8736f7142118122fddb2c9dc837'}, function(data){
  for(i in data.rates)
  $('body').append(i + ':' + data.rates[i] + '</br> ');
});
