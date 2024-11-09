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
	Code by:	xika

	Date:		2024-11-09 (sheet v13)

*/

/*
	Work in Progress!

	Dwarves		0/5
	Elves		0/3
	Goblins		0/5
	Orcs		0/2
	Beast		19/33
	Fey			0/16
	Monstrous	0/16
	Plant		0/8
	Undead		6/6
	Outsiders	0/4
	
*/

var iFileName = "Old_Gus_Errata-Races";

RequiredSheetVersion("13.2.0");

SourceList.OG = {
	name : "Old Gus' Errata - Wanderer of Infinite Skies",
	abbreviation : "OG",
	abbreviationSpellsheet : "OG",
	group : "Old Gus Errata",
	url: "https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link",
	date : "2022/01/08"
};

RaceList["bound spirit og"] = {
	regExpSearch: /^(?=.*spirit)(?=.*bound).*$/i,
	name: "Bound Spirit",
	sortname: "Bound Spirit",
	source: ["OG", 104],
	scores: [0, 0, 0, 0, 2, 0],
	scorestxt: "+2 Wis, +1 in any other",
	savetxt: {
		immune: ["poison", "disease", "charmed", "exhaustion"]
	},
	trait: "Bound Spirit (+2 Wisdom and +1 in another ability of my choice)\nI'm Undead. I cannot be charmed or become exhausted. I'm immune to poison, and can’t be poisoned or become diseased. I don’t need air, food, drink, or sleep. If I die, my essence is dispersed, and I can't be resurrected.\nI spent my short/long rest inert on the Ethereal Plane, unaware of other planes I cannot leave my inert state at my own volition until I complete my short/long rest and return to the previous location.",
	age: " do not age, and can persist indefinitely until they are dispersed.",
	height: " are small or medium, depending on their former race.",
	weight: " weight depends on their former race.",
	plural: "Bound Spirits",
	size: [3, 4],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: ["Common", "(any from previous life)"],
	vision: [
		["Darkvision", 60],
		["Ethereal Sight", 30]
	],
	features: {
		"ethereal movement": {
			name: "Ethereal Movement",
			source: ["OG", 104],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I can move through other creatures and objects as if they were difficult terrain, but not walls",
					"or ceilings. If I end my turn inside an object or creature, I'm shunted to the nearest available",
					"space, taking 1d10 force damage for every 5 feet I'm moved."
				]),
				page3notes: true,
				name: "Ethereal Movement"
			}],
		},
		"ethereal jaunt": {
			name: "Ethereal Jaunt",
			source: ["OG", 104],
			minlevel: 1,
			usages: "Prof bonus per",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			recovery: "long rest",
			action: [
				["bonus action", "Ethereal Jaunt"]
			],
			toNotesPage: [{
				note: desc([
					"I enter the Ethereal Plane as a bonus action and can move through walls and ceilings.",
					"At the end of my next turn, I return to the plane I left."
				]),
				page3notes: true,
				name: "Ethereal Jaunt",
				additional: "Prof Bonus per long rest",
			}],
		},
		"Speak with Dead": {
			name: "Speak with Dead",
			source: ["OG", 104],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I can cast the Speak with Dead spell once per short rest. If I cast during a short or long rest,",
					"I can make a Wisdom (Insight) check to speak with a deceased soul of my choice that is also",
					"on the Ethereal Plane. The DC is determined by the DM, and might include factors as where",
					"I entered the Ethereal Plane from, my familiarity with the individual, or the availability of the",
					"individual’s spirit."
				]),
				page3notes: true,
				name: "Speak with Dead",
				additional: "1 x per short rest",
			}],
		},
	},
};

RaceList["ghoul og"] = {
	regExpSearch: /^(?=.*ghoul).*$/i,
	name: "Ghoul",
	sortname: "Ghoul",
	source: ["OG", 105],
	scores: [0, 2, 0, 0, 1, 0],
	savetxt: {
		immune: ["poison", "disease"]
	},
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Ghoul (+2 Dex and +1 Wis)\nI'm an Undead.\nI'm immune to poison damage and can’t be poisoned.\nI must maintain a diet of rotting flesh (at least 72h after death), in equal portion to the amount of food a living member of my original race would require.\nI treat any exhaustion levels I have as if they were one level lower.",
	age: " do not age, but they do break. They can endure unlife indefinitely.",
	height: " are small or medium, depending on their former race.",
	weight: " weight depends on their former race.",
	plural: "Ghouls",
	size: [3, 4],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: ["Abyssal", "(any from previous life)"],
	vision: [
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
				page3notes: true,
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
				isAlwaysProf: true
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
				page3notes: true,
				name: "Paralyzing Strike",
				additional: "1 x per long rest",
			}],
		},
	},
};

RaceList["mummy og"] = {
	regExpSearch: /^(?=.*mummy).*$/i,
	name: "Mummy",
	sortname: "Mummy",
	source: ["OG", 106],
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	savetxt: {
		text: ["Vulnerable to fire"],
		immune: ["poison", "exhaustion", "charmed"],
		adv_vs: ["necrotic"]
	},
	dmgres: ["Necrotic"],
	weaponProfs: [false, false, ["scimitar", "longbow"]],
	armorProfs: [false, false, false, true],
	trait: "Mummy (+2 Str and +1 Con)\nMy creature type is Undead. I gain + 1 HP/Level. I know the blade ward cantrip and can cast it as bonus action.\nI'm vulnerable to fire. I cannot be charmed. I'm immune to poison and exhaustion. I have adv. on saves vs. necrotic damage and resistance vs. necrotic damage.\nI don’t require air, food, drink, or sleep, but must rest motionless during a short or long rest.\nI'm proficient with scimitars, shields and longbows.",
	age: " do not age, nor do they decay. They can endure unlife for a number of centuries equal to their original race’s lifespan in years.",
	height: " can be of most any race before they died. Your size is Medium or Small.",
	weight: " weight depends on their former race.",
	plural: "Mummies",
	size: [3, 4],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: ["(any from previous life)"],
	vision: [
		["Darkvision", 60]
	],
	features: {
		"superior preservation": {
			name: "Superior Preservation",
			source: ["OG", 106],
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
			action: [
				["bonus action", "Blade Ward"]
			],
			calcChanges: {
				hp: function(totalHD) {
					return [totalHD, "Superior Preservation"];
				}
			},
		},
	},
};

