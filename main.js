$(document).ready(function(){
$('.fa-bars').click(function(){
$(this).toggleClass('fa-times');
$('.navbar').toggleClass('nav-toggle');
});
$('.fa-bars').onscroll(function(){
    $(this).toggleClass('.fa-times');
    $('.navbar').removeClass('nav-toggle');
})
});