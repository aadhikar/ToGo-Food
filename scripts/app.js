$(document).ready(function() {
    var img_array =[ "assets/food1.jpg", "assets/food3.jpg" ,"assets/food4.jpg"];
    var i=-1;

    var interval=setInterval(function(){slide()},5000);
    function slide()
    {
        i++;
        $('#banner').fadeOut(500,function(){$('#banner').attr('src',img_array[i]);
            if(i==2)
            {
                i=-1;
            }
            $('#banner').fadeIn(1000);})
        $('#banner').attr('src','assets/buffer_img.jpg');
    }});


$(document).ready(function() {
    $('.inner').hide();//to hide all the content div at beginning
    $('.inner-1').click(function()
    {
        $('.inner').not(($(this).next())).slideUp();
        $(this).next('.inner').slideToggle();
        //get the inner div which is next to h1 which is next to img(currnet clicked element)
    });
});