RaceList["skeleton og"] = {
	regExpSearch: /^(?=.*skeleton).*$/i,
	name: "Skeleton",
	sortname: "Skeleton",
	source: ["OG", 107],
	scores: [0, 0, 0, 1, 2, 0],
	scorestxt: "+2 Wis and +1 Int",
	savetxt: {
		immune: ["poison", "disease"],
	},
	trait: "Skeleton (+2 Wis and +1 Int)\nMy creature type is Undead. I can’t speak, but I understand the languages I knew in life. I don’t require air or sleep, and I cannot consume food or drink. When I take a short or long rest, I must remain motionless. I treat exhaustion levels I have as if they were one level lower.\nI have advantage on Intelligence (History) checks I make to recall events from the time period in which I expired.",
	age: " do not age, but they do break. They can endure unlife for several centuries after they are raised, up to three times as long as the lifespan of their original species.",
	height: " can be of most any race before they died. My size is Medium or Small.",
	weight: " weight depends on their former race.",
	plural: "Skeletons",
	size: [3, 4],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: ["(any from previous life)"],
	vision: [
		["Darkvision", 60]
	],
	features: {
		"collapse": {
			name: "Collapse",
			source: ["OG", 107],
			minlevel: 1,
			action: [
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
				page3notes: true,
				name: "Collapse"
			}],
		},
		"empty innards": {
			name: "Empty Innards",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			action: [
				["reaction", "Empty Innards"]
			],
			toNotesPage: [{
				note: desc([
					"I can use my reaction to cause a critical hit against me to become a normal hit."
				]),
				page3notes: true,
				name: "Empty Innards",
				additional: "1 x per short rest",
			}],
		},
	},
};

RaceList["wight og"] = {
	regExpSearch: /^(?=.*wight).*$/i,
	name: "Wight",
	sortname: "Wight",
	source: ["OG", 108],
	scores: [0, 0, 1, 1, 1, 0],
	scorestxt: "+1 Con, Int and Wis",
	savetxt: {
		immune: ["poison"],
	},
	trait: "Wight (+1 Con, Int and Wis)\nMy creature type is Undead. I'm immune to poison damage and the poisoned condition. I don’t require air, food, drink, or sleep, but must rest motionless to regain abilities during a short or long rest. I treat any exhaustion levels I have as if they were one level lower.",
	age: " do not age, and their flesh does not decay. They can endure unlife indefinitely after they are raised.",
	height: " can be of most any race before they died. My size is Medium or Small.",
	weight: " weight depends on my former race.",
	plural: "Wights",
	size: [3, 4],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: ["(any from previous life)"],
	vision: [
		["Darkvision", 60]
	],
	features: {
		"sense mortality": {
			name: "Sense Mortality",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			action: [
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
				page3notes: true,
				name: "Sense Mortality",
				additional: "1 x per short rest",
			}],
		},
		"life drain": {
			name: "Life Drain",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: [
				["bonus action", "Life Drain"]
			],
			toNotesPage: [{
				note: desc([
					"When I hit a Humanoid with an attack, I can use a bonus action to force the target to",
					"make a Constitution saving throw DC 8 + my proficiency bonus + my Constitution mod.",
					"If they fail, a creature takes a number of d6s equal to my proficiency bonus as necrotic",
					"damage, and I gain half the amount as temporary hit points, which last for 1 minute."
				]),
				page3notes: true,
				name: "Life Drain",
				additional: "1 x per long rest",
			}],
		},
	},
};

RaceList["zombie og"] = {
	regExpSearch: /^(?=.*zombie).*$/i,
	name: "Zombie",
	sortname: "Zombie",
	source: ["OG", 109],
	scores: [0, 0, 2, 0, 0, 0],
	scorestxt: "+2 Con and +1 to any other",
	savetxt: {
		immune: ["poison", "exhaustion", "charmed"],
		adv_vs: ["necrotic"]
	},
	dmgres: ["Necrotic"],
	trait: "Zombie (+2 Con and +1 to any other)\nMy creature type is Undead. I'm immune to poison damage and can’t be poisoned. I must maintain a diet of living or freshly dead flesh (within 1 minute of death), in equal portion to the amount of food a living member of my original race would require. My muscles require the same amount of rest that my original race would in order to stave off exhaustion.\nI can select one racial trait from my original race of my choice.",
	age: " do not age, but they do decay. If they maintain a diet of living flesh, they can endure unlife for many years after their conversion, up to as long as the lifespan of their original species.",
	height: " can be of most any race before they died. My size is Medium or Small.",
	weight: " weight depends on their former race.",
	plural: "Zombies",
	size: [3, 4],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
	},
	languageProfs: ["(any from previous life)"],
	vision: [
		["Darkvision", 60]
	],
	features: {
		"thought for food": {
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
				page3notes: true,
				name: "Thought for Food",
				additional: "1 x per short rest",
			}],
		},
		"undead fortitude": {
			name: "Undead Fortitude",
			source: ["OG", 107],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			toNotesPage: [{
				note: desc([
					"When I succeed a death saving throw, I can immediately gain 1 hit point."
				]),
				page3notes: true,
				name: "Undead Fortitude",
				additional: "1 x per long rest",
			}],
		},
	},
};

