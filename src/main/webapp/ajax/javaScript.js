
var stateLight1;
var stateLight2;
var stateLight3;
var stateLight4;


function loadStateLights(){
	getState("Light1");
	getState("Light2");
	getState("Light3");
	getState("Light4");
}

function getState(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id,
		dataType : "text",
		success: function( data ) {
			console.log(data);
			changeSwitch(id, data);
		}
	});
}

function changeSwitch(id, data){
	if(data == "off"){
		if(id == "Light1"){
			document.getElementById("l1").checked = false;
			stateLight1 = false;
		}
		else if (id == "Light2"){
			document.getElementById("l2").checked = false;
			stateLight2 = false;			
		}
		else if (id == "Light3"){
			document.getElementById("l3").checked = false;
			stateLight3 = false;
		}
		else{
			document.getElementById("l4").checked = false;
			stateLight4 = false;
		}
	}
	else{
		if(id == "Light1"){
			document.getElementById("l1").checked = true;
			stateLight1 = true;
		}
		else if (id == "Light2"){
			document.getElementById("l2").checked = true;
			stateLight2 = true;			
		}
		else if (id == "Light3"){
			document.getElementById("l3").checked = true;
			stateLight3 = true;
		}
		else{
			document.getElementById("l4").checked = true;
			stateLight4 = true;
		}	
	}
}

function changeStateLight(id){
	if(id == "Light1"){
		if(stateLight1 == false){
			turnOn(id);
			stateLight1 = true;
		}
		else{
			turnOff(id);
			stateLight1 = false;
		}
	}
	else if (id == "Light2"){
		if(stateLight1 == false){
			turnOn(id);
			stateLight2 = true;
		}
		else{
			turnOff(id);
			stateLight2 = false;
		}		
	}
	else if (id == "Light3"){
		if(stateLight1 == false){
			turnOn(id);
			stateLight3 = true;
		}
		else{
			turnOff(id);
			stateLight3 = false;
		}
	}
	else{
		if(stateLight1 == false){
			turnOn(id);
			stateLight4 = true;
		}
		else{
			turnOff(id);
			stateLight4 = false;
		}
	}
	
}


function turnOn(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id+"/on",
		dataType : "text",
		success: function( data ) {
			Console.log(data);
		}
	});
}

function turnOff(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id+"/off",
		dataType : "text",
		success: function( data ) {
			Console.log(data);
		}
	});
}
