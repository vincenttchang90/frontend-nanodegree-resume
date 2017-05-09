var work = {
	jobs : [
		{
			employer : "KSI",
			title : "Account Receivable",
			location : "South Plainfield, NJ",
			dates : "2016-2017",
			description : "Managed over 300 accounts"
		},
		{
			employer : "Self employed",
			title : "Professional Poker Player",
			location : "NJ",
			dates : "2013-2016",
			description : "Live and online tournament professional"
		}
	]
};

var projects = {
	project : [
			{
				title : "Will update",
				dates : "Will update",
				description : "Will update,",
				images : "images/me.png"
			},
			{
				title : "Will update",
				dates : "Will update",
				description : "Will update,",
				images : "images/me.png"
			}]
};

var bio = {
	name : "Vincent Chang",
	role : "Professional",
	welcomeMessage : "You can't win what you don't put in the middle",
	biopic : "images/me.png",
	contacts : {
		mobile : "732-233-7534",
		email : "vincenttchang@gmail.com",
		github : "https://github.com/vincenttchang90",
		twitter : "NA",
		location : "Princeton, NJ"
	},
	skills : ["Web Dev", "NLE", "Tennis", "Olympic weightlifting"]
};

var education = {
	schools : [
				{
					name : "Rutgers University",
					location : "New Brunswick, NJ",
					degree : "BS",
					dates : "2015",
					majors : ["Economics"],
					url : "http://www.rutgers.edu/"
				}
			],
	onlineCourses : [
		{
					title : "Front End Web Dev Nanodegree",
					school : "Udacity",
					dates : "2017",
					url : "https://www.udacity.com/"
					}
				]
};

bio.display = function() {
	
	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedHTMLwelcomeMsg);
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedHTMLbioPic);
	var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHTMLheaderRole);
	var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHTMLheaderName);
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedHTMLmobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedHTMLemail);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedHTMLgithub);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedHTMLlocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill;
		for (var i = 0; i < bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	$("#footerContacts").append(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLlocation);
};
bio.display();


work.display = function() {
	/*
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedworkLocation).append(formattedDescription);
	}
	*/
	$("#workExperience").append(HTMLworkStart);
	work.jobs.forEach(function(job){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);

		$(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedworkLocation).append(formattedDescription);
	})
};
work.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName() {
	var name = bio.name.split(" ");
	var first = name[0].toLowerCase();
	var last = name[1].toUpperCase();
	return first[0].toUpperCase()+first.slice(1)+" "+last;
}

projects.display = function() {
	/*for (var stuff in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[stuff].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[stuff].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[stuff].description);
		$(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
		if (projects.project[stuff].images.length > 0) {
			var formattedImages = HTMLprojectImage.replace("%data%", projects.project[stuff].images);
			$(".project-entry:last").append(formattedImages);
		}
	}
	*/
	$("#projects").append(HTMLprojectStart);
	projects.project.forEach(function(project){
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
		if (project.images.length > 0) {
			var formattedImages = HTMLprojectImage.replace("%data%", projects.project[stuff].images);
			$(".project-entry:last").append(formattedImages);
		}
	})
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry").append(formattedHTMLschoolName + formattedHTMLschoolDegree).append(formattedHTMLschoolDates).append(formattedHTMLschoolLocation).append(formattedHTMLschoolMajor);
	}
	
	$("#education").append(HTMLonlineClasses);
	
	for (var online in education.onlineCourses) {
		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[online].url).replace("%data%", education.onlineCourses[online].title);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
		$(".education-entry:last").append(formattedHTMLonlineDates);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
};

education.display();
projects.display();
$("#mapDiv").append(googleMap);