RaceList["aaratica haan-hi og"] = {
	name: "Aaratica Haan-Hi",
	sortname: "Aaratica Haan-Hi",
	plural: "Aaratica Haan-Hi",
	regExpSearch: /^(?=.*aaratica)(?=.*haan-hi).*$/i,
	source: ["OG", 35],
	languageProfs: [
		"Common",
		"Aarakocra",
		["From Aaratica Haan-hi", 2]
	],
	age: " reach maturity by age 3 and precious few live longer than 20 years.",
	height: " average 3 feet tall.",
	weight: " have fatty, strong bodies that weigh between 25 and 35 pounds.",
	heightMetric: " average " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " have fatty, strong bodies that weigh between " + ConvertToMetric("25 lbs", 0.1) + " and " + ConvertToMetric("35 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 2, 0, 1, 0, 0],
	scorestxt: "+2 Dex, +1 Int",
	trait: "Aaratica Haan-hi (+2 Dex, +1 Int)\n\n\u25C6 I can’t fly while wearing medium or heavy armor.\n\n\u25C6 Natural Swimmer. I succeed checks I make to swim automatically if I'm not wearing medium or heavy armor.\n\n\u25C6 Compass Sense. If I have an unobstructed view of the sky, I know which way is north.",
	speed: {
		walk: {
			spd: 20
		},
		fly: {
			spd: 30
		},
	},
	features: {

	}
};

RaceList["aaratica paar-dal og"] = {
	name: "Aaratica Paar-dal",
	sortname: "Aaratica Paar-dal",
	plural: "Aaratica Paar-dal",
	regExpSearch: /^(?=.*aaratica)(?=.*paar-dal).*$/i,
	source: ["OG", 35],
	languageProfs: ["Common", "Aarakocra"],
	age: " reach maturity by age 3 and precious few live longer than 20 years.",
	height: " average 3 feet tall.",
	weight: " have lean, lightweight bodies that weigh between 20 and 30 pounds.",
	heightMetric: " average " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " have lean, lightweight bodies that weigh between " + ConvertToMetric("20 lbs", 0.1) + " and " + ConvertToMetric("30 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 2, 0, 0, 0, 1],
	scorestxt: "+2 Dex, +1 Cha",
	trait: "Aaratica Paar-dal (+2 Dex, +1 Cha)\n\n\u25C6 I can’t fly while wearing medium or heavy armor.\n\n\u25C6 I'm proficient in the Performance skill and one musical instrument or artisan’s tool of my choice.",
	skills: ["Performance"],
	skillstxt: "Performance",
	toolProfs: [
		["Musical Instrument Or Artisan’s Tool", 1]
	],
	speed: {
		walk: {
			spd: 20
		},
		fly: {
			spd: 35
		},
	},
	features: {

	}
};

RaceList["aaratica pii-vin og"] = {
	name: "Aaratica Pii-Vin",
	sortname: "Aaratica Pii-Vin",
	plural: "Aaratica Pii-Vin",
	regExpSearch: /^(?=.*aaratica)(?=.*pii-vin).*$/i,
	source: ["OG", 36],
	height: " average 4 feet tall.",
	weight: " have fatty, heavy bodies that weigh between 50 and 80 pounds.",
	heightMetric: " average " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " have fatty, heavy bodies that weigh between " + ConvertToMetric("50 lbs", 0.1) + " and " + ConvertToMetric("80 lbs", 0.1) + ".",
	age: " reach maturity by age 3 and precious few live longer than 20 years.",
	size: [4],
	languageProfs: ["Common", "Aarakocra"],
	scores: [0, 2, 1, 0, 0, 0],
	scorestxt: "+2 Dex, +1 Int",
	trait: "Aaratica Paar-dal (+2 Dex, +1 Int)\n\u25C6 Arctic Living. I can hold my breath for 15 minutes and I have resistance to cold damage. Difficult terrain due to snow and ice does not impede my movement.\n\u25C6 Aquatic Mastery. I know the shape water cantrip. From 3rd level, I can cast the ice knife spell as a 2nd-level spell. From 5th level, I can also cast the locate animals or plants spell if I can see a body of water. Either spell can be cast once per long rest with this trait. Int, Wis, or Cha is my spellcasting ability for these.",
	dmgres: ["Cold"],
	spellcastingAbility: [4, 5, 6],
	speed: {
		walk: {
			spd: 20
		},
		fly: {
			spd: 35
		},
	},
	features: {
		"aquatic mastery 1": {
			name: "Aquatic Mastery",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Aquatic Mastery",
				spells: ["shape water"],
				selection: ["shape water"],
				firstCol: "atwill"
			}],
		},
		"aquatic mastery 3": {
			name: "Aquatic Mastery",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Aquatic Mastery",
				spells: ["ice knife"],
				selection: ["ice knife"],
				firstCol: "oncelr"
			}],
		},
		"aquatic mastery 5": {
			name: "Aquatic Mastery",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Aquatic Mastery",
				spells: ["locate animals or plants"],
				selection: ["locate animals or plants"],
				firstCol: "oncelr"
			}],
		}
	}
};


RaceList["apelong ozo og"] = {
	name: "Apelong Ozo",
	sortname: "Apelong Ozo",
	plural: "Apelong Ozo",
	regExpSearch: /^(?=.*apelong)(?=.*ozo).*$/i,
	source: ["OG", 37],
	age: " mature at 10 years and live up to 60 years.",
	height: " stand between 5½ and 6½ feet tall.",
	weight: " weigh between 250 and 350 pounds.",
	heightMetric: " stand between " + ConvertToMetric("5.5 ft", 0.1) + " and " + ConvertToMetric("6.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("250 lbs", 0.1) + " and " + ConvertToMetric("350 lbs", 0.1) + ".",
	size: [3],
	scores: [2, 1, 0, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Apelong Ozo (+2 Str, +1 Con)\n\u25C6 Speed. I have a base walk speed of 35ft when my hands are empty, 30ft when one hand is empty, and 25ft otherwise.\n\u25C6 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\u25C6 Woodland Traveler. Difficult terrain due to plants, bushes or trees does not impede my movement.\n\u25C6 Ape Weaponry. I can use my teeth (pierc.) or fists (bludg.) to make unarmed strikes and deal 1d6 + my Str mod damage.\n\u25C6 Imposing Stature. I am proficient in the Intimidation skill.",
	languageProfs: ["Common", "Apelong"],
	skills: ["Intimidation"],
	skillstxt: "Intimidation",
	speed: {
		walk: {
			spd: 35
		},
	},
	weaponOptions: [{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*ozo)(?=.*\bfists?\b).*$/i,
			name: "Ozo Fists",
			source: ["OG", 37],
			damage: [1, 6, "bludgeoning"],
			abilitytodamage: true,
			selectNow: true
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*ozo)(?=.*\bteeth?\b).*$/i,
			name: "Ozo Teeth",
			source: ["OG", 37],
			damage: [1, 6, "piercing"],
			abilitytodamage: true,
			selectNow: true
		}
	],
	features: {
		"stunning might": {
			name: "Stunning Might",
			source: ["OG", 37],
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			toNotesPage: [{
				note: desc([
					"With a melee attack hit, I can attempt to stun as a bonus action. Target makes a Con save",
					"DC " + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + " or it is stunned until the start of its next turn."
				]),
				page3notes: true,
				name: "Stunning Might",
				additional: "1 x per short rest",
			}],
		},
	}
};

