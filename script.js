var nineAM = $("#9amInput");
var tenAM = $("#10amInput");
var elevenAM = $("#11amInput");
var twelvePM = $("#12pmInput");
var onePM = $("#1pmInput");
var twoPM = $("#2pmInput");
var threePM = $("#3pmInput");
var fourPM = $("#4pmInput");
var fivePM = $("#5pmInput");

$(".saveBtn").click(function () {
    var userEvent = $("#9amInput").val();
    localStorage.setItem("9am", userEvent);
});
function DisplayEvent9() {
    $("#9amInput").val(localStorage.getItem("9am"))
}
DisplayEvent9();


$(".saveBtn").click(function () {
    var userEvent = $("#10amInput").val();
    localStorage.setItem("10am", userEvent);
});
function DisplayEvent10() {
    $("#10amInput").val(localStorage.getItem("10am"))
}
DisplayEvent10();


$(".saveBtn").click(function () {
    var userEvent = $("#11amInput").val();
    localStorage.setItem("11am", userEvent);
});
function DisplayEvent11() {
    $("#11amInput").val(localStorage.getItem("11am"))
}
DisplayEvent11();


$(".saveBtn").click(function () {
    var userEvent = $("#12pmInput").val();
    localStorage.setItem("12pm", userEvent);
});
function DisplayEvent12() {
    $("#12pmInput").val(localStorage.getItem("12pm"))
}
DisplayEvent12();

$(".saveBtn").click(function () {
    var userEvent = $("#1pmInput").val();
    localStorage.setItem("1pm", userEvent);
});
function DisplayEvent1() {
    $("#1pmInput").val(localStorage.getItem("1pm"))
}
DisplayEvent1();


$(".saveBtn").click(function () {
    var userEvent = $("#2pmInput").val();
    localStorage.setItem("2pm", userEvent);
});
function DisplayEvent2() {
    $("#2pmInput").val(localStorage.getItem("2pm"))
}
DisplayEvent2();


$(".saveBtn").click(function () {
    var userEvent = $("3pmInput").val();
    localStorage.setItem("3pm", userEvent);
});
function DisplayEvent3() {
    $("#3pmInput").val(localStorage.getItem("3pm"))
}
DisplayEvent3();

$(".saveBtn").click(function () {
    var userEvent = $("4pmInput").val();
    localStorage.setItem("4pm", userEvent);
});
function DisplayEvent4() {
    $("#4pmInput").val(localStorage.getItem("4pm"))
}
DisplayEvent4();

$(".saveBtn").click(function () {
    var userEvent = $("5pmInput").val();
    localStorage.setItem("5pm", userEvent);
});
function DisplayEvent4() {
    $("#5pmInput").val(localStorage.getItem("5pm"))
}
DisplayEvent5();