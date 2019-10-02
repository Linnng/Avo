// default
filterSelection("Baluga")
function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1)
            w3AddClass(x[i], "show");
    }
}

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



var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).ready(function(){

    //52行 抓到各標籤內的所有所屬btn 並依種類放入陣列 方便操作
    var fil = [$("#fil_commer .btn"), $("#fil_helicopters .btn"), $("#fil_activities .btn"), $("#fil_defense .btn")];

    //註冊 commercial 按鈕的click事件
    $("#commercial").click(function(){
        // document.getElementById("fas0").className = "fas";
        document.getElementById("fas1").className = "fas";
        document.getElementById("fas2").className = "fas";
        document.getElementById("fas3").className = "fas";

        var str = document.getElementById("fas0").className.split(" ");
        if(str[1] == "bright")
            document.getElementById("fas0").className = str[0];  
        else
            document.getElementById("fas0").className += " bright";  
               
    // 62~65 初始化 讓所有圖集btn都隱藏起來，但不初始化當前的圖集btn
        for(var i=0; i<fil.length; i++){
            if(i != 0)
                fil[i].toggle(false);
        }
    //當前的圖集btn 若點擊前的狀態是隱藏，此時則會改為顯示; 反之。
    // xxx.toggle(i); 參數i 可放變換時間 單位毫秒
        fil[0].toggle(300);          
    });

    //註冊 helicopters 按鈕的click事件
    $("#helicopters").click(function(){
        document.getElementById("fas0").className = "fas";
        document.getElementById("fas1").className = "fas";
        // document.getElementById("fas2").className = "fas";
        document.getElementById("fas3").className = "fas";
    
        var str = document.getElementById("fas2").className.split(" ");
        if(str[1] == "bright")
            document.getElementById("fas2").className = str[0];  
        else
            document.getElementById("fas2").className += " bright";   

        for(var i=0; i<fil.length; i++){
            if(i != 1)
                fil[i].toggle(false);
        }
        fil[1].toggle(300); 
    });

    //註冊 activities 按鈕的click事件
    $("#activities").click(function(){
        document.getElementById("fas0").className = "fas";
        document.getElementById("fas1").className = "fas";
        document.getElementById("fas2").className = "fas";
        // document.getElementById("fas3").className = "fas";
    
        var str = document.getElementById("fas3").className.split(" ");
        if(str[1] == "bright")
            document.getElementById("fas3").className = str[0];  
        else
            document.getElementById("fas3").className += " bright";   

        for(var i=0; i<fil.length; i++){
            if(i != 2)
                fil[i].toggle(false);
        }
        fil[2].toggle(300); 
    });

    //註冊 defense 按鈕的click事件
    $("#defense").click(function(){
        document.getElementById("fas0").className = "fas";
        // document.getElementById("fas1").className = "fas";
        document.getElementById("fas2").className = "fas";
        document.getElementById("fas3").className = "fas";
    
        var str = document.getElementById("fas1").className.split(" ");
        if(str[1] == "bright")
            document.getElementById("fas1").className = str[0];  
        else
            document.getElementById("fas1").className += " bright";   

        for(var i=0; i<fil.length; i++){
            if(i != 3)
                fil[i].toggle(false);
        }
        fil[3].toggle(300); 
    });

   
});