RaceList["apelong panzu og"] = {
	name: "Apelong Panzu",
	sortname: "Apelong Panzu",
	plural: "Apelong Panzu",
	regExpSearch: /^(?=.*apelong)(?=.*panzu).*$/i,
	source: ["OG", 37],
	age: " mature at 10 years and live up to 70 years.",
	height: " stand between 3½ and 4½ feet tall.",
	weight: " weigh between 80 and 130 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3.5 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("80 lbs", 0.1) + " and " + ConvertToMetric("130 lbs", 0.1) + ".",
	size: [4],
	scores: [1, 1, 0, 1, 0, 0],
	scorestxt: "+1 Str, Dex, Int",
	trait: "Apelong Panzu (+1 Str, Dex, Int)\n\u25C6 Leverage. I can wield weapons with the heavy property without the penalty usually applied to Small creatures.\n\u25C6 Panzu Might. I have advantage on grappling creatures no more one size category larger than me.\n\u25C6 Ape Weaponry. I can use my teeth (pierc.) or fists (bludg.) to make unarmed strikes and deal 1d6 + my Str mod damage.\n\u25C6 Bodily Harmony. I'm proficient in the Athletics or Acrobatics skill.\n\u25C6 Tool Adept. I'm proficient one artisan’s tool of my choice.",
	languageProfs: ["Common", "Apelong"],
	skills: [],
	skillstxt: "Athletics or Acrobatics",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		climb: {
			spd: 15
		}
	},
	weaponOptions: [{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*panzu)(?=.*\bfists?\b).*$/i,
			name: "Panzu Fists",
			source: ["OG", 37],
			damage: [1, 4, "bludgeoning"],
			abilitytodamage: true,
			selectNow: true
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*panzu)(?=.*\bteeth?\b).*$/i,
			name: "Panzu Teeth",
			source: ["OG", 37],
			damage: [1, 4, "piercing"],
			abilitytodamage: true,
			selectNow: true
		}
	],
	features: {

	}
};

RaceList["apelong suxiu og"] = {
	name: "Apelong Suxiu",
	sortname: "Apelong Suxiu",
	plural: "Apelong Suxiu",
	regExpSearch: /^(?=.*apelong)(?=.*suxiu).*$/i,
	source: ["OG", 37],
	age: " mature at 5 years and live up to 30 years.",
	height: " stand between 3 ft and 4 ft tall.",
	weight: " weigh an average of 35 lbs.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of " + ConvertToMetric("35 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 1, 0, 1, 1, 1],
	scorestxt: "+1 Dex, Int, Wis, Cha",
	trait: "Apelong Suxiu (+1 Dex, Int, Wis, Cha)\n\u25C6 Prehensile Tail. I can make object interactions using my tail. if I'm not wearing medium/heavy armor, I can suspend my body from it.\n\u25C6 Graceful Movement. I'm proficient in the Acrobatics skill. If I gain this proficiency from my class, I can add double my proficiency bonus. While I am not wearing heavy armor, I can use my Dexterity in place of my Strength score when determining the distance I can cover when making a long or high jump. Additionally, I don’t need a running start to perform such jumps.",
	languageProfs: ["Common", "Apelong"],
	skills: ["Acrobatics"],
	skillstxt: "Acrobatics",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		climb: "walk"
	},
	features: {
		"suxiu agility": {
			name: "Suxiu Agility",
			source: ["OG", 37],
			minlevel: 1,
			usages: 1,
			recovery: "Turn 0ft",
			toNotesPage: [{
				note: desc([
					"My reflexes and agility allow me to move with a burst of speed. When I move on my turn, I",
					"can double my speed. Once I use this trait, I can’t use it again until I move 0 ft on my turn."
				]),
				page3notes: true,
				name: "Suxiu Agility",
			}],
		},
	}
};


RaceList["bullywug og"] = {
	name: "Bullywug",
	sortname: "Bullywug",
	plural: "Bullywug",
	regExpSearch: /^bullywug$/i,
	source: ["OG", 39],
	age: " mature at 10 years, and live up to 50 years.",
	height: " are between 4½ and 5½ feet tall.",
	weight: " weigh 100-150 pounds.",
	heightMetric: " stand between " + ConvertToMetric("4.5 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("100 lbs", 0.1) + " and " + ConvertToMetric("150 lbs", 0.1) + ".",
	size: [3],
	scores: [1, 0, 2, 0, 0, 0],
	scorestxt: "+2 Con, +1 Str",
	trait: "Bullywug (+2 Con, +1 Str)\n\u25C6 Speak with Frogs and Toads. I can communicate simple concepts to frogs and toads when speaking Bullywug.\n\u25C6 Swamp Camouflage. Adv. on Stealth checks in swampy terrain.\n\u25C6 Bite. My teeth deal 1d4 + my Strength modifier piercing dmg.\n\u25C6 Bullywug Metabolism. Disadvantage on Con saves to avoid intoxication from ingesting alcohol.\n\u25C6 Amphibious. I can breathe air and water. I must submerge myself fully in water or mud once per day or suffer one level of exhaustion, which cannot be removed until I finish a long rest submerged.",
	skills: ["Survival"],
	skillstxt: "Survival",
	speed: {
		walk: {
			spd: 20,
			enc: 10
		},
		swim: {
			spd: 30,
			enc: 20
		},
	},
	weaponProfs: [false, false, ["spear", "net"]],
	languageProfs: [
		"Common",
		"Bullywug"
	],
	savetxt: {
		text: ["Disadv. to avoid intoxication from alcohol"],
	},
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*bullywug)(?=.*\bbite?\b).*$/i,
		name: "Bullywug Bite",
		source: ["OG", 39],
		damage: [1, 4, "piercing"],
		abilitytodamage: true,
		selectNow: true
	}],
	features: {
		"standing leap": {
			name: "Standing Leap",
			source: ["OG", 39],
			minlevel: 1,
			action: ["bonus action", "Standing Leap"],
			toNotesPage: [{
				note: desc([
					"My long jump is up to 20 ft. and my high jump is up to 10 ft., with or without a running start.",
					"I can make a standing leap using my bonus action."
				]),
				page3notes: true,
				name: "Standing Leap",
			}],
		},
	}
};

