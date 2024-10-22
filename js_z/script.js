  
  
document.addEventListener('DOMContentLoaded', function () {
  
  var stop = document.querySelector('#stopButton');
  var play = document.querySelector('#playButton');
  
  var trigger1 = document.querySelector('#trigger1');
  var trigger2 = document.querySelector('#trigger2');
  var trigger3 = document.querySelector('#trigger3');
  var trigger4 = document.querySelector('#trigger4');
  
    var trigger5 = document.querySelector('#trigger5');
    var trigger6 = document.querySelector('#trigger6');
    var trigger6_1 = document.querySelector('#trigger6_1');
    var trigger6_2 = document.querySelector('#trigger6_2');

    var trigger7 = document.querySelector('#trigger7');
    var trigger8 = document.querySelector('#trigger8');
  
  
    var trigger9 = document.querySelector('#trigger9');
  var trigger11 = document.querySelector('#trigger11');
  var trigger11_1 = document.querySelector('#trigger11_1');
   var trigger12 = document.querySelector('#trigger12');
     var trigger13 = document.querySelector('#trigger13');
       var trigger14 = document.querySelector('#trigger14');

       var trigger15_1 = document.querySelector('#trigger15_1');
       var trigger15_2 = document.querySelector('#Part6');
  
     var trigger16 = document.querySelector('#trigger16');
   var trigger17 = document.querySelector('#trigger17');
 var trigger18 = document.querySelector('#trigger18');
   var trigger19 = document.querySelector('#trigger19');
  
   var trigger21 = document.querySelector('#trigger21');
     var trigger22 = document.querySelector('#trigger22');
     var trigger23 = document.querySelector('#trigger23');
       var trigger24 = document.querySelector('#trigger24');
         var trigger25 = document.querySelector('#trigger25');
   var trigger26 = document.querySelector('#trigger26');
   var trigger27 = document.querySelector('#trigger27');
   var trigger28 = document.querySelector('#trigger28');

  
    var trigger29 = document.querySelector('#trigger29');
      var trigger31 = document.querySelector('#trigger31');
    var trigger32 = document.querySelector('#trigger32');
     var trigger33 = document.querySelector('#trigger33');

  
  var portrait1 = document.querySelector('#portrait1');
  var portrait2 = document.querySelector('#portrait2');
  var portrait3 = document.querySelector('#portrait3');
  
  var portrait4 = document.querySelector('#portrait4');
  var portrait5 = document.querySelector('#portrait5');
  var portrait6 = document.querySelector('#portrait6');

  var portrait7 = document.querySelector('#portrait7');
  var portrait8 = document.querySelector('#portrait8');
  var portrait9 = document.querySelector('#portrait9');
  var portrait11 = document.querySelector('#portrait11');
  
  
  var portrait12 = document.querySelector('#portrait12');
    var portrait13 = document.querySelector('#portrait13');
    var portrait14 = document.querySelector('#portrait14');
    var portrait15 = document.querySelector('#portrait15');
   var portrait16 = document.querySelector('#portrait16');
  
  
  var portrait17 = document.querySelector('#portrait17');
   var portrait18 = document.querySelector('#portrait18');
   var portrait19 = document.querySelector('#portrait19');
  var Glaslied = document.querySelector('#Glaslied_subs');
  var Flagge2 = document.querySelector('#Flagge_Animation');
  
  


  var sub1 = document.getElementById('subs_cam_1');
  var sub2 = document.getElementById('subs_cam_2');
  var sub3 = document.getElementById('subs_cam_3');
  var sub4 = document.getElementById('subs_cam_4');
  var sub5 = document.getElementById('subs_cam_5');
  var sub6 = document.getElementById('subs_cam_6');
  var sub7 = document.getElementById('subs_cam_7');
  var sub8 = document.getElementById('subs_cam_8');
  var sub9 = document.getElementById('subs_cam_9');
  var sub11 = document.getElementById('subs_cam_11');
  var sub12 = document.getElementById('subs_cam_12');
  var sub13 = document.getElementById('subs_cam_13');
  var sub14 = document.getElementById('subs_cam_14');
  var sub15 = document.getElementById('subs_cam_15');
  var sub16 = document.getElementById('subs_cam_16');
  var sub17 = document.getElementById('subs_cam_17');
  var sub18 = document.getElementById('subs_cam_18');
  var sub19 = document.getElementById('subs_cam_19');
  var sub21 = document.getElementById('subs_cam_21');
  var sub22 = document.getElementById('subs_cam_22');
  

  

  
  // Function to start videos with a delay
  function startVideosWithDelay(video, subtitle) {
    setTimeout(function() {
      if (video && video.components.material.material.map.image) {
        video.components.material.material.map.image.play();
      }
      if (subtitle && subtitle.components.material.material.map.image) {
        subtitle.components.material.material.map.image.play();
      }
    }, 0); // 1000 milliseconds = 1 second
  }

  // Function to stop video and subtitle
  function stopVideo(video, subtitle) {
    if (video && video.components.material.material.map.image) {
      var videoElement = video.components.material.material.map.image;
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.load(); // Reset the video
    }
    if (subtitle && subtitle.components.material.material.map.image) {
      var subtitleElement = subtitle.components.material.material.map.image;
      subtitleElement.pause();
      subtitleElement.currentTime = 0;
      subtitleElement.load(); // Reset the subtitle
    }
  }

  // Function to play video with a specific time range
  function playVideoWithRange(video, start, end) {
    if (video && video.components.material.material.map.image) {
      var videoElement = video.components.material.material.map.image;
      videoElement.currentTime = start;
      videoElement.play();
      videoElement.ontimeupdate = function () {
        if (videoElement.currentTime >= end) {
          videoElement.pause();
          videoElement.ontimeupdate = null; // Remove event listener
        }
      };
    }
  }

  trigger1.addEventListener('click', function () {
        startVideosWithDelay(portrait1, sub1);
  });

    trigger2.addEventListener('click', function () {
      startVideosWithDelay(portrait2, sub2);
      stopVideo(portrait1, sub1);
    
  });

  trigger3.addEventListener('click', function () {
    startVideosWithDelay(portrait3, sub3);
stopVideo(portrait2, sub2);
  });
  
   trigger4.addEventListener('click', function () {
  stopVideo(portrait3, sub3);

  });
  
   trigger5.addEventListener('click', function () {
    startVideosWithDelay(portrait4, sub4);

  });
  
    trigger6.addEventListener('click', function () {
    startVideosWithDelay(portrait5, sub5);
      stopVideo(portrait4, sub4);

  });
  
      trigger6_1.addEventListener('click', function () {
      stopVideo(portrait4, sub4);
  });
  
  trigger6_2.addEventListener('click', function () {
      startVideosWithDelay(portrait4, sub4);
  });
  
    trigger7.addEventListener('click', function () {
    startVideosWithDelay(portrait6, sub6, Flagge2);
      stopVideo(portrait5, sub5);

  });
  
    trigger8.addEventListener('click', function () {
      stopVideo(portrait6, sub6);

  });
  
   trigger9.addEventListener('click', function () {
      startVideosWithDelay(portrait7, sub7);

  });
  
    trigger11.addEventListener('click', function () {
      startVideosWithDelay(portrait8, sub8);
         stopVideo(portrait7, sub7);

  });

  trigger11_1.addEventListener('click', function () {
    startVideosWithDelay(portrait7, sub7);
       stopVideo(portrait8, sub8);

});
  
  trigger12.addEventListener('click', function () {
      startVideosWithDelay(portrait9, sub9);
         stopVideo(portrait8, sub8);

  });
  
    trigger13.addEventListener('click', function () {
      startVideosWithDelay(portrait11, sub11);
         stopVideo(portrait9, sub9);

  });
  
    trigger14.addEventListener('click', function () {
         stopVideo(portrait11, sub11);

  });

  trigger15_1.addEventListener('click', function () {
    startVideosWithDelay(portrait9, sub9);
    stopVideo(portrait11, sub11);
});

trigger15_2.addEventListener('click', function () {
  startVideosWithDelay(portrait8, sub8);
  stopVideo(portrait9, sub9);
});
  
      trigger16.addEventListener('click', function () {
          startVideosWithDelay(portrait12, sub12);

  });
  
   trigger17.addEventListener('click', function () {
stopVideo(portrait12, sub12);
  });
  
    trigger18.addEventListener('click', function () {
       startVideosWithDelay(portrait13, sub13);

  });
  
   trigger19.addEventListener('click', function () {
       stopVideo(portrait13, sub13);

  });
  
     trigger21.addEventListener('click', function () {
       startVideosWithDelay(portrait12, sub12);

  });
  
    trigger22.addEventListener('click', function () {
       startVideosWithDelay(portrait14, sub15);


  });
  
    trigger23.addEventListener('click', function () {
       startVideosWithDelay(portrait15, sub16);
                   stopVideo(portrait14, sub15);


  });
  
    trigger24.addEventListener('click', function () {
       startVideosWithDelay(portrait16, sub17);
                         stopVideo(portrait15, sub16);

  });
  
   trigger25.addEventListener('click', function () {
      stopVideo(portrait16, sub17);

  });
  
   trigger26.addEventListener('click', function () {
       startVideosWithDelay(portrait16, sub17);
  });
  
     trigger27.addEventListener('click', function () {
      startVideosWithDelay(sub18);
       stopVideo(portrait16, sub17);
  });
  
     trigger28.addEventListener('click', function () {
      startVideosWithDelay(portrait14, sub15);
       stopVideo(portrait15, sub16);
  });
  
     trigger29.addEventListener('click', function () {
      startVideosWithDelay(portrait17, sub19);

  });
  
     trigger31.addEventListener('click', function () {
      startVideosWithDelay(portrait18, sub21);
       stopVideo(portrait17, sub19);
       stopVideo(Glaslied);
  });
  
     trigger32.addEventListener('click', function () {
      startVideosWithDelay(portrait19, sub22);
       stopVideo(portrait18, sub21);
  });
  
       trigger33.addEventListener('click', function () {
       stopVideo(portrait19, sub22);
  });
  
  
     play.addEventListener('click', function () {
       startVideosWithDelay(Glaslied);
       stopVideo(portrait17, sub19);
  });
  
  
     stop.addEventListener('click', function () {
       stopVideo(Glaslied);
  });
  
  
  



});

