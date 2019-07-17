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
    $scope.MeetupList = [{
            Name: "Privacy by Design (PbD)",
            Day: 11,
            Month: 07,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup47-PrivacyByDesign",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/262891225/",
            FacebookLink: "https://www.facebook.com/events/325745238316140/",
            IsFutureMeetup: 0
        },{
            Name: "Automated Testing",
            Day: 13,
            Month: 06,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup46-AutomatedTesting",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/261809354/",
            FacebookLink: "https://www.facebook.com/events/399494410779552/",
            IsFutureMeetup: 0
        },{
            Name: "Javascript",
            Day: 09,
            Month: 05,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup45-Javascript",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/261099327/",
            FacebookLink: "https://www.facebook.com/events/876335932712573/",
            IsFutureMeetup: 0
        },{
            Name: "DevOps",
            Day: 11,
            Month: 04,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup44-DevOps",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/260371485/",
            FacebookLink: "https://www.facebook.com/events/338129243715428/",
            IsFutureMeetup: 0
        },{
            Name: "Microservices",
            Day: 14,
            Month: 03,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup43-Microservices",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/259423881/",
            FacebookLink: "https://www.facebook.com/events/2064704723646127/",
            IsFutureMeetup: 0
        },{
            Name: "Startup Idea Validation Kit",
            Day: 07,
            Month: 02,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup42-StartupIdeaValidationKit",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/258288640/",
            FacebookLink: "https://www.facebook.com/events/2119402438129672/",
            IsFutureMeetup: 0
        },{
            Name: "Disaster Recovery: Beyond Backup Strategies",
            Day: 10,
            Month: 01,
            Year: 2019,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup41-DisasterRecovery",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/257759964/",
            FacebookLink: "https://www.facebook.com/events/232216687657699/",
            IsFutureMeetup: 0
        },{
            Name: "Elasticsearch",
            Day: 13,
            Month: 12,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup40-Elasticsearch",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/256432244/",
            FacebookLink: "https://www.facebook.com/events/250855415592125/",
            IsFutureMeetup: 0
        },{
            Name: "Cloud-native Applications.",
            Day: 08,
            Month: 11,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup39-CloudNative",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/255971225/",
            FacebookLink: "https://www.facebook.com/events/2196236280618639/",
            IsFutureMeetup: 0
        },{
            Name: "Remote Working: Hints, Tips, Advice, Pitfalls and open chat.",
            Day: 11,
            Month: 10,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup38-RemoteWorking",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/255294273/",
            FacebookLink: "https://www.facebook.com/events/258463324830250/",
            IsFutureMeetup: 0
        },{
            Name: "[Back to School] Lightning Talks",
            Day: 13,
            Month: 09,
            Year: 2018,
            Hour: "19:00",
            Location: "Leoforos Ikarou 5 · Heraklion",
            Location2: "Pancretan Cooperative Bank",
            GitHubLink: "https://github.com/devstaff-crete/meetup37-LightningTalks",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/254452437/",
            FacebookLink: "https://www.facebook.com/events/2198043040410854/",
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
            GitHubLink: "",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=35.338970%2C25.140550",
            MeetupLink: "https://www.meetup.com/devstaff/events/252182856/",
            FacebookLink: "",
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
            GitHubLink: "https://github.com/devstaff-crete/meetup35-IDEs",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
            MeetupLink: "https://www.meetup.com/devstaff/events/251061115/",
            FacebookLink: "https://www.facebook.com/events/340225439839401/",
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
            GitHubLink: "https://github.com/devstaff-crete/meetup34-GDPR",
            LocationLink: "https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%2C+Heraklion%2C+gr",
            MeetupLink: "https://www.meetup.com/devstaff/events/250184418/",
            FacebookLink: "https://www.facebook.com/events/907591992747749/",
            IsFutureMeetup: 0
        }, {
            Name: "Machine Learning",
            Day: 12,
            Month: 04,
            Year: 2018,
            Hour: "19:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup33-MachineLearning",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/248921759/",
            FacebookLink: "https://www.facebook.com/events/2139506102989049/"
        }, {
            Name: "From Coder to Manager",
            Day: 08,
            Month: 03,
            Year: 2018,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup32-FromCoderToManager",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/248331146/",
            FacebookLink: "https://www.facebook.com/events/2267792883246446/"
        }, {
            Name: "Functional Programming",
            Day: 15,
            Month: 02,
            Year: 2018,
            Hour: "20:30",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup31-FunctionalProgramming",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/247415782/",
            FacebookLink: "https://www.facebook.com/events/1012503398897528/"
        }, {
            Name: "Javascript - Node.js / React / Angular / etc.",
            Day: 11,
            Month: 01,
            Year: 2018,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup30-Javascript",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/244448622/",
            FacebookLink: "https://www.facebook.com/events/167304643877984/"
        },
        {
            Name: "Continuous Integration / Unit Testing:",
            Day: 14,
            Month: 12,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup29-CI",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/devstaff/events/244448616/",
            FacebookLink: "https://www.facebook.com/events/1786641664963033/"
        },
        {
            Name: "Microservices:",
            Day: 09,
            Month: 11,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup28-Microservices",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/244448594/",
            FacebookLink: "https://www.facebook.com/events/207976283079230/"
        },
        {
            Name: "Lightning Talks:",
            Day: 12,
            Month: 10,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup27-LightningTalks",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/preview/DevStaff-A-Developer-Community-Gathering-In-Crete/events/243718619/",
            FacebookLink: "https://www.facebook.com/events/538660716473509/"
        },
        {
            Name: "Bitcoin, Blockchain and the future:",
            Day: 14,
            Month: 09,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup26-BitcoinBlockchainETC",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/242708726/",
            FacebookLink: "https://www.facebook.com/events/1931164933807635/"
        },
        {
            Name: "Contrib­uting & Maintaining Open Source Software",
            Day: 06,
            Month: 07,
            Year: 2017,
            Hour: "19:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup24-CMOSS",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240658389/",
            FacebookLink: "https://www.facebook.com/events/473950916273621/"
        },
        {
            Name: "Types of Hosting",
            Day: 08,
            Month: 06,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup23-TypesOfHosting",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240025362/",
            FacebookLink: "https://www.facebook.com/events/302457336858215/"
        },
        {
            Name: "Agile Software Development",
            Day: 11,
            Month: 05,
            Year: 2017,
            Hour: "20:00",
            Location: "Ιδρύματα Α. & Μ. Καλοκαιρινού",
            Location2: "Monis Agkarathou 9, Iráklion",
            GitHubLink: "https://github.com/devstaff-crete/meetup22-AgileSoftwareDevelopment",
            LocationLink: "https://www.google.com/maps/place/%CE%9A%CE%BF%CE%B9%CE%BD%CF%89%CE%BD%CE%B9%CE%BA%CF%8C%CF%82+%CE%A7%CF%8E%CF%81%CE%BF%CF%82,+%CE%99%CE%B4%CF%81%CF%8D%CE%BC%CE%B1%CF%84%CE%B1+%CE%91.+%26+%CE%9C.+%CE%9A%CE%B1%CE%BB%CE%BF%CE%BA%CE%B1%CE%B9%CF%81%CE%B9%CE%BD%CE%BF%CF%8D/@35.3422929,25.1313681,17z/data=!4m13!1m7!3m6!1s0x149a5a2e4468d97b:0xc9b67f06818aa350!2sMonis+Agkarathou+9,+Iraklio+712+02,+Greece!3b1!8m2!3d35.3422929!4d25.1335568!3m4!1s0x149a5a2e443017fd:0xc010c2cffea2758c!8m2!3d35.3422929!4d25.1335568?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238460133/",
            FacebookLink: "https://www.facebook.com/events/855668337920511/"
        },
        {
            Name: "Remote Working",
            Day: 06,
            Month: 04,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup21-RemoteWorking",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238459952/",
            FacebookLink: "https://www.facebook.com/events/1242425105870998/"
        },
        {
            Name: "TOR",
            Day: 09,
            Month: 03,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup20-TOR",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237701354/",
            FacebookLink: "https://www.facebook.com/events/2010505249176756/"
        },
        {
            Name: "CMS",
            Day: 09,
            Month: 02,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup19-CMS",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237337066/",
            FacebookLink: "https://www.facebook.com/Devstaff/"
        },
        {
            Name: "Lightning Talks",
            Day: 12,
            Month: 01,
            Year: 2017,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup18-lightningTalks",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/236518707/",
            FacebookLink: "https://www.facebook.com/events/1845932942344262/"
        },
        {
            Name: "Large Scale",
            Day: 08,
            Month: 12,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup17-largescale",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235331576/",
            FacebookLink: "https://www.facebook.com/events/222250681549230/"
        },
        {
            Name: "React.js",
            Day: 10,
            Month: 11,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup16-ReactJs",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235052750/",
            FacebookLink: "https://www.facebook.com/events/1755437638054955/"
        },
        {
            Name: "SASS",
            Day: 13,
            Month: 10,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup14-Sass",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/234328426/",
            FacebookLink: "https://www.facebook.com/events/1326706860696128/"
        }, {
            Name: "Lightning talks",
            Day: 8,
            Month: 9,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup13-LightningTalks-SoftwareballGame",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/233882249/",
            FacebookLink: "https://www.facebook.com/events/553774438147534/"
        }, {
            Name: "Password Management",
            Day: 14,
            Month: 7,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup12-infosec",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/232532246/",
            FacebookLink: "https://www.facebook.com/events/830659580403057/"
        }, {
            Name: "NoSQL",
            Day: 9,
            Month: 6,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup11-NoSQL",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/231211928/",
            FacebookLink: "https://www.facebook.com/events/1093527610719589/"
        }, {
            Name: "Design Patterns",
            Day: 12,
            Month: 5,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup10-DesignPatterns",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/230538966/",
            FacebookLink: "https://www.facebook.com/Devstaff/"
        }, {
            Name: "IoT",
            Day: 14,
            Month: 4,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup09-IoT",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/229757515/",
            FacebookLink: "https://www.facebook.com/Devstaff/"
        }, {
            Name: "Business & StartUps",
            Day: 10,
            Month: 3,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup08-Startups",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228927029/",
            FacebookLink: "https://www.facebook.com/pg/Devstaff/"
        }, {
            Name: "Secure Development",
            Day: 11,
            Month: 2,
            Year: 2016,
            Hour: "20:00",
            Location: "Science & Technology Park of Crete",
            Location2: "STEP-C",
            GitHubLink: "https://github.com/devstaff-crete/meetup07-Security",
            LocationLink: "https://www.google.gr/maps/place/35%C2%B018'17.0%22N+25%C2%B004'25.1%22E/@35.3045299,25.0735486,19z/data=!4m2!3m1!1s0x0:0x0?hl=en,",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228230597/",
            FacebookLink: "https://www.facebook.com/pg/Devstaff/"
        }, {
            Name: "Mobile Development",
            Day: 14,
            Month: 1,
            Year: 2016,
            Hour: "20:00",
            Location: "Main Building",
            Location2: "FoRTH",
            GitHubLink: "https://github.com/devstaff-crete/meetup06-MobileDev",
            LocationLink: "https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en",
            MeetupLink: "http://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/227356464/",
            FacebookLink: "https://www.facebook.com/pg/Devstaff/"
        }, {
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
            FacebookLink: "https://www.facebook.com/events/401621840034759/"
        }, {
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
            FacebookLink: "https://www.facebook.com/events/1656715291235347/"
        }, {
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
            FacebookLink: "https://www.facebook.com/events/164747263869144/"
        }, {
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
            FacebookLink: "https://www.facebook.com/pg/Devstaff/"
        }, {
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
            FacebookLink: "https://www.facebook.com/pg/Devstaff/"
        }
    ];
});
