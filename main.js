#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function askQuestions() {
    const questions = [
        {
            name: "question1",
            type: "list",
            message: "Which company has developed TypeScript?",
            choices: ["Microsoft", "Google", "Facebook", "Apple"],
            correctAnswer: "Microsoft"
        },
        {
            name: "question2",
            type: "list",
            message: "Which of the following is true about TypeScript?",
            choices: [
                "A. TypeScript is a superset of JavaScript.",
                "B. TypeScript is a subset of JavaScript.",
                "C. TypeScript is a scripting language similar to JavaScript.",
                "D. TypeScript can only be used with Angular."
            ],
            correctAnswer: "A. TypeScript is a superset of JavaScript."
        },
        {
            name: "question3",
            type: "list",
            message: "How do you define a variable in TypeScript?",
            choices: [
                "A. let variableName: type = value;",
                "B. var variableName = value;",
                "C. const variableName: type = value;",
                "D. All of the above"
            ],
            correctAnswer: "D. All of the above"
        },
        {
            name: "question4",
            type: "list",
            message: "Which of the following data types is not supported in TypeScript?",
            choices: ["string", "number", "boolean", "character"],
            correctAnswer: "character"
        },
        {
            name: "question5",
            type: "list",
            message: "Which of the following is not a valid JavaScript variable name?",
            choices: ["A. _name", "B. $name", "C. name", "D. 1name"],
            correctAnswer: "D. 1name"
        },
        {
            name: "question6",
            type: "list",
            message: "What is the purpose of the declare keyword in TypeScript?",
            choices: [
                "A. To declare a variable",
                "B. To define a module",
                "C. To declare types or variables that are defined elsewhere",
                "D. To initialize a constant"
            ],
            correctAnswer: "C. To declare types or variables that are defined elsewhere"
        },
        {
            name: "question7",
            type: "list",
            message: "How do you define a variable in TypeScript with a type?",
            choices: ["A. let x = 10", "B. let x: number = 10", "C. int x = 10", "D. define x = 10"],
            correctAnswer: "B. let x: number = 10"
        },
        {
            name: "question8",
            type: "list",
            message: "What is the role of 'tsconfig.json' in TypeScript?",
            choices: [
                "A. To specify compiler options and project settings",
                "B. To define the structure of a TypeScript project",
                "C. To manage dependencies in a TypeScript project"
            ],
            correctAnswer: "A. To specify compiler options and project settings"
        }
    ];
    let marks = 0; // Initialize marks counter
    let currentQuestion = 0;
    // Display heading
    console.log(chalk.cyan.bold("\n\t=== TypeScript Quiz ===\n"));
    do {
        const question = questions[currentQuestion];
        const { userAnswer } = await inquirer.prompt({
            name: "userAnswer",
            type: "list",
            message: chalk.greenBright.bold(`Question ${currentQuestion + 1}:\n`) + "\n" + chalk.yellow(question.message) + "\n",
            choices: question.choices
        });
        switch (currentQuestion) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                if (userAnswer === question.correctAnswer) {
                    marks += 10; // Increment marks by 10 if the answer is correct
                    console.log(chalk.green("Correct!\n"));
                }
                else {
                    console.log(chalk.red(`Incorrect!\nThe correct answer is: ${question.correctAnswer}\n`));
                }
                break;
        }
        currentQuestion += 1;
    } while (currentQuestion < questions.length);
    console.log(chalk.greenBright.bold(`\n\t=== Total marks: ${marks} out of ${questions.length * 10} ===\n`));
}
askQuestions();
