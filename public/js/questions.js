// Would suggest adding the questions to the db as seed data 

const questions = [
    {
        question: 'How would you describe your general mood lately?',
        choices: ['depressed', 'anxious', 'distracted', 'tired', 'bored']
        // ex. someone is feeling distracted - maybe suggest exercise in mindfulness 
        // ex. someone is feeling bored - suggest create exercise etc...
    },
    {
        question: 'How many hours of sleep do you get per night on average?',
        choices: ['<4', '4-6', '6-8', '8+']
        // if someone is feeling tired and getting <6 hours of sleep, suggest Rest category
        // if someone is getting more that 6 hours of sleep and does not feel tired - don't suggest a Rest exercise
    }
    // add more questions for the quiz
        // determine different categories based on a related question/answer
    
]

// conditional statements that generate product suggestions based off user selections
    // determine custom suggestions based on user responses to each questions

// potentially add quiz quiz results to user model so that they can be stored in the db


