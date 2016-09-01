
var numOne,numTwo;
numOne = parseInt(Math.random() * 10);
numTwo = parseInt(Math.random() * 10);
operation = parseInt(Math.random() * 3);

if (operation == 1)
{$(".equationText").append(numOne + "-" + numTwo + "=");
sum = numOne - numTwo;}
else if (operation == 2){
$(".equationText").append(numOne + "*" + numTwo + "=");
sum = numTwo * numOne;}
else {
  {$(".equationText").append(numOne + "+" + numTwo + "=");
  sum = numTwo + numOne;}
}
$.getScript("http://cdnjs.cloudflare.com/ajax/libs/mathjs/3.4.1/math.min.js");

$(".debug").append(
  "numOne: " + numOne + "</br>" +
  "numTwo: " + numTwo + "</br>" +
  "sum: " + sum + "</br>" +
  "operation: " + operation + "</br>" +
  math.eval("4.32 + 3 - 7 / 5")
);

/*$.ajax({
  type:'GET',
  url: 'http://api.wolframalpha.com/v2/query?input=pi&appid=P4P53Y-X45VL8UKWJ',
  contentType: 'text/plain',
  xhrFields: {withCreditentials: false},
  headers: {},
  success: function() {
    alert("Succes!");
  },
  error: function() {
    alert("Error!");
  }
});


$.get('http://api.wolframalpha.com/v2/query?input=pi&appid=P4P53Y-X45VL8UKWJ', function(data) {
    $(".debug").append(data);
});*/

$(".answerText").keyup(function(){
  if (($(this).val()) == sum)
  {
    numOne = parseInt(Math.random() * 10);
    numTwo = parseInt(Math.random() * 10);
    sum = numTwo + numOne;
    $(".equationText").text(numOne + "+" + numTwo + "=");
  };
});

/*var txt3 = document.createElement("div");
txt3.class = "equation"
txt3.innerHTML = numTwo.toString();
$("body").append(txt3);*/