RaceList["chapa og"] = {
	name: "Cha'pa",
	sortname: "Cha'pa",
	plural: "Cha'pa",
	regExpSearch: /^(cha\'pa|chapa)$/i,
	source: ["OG", 40],
	age: " mature at 8 years, and live up to 50 years.",
	height: " stand between 4 and 5 feet tall.",
	weight: " average about 150 pounds",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("5 ft", 0.1) + " tall.",
	weightMetric: " average about " + ConvertToMetric("150 lbs", 0.1) + ".",
	size: [3],
	carryingCapacity: 1,
	scores: [1, 0, 1, 0, 1, 0],
	scorestxt: "+1 Str, Con & Wis",
	trait: "Cha'pa (+1 Str, Con & Wis)\n\u25C6 Speed. My webbed feet grant me a swimming speed of 30 feet when I'm not wearing heavy armor.\n\u25C6 Hold Breath. I can hold my breath for up to 15 min at a time.\n\u25C6 Tail. I can make unarmed strikes with my broad, scaly tail, dealing 1d6 bludg. dmg. I can also slap it on a liquid surface and produce a sound that is audible up to 200 feet away.\n\u25C6 Wooded Magics. I know the shillelagh cantrip. Int, Wis, or Cha is my spellcasting ability for it.",
	spellcastingAbility: [4, 5, 6],
	skills: ["History"],
	skillstxt: "adv. on Intelligence (Nature) related to woodwork and double prof. on Nature checks related to woodwork or architecture",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		swim: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: [
		"Common",
		"Cha'pa"
	],
	toolProfs: [
		"Woodworker's Tools",
		"Carpenter's Tools"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*Cha'pa)(?=.*\bTail?\b).*$/i,
		name: "Cha'pa Tail",
		source: ["OG", 40],
		damage: [1, 6, "bludgeoning"],
		abilitytodamage: true,
		selectNow: true,
		description: "I can also slap my tail on a liquid surface and produce a sound that is audible up to 200ft away."
	}, ],
	features: {
		"wooded magics": {
			name: "Wooded Magics",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Wooded Magics",
				spells: ["shillelagh"],
				selection: ["shillelagh"],
				firstCol: "atwill"
			}],
		},
		"woodworker": {
			name: "Woodworker",
			source: ["OG", 40],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I'm proficient with woodworker’s tools and carpenter’s tools, and my hardy front teeth can",
					"be used for simple woodworking tasks, such as chipping, shaping. Many cha’pa take pride in",
					"working with no proper tools at all, preferring the intimacy (and nutrition) of crafting their",
					"works using nothing more than their own teeth. For example, if I have a length of wood, I",
					"can sharpen a stick to a deadly point and create a simple wooden spear during a short rest."
				]),
				page3notes: true,
				name: "Woodworker",
			}],
		},
		"wood ken": {
			name: "Wood Ken",
			source: ["OG", 40],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"Whenever I make an Intelligence (Nature) check related to woodwork or architecture, I'm",
					"considered proficient in the Nature skill and add double my proficiency bonus to the check,",
					"instead of my normal proficiency bonus. For example, I might identify the type of wood used,",
					"identify rotted wood or other structural inefficiencies in a wooden structure."
				]),
				page3notes: true,
				name: "Wood Ken",
			}],
		},
	}
};

RaceList["elkin og"] = {
	name: "Elkin",
	sortname: "Elkin",
	plural: "Elkin",
	regExpSearch: /^(?=.*elkin).*$/i,
	source: ["OG", 35],
	age: " mature at 5 years, and live up to 40 years.",
	height: " stand between 6 and 8 feet tall.",
	weight: "  weigh between 250 and 350 pounds.",
	heightMetric: " stand between " + ConvertToMetric("6 ft", 0.1) + " and " + ConvertToMetric("8 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("250 lbs", 0.1) + " and " + ConvertToMetric("350 lbs", 0.1) + ".",
	size: [3],
	carryingCapacity: 1,
	scores: [1, 0, 0, 0, 2, 0],
	scorestxt: "+2 Wis, +1 Str",
	trait: "Elkin (+2 Wis, +1 Str)\n\u25C6 Poor Vision. I have disadv. on Perception checks that rely on sight.\n\u25C6 Keen Hearing. I have adv. on Perception or Investigation checks that rely on hearing.\n\u25C6 Hooved Kick. I can make unarmed strikes with my hoves, dealing 1d4 bludg. dmg + my Strength modifier.\n\u25C6 Speech of Beast and Leaf. I can make my words understood, in a limited manner, by beasts and plants. I have adv. on Cha checks to influence them.\n\u25C6 Natural Adept. I'm proficient in the Nature skill.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Nature"],
	skillstxt: "Nature",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	vision: [
		["Adv. on Perception & Investigation that relies on hearing", 0],
		["Disadv. on Perception that relies on sight", 0],
	],
	languageProfs: [
		"Common",
		"Elkin",
		"Speech of Beast and Leaf"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\belkin\b)(?=.*\bhooves?\b).*$/i,
		name: "Elkin Hooves",
		source: ["OG", 35],
		damage: [1, 4, "bludgeoning"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	features: {
		"elkin magic 1": {
			name: "Elkin Magic",
			minlevel: 1,
			spellcastingBonus: [{
					name: "Elkin Magic",
					spells: ["druidcraft"],
					selection: ["druidcraft"],
					firstCol: "atwill"
				},
				{
					name: "Elkin Magic",
					spells: ["detect poison and disease"],
					selection: ["detect poison and disease"],
					firstCol: "oncelr"
				}
			],
			toNotesPage: [{
				note: desc([
					"I know druidcraft, and can cast detect poison and disease once per LR. From 3rd level, I can",
					"cast locate animals or plants once per LR. Int, Wis, or Cha is my spellcasting ability for it."
				]),
				page3notes: true,
				name: "Elkin Magic",
			}]
		},
		"elkin magic 3": {
			name: "Elkin Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Elkin Magic",
				spells: ["locate animals or plants"],
				selection: ["locate animals or plants"],
				firstCol: "oncelr"
			}],
		},
		"antler riposte": {
			name: "Antler Riposte",
			source: ["OG", 41],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: ["reaction", ""],
			toNotesPage: [{
				note: desc([
					"I can use my antlers defensively. When hit in melee, I can use my reaction to parry the",
					"attack with my antlers, raising my AC by an amount equal to my proficiency bonus."
				]),
				page3notes: true,
				name: "Antler Riposte",
				additional: "1 x per long rest",
			}],
		},
	}
};

RaceList["giff og"] = {
	name: "Giff",
	sortname: "Giff",
	plural: "Giff",
	regExpSearch: /^(?=.*giff).*$/i,
	source: ["OG", 42],
	age: " mature at 20 years, and live up to a century.",
	height: " stand between 7½ and 8½ feet tall.",
	weight: " weigh between 250 and 350 pounds.",
	heightMetric: " stand between " + ConvertToMetric("7.5 ft", 0.1) + " and " + ConvertToMetric("8.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("250 lbs", 0.1) + " and " + ConvertToMetric("350 lbs", 0.1) + ".",
	size: [3],
	scores: [1, 0, 2, 0, 0, 0],
	scorestxt: "+2 Con, +1 Str",
	trait: "Giff (+2 Con, +1 Str)\n\u25C6 Brave. I have adv. to avoid or end the frightened condition.\n\u25C6 Trampling Charge. If I move 20ft in a straight line toward a Large or smaller creat. and hit with a melee attack, it must succeed Str save DC 8 + my prof. bonus + my Str. mod or be knocked prone.\n\u25C6 Quick Loading. I ignore loading property of crossbows and firearms I am proficient with.\n\u25C6 Giff Weapon Training. Choose one weapon. I am proficient with it and gain a +1 to my attack rolls I make with it. Add Giff to the name of the weapon on page one.",
	savetxt: {
		adv_vs: ["frightened"]
	},
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		swim: {
			spd: 20,
			enc: 10
		},
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: [
		"Common",
		["from Giff", 1]
	],
	features: {
		"giff weapon training": {
			name: "Weapon Training",
			source: ["OG", 42],
			calcChanges: {
				atkAdd: [
					function(fields, v) {
						if (/\bgiff\b/i.test(v.WeaponText)) {
							fields.Proficiency = true;
						}
					},
					"I gain Proficiency with my chosen weapon."
				],
				atkCalc: [
					function(fields, v, output) {
						if (/\bgiff\b/i.test(v.WeaponText)) {
							output.extraHit += 1;
						}
					},
					"I gain a +1 to my attack rolls with my chosen weapon."
				]
			},
		},
		"quick loading": {
			name: "Quick Loading",
			source: ["OG", 42],
			calcChanges: {
				atkAdd: [
					function(fields, v) {
						if ((/crossbow/i.test(v.baseWeaponName) || v.list == "firearm") && fields.Proficiency) {
							fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, "");
						}
					}, "I ignore the loading property of crossbows and firearms I am proficient with."
				]
			}
		},
	}
};

