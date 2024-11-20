/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*	-INFORMATION-
	Subject:	Creatures
	Effect:		This script adds 42 Familiars from Old Gus's Errata
	Source 1:	https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link
	Source 2:	https://www.reddit.com/r/UnearthedArcana/comments/z5872u/old_gus_errata_wanderers_of_the_infinite_skies/
	Author:		https://reddit/u/callmepartario
	LLM Import:	Rocky
	Code by:	xika
	Date:		2024-11-20 (sheet v13)
*/
/*
	Changelog:
	2024-11-20	Initial Release

*/
var iFileName = "Old_Gus_Errata-Familiars.js";
RequiredSheetVersion("13.2.0");
SourceList.OG = {
	name: "Old Gus' Errata - Wanderer of Infinite Skies",
	abbreviation: "OG",
	abbreviationSpellsheet: "OG",
	group: "Old Gus Errata",
	url: "https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link",
	date: "2022/01/08"
};
CreatureList["amethyst wyrmling og"] = {
	name: "Amethyst Wyrmling",
	source: [
		["OG", 287]
	],
	size: 5,
	type: "Dragon",
	alignment: "Neutral",
	ac: 13,
	hp: 10,
	hd: [3, 4],
	speed: "15 ft, fly 35 ft",
	scores: [3, 16, 12, 14, 14, 14],
	damage_resistances: "force, thunder",
	senses: "Darkvision 60 ft",
	languages: "Draconic",
	challengeRating: "1",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The Wyrmling’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: mage hand, mold earth",
			"   1/day: shield\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}, {
		name: "Gem Lozenge (2/Day)",
		ability: 3,
		damage: [2, 6, "piercing"],
		range: "60 ft",
		description: "Gem lozenge shatters in 5-ft sphere. Dex save for half damage.",
		abilitytodamage: false,
		dc: true
	}],
};
CreatureList["anqa og"] = {
	name: "Anqa",
	source: [
		["OG", 287]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Unaligned",
	languages: "Any four languages",
	ac: 13,
	hp: 4,
	hd: [2, 4],
	speed: "30 ft, climb 30 ft",
	scores: [8, 16, 11, 11, 14, 12],
	skills: {
		"acrobatics": +5,
		"perception": +4
	},
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	traits: [{
		name: "Glider",
		description: "The anqa has a thin membrane between its limbs that can slow its fall and allow it to glide. When it falls and isn't incapacitated, it can subtract up to 100 feet from the fall when calculating falling damage and can move up to 2 feet horizontally for every 1 foot it descends."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 11)",
		description: desc(["The Anqa’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: prestidigitation",
			"   1/day: color spray\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}]
};
CreatureList["awakened tome og"] = {
	name: "Awakened Tome",
	source: [
		["OG", 288]
	],
	size: 5,
	type: "Construct",
	alignment: "Lawful Neutral",
	languages: "Any four languages",
	ac: 13,
	hp: 4,
	hd: [2, 4],
	speed: "5 ft, fly 30 ft (hover)",
	scores: [12, 11, 10, 17, 14, 12],
	skills: {
		"arcana": +5,
		"history": +5
	},
	damage_vulnerabilities: "fire",
	damage_resistances: "bludgeoning",
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	actions: [{
		name: "Dispense Advice (2/Day)",
		description: "The tome searches the knowledge held within its pages and dispenses helpful advice to a creature within 30 feet of it that can hear it. Within the next minute, the target can roll two d4s and add the number rolled to one ability check of its choice. The roll can be made before or after making the ability check but before the results are announced."
	}],
	features: [{
		name: "False Appearance",
		description: "While the tome remains motionless, it is indistinguishable from a normal book."
	}, {
		name: "Flyby",
		description: "The tome doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Drop Knowledge",
		ability: 1,
		damage: [1, "", "bludgeoning"],
		range: "Melee (5 ft)",
		description: "Wisdom Save or + 2 psychic damage and disadv. on the next attack roll before the end of its next turn"
	}]

};
CreatureList["basilisk youngling og"] = {
	name: "Basilisk Youngling",
	source: [
		["OG", 288]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Unaligned",
	ac: 14,
	hp: 7,
	hd: [2, 4],
	speed: "20 ft",
	scores: [12, 10, 13, 2, 9, 7],
	skills: {
		"stealth": +4
	},
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	actions: [{
		name: "Petrifying Gaze (2/Day)",
		description: "The basilisk forces a creature within 30 feet of itself that it can see and that can see it to make a DC 13 Constitution saving throw. On a failed save, the creature's flesh hardens and becomes rigid and inflexible. The target is restrained for up to 1 minute. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Creatures immune to petrification automatically succeed their saving throw."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, "", "piercing"],
		range: "Melee (5 ft)",
		description: "Deals an additional 2 (1d4) poison damage.",
		abilitytodamage: false
	}]
};
CreatureList["blink pup og"] = {
	name: "Blink Pup",
	source: [
		["OG", 289]
	],
	size: 5,
	type: "Fey",
	alignment: "Lawful Good",
	languages: "Understands Sylvan but can't speak",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "35 ft",
	scores: [8, 14, 12, 10, 13, 11],
	skills: {
		"perception": +3,
		"stealth": +4
	},
	senses: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Hearing and Smell",
		description: "The pup has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [3, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}],
	actions: [{
		name: "Teleport (2/Day)",
		description: "The pup magically teleports up to 40 ft to an unoccupied space it can see. Before or after teleporting, it can make one bite attack."
	}]
};
CreatureList["bloombat og"] = {
	name: "Bloombat",
	source: [
		["OG", 289]
	],
	size: 5,
	type: "Fey",
	alignment: "Neutral",
	languages: "Understands Sylvan but can't speak",
	ac: 12,
	hp: 3,
	hd: [1, 4],
	speed: "10 ft, fly 30 ft",
	scores: [2, 15, 10, 10, 13, 7],
	skills: {
		"perception": +3,
		"stealth": +4
	},
	senses: "Blindsight 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Camouflage",
		description: "The Bloombat has advantage on Dexterity (Stealth) checks it makes in terrain with ample vegetation."
	}, {
		name: "Echolocation",
		description: "The Bloombat can't use its blindsight while deafened."
	}, {
		name: "Keen Hearing",
		description: "The Bloombat has advantage on Wisdom (Perception) checks that rely on hearing."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 11)",
		description: desc(["The bloombats’s innate spellcasting ability is Wisdom.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: druidcraft",
			"   1/day: entangle, snare\n"
		])
	}],

	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, "", "acid"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["bubblumph og"] = {
	name: "Bubblumph",
	source: [
		["OG", 290]
	],
	size: 5,
	type: "Aberration",
	alignment: "Lawful Good",
	languages: "Common, telepathy 30 ft",
	ac: 12,
	hp: 5,
	hd: [2, 4],
	speed: "5 ft, fly 25 ft",
	scores: [3, 14, 10, 12, 12, 11],
	skills: {
		"insight": +3,
		"investigation": +3,
		"perception": +3
	},
	senses: "Darkvision 60 ft",
	challengeRating: "0",
	proficiencyBonus: 2,
	traits: [{
		name: "Advanced Telepathy",
		description: "The Bubblumph can perceive the content of any telepathic communication used within 30 feet of it. It can't be surprised by creatures with any form of telepathy."
	}, {
		name: "Telepathic Shroud",
		description: "The Bubblumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Psychic Bubbles",
		ability: 2,
		damage: [1, "", "psychic"],
		range: "Melee (10 ft)",
		description: "The target has disadvantage on the first attack it makes on its next turn.",
		abilitytodamage: false
	}]
};
CreatureList["bumblebear og"] = {
	name: "Bumblebear",
	source: [
		["OG", 290]
	],
	size: 5,
	type: "Fey",
	alignment: "Lawful Neutral",
	ac: 13,
	hp: 4,
	hd: [1, 4],
	speed: "20 ft, fly 30 ft",
	scores: [3, 16, 12, 2, 12, 7],
	skills: {
		"acrobatics": +5,
		"perception": +3
	},
	senses: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Smell",
		description: "The Bumblebear has advantage on Wisdom (Perception) checks that rely on smell."
	}],
	traits: [{
		name: "Sting",
		description: "Stung targets must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Sting",
		ability: 2,
		damage: [1, "", "piercing"],
		range: "Melee (5 ft)",
		description: "DC 11 Con Save or +10 poison dmg; see \"Traits\" if reduced to 0 HP",
		abilitytodamage: false
	}]
};
CreatureList["cactoor og"] = {
	name: "Cactoor",
	source: [
		["OG", 291]
	],
	size: 5,
	type: "Plant",
	alignment: "Unaligned",
	ac: 14,
	hp: 7,
	hd: [2, 4],
	speed: "30 ft",
	scores: [6, 14, 12, 3, 12, 10],
	skills: {
		"perception": +3
	},
	senses: "Tremorsense 5 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Desert Dweller",
		description: "The Cactoor is acclimated to deserts and naturally adapted to extreme heat."
	}, {
		name: "False Appearance",
		description: "While the Cactoor remains motionless, it is indistinguishable from a tiny cactus."
	}],
	traits: [{
		name: "Prickly",
		description: "A creature that touches the Cactoor takes piercing damage equal to its proficiency bonus (2)."
	}],
	actions: [{
		name: "Create Water (1/Day)",
		description: "The Cactoor can create up to 1 gallon of clean water within 5 feet of itself."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Ram",
		ability: 2,
		damage: [3, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}, {
		name: "Barrage (2/Day)",
		ability: 2,
		damage: [7, "", "piercing"],
		range: "30 ft",
		description: "Creatures within a 5-foot-radius sphere must make a Dex save or take full damage; half on success",
		dc: true,
		abilitytodamage: false
	}]
};
CreatureList["carbuncle og"] = {
	name: "Carbuncle",
	source: [
		["OG", 291]
	],
	size: 4,
	type: "Monstrosity",
	alignment: "Neutral",
	ac: 12,
	hp: 5,
	hd: [1, 6],
	speed: "30 ft",
	scores: [9, 14, 14, 12, 11, 14],
	skills: {
		"stealth": +4
	},
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	traits: [{
		name: "Treasure Scent",
		description: "The Carbuncle can detect the presence and direction of precious metals and gems within a range of up to 30 feet. It can't detect treasure if more than five feet of stone or one foot of common metal blocks the path."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The Carbuncle’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: blade ward, light",
			"   1/day: mislead, shield\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["catspider og"] = {
	name: "Catspider",
	source: [
		["OG", 292]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Chaotic Neutral",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "40 ft, climb 40 ft",
	scores: [4, 16, 10, 3, 12, 7],
	skills: {
		"perception": +3,
		"stealth": +5
	},
	senses: "Darkvision 30 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Smell",
		description: "The catspider has advantage on Wisdom (Perception) checks that rely on smell."
	}, {
		name: "Spider Climb",
		description: "The catspider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
	}, {
		name: "Web Walker",
		description: "The catspider ignores movement restrictions caused by webbing."
	}],
	traits: [{
		name: "Web Sense",
		description: "While in contact with a web, the catspider knows the exact location of any other creature in contact with the same web."
	}, {
		name: "Vermin Hunter",
		description: "The catspider has advantage on attack rolls against Beasts of its own size category or smaller."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, "", "piercing"],
		range: "Melee (5 ft)",
		description: "on hit make DC 10 Constitution save or take an +3 poison damage"
	}]
};
CreatureList["cherub og"] = {
	name: "Cherub",
	source: [
		["OG", 292]
	],
	size: 5,
	type: "Celestial",
	alignment: "Chaotic Good",
	languages: "Common, Celestial",
	ac: 13,
	hp: 6,
	hd: [2, 4],
	speed: "20 ft, fly 25 ft",
	scores: [4, 16, 12, 12, 12, 14],
	skills: {
		"acrobatics": +5,
		"persuasion": +4
	},
	damage_resistances: "radiant",
	senses: "Darkvision 60 ft",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The Cherub’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: friends",
			"   1/day: charm person, suggestion\n"
		])
	}],
	traits: [{
		name: "Heartwood Bow",
		description: "\nOn a hit with the Heartwood Bow, the cherub can cast charm person or suggestion upon the target (if available), even if the target is out of the range of the spell, and the cherub can choose a creature it can see other than itself to be charmed by the target. The target makes their saving throw against the spell as normal, even if they are in combat with the cherub or its allies."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Heartwood Bow",
		ability: 2,
		damage: [4, "", "piercing"],
		range: "Ranged (80/160 ft)",
		description: "on hit Cherub can cast charm person or suggestion upon the target (see \"Traits\")"
	}]
};
CreatureList["chromatic whelk og"] = {
	name: "Chromatic Whelk",
	source: [
		["OG", 293]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Unaligned",
	ac: 12,
	hp: 5,
	hd: [2, 4],
	speed: "15 ft, climb 15 ft",
	scores: [10, 5, 11, 6, 10, 3],
	saves: [2, -1, 2, 0, 2, -2],
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 10)",
		description: desc(["The whelk’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: dancing lights, resistance, shield",
			"   1/day: treasure scent\n"
		])
	}],
	features: [{
		name: "Magic Resistance",
		description: "The whelk has advantage on saving throws against spells and other magical effects."
	}, {
		name: "Spider Climb",
		description: "The whelk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["emerald wyrmling og"] = {
	name: "Emerald Wyrmling",
	source: [
		["OG", 293]
	],
	size: 5,
	type: "Dragon",
	alignment: "Lawful Neutral",
	languages: "Draconic",
	ac: 13,
	hp: 10,
	hd: [3, 4],
	speed: "15 ft, fly 35 ft",
	damage_resistances: "fire",
	scores: [3, 16, 12, 14, 14, 14],
	senses: "Darkvision 60 ft",
	challengeRating: "1",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The wyrmling’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: prestidigitation",
			"   1/day: fog cloud, detect thoughts\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}, {
		name: "Sonic Breath (2/Day)",
		ability: 3,
		damage: [7, "", "thunder"],
		range: "10ft cone",
		description: "Con Save or full damage; half on success",
		dc: true,
		abilitytodamage: false
	}]
};
CreatureList["fluttering oculus og"] = {
	name: "Fluttering Oculus",
	source: [
		["OG", 294]
	],
	size: 5,
	type: "Aberration",
	alignment: "Unaligned",
	ac: 13,
	hp: 2,
	hd: [1, 4],
	speed: "0 ft, fly 40 ft (hover)",
	scores: [3, 12, 10, 12, 16, 5],
	skills: {
		"investigation": +3,
		"perception": +5
	},
	damage_immunities: "poison",
	condition_immunities: "charmed, poisoned",
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,

	features: [{
		name: "Vigilant",
		description: "The fluttering oculus can't be surprised.",
		addMod: [{
			type: "skill",
			field: "pass",
			mod: "3",
			text: "The Fluttering Oculus has a bonus of +3 to passive perception"
		}]
	}, {
		name: "Telepathic Bond",
		description: "While the fluttering oculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Eyebeam",
		ability: 4,
		damage: [3, "", "force"],
		range: "15/30 ft",
		description: ""
	}],
	actions: [{
		name: "Holograph (1/Day)",
		description: "The fluttering oculus scans the area around itself to a distance of 30 feet and stores the image in its memory. It can later use this ability to project the stored image as a transparent illusion. The fluttering oculus can only store one such image in its memory at a time."
	}]
};
CreatureList["gili-geli og"] = {
	name: "Gili-Geli",
	source: [
		["OG", 294]
	],
	size: 5,
	type: "Fey",
	alignment: "Chaotic Neutral",
	languages: "Sylvan",
	ac: 14,
	hp: 5,
	hd: [2, 4],
	speed: "0 ft, fly 30 ft (hover)",
	scores: [3, 18, 10, 11, 13, 14],
	skills: {
		perception: +3,
		stealth: +6
	},
	senses: "",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Flyby",
		description: "The gili-geli doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 11)",
		description: desc(["The gili-geli’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: gust, misty step, vicious mockery",
			"   1/day: expeditious retreat, gust of wind, gaseous form\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Claw",
		ability: 2,
		damage: [1, "", "slashing"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}]
};
CreatureList["glumping poozer og"] = {
	name: "Glumping Poozer",
	source: [
		["OG", 295]
	],
	size: 5,
	type: "Aberration",
	alignment: "Unaligned",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "30 ft, climb 15 ft",
	scores: [13, 15, 13, 2, 13, 8],
	skills: {
		"perception": +3,
		"stealth": +4
	},
	senses: "Blindsight 30 ft (blind beyond this radius)",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Echolocation",
		description: "The poozer can't use its blindsight while deafened."
	}, {
		name: "Chromatophores",
		description: "While the poozer remains motionless, it is indistinguishable from nonmagical terrain unless a creature succeeds on a DC 13 Intelligence (Investigation) check."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Proboscis",
		ability: 1,
		damage: [1, "", "acid"],
		range: "Melee (5 ft)",
		description: ""
	}],
	actions: [{
		name: "Attune Antennae (bonus action, 1 x short rest)",
		description: "The poozer casts the detect evil and good or detect magic spell without requiring verbal or material components. It doesn't need to concentrate on the spell. The spell ends if the poozer is incapacitated or paralyzed."
	}]
};
CreatureList["griffon chick og"] = {
	name: "Griffon Chick",
	source: [
		["OG", 295]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Unaligned",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "25 ft, fly 50 ft",
	scores: [13, 15, 13, 2, 13, 8],
	skills: {
		perception: +3
	},
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Sight",
		description: "The griffon chick has advantage on Wisdom (Perception) checks that rely on sight."
	}],
	actions: [{
		name: "Multiattack",
		description: "The griffon makes two attacks: one with its beak and one with its claws."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Beak",
		ability: 1,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}, {
		name: "Claws",
		ability: 1,
		damage: [2, "", "slashing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["ikkrippe og"] = {
	name: "Ikkrippe",
	source: [
		["OG", 296]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Neutral Evil",
	ac: 13,
	hp: 7,
	hd: [2, 4],
	speed: "30 ft, climb 30 ft",
	scores: [9, 16, 13, 4, 14, 8],
	skills: {
		"perception": +4,
		"stealth": +5
	},
	damage_resistances: "piercing, bludgeoning",
	senses: "Darkvision 60 ft, Tremorsense 10 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Sight",
		description: "The ikkrippe has advantage on Wisdom (Perception) checks that rely on sight."
	}, {
		name: "Spider Climb",
		description: "The ikkrippe can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Sickening Gaze",
		ability: 5,
		damage: [2, "", "necrotic"],
		range: "30 ft",
		description: "on hit DC 11 Constitution save or become poisoned for 1 minute"
	}]
};
CreatureList["illuminant mantis og"] = {
	name: "Illuminant Mantis",
	source: [
		["OG", 296]
	],
	size: 5,
	type: "Fey",
	alignment: "Chaotic Neutral",
	languages: "Sylvan",
	ac: 14,
	hp: 3,
	hd: [1, 4],
	speed: "15 ft, fly 25 ft",
	scores: [3, 18, 13, 9, 12, 14],
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Magic Resistance",
		description: "The mantis has advantage on saving throws against spells and other magical effects."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The mantis’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: dancing lights",
			"   1/day: invisibility\n"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bugaboo",
		ability: 6,
		damage: [2, "", "poison"],
		range: "60 ft",
		description: "Con Save; on fail dmg & mv 5ft rnd direct. (d4: north/south/east/west) & don't provoke opportunity attacks",
		dc: true,
		abilitytodamage: false
	}]
};
CreatureList["infectious protozoan og"] = {
	name: "Infectious Protozoan",
	source: [
		["OG", 297]
	],
	size: 5,
	type: "Aberration",
	alignment: "Unaligned",
	ac: 13,
	hp: 9,
	hd: [2, 4],
	speed: "0 ft, fly 35 ft. (hover)",
	scores: [3, 16, 14, 2, 10, 5],
	senses: "Darkvision 120 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Flyby",
		description: "The protozoan doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [2, "", "poison"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}],
	actions: [{
		name: "Infect (2/Day)",
		description: "The protozoan expels an infectious goo onto a creature it can see within range. The target must make a DC 12 Constitution saving throw. On a failed save, the creature is poisoned for 24 hours. While poisoned in this way, at the start of each of its turns, it rolls a d4. On a roll of 1, it spends its action that turn coughing and retching. Creatures immune to poison automatically succeed on this saving throw."
	}]
};
CreatureList["jellicat og"] = {
	name: "Jellicat",
	source: [
		["OG", 297]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Unaligned",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "5 ft, swim 30 ft",
	scores: [8, 16, 10, 4, 14, 8],
	skills: {
		"perception": +4,
		"stealth": +5
	},
	damage_resistances: "piercing",
	senses: "Blindsight 10 ft, Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Sight",
		description: "The jellicat has advantage on Wisdom (Perception) checks that rely on sight."
	}],
	actions: [{
		name: "Invisibility",
		description: "The jellicat magically turns invisible until it attacks or casts a spell or until its concentration ends (as if concentrating on a spell). Any equipment the jellicat wears or carries is invisible with it."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Stinging Tentacles",
		ability: 2,
		damage: [1, "", "poison"],
		range: "Melee (5 ft)",
		description: "On a hit against a Tiny creature, the target is grappled (escape DC 9)."
	}]
};
CreatureList["ki-rin youngling og"] = {
	name: "Ki-rin Youngling",
	source: [
		["OG", 298]
	],
	size: 4,
	type: "Celestial",
	alignment: "Lawful Good",
	languages: "Celestial, Common, telepathy 60 ft",
	ac: 15,
	hp: 10,
	hd: [3, 4],
	speed: "20 ft, fly 40 ft. (hover)",
	scores: [10, 12, 12, 14, 15, 16],
	skills: {
		"insight": +4,
		"perception": +4
	},
	damage_immunities: "poison",
	condition_immunities: "poisoned",
	senses: "Darkvision 60 ft",
	challengeRating: "1",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 13)",
		description: desc(["The ki-rin’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: light, mending, thaumaturgy",
			"   1/day: fog cloud, gaseous form, protection from poison\n"
		])
	}],
	features: [{
		name: "Magic Resistance",
		description: "The ki-rin has advantage on saving throws against spells and other magical effects."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Sacred Flame",
		ability: 6,
		damage: [10, "", "radiant"],
		range: "30 ft",
		description: "",
		abilitytodamage: false
	}]
};
CreatureList["kodama og"] = {
	name: "Kodama",
	source: [
		["OG", 298]
	],
	size: 5,
	type: "Plant",
	alignment: "Neutral",
	languages: "Common, Druidic, Elvish, Sylvan",
	ac: 16,
	hp: 9,
	hd: [2, 4],
	speed: "25 ft, climb 15 ft",
	scores: [9, 13, 14, 4, 15, 8],
	damage_vulnerabilities: "fire",
	damage_resistances: "piercing, bludgeoning",
	senses: "Darkvision 60 ft",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	actions: [{
		name: "Innate Spellcasting (DC 12)",
		description: desc(["The kodama’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: druidcraft"
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Shillelagh",
		ability: 5,
		damage: [3, "", "bludgeoning"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["mechanical wyrmling og"] = {
	name: "Mechanical Wyrmling",
	source: [
		["OG", 299]
	],
	size: 5,
	type: "Construct",
	alignment: "Lawful Neutral",
	languages: "Common, Draconic",
	ac: 13,
	hp: 6,
	hd: [2, 4],
	speed: "20 ft, fly 25 ft",
	scores: [10, 10, 13, 8, 9, 5],
	damage_immunities: "poison, psychic",
	condition_immunities: "charmed, exhaustion, frightened, petrified, poisoned",
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "False Appearance",
		description: "While the mechanical wyrmling remains motionless, it is indistinguishable from a small metallic statue."
	}, {
		name: "Magic Resistance",
		description: "The mechanical wyrmling has advantage on saving throws against spells and other magical effects."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [3, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}, {
		name: "Flame Jet",
		ability: 3,
		damage: [10, "", "fire"],
		range: "20 ft line",
		description: "Dexterity save; failed save: full damage; successful save: half as much",
		dc: true,
		abilitytodamage: false
	}]
};
CreatureList["mimic infant og"] = {
	name: "Mimic Infant",
	source: [
		["OG", 299]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Neutral",
	ac: 12,
	hp: 4,
	hd: [2, 4],
	speed: "10 ft, climb 10 ft",
	scores: [6, 12, 10, 6, 12, 8],
	skills: {
		stealth: +5
	},
	damage_immunities: "acid",
	condition_immunities: "prone",
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	traits: [{
		name: "Adhesive",
		description: "The mimic can adhere to Small or larger creatures by moving into their space. A creature can use its action to remove the mimic, moving it to the nearest available unoccupied space. The mimic has advantage on attack rolls against a creature it is adhered to."
	}],
	features: [{
		name: "False Appearance (Object Form Only)",
		description: "While the mimic remains motionless in object form, it is indistinguishable from an ordinary object."
	}],
	actions: [{
		name: "Shapechanger (1/Day)",
		description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [2, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["minidrone og"] = {
	name: "Minidrone",
	source: [
		["OG", 300]
	],
	size: 5,
	type: "Construct",
	alignment: "Lawful Neutral",
	language: "can understand the languages of its creator but speaks only preprogrammed responses",
	ac: 13,
	hp: 3,
	hd: [1, 4],
	speed: "25 ft",
	scores: [8, 13, 12, 12, 10, 5],
	senses: "Darkvision 60 ft",
	damage_immunities: "poison, psychic",
	condition_immunities: "charmed, exhaustion, frightened, petrified, poisoned",
	challengeRating: "0",
	proficiencyBonus: 2,
	features: [{
		name: "Axiomatic Mind",
		description: "The minidrone can’t be compelled to act in a manner contrary to its nature or its instructions."
	}],
	traits: [{
			name: "Spell Storage",
			description: "The minidrone’s master can store one spell of 1st-level by casting the spell while touching the minidrone."
		},
		{
			name: "Release Stored Spell",
			description: "The minidrone casts a stored spell, expending it. The stored spell has a spell save DC of 13 and an attack bonus of +5."
		}
	],
	attacksAction: 1,
	attacks: [{
		name: "Beam",
		ability: 4,
		damage: [3, "", "force"],
		range: "10/20 ft",
		description: "",
		abilitytodamage: false
	}]
};
CreatureList["mote of earth og"] = {
	name: "Mote of Earth",
	source: [
		["OG", 300]
	],
	size: 5,
	type: "Elemental",
	alignment: "Neutral",
	language: "Terran",
	ac: 14,
	hp: 11,
	hd: [2, 4],
	speed: "15 ft (30 ft rolling, 60 ft rolling downhill)",
	scores: [14, 8, 16, 5, 11, 5],
	damage_resistances: "poison",
	condition_immunities: "exhaustion, paralyzed, petrified, poisoned",
	senses: "Darkvision 60ft, Tremorsense 5 ft",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	features: [{
			name: "False Appearance",
			description: "While the mote remains motionless, it is indistinguishable from a normal tiny rock."
		},
		{
			name: "Siege Monster",
			description: "The mote deals double damage to objects and structures."
		}
	],
	actions: [{
		name: "Rolling Charge",
		description: "If the mote rolls at least 20 ft. straight toward a target and then hits it with a slam attack on the same turn, the target takes an additional 3 bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 12 Strength saving throw or be knocked prone."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Slam",
		ability: 1,
		damage: [3, "", "bludgeoning"],
		range: "Melee (5 ft)",
		description: "",
	}]
};
CreatureList["mote of fire og"] = {
	name: "Mote of Fire",
	source: [
		["OG", 301]
	],
	size: 5,
	type: "Elemental",
	alignment: "Neutral",
	languages: "Ignan",
	ac: 13,
	hp: 7,
	hd: [2, 4],
	speed: "20 ft, fly 30 ft",
	scores: [6, 16, 12, 6, 14, 7],
	damage_resistances: "fire, poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	traits: [{
		name: "Illumination",
		description: "At the start of each of its turns, the mote can choose to shed bright light in a 5-foot radius and dim light for an additional 5 feet instead."
	}],
	actions: [{
		name: "Fire Form",
		description: "The mote sheds dim light in a 5-foot radius, and can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the mote takes 1 fire damage. If the mote enters a creature’s space and stops there, the creature takes 1 fire damage."
	}],
	features: [{
		name: "Water Susceptibility",
		description: "If the mote is submerged in water, it takes 1d4 cold damage."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Touch",
		ability: 5,
		damage: [3, "", "fire"],
		range: "Melee (5 ft)",
		description: "target catches fire on hit & takes 5 fire dmg at the start of each of its turns; action to douse fire"
	}]
};
CreatureList["mote of ice og"] = {
	name: "Mote of Ice",
	source: [
		["OG", 301]
	],
	size: 5,
	type: "Elemental",
	alignment: "Neutral",
	languages: "Aquan, Auran",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "0 ft, fly 30 ft (hover)",
	scores: [3, 16, 10, 5, 14, 8],
	damage_resistances: "cold, poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses: "Tremorsense 5 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	traits: [{
		name: "Death Burst",
		description: "When the mote dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 12 Dexterity saving throw, taking 3 cold damage on a failed save, or half as much damage on a successful one."
	}],
	actions: [{
		name: "Frostbite (2/Day)",
		description: "The mote expels a blast of freezing air onto a Medium or smaller target it can see within 10 feet of itself. The target must succeed a DC 11 Constitution saving throw or half their movement speed reduced by half and have disadvantage on the next attack roll it makes before the end of its next turn. Creatures resistant or immune to cold damage succeed their saving throw automatically."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Freeze",
		ability: 5,
		damage: [3, "", "cold"],
		range: "10 ft",
		description: ""
	}]
};
CreatureList["mote of light og"] = {
	name: "Mote of Light",
	source: [
		["OG", 302]
	],
	size: 5,
	type: "Celestial",
	alignment: "Neutral Good",
	languages: "understands Celestial but can’t speak",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "0 ft, fly 30 ft. (hover)",
	scores: [3, 16, 10, 5, 12, 14],
	damage_resistances: "radiant, poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	skills: {
		insight: +3,
		perception: +3
	},
	traits: [{
		name: "Luminescent Form",
		description: "The mote can move through a space as narrow as 1 inch wide without squeezing. The mote emits bright light in a 5-foot radius and dim light for an additional 5 feet. As a bonus action, the mote can intensity the light to up to 20-foot radius (shedding dim light for an additional 20 feet), or dim the light to shed dim light in a 5-foot radius. The mote’s light is overpowered by the darkness spell."
	}],
	actions: [{
		name: "Dazzle (2/Day)",
		description: "The mote flashes in a dazzling display at one creature within 10 feet of the mote that can see it. The target must succeed on a DC 11 Wisdom saving throw or take 5 (1d10) radiant damage and be blinded until the end of its next turn. Creatures without eyes succeed this saving throw automatically."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Flare",
		ability: 5,
		damage: [4, "", "radiant"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["mote of shadow og"] = {
	name: "Mote of Shadow",
	source: [
		["OG", 302]
	],
	size: 5,
	type: "Fiend",
	alignment: "Neutral Evil",
	languages: "understands Abyssal but can’t speak",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "30 ft, climb 30 ft",
	scores: [3, 16, 10, 5, 12, 14],
	damage_resistances: "necrotic, poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses: "Darkvision 120 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	skills: {
		stealth: +5
	},
	features: [{
		name: "Devil’s Sight",
		description: "Magical darkness doesn’t impede the mote’s darkvision."
	}, {
		name: "Spider Climb",
		description: "The mote can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
	}],
	actions: [{
		name: "Shadow Step (2/Day)",
		description: "When in dim light or darkness, the mote can use a bonus action to teleport up to 60 feet to an unoccupied space it can see that is also in dim light or darkness. It then has advantage on the first melee attack it makes before the end of the turn."
	}, {
		name: "Extinguish (action)",
		description: "The mote extinguishes a small nonmagical light source within 5 feet of itself, such as a candle, torch, or campfire."
	}],
	traits: [{
		name: "Shadow Form",
		description: "The mote can move through a space as narrow as 1 inch wide without squeezing."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 5,
		damage: [4, "", "necrotic"],
		range: "Melee (5 ft)",
		description: "on hit, succeed on a DC 11 Constitution save or Strength score is reduced by 1d4"
	}]
};
CreatureList["oozeling og"] = {
	name: "Oozeling",
	source: [
		["OG", 303]
	],
	size: 5,
	type: "Ooze",
	alignment: "Unaligned",
	ac: 9,
	hp: 11,
	hd: [3, 4],
	speed: "10 ft, climb 10 ft",
	scores: [9, 8, 12, 1, 6, 2],
	damage_resistances: " acid, cold, fire",
	condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
	senses: "Blindsight 60 ft. (blind beyond this radius)",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	features: [{
		name: "Amorphous",
		description: "The oozeling can move through a space as narrow as 1 inch wide without squeezing."
	}, {
		name: "False Appearance",
		description: "While the oozeling remains motionless, it is indistinguishable from an oily pool or wet rock."
	}],
	attacksAction: 1,
	traits: [{
		name: "Pseudopod Corrosion",
		description: "The Oozeling’s attack can corrode metal objects that aren’t being worn or carried. If the target is nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. If the target is a nonmagical metal weapon, it takes a permanent and cumulative -1 penalty to damage rolls. If a weapon’s penalty drops to -5, the weapon is rendered useless. The oozeling can eat a four-inch diameter hole through 1-inch-thick, nonmagical metal in 1 hour."
	}],
	attacks: [{
		name: "Pseudopod",
		ability: 1,
		damage: [3, "", "acid"],
		range: "Melee (5 ft)",
		description: "+3 acid dmg, can corrode (see \"Traits\" below)"
	}]
};
CreatureList["otak og"] = {
	name: "Otak",
	source: [
		["OG", 303]
	],
	size: 5,
	type: "Beast",
	alignment: "Unaligned",
	ac: 13,
	hp: 5,
	hd: [2, 4],
	speed: "35 ft, climb 25 ft",
	scores: [3, 16, 10, 3, 12, 6],
	skills: {
		perception: +3,
		stealth: +5,
		survival: +3
	},
	senses: "Darkvision 60 ft",
	challengeRating: "0",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Smell",
		description: "The otak has advantage on Wisdom (Perception) checks that rely on smell."
	}, {
		name: "Otak Nimbleness",
		description: "The otak can move through the space of any creature that larger than itself."
	}],
	traits: [{
		name: "Nimble Escape",
		description: "The otak can take the Disengage or Hide action as a bonus action on each of its turns."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["paper drake og"] = {
	name: "Paper Drake",
	source: [
		["OG", 304]
	],
	size: 5,
	type: "Construct",
	alignment: "Unaligned",
	languages: "Common, Draconic",
	ac: 12,
	hp: 6,
	hd: [2, 4],
	speed: "15 ft, fly 25 ft",
	scores: [3, 16, 12, 17, 16, 14],
	skills: {
		arcana: +5,
		history: +5,
		perception: +5
	},
	damage_vulnerabilities: "fire",
	senses: "Darkvision 60 ft",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	attacksAction: 1,
	actions: [{
		name: "Innate Spellcasting (DC 13)",
		description: desc(["The drakes’s innate spellcasting ability is Intelligence.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: comprehend languages, vicious mockery",
			"   1/day: legend lore\n"
		])
	}],
	attacks: [{
		name: "Claw",
		ability: 2,
		damage: [1, "", "slashing"],
		range: "Melee (5 ft)",
		description: "",
		abilitytodamage: false
	}, {
		name: "Sleep Breath (2/Day)",
		ability: 3,
		damage: [0, "", ""],
		range: "15 ft cone",
		dc: true,
		description: "each crea Con save or unconscious for 10 minutes; ends on dmg; action by others to wake up"
	}]
};
CreatureList["phoenix hatchling og"] = {
	name: "Phoenix Hatchling",
	source: [
		["D&D Wiki", 304]
	],
	size: 5,
	type: "Elemental",
	alignment: "Neutral",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "20 ft, fly 50 ft",
	scores: [7, 14, 12, 2, 16, 12],
	damage_immunities: "fire, poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
	senses: "Darkvision 60 ft",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	actions: [{
		name: "Death Burst (1/Day)",
		description: "When the phoenix dies, it explodes in a burst of fire. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 3 (1d6) fire damage on a failed save, or half as much damage on a successful one."
	}],
	traits: [{
		name: "Fire Form",
		description: "The phoenix sheds bright light in a 5-foot radius and dim light for an additional 5 feet. A creature that touches the phoenix takes 1 fire damage. If the phoenix enters a creature’s space and stops there, the creature takes 1 fire damage. With an action, the phoenix can also ignite flammable objects that aren’t worn or carried."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Fiery Talons",
		ability: 5,
		damage: [0, "", "fire"],
		range: "Melee (5 ft)",
		description: "",
	}]
};
CreatureList["skull servant og"] = {
	name: "Skull Servant",
	source: [
		["OG", 305]
	],
	size: 5,
	type: "Undead",
	alignment: "Lawful Evil",
	languages: "all the languages it knew in life",
	ac: 13,
	hp: 7,
	hd: [2, 4],
	speed: "0 ft, 30 ft (hover)",
	scores: [3, 16, 12, 12, 11, 8],
	skills: {
		arcana: +3,
		history: +3
	},
	damage_immunities: "poison",
	condition_immunities: "exhaustion, poisoned",
	senses: "Darkvision 60 ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "False Appearance",
		description: "While the skull remains motionless, it is indistinguishable from an ordinary skull."
	}],
	actions: [{
		name: "Scare (1/Day)",
		description: "One creature of the skull’s choice within 20 feet of it must succeed on a DC 11 (8 + Int mod + Prof bonus) Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
	}],
	traits: [{
		name: "Death Burst.",
		description: "When the skull dies, it explodes into jagged bone fragments. Each creature within 5 feet of it must make a DC 12 Dexterity saving throw, taking 3 (1d6) slashing damage on a failed save, or half as much on a success."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [3, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["sporeling og"] = {
	name: "Sporeling",
	source: [
		["OG", 1]
	],
	size: 5,
	type: "Plant",
	alignment: "Unaligned",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "25 ft",
	scores: [7, 14, 12, 8, 12, 5],
	senses: "Darkvision 120ft",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	features: [{
		name: "Sporelinguist",
		description: "The sporeling knowns if myconids or other spore-based creatures within 120 feet of itself, and can communicate telepathically with them if within 30 feet"
	}],
	actions: [{
		name: "Rapport Spores (1/Day)",
		description: "The sporeling releases a puff of spores onto willing creatures within 5 feet of itself. For the next 1 hour, the spores grant willing creatures with an Intelligence of 2 or higher that aren’t Constructs, Elementals or Undead the ability to communicate telepathically with one another while within 30 feet of each other."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Spore Cloud",
		ability: 5,
		damage: [5, "", "poison"],
		range: "10 ft",
		description: ""
	}]
};
CreatureList["unicorn foal og"] = {
	name: "Unicorn Foal",
	source: [
		["OG", 306]
	],
	size: 4,
	type: "Celestial",
	alignment: "Lawful Good",
	languages: "Celestial, Sylvan, telepathy 60ft",
	ac: 13,
	hp: 13,
	hd: [3, 4],
	speed: "25 ft, fly 40 ft",
	scores: [10, 16, 14, 10, 15, 15],
	damage_immunities: "poison",
	condition_immunities: "charmed, paralyzed, poisoned",
	senses: "Darkvision 60 ft",
	challengeRating: "1",
	proficiencyBonus: 2,
	features: [{
		name: "Magic Weapons",
		description: "The unicorn’s weapon attacks are magical."
	}],
	actions: [{
		name: "Healing Touch (1/Day)",
		description: "The unicorn touches another creature with its horn. The target magically regains 9 (2d6 + 2) hit points. In addition, the touch removes one disease or neutralizes one poison afflicting the target."
	}, {
		name: "Teleport (1/Day)",
		description: "The unicorn magically teleports itself and one willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to an unoccupied space up to 60 feet away the unicorn can see."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Horn",
		ability: 2,
		damage: [3, "", "piercing"],
		range: "Melee (5 ft)",
		description: "Magical"
	}]
};
CreatureList["winged monkey og"] = {
	name: "Winged Monkey",
	source: [
		["OG", 306]
	],
	size: 5,
	type: "Monstrosity",
	alignment: "Chaotic Neutral",
	languages: "understands Common but can’t speak",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "30 ft, climb 20 ft, fly 30 ft",
	scores: [8, 14, 12, 5, 12, 10],
	skills: {
		acrobatics: +4,
		performance: +2,
		"sleight of hand": +4
	},
	senses: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	traits: [{
		name: "Pack Tactics",
		description: "The winged monkey has advantage on an attack roll against a creature if at least one of the monkey’s allies is within 5 feet of the creature and the ally isn’t incapacitated."
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [3 + "", "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["winged piglet og"] = {
	name: "Winged Piglet",
	source: [
		["OG", 307]
	],
	size: 5,
	type: "Fey",
	alignment: "Chaotic Good",
	languages: "understands Common but can’t speak",
	ac: 12,
	hp: 4,
	hd: [1, 4],
	speed: "30 ft, fly 30 ft",
	scores: [12, 13, 12, 10, 14, 8],
	skills: {
		acrobatics: +3,
		investigation: +2,
		survival: +4
	},
	senses: "",
	challengeRating: "0",
	proficiencyBonus: 2,
	features: [{
		name: "Keen Smell",
		description: "The winged piglet has advantage on Wisdom (Perception) checks that rely on smell."
	}],
	actions: [{
		name: "Innate Spellcasting (DC 11)",
		description: desc(["The anqa’s innate spellcasting ability is Charisma.",
			"It can cast these spells, requiring no mat. components:",
			"   At will: gust, mold earth\n"
		])
	}, {
		name: "Epicurean",
		description: "see Notes below"
	}],
	notes: [{
		name: "Epicurean",
		description: desc([
			"While resting in a wilderness, the piglet can assist a creature foraging for food during a short or long rest.",
			"Roll a d20, and use its results to determine the following:",
			"1-10: Results as normal.",
			"11-15: They find twice as much food as they normally would.",
			"16-19: They find medicinal herbs. Creatures that partake of the fresh herbs and spend hit dice",
			"           during the rest heal an additional hit point for each hit dice they spend.",
			"19-20: They find rare and valuable plants or ingredients, such as truffles or mandrake root."
		]),
		joinString: "\n   "
	}],
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [4, "", "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}]
};
CreatureList["wordworm og"] = {
	name: "Wordworm",
	source: [
		["OG", 307]
	],
	size: 5,
	type: "Aberration",
	alignment: "Neutral",
	languages: "understands all spoken languages but can’t speak",
	ac: 10,
	hp: 3,
	hd: [1, 4],
	speed: "10 ft, swim 20 ft",
	scores: [1, 10, 10, 15, 13, 7],
	saves: ["", "", "", +4, +3, ""],
	senses: "Darkvision 30 ft",
	damage_immunities: "psychic",
	challengeRating: "0",
	proficiencyBonus: 2,
	features: [{
		name: "Symbiotic",
		description: "The wordworm can live comfortably inside a Small or larger creature for as long as its host survives."
	}],
	actions: [{
		name: "Synaptic Relay (2/day)",
		description: "When the wordworm or its host makes an Intelligence or Wisdom ability check or saving throw, it can choose to gain advantage on the roll."
	}, {
		name: "Enter Host",
		description: "see Notes below"
	}],
	notes: [{
		name: "Enter Host",
		description: desc([
			"The wordworm enters the body of a Small or larger creature that through an orifice (for example, an ear,",
			"nose, or mouth). Constructs and Undead cannot be entered, and an unwilling creature can make a DC 8",
			"Dexterity saving throw to avoid being entered. For the duration, the wordworm can’t use its tremorsense,",
			"and it has total cover against attacks and other effects originating outside the host. The host gains resist.",
			"to psychic damage, and can understand any spoken language it hears, If a creature communicates",
			"telepathically with the worm, the host creature also perceives those communications. The wordworm",
			"can use an action to exit the host, appearing in an unoccupied space within 5 feet of them."
		])
	}],
	attacksAction: 1,
	attacks: [{
		name: "Psychic Bite",
		ability: 2,
		damage: [3, "", "psychic"],
		range: "30 ft",
		description: ""
	}]
};