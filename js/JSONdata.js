var bio = {
	"name": "D. Quintin Brubaker",
	"welcomeMessage": "Distinguit quid barbam?",
	"biopic": "./images/biopic.jpg",
	"skills": {
		"Multitalented": "work-all",
		"Web Developer": "work-web",
		"Paramedic": "work-ems",
		"River Guide": "work-riv",
		"Hospitality": "work-bev",
		"Bus Driver": "work-bus"},
	"contacts": {
		"email": "Quintin.Brubaker@Gmail.com",
		"location": "Winchester, VA, USA",
		"mobile": "540-247-9940",
		"github": "DoQBrubak",
		"twitter": "@me_DQB"},
	"social": {
		"linkedin": "https://www.linkedin.com/profile/view?id=201488195/",
		"github": "https://github.com/DoQBrubak/",
		"mail": "mailto:quintin.brubaker@gmail.com",
		"twitter": "https://twitter.com/me_dqb/",
		"googleplus": "https://plus.google.com/114299478507949690411/",
		"facebook": "https://www.facebook.com/quintin.brubaker/",
		"wordpress": "https://dqbrva.wordpress.com/"}
};
/* This array is included to let the reDisplayJobs() function - which is defined in 
 * helper.js - be defined more succinctly. This is dependent on the above-defined 
 * skills property.
 */
bio.skillCategories = [];
for(key in bio.skills) {
	if (typeof(bio.skills[key])=="string"){
		bio.skillCategories.push(bio.skills[key])
}};


















var work = {
	"jobs": [
	   {"employer": "YOUR COMPANY NAME HERE",
		"title": "Futuristic web guy",
		"location": "Winchester, VA, USA",
		"dates": "The near future - The distant future",
		"description": "I will work long hours, bringing your shareholders great "+
			"ROI. I will eat your catered lunches, supporting local service "+
			"industry jobs. I will troubleshoot my own quetions using incisive "+
			"web queries, and will not cry over spilt milk.",
		"url": "",
		"type": "work-web" },

	   {"employer": "Wintergreen Fire Department",
		"title": "Paramedic",
		"location": "Lovingston, VA, USA",
		"dates": "November 2012 - Present",
		"description": "Paramedic for 'county crew' serving rural Nelson County. "+
			"Provided ALS emergency care including RSI, in a low-resources 911 "+
			"system, with lengthy transport times.",
		"url": "http://www.wtgfireresq.org",
		"type": "work-ems" },

	   {"employer": "Richmond Ambulance Authority",
		"title": "Paramedic",
		"location": "Richmond, VA, USA",
		"dates": "October 2011 - January 2013",
		"description": "Paramedic for a busy high-performance urban EMS system.",
		"url": "http://www.raaems.org",
		"type": "work-ems"},
		
	   {"employer": "K Bar Pizza",
		"title": "Bartender; Server; Pizza cook",
		"location": "Gardiner, MT, USA",
		"dates": "June 2011 - September 2011",
		"description": "Day 1 on the job: Washing dishes. Day 2: Food prep. Day 3: Hosting. "+
			"Day 4: Throwing pizza pies. Day 5: Serving dinner tables. Day 6: Tending bar. "+
			"And on the seventh day, He saw it was good, and He rested.",
		"url": "http://www.kbarpizza.com",
		"type": "work-bev"},

	   {"employer": "Yellowstone Raft Company",
		"title": "Whitewater raft guide",
		"location": "Gardiner, MT, USA",
		"dates": "May 2011 - September 2011",
		"description": "Guided whitewater rafts on the Yellowstone River.",
		"url": "http://www.yellowstoneraft.com",
		"type": "work-riv"},

	   {"employer": "Livingston Fire Department",
		"title": "Paramedic - reserve corps",
		"location": "Livingston, MT, USA",
		"dates": "February 2011 - August 2011",
		"description": "Served as a part-time paramedic for a department which provided EMS and "+
			"rescue to the town of Livingston and surrounding Park County, MT.",
		"url": "http://www.livingstonmontana.org/living/fire_and_rescue.html",
		"type": "work-ems"},

	   {"employer": "Harrisonburg Department of Public Transit",
		"title": "Transit driver",
		"location": "Harrisonburg, VA, USA",
		"dates": "November 2008 - January 2010",
		"description": "Drove transit routes for the city of Harrisonburg, which ."+
			"contracts to provide transportation for the James Madison University campus.",
		"url": "http://www.harrisonburgva.gov/hdpt",
		"type": "work-bus"},

		{"employer": "Harrisonburg Rescue Squad",
		"title": "Paramedic - volunteer",
		"location": "Harrisonburg, VA, USA",
		"dates": "November 2008 - Present",
		"description": "Paramedic for a busy station-based college town rescue squad.",
		"url": "http://www.rescue40.org",
		"type": "work-ems"},

	   {"employer": "Ace Adventure Resort",
		"title": "Whitewater raft guide",
		"location": "Minden, WV, USA",
		"dates": "May 2008 - October 2010",
		"description": "Guided rafts on the class IV New River during the summer, and "+
			"on the class V Gauley River during the fall.",
		"url": "http://www.aceraft.com",
		"type": "work-riv"},

	   {"employer": "Lost Paddle Bar & Grill",
		"title": "Bartender; Server",
		"location": "Minden, WV, USA",
		"dates": "April 2008 - October 2008",
		"description": "Poured libations and served tables at the \"company store\", for "+
			"river rafters and tourists alike",
		"url": "http://www.aceraft.com/collections/dining/products/lost-paddle-bar-and-grill",
		"type": "work-bev"},

	   {"employer": "Montana Whitewater",
		"title": "Whitewater raft guide",
		"location": "Gardiner, MT, USA",
		"dates": "May 2007 - September 2007",
		"description": "Guided class IV rafts under the Big Sky.",
		"url": "http://www.montanawhitewater.com",
		"type": "work-riv"},

	   {"employer": "The Town Lounge",
		"title": "Bartender",
		"location": "Gardiner, MT, USA",
		"dates": "May 2007 - August 2007",
		"description": "Served drinks in a smoke-filled family-owned biker bar.",
		"url": "http://www.yelp.com/biz/town-cafe-motel-lounge-and-gift-shop-gardiner",
		"type": "work-bev"},

	   {"employer": "University Transit Service",
		"title": "Transit driver",
		"location": "Charlottesville, VA, USA",
		"dates": "May 2005 - May 2007",
		"description": "Drove Gilligs in circles around the University of Virginia campus.",
		"url": "http://www.virginia.edu/parking/uts",
		"type": "work-bus"}
  	]
};
// This magic ball selects the url of my future employer...
work.jobs[0].url = ["www.uber.com", "www.teslamotors.com","www.spacex.com"][Math.floor(Math.random()*3)];
















