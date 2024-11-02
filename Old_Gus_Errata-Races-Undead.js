/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Races
	Effect:		This script adds Races from Old Gus's Errata - Wanderer of Infinite Skies
	Source 1:	https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link
	Source 2:	https://www.reddit.com/r/UnearthedArcana/comments/z5872u/old_gus_errata_wanderers_of_the_infinite_skies/
	Author:		https://reddit/u/callmepartario
	LLM Import:	Rocky
	Code by:	xika

	Date:		2024-11-02 (sheet v13)

*/

/*
	-TODO-
	
*/

var iFileName = "Old_Gus_Errata-Races-Undead";

RequiredSheetVersion("13.2.0");

SourceList.OG = {
	name : "Old Gus' Errata - Wanderer of Infinite Skies",
	abbreviation : "OG",
	abbreviationSpellsheet : "OG",
	group : "Old Gus Errata",
	url: "https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link",
	date : "2024/10/22"
};

RaceList["bound spirit og"] = {
	regExpSearch :  /^(?=.*spirit)(?=.*bound).*$/i,
	name : "Bound Spirit",
	sortname : "Bound Spirit",
	source: ["OG",104],
	scores : [0, 0, 0, 0, 2, 0],	
	scorestxt: "+2 Wis, +1 in any other",
	savetxt : {
		immune : ["poison", "disease", "charmed", "exhaustion"]
	},
	trait : "Bound Spirit (+2 Wisdom and +1 in another ability of my choice)\nI'm Undead. I cannot be charmed or become exhausted. I'm immune to poison, and can’t be poisoned or become diseased. I don’t need air, food, drink, or sleep. If I die, my essence is dispersed, and I can't be resurrected.\nI spent my short/long rest inert on the Ethereal Plane, unaware of other planes I cannot leave my inert state at my own volition until I complete my short/long rest and return to the previous location.",
	age : " do not age, and can persist indefinitely until they are dispersed.",
	height : " are small or medium, depending on their former race.",
	weight : " weight depends on their former race.",
	plural : "Bound Spirits",
	size: [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common", "(any from previous life)"],
	vision : [
		["Darkvision", 60],
		["Ethereal Sight", 30]
	],
	features: {
		"ethereal movement": {
			name: "Ethereal Movement",
			source: ["OG",104],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
						"I can move through other creatures and objects as if they were difficult terrain, but not walls",
						"or ceilings. If I end my turn inside an object or creature, I'm shunted to the nearest available",
						"space, taking 1d10 force damage for every 5 feet I'm moved."
					]),
				page3notes : true,
				name: "Ethereal Movement"
			}],
		},
		"ethereal jaunt": {
			name: "Ethereal Jaunt",
			source: ["OG",104],
			minlevel: 1,
			usages: "Prof bonus per",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			recovery: "long rest",
			action : [["bonus action", "Ethereal Jaunt"]],
			toNotesPage: [{
				note: desc([
						"I enter the Ethereal Plane as a bonus action and can move through walls and ceilings.",
						"At the end of my next turn, I return to the plane I left."
					]),
				page3notes : true,
				name: "Ethereal Jaunt",
				additional: "Prof Bonus per long rest",
			}],
		},	
		"Speak with Dead": {
			name: "Speak with Dead",
			source: ["OG",104],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I can cast the Speak with Dead spell once per short rest. If I cast during a short or long rest,",
					"I can make a Wisdom (Insight) check to speak with a deceased soul of my choice that is also",
					"on the Ethereal Plane. The DC is determined by the DM, and might include factors as where",
					"I entered the Ethereal Plane from, my familiarity with the individual, or the availability of the",
					"individual’s spirit."
				]),
				page3notes : true,
				name: "Speak with Dead",
				additional: "1 x per short rest",
			}],
		},
	},
};

RaceList["ghoul og"] = {
	regExpSearch :  /^(?=.*ghoul).*$/i,
	name : "Ghoul",
	sortname : "Ghoul",
	source: ["OG",105],
	scores : [0, 2, 0, 0, 1, 0],
	savetxt : {
		immune : ["poison", "disease"]
	},
	scorestxt: "+2 Dex, +1 Wis",
	trait : "Ghoul (+2 Dex and +1 Wis)\nI'm an Undead.\nI'm immune to poison damage and can’t be poisoned.\nI must maintain a diet of rotting flesh (at least 72h after death), in equal portion to the amount of food a living member of my original race would require.\nI treat any exhaustion levels I have as if they were one level lower.",
	age : " do not age, but they do break. They can endure unlife indefinitely.",
	height : " are small or medium, depending on their former race.",
	weight : " weight depends on their former race.",
	plural : "Ghouls",
	size: [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Abyssal", "(any from previous life)"],
	vision : [
		["Darkvision", 60],
	],
	features: {
		"ghoulish claws": {
			name: "Ghoulish Claws",
			source: ["OG", 105],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
						"I'm proficient with unarmed strikes, they deal 1d6 slashing damage."
					]),
				page3notes : true,
				name: "Ghoulish Claws"
			}],
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*\bghoulish)(?=.*\bclaws?\b).*$/i,
				name: "Ghoulish Claws",
				source: ["OG", 105],
				damage: [1, 6, "slashing"],
				abilitytodamage: true,
				selectNow: true,
				isAlwaysProf : true
			}],			
		},
		"paralyzing strike": {
			name: "Paralyzing Strike",
			source: ["OG", 105],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			toNotesPage: [{	
				note: desc([
						"When I hit a Humanoid or Beast with my claws, I can force it to make a Con save DC 8 + my",
						"proficiency bonus + my Wisdom mod. If the creature fails its saving throw, it is paralyzed",
						"for up to 1 minute. The target can repeat the saving throw at the end of each of its turns,",
						"ending the effect on itself on a success. Elves succeed this saving throw automatically."
					]),
				page3notes : true,
				name: "Paralyzing Strike",
				additional: "1 x per long rest",
			}],
		},	
	},
};

