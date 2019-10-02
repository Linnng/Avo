$(document).ready(function(){
    if($(window).scrollTop() < '400'){
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(1)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(1)').children('p').css('color', '#9E3334');
    }
    else if($(window).scrollTop() >= '400' && $(window).scrollTop() < '1400'){
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(2)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(2)').children('p').css('color', '#9E3334');
    }
    else if($(window).scrollTop() >= '1400' && $(window).scrollTop() < '1800'){
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(3)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(3)').children('p').css('color', '#9E3334');
    }
    else{
        $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
        $('.asideBar_box').children('p').css('color', '#5f5f5f');

        $('.asideBar_box:nth-child(4)').children('.asideBar_line').css('background', '#9E3334');
        $('.asideBar_box:nth-child(4)').children('p').css('color', '#9E3334');
    }
    $(window).scroll(
        function(){
            console.log($(window).scrollTop());
            if($(window).scrollTop() < '600'){
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(1)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(1)').children('p').css('color', '#9E3334');
            }
            else if($(window).scrollTop() >= '600' && $(window).scrollTop() < '1600'){
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(2)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(2)').children('p').css('color', '#9E3334');
            }
            else if($(window).scrollTop() >= '1600' && $(window).scrollTop() < '2000'){
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(3)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(3)').children('p').css('color', '#9E3334');
            }
            else{
                $('.asideBar_box').children('.asideBar_line').css('background', '#ccc');
                $('.asideBar_box').children('p').css('color', '#5f5f5f');

                $('.asideBar_box:nth-child(4)').children('.asideBar_line').css('background', '#9E3334');
                $('.asideBar_box:nth-child(4)').children('p').css('color', '#9E3334');
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
                    $('html,body').animate({ scrollTop: '600px' }, 600);
                    break;
                        
                case 2:
                    $('html,body').animate({ scrollTop: '1700px' }, 500);
                    break;
                case 3:
                    $('html,body').animate({ scrollTop: '2150px' }, 500);
                    break;
            }
        });
    }

});