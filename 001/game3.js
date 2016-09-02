var amount, currency, PLNc, curTable;

$.get('https://openexchangerates.org/api/latest.json', {app_id: 'b54fc8736f7142118122fddb2c9dc837'}, function(data){
  curTable = JSON.stringify(data);
});



$(".currencyIn").keyup(function(){
  amount = ($(this).val());
});
$(".currency").keyup(function(){
  currency = ($(this).val());
  console.log(amount + currency);
});

$(".currencyOut").click(function(){
  $(this).text((JSON.parse(curTable).rates[currency]*amount).toFixed(2) + " " + currency);
  alert;
})
