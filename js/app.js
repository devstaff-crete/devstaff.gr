angular.module('PastMeetupsApp', [
	'PastMeetupsApp.controllers'
]);

angular.module('PastMeetupsApp.controllers', []).
controller('PastMeetupsController', function($scope) {
	$scope.MeetupList = [
		{
			Name: "Secure Development",
			Day: 11,
			Month: 2,
			Year: 2016,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup07-Security",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228230597/",
			FacebookLink: ""
		},{
			Name: "Mobile Development",
			Day: 14,
			Month: 1,
			Year: 2016,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup06-MobileDev",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "",
			FacebookLink: ""
		},{
			Name: "Unit Testing",
			Day: 10,
			Month: 12,
			Year: 2015,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup05-Testing",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/226695959/",
			FacebookLink: ""
		},{
			Name: "Design",
			Day: 12,
			Month: 11,
			Year: 2015,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup04-Design",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225897583/",
			FacebookLink: "https://www.facebook.com/media/set/?set=a.182007272143122.1073741834.103966656613851&type=3"
		},{
			Name: "DevOps",
			Day: 8,
			Month: 10,
			Year: 2015,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup03-DevOps",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225364969/",
			FacebookLink: "https://www.facebook.com/media/set/?set=a.167111943632655.1073741833.103966656613851&type=3"
		},{
			Name: "NodeJS",
			Day: 10,
			Month: 9,
			Year: 2015,
			Hour: "20:00",
			Location: "Main Building",
			Location2: "FoRTH",
			GitHubLink: "https://github.com/devstaff-crete/meetup02-NodeJS",
			LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223851144/",
			FacebookLink: "https://www.facebook.com/media/set/?set=a.152265678450615.1073741832.103966656613851&type=3"
		},{
			Name: "Git VCS",
			Day: 9,
			Month: 7,
			Year: 2015,
			Hour: "20:00",
			Location: "Science & Technology Park of Crete",
			Location2: "STEP-C",
			GitHubLink: "https://github.com/devstaff-crete/meetup01-Git",
			LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en",
			MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223500458/",
			FacebookLink: "https://www.facebook.com/Devstaff/photos/a.109069919436858.1073741831.103966656613851/109069929436857/?type=3&theater"
		}
	];
});