AFRAME.registerComponent('videohandler', {
  init: function () {
    var el = this.el;
    var videoEntity = document.querySelector('#video-entity');
    el.addEventListener('click', function () {
      videoEntity.setAttribute('visible', true);
      videoEntity.components.material.material.map.image.play();
    });
  }
});




document.addEventListener('DOMContentLoaded', function () {
        const trigger6 = document.querySelector('#trigger32');
        const trigger7 = document.querySelector('#trigger33');
        const Glas = document.querySelector('#Glas');
        const oglas = document.querySelector('#Ochsenkopfglas');

        // Event Listener für trigger6
        trigger6.addEventListener('click', function () {
          // Animation 1 nach 8 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.843 1.400 -4.095',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 8000);

          // Animation 2 nach 20 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.843 1.400 -4.095',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 20000);

          // Animation 3 nach 30 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.843 1.400 -4.095',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 30000);

          // Animation 4 nach 40 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: '-0.676 1.230 -5.2',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 42000);

          

          // Animation 6 nach 20 Sekunden
          setTimeout(() => {
            oglas.setAttribute('animation', {
              property: 'rotation',
              to: '0 -179 0',
              dur: 12000,
              easing: 'easeInOutQuad'
            });
          }, 21000);

          // Animation 7 nach 31 Sekunden
          setTimeout(() => {
            oglas.setAttribute('animation', {
              property: 'rotation',
              to: '0 179 0',
              dur: 15000,
              easing: 'easeInOutQuad'
            });
          }, 32000);
        });

        // Event Listener für trigger7 (Reset-Trigger)
        trigger7.addEventListener('click', function () {
          // Zurücksetzen von Glas
          Glas.setAttribute('position', '-0.676 1.240 -5.2');
          Glas.setAttribute('animation', {
            property: 'position',
            to: '-0.676 1.230 -5.2',
            dur: 0, // Sofort zurücksetzen
            easing: 'linear'
          });

          // Zurücksetzen von Ochsenkopfglas
          oglas.setAttribute('rotation', '0 200 0');
          oglas.setAttribute('animation', {
            property: 'rotation',
            to: '0 190 0',
            dur: 0, // Sofort zurücksetzen
            easing: 'linear'
          });
        });
      });

  