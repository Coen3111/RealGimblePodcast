document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const title = document.getElementById('podcast-title').value;
    const podcastFile = document.getElementById('podcast-file').files[0];
    const message = document.getElementById('message');

    if (password === 'Carronshore93') {
        if (title && podcastFile) {
            const podcastList = document.getElementById('podcast-list');
            const podcastItem = document.createElement('div');
            podcastItem.classList.add('podcast-item');

            const podcastTitle = document.createElement('h3');
            podcastTitle.textContent = title;

            const audioPlayer = document.createElement('audio');
            audioPlayer.controls = true;
            const audioSource = document.createElement('source');
            audioSource.src = URL.createObjectURL(podcastFile);
            audioSource.type = podcastFile.type;
            audioPlayer.appendChild(audioSource);

            podcastItem.appendChild(podcastTitle);
            podcastItem.appendChild(audioPlayer);
            podcastList.appendChild(podcastItem);

            message.textContent = 'Podcast uploaded successfully!';
            message.style.color = 'green';
            message.classList.remove('hidden');
        } else {
            message.textContent = 'Please fill in all fields.';
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
