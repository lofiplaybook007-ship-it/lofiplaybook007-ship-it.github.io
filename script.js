function vote(choice) {
    const pollOptions = document.getElementById("poll-options");
    const pollMessage = document.getElementById("poll-message");
    
    // Hide the buttons after they click
    if (pollOptions) {
        pollOptions.style.display = "none";
    }
    
    // Show a custom thank you message
    if (pollMessage) {
        pollMessage.innerText = `Thanks for voting! I'll start working on more ${choice} tracks for you! 🎵`;
    }
}