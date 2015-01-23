var HTMLbioGrid = '<div class="bio-col-left flex-box"></div><div class="bio-col-center flex-box"></div><div class="bio-col-right flex-box"><ul id="contactList"></ul></div>'



var HTMLbioPic = '<img src="%data-img%" class="bio-pic">';



var HTMLheaderName = '<h1 id="name" class="color-1">%data-name%</h1>';
var HTMLwelcomeMsg = '<p class="bio-msg color-3">%data-msg% ';
var HTMLroleSelect = '<select id="skillSelector"></select></p>'
var HTMLskillOption = '<option value="%data-skill%">%data-name%</option>'


var HTMLcontactEntry = '<li><span class="color-2">%data-type%</span><span class="color-1 text-bold">%data-value%</span></li>';
var HTMLsocialIcon = '<li><a href="%data-url%"><img src="./images/icons/%data-type%.png"></a></li>'








var HTMLworkHeading ='<ul id="workList"></ul>'

var HTMLworkStart = '<li class="work-entry"></li>';
var HTMLworkEmployer = '<h4><a href="%data-url%" target="_blank">%data-job%</a>';
var HTMLworkTitle = ' -- %data-title%</h4>';
var HTMLworkLocation = '<div class="detail-text">%data-loc%</div>';
var HTMLworkDates = '<div class="detail-text">%data-dates%</div>';
var HTMLworkDesc = '<p><br>%data-desc%</p>';







var HTMLprojectHeading = '<ul id="projList"></ul>';

var HTMLprojectStart = '<li class="project-entry"></li>';
var HTMLprojectTitle = '<h4><a href="data-url">%data-name%</a></h4>';
var HTMLprojectDates = '<div class="detail-text">%data-date%</div>';
var HTMLprojectDesc = '<p><br>%data-desc%</p><div class="pic-box flex-box"></div>';
var HTMLprojectImage = '<img src="%data-img%" class="proj-pic" alt="A project screenshot">';






var HTMLschoolHeading = '<h3>Schools Attended</h3><ul id="schoolList"></ul>'

var HTMLschoolStart = '<li class="education-entry"></li>';
var HTMLschoolName = '<h4><a href="%data-url%" target="_blank">%data-name%</a>';
var HTMLschoolDegreeMajor = ' -- %data-degree% -- <em>%data-major% major</em></h4>';
var HTMLschoolLocation = '<div class="detail-text">%data-loc%</div>';
var HTMLschoolDates = '<div class="detail-text">Completed -- %data-date%</div>';







var HTMLonlineHeading = '<h3>Online Classes</h3><ul id="onlineList"></ul>'

var HTMLonlineStart = '<li class="education-entry"></li>';
var HTMLonlineTitle = '<h4><a href="%data-url%" target="_blank">%data-title%</a>';
var HTMLonlineSchool = ' -- %data-school%</h4>';
var HTMLonlineDates = '<div class="detail-text">Completed -- %data-date%</div>';



var HTMLmapDiv = '<div id="map"></div>';


clickLocations = [];

function logClicks(x,y) {
  clickLocations.push({x: x, y: y});
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY)  // see jQ docs for loc object and events
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

function initializeMap() { // will be called on window.load event. see end of helper.js
    var locations;
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 5
    };

  // Make a Google Map JS object
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  
  function locationFinder() {
    // initialize an empty array
    var locations = [];
    // add the bio 'location' property to the  array
    locations.push(bio.contacts.location);

    // iterates and appends school locations
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }
    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    return locations;
  }}
  */

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  /*function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  
  locations = locationFinder();
  // create pins based on the locations array
  pinPoster(locations);
}
*/






// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {map.fitBounds(mapBounds)});


