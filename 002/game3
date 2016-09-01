
var arrity = 4, n = 1, equation='';
$.getScript("http://cdnjs.cloudflare.com/ajax/libs/mathjs/3.4.1/math.min.js");

while(arrity >= n) {
  equation += parseInt(Math.random() * 10).toString();
  if(arrity!=n)
  switch(parseInt(Math.random()*3)){
    case 0:
      equation += "+";
      break;
    case 1:
      equation += "-";
      break;
    case 2:
      equation += "*";
      break;
  };
  n++;
}

{$(".equationText").append(equation);

var sum = Math.eval(equation);

/*
$(".answerText").keyup(function(){
  if (($(this).val()) == sum)
  {
    $(".equationText").text(equation + "=");
  };
});
*/