RaceList["grimalkin wild og"] = {
	name: "Wild Grimalkin",
	sortname: "Grimalkin, wild",
	plural: "Wild Grimalkin",
	regExpSearch: /^(?=.*grimalkin)(?=.*wild).*$/i,
	source: ["OG", 44],
	age: " mature at 5 years, and live up to three decades",
	height: " average about 3 tall.",
	weight: " weigh about 40 pounds.",
	heightMetric: " average about " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("40 lbs", 0.1) + " pounds.",
	size: [4],
	scores: [0, 2, 0, 0, 1, 0],
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Wild Grimalkin (+2 Dex, +1 Wis)\n\n\u25C6 Climbing Claws. My claws grant my a climbing speed of 20 feet.\n\n\u25C6 Wild Savvy. I am proficient in two of the following skills of my choice: Acrobatics, Insight, Perception, or Survival.",
	skills: [],
	skillstxt: "Choose two from Acrobatics, Insight, Perception, or Survival",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		climb: {
			spd: 20,
			enc: 10
		},
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: [
		"Common",
		"Grimalkin"
	],
	features: {
		"feline agility": {
			name: "Feline Agility",
			source: ["OG", 44],
			minlevel: 1,
			usages: 1,
			recovery: "Turn 0ft",
			toNotesPage: [{
				note: desc([
					"My reflexes and agility allow me to move with a burst of speed. When I move on my turn, I",
					"can double my speed. Once I use this trait, I can’t use it again until I move 0 ft on my turn."
				]),
				page3notes: true,
				name: "Feline Agility",
			}],
		},
	}
};

RaceList["grimalkin urban og"] = {
	name: "Urban Grimalkin",
	sortname: "Grimalkin, urban",
	plural: "Urban Grimalkin",
	regExpSearch: /^(?=.*grimalkin)(?=.*urban).*$/i,
	source: ["OG", 44],
	age: " mature at 5 years, and live up to three decades",
	height: " average about 3 tall.",
	weight: " weigh about 40 pounds.",
	heightMetric: " average about " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("40 lbs", 0.1) + " pounds.",
	size: [4],
	scores: [0, 2, 0, 0, 0, 1],
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Urban Grimalkin (+2 Dex, +1 Wis)\n\n\u25C6 Climbing Claws. My claws grant my a climbing speed of 20 feet.\n\n\u25C6 Street Smart. Accustomed to being underfoot in city streets, I can move through the space of any creature that is of a size larger than mine.\n\n\u25C6 Wild Savvy. I am proficient in two of the following skills of my choice: Deception, Sleight of Hand, Performance, or Persuasion.",
	skills: [],
	skillstxt: "Choose two from Deception, Sleight of Hand, Performance, or Persuasion.",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		climb: {
			spd: 20,
			enc: 10
		},
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: [
		"Common",
		"Grimalkin"
	],
	features: {}
};

RaceList["grung og"] = {
	name: "Grung",
	sortname: "Grung",
	plural: "Grung",
	regExpSearch: /^grung$/i,
	source: ["OG", 45],
	age: " mature at 5 years, and live up to 30 years.",
	height: " are between 3 and 4 feet tall.",
	weight: " weigh 30-50 pounds",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("30 lbs", 0.1) + " and " + ConvertToMetric("50 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 2, 1, 0, 0, 0],
	scorestxt: "+2 Dex, +1 Con",
	trait: "Grung (+2 Dex, +1 Con)\n\u25C6 Amphibious. I can breathe air and water. I must submerge myself fully in water or mud once per day or suffer one level of exhaustion, which cannot be removed until I finish a long rest submerged.\n\u25C6 Standing Leap. My long jump is up to 20 ft. and my high jump is up to 15 ft., with or without a running start.\n\u25C6 Poison Immunity. I'm immune to poison.\n\u25C6 Poisoned Weapons. I'm proficient with the poisoner’s kit.",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		climb: {
			spd: 20,
			enc: 10
		},
	},
	toolProfs: [
		"poisoner’s kit"
	],
	languageProfs: [
		"Common",
		"Grung"
	],
	savetxt: {
		immune: ["poison"],
	},
	features: {
		"poisonous skin": {
			name: "Poisonous Skin",
			source: ["OG", 45],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"The first time a creature comes into direct contact with my skin on a turn, it must succeed",
					"on a Constitution saving throw DC 8 + my proficiency bonus + my Constitution modifier",
					"or be poisoned until the end of its next turn. On a success, the creature is immune to my",
					"poisonous skin for 1 minute."
				]),
				page3notes: true,
				name: "Poisonous Skin",
			}],
		},
	}
};

