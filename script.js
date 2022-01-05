
var currentDate = moment().format("dddd, MMM Do");
$("#currentDay").text(currentDate);


var currentTime = parseInt(moment().format("H"));
// var timeBlock = $(".time-block").val();
for (let i = 9; i <= 17; i++) {
// console.log(typeof currentTime);
// console.log(typeof i);
$("saveBtn").click("#hour-" + i);
if (i < currentTime) {
    $("#hour-" + i).css("background-color", "gray");
}
if (i > currentTime) {
    $("#hour-" + i).css("background-color", "green");
    // console.log("green");
}
if (i == currentTime) {
    $("#hour-" + i).css("background-color", "red");
 }
}  
// console.log(timeBlock);
// $(document).click(select_element);


// $("saveBtn").click("#hour-" + i);

