function getBotResponse(input) {

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input.toLowerCase().includes("courses")) {
        return "Sure, I can help you with courses. What type of course are you interested in?";
    } else if (input.toLowerCase().includes("pricing")) {
        return "For pricing details, please visit our website or contact our sales team.";
    } else if (input.toLowerCase().includes("support")) {
        return "Our support team is available 24/7. How can I assist you?";
    } else {
        return "I'm sorry, I cannot provide a response at the moment.";
    }
    
    
}
