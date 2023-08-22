var Duration = [
    {
        "Name": "How Personal Can Be Fit?",
        "duration": "2:30",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "The Power of Exercise",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Eating for a Healthy You",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Mindfulness and Well-being",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Stay Hydrated for Optimal Health",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Creating Healthy Habits",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "The Importance of Sleep",
        "duration": "3:30",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Stress Management Techniques",
        "duration": "2:45",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Benefits of a Balanced Diet",
        "duration": "3:15",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Building Strong Immunity",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Importance of Regular Check-ups",
        "duration": "2:30",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Managing Mental Health",
        "duration": "3:30",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Effective Workouts at Home",
        "duration": "3:15",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Healthy Snacking Choices",
        "duration": "2:45",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Boosting Energy Levels Naturally",
        "duration": "3:00",
        "url": "Assets/Audio/1.mp3"
    },
    {
        "Name": "Maintaining a Strong Heart",
        "duration": "3:15",
        "url": "Assets/Audio/1.mp3"
    }
    // Add more duration objects as needed
];

var mainContainer = document.getElementById('MainDetailsContainer');

Duration.forEach(function (item) {
    var detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-header';

    detailsContainer.innerHTML = `
      <div class="name-container">
        <p>${item.Name}</p>
      </div>
      <div class="reff">
        <p>${item.duration}</p>
      </div>
      <div class="Day">
        <button class="btn editbtns">Play</button>
      </div>
      <div style="display: none;">${item.url}</div>
      <audio controls style="display: none;">
        Your browser does not support the audio element.
      </audio>
      <hr class="border">
    `;

    mainContainer.appendChild(detailsContainer);

    var playButton = detailsContainer.querySelector('.editbtns');
    var audio = detailsContainer.querySelector('audio');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.src = item.url;
            audio.play();
            playButton.innerHTML = 'Pause';
        } else {
            audio.pause();
            audio.currentTime = 0;
            playButton.innerHTML = 'Play';
        }
    });
});