$(function(){


var window_height = $(window).height();
var hash_location = location.hash;

function show_amitus_letter(num){
$('.amitus_letter:nth-child('+num+')').addClass('show');
setTimeout(function(){
$('.amitus_letter:nth-child('+num+')').removeClass('show');
},200);
}


setTimeout(function(){
$('.slide_nav_new_menu_container').addClass('show');
},6500);


function add_message(name,email,message){

var add_message1 = $.ajax({
url:"process.php",
type:"POST",
data:{name:name,email:email,message:message}
});

setTimeout(function(){
$('.contact_form_result_name_name').html(name);
$('.contact_form_result').addClass('show');
},50);

add_message1.done(function(data){
console.log(data);
});

}


$('.contact_form_result_close').bind('click',function(){

$('.contact_form_result').removeClass('show');

});


$('#contact_form').submit(function(){

var name = $('.contact_form_name').val();
var email = $('.contact_form_email').val();
var message = $('#contact_form_textarea').val();
console.log('name: '+name+' email: '+email+' message: '+message);
name = name.trim();
email = email.trim();
message = message.trim();

add_message(name,email,message);
return false;
});



function blink_amitus(){
var blink_amitus_interval = setInterval(function(){
var rand_num = Math.random()*10;
rand_num = Math.floor(rand_num);
show_amitus_letter(rand_num);
},100);
setTimeout(function(){
clearInterval(blink_amitus_interval);
setTimeout(function(){
$('.amitus_letter').addClass('show');
},200);
},3500);
}

setTimeout(function(){
$('.opening_top_word').addClass('visible');
setTimeout(function(){
blink_amitus();
},1800);
},1400);

$('.slide_nav_new_menu_container').bind('click',function(e){
if($('.slide_nav_new_menu_container').hasClass('open')){
$('.slide_nav_menu_line, .slide_nav_new_menu_container').removeClass('open');
$('body').removeClass('show_overlay');
setTimeout(function(){
$('.menu_list_item').addClass('show');
},500);
}else{
e.stopPropagation();
$('.menu_list_item').addClass('show');
setTimeout(function(){
$('.slide_nav_menu_line, .slide_nav_new_menu_container').addClass('open');
$('body').addClass('show_overlay');
},500);
}
});


$('.menu_inner_container ul').bind('click',function(e){

console.log('menu list item click');

if(e.target.nodeName == 'LI'){
var child_id = e.target.id;
console.log(child_id);
var scroll_elem = $('#'+child_id).attr('data-elem');
var scroll_top = $('#'+scroll_elem).offset();
var scroll_top1 = scroll_top.top;
$('.slide_nav_menu_line, .slide_nav_new_menu_container').removeClass('open');
$('body').removeClass('show_overlay');
setTimeout(function(){
$('html,body').animate({scrollTop:scroll_top1},800);
},700);
}

});

$('.circles_container').bind('click',function(e){

if(e.target.nodeName == 'DIV'){

//$('.slide_nav_menu_line, .slide_nav_menu_container1').addClass('open');
//$('body').addClass('show_overlay');

setTimeout(function(){
var child_id = e.target.id;
console.log(child_id);
var scroll_elem = $('#'+child_id).attr('data-elem');
var scroll_top = $('#'+scroll_elem).offset();
var scroll_top1 = scroll_top.top;
console.log(scroll_top1);
$('html,body').animate({scrollTop:scroll_top1},800);
},400);



}

});


var testimonial_index = 0;

var clients_interval = setInterval(function(){
show_next_testimonial();
},4000);


function show_next_testimonial(){
if(testimonial_index == 5){
testimonial_index = 1;
}else{
testimonial_index++;
}
$('.clients_testimonials_item').removeClass('visible');
$('.clients_testimonials_item:nth-child('+testimonial_index+')').addClass('visible');
}


$('.clients_testimonials_logo').bind('click',function(){
clearInterval(clients_interval);
$('.clients_testimonials_item').removeClass('visible');
var index = $(this).attr('data-message-index');
$('.clients_testimonials_item:nth-child('+index+')').addClass('visible');
});



$('.overlay').bind('click',function(){

$('.overlay').removeClass('visible');
$('.menu_container').removeClass('visible');

});

$('.slide_nav_container').bind('click',function(e){
e.stopPropagation();
});


$('.menu_container_close').bind('click',function(){

$('body').removeClass('overlay_visible');
$('.container').removeClass('hide');
});



function show_second_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '100%'
});

