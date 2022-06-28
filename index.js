$('document').ready(function(){


$("#para3").hide();
$('.qoute').click(function(){
console.log("You Clicked It");
$('#para3').css({"position":"absolute","top":"60%","left":"40%","font-size":"20px","color":"red","background-color":"blue"})
    $('#para3').show(5000);

$('.qoute').hide(5000);
})


// let p=document.getElementById("para1");
$('#para1').dblclick( function()
{
   
    $('#para1').css("font-size","20px")
    console.log("You Hovered P Tag");
    // p.style.fontSize="40px";  // its using js dom manipulation 
    $('#para2').css({"position":"absolute","top":"70%","color":"white"})
    $("#para2").slideUp(4000);
}
)})


$('#para2').mouseleave( function()
{
    // $('#para3').show(7000);
    $('#para2').animate({opacity:0.3 },3000)
})

// $('#para3').( function()
// {
//     $('#para2').css({"position":"absolute","top":"70%","color":"white"})
// })



    // demoing the on method
//     $('p').on(
//         {
//             click: function () {
//                 console.log('Thanks for clicking', this);
//             },
//             mouseleave: function () {
//                 console.log("mouseleave");
// }})



    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  
    // $('#but').click(function () {
    //     $('#wiki').fadeOut(5000);
    // })

    //     fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideToggle(1000)

    // Animate function in jQuery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'

    // }, "fast")
    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);

    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()

    //     $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')

    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

function myFunction(){
    // console.log("Hello World");
    let x= document.getElementById("response");
    if(x.className==="navbar"){
        x.className+= " responsive";
    }
    else{
        x.className="navbar";
    }
}



//Searching Functionality

let arr=['jack','lamda','kutta','billi']
let input=document.getElementById("search");
let Response= document.getElementById("thought");
input.addEventListener("input",()=>{
let val=input.value;    
// console.log(val);
for(let i=0;i<arr.length;i++){
    if(val.charAt(0)==arr[i].charAt(0)){
    Response.innerHTML=`<h1 class="qoute">${arr[i]} </h1>`
    console.log(arr[i]);
        break;
}
Response.innerHTML=`<h1 class="qoute">${val}</h1>`

}
})