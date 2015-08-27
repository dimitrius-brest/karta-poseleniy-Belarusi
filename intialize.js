	  function initialize() {
		var latlng = new google.maps.LatLng(53.7682,28.37007);
		var myOptions = {
		  //zoom: 7,
		  center: latlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  navigationControlOptions: {  
			style: google.maps.NavigationControlStyle.SMALL
		  }, 
		  scaleControl: true
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),
			myOptions);
		var latlngbounds = new google.maps.LatLngBounds();
			latlngbounds.extend(new google.maps.LatLng(55.36825893099629, 30.56621789932251));
		var infowindow_2 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Звон-Гора»</h2><p><a href="/poselenies/zvon-gora">Подробнее...</a><p></div>'
		});
		var marker_2 = new google.maps.Marker({
			position: new google.maps.LatLng(55.36825893099629, 30.56621789932251),
			map: map,
			title:"Поселение «Звон-Гора»" ,
			icon: 'http://ecoby.info/i/maps/marker_1.png'
		});
		google.maps.event.addListener(marker_2, 'click', function() {
			infowindow_2.open(map,marker_2);
		});
			latlngbounds.extend(new google.maps.LatLng(53.981443, 26.777712));
		var infowindow_1 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Росы»</h2><p><a href="/poselenies/rosy">Подробнее...</a><p></div>'
		});
		var marker_1 = new google.maps.Marker({
			position: new google.maps.LatLng(53.981443, 26.777712),
			map: map,
			title:"Поселение «Росы»" ,
			icon: 'http://ecoby.info/i/maps/marker_1.png'
		});
		google.maps.event.addListener(marker_1, 'click', function() {
			infowindow_1.open(map,marker_1);
		});
			latlngbounds.extend(new google.maps.LatLng(54.50389121341665, 27.6621150970459));
		var infowindow_21 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Боброво»</h2><p><a href="/poselenies/bobrovo">Подробнее...</a><p></div>'
		});
		var marker_21 = new google.maps.Marker({
			position: new google.maps.LatLng(54.50389121341665, 27.6621150970459),
			map: map,
			title:"Поселение «Боброво»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_21, 'click', function() {
			infowindow_21.open(map,marker_21);
		});
			latlngbounds.extend(new google.maps.LatLng(55.283148295334705, 28.734912872314453));
		var infowindow_16 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Гняздоўе Ветраў»</h2><p><a href="/poselenies/gnjazdoue_vetrau">Подробнее...</a><p></div>'
		});
		var marker_16 = new google.maps.Marker({
			position: new google.maps.LatLng(55.283148295334705, 28.734912872314453),
			map: map,
			title:"Поселение «Гняздоўе Ветраў»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_16, 'click', function() {
			infowindow_16.open(map,marker_16);
		});
			latlngbounds.extend(new google.maps.LatLng(55.825920, 29.087349));
		var infowindow_51 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Городище»</h2><p><a href="/poselenies/gorodishhe">Подробнее...</a><p></div>'
		});
		var marker_51 = new google.maps.Marker({
			position: new google.maps.LatLng(55.825920, 29.087349),
			map: map,
			title:"Поселение «Городище»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_51, 'click', function() {
			infowindow_51.open(map,marker_51);
		});
			latlngbounds.extend(new google.maps.LatLng(51.92325531928336, 24.187602996826172));
		var infowindow_42 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Грушка»</h2><p><a href="/poselenies/grushka">Подробнее...</a><p></div>'
		});
		var marker_42 = new google.maps.Marker({
			position: new google.maps.LatLng(51.92325531928336, 24.187602996826172),
			map: map,
			title:"Поселение «Грушка»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_42, 'click', function() {
			infowindow_42.open(map,marker_42);
		});
			latlngbounds.extend(new google.maps.LatLng(53.722208817163754, 30.079622268676758));
		var infowindow_24 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Досовичи»</h2><p><a href="/poselenies/dosovichi">Подробнее...</a><p></div>'
		});
		var marker_24 = new google.maps.Marker({
			position: new google.maps.LatLng(53.722208817163754, 30.079622268676758),
			map: map,
			title:"Поселение «Досовичи»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_24, 'click', function() {
			infowindow_24.open(map,marker_24);
		});
			latlngbounds.extend(new google.maps.LatLng(51.911913,24.049691));
		var infowindow_4 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Дубично»</h2><p><a href="/poselenies/dubichno">Подробнее...</a><p></div>'
		});
		var marker_4 = new google.maps.Marker({
			position: new google.maps.LatLng(51.911913,24.049691),
			map: map,
			title:"Поселение «Дубично»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_4, 'click', function() {
			infowindow_4.open(map,marker_4);
		});
			latlngbounds.extend(new google.maps.LatLng(55.3110014897884, 29.81191635131836));
		var infowindow_8 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Зароново»</h2><p><a href="/poselenies/zaronovo">Подробнее...</a><p></div>'
		});
		var marker_8 = new google.maps.Marker({
			position: new google.maps.LatLng(55.3110014897884, 29.81191635131836),
			map: map,
			title:"Поселение «Зароново»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_8, 'click', function() {
			infowindow_8.open(map,marker_8);
		});
			latlngbounds.extend(new google.maps.LatLng(53.596376268392575, 26.04832649230957));
		var infowindow_5 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Звенящие ручьи»</h2><p><a href="/poselenies/zvenjashhie_ruchi">Подробнее...</a><p></div>'
		});
		var marker_5 = new google.maps.Marker({
			position: new google.maps.LatLng(53.596376268392575, 26.04832649230957),
			map: map,
			title:"Поселение «Звенящие ручьи»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_5, 'click', function() {
			infowindow_5.open(map,marker_5);
		});
			latlngbounds.extend(new google.maps.LatLng(54.305221,26.229164));
		var infowindow_27 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Камяніца»</h2><p><a href="/poselenies/kamjanca">Подробнее...</a><p></div>'
		});
		var marker_27 = new google.maps.Marker({
			position: new google.maps.LatLng(54.305221,26.229164),
			map: map,
			title:"Поселение «Камяніца»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_27, 'click', function() {
			infowindow_27.open(map,marker_27);
		});
			latlngbounds.extend(new google.maps.LatLng(52.168333343333,31.186388898889));
		var infowindow_12 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Красное»</h2><p><a href="/poselenies/krasnoe">Подробнее...</a><p></div>'
		});
		var marker_12 = new google.maps.Marker({
			position: new google.maps.LatLng(52.168333343333,31.186388898889),
			map: map,
			title:"Поселение «Красное»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_12, 'click', function() {
			infowindow_12.open(map,marker_12);
		});
			latlngbounds.extend(new google.maps.LatLng(53.849931805650904, 23.836147785186768));
		var infowindow_17 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Ладное»</h2><p><a href="/poselenies/ladnoe_2">Подробнее...</a><p></div>'
		});
		var marker_17 = new google.maps.Marker({
			position: new google.maps.LatLng(53.849931805650904, 23.836147785186768),
			map: map,
			title:"Поселение «Ладное»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_17, 'click', function() {
			infowindow_17.open(map,marker_17);
		});
			latlngbounds.extend(new google.maps.LatLng(52.81306,30.265));
		var infowindow_30 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Осиновица»</h2><p><a href="/poselenies/osinovica">Подробнее...</a><p></div>'
		});
		var marker_30 = new google.maps.Marker({
			position: new google.maps.LatLng(52.81306,30.265),
			map: map,
			title:"Поселение «Осиновица»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_30, 'click', function() {
			infowindow_30.open(map,marker_30);
		});
			latlngbounds.extend(new google.maps.LatLng(53.59524288445199, 24.359736442565918));
		var infowindow_20 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Осники»</h2><p><a href="/poselenies/osniki">Подробнее...</a><p></div>'
		});
		var marker_20 = new google.maps.Marker({
			position: new google.maps.LatLng(53.59524288445199, 24.359736442565918),
			map: map,
			title:"Поселение «Осники»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_20, 'click', function() {
			infowindow_20.open(map,marker_20);
		});
			latlngbounds.extend(new google.maps.LatLng(53.314737,26.037787));
		var infowindow_22 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Радaвое»</h2><p><a href="/poselenies/radavoe">Подробнее...</a><p></div>'
		});
		var marker_22 = new google.maps.Marker({
			position: new google.maps.LatLng(53.314737,26.037787),
			map: map,
			title:"Поселение «Радaвое»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_22, 'click', function() {
			infowindow_22.open(map,marker_22);
		});
			latlngbounds.extend(new google.maps.LatLng(52.0333, 24.0000));
		var infowindow_9 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Радваничи»</h2><p><a href="/poselenies/radvanichi">Подробнее...</a><p></div>'
		});
		var marker_9 = new google.maps.Marker({
			position: new google.maps.LatLng(52.0333, 24.0000),
			map: map,
			title:"Поселение «Радваничи»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_9, 'click', function() {
			infowindow_9.open(map,marker_9);
		});
			latlngbounds.extend(new google.maps.LatLng(54.060589,29.581275));
		var infowindow_19 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Смогилёвка»</h2><p><a href="/poselenies/smogiljovka">Подробнее...</a><p></div>'
		});
		var marker_19 = new google.maps.Marker({
			position: new google.maps.LatLng(54.060589,29.581275),
			map: map,
			title:"Поселение «Смогилёвка»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_19, 'click', function() {
			infowindow_19.open(map,marker_19);
		});
			latlngbounds.extend(new google.maps.LatLng(54.8196191, 28.1519409));
		var infowindow_49 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Улесье»</h2><p><a href="/poselenies/ulese">Подробнее...</a><p></div>'
		});
		var marker_49 = new google.maps.Marker({
			position: new google.maps.LatLng(54.8196191, 28.1519409),
			map: map,
			title:"Поселение «Улесье»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_49, 'click', function() {
			infowindow_49.open(map,marker_49);
		});
			latlngbounds.extend(new google.maps.LatLng(52.608888898889,24.716111121111));
		var infowindow_44 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Утраны»</h2><p><a href="/poselenies/utrany">Подробнее...</a><p></div>'
		});
		var marker_44 = new google.maps.Marker({
			position: new google.maps.LatLng(52.608888898889,24.716111121111),
			map: map,
			title:"Поселение «Утраны»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_44, 'click', function() {
			infowindow_44.open(map,marker_44);
		});
			latlngbounds.extend(new google.maps.LatLng(55.153937913748095, 28.062129020690918));
		var infowindow_14 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Утрина»</h2><p><a href="/poselenies/utrina">Подробнее...</a><p></div>'
		});
		var marker_14 = new google.maps.Marker({
			position: new google.maps.LatLng(55.153937913748095, 28.062129020690918),
			map: map,
			title:"Поселение «Утрина»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_14, 'click', function() {
			infowindow_14.open(map,marker_14);
		});
			latlngbounds.extend(new google.maps.LatLng(55.42954917778414, 30.78472137451172));
		var infowindow_47 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Яснодар»</h2><p><a href="/poselenies/jasnodar">Подробнее...</a><p></div>'
		});
		var marker_47 = new google.maps.Marker({
			position: new google.maps.LatLng(55.42954917778414, 30.78472137451172),
			map: map,
			title:"Поселение «Яснодар»" ,
			icon: 'http://ecoby.info/i/maps/marker_2.png'
		});
		google.maps.event.addListener(marker_47, 'click', function() {
			infowindow_47.open(map,marker_47);
		});
			latlngbounds.extend(new google.maps.LatLng(54.594445,27.998865));
		var infowindow_13 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Васильковка»</h2><p><a href="/poselenies/vasilkovka">Подробнее...</a><p></div>'
		});
		var marker_13 = new google.maps.Marker({
			position: new google.maps.LatLng(54.594445,27.998865),
			map: map,
			title:"Поселение «Васильковка»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_13, 'click', function() {
			infowindow_13.open(map,marker_13);
		});
			latlngbounds.extend(new google.maps.LatLng(54.40109855026913, 28.54688816665646));
		var infowindow_6 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Дубравушка»</h2><p><a href="/poselenies/dubravushka">Подробнее...</a><p></div>'
		});
		var marker_6 = new google.maps.Marker({
			position: new google.maps.LatLng(54.40109855026913, 28.54688816665646),
			map: map,
			title:"Поселение «Дубравушка»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_6, 'click', function() {
			infowindow_6.open(map,marker_6);
		});
			latlngbounds.extend(new google.maps.LatLng(53.50149993649527, 29.7654390335083));
		var infowindow_43 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Збышин»</h2><p><a href="/poselenies/zbyshin">Подробнее...</a><p></div>'
		});
		var marker_43 = new google.maps.Marker({
			position: new google.maps.LatLng(53.50149993649527, 29.7654390335083),
			map: map,
			title:"Поселение «Збышин»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_43, 'click', function() {
			infowindow_43.open(map,marker_43);
		});
			latlngbounds.extend(new google.maps.LatLng(55.28952693677035, 27.719063758850098));
		var infowindow_48 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Каханае»</h2><p><a href="/poselenies/kahanae">Подробнее...</a><p></div>'
		});
		var marker_48 = new google.maps.Marker({
			position: new google.maps.LatLng(55.28952693677035, 27.719063758850098),
			map: map,
			title:"Поселение «Каханае»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_48, 'click', function() {
			infowindow_48.open(map,marker_48);
		});
			latlngbounds.extend(new google.maps.LatLng(54.618928,28.020369));
		var infowindow_10 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Ладное»</h2><p><a href="/poselenies/ladnoe">Подробнее...</a><p></div>'
		});
		var marker_10 = new google.maps.Marker({
			position: new google.maps.LatLng(54.618928,28.020369),
			map: map,
			title:"Поселение «Ладное»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_10, 'click', function() {
			infowindow_10.open(map,marker_10);
		});
			latlngbounds.extend(new google.maps.LatLng(54.254344858606345, 27.346601486206055));
		var infowindow_15 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Ловцевичи»</h2><p><a href="/poselenies/lovcevichi">Подробнее...</a><p></div>'
		});
		var marker_15 = new google.maps.Marker({
			position: new google.maps.LatLng(54.254344858606345, 27.346601486206055),
			map: map,
			title:"Поселение «Ловцевичи»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_15, 'click', function() {
			infowindow_15.open(map,marker_15);
		});
			latlngbounds.extend(new google.maps.LatLng(52.05478637585534, 25.97846031188965));
		var infowindow_45 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Новая жизнь»</h2><p><a href="/poselenies/novaja_zhizn">Подробнее...</a><p></div>'
		});
		var marker_45 = new google.maps.Marker({
			position: new google.maps.LatLng(52.05478637585534, 25.97846031188965),
			map: map,
			title:"Поселение «Новая жизнь»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_45, 'click', function() {
			infowindow_45.open(map,marker_45);
		});
			latlngbounds.extend(new google.maps.LatLng(54.953076,30.296245));
		var infowindow_3 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Ольгина Слобода»</h2><p><a href="/poselenies/olgina_sloboda">Подробнее...</a><p></div>'
		});
		var marker_3 = new google.maps.Marker({
			position: new google.maps.LatLng(54.953076,30.296245),
			map: map,
			title:"Поселение «Ольгина Слобода»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_3, 'click', function() {
			infowindow_3.open(map,marker_3);
		});
			latlngbounds.extend(new google.maps.LatLng(54.80489000180017, 26.232433319091797));
		var infowindow_25 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Ольховка»</h2><p><a href="/poselenies/olhovka">Подробнее...</a><p></div>'
		});
		var marker_25 = new google.maps.Marker({
			position: new google.maps.LatLng(54.80489000180017, 26.232433319091797),
			map: map,
			title:"Поселение «Ольховка»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_25, 'click', function() {
			infowindow_25.open(map,marker_25);
		});
			latlngbounds.extend(new google.maps.LatLng(52.45417876084295, 30.384020805358887));
		var infowindow_29 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Радзімічы»</h2><p><a href="/poselenies/radzimichy">Подробнее...</a><p></div>'
		});
		var marker_29 = new google.maps.Marker({
			position: new google.maps.LatLng(52.45417876084295, 30.384020805358887),
			map: map,
			title:"Поселение «Радзімічы»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_29, 'click', function() {
			infowindow_29.open(map,marker_29);
		});
			latlngbounds.extend(new google.maps.LatLng(53.024722,28.735127));
		var infowindow_40 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Радужный край»</h2><p><a href="/poselenies/raduzhnyi_krai">Подробнее...</a><p></div>'
		});
		var marker_40 = new google.maps.Marker({
			position: new google.maps.LatLng(53.024722,28.735127),
			map: map,
			title:"Поселение «Радужный край»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_40, 'click', function() {
			infowindow_40.open(map,marker_40);
		});
			latlngbounds.extend(new google.maps.LatLng(53.6203612174246, 29.53451156616211));
		var infowindow_34 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Развадово»</h2><p><a href="/poselenies/razvadovo">Подробнее...</a><p></div>'
		});
		var marker_34 = new google.maps.Marker({
			position: new google.maps.LatLng(53.6203612174246, 29.53451156616211),
			map: map,
			title:"Поселение «Развадово»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_34, 'click', function() {
			infowindow_34.open(map,marker_34);
		});
			latlngbounds.extend(new google.maps.LatLng(54.958238317936306, 28.463022708892822));
		var infowindow_26 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Родовое поместье Леонида и Ольги Огурцовых деревне Уберцы»</h2><p><a href="/poselenies/ubercy">Подробнее...</a><p></div>'
		});
		var marker_26 = new google.maps.Marker({
			position: new google.maps.LatLng(54.958238317936306, 28.463022708892822),
			map: map,
			title:"Поселение «Родовое поместье Леонида и Ольги Огурцовых деревне Уберцы»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_26, 'click', function() {
			infowindow_26.open(map,marker_26);
		});
			latlngbounds.extend(new google.maps.LatLng(55.177936448531014, 28.241901397705078));
		var infowindow_46 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Сшо»</h2><p><a href="/poselenies/ssho">Подробнее...</a><p></div>'
		});
		var marker_46 = new google.maps.Marker({
			position: new google.maps.LatLng(55.177936448531014, 28.241901397705078),
			map: map,
			title:"Поселение «Сшо»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_46, 'click', function() {
			infowindow_46.open(map,marker_46);
		});
			latlngbounds.extend(new google.maps.LatLng(55.04297492742518, 29.452972412109375));
		var infowindow_50 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Челнышки»</h2><p><a href="/poselenies/chelnyshki">Подробнее...</a><p></div>'
		});
		var marker_50 = new google.maps.Marker({
			position: new google.maps.LatLng(55.04297492742518, 29.452972412109375),
			map: map,
			title:"Поселение «Челнышки»" ,
			icon: 'http://ecoby.info/i/maps/marker_3.png'
		});
		google.maps.event.addListener(marker_50, 'click', function() {
			infowindow_50.open(map,marker_50);
		});
			latlngbounds.extend(new google.maps.LatLng(53.87844040332883, 30.34423828125));
		var infowindow_31 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Могилёв, отзовись!»</h2><p><a href="/poselenies/mogiljov_otzovis">Подробнее...</a><p></div>'
		});
		var marker_31 = new google.maps.Marker({
			position: new google.maps.LatLng(53.87844040332883, 30.34423828125),
			map: map,
			title:"Поселение «Могилёв, отзовись!»" ,
			icon: 'http://ecoby.info/i/maps/marker_5.png'
		});
		google.maps.event.addListener(marker_31, 'click', function() {
			infowindow_31.open(map,marker_31);
		});
			latlngbounds.extend(new google.maps.LatLng(53.672307307332225, 23.8238525390625));
		var infowindow_41 = new google.maps.InfoWindow({
			content: '<div id="content"><h2>Поселение «Папараць-Кветка»</h2><p><a href="/poselenies/paparac-kvetka">Подробнее...</a><p></div>'
		});
		var marker_41 = new google.maps.Marker({
			position: new google.maps.LatLng(53.672307307332225, 23.8238525390625),
			map: map,
			title:"Поселение «Папараць-Кветка»" ,
			icon: 'http://ecoby.info/i/maps/marker_5.png'
		});
		google.maps.event.addListener(marker_41, 'click', function() {
			infowindow_41.open(map,marker_41);
		});
			//latlngbounds.extend(new google.maps.LatLng(56.00, 32.00));
		//latlngbounds.extend(new google.maps.LatLng(51.00, 22.00));
		map.setCenter( latlngbounds.getCenter(), map.fitBounds(latlngbounds));
	  }
