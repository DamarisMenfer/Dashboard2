
var stateLight1;
var stateLight2;
var stateLight3;
var stateLight4;

var stateWindow1;
var stateWindow2;
var stateWindow3;
var stateWindow4;

var stateDoor1;
var stateDoor2;

var heating;

var tmpExt;
var tmpInt;

var sensor;


function loadRessources(){
	loadStateLights();
	loadStateWindows();
	loadStateDoors();
	loadStateTemperature();
	loadStateSensor();
	loadStateHeating();
	loadStateAlarm();
}


function loadStateLights(){
	getStateLight("Light1");
	getStateLight("Light2");
	getStateLight("Light3");
	getStateLight("Light4");
}

function loadStateWindows(){
	getStateWindow("Window1");
	getStateWindow("Window2");
	getStateWindow("Window3");
	getStateWindow("Window4");
}

function loadStateDoors(){
	
	console.log("door");
	getStateDoor("Door1");
	getStateDoor("Door2");
}

function loadStateTemperature(){
	getStateTemperature("TempExt");
	getStateTemperature("TempInt");
}

function loadStateSensor(){
	getStateSensor("Sensor");
}

function loadStateHeating(){
	getStateHeating("Heating1");
}

function loadStateAlarm(){
	getStateAlarm("Alarm1");
}

function getStateLight(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id,
		dataType : "text",
		success: function( data ) {
			changeSwitch(id, data);
		}
	});
}

function getStateWindow(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/window/"+id,
		dataType : "text",
		success: function( data ) {
			changeSwitch(id, data);
		}
	});
}

function getStateDoor(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/door/"+id,
		dataType : "text",
		success: function( data ) {
			changeSwitch(id, data);
			console.log(id);
		}
	});
}

function getStateTemperature(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/temperature/"+id,
		dataType : "text",
		success: function( data ) {
			changeTempPanel(id, data);
		}
	});
}

function getStateSensor(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/sensor/"+id,
		dataType : "text",
		success: function( data ) {
			changeSensorPanel(data);
		}
	});
}

function getStateHeating(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/heating/"+id,
		dataType : "text",
		success: function( data ) {
			changeSwitch(id, data);
		}
	});
}

function getStateAlarm(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/alarm/"+id,
		dataType : "text",
		success: function( data ) {
			changeAlarmPanel(data);
		}
	});
}

function changeSwitch(id, data){
	if(data == "off" || data=="closed"){
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
		else if (id == "Light4"){
			document.getElementById("l4").checked = false;
			stateLight4 = false;
		}
		else if (id == "Door1"){
			document.getElementById("d1").checked = false;
			stateDoor1 = false;
		}
		else if (id == "Door2"){
			document.getElementById("d2").checked = false;
			stateDoor2 = false;
		}
		else if (id == "Window1"){
			document.getElementById("w1").checked = false;
			stateWindow1 = false;
		}
		else if (id == "Window2"){
			document.getElementById("w2").checked = false;
			stateWindow2 = false;
		}
		else if (id == "Window3"){
			document.getElementById("w3").checked = false;
			stateWindow3 = false;
		}
		else if (id == "Window4"){
			document.getElementById("w4").checked = false;
			stateWindow4 = false;
		}
		else if (id == "Heating1"){
			document.getElementById("h1").checked = false;
			heating = false;
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
		else if (id == "Light4"){
			document.getElementById("l4").checked = true;
			stateLight4 = true;
		}	
		else if (id == "Door1"){
			document.getElementById("d1").checked = true;
			stateDoor1 = true;
		}
		else if (id == "Door2"){
			document.getElementById("d2").checked = true;
			stateDoor2 = true;
		}
		else if (id == "Window1"){
			document.getElementById("w1").checked = true;
			stateWindow1 = true;
		}
		else if (id == "Window2"){
			document.getElementById("w2").checked = true;
			stateWindow2 = true;
		}
		else if (id == "Window3"){
			document.getElementById("w3").checked = true;
			stateWindow3 = true;
		}
		else if (id == "Window4"){
			document.getElementById("w4").checked = true;
			stateWindow4 = true;
		}
		else if (id == "Heating1"){
			console.log("on");
			document.getElementById("h1").checked = true;
			heating = true;
		}
	}
}

function changeTempPanel(id, data){
	if(id == "TempInt"){
		document.getElementById("intTempPanel").innerHTML = data+"&#8451";
		tmpInt = data;
	}
	else{
		document.getElementById("extTempPanel").innerHTML = data+"&#8451";
		tmpExt = data;
	}
}

function changeAlarmPanel(data){
	document.getElementById("alarmPanel").innerHTML = data;
}

function changeSensorPanel(data){
	document.getElementById("sensorPanel").innerHTML = data;
}

function changeStateLight(id){
	if(id == "Light1"){
		if(stateLight1 == false){
			turnOnLight(id);
			stateLight1 = true;
		}
		else{
			turnOffLight(id);
			stateLight1 = false;
		}
	}
	else if (id == "Light2"){
		if(stateLight1 == false){
			turnOnLight(id);
			stateLight2 = true;
		}
		else{
			turnOffLight(id);
			stateLight2 = false;
		}		
	}
	else if (id == "Light3"){
		if(stateLight1 == false){
			turnOnLight(id);
			stateLight3 = true;
		}
		else{
			turnOffLight(id);
			stateLight3 = false;
		}
	}
	else{
		if(stateLight1 == false){
			turnOnLight(id);
			stateLight4 = true;
		}
		else{
			turnOffLight(id);
			stateLight4 = false;
		}
	}
	
}


function turnOnLight(id) {
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

function turnOffLight(id) {
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

function changeStateDoor(id){
	if(id == "Door1"){
		if(stateDoor1 == false){
			openDoor(id);
			stateDoor1 = true;
		}
		else{
			closeDoor(id);
			stateDoor1 = false;
			console.log("close");
		}
	}
	else{
		if(stateDoor2 == false){
			openDoor(id);
			stateDoor2 = true;
		}
		else{
			closeDoor(id);
			stateDoor2 = false;
		}
	}
}

function openDoor(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/door/"+id+"/open",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}

function closeDoor(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/door/"+id+"/closed",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}

function changeStateWindow(id){
	if(id == "Window1"){
		if(stateWindow1 == false){
			openWindow(id);
			stateWindow1 = true;
		}
		else{
			closeWindow(id);
			stateWindow1 = false;
		}
	}
	else if (id == "Window2"){
		if(stateWindow1 == false){
			openWindow(id);
			stateWindow2 = true;
		}
		else{
			closeWindow(id);
			stateWindow2 = false;
		}		
	}
	else if (id == "Window3"){
		if(stateWindow1 == false){
			openWindow(id);
			stateWindow3 = true;
		}
		else{
			closeWindow(id);
			stateWindow3 = false;
		}
	}
	else{
		if(stateWindow1 == false){
			openWindow(id);
			stateWindow4 = true;
		}
		else{
			closeWindow(id);
			stateWindow4 = false;
		}
	}
	
}


function openWindow(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/window/"+id+"/open",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}

function closeWindow(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/window/"+id+"/closed",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}

function changeStateHeating(id){
	if(heating == false){
		turnOnHeating(id);
		heating = true;
	}
	else{
		turnOffHeating(id);
		heating = false;
	}
	
	
}

function turnOnHeating(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id+"/on",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}

function turnOffHeating(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/light/"+id+"/off",
		dataType : "text",
		success: function( data ) {
			console.log(data);
		}
	});
}