RaceList["haashir og"] = {
	name: "Haashir",
	sortname: "Haashir",
	plural: "Haashir",
	regExpSearch: /^(?=.*haashir).*$/i,
	source: ["OG", 35],
	age: " mature at 30 years, and live up to two centuries.",
	height: " are between 6½ and 7½ feet tall.",
	weight: " weigh between 270 and 400 pounds.",
	heightMetric: " stand between " + ConvertToMetric("6.5 ft", 0.1) + " and " + ConvertToMetric("7.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("270 lbs", 0.1) + " and " + ConvertToMetric("400 lbs", 0.1) + ".",
	size: [3],
	scores: [1, 0, 0, 2, 0, 0],
	scorestxt: "+2 Int, +1 Str",
	trait: "Haashir (+2 Int, +1 Str)\n\n\u25C6 Prehensile Trunk. I can make object interactions using my trunk.\n\n\u25C6 Stomp. My wide, heavy feet are natural weapons. I can use my bonus action to make a melee weapon attack against tiny creature on the ground, or a small or medium creature if they are prone. If it hits, my feet deal 1d6 + my Strength modifier in bludgeoning damage to the target creature. I'm are unable make stomping attacks if I'm prone.",
	spellcastingAbility: [4, 5, 6],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: [
		"Common",
		"Haashir"
	],
	vision: [
		["Tremorsense (see \"Seismic Hearing\")", 15]
	],
	features: {
		"stomp": {
			name: "Stomp",
			source: ["OG", 46],
			minlevel: 1,
			action: ["bonus action", ""],
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*\bhaashir\b)(?=.*\bstomp?\b).*$/i,
				name: "Haashir Stomp",
				source: ["OG", 46],
				damage: [1, 6, "bludgeoning"],
				description: "Can only damage tiny creatures or small and medium creatures which are prone.",
				abilitytodamage: true,
				selectNow: true,
			}, ],
		},
		"haashir magic": {
			name: "Haashir Magic",
			source: ["OG", 46],
			minlevel: 1,
			spellcastingBonus: [{
					name: "Haashir Magic Cantrip",
					class: ["any"],
					level: [0, 0],
					firstCol: "atwill",
				},
				{
					name: "Haashir Magic Level 1",
					class: ["any"],
					level: [1, 1],
					firstCol: "oncelr",
					magicItemComponents: false
				}
			],
			toNotesPage: [{
				note: desc([
					"I learn one cantrip and one 1st-level spell to cast once per long rest without material",
					"components.  From 5th level I can also learn two 2nd-level spells to cast once per long",
					"rest without material components. I can also use either of these to upcast my 1st-level",
					"Haashir spell. Int, Wis, or Cha is my spellcasting ability for these spells."
				]),
				page3notes: true,
				name: "Haashir Magic",
			}],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName) {
						if (spName == 'haashir og') {
							spellObj.description = spellObj.description.replace(/ \(\d+k? ?gp( cons\.?)?\)/i, "");
							spellObj.components = spellObj.components.replace(/,M.?/g, '');
							spellObj.compMaterial = "";
						}
					},
					"I require no material components to cast spells learned through Haashir Magic."
				]
			}
		},
		"haashir magic 5": {
			name: "Haashir Magic",
			source: ["OG", 46],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Haashir Magic Level 2",
				class: ["any"],
				level: [2, 2],
				firstCol: "oncelr",
				times: 2,
			}]
		},
		"seismic hearing": {
			name: "Seismic Hearing",
			source: ["OG", 46],
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I can detect seismic signals and hear low pitched sounds inaudible to other races. By",
					"comparing the timing of signals received by each of my feet, I can determine the sound’s",
					"direction. While standing on a stable surface on two feet, I have a tremorsense of 15 feet."
				]),
				page3notes: true,
				name: "Seismic Hearing",
			}],
		},
	}
};

RaceList["kamelon og"] = {
	name: "Kamelon",
	sortname: "Kamelon",
	plural: "Kamelon",
	regExpSearch: /^(?=.*kamelon).*$/i,
	source: ["OG", 35],
	age: " mature at 12 years, and live up to 60 years.",
	height: " stand between 3 and 4 feet tall.",
	weight: " weigh an average of 50 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of  " + ConvertToMetric("80 lbs", 0.1) + ".",
	size: [4],
	carryingCapacity: 1,
	scores: [0, 0, 0, 0, 2, 1],
	scorestxt: "+2 Wis, +1 Cha",
	trait: "Kamelon (+2 Wis, +1 Cha)\n\n\u25C6 Eye Alignment. As a bns a I can to focus my eyes on a creature or object. Until the end of my next turn, I have adv. on the first ranged attack I vs. that crea., or any Wis (Insight/Perception) checks I make against it. I can use this trait once per short or long rest.\n\n\u25C6 Unseen Magic. I can cast the blur spell once per long rest. From level 5 on I can also cast the invisibility spell once per long rest. Int, Wis, or Cha is my spellcasting ability for these spells.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Stealth"],
	skillstxt: "Stealth",
	speed: {
		walk: {
			spd: 25,
			enc: 10
		},
		climb: "walk",
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: [
		"Common",
		"Kameleon"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\bkamelon\b)(?=.*\btongue?\b).*$/i,
		name: "Kamelon Tongue",
		source: ["OG", 47],
		damage: [1, 4, "bludgeoning"],
		ability: 2,
		abilitytodamage: true,
		selectNow: true,
		description: "Finesse, reach; on hit I can pull a crea max 1 size larger than me 5ft closer using a bns a.",
	}, ],
	features: {
		"unseen magic": {
			name: "Unseen Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Unseen Magic",
				spells: ["blur"],
				selection: ["blur"],
				firstCol: "oncelr"
			}],
		},
		"unseen magic 5": {
			name: "Unseen Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Unseen Magic",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr"
			}],
		},
		"tongue": {
			name: "Tongue",
			source: ["OG", 35],
			minlevel: 1,
			action: ["bonus action", "Pull 5ft w/ Tongue Attack"],
			toNotesPage: [{
				note: desc([
					"I have a whip-like tongue with a sticky coating at the tip, with which I can make unarmed",
					"strikes with the reach and finesse properties. If I hit with it, I deal bludg. dmg equal to 1d4",
					"+ my Dex mod. When I hit a creature no more than one size category larger than me with",
					"my tongue, I can use my bonus action to pull the target 5 feet toward me."
				]),
				page3notes: true,
				name: "Tongue",
			}],
		},
	}
};

RaceList["kangaren og"] = {
	name: "Kangaren",
	sortname: "Kangaren",
	plural: "Kangaren",
	regExpSearch: /^(?=.*kangaren).*$/i,
	source: ["OG", 48],
	age: " mature at 15 years, and live up to 80 years.",
	height: " have lean, muscular bodies, standing between 6 and 7 feet tall.",
	weight: " weigh an average of 200 pounds.",
	heightMetric: " have lean, muscular bodies, standing between " + ConvertToMetric("6 ft", 0.1) + " and " + ConvertToMetric("7 ft", 0.1) + " tall.",
	weightMetric: " weighing an average of " + ConvertToMetric("200 lbs", 0.1) + ".",
	size: [3],
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Kangaren (+2 Str, +1 Con)\n\u25C6 Natural Athlete. I'm proficient in the Athletics skill.\n\u25C6 Arid Adaptation. I'm acclimated to dry climates and require only half the normal amount of water to survive. I'm also naturally adapted to hot climates, as described in Chapt. 5 of the DMG.\n\u25C6 Extended Long Jump. I can add twice my proficiency bonus in ft when making a long jump.\n\u25C6 Mighty Hop. If I move at least 20 ft in a straight line on the ground without diff.ter., I gain +10ft of movement, which can only used along the same line.",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	languageProfs: [
		"Common",
		"Kangat"
	],
	skills: ["Athletics"],
	skillstxt: "Athletics",
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\bkangaren\b)(?=.*\bfists?\b).*$/i,
		name: "Kangaren Fists",
		source: ["OG", 48],
		damage: [1, 4, "bludgeoning"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	features: {
		"combat training": {
			name: "Combat Training",
			source: ["OG", 48],
			minlevel: 1,
			action: ["bonus action", "Kangaren Fists (w/ atk action)"],
			toNotesPage: [{
				note: desc([
					"My muscular arms and legs are natural weapons. Hits with them, deal 1d4 + my Str mod",
					"bludg dmg. When I take the Attack action, I can make one extra attack as a bns a with them."
				]),
				page3notes: true,
				name: "Combat Training",
			}],
		},
	}
};

