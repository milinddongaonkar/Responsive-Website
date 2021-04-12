handleChange1();
function handleChange1(){ 
if(document.getElementById('radio1').checked) {
  var element = document.getElementById("card1");
  element.classList.add("checked", "r");
	document.getElementById("card3").classList.remove("checked");
	document.getElementById("card2").classList.remove("checked");
}else if(document.getElementById('radio2').checked) {
	var element = document.getElementById("card2");
  element.classList.add("checked");
		document.getElementById("card3").classList.remove("checked");
	document.getElementById("card1").classList.remove("checked");
}else if(document.getElementById('radio3').checked) {
	var element = document.getElementById("card3");
  element.classList.add("checked");
	document.getElementById("card1").classList.remove("checked");
	document.getElementById("card2").classList.remove("checked");
}}