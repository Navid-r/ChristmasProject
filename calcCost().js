function calcCost(){
  var myName = document.getElementById('name').value;
  var weight = document.getElementById('weight').value;
  var expressCost = 0;
  if (document.getElementById('express').checked){
    expressCost=5;
  }
  if(document.getElementById('r1').checked){
    document.getElementById('cost').innerHTML= (weight*2)+expressCost;
  }
  else if(document.getElementById('r2').checked){
    document.getElementById('cost').innerHTML= (weight*10)+expressCost;
  }
  else{
    document.getElementById('cost').innerHTML= (weight*5)+expressCost;
  }
}
