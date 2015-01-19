
bio.contacts.display = function() {
	// I referenced StackOverflow regarding finding object length: http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array
	var keys = Object.keys(this);
	for (var i = 0; i <  keys.length - 1; i++) {
		var contactEntryType = keys[i];
		var contactEntryValue = this[keys[i]];
		formattedContactEntry = HTMLcontactEntry.replace("%data-type%", contactEntryType + ":").replace("%data-value%", contactEntryValue);
		$('#contactList').append(formattedContactEntry)
	}
};

bio.skills.populate = function() {
	console.log(this)
	for (var i = 0; i < this.length; i++) {
		formattedSkillOption = HTMLskillOption.replace("%data-skill%", this[i]).replace("%data-name%", this[i]);
		$('#skillSelector').append(formattedSkillOption);
		console.log(formattedSkillOption)
	}
};

// Function definition to display everything from the JSON "bio" object
bio.display = function() {
	// Establish the header structure.
	$('header').prepend(HTMLbioGrid);
	// Insert an image in the header left column. It will shrink/disappear responsively.
	var formattedBioPic = HTMLbioPic.replace("%data-img%", this.biopic);
	$('.bio-col-left').append(formattedBioPic)
	// Insert the main column name and the (empty) skill selector.
	var formattedName = HTMLheaderName.replace("%data-name%", this.name);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data-msg%", this.welcomeMessage);
	var formattedHeaderContent = formattedName + formattedWelcomeMsg + HTMLroleSelect;
	$('.bio-col-center').append(formattedHeaderContent);
	// Populate the skill selector.
	this.skills.populate();
	// Insert the contact details via an encapsulated function
	this.contacts.display()
};









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
		$('.work-entry:last').append(formattedWorkEntry)
		}
	}
};
work.display = function(){this.jobs.display()};





projects.projects.display = function (){
	if (this.length > 0) {
		$('#projSection').append(HTMLprojectHeading);

		for (var i = 0; i < this.length; i++) {
			$('#projList').append(HTMLprojectStart); 
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data-name%", this[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data-date%", this[i].dates);
			var formattedProjectDesc = HTMLprojectDesc.replace("%data-desc%", this[i].description);
			// Combine all formatted HTML code into one project entry object
			var formattedProjectEntry = formattedProjectTitle + formattedProjectDates + formattedProjectDesc;
      		

      		var formattedImageLinks = new String();
      		
      		if (this[i].images.length > 0) {
        		for (var j = 0; j < this[i].images.length; j++) {
          			formattedImageLinks += HTMLprojectImage.replace("%data-img%", this[i].images[j])
        		}
     		};
			formattedProjectEntry += formattedImageLinks;
			$( '.project-entry:last' ).append(formattedProjectEntry)
		}
	}
};
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
			$('.education-entry:last').append(formattedSchoolEntry)
		}
	}
};

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
		}
	}
};
// Further encapsulate education display functionality
education.display = function() {
	this.schools.display();
	this.onlineCourses.display()
};





// Function calls to display each JSON object. 
bio.display();
work.display();
projects.display();
education.display();


//$("#mapSection").append(googleMap);


/*
This is the internationalize-name function, which I don't really care 
about but I'll leave here now in case I want inspiration for other 
functionality.

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




