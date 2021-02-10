angular.module('SponsorsApp', [
  'SponsorsApp.controllers', 
  'PartnersApp.controllers'
]);

angular.module('SponsorsApp.controllers', []).
controller('SponsorsController', function($scope) {
  $scope.SponsorsImagesPath = 'images/sponsors/';

  $scope.SponsorsList = [
    {
      Name: 'Fairlo',
      Image: 'fairlo.png',
      HomeLink: 'https://fairlo.se/',
      FacebookLink: 'https://el-gr.facebook.com/fairlo.se/',
      LinkedInLink: 'https://www.linkedin.com/company/fairlo/'
    },
    {
      Name: 'BestPrice',
      Image: 'bestprice.png',
      HomeLink: 'https://www.bestprice.gr/',
      FacebookLink: 'https://el-gr.facebook.com/bestprice.gr',
      LinkedInLink: 'https://www.linkedin.com/company/bestprice-gr/'
    },
    {
      Name: 'Yodeck',
      Image: 'yodeck.png',
      HomeLink: 'https://www.yodeck.com/',
      FacebookLink: 'https://www.facebook.com/yodeck.digital.signage/',
      LinkedInLink: 'https://www.linkedin.com/showcase/yodeck/'
    },
    {
      Name: 'JetBrains',
      Image: 'jetbrains.png',
      HomeLink: 'https://www.jetbrains.com/',
      FacebookLink: 'https://www.facebook.com/JetBrains/',
      LinkedInLink: 'https://www.linkedin.com/company/jetbrains/'
    },
    {
      Name: 'Enartia',
      Image: 'EnartiaLogo.png',
      HomeLink: 'https://www.enartia.com/',
      FacebookLink: 'https://el-gr.facebook.com/EnartiaVenue/',
      LinkedInLink: 'https://www.linkedin.com/company/usableweb-ltd/'
    },
    {
      Name: 'Pancreta Cooperative Bank',
      Image: 'Logo_Pancreta.png',
      HomeLink: 'http://www.pancretabank.gr/',
      FacebookLink: 'https://www.facebook.com/pages/%CE%A0%CE%91%CE%93%CE%9A%CE%A1%CE%97%CE%A4%CE%99%CE%91-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91PANCRETA-BANK/139122389454549',
      LinkedInLink: 'https://www.linkedin.com/company/pancretabank/'
    },
    {
      Name: 'Webtrails',
      Image: 'Webtrails_logo.png',
      HomeLink: 'https://webtrails.gr/',
      FacebookLink: 'https://www.facebook.com/webtrails.gr/',
      LinkedInLink: 'https://www.linkedin.com/company/webtrails/'
    },
    {
      Name: 'Office 12',
      Image: 'office12_logo.png',
      HomeLink: 'https://office12.gr/',
      FacebookLink: 'https://www.facebook.com/office12.gr',
      LinkedInLink: 'https://www.linkedin.com/company/office_12-the-coworking-office/'
    },
    {
      Name: 'CyberLogic',
      Image: 'cyberlogic_logo.png',
      HomeLink: 'http://www.cyberlogic.gr/en/home/',
      FacebookLink: 'https://www.facebook.com/Cyberlogic.gr/',
      LinkedInLink: 'https://www.linkedin.com/company/cyberlogic-oe/'
    },
    {
      Name: 'Phatweb',
      Image: 'phatweb-logo.png',
      HomeLink: 'https://phatweb.gr/',
      FacebookLink: 'https://www.facebook.com/phatweb.gr/',
      LinkedInLink: ''
    },
    {
      Name: 'Sunlight',
      Image: 'logo-sunlight-white.png',
      HomeLink: 'https://www.sunlight.io/',
      FacebookLink: 'https://www.facebook.com/Sunlightio-236110340385376/',
      LinkedInLink: 'https://www.linkedin.com/company/sunlight-io'
    },
    {
      Name: 'FORTH',
      Image: 'forth_logo.png',
      HomeLink: 'https://www.forth.gr/',
      FacebookLink: 'https://www.facebook.com/FORTH.ITE/',
      LinkedInLink: 'https://gr.linkedin.com/company/foundation-for-research-&-technology-hellas-forth-'
    },
    {
      Name: 'CSD-UOC',
      Image: 'uoc_logo.png',
      HomeLink: 'https://www.csd.uoc.gr/CSD/index.jsp',
      FacebookLink: 'https://el-gr.facebook.com/csd.uoc.gr/',
      LinkedInLink: 'https://gr.linkedin.com/school/uoc-csd/'
    }
  ];
});