setTimeout(function(){
show_third_text();
},3000);
}

function show_third_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '200%'
});

setTimeout(function(){
show_fourth_text();
},3000);
}

function show_fourth_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '300%'
});

setTimeout(function(){
show_first_text();
},3000);
}

function show_first_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '0px'
});

setTimeout(function(){
show_second_text();
},3000);
}

setTimeout(function(){

$('.opening_title_container').addClass('move_start_slide_up');
$('.slide_sentence').addClass('show_sentence_start');
setTimeout(function(){
$('.slide_nav_new_menu_container').addClass('show_menu');
},800);

setTimeout(function(){

$('.slide_sentence').removeClass('show_sentence_start');
$('.slide_text_inner_words_inner_container').addClass('visible');
show_first_text();

},3500);

},7600);


$('.morph_container').bind('click',function(){

var works_index = $(this).attr('data-works-index');
//$(this).addClass('hide');
$('#morph_div_container'+works_index).addClass('show_morph').css({
'overflow-y':'scroll'
});


});



$('.morph_div_close_container').bind('click',function(){

var data_works_index = $(this).attr('data-works-index');
//$('#works_item_container'+data_works_index).removeClass('hide');
$('.morph_div_container').removeClass('show_morph');
$('body').css({
'overflow-y' : 'visible'
});
});


$('.start_your_project_container').bind('click',function(){

$('.project_info_container').addClass('show_project');

});


$('.project_info_close').bind('click',function(){

$('.project_info_container').removeClass('show_project');
});

var show_team = false;

setInterval(function(){

var scrolled = $(document).scrollTop();
console.log(scrolled);
if(scrolled >= 500){
show_team = true;
show_timeline_elements(scrolled);
}

},100);

$(window).scroll(function(){

if(show_team === true){
$('#our_team_heading').addClass('show_team');
$('.team_member_container').addClass('show_team');
}

});


function flip_works(){

}

function show_timeline_elements(scroll_top){

var timeline_offset = $('#timeline_container').offset().top;

if(scroll_top > timeline_offset-100){

if(scroll_top > timeline_offset-100){

show_timeline_ball('timeline_ball1');
show_timeline_desc('timeline_event_desc1');

}

if(scroll_top > timeline_offset-50 && scroll_top < timeline_offset+100){

show_timeline_ball('timeline_ball2');
show_timeline_desc('timeline_event_desc2');

}

if(scroll_top > timeline_offset+100 && scroll_top < timeline_offset+250){

show_timeline_ball('timeline_ball3');
show_timeline_desc('timeline_event_desc3');

}


if(scroll_top > timeline_offset+250 && scroll_top < timeline_offset+400){

show_timeline_ball('timeline_ball4');
show_timeline_desc('timeline_event_desc4');

}


if(scroll_top > timeline_offset+400 && scroll_top < timeline_offset+550){

show_timeline_ball('timeline_ball5');
show_timeline_desc('timeline_event_desc5');

show_timeline_ball('timeline_ball6');
show_timeline_desc('timeline_event_desc6');

}


}

}


setTimeout(function(){
if(hash_location !== 0){
//$('html,body').animate({scrollTop:window_height},800);
}
},1200);


function show_timeline_ball(ball_id){
$('#'+ball_id).addClass('visible');
}

function show_timeline_desc(desc_id){
$('#'+desc_id).addClass('visible');
}


$('.contact_form_list_input, #contact_form_textarea').bind('keypress',function(){

$(this).parent().children('.contact_form_list_label').addClass('show');

});


});