/* 
let myResume={
    "basics": {
      "name": "Arumugam",
      "email": "arumugamgkbsm@gamil.com",
      "phone": 9578741769,
      "degree": "B.Tech",
      "location": {
        "address": "10/228 seran sengutuvan street",
        "postalCode": 621203,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "education": [
        {
          "institution": "kongunadu College Of Engineering and technology",
          "department": "information technologgy",
          "studyType": "fulltime",
          "batch start year": 2019,
          "batch end year": 2023,
          "gpa": 7.5,
        },
      ],
      "languages": [
        {
          "language": "Tamil,Enlish",
        },
      ],
    },

}
console.log("myResume");
*/
    
/*
var json=[{
    "name":"arumugam",
    "age":38,
    "address":["chennai","trichy"]

}]
for (var i=0; i<json.length; i++){
    var obj = json[i];
    console.log("name");
    console.log("age");
}
*/
/*
var json=[{
    "name":"arumugam",
    "age":38,
    "address":["chennai","trichy"]

}]
json.forEach(function(obj) {
    console.log(obj.name); 
});
*/
/*
var json=[{
    "name":"arumugam",
    "age":38,
    "address":["chennai","trichy"]

}]
for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(json[key].name);
    }
}
*/
var json=[{
    "name":"arumugam",
    "age":38,
    "address":["chennai","trichy"]
}]
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);


     