var projects = {
	"projects": [
	   {"title": "Wintergreen Fire and Rescue website redesign",
		"dates": "2015",
		"description": "The old website was Flash-dependent and mobile unfriendly. "+
			"I remade it with Bootstrap and responsive design concepts in mind.",
		"images": [
			"images/projects/wtgfireresq-screen-01.jpg",
			"images/projects/wtgfireresq-screen-02.jpg"],
		"url": "NA"},

	   {"title": "Pages for Udacity Nanodegree",
		 "dates": "2015",
		 "description": "Two simple web page assignments that employ fundamentals of "+
		 	"HTML, CSS, and Bootstrap.",
		 "images": [
		 	"images/projects/mug-screen-01.jpg",
			"images/projects/mug-screen-02.jpg"],
		 "url": "NA"},

	   {"title": "Nelson Zipfinder",
		"dates": "2014",
		"description": "A JavaScript-powered tool to help local EMS crews look up the "+
			"viscinity of the address they are responding to.",
		"images": [
			"images/projects/zipfinder-screen-01.jpg",
			"images/projects/zipfinder-screen-02.jpg"],
		"url": "https://www.dropbox.com/s/lhmku7akkf8pwb9/nelson-zipfinder-3b32618.zip"},

	   {"title": "Wintergreen Trailfinder",
		"dates": "2014",
		"description": "A simple JS tool describing the trail network around Wintergreen "+
			"Resort and highlighting trouble areas in the event of extrication.",
		"images": [
			"images/projects/trailfinder-screen-01.jpg",
			"images/projects/trailfinder-screen-02.jpg"],
		"url": "https://www.dropbox.com/s/fa65wtiu742lyvv/wintergreen-trailfinder.v1.zip"}
  	]
}; // / projects object











var education = {
	"schools": [
	   {"name": "James Madison University",
		"location": "Harrisonburg, VA, USA",
		"degree": "Non-degree post-baccalaureate",
		"majors": ["Biology"],
		"dates": 2010,
		"url": "http://www.jmu.edu/"},

	   {"name": "University of Virginia",
		"location": "Charlottesville, VA, USA",
		"degree": "Bachelor of Arts",
		"majors": ["History"],
		"dates": 2007,
		"url": "http://www.virginia.edu/"}
	],
	"onlineCourses": [
	   {"title": "JavaScript Syntax",
		"school": "Udacity",
		"date": 2014,
		"url": "https://www.udacity.com/course/ud804"},

	   {"title": "Interactive Python Programming",
		"school": "Coursera",
		"date": 2013,
		"url": "https://www.coursera.org/course/interactivepython"}
	]
};