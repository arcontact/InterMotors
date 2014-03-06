var locations = [
	{"address":"Białystok, ul. Nowowarszawska 78","content":'Białystok<br />ul. Nowowarszawska 78<br /><br />tel. (85) 742 31 53<br />kom. (+48) 695 500 416<br /><a href="mailto:moto.bia@intermotors.pl">moto.bia@intermotors.pl</a>',"lat":"53.121875","lng":"23.193088"},
	{"address":"Bydgoszcz, ul. Fordońska 44","content":'Bydgoszcz<br />ul. Fordońska 44<br /><br />tel. (52) 347 79 78<br />kom. (+48) 785 906 207<br /><a href="mailto:bydgoszcz.moto@intermotors.pl">bydgoszcz.moto@intermotors.pl</a>',"lat":"53.120056","lng":"18.049989"},
	{"address":"Częstochowa, ul. Równoległa 63C","content":'Częstochowa<br />ul. Równoległa 63C<br /><br />tel. (34) 366 12 46<br />kom. (+48) 607 675 085<br /><a href="mailto:czestochowa.moto@intermotors.pl">czestochowa.moto@intermotors.pl</a>',"lat":"50.786629","lng":"19.129115"},
	{"address":"Lublin, ul. M. Rapackiego 14","content":'Lublin<br />ul. M. Rapackiego 14<br /><br />tel. (81) 718 43 25, 718 43 28<br />kom. (+48) 697 893 835<br /><a href="mailto:moto.lub@intermotors.pl">moto.lub@intermotors.pl</a>',"lat":"51.273346","lng":"22.56902"},
	{"address":"Łódź, ul. Dąbrowskiego 207/225","content":'Łódź<br />ul. Dąbrowskiego 207/225<br /><br />tel. (42) 689 70 70<br />kom. (+48) 723 981 702<br /><a href="mailto:lodz.moto@intermotors.pl">lodz.moto@intermotors.pl</a>',"lat":"51.734473","lng":"19.518103"},
	{"address":"Olsztyn, ul. Towarowa 13","content":'Olsztyn<br />ul. Towarowa 13<br /><br />tel. (89) 532 99 73<br />kom. (+48) 691 600 455<br /><a href="mailto:olsztyn.moto@intermotors.pl">olsztyn.moto@intermotors.pl</a>',"lat":"53.782382","lng":"20.51598"},
	{"address":"Poznań, ul. Milczańska 48","content":'Poznań<br />ul. Milczańska 48<br /><br />tel. (61) 8 720 720<br />kom. (+48) 506 372 513<br /><a href="mailto:poznan.moto@intermotors.pl">poznan.moto@intermotors.pl</a>',"lat":"52.387058","lng":"16.966372"},
	{"address":"Rumia, ul. Grunwaldzka 69 A","content":'Rumia<br />ul. Grunwaldzka 69 A<br /><br />tel. (58) 771 26 94<br />kom. (+48) 665 400 762<br /><a href="mailto:gdynia.moto@intermotors.pl">gdynia.moto@intermotors.pl</a>',"lat":"54.581457","lng":"18.369158"},
	{"address":"Rybnik, ul. Gajowa 4","content":'Rybnik<br />ul. Gajowa 4<br /><br />tel. (32) 432 72 25<br />kom. (+48) 667 995 383<br /><a href="mailto:rybnik.moto@intermotors.pl">rybnik.moto@intermotors.pl</a>',"lat":"50.09948228014664","lng":"18.512606620788574"},
	{"address":"Rzeszów, ul. Rzecha 5","content":'Rzeszów<br />ul. Rzecha 5<br /><br />tel. (17) 854 84 91<br />kom. (+48) 695 582 577<br /><a href="mailto:rzeszow.moto@intermotors.pl">rzeszow.moto@intermotors.pl</a>',"lat":"50.056837","lng":"22.028154"},
	{"address":"Siedlce, ul. Warszawska 144/148","content":'Siedlce<br />ul. Warszawska 144/148<br /><br />tel. (25) 6440622, 644 33 33<br />kom. (+48) 697 893 830<br /><a href="mailto:moto.sie@intermotors.pl">moto.sie@intermotors.pl</a>',"lat":"52.16925","lng":"22.238879"},
	{"address":"Sosnowiec, ul. Norwida 2","content":'Sosnowiec<br />ul. Norwida 2<br /><br />tel. (32) 290 13 68<br />kom. (+48) 605 760 637<br /><a href="mailto:sosnowiec.moto@intermotors.pl">sosnowiec.moto@intermotors.pl</a>',"lat":"50.29096723355541","lng":"19.155998826026917"},
	{"address":"Szczecin, ul. Zimowa 4","content":'Szczecin<br />ul. Zimowa 4<br /><br />tel. (91) 880 23 70<br />kom. (+48) 695 449 662<br /><a href="mailto:szczecin.moto@intermotors.pl">szczecin.moto@intermotors.pl</a>',"lat":"53.386285","lng":"14.65808"},
	{"address":"Tarnów, ul. Okrężna 1","content":'Tarnów<br />ul. Okrężna 1<br /><br />tel. (14) 622 01 03<br />kom. (+48) 785 011 715<br /><a href="mailto:tarnow.moto@intermotors.pl">tarnow.moto@intermotors.pl</a>',"lat":"50.012733","lng":"21.020755"},
	{"address":"Warszawa, ul. Łopuszańska 36","content":'Warszawa<br />ul. Łopuszańska 36<br /><br />tel. (22) 355 33 36, 355 33 34<br />kom. (+48) 723 981 751<br /><a href="mailto:lopuszanska.moto@intermotors.pl">lopuszanska.moto@intermotors.pl</a>',"lat":"52.192345","lng":"20.947047"},
	{"address":"Kielce, ul. Warszawska 347","content":'Kielce<br />ul. Warszawska 347<br /><br />tel. (41) 330 12 23<br /><a href="mailto:kielce.moto@intermotors.pl">kielce.moto@intermotors.pl</a>',"lat":"50.906011","lng":"20.678525"},
	{"address":"Długołęka, ul. Wrocławska 33B","content":'Długołęka<br />ul. Wrocławska 33B<br /><br />tel. (71) 797 77 43, 797 77 39<br />kom. (+48) 665 392 299<br /><a href="mailto:wroclaw.moto@intermotors.pl">wroclaw.moto@intermotors.pl</a>',"lat":"51.177915","lng":"17.189388"},
	{"address":"Piekary Śląskie, ul. Bytomska 288","content":'Piekary Śląskie<br />ul. Bytomska 288<br /><br />tel. (32) 287 77 40<br />kom. (+48) 665 400 348<br /><a href="mailto:motocykle.pie@intercars.eu">motocykle.pie@intercars.eu</a>',"lat":"50.39431","lng":"18.946516"},
	{"address":"Płock, ul. Graniczna 46","content":'Płock<br />ul. Graniczna 46<br /><br />tel. (24) 267 40 40<br />kom. (+48) 691 913 154<br /><a href="mailto:plock.moto@intermotors.pl">plock.moto@intermotors.pl</a>',"lat":"52.541269","lng":"19.733978"},
	{"address":"Katowice, ul. Obroki 77","content":'Katowice<br />ul. Obroki 77<br /><br />tel. (32) 605 67 90<br />kom. (+48) 721 063 440<br /><a href="mailto:moto.ktw@intercars.eu">moto.ktw@intercars.eu</a>',"lat":"50.267159","lng":"18.967277"},
	{"address":"Nowy Sącz, ul. Węgierska 147","content":'Nowy Sącz<br />ul. Węgierska 147<br /><br />tel. (18) 442 01 67<br />kom. (+48) 694 404 400<br /><a href="mailto:moto.nsa@intermotors.pl">moto.nsa@intermotors.pl</a>',"lat":"49.592393","lng":"20.679449"},
	{"address":"Cząstków Polski, ul. Gdańska 27","content":'Cząstków Polski<br />ul. Gdańska 27<br /><br />tel. (22) 714 10 81<br />kom. (+48) 697 991 838<br /><a href="mailto:outlet@intermotors.pl">outlet@intermotors.pl</a>',"lat":"52.381146","lng":"20.760298"}
];
var map;
var startingLatitude = 52.069347;
var startingLongitude = 19.480204;
function GoogleMap(){
	this.initialize = function(){
		var h = $(document).height() - 46;
		$("#map_canvas").css({"height":h});
		if(navigator.geolocation){
			$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Łączenie z Google...');
			navigator.geolocation.getCurrentPosition(displayPosition,geolocationError);
		} else {
			geolocationError();
		}
	}
}
function displayPosition(pos){
	var mylat = pos.coords.latitude;
	var mylong = pos.coords.longitude;
	
	var latlng = new google.maps.LatLng(mylat, mylong);
	var myOptions = {
		zoom: 12,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		scaleControl: true,
		streetViewControl: false
	};
	map = new google.maps.Map($(".ui-page-active #map_canvas")[0], myOptions);
	var l = Object.keys(locations).length;
	for(var i=0; i<l; i++){
		createMarker(locations[i]);
	}
	function createMarker(location) {
		var latlng = new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lng));
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			icon: "data:image/png;base64,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"
		});
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="noscrollbar">' + location.content + '</div>'
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, this);
		});
	}
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: 'Twoja lokalizacja'
	});
	function closestMarker(position,locations){
		var closestMarker = -1;
		var closestDistance = Number.MAX_VALUE;
		var len1 = Object.keys(locations).length;
		for(var i=0; i<len1; i++){
			var locationLatLng = new google.maps.LatLng(parseFloat(locations[i].lat), parseFloat(locations[i].lng));
			var dist = google.maps.geometry.spherical.computeDistanceBetween(position, locationLatLng);
			if(dist < closestDistance){
				closestMarker = i;
				closestDistance = dist;
			}
		}
		return closestMarker;
	}
	var closestMarker = closestMarker(latlng, locations);
	var path = new google.maps.MVCArray();
	var service = new google.maps.DirectionsService();
	var poly = new google.maps.Polyline({ map: map, strokeColor: '#FF8200' });
	var src = latlng;
	var des = new google.maps.LatLng(locations[closestMarker].lat,locations[closestMarker].lng);
	path.push(src);
	poly.setPath(path);
	service.route({
		origin: src,
		destination: des,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	}, function (result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
				path.push(result.routes[0].overview_path[i]);
			}
		}
	});
	var LatLngList = new Array (src, des);
	var bounds = new google.maps.LatLngBounds ();
	for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
		bounds.extend (LatLngList[i]);
	}
	map.fitBounds(bounds);
	$(".ui-page-active .right-sidebar .sidebar-arrow p").html("Najbliżej: "+locations[closestMarker].address);
	$(".ui-page-active #map_canvas").addClass("loaded");
}
function geolocationError() {
	$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Nie można ustalić pozycji - <a onclick="showGeolocationForm();">ustal ręcznie</a>');
	
	var mylat = startingLatitude;
	var mylong = startingLongitude;
	
	var latlng = new google.maps.LatLng(mylat, mylong);
	var myOptions = {
		zoom: 6,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		scaleControl: true,
		streetViewControl: false
	};
	map = new google.maps.Map($(".ui-page-active #map_canvas")[0], myOptions);
	var l = Object.keys(locations).length;
	for(var i=0; i<l; i++){
		createMarker(locations[i]);
	}
	function createMarker(location) {
		var latlng = new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lng));
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			icon: "data:image/png;base64,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"
		});
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="noscrollbar">' + location.content + '</div>'
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, this);
		});
	}
}

function showGeolocationForm(){
	$(".ui-page-active .right-sidebar .sidebar-arrow p").html('<div class="input-outer"><form id="geolocation-form" onsubmit="return false;"><input type="text" id="address" placeholder="Wprowadź adres (autouzupełnianie)" /></form></div>');
	var input = $(".ui-page-active #address").get(0);
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);
	var marker = new google.maps.Marker({
		map: map
	});
	var pos = {
		coords: {
			latitude: startingLatitude,
			longitude: startingLongitude,
		}
	};
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
			return;
		}
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
		}
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);
		pos.coords.latitude = place.geometry.location.d;
		pos.coords.longitude = place.geometry.location.e;
		displayPosition(pos);
	});
}