angular.module('PartnersApp.controllers', []).
controller('PartnersController', function($scope) {
  $scope.PartnersImagesPath = 'images/partners/';

  $scope.PartnersList = [{
      Name: 'Bizrupt',
      Image: 'Bizrupt_Logo.png',
      HomeLink: 'https://www.bizrupt.gr/'
    },
  ];
});

angular.module('PastMeetupsApp', [
  'PastMeetupsApp.controllers', 
  'PartnersApp.controllers'
]);

angular.module('PastMeetupsApp.controllers', []).
controller('PastMeetupsController', function($scope) {
  $scope.loadedMeetups = 10;
  $scope.loadExtraMeetups = 10;
  $scope.loadMoreMeetups = function() {
    $scope.loadedMeetups += $scope.loadExtraMeetups;
  };
  $scope.totalPastMeetups = function() {
    pastMeetups = 0;
    $scope.MeetupList.forEach(function(meetup) {
      if (meetup.IsFutureMeetup != 1) {
        pastMeetups++;
      }
    });
    return pastMeetups;
  };
  $scope.isFutureMeetup = function(greekDate, hour) {
    var now = new Date();
    var dateParts = greekDate.split('/');
    var meetupDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).setHours(hour.split(':')[0], hour.split(':')[1], 0, 0);
    return meetupDate > now;
  };
  $scope.MeetupList = [
    {
      Name: "UI/UX Open discussion",
      Date: "11/02/2021",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "hhttps://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup62-UI-UX-Open-Discussion",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/276153832/"
    },
    {
      Name: "Object Oriented Design Principles",
      Date: "14/01/2021",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup61-Object-Oriented-Programming-Principles",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/275535417/"
    },
    {
      Name: "Data Protection, Privacy and Android Apps",
      Date: "10/12/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup60-Data-Protection-Privacy-and-Android-Apps",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/274868495/"
    },
    {
      Name: "The Git Version Control System",
      Date: "12/11/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup59-The-Git-Version-Control-System",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/274393092/"
    },
    {
      Name: "gRPC: Forget about the REST",
      Date: "08/10/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup58-gRPC-Forget-about-the-REST",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/273573118/"
    },
    {
      Name: "Availability and monitoring / alerting",
      Date: "10/09/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup57-AvailabilityAndMonitoringAlerting",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/273038979/"
    },
    {
      Name: "Open Discussion - Back to socializing",
      Date: "09/07/2020",
      Hour: "19:00",
      Location: "Eukaliptos Park",
      Location2: "Next to the cantine",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup56-OpenDiscussion",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.332005%2C25.129463",
      MeetupLink: "https://www.meetup.com/devstaff/events/271750197/"
    },
    {
      Name: "Go Language",
      Date: "11/06/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup55-GoLanguage",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/271128666/"
    },
    {
      Name: "Lightning Talks",
      Date: "14/05/2020",
      Hour: "19:00",
      Location: "Online meetup",
      Location2: "through zoom",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup54-LightningTalks",
      LocationLink: "",
      MeetupLink: "https://www.meetup.com/devstaff/events/270468862/"
    },
    {
      Name: "Vue.js",
      Date: "13/02/2020",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup53-VueJs",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/268503438/"
    },
    {
      Name: "IoT - Smart Home",
      Date: "09/01/2020",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup52-IoTSmartHome",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/267667245/"
    },
    {
      Name: "UI - UX",
      Date: "12/12/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup51-UIUX",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/266941393/"
    },
    {
      Name: "GraphQL",
      Date: "14/11/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup50-GraphQL",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/266177674/"
    },
    {
      Name: "Mobile App Development",
      Date: "10/10/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup49-MobileAppDevelopment",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/265374447/"
    },
    {
      Name: "Automation",
      Date: "12/09/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup48-Automation",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/264687108/"
    },
    {
      Name: "Privacy by Design (PbD)",
      Date: "11/07/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup47-PrivacyByDesign",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/262891225/"
    },
    {
      Name: "Automated Testing",
      Date: "13/06/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup46-AutomatedTesting",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/261809354/"
    },
    {
      Name: "Javascript",
      Date: "09/05/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup45-Javascript",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/261099327/"
    },
    {
      Name: "DevOps",
      Date: "11/04/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup44-DevOps",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/260371485/"
    },
    {
      Name: "Microservices",
      Date: "14/03/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup43-Microservices",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/259423881/"
    },
    {
      Name: "Startup Idea Validation Kit",
      Date: "07/02/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup42-StartupIdeaValidationKit",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/258288640/"
    },
    {
      Name: "Disaster Recovery: Beyond Backup Strategies",
      Date: "10/01/2019",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup41-DisasterRecovery",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/257759964/"
    },
    {
      Name: "Elasticsearch",
      Date: "13/12/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup40-Elasticsearch",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/256432244/"
    },
    {
      Name: "Cloud-native Applications.",
      Date: "08/11/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup39-CloudNative",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/255971225/"
    },
    {
      Name: "Remote Working: Hints, Tips, Advice, Pitfalls and open chat.",
      Date: "11/10/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup38-RemoteWorking",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/255294273/"
    },
    {
      Name: "[Back to School] Lightning Talks",
      Date: "13/09/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup37-LightningTalks",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/254452437/"
    },
    {
      Name: "[Season Finale] Prototyping in Virtual Reality (VR)",
      Date: "12/07/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/DevStaff-Heraklion/tree/master/meetups/meetup36-PrototypingInVR",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
      MeetupLink: "https://www.meetup.com/devstaff/events/252182856/"
    },
    {
      Name: "IDEs: Super-charging your productivity!",
      Date: "14/06/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup35-IDEs",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
      MeetupLink: "https://www.meetup.com/devstaff/events/251061115/"
    },
    {
      Name: "[GDPR] General Data Protection Regulation",
      Date: "10/05/2018",
      Hour: "19:00",
      Location: "Leoforos Ikarou 5 · Heraklion",
      Location2: "Pancretan Cooperative Bank",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup34-GDPR",
      LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
      MeetupLink: "https://www.meetup.com/devstaff/events/250184418/"
    },
    {
      Name: "Machine Learning",
      Date: "12/04/2018",
      Hour: "19:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup33-MachineLearning",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/devstaff/events/248921759/"
    },
    {
      Name: "From Coder to Manager",
      Date: "08/03/2018",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup32-FromCoderToManager",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/devstaff/events/248331146/"
    },
    {
      Name: "Functional Programming",
      Date: "15/02/2018",
      Hour: "20:30",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup31-FunctionalProgramming",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/devstaff/events/247415782/"
    },
    {
      Name: "Javascript - Node.js / React / Angular / etc.",
      Date: "11/01/2018",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup30-Javascript",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/devstaff/events/244448622/"
    },
    {
      Name: "Continuous Integration / Unit Testing:",
      Date: "14/12/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup29-CI",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/devstaff/events/244448616/"
    },
    {
      Name: "Microservices:",
      Date: "09/11/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup28-Microservices",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/244448594/"
    },
    {
      Name: "Lightning Talks:",
      Date: "12/10/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup27-LightningTalks",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/preview/DevStaff-A-Developer-Community-Gathering-In-Crete/events/243718619/"
    },
    {
      Name: "Bitcoin, Blockchain and the future:",
      Date: "14/09/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup26-BitcoinBlockchainETC",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/242708726/"
    },
    {
      Name: "Contrib­uting & Maintaining Open Source Software",
      Date: "06/07/2017",
      Hour: "19:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup24-CMOSS",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240658389/"
    },
    {
      Name: "Types of Hosting",
      Date: "08/06/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup23-TypesOfHosting",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240025362/"
    },
    {
      Name: "Agile Software Development",
      Date: "11/05/2017",
      Hour: "20:00",
      Location: "Ιδρύματα Α. & Μ. Καλοκαιρινού",
      Location2: "Monis Agkarathou 9, Iráklion",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup22-AgileSoftwareDevelopment",
      LocationLink: "https://www.google.com/maps/place/%CE%9A%CE%BF%CE%B9%CE%BD%CF%89%CE%BD%CE%B9%CE%BA%CF%8C%CF%82+%CE%A7%CF%8E%CF%81%CE%BF%CF%82,+%CE%99%CE%B4%CF%81%CF%8D%CE%BC%CE%B1%CF%84%CE%B1+%CE%91.+%26+%CE%9C.+%CE%9A%CE%B1%CE%BB%CE%BF%CE%BA%CE%B1%CE%B9%CF%81%CE%B9%CE%BD%CE%BF%CF%8D/@35.3422929,25.1313681,17z/data=!4m13!1m7!3m6!1s0x149a5a2e4468d97b:0xc9b67f06818aa350!2sMonis+Agkarathou+9,+Iraklio+712+02,+Greece!3b1!8m2!3d35.3422929!4d25.1335568!3m4!1s0x149a5a2e443017fd:0xc010c2cffea2758c!8m2!3d35.3422929!4d25.1335568?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238460133/"
    },
    {
      Name: "Remote Working",
      Date: "06/04/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup21-RemoteWorking",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238459952/"
    },
    {
      Name: "TOR",
      Date: "09/03/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup20-TOR",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237701354/"
    },
    {
      Name: "CMS",
      Date: "09/02/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup19-CMS",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237337066/"
    },
    {
      Name: "Lightning Talks",
      Date: "12/01/2017",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup18-lightningTalks",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/236518707/"
    },
    {
      Name: "Large Scale",
      Date: "08/12/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup17-largescale",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235331576/"
    },
    {
      Name: "React.js",
      Date: "10/11/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup16-ReactJs",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235052750/"
    },
    {
      Name: "SASS",
      Date: "13/10/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup15-Sass",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/234328426/"
    },
    {
      Name: "Lightning talks",
      Date: "8/9/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup14-LightningTalks-SoftwareballGame",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/233882249/"
    },
    {
      Name: "Password Management",
      Date: "14/7/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup13-infosec",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/232532246/"
    },
    {
      Name: "NoSQL",
      Date: "9/6/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup12-NoSQL",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/231211928/"
    },
    {
      Name: "Design Patterns",
      Date: "12/5/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup10-DesignPatterns",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/230538966/"
    },
    {
      Name: "IoT",
      Date: "14/4/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup09-IoT",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/229757515/"
    },
    {
      Name: "Business & StartUps",
      Date: "10/3/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup08-Startups",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228927029/"
    },
    {
      Name: "Secure Development",
      Date: "11/2/2016",
      Hour: "20:00",
      Location: "Science & Technology Park of Crete",
      Location2: "STEP-C",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup07-Security",
      LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en,",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228230597/"
    },
    {
      Name: "Mobile Development",
      Date: "14/1/2016",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup06-MobileDev",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/227356464/"
    },
    {
      Name: "Unit Testing",
      Date: "10/12/2015",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup05-Testing",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/226695959/"
    },
    {
      Name: "Design",
      Date: "12/11/2015",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup04-Design",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225897583/"
    },
    {
      Name: "DevOps",
      Date: "8/10/2015",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup03-DevOps",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225364969/"
    },
    {
      Name: "NodeJS",
      Date: "10/9/2015",
      Hour: "20:00",
      Location: "Main Building",
      Location2: "FoRTH",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup02-NodeJS",
      LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223851144/"
    },
    {
      Name: "Git VCS",
      Date: "9/7/2015",
      Hour: "20:00",
      Location: "Science & Technology Park of Crete",
      Location2: "STEP-C",
      GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup01-Git",
      LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en",
      MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223500458/"
    }
  ];
});
