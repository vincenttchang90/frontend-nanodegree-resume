/*work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle 
and location. The twitter property is optional.

education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings. 
education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.
*/

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
				images : "Will update"
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
		github : "vincenttchang",
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
					date : "2015",
					majors : ["Economics", "Math"],
					url : "NA"
				}
			],
	onlineCourses : {
					title : "Front End Web Dev Nanodegree",
					school : "Udacity",
					dates : "2017",
					url : "www.udacity.com"
					}
}

var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHTMLheaderName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill;
	for (var i = 0; i < bio.skills.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};



for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedDescription);
};

//github push testss