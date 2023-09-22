// Variables to store start and end times
let startTime;
let endTime;

// Reference to the start button and time display
const startButton = document.getElementById('startButton');
const timeTakenDisplay = document.getElementById('timeTaken');

// Event listener for the start button
startButton.addEventListener('click', () => {
    // Record the start time when the button is clicked
    startTime = new Date();

    // Disable the button to prevent multiple clicks
    startButton.disabled = true;

    // You can enable and show your questions here
    // For simplicity, we'll just wait for a few seconds in this example
    setTimeout(() => {
        // Record the end time when the user has answered the questions
        endTime = new Date();

        // Calculate the time taken in milliseconds
        const timeTakenMilliseconds = endTime - startTime;

        // Convert milliseconds to seconds
        const timeTakenSeconds = timeTakenMilliseconds / 1000;

        // Display the time taken
        timeTakenDisplay.textContent = `Time taken to answer: ${timeTakenSeconds} seconds`;

        // Re-enable the start button if needed
        startButton.disabled = false;
    }, 5000); // Adjust this timeout to match your actual questions
});