RaceList["kunek og"] = {
	name: "Kunek",
	sortname: "Kunek",
	plural: "Kunek",
	regExpSearch: /^kunek$/i,
	source: ["OG", 49],
	age: " mature at 5 years, and live up to 30 years.",
	height: " are between 3 and 4 feet tall.",
	weight: " weigh an average of 35 pounds",
	heightMetric: " are between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of " + ConvertToMetric("35 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 1, 0, 0, 2, 0],
	scorestxt: "+2 Wis, +1 Dex",
	trait: "Kunek (+2 Wis, +1 Dex)\n\u25C6 Nimble Hop. I can move through the space of any creature at least one size category larger than mine.\n\u25C6 Swift Warning. I receive half my Wis mod as a bonus to initiative.\n\u25C6 El-ahrairah’s Favored. I'm proficient in the Insight skill.\n\u25C6 Dimvision. I can see in dim light within 30 feet of you as if it were bright light, and in darkness as if it were dim light.\n\u25C6 Keen Hearing. I'm proficient in the Perception skill, and have advantage on checks I make with it that rely on hearing.",
	skills: ["Insight", "Perception"],
	skillstxt: "Insight and Perception",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	vision: [
		["Dimvision", 30],
		"Adv. on Perception checks that rely on hearing."
	],
	languageProfs: [
		"Common",
		"Kunek"
	],
	addMod: {
		type: "skill",
		field: "Init",
		mod: "max(Wis|2)/2",
		text: "I can add half my Wisdom modifier to initiative rolls."
	},
	features: {
		"kunek agility": {
			name: "Kunek Agility",
			source: ["OG", 37],
			minlevel: 1,
			usages: 1,
			recovery: "Turn 0ft",
			toNotesPage: [{
				note: desc([
					"My reflexes and agility allow me to move with a burst of speed. When I move on my turn, I",
					"can double my speed. Once I use this trait, I can’t use it again until I move 0 ft on my turn."
				]),
				page3notes: true,
				name: "Kunek Agility",
			}],
		},
	}
};

RaceList["hundr madra og"] = {
	name: "Hundr Madra",
	sortname: "Madra, Hundr",
	plural: "Hundr Madra",
	regExpSearch: /^(?=.*Hundr)(?=.*Madra).*$/i,
	source: ["OG", 50],
	age: " mature at 8 years and live up to 50 years.",
	height: " stand between 4 and 5 feet tall.",
	weight: " average about 130 pounds",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("130 lbs", 0.1) + ".",
	size: [3],
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Hundr Madra (+2 Wis, +1 Dex)\n\u25C6 Keen Senses. I'm proficient in Perception\n\u25C6 Tracker. I'm proficient in Intimidation, Investigation or Survival.\n\u25C6 Pack Bravery. Adv. saves against being frightened if ally in 30 ft.\n\u25C6 Canine Jaws. My teeth are dealing 1d6 + my Str mod pierc. dmg.\n\u25C6 Warden’s Legacy. I know the true strike cantrip. From 3rd level I can cast hunter’s mark once per long rest using this trait.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Perception"],
	skillstxt: "Perception and one of Intimidation, Investigation or Survival",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: [
		"Common",
		"Madra"
	],
	savetxt: {
		adv_vs: ["frightened if ally within 30ft"]
	},
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\bcanine\b)(?=.*\bjaws?\b).*$/i,
		name: "Canine Jaws",
		source: ["OG", 35],
		damage: [1, 6, "piercing"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	features: {
		"warden's legacy": {
			name: "Warden's Legacy",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Warden's Legacy",
				spells: ["true strike"],
				selection: ["true strike"],
				firstCol: "atwill"
			}],
		},
		"warden's legacy3": {
			name: "Warden's Legacy",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Warden's Legacy",
				spells: ["hunter's mark"],
				selection: ["hunter's mark"],
				firstCol: "oncelr"
			}],
		},
	}
};

RaceList["koer madra og"] = {
	name: "Koer Madra",
	sortname: "Madra, Koer",
	plural: "Koer Madra",
	regExpSearch: /^(?=.*Koer)(?=.*Madra).*$/i,
	source: ["OG", 50],
	age: " mature at 8 years and live up to 50 years.",
	height: " are between 3 and 4 feet tall.",
	weight: " average about 55 pounds",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("55 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 0, 1, 0, 0, 2],
	scorestxt: "+2 Cha, +1 Con",
	trait: "Koer Madra (+2 Cha, +1 Con)\n\u25C6 Keen Senses. I'm proficient in Perception\n\u25C6 Clever Companion. I'm proficient in Insight, Performance or Persuasion.\n\u25C6 Pack Bravery. Adv. saves against being frightened if ally in 30 ft.\n\u25C6 Language Learner. I learn an additional language of my choice.\n\u25C6 Warden’s Legacy. I know the vicious mockery cantrip. From 3rd level I can cast zephyr strike once per long rest using this trait.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Perception"],
	skillstxt: "Perception and one of Insight, Performance or Persuasion",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: [
		"Common",
		"Madra",
		["from Koer Madra", 1]
	],
	savetxt: {
		adv_vs: ["frightened if ally within 30ft"]
	},
	features: {
		"comate's legacy": {
			name: "Comate's Legacy",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Comate's Legacy",
				spells: ["vicious mockery"],
				selection: ["vicious mockery"],
				firstCol: "atwill"
			}],
		},
		"comate's legacy3": {
			name: "Comate's Legacy",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Comate's Legacy",
				spells: ["zephyr strike"],
				selection: ["zephyr strike"],
				firstCol: "oncelr"
			}],
		},
	}
};