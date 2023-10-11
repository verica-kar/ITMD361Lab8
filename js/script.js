function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Verica Karanakova: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }
window.addEventListener('load', init);
