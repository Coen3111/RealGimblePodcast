/* Global Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #eaf6ff; /* Light blue background */
    color: #333;
    line-height: 1.6;
}

/* Header Styles */
.header {
    background-color: #70c1ff; /* Softer light blue */
    color: white;
    text-align: center;
    padding: 20px 10px;
    border-bottom: 4px solid #3399ff;
}

.header h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 600;
}

.header p {
    font-size: 1.2rem;
    margin: 10px 0 0;
    font-weight: 300;
}

/* Main Content Styles */
.main-content {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 1.8rem;
    color: #0056b3;
    margin-bottom: 15px;
    font-weight: 600;
}

/* Podcast List Styles */
#podcast-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.podcast-item {
    background-color: #f0f9ff;
    border: 1px solid #70c1ff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.podcast-item h3 {
    font-size: 1.4rem;
    color: #333;
    margin: 0 0 10px;
}

audio {
    width: 100%;
    margin-top: 10px;
    outline: none;
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: 600;
}

input, button {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #70c1ff;
    border-radius: 5px;
}

input:focus {
    outline: 2px solid #70c1ff;
}

button {
    background-color: #70c1ff;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3399ff;
}

/* Message Styles */
#message {
    margin-top: 10px;
    font-weight: bold;
}

.hidden {
    display: none;
}

/* Footer Styles */
.footer {
    text-align: center;
    padding: 15px;
    background-color: #eaf6ff;
    font-size: 0.9rem;
    color: #555;
}
