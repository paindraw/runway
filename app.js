$num = $('.ui-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.ui-card:nth-child(' + $even + ')').addClass('active');
  $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.ui-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


// -----------------------------------------
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });




// --------------------------------------
const shareButton = document.querySelectorAll("button.shareButton")

shareButton[0].addEventListener("click", (e) => {
    for( let i=0; i < shareButton.length; i++ ) {
       shareButton[i].classList.toggle("open")
       shareButton[0].classList.remove("sent")
    }
})

for( let i=1; i < shareButton.length; i++ ) {
   
   shareButton[i].addEventListener("click", (e) => {
      
   for( let i=0; i < shareButton.length; i++ ) {
      shareButton[i].classList.toggle("open")
   }
   shareButton[0].classList.toggle("sent")
   })
}




// --------------------------
// $("a").attr("target", "_blank");

// var links = document.links;
// for (var i = 0; i < links.length; i++) {
//      links[i].target = "_blank";
// }



document.body.addEventListener(function(e) {
  var target = e.target;
  do {
      if (target.nodeName.toUpperCase() === 'A' && target.href) {
          target.target = '_blank';
          break;
      }
  } while (target = target.parentElement);
}, true);
