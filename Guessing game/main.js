function guess(){

var inputValue =document.getElementById('input-value').value;
var answer = parseInt(Math.random()*11);
if (inputValue != "" && inputValue < 11) {
if(inputValue == answer){

  document.getElementById('wrapper').style.display="none";
  document.getElementById('correct').style.display='block';
  document.getElementById('cText1').innerHTML= "Answer is " + answer;
}
else {
  document.getElementById('cText').innerHTML="You're wrong";
  document.getElementById('correct').style.display='block';
  document.getElementById('wrapper').style.display="none";
  document.getElementById('cText').style.color="Red";
  document.getElementById('cText1').innerHTML= "Answer is " + answer;
}

}
else if(inputValue == "" && inputValue < 10){
  document.getElementById('input-value').style.borderColor="red";
  document.getElementById('err').style.display ='block';
}
else if(inputValue > 10 && inputValue != ""){
  document.getElementById('input-value').style.borderColor="red";
  document.getElementById('err1').style.display ='block';
  document.getElementById('err').style.display='none';
}

}
function OK(){
  document.getElementById('wrapper').style.display="block";
  document.getElementById('correct').style.display='none';
  document.getElementById('input-value').value="";
  document.getElementById('input-value').style.borderColor="black";
  
  document.getElementById('err').style.display ='none';
  document.getElementById('err1').style.display ='none';
}