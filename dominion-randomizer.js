/*
document.getElementById("Base1").addEventListener("click", function(){
	if (document.getElementById("Base1").checked){
		document.getElementById("mExpBase1").removeAttribute("disabled")
	}else{
		document.getElementById("mExpBase1").setAttribute("disabled", "disabled")
		if (document.getElementById("mExpBase1").checked){
			document.getElementById("mExpNone").checked = true;
		}
	}
});
*/

var base;
$.ajax("expantions/base.json").done(function(data){
	base = JSON.parse(data);
});

function enableDisableButtons(){
	var checkBox = $(this);
	var radioButton = $(this).siblings('input[type=radio]');
	if (checkBox.prop('checked')) {
		radioButton.prop('disabled', false);
	} else {
		radioButton.prop('disabled', true);
		if (radioButton.prop('checked')) {
			$('#mExpNone').prop('checked', true);
		}
	}
}

function run(){
	var poollist;
	var retlist;
	if (document.getElementById("Base1").checked){
		poollist.concat(base["common"]);
		poollist.concat(base["1stEdition"]);
	}
	while(retlist.length < 10){
		var item = poollist[Math.floor(Math.random()*items.length)];
		retlist.push(item);
		poollist.splice(poollist.indexof(item), 1);
	}
	for (i=0;i<retlist.length;i++){
		$("#listbox").append($("<option>",{value: retlist[i]}));
	}
}

$('#sel input[type=checkbox]').click(enableDisableButtons).each(enableDisableButtons);
