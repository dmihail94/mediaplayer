$('video').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'fullscreen', 'skipback'],
  startLanguage: 'en',
  skipBackInterval: 10,
});

/*-----Vanilla JS-----

var video = document.querySelector('#video');
var script = document.querySelectorAll('.transcript span');
var scriptLen = script.length;

video.addEventListener('timeupdate', function() {
  for (let i = 0; i < scriptLen; i++) {

    let start = script[i].getAttribute('data-start');
    let end = script[i].getAttribute('data-end');
    let currentTime = video.getCurrentTime();

    if (currentTime >= start && currentTime <= end) {
      script[i].classList.add('highlight');
    } else {
      script[i].classList.remove('highlight');
    }

    script[i].addEventListener('click',function() {
      const transcriptTime = script[i].getAttribute('data-start');
	    if(transcriptTime){
	    video.setCurrentTime(transcriptTime);
    }
    });
  }
});
*/

//----jQuery-----

let video = $('#video');
let script = $('.transcript span');

let scriptLen = script.length;

video.on('timeupdate', function() {
  for (let i = 0; i < scriptLen; i++) {

    let currentTime = video[0].getCurrentTime();
    let start = $(script[i]).attr('data-start');
    let end = $(script[i]).attr('data-end');

    //ternary operator(if currentTime is greatest than the start time and is lowest than the end time,add class else remove class)
    currentTime >= start && currentTime <= end ? $(script[i]).addClass('highlight') : $(script[i]).removeClass('highlight');

    $(script[i]).click(function() {
      const transcriptTime = $(script[i]).attr('data-start');

      if (transcriptTime) {
        video[0].setCurrentTime(transcriptTime);
      }
    });

  }
});
