angular.module('SponsorsApp', [
    'SponsorsApp.controllers'
]);

angular.module('SponsorsApp.controllers', []).
controller('SponsorsController', function($scope) {
    $scope.SponsorsImagesPath = "images/sponsors/";

    $scope.SponsorsList = [
        {
            Name: "Enartia",
            Image: "EnartiaLogo.png",
            HomeLink: "https://www.enartia.com/",
            FacebookLink: "https://el-gr.facebook.com/EnartiaVenue/",
            LinkedInLink: "https://www.linkedin.com/company/usableweb-ltd/"
        },
        {
            Name: "Pancreta Cooperative Bank",
            Image: "Logo_Pancreta.png",
            HomeLink: "http://www.pancretabank.gr/",
            FacebookLink: "https://www.facebook.com/pages/%CE%A0%CE%91%CE%93%CE%9A%CE%A1%CE%97%CE%A4%CE%99%CE%91-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91PANCRETA-BANK/139122389454549",
            LinkedInLink: "https://www.linkedin.com/company/pancretabank/"
        },
        {
            Name: "Office 12",
            Image: "office12_logo.png",
            HomeLink: "https://office12.gr/",
            FacebookLink: "https://www.facebook.com/office12.gr",
            LinkedInLink: "https://www.linkedin.com/company/office_12-the-coworking-office/"
        },
        {
            Name: "CyberLogic",
            Image: "cyberlogic_logo.png",
            HomeLink: "http://www.cyberlogic.gr/en/home/",
            FacebookLink: "https://www.facebook.com/Cyberlogic.gr/",
            LinkedInLink: "https://www.linkedin.com/company/cyberlogic-oe/"
        }
    ];
});

angular.module('PastMeetupsApp', [
    'PastMeetupsApp.controllers'
]);

