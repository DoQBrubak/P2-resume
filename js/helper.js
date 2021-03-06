 /* The <body><header> is populated by a grid comprising three "bio-box"es, each 
 * of which is a flex-box. Wide screens display them beside one another. At 800px 
 * and below the contact box is pushed under the other two. At 500px and below 
 * the contact box and skill <select> box disappear.
 */
var HTMLbioGrid = '<div class="bio-box-1 flex-box"></div>'+
                  '<div class="bio-box-2 flex-box"></div>'+
                  '<div class="bio-box-3 flex-box"></div>';
// The contents of bio-box-1
var HTMLbioPic = '<img src="%data-img%" class="bio-pic">';
// The contents of bio-box-2
var HTMLheaderName = '<h1 id="name" class="color-1">%data-name%</h1>';
var HTMLwelcomeMsg = '<p class="bio-msg color-2">%data-msg% ';
var HTMLroleSelect = '<select id="skillSelector" onchange=></select></p>';
var HTMLskillOption = '<option value="%data-skill%">%data-name%</option>';
// The contents of bio-box-3
var HTMLcontactList = '<ul id="contactList"></ul>'
var HTMLcontactEntry = '<li><span class="color-2">%data-type%</span>'+
                       '<span class="color-1 text-bold">%data-value%</span></li>';







/* The WORK items don't depart too significantly from those forked from the Udacity
 * resume repo.
 */ 
var HTMLworkHeading ='<ul id="workList"></ul>'
var HTMLworkStart = '<li class="work-entry %data-worktype%"></li>';
var HTMLworkEmployer = '<h4><a href="%data-url%" target="_blank">%data-job%</a>';
var HTMLworkTitle = ' -- %data-title%</h4>';
var HTMLworkLocation = '<div class="detail-text detail-text-2">%data-loc%</div>';
var HTMLworkDates = '<div class="detail-text">%data-dates%</div>';
var HTMLworkDesc = '<p>%data-desc%</p>';









 /* The PROJECTS are displayed in a jQuery accordion @ min-width:500px and above.
  * At lower widths the projects are displayed without screenshots in the 
  * projSimple list item.
  * For accordion implemenation reference: http://jqueryui.com/accordion/#default
  */
var HTMLprojectAccordion = '<ul id="accordion" class="ui-accordion ui-widget ui-helper-reset" role="tablist"></ul>';
var HTMLprojectSimple = '<ul id="projSimple"></ul>';

var HTMLprojectStart = '<li class="project-entry">%data%</li>';
var HTMLprojectTitle = '<h4><a href="%data-url%" target="_blank">%data-name%</a></h4>';
var HTMLprojectDesc = '<div class="detail-text"><p>%data-desc%</p><div class="pic-box flex-box"></div></div>';
var HTMLprojectImage = '<a href="%data-url%" target="_blank"><img src="%data-img%" class="proj-pic" alt="A project screenshot"></a>';







/* The SCHOOL and ONLINE items don't depart too radically from those forked from the 
 * Udacity resume repo.
 */
var HTMLschoolHeading = '<h3>Schools Attended</h3><ul id="schoolList"></ul>'
var HTMLschoolStart = '<li class="education-entry"></li>';
var HTMLschoolName = '<h4><a href="%data-url%" target="_blank">%data-name%</a>';
var HTMLschoolDegreeMajor = ' -- %data-degree% -- <em>%data-major% major</em></h4>';
var HTMLschoolLocation = '<div class="detail-text detail-text-2">%data-loc%</div>';
var HTMLschoolDates = '<div class="detail-text">Completed -- %data-date%</div>';


var HTMLonlineHeading = '<h3>Online Classes</h3><ul id="onlineList"></ul>'
var HTMLonlineStart = '<li class="education-entry"></li>';
var HTMLonlineTitle = '<h4><a href="%data-url%" target="_blank">%data-title%</a>';
var HTMLonlineSchool = ' -- %data-school%</h4>';
var HTMLonlineDates = '<div class="detail-text">Completed -- %data-date%</div>';








 /* This div is necessary for the interactive Google map. Yay APIs!
  */
