document.addEventListener('DOMContentLoaded', function () {
  var trigger1 = document.querySelector('#skip');
  var trigger2 = document.querySelector('#trigger2');
  var trigger3 = document.querySelector('#trigger3');
  var trigger4 = document.querySelector('#Part3');
  var trigger5 = document.querySelector('#Mitte');
  var trigger6 = document.querySelector('#Part5');
  
  var trigger7 = document.querySelector('#Part4');
  var trigger8 = document.querySelector('#trigger8');
  var trigger9 = document.querySelector('#Part6');
  
  
  


  
  var video1 = document.querySelector('#Portraet_1');
  var video2 = document.querySelector('#Portraet_2');
  var video3 = document.querySelector('#Portraet_3');
  var video4 = document.querySelector('#Portraet_4');
  var sub1 = document.querySelector('#subs_1');
  var sub2 = document.querySelector('#subs_2');
  var sub3 = document.querySelector('#subs_3');
  var sub4 = document.querySelector('#subs_4');

  // Function to start videos with a delay
  function startVideosWithDelay(video, subtitle) {
    setTimeout(function() {
      if (video && video.components.material.material.map.image) {
        video.components.material.material.map.image.play();
      }
      if (subtitle && subtitle.components.material.material.map.image) {
        subtitle.components.material.material.map.image.play();
      }
    }, 500); // 1000 milliseconds = 1 seconds
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

  trigger1.addEventListener('click', function () {
    startVideosWithDelay(video1, sub1);
  });

  trigger2.addEventListener('click', function () {
    startVideosWithDelay(video2, sub2);
    stopVideo(video1, sub1);
  });

  trigger3.addEventListener('click', function () {
    startVideosWithDelay(video3, sub3);
    stopVideo(video2, sub2);
  });

  trigger4.addEventListener('click', function () {
    startVideosWithDelay(video4, sub4);
    stopVideo(video3, sub3);
  });

  trigger5.addEventListener('click', function () {
    stopVideo(video4, sub4);
  });

  trigger6.addEventListener('click', function () {
    stopVideo(video2, sub2);
  });

  trigger7.addEventListener('click', function () {
    stopVideo(video3, sub3);
  });

  trigger8.addEventListener('click', function () {
    stopVideo(video4, sub4);
    startVideosWithDelay(video3, sub3);
  });
  
  trigger9.addEventListener('click', function () {
    stopVideo(video3, sub3);
    startVideosWithDelay(video2, sub2);
  });
 

 
});


// Function to show the plane for 20 seconds
     function showPlane() {
    var infoPlane = document.getElementById('Nutzerhinweis');
    infoPlane.setAttribute('visible', 'true');
}

function hidePlane() {
    var infoPlane = document.getElementById('Nutzerhinweis');
    infoPlane.setAttribute('visible', 'false');
}

document.addEventListener('DOMContentLoaded', function () {
    var scene = document.querySelector('a-scene');

    // Listen for the 'enter-vr' event
    scene.addEventListener('enter-vr', showPlane);

    // Listen for the click event on the button with id 'Part5'
    var button = document.getElementById('Part5');
    button.addEventListener('click', showPlane);

    var button = document.getElementById('Part4');
    button.addEventListener('click', showPlane);


    // Listen for the click event on the 'skip' button in the scene
    var skipButton = document.getElementById('skip');
    skipButton.addEventListener('click', hidePlane);
});

var inactivityDelay = 85000; // 50 Sekunden bis zum Countdown-Start
var countdownTime = 5; // 5 Sekunden Countdown
var inactivityTimer;
var countdownTimer;
var timerTextEntity;
var inactivityMonitoringStarted = false;

function restartApplication() {
    location.reload(); // Reloads the page to restart the application
}

function resetTimer() {
    clearTimeout(inactivityTimer); // Clears the current inactivity timer
    clearInterval(countdownTimer); // Stops the countdown timer
    timerTextEntity.setAttribute('text', 'value', ''); // Clears any countdown text
    inactivityTimer = setTimeout(startCountdown, inactivityDelay); // Sets a new inactivity timer
}

function startCountdown() {
    var remainingTime = countdownTime; // Initializes countdown time
    countdownTimer = setInterval(function () {
        // Updates the countdown display every second
        timerTextEntity.setAttribute('text', 'value', 'Bitte weiter, sonst Neustart in: ' + remainingTime + ' sec');
        remainingTime--;
        if (remainingTime < 0) {
            clearInterval(countdownTimer); // Stops the countdown timer
            restartApplication(); // Restarts the application
        }
    }, 1000); // Countdown interval in milliseconds
}

function setupInactivityTimer() {
    if (!inactivityMonitoringStarted) {
        // Ensures the timer is only set up once
        timerTextEntity = document.getElementById('timerText');
        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('mousedown', resetTimer);
        document.addEventListener('keypress', resetTimer);
        document.addEventListener('touchstart', resetTimer);
        document.addEventListener('scroll', resetTimer);

        // A-Frame-specific event listeners
        var sceneEl = document.querySelector('a-scene');
        sceneEl.addEventListener('click', resetTimer);
        sceneEl.addEventListener('touchstart', resetTimer);

        // A-Frame Raycaster interaction detection
        var raycastTargets = document.querySelectorAll('.clickable');
        raycastTargets.forEach(function (target) {
            target.addEventListener('click', resetTimer);
        });

        inactivityMonitoringStarted = true; // Marks that inactivity monitoring has started
        resetTimer(); // Initializes the first inactivity timer
    }
}

window.onload = function () {
    // Event listener for the #skip button
    var skipButton = document.getElementById('skip');
    if (skipButton) {
        skipButton.addEventListener('click', function () {
            setupInactivityTimer(); // Sets up the inactivity timer when #skip is clicked
        });
    }
};



