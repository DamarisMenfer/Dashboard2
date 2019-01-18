function loadDoc() {
	console.log("hi");
	$.ajax({
		//envoi de la requête
		method: "GET", 
		url: "http://localhost:8888/RestProject/webapi/myresources/services/Light/data/state",
		dataType : "xml",
		success: function( data ) {
			Console.log("hi");
		}
	});
}
