// default
// eventBtn("EAA")

w3AddClass(document.getElementsByClassName("event_detail")[0], "show");
function eventBtn(c){
    var x, i;
    x = document.getElementsByClassName("event_detail");
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show showRWD");
        if (x[i].className.indexOf(c) > -1){
            w3AddClass(x[i], "show showRWD");
            w3AddClass(document.getElementsByClassName("events_wrap_left")[0], "showRWD");
        }
    }
}


$('.events_wrap_left').click(function(){
    $(this).children('div').removeClass("showRWD");
    $('.events_wrap_left').removeClass("showRWD");
});




// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
        }
    }
    element.className = arr1.join(" ");
}



var btns = document.getElementsByClassName("event_btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}