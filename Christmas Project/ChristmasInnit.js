function GateLogic() {

  if (document.getElementById('null').selected) {
    var a = 0;
  } else {
    var a = 1;
  }
  if (document.getElementById('zero').selected) {
    var b = 0;
  } else {
    var b = 1;
  }

  if (document.getElementById('radio1').checked){
    document.getElementById('imageGate').src = 'and.png'
    document.getElementById('answer').innerHTML = a && b;
  }
  if (document.getElementById('radio2').checked){
    document.getElementById('imageGate').src = 'or.png'
    document.getElementById('answer').innerHTML = a || b;
  }
  if (document.getElementById('radio3').checked){
    document.getElementById('imageGate').src = 'xor.png'
    document.getElementById('answer').innerHTML = ( a && !b ) || ( !a && b );
  }
  if (document.getElementById('radio4').checked){
    document.getElementById('imageGate').src = 'nand.png'
    document.getElementById('answer').innerHTML = !(a && b);
  }
  if (document.getElementById('radio5').checked){
    document.getElementById('imageGate').src = 'nor.png'
    document.getElementById('answer').innerHTML =!(a || b);
  }
}
