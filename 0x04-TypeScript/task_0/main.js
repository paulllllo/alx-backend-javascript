var st1 = {
    firstName: "dotun",
    lastName: "Okoro",
    age: 22,
    location: "Enugu"
};
var st2 = {
    firstName: "Idowu",
    lastName: "Nse",
    age: 25,
    location: "Akwa-Ibom"
};
var studentsList = [st1, st2];
studentsList.forEach(function (item) {
    console.log(item.firstName + " " + item.location);
});
