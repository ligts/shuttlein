$(function() {
  // Info for North Shuttle
  var shuttleInfoElem = $('#shuttleInfo'),
      networkFleetUrl   = 'http://50.56.166.75/networkfleetcar/getfleetgpsinfoextended?u=linkedin&p=lnkd',
      li_latlng         = '37.423327,-122.071152',
      isSouthbound,
      map,
      northShuttleLatLng,
      browserSupportFlag = false,
      northBusMarker, youmarker,
      northStops = [
        {
          name: "Lombard & Pierce",
          description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "35",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "35",
                ampm: "PM"
              },
			  {
                hours: "10",
                minutes: "10",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "7",
                minutes: "35",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "55",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "30",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.799295,
            longitude: -122.439421
          }
        },
        {
          name: "Van Ness & Union",
          description: "Pick-up at NW corner",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "41",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "27",
                ampm: "PM"
              },
			  {
                hours: "10",
                minutes: "04",
                ampm: "PM"
              }
	        ],
	        fri: [
		      {
                hours: "7",
                minutes: "41",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "47",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "24",
                ampm: "PM"
              }
	        ]
	      },
          location: {
            latitude: 37.79859,
            longitude: -122.424109
          }
        },
        {
          name: "Van Ness & Sacramento",
          description: "Pick-up at NW corner",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "45",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "23",
                ampm: "PM"
              },
			  {
                hours: "10",
                minutes: "00",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "7",
                minutes: "45",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "43",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "20",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.791353,
            longitude: -122.422714
          }
        },
        {
          name: "Van Ness & Eddy",
          description: "Pick-up at NW coner of Van Ness & Larch. Drop-off at Van Ness & Eddy.",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "49",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "19",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "57",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "7",
                minutes: "49",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "39",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "17",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.782495,
            longitude: -122.420887
          }
        },
        {
          name: "8th & Market",
          description: "Pick-up at SW corner of 8th & Market. Drop-off at 9th & Market.",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "53",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "14",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "53",
                ampm: "PM"
               }
	        ],
	        fri: [
		      {
                hours: "7",
                minutes: "53",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "34",
                ampm: "PM"
              },
	          {
                hours: "9",
                minutes: "13",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.7785,
            longitude: -122.41473
          }
        },
        {
          name: "6th & Bryant",
          description: "",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "59",
                ampm: "AM"
              },
   			  {
                hours: "7",
                minutes: "07",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "48",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "7",
                minutes: "59",
                ampm: "AM"
              },
 			  {
                hours: "6",
                minutes: "27",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "08",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.776061,
            longitude: -122.402686
          }
        },
        {
          name: "Mountain View",
          description: "Pick-up/drop-off in front of 2025",
          pickupTime: {
	        monThurs: [
			  {
                hours: "9",
                minutes: "00",
                ampm: "AM"
              },
   			  {
                hours: "5",
                minutes: "59",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "51",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "9",
                minutes: "00",
                ampm: "AM"
              },
 			  {
                hours: "5",
                minutes: "19",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "11",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.4233,
            longitude: -122.07334
          }
        },
        {
          name: "Sunnyvale",
          description: "Pick-up/drop-off in front of buildings A and B",
          pickupTime: {
	        monThurs: [
			  {
                hours: "9",
                minutes: "13",
                ampm: "AM"
              },
   			  {
                hours: "5",
                minutes: "45",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "40",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "9",
                minutes: "13",
                ampm: "AM"
              },
 			  {
                hours: "5",
                minutes: "05",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "00",
                ampm: "PM"
              }
	        ]
          },
          location: {
            latitude: 37.392242,
            longitude: -122.031761
          }
        }
      ],	

  // Info for South Shuttle
      southShuttleLatLng,
	  southBusMarker,
	  southStops = [
	    {
		  name: "Fillmore & California",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
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
	        fri: [
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
                hours: "6",
                minutes: "39",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "19",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.788797,
		    longitude: -122.433925
		  }
		},
		{
		  name: "Fillmore & Eddy",
		  description: "Pick-up at NW corner of Fillmore & Eddy. Drop-off at Fillmore & Turk/Golden Gate.",
          pickupTime: {
	        monThurs: [
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
	        fri: [
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
                hours: "6",
                minutes: "34",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "16",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.781471,
		    longitude: -122.432432
		  }
		},
		{
		  name: "Divisadero & Grove",
	      description: "Pick-up at NW corner",
          pickupTime: {
	        monThurs: [
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
                minutes: "55",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "55",
                ampm: "PM"
              }
	        ],
	        fri: [
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
                hours: "6",
                minutes: "27",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "09",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.776002,
			longitude: -122.438179
	      }
		},
		{
		  name: "Divisadero & Haight",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
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
                minutes: "54",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "54",
                ampm: "PM"
              }
	        ],
	        fri: [
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
                hours: "6",
                minutes: "24",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "07",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.771214,
		    longitude: -122.437187
		  }
		},
		{
		  name: "Castro & Market",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
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
                minutes: "50",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "50",
                ampm: "PM"
              }
	        ],
	        fri: [
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
                hours: "6",
                minutes: "20",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "04",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.762127,
		    longitude: -122.435167
		  }
		},
		{
		  name: "24th & Noe",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
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
	        fri: [
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
                hours: "6",
                minutes: "13",
                ampm: "PM"
              },
		      {
                hours: "8",
                minutes: "58",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.751386,
		    longitude: -122.431978
		  }
		},
	    {
		  name: "24th & Mission",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
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
	        fri: [
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
                minutes: "07",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "53",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.752783,
		    longitude: -122.418406
		  }
		},
		{
		  name: "Cesar Chavez & Folsom",
		  description: "Pick-up at SW corner",
          pickupTime: {
	        monThurs: [
			  {
                hours: "7",
                minutes: "18",
                ampm: "AM"
              },
		      {
                hours: "7",
                minutes: "48",
                ampm: "AM"
              },
   			  {
                hours: "5",
                minutes: "49",
                ampm: "PM"
              },
			  {
                hours: "6",
                minutes: "49",
                ampm: "PM"
              },
   			  {
                hours: "8",
                minutes: "36",
                ampm: "PM"
              },
			  {
                hours: "9",
                minutes: "36",
                ampm: "PM"
              }
	        ],
	        fri: [
			  {
                hours: "7",
                minutes: "18",
                ampm: "AM"
              },
			  {
                hours: "7",
                minutes: "48",
                ampm: "AM"
              },
			  {
                hours: "6",
                minutes: "03",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "50",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.748146,
		    longitude: -122.413855
		  }
		},
		{
		  name: "Mountain View",
		  description: "Pick-up/drop-off in front of 2025",
          pickupTime: {
	        monThurs: [
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
                hours: "7",
                minutes: "42",
                ampm: "PM"
              },
			  {
                hours: "8",
                minutes: "42",
                ampm: "PM"
              }
	        ],
	        fri: [
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
                hours: "4",
                minutes: "59",
                ampm: "PM"
              },
			  {
                hours: "7",
                minutes: "56",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.423547,
		    longitude: -122.073146
		  }
		},
		{
		  name: "Sunnyvale",
		  description: "Pick-up/drop-off in front of buildings A and B",
          pickupTime: {
	        monThurs: [
			  {
                hours: "8",
                minutes: "27",
                ampm: "AM"
              },
		      {
                hours: "8",
                minutes: "57",
                ampm: "AM"
              },
   			  {
                hours: "4",
                minutes: "31",
                ampm: "PM"
              },
			  {
                hours: "5",
                minutes: "31",
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
	        fri: [
			  {
                hours: "8",
                minutes: "27",
                ampm: "AM"
              },
			  {
                hours: "8",
                minutes: "57",
                ampm: "AM"
              },
			  {
                hours: "4",
                minutes: "45",
                ampm: "PM"
              },
			  {
                hours: "7",
                minutes: "44",
                ampm: "PM"
              }
	        ]
          },
		  location: {
		    latitude: 37.392865,
		    longitude: -122.031496
		  }
		}
      ],
      southShuttleLatLng2,
	  southBusMarker2,

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

  //drawMap = function(northLatitude, northLongitude, southLatitude, southLongitude, southLatitude2, southLongitude2) {
	drawMap = function(northLatitude, northLongitude, southLatitude, southLongitude) {
    map = new google.maps.Map(document.getElementById("map_canvas"),{
      zoom: 13,
      center: new google.maps.LatLng(northLatitude, northLongitude), // DEBUG: center around both instead of hardcoding to center around North Shuttle?
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false
    });

    northBusMarker = new google.maps.Marker({
	  position: new google.maps.LatLng(northLatitude, northLongitude),
	  map: map,
	  icon: new google.maps.MarkerImage("img/northbusicon.png"),
	  title: "Current location of SF Commuter Bus - North",
	  animation: google.maps.Animation.DROP
	});
	
	southBusMarker = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude, southLongitude),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon.png"),
      title: "Current location of SF Commuter Bus - South 1",
      animation: google.maps.Animation.DROP
    });	

	/*southBusMarker2 = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude2, southLongitude2),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon.png"),
      title: "Current location of SF Commuter Bus - South 2",
      animation: google.maps.Animation.DROP
    });*/ // TODO

    addStops();
    addYou();
  },

  handleTrackingData = function(attr) {
    // Have to proxy Google Distance Matrix API since it doesn't support JSONP
    // var i, len; // DEBUG: do we need this?
	northShuttleLatLng = attr.north.Latitude + ',' + attr.north.Longitude;
	southShuttleLatLng = attr.south.Latitude + ',' + attr.south.Longitude;
	//southShuttleLatLng2 = attr.south2.Latitude + ',' + attr.south2.Longitude; // TODO
	// GK: commented this to remove dependency on server
	//setupStopChooser();
	
    var northLatitude = attr.north.Latitude;
    var northLongitude = attr.north.Longitude;
	var southLatitude = attr.south.Latitude;
    var southLongitude = attr.south.Longitude;
	//var southLatitude2 = attr.south2.Latitude; // TODO
	//var southLongitude2 = attr.south2.Longitude; // TODO

	shuttleInfoElem.find('#northShuttle1 .speed').prepend($('<span>').text("North Bus: " + attr.north.AvgSpeed).addClass('value')).css('display', 'inline');
	shuttleInfoElem.find('#southShuttle1 .speed').prepend($('<span>').text("South Bus: " + attr.south.AvgSpeed).addClass('value')).css('display', 'inline');	
	//shuttleInfoElem.find('#southShuttle2 .speed').prepend($('<span>').text("South Bus 2: " + attr.south2.AvgSpeed).addClass('value')).css('display', 'inline');	 // TODO
	
	shuttleInfoElem.children('.thinking').hide();
    shuttleInfoElem.children('ul').show();
	//drawMap(northLatitude, northLongitude, southLatitude, southLongitude, southLatitude2, southLongitude2);
	drawMap(northLatitude, northLongitude, southLatitude, southLongitude);
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
	var today = new Date();
	var dayOfWeek = today.getDay();
	var times;
	if(dayOfWeek == 5) {
		times = stop.pickupTime.fri;
	} else {
		times = stop.pickupTime.monThurs;
	}

    var southBoundTimes = "Southbound Times: ";
    var northBoundTimes = "Northbound Times: ";
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
        addInfoWindow(marker, currStop.name + "<br/>" + getPickupTimes(currStop));
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

    $("#northShuttleLoc").click(function() {
      if (northBusMarker) {
        centerMap(northBusMarker.position.lat(), northBusMarker.position.lng());
      }
    });

    $("#southShuttleLoc").click(function() {
      if (southBusMarker) {
        centerMap(southBusMarker.position.lat(), southBusMarker.position.lng());
      }
    });

    /*$("#southShuttleLoc2").click(function() {
      if (southBusMarker2) {
        centerMap(southBusMarker2.position.lat(), southBusMarker2.position.lng());
      }
    });*/ // TODO

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
    // Update both shuttle locations
    $.ajax(networkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        if (data && data.features && data.features.length) {
	      var attr = {};
          attr.south = data.features[0].attributes;
          attr.north = data.features[1].attributes;
          //attr.south2 = data.features[0].attributes; // TODO: replace with new shuttle info from API
          northShuttleLatLng = attr.north.Latitude + ',' + attr.north.Longitude;
		  southShuttleLatLng = attr.south.Latitude + ',' + attr.south.Longitude;
		  //southShuttleLatLng2 = attr.south2.Latitude + ',' + attr.south2.Longitude; // TODO
          northBusMarker.setPosition(new google.maps.LatLng(attr.north.Latitude, attr.north.Longitude));
          southBusMarker.setPosition(new google.maps.LatLng(attr.south.Latitude, attr.south.Longitude));
          //southBusMarker2.setPosition(new google.maps.LatLng(attr.south2.Latitude, attr.south2.Longitude)); // TODO
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
        //var obj, latitude, longitude, i, len, field, url; // DEBUG: what is this for?
        if (data && data.features && data.features.length) {
	      var attr = {};
          attr.south = data.features[0].attributes;
		  attr.north = data.features[1].attributes;
		  //attr.south2 = data.features[0].attributes; // TODO
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
