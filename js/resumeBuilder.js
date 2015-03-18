// Display everything from the JSON "bio" object
bio.display = function() {
	$('header').prepend(HTMLbioGrid); //Establish the header structure
	
	var formattedBioPic = HTMLbioPic.replace("%data-img%", this.biopic);
	$('.bio-box-1').append(formattedBioPic);

	// Insert the main column name and the (empty) skill selector.
	var formattedName = HTMLheaderName.replace("%data-name%", this.name);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data-msg%", this.welcomeMessage);
	var formattedHeaderContent = formattedName + formattedWelcomeMsg + HTMLroleSelect;
	$('.bio-box-2').append(formattedHeaderContent);
	
	this.skills.display(); //These go in bio-box-2
	this.contacts.display(); //These go in bio-box-3
	this.social.display(); //These actually appear in the page Footer
};

bio.contacts.display = function() {
	$('.bio-box-3').append(HTMLcontactList);
	var keys = Object.keys(this);
	for (var i = 0; i <  keys.length - 1; i++) {
		var entryType = keys[i];
		var entryValue = this[keys[i]];
		var formattedEntry = HTMLcontactEntry.replace("%data-type%", entryType + ": ").replace("%data-value%", entryValue);
		$('#contactList').append(formattedEntry);
}};
bio.skills.display = function() {
	var skills = Object.keys(this).slice(0,this.length);
	for (var i=0; i<skills.length-1; i++) {
		formattedSkillOption = HTMLskillOption.replace("%data-skill%", skills[i]).replace("%data-name%", skills[i]);
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









work.display = function(){
	this.jobs.display()
};
work.jobs.display = function() {
	if (this.length > 0) {
		for (var i = 0; i < this.length; i ++) {
    	$('#workSection').append(HTMLworkStart);
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














projects.display = function(){
	this.projects.display()
};
projects.projects.display = function (){
	if (this.length > 0) {
		$('#projSection').append(HTMLprojectAccordion);
		$('#projSection').append(HTMLprojectSimple)
		for (var i = 0; i < this.length; i++) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data-name%", this[i].title);
			var formattedProjectDesc = HTMLprojectDesc.replace("%data-desc%", this[i].description);
			var formattedProjectData = formattedProjectTitle + formattedProjectDesc;
			var formattedProjectEntry = HTMLprojectStart.replace("%data%", formattedProjectData);
			$('#accordion').append(formattedProjectEntry);

      		if (this[i].images.length > 0) {
        		for (var j = 0; j < this[i].images.length; j++) {
          			formattedImageLink = HTMLprojectImage.replace("%data-img%", this[i].images[j]).replace("%data-url%", this[i].url);
        			$('.pic-box:last').append(formattedImageLink);
        	//$('#projSimple').append(formattedProjectEntry);
}}}}};











education.display = function() {
	this.schools.display();
	this.onlineCourses.display();
};
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








// Function calls to display each JSON object. 
bio.display();
work.display();
projects.display();
education.display();
$("#mapSection").append(HTMLmapDiv);
$('#skillSelector').change(catnap);


