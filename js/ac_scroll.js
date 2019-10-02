$(document).ready(function(){
    if($(window).scrollTop() < '850'){
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(1)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(1)').children('p').css('color', '#9E3334');
    }
    else if($(window).scrollTop() >= '1650'){
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(3)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(3)').children('p').css('color', '#9E3334');
    }
    else{
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(2)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(2)').children('p').css('color', '#9E3334');
    }
    $(window).scroll(
        function(){
            // console.log($(window).scrollTop());
            if($(window).scrollTop() < '850'){
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(1)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(1)').children('p').css('color', '#9E3334');
            }
            else if($(window).scrollTop() >= '1650'){
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(3)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(3)').children('p').css('color', '#9E3334');
            }
            else{
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(2)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(2)').children('p').css('color', '#9E3334');
            }
        }
    )
    var asideBar_box_length = $('.asideBar_box').length;
    for(let i=0; i<asideBar_box_length; i++){
        $('.asideBar_box').eq(i).click(function(){
            switch(i){
                case 0:
                    $('html,body').animate({ scrollTop: '50px' }, 500);
                    break;
                    
                case 1:
                    $('html,body').animate({ scrollTop: '850px' }, 500);
                    break;
                        
                case 2:
                    $('html,body').animate({ scrollTop: '1650px' }, 500);
                    break;
            }
        });
    }

});