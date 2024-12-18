document.addEventListener('DOMContentLoaded', () => {
    // Load existing podcasts from localStorage
    const podcastList = JSON.parse(localStorage.getItem('podcasts')) || [];
    const podcastContainer = document.getElementById('podcast-list');

    podcastList.forEach((podcast) => {
        addPodcastToDOM(podcast.title, podcast.url, podcast.type);
    });
});

document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const podcastFile = document.getElementById('podcast-file').files[0];
    const podcastTitle = document.getElementById('podcast-title').value;
    const message = document.getElementById('message');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');

    if (password === 'Carronshore93') {
        if (podcastFile && podcastTitle) {
            const reader = new FileReader();
            let fakeProgress = 0;

            // Show the progress bar
            progressContainer.classList.remove('hidden');

            // Simulate progress if FileReader's onprogress doesn't work well
            const fakeProgressInterval = setInterval(() => {
                if (fakeProgress < 90) {
                    fakeProgress += 10;
                    progressBar.style.width = fakeProgress + '%';
                    progressBar.textContent = fakeProgress + '%';
                }
            }, 200);

            reader.onprogress = function (event) {
                if (event.lengthComputable) {
                    const percentLoaded = Math.round((event.loaded / event.total) * 100);
                    progressBar.style.width = percentLoaded + '%';
                    progressBar.textContent = percentLoaded + '%';
                }
            };

            reader.onload = function () {
                clearInterval(fakeProgressInterval);
                progressBar.style.width = '100%';
                progressBar.textContent = '100%';

                const podcastUrl = reader.result;
                const podcastType = podcastFile.type;

                // Save podcast to localStorage
                const podcastList = JSON.parse(localStorage.getItem('podcasts')) || [];
                podcastList.push({ title: podcastTitle, url: podcastUrl, type: podcastType });
                localStorage.setItem('podcasts', JSON.stringify(podcastList));

                // Add to DOM
                addPodcastToDOM(podcastTitle, podcastUrl, podcastType);

                // Reset progress bar and message
                setTimeout(() => {
                    progressBar.style.width = '0%';
                    progressBar.textContent = '';
                    progressContainer.classList.add('hidden');
                }, 1000);

                message.textContent = 'Podcast uploaded successfully!';
                message.style.color = 'green';
                message.classList.remove('hidden');
            };

            reader.onerror = function () {
                clearInterval(fakeProgressInterval);
                progressBar.style.width = '0%';
                progressBar.textContent = '';
                progressContainer.classList.add('hidden');

                message.textContent = 'Error uploading the file.';
                message.style.color = 'red';
                message.classList.remove('hidden');
            };

            reader.readAsDataURL(podcastFile);
        } else {
            message.textContent = 'Please provide a title and select a podcast file.';
            message.style.color = 'red';
            message.classList.remove('hidden');
        }
    } else {
        message.textContent = 'Incorrect password!';
        message.style.color = 'red';
        message.classList.remove('hidden');
    }

    // Clear the form
    document.getElementById('upload-form').reset();
});

function addPodcastToDOM(title, url, type) {
    const podcastContainer = document.getElementById('podcast-list');
    const podcastItem = document.createElement('div');
    podcastItem.className = 'podcast-item';

    // Add title
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    podcastItem.appendChild(titleElement);

    // Add media player
    let mediaElement;
    if (type.startsWith('audio')) {
        mediaElement = document.createElement('audio');
    } else if (type.startsWith('video')) {
        mediaElement = document.createElement('video');
    }
    mediaElement.controls = true;
    mediaElement.src = url;
    podcastItem.appendChild(mediaElement);

    podcastContainer.appendChild(podcastItem);
}
