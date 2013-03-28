$(function() {
  // Info for North Shuttle
  var northShuttleInfoElem = $('#northShuttleInfo'),
      northNetworkFleetUrl   = 'http://50.56.166.75/networkfleetcar/getfleetgpsinfoextended?u=linkedin&p=lnkd',
      li_latlng         = '37.423327,-122.071152',
      isSouthbound,
      map,
      northShuttleLatLng,
      browserSupportFlag = false,
      northBusMarker, youmarker,
      northStops = [
        {
          name: "Lombard & Pierce",
          description: "",
          pickupTime: [
            {
              hours: "7",
              minutes: "30",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "31",
              ampm: "PM"
            },
			{
              hours: "10",
              minutes: "03",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.7995,
            longitude: -122.43939
          }
        },
        {
          name: "Van Ness & Union",
          description: "NW corner in front of Silver Platter Deli",
          pickupTime: [
            {
              hours: "7",
              minutes: "36",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "24",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "57",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.79859,
            longitude: -122.424109
          }
        },
        {
          name: "Van Ness & Sacramento",
          description: "NW corner in front of Toyota/Scion Dealership",
          pickupTime: [
            {
              hours: "7",
              minutes: "39",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "20",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "54",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.791388,
            longitude: -122.422425
          }
        },
        {
          name: "Van Ness & Eddy",
          description: "NW corner by BBQ parking lot",
          pickupTime: [
            {
              hours: "7",
              minutes: "42",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "16",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "50",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.783,
            longitude: -122.420717
          }
        },
        {
          name: "8th & Market",
          description: "",
          pickupTime: [
            {
              hours: "7",
              minutes: "46",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "12",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "47",
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
          description: "",
          pickupTime: [
            {
              hours: "7",
              minutes: "52",
              ampm: "AM"
            },
   			{
              hours: "7",
              minutes: "05",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "43",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.7758,
            longitude: -122.402603
          }
        },
        {
          name: "Mountain View",
          description: "",
          pickupTime: [
            {
              hours: "8",
              minutes: "50",
              ampm: "AM"
            },
   			{
              hours: "5",
              minutes: "58",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "47",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.4233,
            longitude: -122.07334
          }
        },
        {
          name: "Sunnyvale",
          description: "",
          pickupTime: [
            {
              hours: "9",
              minutes: "02",
              ampm: "AM"
            },
   			{
              hours: "5",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "36",
              ampm: "PM"
            }
          ],
          location: {
            latitude: 37.392242,
            longitude: -122.031761
          }
        }
      ],	

  // Info for South Shuttle
  southShuttleInfoElem  = $('#southShuttleInfo'),
      southNetworkFleetUrl   = 'http://50.56.166.75/networkfleetcar/getfleetgpsinfoextended?u=linkedin&p=lnkd',
      southShuttleLatLng,
	  southBusMarker,
	  southStops = [
	    {
		  name: "Fillmore & California",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "25",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "37",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.788952,
		    longitude: -122.433942
		  }
		},
		{
		  name: "Fillmore & Turk/GG",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "28",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "28",
              ampm: "PM"
            },
			{
              hours: "9",
              minutes: "04",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.780059,
		    longitude: -122.432139
		  }
		},
		{
		  name: "Divisadero & Haight",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "34",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "21",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "58",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.771346,
		    longitude: -122.437208
		  }
		},
		{
		  name: "Castro & Market",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "38",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "17",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "54",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.76297,
		    longitude: -122.435009
		  }
		},
		{
		  name: "24th & Noe",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "44",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "10",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "49",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.751519,
		    longitude: -122.431994
		  }
		},
	    {
		  name: "24th & Mission",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "48",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "05",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "44",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.752313,
		    longitude: -122.418369
		  }
		},
		{
		  name: "Cesar Chavez & Folsom",
		  description: "",
		  pickupTime: [
            {
              hours: "7",
              minutes: "52",
              ampm: "AM"
            },
   			{
              hours: "6",
              minutes: "01",
              ampm: "PM"
            },
			{
              hours: "8",
              minutes: "41",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.748083,
		    longitude: -122.413808
		  }
		},
		{
		  name: "Mountain View",
		  description: "",
		  pickupTime: [
            {
              hours: "8",
              minutes: "47",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "58",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "49",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.423547,
		    longitude: -122.073146
		  }
		},
		{
		  name: "Sunnyvale",
		  description: "",
		  pickupTime: [
            {
              hours: "8",
              minutes: "59",
              ampm: "AM"
            },
   			{
              hours: "4",
              minutes: "45",
              ampm: "PM"
            },
			{
              hours: "7",
              minutes: "37",
              ampm: "PM"
            }
          ],
		  location: {
		    latitude: 37.392865,
		    longitude: -122.031496
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
        distElemForNorthShuttle     = northShuttleInfoElem.find('.dist .value'),
        distElemForSouthShuttle     = southShuttleInfoElem.find('.dist .value'),
        date         = new Date();
    if (!distanceData) { return; }
    if (!distElemForNorthShuttle.length) {
      distElemForNorthShuttle = $('<span>').addClass('value');
      northShuttleInfoElem.find('.dist').prepend(distElemForNorthShuttle);
    }
	if (!distElemForSouthShuttle.length) {
      distElemForSouthShuttle = $('<span>').addClass('value');
      southShuttleInfoElem.find('.dist').prepend(distElemForSouthShuttle);
    }

    if (distanceData["north"].distance && distanceData["north"].distance.text) {
      distElemForNorthShuttle.text(parseFloat(distanceData["north"].distance.text));
      northShuttleInfoElem.find('.dist').css('display', 'inline');
    }

	if (distanceData["south"].distance && distanceData["south"].distance.text) {
      distElemForSouthShuttle.text(parseFloat(distanceData["south"].distance.text));
      southShuttleInfoElem.find('.dist').css('display', 'inline');
    }

    northShuttleInfoElem.children('.thinking').hide();
    southShuttleInfoElem.children('.thinking').hide();
    northShuttleInfoElem.children('ul').show();
    southShuttleInfoElem.children('ul').show();
  },

  // DEBUG: not currently called (called from setupStopChooser)
  // Display the distance data from Google Distance Matrix API.
  handleEtaData = function(data) {
    var distanceData = extractDistanceData(data),
        distElemForNorthShuttle     = northShuttleInfoElem.find('.dist .value'),
        distElemForSouthShuttle     = southShuttleInfoElem.find('.dist .value'),
        etaElemForNorthShuttle      = northShuttleInfoElem.find('.eta .value'),
        etaElemForSouthShuttle      = southShuttleInfoElem.find('.eta .value'),
        date         = new Date();
    if (!distanceData) { return; }
    if (!etaElemForNorthShuttle.length) {
      etaElemForNorthShuttle = $('<span>').addClass('value');
      northShuttleInfoElem.find('.eta').prepend(etaElemForNorthShuttle);
    }
	if (!etaElemForSouthShuttle.length) {
      etaElemForSouthShuttle = $('<span>').addClass('value');
      southShuttleInfoElem.find('.eta').prepend(etaElemForSouthShuttle);
    }

    if (date.getHours() > 12 && date.getHours() < 17 && distanceData["north"].distance && distanceData["north"].duration.text) {
      // don't factor in intermediary stop time estimates
      etaElemForNorthShuttle.text(parseInt(distanceData["north"].duration.text, 10));
      northShuttleInfoElem.find('.eta').css('display', 'inline');
    }
    if (date.getHours() > 12 && date.getHours() < 17 && distanceData["south"].distance && distanceData["south"].duration.text) {
      // don't factor in intermediary stop time estimates
      etaElemForSouthShuttle.text(parseInt(distanceData["south"].duration.text, 10));
      southShuttleInfoElem.find('.eta').css('display', 'inline');
    }
    // DEBUG: NOT SURE IF WE CAN EXTRAPOLATE THIS TO TWO SHUTTLES
    if ((date.getHours() < 12 || date.getHours() >= 17) && data.customEta) {
      // use custom eta time
      etaElemForNorthShuttle.text(data.customEta);
      northShuttleInfoElem.find('.eta').css('display', 'inline');
    }
    northShuttleInfoElem.children('.thinking').hide();
	southShuttleInfoElem.children('.thinking').hide();
    northShuttleInfoElem.children('ul').show();
    southShuttleInfoElem.children('ul').show();
  },

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
	  title: "Current Location of North Shuttle",
	  animation: google.maps.Animation.DROP
	});
	
	southBusMarker = new google.maps.Marker({
      position: new google.maps.LatLng(southLatitude, southLongitude),
      map: map,
      icon: new google.maps.MarkerImage("img/southbusicon.png"),
      title: "Current Location of South Shuttle",
      animation: google.maps.Animation.DROP
    });	

    addStops();
    addYou();
  },

  handleTrackingData = function(attr) {
    // Have to proxy Google Distance Matrix API since it doesn't support JSONP
    // var i, len; // DEBUG: do we need this?
	northShuttleLatLng = attr.north.Latitude + ',' + attr.north.Longitude;
	southShuttleLatLng = attr.south.Latitude + ',' + attr.south.Longitude;
	// GK: commented this to remove dependency on server
	//setupStopChooser();
	
    var northLatitude = attr.north.Latitude;
    var northLongitude = attr.north.Longitude;
	var southLatitude = attr.south.Latitude;
    var southLongitude = attr.south.Longitude;

	northShuttleInfoElem.find('.speed').prepend($('<span>').text("North SF shuttle speed: " + attr.north.AvgSpeed).addClass('value')).css('display', 'inline');
	southShuttleInfoElem.find('.speed').prepend($('<span>').text("South SF shuttle speed: " + attr.south.AvgSpeed).addClass('value')).css('display', 'inline');	
	
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
    var times = stop.pickupTime;
    var message = "";
    for(var i = 0; i < times.length; i++) {
	  message += times[i].hours + ":" + times[i].minutes + times[i].ampm + " "
    }
    return message;
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
        addInfoWindow(marker, currStop.name + "<br/>Times: " + getPickupTimes(currStop));
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
        addInfoWindow(marker, currStop.name + "<br/>Times: " + getPickupTimes(currStop));
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
    var attr = {};
    $.ajax(northNetworkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        if (data && data.features && data.features.length) {
          attr.north = data.features[0].attributes;
          northShuttleLatLng = attr.north.Latitude + ',' + attr.north.Longitude;
          northBusMarker.setPosition(new google.maps.LatLng(attr.north.Latitude, attr.north.Longitude));
        }      
      }
    });
	
    $.ajax(southNetworkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        if (data && data.features && data.features.length) {
          attr.south = data.features[0].attributes;
          southShuttleLatLng = attr.south.Latitude + ',' + attr.south.Longitude;
          southBusMarker.setPosition(new google.maps.LatLng(attr.south.Latitude, attr.south.Longitude));
        }
      }
    });
    setupPolling();
  },

  detectDirection = function() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes();
    
    // assume southbound until 5pm
    isSouthbound = hour < 17 ? 1 : 0;
  },

  init = function() {
    detectDirection();
 
    var attr = {};
    $.ajax(northNetworkFleetUrl, {
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data, textStatus) {
        //var obj, latitude, longitude, i, len, field, url; // DEBUG: what is this for?
        if (data && data.features && data.features.length) {
          attr.north = data.features[0].attributes;
          initSouth();
        }
      }
    });

	var initSouth = function() {	
	  $.ajax(southNetworkFleetUrl, {
        crossDomain: true,
        dataType: 'jsonp',
        success: function(data, textStatus) {
          //var obj, latitude, longitude, i, len, field, url; // DEBUG: what is this for?
          if (data && data.features && data.features.length) {
            attr.south = data.features[0].attributes;
            initMap();
          }
        }
      });
	};

    var initMap = function() {
	  if (attr.north && attr.south) {
        handleTrackingData(attr);
        $("#touch-init").remove();
        $("html").removeClass("initial-bootstrapping");
        setTimeout(function() {
          window.scrollTo(0,0);
        },0);
      }
    };

    setupActions();
    setupPolling();
  };

  init();
});
