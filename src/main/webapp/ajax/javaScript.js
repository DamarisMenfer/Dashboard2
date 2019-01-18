function getState(id) {
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/services/Light/data/state/"+id,
		dataType : "text",
		success: function( data ) {
			Console.log(data);
		}
	});
}

function changeState(id){
	if (id == )
}

function turnOn(id) {
	$.ajax({
		//envoi de la requête
		method: "POST", 
		url: "http://localhost:8888/RestProject/webapi/myresources/services/Light/data/state/on/"+id,
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
		url: "http://localhost:8888/RestProject/webapi/myresources/services/Light/data/state/off/"+id,
		dataType : "text",
		success: function( data ) {
			Console.log(data);
		}
	});
}
