/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		Adds the revised version of the College of Satire by Frootbat
	Source:		https://www.gmbinder.com/share/-MAaXAKfkKrxlh1x7EB7
	Request by:	Lunch Parade
	Code by:	xika
	Date:		2024-10-29
	
*/

var iFileName = "Bard-College_of_Satire-(rev)";

RequiredSheetVersion("13.2.0");

SourceList["HB:Satire"] = {
    name : "Bardic College: College of Satire (Revised by Frootbat)",
    abbreviation : "HB:S",
    group : "homebrew",
	url: "https://www.gmbinder.com/share/-MAaXAKfkKrxlh1x7EB7",
    date : ""
};

AddSubClass("bard", "college of satire", {
	regExpSearch: /^(?=.*(satire)).*$/i,
	subname: "College of Satire",
	source: [ "HB", 1],
	features: {
		"tumbling fool": {
			name: "Tumbling Fool",
			source: ["HB", 1],
			minlevel: 3,
			description: desc([
				"As a bns a, I can tumble and gain the following benefits for the rest of my turn:",
				"- I gain the benefits of the dash or disengage action",
				"- I gain a climbing speed equal to my current speed",
				"- I reduce any fall damage by my bard level + my charisma mod"
			]),
			action : [["bonus action", "Tumble"]],
		},
		"fools insight": {
			name: "Fool's Insight",
			source: ["HB", 1],
			minlevel: 6,
			description: desc([
				"I learn the Detect Thoughts spell, and can cast it without a spell slot once per long rest.",
				"If a creature saves against my Detect Thoughts, it suffers an embarrassing social gaffe.",
				"It might loudly fart, thunderously burp, trip and fall, or be compelled to tell a tasteless joke."
			]),
			spellcastingBonus: [{
				name: "Fool's Insight",
				spells: ["detect thoughts"],
				selection: ["detect thoughts"],
				firstCol: "oncelr"
			}],	
		},
		"irritating gnave": {
			name: "Irritating Gnave",
			source: ["HB", 1],
			minlevel: 6,
			description: desc([
				"All my bard spells that deal psychic damage add my charisma mod to the damage roll.",
				"When a creature fails a save vs. one of my bard spells I can spend a Bardic Inspiration to",
				"gain +2 AC and the target has disadv. on anyone but me until the end of my nxt trn."
			]),
			action : [["reaction", "Irritating Gnave"]],
		},			
		"last laugh": {
			name: "Last Laugh",
			source: ["HB", 1],
			minlevel: 14,
			description: desc([
				"All hostile creature in 30ft who can see or hear me make a wis save. On fail they burst into",
				"laughter for 1 minute, taking my bard level psychic damage at the end of their turn and are",
				"prone, incapacitated and unable to stand up. Repeat save at end of turn. End on success."
			]),
			usages: 1,
			recovery : "long rest",
		}
	}
});
			