RaceList["mummy og"] = {
	regExpSearch :  /^(?=.*mummy).*$/i,
	name : "Mummy",
	sortname : "Mummy",
	source: ["OG",106],
	scores : [2, 0, 1, 0, 0, 0],	
	scorestxt: "+2 Str, +1 Con",
	savetxt : {
		text: ["Vulnerable to fire"],
		immune : ["poison", "exhaustion", "charmed"],
		adv_vs : ["necrotic"]
	},
	dmgres : ["Necrotic"],
	weaponProfs: [false, false, ["scimitar", "longbow"]],
	armorProfs : [false, false, false, true],
	trait : "Mummy (+2 Str and +1 Con)\nMy creature type is Undead. I gain + 1 HP/Level. I know the blade ward cantrip and can cast it as bonus action.\nI'm vulnerable to fire. I cannot be charmed. I'm immune to poison and exhaustion. I have adv. on saves vs. necrotic damage and resistance vs. necrotic damage.\nI don’t require air, food, drink, or sleep, but must rest motionless during a short or long rest.\nI'm proficient with scimitars, shields and longbows.",
	age : " do not age, nor do they decay. They can endure unlife for a number of centuries equal to their original race’s lifespan in years.",
	height : " can be of most any race before they died. Your size is Medium or Small.",
	weight : " weight depends on their former race.",
	plural : "Mummies",
	size: [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["(any from previous life)"],
	vision : [
		["Darkvision", 60]
	],
	features: {
		"superior preservation" :
		{
			name: "Superior Preservation",
			source: ["OG",106],
			minlevel: 1,
			spellChanges: {
				"blade ward": {
					time: "1 bns",
					changes: "I know the blade ward cantrip and can cast it as bonus action."
				},
			},
			spellcastingBonus: [{
				name: "Superior Preservation",
				spells: ["blade ward"],
				selection: ["blade ward"],
				firstCol: "atwill"
			}],
			action : [["bonus action", "Blade Ward"]],
			calcChanges : {
				hp : function (totalHD) { return [totalHD, "Superior Preservation"]; }
			},
		},
	},
};

RaceList["skeleton og"] = {
	regExpSearch :  /^(?=.*skeleton).*$/i,
	name : "Skeleton",
	sortname : "Skeleton",
	source: ["OG", 107],
	scores : [0, 0, 0, 1, 2, 0],	
	scorestxt: "+2 Wis and +1 Int",
	savetxt : {
		immune : ["poison", "disease"],
	},
	trait : "Skeleton (+2 Wis and +1 Int)\nMy creature type is Undead. I can’t speak, but I understand the languages I knew in life. I don’t require air or sleep, and I cannot consume food or drink. When I take a short or long rest, I must remain motionless. I treat exhaustion levels I have as if they were one level lower.\nI have advantage on Intelligence (History) checks I make to recall events from the time period in which I expired.",
	age : " do not age, but they do break. They can endure unlife for several centuries after they are raised, up to three times as long as the lifespan of their original species.",
	height : " can be of most any race before they died. My size is Medium or Small.",
	weight : " weight depends on their former race.",
	plural : "Skeletons",
	size: [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["(any from previous life)"],
	vision : [
		["Darkvision", 60]
	],
	features: {
		"collapse" :
		{
			name: "Collapse",
			source: ["OG", 107],
			minlevel: 1,
			action : [
				["action", "Collapse: Collapse"],
				["bonuse action", "Collapse: Rise"]
			],
			toNotesPage: [{	
				note: desc([
						"I can use an action to collapse into a pile of bones, including my worn equipment. I remain",
						"aware of my surroundings and am indistinguishable from a corpse unless divined by magical",
						"means, such as paladin’s Divine Sense or the detect good and evil spell. I can resume my",
						"normal stance and stature using a bonus action."
					]),
				page3notes : true,
				name: "Collapse"
			}],
		},
		"empty innards" :
		{
			name: "Empty Innards",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			action : [["reaction", "Empty Innards"]],
			toNotesPage: [{	
				note: desc([
						"I can use my reaction to cause a critical hit against me to become a normal hit."
					]),
				page3notes : true,
				name: "Empty Innards",
				additional: "1 x per short rest",
			}],
		},
	},
};

RaceList["wight og"] = {
	regExpSearch :  /^(?=.*wight).*$/i,
	name : "Wight",
	sortname : "Wight",
	source: ["OG",108],
	scores : [0, 0, 1, 1, 1, 0],	
	scorestxt: "+1 Con, Int and Wis",
	savetxt : {
		immune : ["poison"],
	},
	trait : "Wight (+1 Con, Int and Wis)\nMy creature type is Undead. I'm immune to poison damage and the poisoned condition. I don’t require air, food, drink, or sleep, but must rest motionless to regain abilities during a short or long rest. I treat any exhaustion levels I have as if they were one level lower.",
	age : " do not age, and their flesh does not decay. They can endure unlife indefinitely after they are raised.",
	height : " can be of most any race before they died. My size is Medium or Small.",
	weight : " weight depends on my former race.",
	plural : "Wights",
	size: [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["(any from previous life)"],
	vision : [
		["Darkvision", 60]
	],
	features: {
		"sense mortality" :
		{
			name: "Sense Mortality",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",			
			action : [
				["action", "Sense Mortality"],
			],
			toNotesPage: [{	
				note: desc([
						"The presence of living creatures registers on my senses like a noxious odor. As an action,",
						"I can open my awareness to detect the living. Until the end of my next turn, I know the",
						"location of any Aberration, Beast, Humanoid, Giant, or Monstrosity within 60 feet of me",
						"that is not behind total cover. I know the type of any being whose presence I sense, but",
						"not its identity. Within the same radius, I also detect the presence of any place or object",
						"that has been consecrated or desecrated, as with the hallow spell."
					]),
				page3notes : true,
				name: "Sense Mortality",
				additional: "1 x per short rest",
			}],
		},
		"life drain" :
		{
			name: "Life Drain",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action : [
				["bonus action", "Life Drain"]
			],
			toNotesPage: [{	
				note: desc([
						"When I hit a Humanoid with an attack, I can use a bonus action to force the target to",
						"make a Constitution saving throw DC 8 + my proficiency bonus + my Constitution mod.",
						"If they fail, a creature takes a number of d6s equal to my proficiency bonus as necrotic",
						"damage, and I gain half the amount as temporary hit points, which last for 1 minute."
					]),
				page3notes : true,
				name: "Life Drain",
				additional: "1 x per long rest",
			}],
		},
	},
};

RaceList["zombie og"] = {
	regExpSearch :  /^(?=.*zombie).*$/i,
	name : "Zombie",
	sortname : "Zombie",
	source: ["OG",109],
	scores : [0, 0, 2, 0, 0, 0],	
	scorestxt: "+2 Con and +1 to any other",
	savetxt : {
		immune : ["poison", "exhaustion", "charmed"],
		adv_vs : ["necrotic"]
	},
	dmgres : ["Necrotic"],
	trait : "Zombie (+2 Con and +1 to any other)\nMy creature type is Undead. I'm immune to poison damage and can’t be poisoned. I must maintain a diet of living or freshly dead flesh (within 1 minute of death), in equal portion to the amount of food a living member of my original race would require. My muscles require the same amount of rest that my original race would in order to stave off exhaustion.\nI can select one racial trait from my original race of my choice.",
	age : " do not age, but they do decay. If they maintain a diet of living flesh, they can endure unlife for many years after their conversion, up to as long as the lifespan of their original species.",
	height : " can be of most any race before they died. My size is Medium or Small.",
	weight : " weight depends on their former race.",
	plural : "Zombies",
	size: [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
	},
	languageProfs : ["(any from previous life)"],
	vision : [
		["Darkvision", 60]
	],
	features: {
		"thought for food" :
		{
			name: "Thought for Food",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",			
			toNotesPage: [{	
				note: desc([
						"If I devour at least one mouthful of brain from a deceased creature, for the next 24 hours,",
						"I can experience memories of their life as if I had cast detect thoughts upon the creature.",
						"The target creature does not make a saving throw, and I experience a memory of theirs as",
						"a vision from their own perspective. The nature of the vision is determined by the DM."
					]),
				page3notes : true,
				name: "Thought for Food",
				additional: "1 x per short rest",
			}],
		},
		"undead fortitude" :
		{
			name: "Undead Fortitude",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			toNotesPage: [{	
				note: desc([
						"When I succeed a death saving throw, I can immediately gain 1 hit point."
					]),
				page3notes : true,
				name: "Undead Fortitude",
				additional: "1 x per long rest",
			}],
		},
	},
};