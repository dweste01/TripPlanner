function initialize_map() {
	console.log("INITIALIZING MAP");
	var myLatLong = new google.maps.LatLng(40.705189,-74.009209);
	var mapOptions = {
		center: myLatLong,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map_canvas = document.getElementById("mapCanvas");

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new google.maps.Marker({
		position: myLatLong,
		title: "Fullstack Academy",
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	})

	marker.setMap(map);
	var infoWindow = new google.maps.InfoWindow({
		content: "Fullstack: 5 Hanover Square"
	})
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	})
}

$(document).ready(function() {
	console.log("READY");
	initialize_map();
});