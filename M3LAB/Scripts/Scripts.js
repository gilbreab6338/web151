//var randomBodyParts = ["hand", "foot", "face"];
		//var randomAdjectives = ["lame", "insulting", "dirty"];
		//var randomAnimals = ["alpaca", "bird", "camel", "donkey", "platypus"];
		//var randomAnimalBodyParts = ["beak", "mouth", "behind"];		
		//var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
		//var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
		//var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
		//var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];
		//var randomInsult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a(n) " + randomAnimal + "'s " + randomAnimalBodyPart + "!";
		//var randomInsult = ["Your", randomBodyPart, "is", "more", randomAdjective, "than", "a(n)", randomAnimal + "'s", randomAnimalBodyPart + "!"].join(" ");
		//document.write(randomInsult);
		
		var insult = {
			randomBodyParts: ["hand", "foot", "face"],
			randomAdjectives: ["lame", "insulting", "dirty"],
			randomAnimals: ["alpaca", "bird", "camel", "donkey", "platypus"],
			randomAnimalBodyParts: ["beak", "mouth", "behind"],
		};
		
		insult.randomize = function() {
			insult.randomBodyPart = insult.randomBodyParts[Math.floor(Math.random() * insult.randomBodyParts.length)];
			insult.randomAdjective = insult.randomAdjectives[Math.floor(Math.random() * insult.randomAdjectives.length)];
			insult.randomAnimal = insult.randomAnimals[Math.floor(Math.random() * insult.randomAnimals.length)];
			insult.randomAnimalBodyPart = insult.randomAnimalBodyParts[Math.floor(Math.random() * insult.randomAnimalBodyParts.length)];
		};
		
		insult.print = function() {
			randomInsult = "Your " + insult.randomBodyPart + " is more " + insult.randomAdjective + " than a(n) " + insult.randomAnimal + "'s " + insult.randomAnimalBodyPart + "!";
			document.write(randomInsult);
		};
		
		insult.css = function() {
			randomInsult = "Your " + insult.randomBodyPart + " is more " + insult.randomAdjective + " than a(n) " + insult.randomAnimal + "'s " + insult.randomAnimalBodyPart + "!";
			var Tag = "<div style='div-center;'>"
			var TagEnd = "</div>"
			document.write(Tag + randomInsult + TagEnd);
		};
		
		insult.randomize();
		insult.css();