var HTMLmapDiv = '<div id="map"></div>';









/* The SOCIAL icons - though displayed in the page <footer> - are actually 
 * derived from the "bio" object, whose other content and functions all deal 
 * with <header> content.
 */
var HTMLsocialHeading = '<ul id="footerSocial" class="flex-box"></ul>'
var HTMLsocialIcon = '<li><a href="%data-url%"><img class="social-token" src="./images/social/%data-type%.png"></a></li>'











/* This function collects an array of user's click locations and displays them to console.
 * Why, you ask? It saves Big Brother a little bit of effort.
 */
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push({x: x, y: y});
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY)  // see jQ docs for loc object and events
});










/* This function helps the accordion do what it does. I'm not entirely sure how. 
 * TODO: Figure out how this does what it does.
 * TODO: Figure out what it does.
 */
$(function() {
  var icons = {header: "ui-icon-circle-arrow-e", activeHeader: "ui-icon-circle-arrow-s"};
  $('#accordion').accordion({icons: icons})
});
















var reDisplayJobs = function() {
  var current = "."+bio.skills[$('#skillSelector').prop('value')];
  if (current == ".work-all"){
    $('.work-entry').css({"display":"block"});
    $('.work-web').css({"display":"none"});
  } else {
    $('.work-entry').css({"display":"none"});
    $(current).css({"display":"block"});
  }
};

















// Generate a custom Google Map. See the API documentation for more details:
// https://developers.google.com/maps/documentation/javascript/reference

var map;    // declare a global map variable

function initializeMap() { // this will be called on window.load event. see end of helper.js
  var locations; // not to be confused with locationFinder.locations  
  var mapOptions = {
      disableDefaultUI: true,
    };
  // Declare and assign a Google Map JS object to variable map
  map = new google.maps.Map(document.querySelector('#map'), mapOptions)


  // locationFinder() returns an array of every location from the bio, education, and work JSONs
  function locationFinder() {
    // initialize an empty array
    var locations = [];
    // add bio.location property to the array
    locations.push(bio.contacts.location);
    // iterate and appends school locations to locations array
    for (var i=0; i < education.schools.length; i++) {
      locations.push(education.schools[i].location);}
    // iterate and appends work locations to locations array
    for (var i=0; i < work.jobs.length; i++) {
      locations.push(work.jobs[i].location);}
    return locations
  }


/*
createMapMarker(placeData) reads Google Places search results to create map pins.
placeData is the object returned from search results containing information
about a single location.
*/
  function createMapMarker(placeData) {
    // Save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from place service
    var lon = placeData.geometry.location.lng();  // longitude from place service
    var name = placeData.formatted_address;   // name from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window    

    // Define a custom marker image. Refer:
    // https://developers.google.com/maps/documentation/javascript/examples/icon-complex
    var image = {
      url: "images/pushpin-med.png", // http://www.iconsdb.com/orange-icons/sail-boat-icon.html
      size: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 32)
    };

    // Define the polygon coordinates on the custom marker image that are clickable
    var shape = {
      coords: [8,1,24,1,24,31,8,31],
      type: 'poly'
    };

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      icon: image,
      shape: shape
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker)
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  // callback(results, status) checks that results were returned for a location.
  // If so it creates a corresponding marker.
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

// pinPoster(locations) requests Google place searches for each location from locationFinder()
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
      // Search Google Maps API for location data and runs callback() on the results
      service.textSearch(request, callback);
    }
  }
  // Set the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  // Assign locationFinder results to locations array
  locations = locationFinder();
  // Call pinPoster, with locations array as argument
  pinPoster(locations);
}

// Call initializeMap() function once the page has loaded
// window.addEventListener('load', initializeMap);  // The Udacity way
google.maps.event.addDomListener(window, 'load', initializeMap);  // Google documentation way


// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {map.fitBounds(mapBounds)});



