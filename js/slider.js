
$(document).ready(function(){
    var i = 0;
    
    $('.home_manu_box:nth-child(1)').addClass('active');
    setInterval(function(){
        if(i==0){
            $('.home_manu_box:nth-child(2)').addClass('active');
            $('.home_manu_box:nth-child(4)').removeClass('active');
            // alert(i);
            i++;
        }
        else if(i==1){
            $('.home_manu_box:nth-child(2)').removeClass('active');
            $('.home_manu_box:nth-child(3)').addClass('active');
            // alert(i);
            i++;
        }
        else{
            $('.home_manu_box:nth-child(3)').removeClass('active');
            $('.home_manu_box:nth-child(4)').addClass('active');
            // alert(i);
            i=0;
        }
    }, 3000);
});