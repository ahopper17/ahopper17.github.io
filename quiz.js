	
	/* LIST OF VARIABLES */	
	
	var questionState = 0;	//Keeps track of users place in quiz
	var quizActive = true;	//True until last question is answered
		
	var userStats =	[
						0,	//Estelle
						0, 	//Ines
						0, 	//Garcin
					];
	
	var tempStats = userStats; //Holds stat increases relating to user selection
	
	/* QUIZ BUILDING VARIABLES */
	
	//The following array contains all question text elements
	
	var questionText =	[															
							"Quel est le travail de vos rêves ?", 	//q1
							"Quel est votre amoureux(se) idéal(e) ?", 					//q2
							"Comment espérez-vous mourir ?", 	//q3
							"Que pensez-vous de l'infanticide ?", 				//q4
							"À quel point êtes-vous similaire à Ellen Degeneres ?", 			//q5
							"Que pensez-vous de taxer les riches ?", 			//q6
              "Quelle couleur correspond à votre aura ?"          //q7
						];
	
	//The following array contains all answer text elements for each question
	
	var answerText =	[		//question 1 answers													
							[	"Pas de travail. Je veux me marier un homme riche.", 				
								"J'espère que je travaille à la poste.", 
								"Être un journaliste et voir le monde !"],							
								
								//question 2 answers
							[	"Une femme mariée.", 							
								"Tout homme qui m'aime.",
								"Pas ma femme !"],
								
								//question 3 answers
							[	"Pendant que je dors. Du gaz pour le drame !", 
								"Des balles dans mon cœur. Je mourrai comme un héro !",
								"Une maladie comme la pneumonie."],
								
								//question 4 answers
							[	"Oh! C'est terrible!", 
								"Le bébé est-il né d'une affaire ? Alors, oui.",
								"Probablement mauvais. Je ne sais pas."],
								
								//question 5 answers
							[	"Sa coiffure est comme la mienne.",
							 	"Nous sommes méchants à les pauvres.", 
								"Nous avons le même goût en amoureux."],		

								//question 6 answers								
							[	"Je ne sais pas, je suis juste un homme ordinaire.", 
								"Oui! Chaque centime !",
								"Non! Mon mari a travaillé très dur pour cet argent !"]

                //question 7 answers								
							[	"Rouge", 
                "Bleu",
                "Vert"]
						]
	
	//The following array contains all personality stat increments for each answer of every question
	
	var answerValues =	[		//question 1 answer values
							[	[1,0,0], 		
								[0,1,0],		
								[0,0,1]
							],	
						
								//question 2 answer values
              [	[0,1,0], 		
								[1,0,0],		
								[0,0,1]
							],	

								//question 3 answer values
              [	[0,0,1], 		
								[1,0,0],		
								[0,1,0]
							],	
								
								//question 4 answer values
              [ [0,1,0], 		
								[1,0,0],		
								[0,0,1]
							],	
								
								//question 5 answer values
              [ [0,1,0], 		
								[1,0,0],		
								[0,0,1]
							],	
								
								//question 6 answer values
              [ [0,0,1], 		
								[0,1,0],		
								[1,0,0]
							],	

              	//question 7 answer values
              [ [1,0,0], 		
								[0,0,1],		
								[0,1,0]
							],	
						]
	
	/* SHORTCUT VARIABLES */
	//so I don't have to keep typing

	var results = document.getElementById("results");
	var quiz = document.getElementById("quiz");
	var body = document.body.style;
	var printResult = document.getElementById("topScore");
	var buttonElement = document.getElementById("button");
	
	/* QUIZ FUNCTIONALITY */
	
	buttonElement.addEventListener("click", changeState);	//Add click event listener to main button
	
	/* This function progresses the user through the quiz */
	
	function changeState() {								
		
		updatePersonality(); 	//Adds the values of the tempStats to the userStats										
		
		if (quizActive) {	
			
			/*True while the user has not reached the end of the quiz */
			
			initText(questionState);	//sets up next question based on user's progress through quiz
			questionState++;			//advances progress through quiz
			
			buttonElement.disabled = true; //disables button until user chooses next answer
			buttonElement.innerHTML = "Sélectionnez une réponse";			
			buttonElement.style.opacity = 0.7;
			
		} else {
			
			/*All questions answered*/
			
			setCustomPage(); //runs set up for result page
		}
	}
	
	/* This function determines the question and answer content based on user progress through the quiz */

	function initText(question) {							
		
		var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content
		
		/* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/
		
		for (i = 0; i < answerText[question].length; i++) {		
			
			answerSelection += "<li><input type='radio' name='question" +
			(question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
		}
		
		document.getElementById("questions").innerHTML = questionText[question];	//set question text
		document.getElementById("answers").innerHTML = answerSelection;				//set answer text
	}
	
	/* This function is called when a user selects an answer, NOT when answer is submitted */
	
	function setAnswer(input) {
				
		clearTempStats();									//clear tempStats in case user reselects their answer
		
		tempStats = answerValues[questionState-1][input];	//selects personality values based on user selection 
				
		if (questionState < questionText.length) {
			
			/*True while the user has not reached the end of the quiz */
			
			buttonElement.innerHTML = "Continuez";
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
					
		} else {
			
			/*All questions answered - QUESTION TIME IS OVER!*/
			
			quizActive = false;
			buttonElement.innerHTML = "Display your custom website"
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
		}
	}
	
	/* This function sets tempStats to 0 */
	
	function clearTempStats() {
		
		tempStats = [0,0,0,0,0,0];	
	}
	
	/*This function adds the values of the tempStats to the userStats based on user selection */
	
	function updatePersonality() {
		
		for (i = 0; i < userStats.length ; i++) {
			userStats[i] += tempStats[i];
		}
	}
	
	/* This function determines the highest personality value */
	
	function setCustomPage() {
		
		var highestStatPosition = 0;	//highest stat defaults as 'cute'
		
		/* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */
		
		for (i = 1 ; i < userStats.length; i++) {
			
			if (userStats[i] > userStats[highestStatPosition]) {
				highestStatPosition = i;
			}
		}
		
		displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered
		
		/* Hides the quiz content, shows results content */
		quiz.style.display = "none";		
	}
	
	/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */
	
	/* The following code manipulates the CSS based on the personality results */
			
	function displayCustomPage(personality) {
		switch (personality) {
			
			case 0:	//Estelle
        results.style.display = "inline-block";
        results.classList.add("Estelle");
        printResult.innerText = "Estelle";
        break;
				
			case 1:		//Ines
        results.style.display = "inline-block";
        results.classList.add("Ines");
        printResult.innerText = "Ines";
				break;
				
			case 2:		//Garcin
        results.style.display = "inline-block";
        results.classList.add("Garcin");
        printResult.innerText = "Garcin";
				break;
				
			default: 
				document.getElementById("error").style.display = "inline-block";

		}
	}