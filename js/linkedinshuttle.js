$(function() {
  // Info for North Shuttle
  var shuttleInfoElem = $('#shuttleInfo'),
      networkFleetUrl   = 'http://50.56.166.75/networkfleetcar/getfleetgpsinfoextended?u=linkedin&p=lnkd',
      li_latlng         = '37.423327,-122.071152',
      isSouthbound,
      map,
      northShuttleLatLng,
      browserSupportFlag = false,
      northBusMarker1, northBusMarker2, youmarker,
      northStops = [
        {
          name: "Lombard & Pierce",
          description: "Pick-up at SW corner",
          pickupTime: [
		    {
              hours: "7",
              minutes: "05",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "35",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "51",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "51",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "26",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "26",
              ampm: "PM"
            }
	      ],
          location: {
            latitude: 37.799295,
            longitude: -122.439421
          }
        },
        {
          name: "Van Ness & Union",
          description: "Pick-up at SW corner",
          pickupTime: [
		    {
              hours: "7",
              minutes: "11",
              ampm: "AM"
            },
 			{
              hours: "7",
              minutes: "41",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "43",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "43",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "20",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "20",
              ampm: "PM"
            }
	      ],
          location: {
            latitude: 37.798499,
            longitude: -122.424112
          }
        },
        {
          name: "Van Ness & Sacramento",
          description: "Pick-up at NW corner",
          pickupTime: [
		    {
              hours: "7",
              minutes: "15",
              ampm: "AM"
            },
 			{
              hours: "7",
              minutes: "45",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "39",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "39",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "17",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "17",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.791353,
            longitude: -122.422714
          }
        },
        {
          name: "Van Ness & Eddy",
          description: "Pick-up at NW corner of Van Ness & Larch. Drop-off at Van Ness & Eddy.",
          pickupTime: [
		    {
              hours: "7",
              minutes: "19",
              ampm: "AM"
            },
 			{
              hours: "7",
              minutes: "49",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "35",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "35",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "13",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "13",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.782495,
            longitude: -122.420887
          }
        },
        {
          name: "8th & Market",
          description: "Pick-up at SW corner of 8th & Market. Drop-off at 9th & Market.",
          pickupTime: [
		    {
              hours: "7",
              minutes: "23",
              ampm: "AM"
            },
 			{
              hours: "7",
              minutes: "53",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "30",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "30",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "09",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "09",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.7785,
            longitude: -122.41473
          }
        },
        {
          name: "6th & Bryant",
          description: "Pick-up at NW corner",
          pickupTime: [
		    {
              hours: "7",
              minutes: "29",
              ampm: "AM"
            },
 			{
              hours: "7",
              minutes: "59",
              ampm: "AM"
            },
			{
              hours: "6",
              minutes: "23",
              ampm: "PM"
            },
			{
	          hours: "7",
	          minutes: "23",
	          ampm: "PM"
	        },
			{
              hours: "9",
              minutes: "04",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "04",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.776061,
            longitude: -122.402686
          }
        },
        {
          name: "Mountain View",
          description: "Pick-up/drop-off in front of 2025",
          pickupTime: [
		    {
              hours: "8",
              minutes: "30",
              ampm: "AM"
            },
 			{
              hours: "9",
              minutes: "00",
              ampm: "AM"
            },
			{
              hours: "5",
              minutes: "15",
              ampm: "PM"
            },
			{
	          hours: "6",
	          minutes: "15",
	          ampm: "PM"
	        },
			{
              hours: "8",
              minutes: "15",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "15",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.4233,
            longitude: -122.07334
          }
        },
        {
          name: "Sunnyvale Building A",
          description: "Pick-up/drop-off in front of building A",
          pickupTime: [
		    {
              hours: "8",
              minutes: "43",
              ampm: "AM"
            },
 			{
              hours: "9",
              minutes: "13",
              ampm: "AM"
            },
			{
              hours: "5",
              minutes: "00",
              ampm: "PM"
            },
			{
	          hours: "6",
	          minutes: "00",
	          ampm: "PM"
	        },
			{
              hours: "8",
              minutes: "00",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "00",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.392221,
		    longitude: -122.031402
          }
        },
        {
          name: "Sunnyvale Building B",
          description: "Pick-up/drop-off in front of building B",
          pickupTime: [
		    {
              hours: "8",
              minutes: "45",
              ampm: "AM"
            },
 			{
              hours: "9",
              minutes: "15",
              ampm: "AM"
            },
			{
              hours: "5",
              minutes: "02",
              ampm: "PM"
            },
			{
	          hours: "6",
	          minutes: "02",
	          ampm: "PM"
	        },
			{
              hours: "8",
              minutes: "02",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "02",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.39462,
		    longitude: -122.031402
          }
        }
      ],	

  // Info for South Shuttle
      southShuttleLatLng1, southShuttleLatLng2, southShuttleLatLng3,
	  southBusMarker1, southBusMarker2, southBusMarker3,
	  southStops = [
	    {
		  name: "Fillmore & California",
		  description: "Pick-up at SW corner",
          pickupTime: [
			{
              hours: "6",
              minutes: "50",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "20",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "35",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "25",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "25",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "25",
              ampm: "PM"
            },
   			{
              hours: "9",
              minutes: "06",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "06",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.788797,
		    longitude: -122.433925
		  }
		},
		{
		  name: "Fillmore & Eddy",
		  description: "Pick-up at NW corner of Fillmore & Eddy. Drop-off at Fillmore & Turk/Golden Gate.",
          pickupTime: [
			{
              hours: "6",
              minutes: "53",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "23",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "38",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "20",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "20",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "20",
              ampm: "PM"
            },
   			{
              hours: "9",
              minutes: "02",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "02",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.781471,
		    longitude: -122.432432
		  }
		},
		{
		  name: "Divisadero & Grove",
	      description: "Pick-up at NW corner",
          pickupTime: [
			{
              hours: "6",
              minutes: "58",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "28",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "43",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "13",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "13",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "13",
              ampm: "PM"
            },
   			{
              hours: "8",
              minutes: "55",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "55",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.776002,
			longitude: -122.438179
	      }
		},
		{
		  name: "Divisadero & Haight",
		  description: "Pick-up at SW corner",
          pickupTime: [
			{
              hours: "7",
              minutes: "00",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "30",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "45",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "10",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "10",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "10",
              ampm: "PM"
            },
   			{
              hours: "8",
              minutes: "54",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "54",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.771214,
		    longitude: -122.437187
		  }
		},
		{
		  name: "Castro & Market",
		  description: "Pick-up at SW corner",
          pickupTime: [
			{
              hours: "7",
              minutes: "04",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "34",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "49",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "06",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "06",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "06",
              ampm: "PM"
            },
   			{
              hours: "8",
              minutes: "50",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "50",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.762127,
		    longitude: -122.435167
		  }
		},
		{
		  name: "24th & Noe",
		  description: "Pick-up at SW corner",
          pickupTime: [
			{
              hours: "7",
              minutes: "10",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "40",
              ampm: "AM"
            },
			{
              hours: "8",
              minutes: "55",
              ampm: "AM"
            },
   			{
              hours: "5",
              minutes: "59",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "59",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "59",
              ampm: "PM"
            },
   		    {
              hours: "8",
              minutes: "44",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "44",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.751386,
		    longitude: -122.431978
		  }
		},
	    {
		  name: "24th & Mission",
		  description: "Pick-up at SW corner",
          pickupTime: [
			{
              hours: "7",
              minutes: "15",
              ampm: "AM"
            },
			{
              hours: "7",
              minutes: "45",
              ampm: "AM"
            },
			{
              hours: "9",
              minutes: "00",
              ampm: "AM"
            },
   			{
              hours: "5",
              minutes: "53",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "53",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "53",
              ampm: "PM"
            },
   			{
              hours: "8",
              minutes: "39",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "39",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.752783,
		    longitude: -122.418406
		  }
		},
		{
		  name: "Florida & Cesar Chavez",
		  description: "Pick-up at SW corner of Florida & Cesar Chavez. Drop-off at Bryant & Cesar Chavez.",
          pickupTime: [
			{
              hours: "7",
              minutes: "20",
              ampm: "AM"
            },
		    {
              hours: "7",
              minutes: "50",
              ampm: "AM"
            },
			{
              hours: "9",
              minutes: "05",
              ampm: "AM"
            },
   			{
              hours: "5",
              minutes: "48",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "48",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "48",
              ampm: "PM"
            },
   			{
              hours: "8",
              minutes: "35",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "35",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.748239,
		    longitude: -122.409821
		  }
		},
		{
		  name: "Mountain View",
		  description: "Pick-up/drop-off in front of 2025",
          pickupTime: [
			{
              hours: "8",
              minutes: "15",
              ampm: "AM"
            },
		    {
              hours: "8",
              minutes: "45",
              ampm: "AM"
            },
			{
              hours: "10",
              minutes: "00",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "5",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "45",
              ampm: "PM"
            },
   			{
              hours: "7",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "45",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.423547,
		    longitude: -122.073146
		  }
		},
		{
		  name: "Sunnyvale Building A",
		  description: "Pick-up/drop-off in front of building A",
          pickupTime: [
			{
              hours: "8",
              minutes: "28",
              ampm: "AM"
            },
		    {
              hours: "8",
              minutes: "58",
              ampm: "AM"
            },
			{
              hours: "10",
              minutes: "12",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "30",
              ampm: "PM"
            },
			{
              hours: "5",
              minutes: "30",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "30",
              ampm: "PM"
            },
   			{
              hours: "7",
              minutes: "30",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "30",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.39214,
		    longitude: -122.031826
		  }
		},
		{
		  name: "Sunnyvale Building B",
		  description: "Pick-up/drop-off in front of building B",
          pickupTime: [
			{
              hours: "8",
              minutes: "30",
              ampm: "AM"
            },
		    {
              hours: "9",
              minutes: "00",
              ampm: "AM"
            },
			{
              hours: "10",
              minutes: "15",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "32",
              ampm: "PM"
            },
			{
              hours: "5",
              minutes: "32",
              ampm: "PM"
            },
			{
              hours: "6",
              minutes: "32",
              ampm: "PM"
            },
   			{
              hours: "7",
              minutes: "32",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "32",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.394403,
		    longitude: -122.031429
		  }
		}
      ],

  extractDistanceData = function(data) {
    if (data && data.rows && data.rows[0] && data.rows[0].elements && data.rows[0].elements[0]) {
      return data.rows[0].elements[0];
    }
    else {
      return null;
    }
  },

  // DEBUG: not currently called (called from setupStopChooser)
  // Display the distance data from Google Distance Matrix API.
  handleDistanceData = function(data) {
    var distanceData = extractDistanceData(data),
        distElemForNorthShuttle     = shuttleInfoElem.find('#northShuttle .dist .value'),
        distElemForSouthShuttle     = shuttleInfoElem.find('#southShuttle .dist .value'),
        date         = new Date();
    if (!distanceData) { return; }
    if (!distElemForNorthShuttle.length) {
      distElemForNorthShuttle = $('<span>').addClass('value');
      shuttleInfoElem.find('#northShuttle .dist').prepend(distElemForNorthShuttle);
    }
	if (!distElemForSouthShuttle.length) {
      distElemForSouthShuttle = $('<span>').addClass('value');
      shuttleInfoElem.find('#southShuttle .dist').prepend(distElemForSouthShuttle);
    }

    if (distanceData["north"].distance && distanceData["north"].distance.text) {
      distElemForNorthShuttle.text(parseFloat(distanceData["north"].distance.text));
      shuttleInfoElem.find('#northShuttle .dist').css('display', 'inline');
    }

	if (distanceData["south"].distance && distanceData["south"].distance.text) {
      distElemForSouthShuttle.text(parseFloat(distanceData["south"].distance.text));
      shuttleInfoElem.find('#southShuttle .dist').css('display', 'inline');
    }

    shuttleInfoElem.children('.thinking').hide();
    shuttleInfoElem.children('ul').show();
  },

  // DEBUG: not currently called (called from setupStopChooser)
  // Display the distance data from Google Distance Matrix API.
  handleEtaData = function(data) {
    var distanceData = extractDistanceData(data),
        distElemForNorthShuttle     = shuttleInfoElem.find('#northShuttle .dist .value'),
        distElemForSouthShuttle     = shuttleInfoElem.find('#southShuttle .dist .value'),
        etaElemForNorthShuttle      = shuttleInfoElem.find('#northShuttle .eta .value'),
        etaElemForSouthShuttle      = shuttleInfoElem.find('#southShuttle .eta .value'),
        date         = new Date();
    if (!distanceData) { return; }
    if (!etaElemForNorthShuttle.length) {
      etaElemForNorthShuttle = $('<span>').addClass('value');
      shuttleInfoElem.find('#northShuttle .eta').prepend(etaElemForNorthShuttle);
    }
	if (!etaElemForSouthShuttle.length) {
      etaElemForSouthShuttle = $('<span>').addClass('value');
      shuttleInfoElem.find('#southShuttle .eta').prepend(etaElemForSouthShuttle);
    }

    if (date.getHours() > 12 && date.getHours() < 17 && distanceData["north"].distance && distanceData["north"].duration.text) {
      // don't factor in intermediary stop time estimates
      etaElemForNorthShuttle.text(parseInt(distanceData["north"].duration.text, 10));
      shuttleInfoElem.find('#northShuttle .eta').css('display', 'inline');
    }
    if (date.getHours() > 12 && date.getHours() < 17 && distanceData["south"].distance && distanceData["south"].duration.text) {
      // don't factor in intermediary stop time estimates
      etaElemForSouthShuttle.text(parseInt(distanceData["south"].duration.text, 10));
      shuttleInfoElem.find('#southShuttle .eta').css('display', 'inline');
    }
    // DEBUG: NOT SURE IF WE CAN EXTRAPOLATE THIS TO TWO SHUTTLES
    if ((date.getHours() < 12 || date.getHours() >= 17) && data.customEta) {
      // use custom eta time
      etaElemForNorthShuttle.text(data.customEta);
      shuttleInfoElem.find('#northShuttle .eta').css('display', 'inline');
    }
    shuttleInfoElem.children('.thinking').hide();
    shuttleInfoElem.children('ul').show();
  },

  drawMap = function(northLatitude1, northLongitude1, northLatitude2, northLongitude2, southLatitude1, southLongitude1, southLatitude2, southLongitude2, southLatitude3, southLongitude3, attr) {
		
    map = new google.maps.Map(document.getElementById("map_canvas"),{
      zoom: 13,
      center: new google.maps.LatLng(southLatitude1, southLongitude1), // DEBUG: this is kinda arbitrary for now
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false
    });

    northBusMarker1 = new google.maps.Marker({
	  position: new google.maps.LatLng(northLatitude1, northLongitude1),
	  map: map,
	  icon: new google.maps.MarkerImage("img/northbusicon1.png"),
	  title: "Current location of SF Commuter Bus - North 1",
	  animation: google.maps.Animation.DROP
	});
	
	northBusMarker2 = new google.maps.Marker({
	  position: new google.maps.LatLng(northLatitude2, northLongitude2),
	  map: map,
	  icon: new google.maps.MarkerImage("img/northbusicon2.png"),
	  title: "Current location of SF Commuter Bus - North 2",
	  animation: google.maps.Animation.DROP
	});
	
	southBusMarker1 = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude1, southLongitude1),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon1.png"),
      title: "Current location of SF Commuter Bus - South 1",
      animation: google.maps.Animation.DROP
    });
	//addInfoWindow(southBusMarker1, attr.south1.AvgSpeed);

	southBusMarker2 = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude2, southLongitude2),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon2.png"),
      title: "Current location of SF Commuter Bus - South 2",
      animation: google.maps.Animation.DROP
    });
	//addInfoWindow(southBusMarker2, attr.south2.AvgSpeed);
	
	southBusMarker3 = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude3, southLongitude3),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon3.png"),
      title: "Current location of SF Commuter Bus - South 3",
      animation: google.maps.Animation.DROP
    });
	//addInfoWindow(southBusMarker2, attr.south3.AvgSpeed);

    addStops();
    addYou();
  },

  handleTrackingData = function(attr) {
    // Have to proxy Google Distance Matrix API since it doesn't support JSONP
	northShuttleLatLng1 = attr.north1.Latitude + ',' + attr.north1.Longitude;
	northShuttleLatLng2 = attr.north2.Latitude + ',' + attr.north2.Longitude;
	southShuttleLatLng1 = attr.south1.Latitude + ',' + attr.south1.Longitude;
	southShuttleLatLng2 = attr.south2.Latitude + ',' + attr.south2.Longitude;
	southShuttleLatLng3 = attr.south3.Latitude + ',' + attr.south3.Longitude;
	// GK: commented this to remove dependency on server
	//setupStopChooser();
	
    var northLatitude1 = attr.north1.Latitude;
    var northLongitude1 = attr.north1.Longitude;
    var northLatitude2 = attr.north2.Latitude;
    var northLongitude2 = attr.north2.Longitude;
	var southLatitude1 = attr.south1.Latitude;
    var southLongitude1 = attr.south1.Longitude;
	var southLatitude2 = attr.south2.Latitude;
	var southLongitude2 = attr.south2.Longitude;
	var southLatitude3 = attr.south3.Latitude;
	var southLongitude3 = attr.south3.Longitude;

	shuttleInfoElem.find('#northShuttle1 .speed').prepend($('<span>').text("North Bus 1: " + attr.north1.AvgSpeed).addClass('value')).css('display', 'inline');
	shuttleInfoElem.find('#northShuttle2 .speed').prepend($('<span>').text("North Bus 2: " + attr.north2.AvgSpeed).addClass('value')).css('display', 'inline');
	shuttleInfoElem.find('#southShuttle1 .speed').prepend($('<span>').text("South Bus 1: " + attr.south1.AvgSpeed).addClass('value')).css('display', 'inline');	
	shuttleInfoElem.find('#southShuttle2 .speed').prepend($('<span>').text("South Bus 2: " + attr.south2.AvgSpeed).addClass('value')).css('display', 'inline');	
	shuttleInfoElem.find('#southShuttle3 .speed').prepend($('<span>').text("South Bus 3: " + attr.south2.AvgSpeed).addClass('value')).css('display', 'inline');	
	
	shuttleInfoElem.children('.thinking').hide();
    shuttleInfoElem.children('ul').show();
	drawMap(northLatitude1, northLongitude1, northLatitude2, northLongitude2, southLatitude1, southLongitude1, southLatitude2, southLongitude2, southLatitude3, southLongitude3, attr);
  },

  centerMap = function(lat, longitude) {
    map.setCenter(new google.maps.LatLng(lat, longitude));
  },

  addInfoWindow = function(marker, message) {
    var infoWindow = new google.maps.InfoWindow({
      content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open(map, marker);
    });
  },

  getPickupTimes = function(stop) {
	var times = stop.pickupTime

	if(stop.name == "Mountain View" || stop.name == "Sunnyvale") {
		var southBoundTimes = "Drop Off Times: ";
    	var northBoundTimes = "Pick Up Times: ";
	} else {
    	var southBoundTimes = "Pick Up Times: ";
    	var northBoundTimes = "Drop Off Times: ";
	}

    for(var i = 0; i < times.length; i++) {
	  if(times[i].ampm == "AM") {
	    southBoundTimes += times[i].hours + ":" + times[i].minutes + times[i].ampm + " "
	  } else {
		northBoundTimes += times[i].hours + ":" + times[i].minutes + times[i].ampm + " "
	  }
    }
    return southBoundTimes + "<br/>" + northBoundTimes;
  },

  addStops = function() {
    var i,len,currStop;
    for (i=0,len=northStops.length;i<len;++i) {
      currStop=northStops[i];
      if (currStop) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(currStop.location.latitude, currStop.location.longitude),
          icon: new google.maps.MarkerImage("img/northstopicon.png"),
          map: map,
          title: currStop.name
        });
        addInfoWindow(marker, currStop.name + "<br/>"+ currStop.description + "<br/>" + getPickupTimes(currStop));
      }
    }
	for (i=0,len=southStops.length;i<len;++i) {
      currStop=southStops[i];
      if (currStop) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(currStop.location.latitude, currStop.location.longitude),
          icon: new google.maps.MarkerImage("img/southstopicon.png"),
          map: map,
          title: currStop.name
        });
        addInfoWindow(marker, currStop.name + "<br/>"+ currStop.description + "<br/>" + getPickupTimes(currStop));
      }
    }
  },

  addYou = function() {
    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        youmarker = new google.maps.Marker({
          position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: map,
          icon: new google.maps.MarkerImage("img/youicon.png"),
          title: "You're here!"
        });
      });
    } else {
      browserSupportFlag = false;
    }
  },

  // DEBUG: not currently being called (only called by setupStopChooser). Can we fix this up and then use it?
  getClosestStopToYou = function(callback) {
    // returns closest stop (index in the stops array)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.ajax(closestStopUrl + [position.coords.latitude, position.coords.longitude].join(','), {
          dataType: 'jsonp',
          success: function(data) {
            $('#stopChooser').val(data.idx)
                             .trigger('change');
          }
        });
      });
    } else {
      callback(stops.length-1); // default to linkedin campus
    }
  },

  // DEBUG: not currently being called. Can we fix this up and then use it?
  setupStopChooser = function() {
    var stopChooser = $('#stopChooser');

    stopChooser.change(function() {
      var val     = stopChooser.val(),
          idx     = parseInt(val, 10),
          stop    = stops[idx],
          latlng  = [stop.location.latitude, stop.location.longitude].join(','),
          date    = new Date();

      if ((date.getHours() > 12 && date.getHours() < 17) // Mon - Thurs, first run, between noon and 5
          || (date.getHours() == 20 && date.getMinutes() < 45)) { // Mon - Thurs, first run, between 8 and 8:45
        $.ajax(rawDistanceProxyUrl + encodeURIComponent(shuttleLatLng) + '/' + latlng, {
          dataType: 'jsonp',
          success: function(data) {
            handleDistanceData(data);
            handleEtaData(data);
          }
        });
      }
      else {
        // get custom ETA
        $.ajax(distanceProxyUrl + encodeURIComponent(shuttleLatLng) + '/' + idx + '/' + isSouthbound, {
          dataType: 'jsonp',
          success: handleEtaData // TODO: update the eta data only!
        });
        $.ajax(rawDistanceProxyUrl + encodeURIComponent(shuttleLatLng) + '/' + latlng, {
          dataType: 'jsonp',
          success: handleDistanceData
        });
      }
      infoElem.children('ul').hide();
      infoElem.children('.thinking').show();
    });

    getClosestStopToYou();
  },

  setupActions = function() {
    // Setup jump links
    $("#youLoc").click(function() {
      if (youmarker) {
        centerMap(youmarker.position.lat(), youmarker.position.lng());
      }
    });

    $("#northShuttleLoc1").click(function() {
      if (northBusMarker1) {
        centerMap(northBusMarker1.position.lat(), northBusMarker1.position.lng());
      }
    });

    $("#northShuttleLoc2").click(function() {
      if (northBusMarker2) {
        centerMap(northBusMarker2.position.lat(), northBusMarker2.position.lng());
      }
    });

    $("#southShuttleLoc1").click(function() {
      if (southBusMarker1) {
        centerMap(southBusMarker1.position.lat(), southBusMarker1.position.lng());
      }
    });

    $("#southShuttleLoc2").click(function() {
      if (southBusMarker2) {
        centerMap(southBusMarker2.position.lat(), southBusMarker2.position.lng());
      }
    });

    $("#southShuttleLoc3").click(function() {
      if (southBusMarker3) {
        centerMap(southBusMarker3.position.lat(), southBusMarker3.position.lng());
      }
    });

    $("#refresh").click(function() {
      $('#stopChooser').trigger('change');
      updateShuttleLocation();
    });
  },

  setupPolling = function() {
    //Data actually does not refresh any faster than 1 minute intervals
    setTimeout(function() {
      updateShuttleLocation();
    },60000);
  },

  updateShuttleLocation = function() {
    // Update shuttle locations
    $.ajax(networkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        if (data && data.features && data.features.length) {
	      //vehicle label B-484 = north1
		  //vehicle label 13567 = north2
		  //vehicle label B-483 = south1
		  //vehicle label B-125 = south2
		  //vehicle label B-131 = south3
	      var attr = {};
		  attr.north1 = data.features[4].attributes;
		  attr.north2 = data.features[0].attributes;
          attr.south1 = data.features[3].attributes;
		  attr.south2 = data.features[1].attributes;
		  attr.south3 = data.features[2].attributes;

          northShuttleLatLng1 = attr.north1.Latitude + ',' + attr.north1.Longitude;
          northShuttleLatLng2 = attr.north2.Latitude + ',' + attr.north2.Longitude;
		  southShuttleLatLng1 = attr.south1.Latitude + ',' + attr.south1.Longitude;
		  southShuttleLatLng2 = attr.south2.Latitude + ',' + attr.south2.Longitude;
		  southShuttleLatLng3 = attr.south3.Latitude + ',' + attr.south3.Longitude;
          northBusMarker1.setPosition(new google.maps.LatLng(attr.north1.Latitude, attr.north1.Longitude));
          northBusMarker2.setPosition(new google.maps.LatLng(attr.north2.Latitude, attr.north2.Longitude));
          southBusMarker1.setPosition(new google.maps.LatLng(attr.south1.Latitude, attr.south1.Longitude));
          southBusMarker2.setPosition(new google.maps.LatLng(attr.south2.Latitude, attr.south2.Longitude));
          southBusMarker3.setPosition(new google.maps.LatLng(attr.south3.Latitude, attr.south3.Longitude));
        }      
      }
    });
    setupPolling();
  },

  detectDirection = function() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes();
    
    // assume southbound until 4pm
    isSouthbound = hour < 16 ? 1 : 0;
  },

  init = function() {
    detectDirection();
 
    $.ajax(networkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        if (data && data.features && data.features.length) {
	      //vehicle label B-484 = north1
		  //vehicle label 13567 = north2
		  //vehicle label B-483 = south1
		  //vehicle label B-125 = south2
		  //vehicle label B-131 = south3
	      var attr = {};
		  attr.north1 = data.features[4].attributes;
		  attr.north2 = data.features[0].attributes;
          attr.south1 = data.features[3].attributes;
		  attr.south2 = data.features[1].attributes;
		  attr.south3 = data.features[2].attributes;
		
          handleTrackingData(attr);
          $("#touch-init").remove();
          $("html").removeClass("initial-bootstrapping");
          setTimeout(function() {
            window.scrollTo(0,0);
          },0);
        }
      }
    });

    setupActions();
    setupPolling();
  };

  init();
});
