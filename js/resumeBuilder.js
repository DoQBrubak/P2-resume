// This function formats and displays biographic info from 'bio' object.

bio.skills.display = function() {
	if (this.length > 0) {
		$('header').append(HTMLskillsStart);

		for (var i = 0; i <  this.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", this[i]);
			$('#skills-list').append(formattedSkill);
		}
	}
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data-name%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data-role%", this.role);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data-msg%", this.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data-pic%", this.biopic);

	var formattedHeaderContent = (formattedName
								+ formattedRole
								+ formattedWelcomeMsg
								+ formattedBioPic
								);
	$('header').prepend(formattedHeaderContent);

	this.skills.display()
};


/*
bio.contacts.display = function() {
	/* I referenced StackOverflow regarding finding object length:
	http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array
	
	var keys = Object.keys(this);
	for (var i = 0; i <  keys.length - 1; i++) {
		var contactEntryType = keys[i];
		var contactEntryValue = this[keys[i]];
		formattedContactEntryGeneric = HTMLcontactEntryGeneric.replace("%contact-type%", contactEntryType + ":").replace("%contact-data%", contactEntryValue);
		$( '#contactBoxTop' ).append(formattedContactEntryGeneric)
	}
};
*/

work.jobs.display = function() {
	if (this.length > 0) {
		$('#workSection').append(HTMLworkStart);
		for (var i = 0; i < this.length; i ++) {
    //For some reason for (i in this) {
    //displays an extra, "undefined undefined" entry.
    // http://stackoverflow.com/questions/3010840/loop-through-array-in-javascript
    
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data-job%", this[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data-title%", this[i].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data-loc%", this[i].location);
		var formattedWorkDates = HTMLworkDates.replace("%data-dates%", this[i].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data-desc%", this[i].description);
		var formattedWorkEntry = formattedWorkEmployer
                          	   + formattedWorkTitle
                        	   + formattedWorkLocation
                           	   + formattedWorkDates
                           	   + formattedWorkDescription;
		$( '.work-entry:last' ).append(formattedWorkEntry)
		}
	}
};
work.display = function(){this.jobs.display()};



projects.projects.display = function (){
	if (this.length > 0) {
		for (var i = 0; i < this.length; i++) {
			$('#projSection').append(HTMLprojectStart); 
			
			var formattedProjectEntry = HTMLprojectTitle.replace("%data%", this[i].title)
                                  	  + HTMLprojectDates.replace("%data%", this[i].dates)
                                	  + HTMLprojectDescription.replace("%data%", this[i].description);

      		var formattedImageLinks = new String();
      		
      		if (this[i].images.length > 0) {
        		for (var j = 0; j < this[i].images.length; j++) {
          			formattedImageLinks += HTMLprojectImage.replace("%data%", this[i].images[j])
        		}
     		};
			formattedProjectEntry += formattedImageLinks;
			$('.project-entry:last').append(formattedProjectEntry)
		}
	}
};
projects.display = function(){this.projects.display()};



education.schools.display = function (){
	if (this.length > 0) {
		$('#eduSection').append(HTMLschoolHeadDiv);
		for (var i = 0; i < this.length; i++) {
			$('#school-list').append(HTMLschoolStart);
			
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
		$('#eduSection').append(HTMLonlineHeadDiv);
		for (var i = 0; i < this.length; i++) {
			$('#online-list').append(HTMLonlineStart);

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



bio.display();
//bio.contacts.display();
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




