var bio = {
    "name": "johannes ",
    "role": "Quality / Web Developer", 
    "welcome": "Welcome to my resume page",
    "contacts": {
      "email": "johannes9@gmail.com",
      "github": "midnigtoil",
      "codingforums": "brandnew",
      "location": "San Dimas, CA"
},
    "skills": [
       "HTML", "CSS", "JavaScript", "PCDMIS 3.7", "AS9100 Rev. C", "Geometric Dimensioning and Tolerancing", "First Article Inspection - AS9102"
],
    "bioPic": "http://lorempixel.com/g/400/300"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var work = {
    "jobs": [
          {
            "employer": "Name N/A",
            "title": "quality manager",
            "city": "Fontana, CA",
            "dates": "03/12 - Current",
            "description": "Maintain AS9100 Rev. C standard across company, utilize web development to centralize Quality document / requirements."
          },
          {
            "employer": "Name N/A",
            "title": "quality engineer",
            "city": "Fontana, CA",
            "dates": "01/12 - 03/2012",
            "description": "learn and work"
          }, 
          {
             "employer": "PaperPak Industries",
             "title": "quality engineer",
            "city": "La Verne, CA",
            "dates": "12/07 - 12/08",
            "description": "Report Creation of Product properties"
          }
            ]
}

var projects = {
    "projects": [
          {
            "title":"Project 1",
            "dates":"July 2015",
            "description":"Portofolio Web page setup to link different completed projects",
            "images": [
                "images/project1.jpg"
                      ]
          },
          {
            "title": "Project 2",
            "dates": "August 2015",
            "description": "Resume Portofolio Web page setup to link different completed projects",
            "images": [
                  "images/project2.jpg"
                      ]
          }
          
                ]
}

projects.display = function() {
  for(var project in projects.projects) {
  $("#projects").append(HTMLprojectStart);
  
  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);
  
  var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);
  
  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if(projects.projects[project].images.length>0){
    for(var image in projects.projects[project].images){
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
  }
}

var education = {
      "schools": [
            {
              "name": "Covina High School",
              "city": "Covina, CA",
              "diploma": "HS Diploma",
              "dates": 1996
            },
            {
              "name": "UCSD",
              "city":" La Jolla, CA",
              "major": "Economics", 
              "dates": "2001"
            }
                ],
      "onlineCourses": [
            {
              "name": "Udacity",
              "program": "Nano - Front End Developer",
              "dates": "July 2015 - current"
            }
                       ]
}

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedCoding = HTMLcodingforums.replace("%data%", bio.contacts.codingforums);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedWelcome);
$("#header").append(formattedHTMLbioPic);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedCoding);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(internationalizeButton);
$("#mapDiv").append(googleMap);

if(bio.skills.length>0){
$("#header").append(HTMLskillsStart);
for(var skill in bio.skills){
var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
$("#skills").append(formattedSkill);
}
}

function displayWork(){
for(var x in work.jobs){
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
var formattedEmployerTitle = formattedEmployer + formattedtitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
$(".work-entry:last").append(formattedDescription);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
$(".work-entry:last").append(formattedWorkLocation);
}
}


displayWork();
projects.display();

function inName(name){
var str = name.toUpperCase();
var space = name.indexOf(" ");
return str.charAt(0)+str.slice(1,space).toLowerCase()+str.slice(space);
}
