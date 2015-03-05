// Display everything from the JSON "bio" object
bio.display = function() {
	// Establish the header structure.
	$('header').prepend(HTMLbioGrid);// Establish the header structure.
	// Insert an image in the header left column. It will shrink/disappear responsively.
	var formattedBioPic = HTMLbioPic.replace("%data-img%", this.biopic);
	$('.bio-col-left').append(formattedBioPic)
	// Insert the main column name and the (empty) skill selector.
	var formattedName = HTMLheaderName.replace("%data-name%", this.name);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data-msg%", this.welcomeMessage);
	var formattedHeaderContent = formattedName + formattedWelcomeMsg + HTMLroleSelect;
	$('.bio-col-center').append(formattedHeaderContent);
	// Populate the skill selector.
	this.popSkill();
	// Insert the contact details via an encapsulated function
	this.contacts.display();
	this.social.display();
};






bio.contacts.display = function() {
	// I referenced StackOverflow regarding finding object length: http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array
	var keys = Object.keys(this);
	for (var i = 0; i <  keys.length - 1; i++) {
		var entryType = keys[i];
		var entryValue = this[keys[i]];
		formattedEntry = HTMLcontactEntry.replace("%data-type%", entryType + ": ").replace("%data-value%", entryValue);
		$('#contactList').append(formattedEntry);
}};


/* bio.skills is derived here from bio.skillCodes rather than included originally in the JSON
	because the latter maps class codes necessary for the skill <select> interactivity */

bio.skills = Object.keys(bio.skillCodes);  //TODO - check whether this line is unnecessary
bio.popSkill = function() {
	for (var i = 0; i < this.skills.length; i++) {
		formattedSkillOption = HTMLskillOption.replace("%data-skill%", this.skills[i]).replace("%data-name%", this.skills[i]);
		$('#skillSelector').append(formattedSkillOption);
}};

bio.social.display = function() {
	var keys = Object.keys(this);
	$('footer').append(HTMLsocialHeading);
	for (var i = 0; i <  keys.length - 1; i++) {
		var socialIconValue = keys[i];
		var socialIconURL = this[keys[i]];
		formattedSocialIcon = HTMLsocialIcon.replace("%data-type%", socialIconValue).replace("%data-url%", socialIconURL);
		$('#footerSocial').append(formattedSocialIcon);
}};






work.jobs.display = function() {
	if (this.length > 0) {
		for (var i = 0; i < this.length; i ++) {
    	$('#workSection').append(HTMLworkStart);
    //For some reason for (i in this) {
    //displays an extra, "undefined undefined" entry.
    // http://stackoverflow.com/questions/3010840/loop-through-array-in-javascript
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data-job%", this[i].employer).replace("%data-url%", this[i].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data-title%", this[i].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data-loc%", this[i].location);
		var formattedWorkDates = HTMLworkDates.replace("%data-dates%", this[i].dates);
		var formattedWorkDesc = HTMLworkDesc.replace("%data-desc%", this[i].description);
		// Combine all formatted HTML code into one work entry object
		var formattedWorkEntry = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDesc;
		// Append i'th work entry object after previous entry
		$('.work-entry:last').append(formattedWorkEntry);
}}};
work.display = function(){this.jobs.display()};






projects.projects.display = function (){
	if (this.length > 0) {
		$('#projSection').append(HTMLprojectHeading);
		for (var i = 0; i < this.length; i++) {
			$('#accordion').append(HTMLprojectStart); 
			// formate the stock HTML with JSON data
			var formattedProjectTitle = HTMLprojectTitle.replace("%data-name%", this[i].title);
			var formattedProjectDesc = HTMLprojectDesc.replace("%data-desc%", this[i].description);
			var formattedProjectEntry = formattedProjectTitle + formattedProjectDesc;
			$('.project-entry:last').append(formattedProjectEntry)
      		// iterate to add pretty pictures
      		if (this[i].images.length > 0) {
        		for (var j = 0; j < this[i].images.length; j++) {
          			formattedImageLink = HTMLprojectImage.replace("%data-img%", this[i].images[j])
        			$('.pic-box:last').append(formattedImageLink);
}}}}};
projects.display = function(){this.projects.display()};






education.schools.display = function (){
	if (this.length > 0) {
		$('#eduSection').append(HTMLschoolHeading);
		for (var i = 0; i < this.length; i++) {
			$('#schoolList').append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data-url%", this[i].url).replace("%data-name%", this[i].name);
			var formattedSchoolDegreeMajor = HTMLschoolDegreeMajor.replace("%data-degree%", this[i].degree).replace("%data-major%", this[i].majors[0]);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data-loc%", this[i].location);
			var formattedSchoolDates = HTMLschoolDates.replace("%data-date%", this[i].dates);
			// Combine all formatted HTML code into one school entry object
			var formattedSchoolEntry = formattedSchoolName + formattedSchoolDegreeMajor + formattedSchoolLocation + formattedSchoolDates;
			// Append i'th entry object after previous entry
			$('.education-entry:last').append(formattedSchoolEntry);
}}};

education.onlineCourses.display = function (){
	if (this.length > 0) {
		$('#eduSection').append(HTMLonlineHeading);
		for (var i = 0; i < this.length; i++) {
			$('#onlineList').append(HTMLonlineStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data-title%", this[i].title).replace("%data-url%", this[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data-school%", this[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data-date%", this[i].date);
			// Combine all formatted HTML code into one school entry object
			var formattedOnlineEntry = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates;
			// Append i'th entry object after previous entry
			$('.education-entry:last').append(formattedOnlineEntry);
}}};
// Further encapsulate education display functionality
education.display = function() {
	this.schools.display();
	this.onlineCourses.display();
};







// Function calls to display each JSON object. 
bio.display();
work.display();
projects.display();
education.display();
$("#mapSection").append(HTMLmapDiv);
$('#skillSelector').change(catnap);







/* The internationalize function is left here only in case I want inspiration later
function inName() {
    var nameString = bio.name;
    var nameArray = nameString.split(" ");
    nameArray[0] = nameArray[0][0].toUpperCase()
               + nameArray[0].substring(1).toLowerCase();
               //could also have used String.slice() here
               //http://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
    nameArray[1] = nameArray[1].toUpperCase();
    var resultName = nameArray[0] + " " + nameArray[1];
    formattedName = HTMLheaderName.replace("%data%", resultName);
    $("#name").replaceWith(formattedName)
};
*/




