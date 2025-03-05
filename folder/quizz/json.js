const json = {
    "title": "Connective Tissues Quiz",
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
     {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
     },
     {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
     }
    ],
    "pages": [
     {
      "name": "intro",
      "elements": [
       {
        "type": "html",
        "name": "intro-text",
        "html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Welcome to the Connective Tissue Test!</title>\n    <style>\n        ul {\n            list-style-type: disc;\n            padding-left: 10px;\n        }\n    </style>\n</head>\n<body> \n<p style=\"margin-top: 1em; text-align: justify;\">\n  <strong>Welcome to the Connective Tissue Quiz!</strong>\n</p>\n<p style=\"margin-top: 1em; text-align: justify;\">This quiz is designed to challenge your knowledge of the types of Connective Tissues, its types, components, and functions. You will be presented with a series of multiple-choice questions, each with four possible answers. Carefully read each question and select the answer you believe is correct.\n<br>\n<br>\nBefore you begin, please enter your name in the field below. This will help us keep track of your results. Then, click <b>Start Quiz</b>.\n<br>\n<br>\nGood luck, and enjoy testing your knowledge!</p>"
       },
       {
        "type": "text",
        "name": "username",
        "titleLocation": "hidden",
        "isRequired": true,
        "maxLength": 25,
        "placeholder": "Name"
       },
       {
        "type": "text",
        "name": "gradesection",
        "titleLocation": "hidden",
        "isRequired": true,
        "maxLength": 10,
        "placeholder": "Grade and Section"
       }
      ]
     },
     {
      "name": "first-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q1",
        "title": "What is the primary function of connective tissues?",
        "correctAnswer": "Support and bind other tissues",
        "choices": [
         "Support and bind other tissues",
         "Transmit nerve impulses",
         "Contract to produce movement",
         "Secrete hormones"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "second-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q2",
        "title": "Which type of connective tissue is found in tendons and ligaments?",
        "correctAnswer": "Dense connective tissue",
        "choices": [
         "Loose connective tissue",
         "Dense connective tissue",
         "Cartilage",
         "Bone"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "third-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q3",
        "title": "What is the main component of the extracellular matrix in connective tissues?",
        "correctAnswer": "Ground substance",
        "choices": [
         "Cells",
         "Fibers",
         "Ground substance",
         "Blood vessels"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "fourth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q4",
        "title": "Which type of connective tissue acts as a shock absorber and insulates the body?",
        "correctAnswer": "Adipose tissue",
        "choices": [
         "Adipose tissue",
         "Areolar tissue",
         "Reticular tissue",
         "Dense regular tissue"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "fifth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q5",
        "title": "What type of connective tissue is found in the ear and nose, providing flexible support?",
        "correctAnswer": "Cartilage",
        "choices": [
         "Bone",
         "Cartilage",
         "Dense connective tissue",
         "Loose connective tissue"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "sixth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q6",
        "title": "Which type of connective tissue is responsible for transporting nutrients and waste products throughout the body?",
        "correctAnswer": "Blood",
        "choices": [
         "Bone",
         "Cartilage",
         "Blood",
         "Lymph"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "seventh-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q7",
        "title": "What is the function of reticular connective tissue?",
        "correctAnswer": "Form a soft internal skeleton for organs",
        "choices": [
         "Support and bind other tissues",
         "Store fat",
         "Form a soft internal skeleton for organs",
         "Transport oxygen"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "eighth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q8",
        "title": "Which type of connective tissue is characterized by a high density of collagen fibers?",
        "correctAnswer": "Dense connective tissue",
        "choices": [
         "Loose connective tissue",
         "Dense connective tissue",
         "Adipose tissue",
         "Reticular tissue"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "ninth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q9",
        "title": "What is the primary function of bone tissue?",
        "correctAnswer": "Provide structural support",
        "choices": [
         "Store fat",
         "Provide structural support",
         "Transport nutrients",
         "Secrete hormones"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     },
     {
      "name": "tenth-page",
      "elements": [
       {
        "type": "radiogroup",
        "name": "q10",
        "title": "Which type of connective tissue is found in the walls of large arteries, providing elasticity?",
        "correctAnswer": "Elastic connective tissue",
        "choices": [
         "Elastic connective tissue",
         "Dense regular connective tissue",
         "Adipose tissue",
         "Reticular tissue"
        ],
        "choicesOrder": "random",
        "colCount": 2
       }
      ]
     }
    ],
    "cookieName": "connective-tissues-quiz",
    "showProgressBar": "belowheader",
    "progressBarType": "questions",
    "allowCompleteSurveyAutomatic": false,
    "startSurveyText": "Start Quiz",
    "firstPageIsStarted": true,
    "questionsOnPageMode": "questionPerPage",
    "timeLimit": 180,
    "showTimer": true,
    "headerView": "advanced"
   };