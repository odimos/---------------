
export default function getVoiceCommandsHandler(){
    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser doesn't support speech recognition. Try Chrome!");
        return null;
    } 
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Keep listening continuously
    recognition.interimResults = true; // Enable interim results for faster feedback
    recognition.lang = 'en-US'; // Set the language to English
    recognition.maxAlternatives = 1; // Return only the most likely result

    recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
    }

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
  
        transcript = transcript.trim().toLowerCase();
  
        // Respond to the command instantly
        const commands = ["jump", "kick"];
        if (commands.includes(transcript)) {
          console.log(`Command recognized: ${transcript}`);
        } 
      };

    recognition.start();
    // recognition.stop()

    return recognition;


}