angular.module('PastMeetupsApp.controllers', []).
controller('PastMeetupsController', function($scope) {

    $scope.loadedMeetups = 10;
    $scope.loadExtraMeetups = 10;
    $scope.loadMoreMeetups = function(){
        $scope.loadedMeetups += $scope.loadExtraMeetups;
        console.log($scope.loadedMeetups );
    };
    $scope.totalPastMeetups = function() {
        pastMeetups = 0;
        $scope.MeetupList.forEach(function (meetup) {
            if (meetup.IsFutureMeetup!=1){
                pastMeetups++;
            }
        });
        return pastMeetups;
    };

    $scope.MeetupList = [{
            Name: "IoT - Smart Home",
            Day: 09,
            Month: 01,
            Year: 2020,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup52-IoTSmartHome",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/267667245/",
            IsFutureMeetup: 1
        },{
            Name: "UI - UX",
            Day: 12,
            Month: 12,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup51-UIUX",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/266941393/",
            IsFutureMeetup: 0
        },{
            Name: "GraphQL",
            Day: 14,
            Month: 11,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup50-GraphQL",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/266177674/",
            IsFutureMeetup: 0
        },{
            Name: "Mobile App Development",
            Day: 10,
            Month: 10,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup49-MobileAppDevelopment",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/265374447/",
            IsFutureMeetup: 0
        },{
            Name: "Automation",
            Day: 12,
            Month: 09,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup48-Automation",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/264687108/",
            IsFutureMeetup: 0
        },{
            Name: "Privacy by Design (PbD)",
            Day: 11,
            Month: 07,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup47-PrivacyByDesign",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/262891225/",
            IsFutureMeetup: 0
        },{
            Name: "Automated Testing",
            Day: 13,
            Month: 06,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup46-AutomatedTesting",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/261809354/",
            IsFutureMeetup: 0
        },{
            Name: "Javascript",
            Day: 09,
            Month: 05,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup45-Javascript",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/261099327/",
            IsFutureMeetup: 0
        },{
            Name: "DevOps",
            Day: 11,
            Month: 04,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup44-DevOps",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/260371485/",
            IsFutureMeetup: 0
        },{
            Name: "Microservices",
            Day: 14,
            Month: 03,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup43-Microservices",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/259423881/",
            IsFutureMeetup: 0
        },{
            Name: "Startup Idea Validation Kit",
            Day: 07,
            Month: 02,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup42-StartupIdeaValidationKit",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/258288640/",
            IsFutureMeetup: 0
        },{
            Name: "Disaster Recovery: Beyond Backup Strategies",
            Day: 10,
            Month: 01,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup41-DisasterRecovery",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/257759964/",
            IsFutureMeetup: 0
        },{
            Name: "Elasticsearch",
            Day: 13,
            Month: 12,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup40-Elasticsearch",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/256432244/",
            IsFutureMeetup: 0
        },{
            Name: "Cloud-native Applications.",
            Day: 08,
            Month: 11,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup39-CloudNative",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/255971225/",
            IsFutureMeetup: 0
        },{
            Name: "Remote Working: Hints, Tips, Advice, Pitfalls and open chat.",
            Day: 11,
            Month: 10,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup38-RemoteWorking",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/255294273/",
            IsFutureMeetup: 0
        },{
            Name: "[Back to School] Lightning Talks",
            Day: 13,
            Month: 09,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup37-LightningTalks",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/254452437/",
            IsFutureMeetup: 0
        },
        {
            Name: "[Season Finale] Prototyping in Virtual Reality (VR)",
            Day: 12,
            Month: 07,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/DevStaff-Heraklion/tree/master/meetups/meetup36-PrototypingInVR",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/252182856/",
            IsFutureMeetup: 0
        },
        {
            Name: "IDEs: Super-charging your productivity!",
            Day: 14,
            Month: 06,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup35-IDEs",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
            MeetupLink: "https://www.meetup.com/devstaff/events/251061115/",
            IsFutureMeetup: 0
        },
        {
            Name: "[GDPR] General Data Protection Regulation",
            Day: 10,
            Month: 05,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup34-GDPR",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
            MeetupLink: "https://www.meetup.com/devstaff/events/250184418/",
            IsFutureMeetup: 0
        }, {
            Name: "Machine Learning",
            Day: 12,
            Month: 04,
            Year: 2018,
            Hour: "19:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup33-MachineLearning",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/248921759/"
        }, {
            Name: "From Coder to Manager",
            Day: 08,
            Month: 03,
            Year: 2018,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup32-FromCoderToManager",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/248331146/"
        }, {
            Name: "Functional Programming",
            Day: 15,
            Month: 02,
            Year: 2018,
            Hour: "20:30",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup31-FunctionalProgramming",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/247415782/"
        }, {
            Name: "Javascript - Node.js / React / Angular / etc.",
            Day: 11,
            Month: 01,
            Year: 2018,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup30-Javascript",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/244448622/"
        },
        {
            Name: "Continuous Integration / Unit Testing:",
            Day: 14,
            Month: 12,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup29-CI",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/244448616/"
        },
        {
            Name: "Microservices:",
            Day: 09,
            Month: 11,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup28-Microservices",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/244448594/"
        },
        {
            Name: "Lightning Talks:",
            Day: 12,
            Month: 10,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup27-LightningTalks",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/preview/DevStaff-A-Developer-Community-Gathering-In-Crete/events/243718619/"
        },
        {
            Name: "Bitcoin, Blockchain and the future:",
            Day: 14,
            Month: 09,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup26-BitcoinBlockchainETC",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/242708726/"
        },
        {
            Name: "Contrib­uting & Maintaining Open Source Software",
            Day: 06,
            Month: 07,
            Year: 2017,
            Hour: "19:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup24-CMOSS",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240658389/"
        },
        {
            Name: "Types of Hosting",
            Day: 08,
            Month: 06,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup23-TypesOfHosting",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240025362/"
        },
        {
            Name: "Agile Software Development",
            Day: 11,
            Month: 05,
            Year: 2017,
            Hour: "20:00",
            Location: "Ιδρύματα Α. & Μ. Καλοκαιρινού",
            Location2: "Monis Agkarathou 9, Iráklion",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup22-AgileSoftwareDevelopment",
            LocationLink: "https://www.google.com/maps/place/%CE%9A%CE%BF%CE%B9%CE%BD%CF%89%CE%BD%CE%B9%CE%BA%CF%8C%CF%82+%CE%A7%CF%8E%CF%81%CE%BF%CF%82,+%CE%99%CE%B4%CF%81%CF%8D%CE%BC%CE%B1%CF%84%CE%B1+%CE%91.+%26+%CE%9C.+%CE%9A%CE%B1%CE%BB%CE%BF%CE%BA%CE%B1%CE%B9%CF%81%CE%B9%CE%BD%CE%BF%CF%8D/@35.3422929,25.1313681,17z/data=!4m13!1m7!3m6!1s0x149a5a2e4468d97b:0xc9b67f06818aa350!2sMonis+Agkarathou+9,+Iraklio+712+02,+Greece!3b1!8m2!3d35.3422929!4d25.1335568!3m4!1s0x149a5a2e443017fd:0xc010c2cffea2758c!8m2!3d35.3422929!4d25.1335568?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238460133/"
        },
        {
            Name: "Remote Working",
            Day: 06,
            Month: 04,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup21-RemoteWorking",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238459952/"
        },
        {
            Name: "TOR",
            Day: 09,
            Month: 03,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup20-TOR",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237701354/"
        },
        {
            Name: "CMS",
            Day: 09,
            Month: 02,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup19-CMS",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237337066/"
        },
        {
            Name: "Lightning Talks",
            Day: 12,
            Month: 01,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup18-lightningTalks",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/236518707/"
        },
        {
            Name: "Large Scale",
            Day: 08,
            Month: 12,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup17-largescale",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235331576/"
        },
        {
            Name: "React.js",
            Day: 10,
            Month: 11,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup16-ReactJs",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235052750/"
        },
        {
            Name: "SASS",
            Day: 13,
            Month: 10,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup15-Sass",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/234328426/"
        }, {
            Name: "Lightning talks",
            Day: 8,
            Month: 9,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup14-LightningTalks-SoftwareballGame",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/233882249/"
        }, {
            Name: "Password Management",
            Day: 14,
            Month: 7,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup13-infosec",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/232532246/"
        }, {
            Name: "NoSQL",
            Day: 9,
            Month: 6,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup12-NoSQL",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/231211928/"
        }, {
            Name: "Design Patterns",
            Day: 12,
            Month: 5,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup10-DesignPatterns",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/230538966/"
        }, {
            Name: "IoT",
            Day: 14,
            Month: 4,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup09-IoT",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/229757515/"
        }, {
            Name: "Business & StartUps",
            Day: 10,
            Month: 3,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup08-Startups",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228927029/"
        }, {
            Name: "Secure Development",
            Day: 11,
            Month: 2,
            Year: 2016,
            Hour: "20:00",
            Location: "Science & Technology Park of Crete",
            Location2: "STEP-C",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup07-Security",
            LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en,",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228230597/"
        }, {
            Name: "Mobile Development",
            Day: 14,
            Month: 1,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup06-MobileDev",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/227356464/"
        }, {
            Name: "Unit Testing",
            Day: 10,
            Month: 12,
            Year: 2015,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup05-Testing",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/226695959/"
        }, {
            Name: "Design",
            Day: 12,
            Month: 11,
            Year: 2015,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup04-Design",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225897583/"
        }, {
            Name: "DevOps",
            Day: 8,
            Month: 10,
            Year: 2015,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup03-DevOps",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225364969/"
        }, {
            Name: "NodeJS",
            Day: 10,
            Month: 9,
            Year: 2015,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup02-NodeJS",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223851144/"
        }, {
            Name: "Git VCS",
            Day: 9,
            Month: 7,
            Year: 2015,
            Hour: "20:00",
            Location: "Science & Technology Park of Crete",
            Location2: "STEP-C",
            GitHubLink: "https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/meetups/meetup01-Git",
            LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223500458/"
        }
    ];
});
