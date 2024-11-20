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
	Code by:	xika, fish, 123499
	Date:		2024-11-20 (sheet v13)
*/
/*
	Todo & Notes:
	- Dryad & some Plants: visualize hours in contact with fertile soil?
	- Outsider Feat Choice like UA 22868?
	- Darkling Ritual Feat size/weight change like UA 25168 & UA 29710?
*/
/*
	Changelog:
	2024-11-20	Dwarves, Elves, Beasts, Fey and Undead done without optional racial Feats
*/
/*
	Work in Progress!
	Dwarves		5/5 	(page 19)
	Elves		3/3 	(page 24)
	Goblins		0/5
	Orcs		0/2
	Beast		33/33	(page 34)
	Fey			16/16	(page 63)
	Monstrous	0/16
	Plant		0/8
	Undead		6/6		(page 104)
	Outsiders	0/4
*/
var iFileName = "Old_Gus_Errata-Races.js";
RequiredSheetVersion("13.2.0");
//empty Class for Race testing purposes
ClassList["testing og"] = {
	regExpSearch: /(testing)|(test)/i,
	name: "Testing",
	source: ["OG", 0],
	primaryAbility: "Constitution",
	prereqs: "Strength 8 or Dexterity 8",
	die: 4,
	improvements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	saves: ["Int"],
	armor: [
		[false, false, false, false],
		[false, false, false, false]
	],
	weapons: [
		[false, false],
		[false, false]
	],
	equipment: "Nothing",
	subclasses: [],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features: {}
};

function removeSpellCosts(spellKey, spellObj, spName, bookKey, removeRitual) {
	reg = new RegExp(bookKey, "i");
	if (reg.test(spName)) {
		spellObj.description = spellObj.description.replace(/ \(\d+k? ?gp( cons\.?)?\)/i, "");
		spellObj.components = spellObj.components.replace(/,M.?/g, '');
		spellObj.compMaterial = "";
		if (removeRitual) {
			spellObj.ritual = false;
		}
		return true;
	}
}
SpellsList["colorspray level 2"] = {
	name: "Color Spray",
	regExpSearch: /\(color spray\)/i,
	source: ["OG", 74],
	defaultExcluded: false,
	classes: [],
	level: 2,
	school: "Illus",
	time: "1 a",
	timeFull: "1 action",
	range: "S:15-ft cone",
	rangeMetric: "S:15-ft cone",
	components: "V,S",
	compMaterial: "",
	duration: "1 rnd",
	description: "8d10 HP of crea blinded, starting with the lowest current HP crea",
	descriptionFull: "A dazzling array of flashing, colored light springs from your hand. Roll 8d10, the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see)." +
		"\n   " + "Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for the creature to be affected.",
};
SpellsList["animal friendship level 2"] = {
	name: "Animal Friendship",
	source: ["OG", 74],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	compMaterial: "",
	duration: "24 h",
	save: "Wis",
	description: "2 beasts (Int>=4) save or charmed for the duration",
	descriptionFull: "This spell lets you convince two beasts that you mean it no harm. Choose one or two beasts that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends."
};
SpellsList["charm person level 2"] = {
	name: "Charm Person",
	source: ["OG", 76],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "1 h",
	save: "Wis",
	description: "2 humanoids, each max 30 ft apart, save or charmed; adv. on save if me/ally is fighting it",
	descriptionFull: "You attempt to charm up to two humanoids you can see within range. They must make a Wisdom saving throw, and do so with advantage if you or your companions are fighting them. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
};
SpellsList["fog cloud level 2"] = {
	name: "Fog Cloud",
	source: ["OG", 79],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "40-ft rad fog that spreads around corners; heavily obscures; 10 mph wind disperses it",
	descriptionFull: "You create a 40-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."
};
SpellsList["thundering stomp og"] = {
	name: "Thundering Stomp",
	classes: [],
	source: ["OG", 81],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "5ft",
	components: "S",
	duration: "Instantaneous",
	descriptionCantripDie: "all in 5ft Con Save or `CD`d8 thunder dmg and deafened for 1 trn; audible in 100ft.",
	description: "all in 5ft Con Save or 1d8 (+1 at CL 5, 11, 17) thunder dmg and deafened for 1 trn; audible in 100ft",
	descriptionFull: "As an action, you stomp your foot down, creating a thundering sound audible out to 100 feet. All creatures within 5 feet of you must make a Constitution saving throw DC 8 + your proficiency bonus + your Strength modifier. On a failure, a creature takes 1d8 thunder damage and is deafened until the start of your next turn. This damage increases at 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["thundering stomp og"] = {
	name: "Thundering Stomp",
	source: ["OG", 81],
	regExpSearch: /^(?=.*thundering)(?=.*stomp).*$/i,
	type: "Cantrip",
	ability: 1,
	dc: true,
	damage: ["C", 8, "Thunder"],
	range: "5ft",
	description: "Con Save or thunder dmg in 5ft; audible in 100ft.",
	list: "spell",
	tooltip: "As an action, you stomp your foot down, creating a thundering sound audible out to 100 feet. All creatures within 5 feet of you must make a Constitution saving throw DC 8 + your proficiency bonus + your Strength modifier. On a failure, a creature takes 1d8 thunder damage and is deafened until the start of your next turn. This damage increases at 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
// RACE: DRAGONBORN
// RACE: DWARVES
RaceList["arctic dwarf og"] = {
	regExpSearch: /^(?=.*arctic)(?=.*dwarf).*$/i,
	name: "Arctic Dwarf",
	sortname: "Dwarf, Arctic",
	source: [
		["OG", 19]
	],
	plural: "Arctic dwarves",
	size: [4],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Dwarvish", "Kurit"],
	vision: [
		["Darkvision", 60]
	],
	dmgres: ["Poison", "cold"],
	weaponProfs: [false, false, ["blowgun", "javelin", "net", "spear", "war pick"]],
	skills: ["Survival"],
	age: " mature around age 50 and live to about 350 years old",
	height: " stand between 3 and 4 feet tall",
	weight: " weigh around 90 to 120 pounds",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("90 lbs", 0.1) + " and " + ConvertToMetric("120 lbs", 0.1) + ".",
	scores: [1, 0, 2, 0, 1, 0],
	trait: "Arctic Dwarf (+1 Strength, +2 Constitution, +1 Wisdom)\n\n\u25C6 Ice in the Veins:  Difficult terrain due to non-magical snow or ice doesn’t cost me extra movement. I'm also naturally adapted to cold climates.\n\n\u25C6 Hunter-Gatherer: If I'm proficient with the pike or halberd, I can wield them without the penalty usually applied to Small creatures.\n\n\u25C6 Speed: My speed is not reduced by wearing Heavy Armor.",
	features: {}
};
RaceList["dworc og"] = {
	regExpSearch: /^(?=.*\bdwarf\b)(?=.*\borc\b).*|\bdworc\b$/i,
	name: "Dworc",
	source: [
		["OG", 20]
	],
	plural: "Dworcs",
	size: [3],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", ["Dwarvish or Orc", 1]],
	vision: [
		["Darkvision", 60]
	],
	weaponProfs: [false, false, ["two martial weapon"]],
	toolProfs: [
		["Artisan's Tools", 1],
	],
	skills: ["Survival"],
	age: " mature at the same rate as humans and live about 150 years",
	height: " stand between 5 and 5½ feet tall",
	weight: " weigh around 170 lb",
	heightMetric: " stand between " + ConvertToMetric("5 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("170 lbs", 0.1) + ".",
	scores: [1, 0, 2, 0, 0, 0],
	trait: "Dworc (+1 Strength, +2 Constitution)\n\n\u25C6 Martial Prowess. I'm proficient with 2 martial weapons of my choice. When I score a crit with a melee weapon using either of these two, I can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the crit.\n\n\u25C6 Tough. My hit point maximum increases by 1, and it increases by 1 every time I gain a level.",
	calcChanges: {
		hp: function(totalHD) {
			return [totalHD, "Dworc - Tough"];
		}
	},
	features: {
		"Aggressive Charge": {
			name: "Aggressive Charge",
			minlevel: 1,
			usages: "Con usages per ",
			usagescalc: "event.value = Math.max(1, What('Con Mod'));",
			recovery: "long rest",
			toNotesPage: [{
				note: desc([
					"If I move 20 feet and hit a creature up to one size larger, it must make a Strength save",
					"(DC 8 + proficiency bonus + Strength modifier) or be knocked prone."
				]),
				page3notes: true,
				name: "Aggressive Charge",
				additional: "Con mod per long rest (min 1)",
			}]
		}
	}
};
RaceList["ev'arak og"] = {
	regExpSearch: /^(?=.*\bgnome\b)(?=.*\bdwarf\b).*|\b(?=.*\bev.?arak\b)\b|\b(?=.*\bevarak\b)\b$/i,
	name: "Ev'arak",
	source: [
		["OG", 21]
	],
	plural: "Ev'araks",
	size: [4],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Dwarvish", "Gnomish"],
	vision: [
		["Darkvision", 60]
	],
	skills: ["Nature"],
	toolProfs: ["Tinker's tools", ["Artisan's tools", 1]],
	age: " mature around age 50 and live to about 400 years old",
	height: " stand between 3.5 and 4.5 feet tall",
	weight: " weigh around 80 lb",
	heightMetric: " stand between " + ConvertToMetric("3.5 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("80 lbs", 0.1) + ".",
	savetxt: {
		text: ["adv. on Wis saves vs Magic; if no crea in 15 ft, +1/2 prof bonus (round up) to concentration"],
	},
	scores: [0, 0, 0, 2, 1, 0],
	spellcastingAbility: [4, 5, 6],
	trait: "Ev’araks (+1 Strength, +2 Constitution)\n\n\u25C6 Insular Thought. I have adv. on Wis saves against magic. If no creatures I can see or hear in 15ft I add 1/2 my prof to conc. checks.\n\n\u25C6 Natural Maker. I'm proficient in Nature, tinker’s tools, and one other artisan’s tools of my choice, choosing from alchemist’s supplies, brewer’s supplies, cobbler’s tools, glassblower’s tools, leatherworker’s tools, or mason’s tools, smith’s tools, weaver’s tools, or woodcarver’s tools.",
	features: {
		"Silence is Golden": {
			name: "Silence is Golden",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Silence is Golden",
				spells: ["silence"],
				selection: ["silence"],
				firstCol: "oncelr"
			}],
			toNotesPage: [{
				note: desc([
					"From 3rd level, I can cast Silence once per long rest. Int, Wis, or Cha is my spellc. ability for it."
				]),
				page3notes: true,
				name: "Silence is Golden",
			}]
		}
	}
};
RaceList["moss dwarf og"] = {
	regExpSearch: /^(?=.*moss)(?=.*dwarf).*$/i,
	name: "Moss Dwarf",
	sortname: "Dwarf, Moss",
	source: [
		["OG", 22]
	],
	plural: "Moss Dwarves",
	size: 3,
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Dwarvish"],
	vision: [
		["Darkvision", 60]
	],
	savetxt: {
		adv_vs: ["poison"]
	},
	dmgres: ["Poison"],
	skills: ["Nature"],
	toolProfs: ["Herbalism Kit"],
	weaponProfs: [false, false, ["club", "greatclub", "spear", "quarterstaff"]],
	age: " mature around age 50 and live to about 350 years old",
	height: " stand between 4 and 5 feet tall",
	weight: " weigh around 150 pounds",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("5 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("150 lbs", 0.1) + ".",
	scores: [0, 0, 2, 0, 2, 0],
	trait: "Moss Dwarf (+2 Wisdom, +2 Constitution)\n\n\u25C6 Dwarven Resilience. I have adv. on saves vs. poison, and resistance against poison damage.\n\u25C6 Natural Talent. I'm proficient in Nature with the herbalism kit.\n\u25C6 Combat Training. I'm prof. w/ club, greatclub, spear & quarterstaff.\n\u25C6 Stone and Woodcunning. When I make a History check related to the origin of stonework or woodwork, I'm count as having expertise.",
	spellcastingAbility: [4, 5, 6],
	features: {
		"woad-ways": {
			name: "Woad-ways",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Woad-ways",
				spells: ["druidcraft", "infestation", "magic stone", "mold earth", "shillelagh", "thorn whip"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I know one cantrip from Druidcraft, Infestation, Magic Stone, Mold Earth, Shillelagh, or Thorn",
					"Whip. From 3rd level, I can learn one of Barkskin, Earth Tremor, Goodberry, Snare, or Speak",
					"with Animals and cast it once per long rest. Int, Wis, or Cha is my spellc. ability for it."
				]),
				page3notes: true,
				name: "Woad-ways",
			}]
		},
		"woad-ways 3": {
			name: "Woad-ways",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Woad-ways",
				spells: ["barkskin", "earth tremor", "goodberry", "snare", "speak with animals"],
				firstCol: "oncelr"
			}]
		}
	},
};
RaceList["vuam-edaris og"] = {
	regExpSearch: /^(?=.*\bvuam\b)(?=.*\bedaris\b).*|\bvuam-edaris\b$/i,
	name: "Vuam-Edaris",
	source: [
		["OG", 23]
	],
	size: 3,
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: ["Common", "Dwarvish", "Infernal"],
	vision: [
		["Darkvision (shades of red)", 60]
	],
	dmgres: ["Fire"],
	weaponProfs: [false, false, ["battleaxe", "handaxe", "light hammer", "warhammer"]],
	toolProfs: [
		["smith’s tools, glassblower’s tools, or potter’s tools", 1]
	],
	age: " mature around age 50 and live to about 225 years old",
	height: " stand between 4½ and 5½ feet tall",
	weight: " weigh around 150 pounds",
	heightMetric: " stand between " + ConvertToMetric("4.5 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("150 lbs", 0.1) + ".",
	scores: [1, 0, 1, 0, 0, 1],
	trait: "Vuam-Edaris (+1 Strength, +1 Constitution, +1 Charisma)\n\u25C6 ",
	spellcastingAbility: [4, 5, 6],
	features: {
		"infernal legacy": {
			name: "Infernal Legacy",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Infernal Legacy",
				spells: ["create bonfire", "produce flame", "fire bolt"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I know one cantrip from Create Bonfire, Produce Flame, or Fire Bolt. From 3rd level I can ",
					"cast Pyrotechnics once per long rest. From 5th level I can cast it twice per long rest.",
					"Int, Wis, or Cha is my spellc. ability for it."
				]),
				page3notes: true,
				name: "Infernal Legacy",
			}]
		},
		"infernal legacy 3": {
			name: "Infernal Legacy",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Infernal Legacy",
				spells: ["pyrotechnics"],
				selection: ["pyrotechnics"],
				firstCol: "oncelr"
			}]
		},
		"infernal legacy 5": {
			name: "Infernal Legacy",
			minlevel: 5,
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName, isDuplicate) {
						if (spName === "vaum-edaris og" && spellKey === "pyrotechnics") {
							spellObj.firstCol = "2x";
						}
					},
					"From level 5 on I can cast pyrotechnics twice per long rest."
				]
			},
			toNotesPage: [{
				note: desc([
					"ding ding"
				]),
				page3notes: true,
				name: "Införnöl Legacy",
			}]
		}
	}
};
// RACE: ELVES
RaceList["elowarin og"] = {
	regExpSearch: /^(?=.*\belf\b)(?=.*\bflower\b).*|\belowarin\b$/i,
	name: "Elowarin",
	source: [
		["OG", 24]
	],
	size: [3],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: ["Common", "Elvish"],
	vision: [
		["Darkvision", 60],
	],
	savetxt: {
		adv_vs: ["charmed"],
		immune: "sleep"
	},
	weaponProfs: [false, false, ["shortbow", "longbow"]],
	skills: ["Perception"],
	age: " mature around age 100 and live to about 750 years old",
	height: " stand between 6 and 7 feet tall.",
	weight: " weigh around 150 pounds.",
	heightMetric: " stand between " + ConvertToMetric("6 ft", 0.1) + " and " + ConvertToMetric("7 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("150 lbs", 0.1) + ".",
	scores: [0, 1, 0, 0, 2, 0],
	spellcastingAbility: [4, 5, 6],
	trait: "Elowarin (+2 Wisdom, +1 Dexterity)\n\n\u25C6 Trance: I meditate for 4 hours, gaining the benefits of an 8-hour rest.\n\u25C6 Photosynthetic: I need to ingest fertile soil and sunbathe for 4 hours to meet nutritional needs.\n\u25C6 Elf Weapon Training. I have proficiency with shortbows and longbows.\n\u25C6 Keen Senses: I'm proficient in Perception.",
	features: {
		"elowarin magic": {
			name: "Elowarin Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Elowarin Magic",
				spells: ["shillelagh"],
				selection: ["shillelagh"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I know the shillelagh cantrip. From 3rd level I can cast the Entangle spell once per long rest.",
					"Int, Wis, or Cha is my spellc. ability for them and they don't require material components."
				]),
				page3notes: true,
				name: "Elowarin Magic",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "elowarin og");
					},
					"I require no material components to cast my Elowarin racial spells."
				]
			}
		},
		"elowarin magic 3": {
			name: "Elowarin Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Elowarin Magic",
				spells: ["entangle"],
				selection: ["entangle"],
				firstCol: "oncelr"
			}]
		}
	}
};
RaceList["neled'sieh og"] = {
	regExpSearch: /^(?=.*\bneled'sieh\b|(?=.*\bneled.?sieh\b)|(?=.*\belf\b)(?=.*\bstar\b)).*$/i,
	name: "Neled'sieh",
	source: [
		["OG", 25]
	],
	size: [3],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Elvish", "Celestial"],
	vision: [
		["Darkvision (colorful)", 60]
	],
	savetxt: {
		adv_vs: ["charmed"],
		immune: ["sleep"]
	},
	dmgres: ["Radiant", "Psychic"],
	weaponProfs: [false, false, ["shortbow", "longbow"]],
	skills: ["Perception", "Insight"],
	age: " mature around age 100 and live to about 1000 years old",
	height: " stand between 5 and 6 feet tall",
	weight: " weigh around 150 pounds",
	heightMetric: " stand between " + ConvertToMetric("5 ft", 0.1) + " and " + ConvertToMetric("6 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("150 lbs", 0.1) + ".",
	scores: [0, 0, 0, 0, 3, 0],
	spellcastingAbility: [4, 5, 6],
	trait: "Neled'sieh (+3 Wisdom)\n\n\u25C6 Trance. I don’t need to sleep, and magic can’t put me to sleep. I can finish a long rest in 4 hours if I spend those hours in a trancelike meditation, during which I remain conscious.\n\u25C6 Heavenly Mind. I have resistance to radiant and psychic damage.\n\u25C6 Sagacious. I have proficiency in the Perception and Insight skills, and can make Wisdom (Insight, Perception) checks as a bonus action",
	features: {
		"sagacious": {
			name: "Sagacious",
			minlevel: 1,
			action: [
				["bonus action", "Sagacious"]
			]
		},
		"seer": {
			name: "Seer",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Seer",
				spells: ["guidance"],
				selection: ["guidance"],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "neled'sieh og");
					},
					"I require no material components to cast my Neled'sieh racial spells."
				]
			},
			toNotesPage: [{
				note: desc([
					"I know the Guidance cantrip. From 3rd level I can cast the Detect Magic once per long rest",
					"and from level 5 I can also cast Clairvoyance once per long rest.",
					"Int, Wis, or Cha is my spellc. ability for them and they don't require material components."
				]),
				page3notes: true,
				name: "Seer",
			}]
		},
		"seer 3": {
			name: "Seer",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Seer",
				spells: ["detect magic"],
				selection: ["detect magic"],
				firstCol: "oncelr"
			}]
		},
		"seer 5": {
			name: "Seer",
			limfeaname: "Seer",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Seer",
				spells: ["clairvoyance"],
				selection: ["clairvoyance"],
				firstCol: "oncelr"
			}]
		}
	},
};
RaceList["ulsanya og"] = {
	regExpSearch: /^(?=.*\belf\b)(?=.*\borc\b).*|\bulsanya\b$/i,
	name: "Ulsanya",
	source: [
		["OG", 26]
	],
	size: 3,
	speed: {
		walk: {
			spd: 35,
			enc: 25
		}
	},
	languageProfs: ["Common", ["Elvish or Orc", 1]],
	vision: [
		["Darkvision", 60]
	],
	savetxt: {
		adv_vs: ["charmed"]
	},
	weaponProfs: [false, false, ["two martial weapons"]],
	skillstxt: "Choose one from Athletics and Acrobatics.",
	age: " mature around age 15 and live to about 100 years old",
	height: " stand between 5 and 6 feet tall",
	weight: " weigh around 150 pounds",
	heightMetric: " stand between " + ConvertToMetric("5 ft", 0.1) + " and " + ConvertToMetric("6 ft", 0.1) + " tall.",
	weightMetric: " weigh around " + ConvertToMetric("150 lbs", 0.1) + ".",
	scores: [1, 1, 0, 0, 0, 0],
	scorestxt: "+1 Strength, +1 Dexterity, +1 to one ability score of your choice",
	spellcastingAbility: [4, 5, 6],
	trait: "Ulsanya (+1 Strength, +1 Dexterity, +1 Any)\n\u25C6 Bodily Mastery: I'm proficient in Athletics or Acrobatics. Diff. terr. due to Plants, Bushes or Rocky terrain does not slow my movement.\n\u25C6 Fey Ancestry: I have advantage on saving throws I make to avoid or end the charmed condition on myself.\n\u25C6 Cantrip: I know one cantrip of my choice from the druid spell list. Intelligence, Wisdom, or Charisma is my spellcasting ability for it and I require no material components for it.\n\u25C6 Weapon Training: I'm prof. with two martial weapons of my choice.",
	features: {
		"cantrip": {
			name: "Cantrip",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Ulsanya Cantrip",
				"class": "druid",
				level: [0, 0],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "ulsanya og");
					},
					"I require no material components to cast my Ulsanya racial cantrip."
				]
			}
		}
	}
};
// RACE: GOBLINS
// RACE: ORC
// RACE: BEASTS
RaceList["aaratica haan-hi og"] = {
	name: "Aaratica Haan-Hi",
	plural: "Aaratica Haan-Hi",
	regExpSearch: /^(?=.*aaratica)(?=.*haan-hi).*$/i,
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
			spd: 20,
			enc: 10
		},
		fly: {
			spd: 30
		},
	},
	features: {}
};
RaceList["aaratica paar-dal og"] = {
	name: "Aaratica Paar-dal",
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
			spd: 20,
			enc: 10
		},
		fly: {
			spd: 35
		},
	},
	features: {}
};
RaceList["aaratica pii-vin og"] = {
	name: "Aaratica Pii-Vin",
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
	trait: "Aaratica Paar-dal (+2 Dex, +1 Int)\n\u25C6 Arctic Living. I can hold my breath for 15 minutes and I have resistance to cold damage. Difficult terrain due to snow and ice does not impede my movement.\n\u25C6 Aquatic Mastery. I know the shape water cantrip. From 3rd level, I can cast the ice knife spell as a 2nd-level spell. From 5th level, I can also cast the locate animals or plants spell if I can see a body of water. Either spell can be cast once per long rest with this trait. Int, Wis, or Cha is my spellcasting ability for these and I require no material components to cast them.",
	dmgres: ["Cold"],
	spellcastingAbility: [4, 5, 6],
	speed: {
		walk: {
			spd: 20,
			enc: 10
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
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "aaratica pii-vin og");
					},
					"I require no material components to cast my Aaratica Pii-Vin racial spells."
				]
			}
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
			spd: 35,
			enc: 25
		},
	},
	weaponOptions: [{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*ozo)(?=.*\bfists?\b).*$/i,
			name: "Ozo Fists",
			damage: [1, 6, "bludgeoning"],
			abilitytodamage: true,
			selectNow: true
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*ozo)(?=.*\bteeth?\b).*$/i,
			name: "Ozo Teeth",
			damage: [1, 6, "piercing"],
			abilitytodamage: true,
			selectNow: true
		}
	],
	features: {
		"stunning might": {
			name: "Stunning Might",
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
		}
	}
};
RaceList["apelong panzu og"] = {
	name: "Apelong Panzu",
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
			damage: [1, 4, "bludgeoning"],
			abilitytodamage: true,
			selectNow: true
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*panzu)(?=.*\bteeth?\b).*$/i,
			name: "Panzu Teeth",
			damage: [1, 4, "piercing"],
			abilitytodamage: true,
			selectNow: true
		}
	],
	features: {}
};
RaceList["apelong suxiu og"] = {
	name: "Apelong Suxiu",
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
		}
	}
};
RaceList["bullywug og"] = {
	name: "Bullywug",
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
			spd: 30
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
		damage: [1, 4, "piercing"],
		abilitytodamage: true,
		selectNow: true
	}],
	features: {
		"standing leap": {
			name: "Standing Leap",
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
		}
	}
};
RaceList["chapa og"] = {
	name: "Cha'pa",
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
			spd: 30
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
		}
	}
};
RaceList["elkin og"] = {
	name: "Elkin",
	plural: "Elkin",
	regExpSearch: /^(?=.*elkin).*$/i,
	source: ["OG", 41],
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
					"cast locate animals or plants once per LR. Int, Wis, or Cha is my spellcasting ability for them",
					"and I require no material components to cast them."
				]),
				page3notes: true,
				name: "Elkin Magic",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "elkin og");
					},
					"I require no material components to cast my Elkin racial spells."
				]
			}
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
		}
	}
};
RaceList["giff og"] = {
	name: "Giff",
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
			spd: 20
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
			calcChanges: {
				atkAdd: [
					function(fields, v) {
						if ((/crossbow/i.test(v.baseWeaponName) || v.list == "firearm") && fields.Proficiency) {
							fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, "");
						}
					}, "I ignore the loading property of crossbows and firearms I am proficient with."
				]
			}
		}
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
			spd: 20
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
		}
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
			spd: 20
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
			spd: 20
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
		}
	}
};
RaceList["haashir og"] = {
	name: "Haashir",
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
			minlevel: 1,
			action: ["bonus action", ""],
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*\bhaashir\b)(?=.*\bstomp?\b).*$/i,
				name: "Haashir Stomp",
				damage: [1, 6, "bludgeoning"],
				description: "Can only damage tiny creatures or small and medium creatures which are prone.",
				abilitytodamage: true,
				selectNow: true,
			}, ],
		},
		"haashir magic": {
			name: "Haashir Magic",
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
					function(k, o, n) {
						removeSpellCosts(k, o, n, "haashir og");
					},
					"I require no material components to cast my Haashir racial spells."
				]
			}
		},
		"haashir magic 5": {
			name: "Haashir Magic",
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
		}
	}
};
RaceList["kamelon og"] = {
	name: "Kamelon",
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
	trait: "Kamelon (+2 Wis, +1 Cha)\n\u25C6 Eye Alignment. As a bns a I can to focus my eyes on a creature or object. Until the end of my next turn, I have adv. on the first ranged attack I vs. that crea., or any Wis (Insight/Perception) checks I make against it. I can use this trait once per short or long rest.\n\u25C6 Unseen Magic. I can cast the blur spell once per long rest. From level 5 on I can also cast the invisibility spell once per long rest. Int, Wis, or Cha is my spellcasting ability for these spells and I require no material components to cast them.",
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
		}
	}
};
RaceList["kangaren og"] = {
	name: "Kangaren",
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
		damage: [1, 4, "bludgeoning"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	features: {
		"combat training": {
			name: "Combat Training",
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
		}
	}
};
RaceList["kunek og"] = {
	name: "Kunek",
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
		}
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
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "hundr madra og");
					},
					"I require no material components to cast my Hundr Madre racial spells."
				]
			}
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
		}
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
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "koer madra og");
					},
					"I require no material components to cast my Koer Madre racial spells."
				]
			}
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
		}
	}
};
RaceList["nychterid og"] = {
	name: "Nychterid",
	plural: "Nychterid",
	regExpSearch: /nychterid/i,
	source: ["OG", 51],
	age: " reach physical maturity at the age of 15, and can live up to 80 years.",
	height: " are between 3 and 4 feet tall.",
	weight: " weigh an average of 35 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh an avrage of " + ConvertToMetric("35 lbs", 0.1) + ".",
	size: [4],
	carryingCapacity: 1,
	scores: [0, 1, 0, 0, 2, 0],
	scorestxt: "+2 Wis, +1 Dex",
	trait: "Nychterid (+2 Wis, +1 Dex)\n\u25C6 Keen Hearing. I have advantage on Wisdom (Perception) or Intelligence (Investigation) skill checks that rely on hearing.\n\u25C6 Nychterid Resilience. I have advantage on saves vs disease.\n\u25C6 Speak with Bats. I can converse with bats as if sharing a language.\n\u25C6 Gourmand. You are proficient with cook’s utensils.\n\u25C6 Flight. I have a flying speed of 30 feet. I can suspend my body from my feet without the need to make an ability check. I can’t fly or suspend myself if I'm wearing medium or heavy armor.",
	savetxt: {
		adv_vs: ["disease"]
	},
	speed: {
		walk: {
			spd: 20,
			enc: 10
		},
		fly: {
			spd: 30
		},
	},
	vision: [
		["Darkvision", 60],
		["Echolocation (see notes)", 30],
		"Adv. on Perception checks that rely on hearing."
	],
	languageProfs: [
		"Common",
		"Nychterid"
	],
	toolProfs: [
		["cook’s utensils"],
	],
	features: {
		"echolocation": {
			name: "Echolocation",
			minlevel: 1,
			action: ["action", "Echolocation)"],
			toNotesPage: [{
				note: desc([
					"As an action I can emit a short burst of high-pitched noise, audible up to 60 feet away, but",
					"perceptible only to bats, other nychterids, creatures with the Keen Hearing trait, or creatures",
					"with a passive Perception of 17 or higher. Until the end of my next turn, I'm aware of the",
					"location of objects and creatures within 30 feet, including invisible or hidden ones. I can’t use",
					"this if I'm deafened, and its effects end early if I become deafened or take thunder dmg."
				]),
				page3notes: true,
				name: "Echolocation",
			}],
		},
		"sunlight sensitivity": {
			name: "Sunlight Sensitivity",
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight",
					"when I, the target of my attack, or whatever I'm trying to perceive is in direct sunlight."
				]),
				page3notes: true,
				name: "Sunlight Sensitivity",
			}],
		}
	}
};
RaceList["opsu og"] = {
	name: "Opsu",
	plural: "Opsu",
	regExpSearch: /^opsu$/i,
	source: ["OG", 52],
	age: " mature at 5 years, and live up to 30 years.",
	height: " are between 3 and 4 feet tall.",
	weight: " weigh an average of 40 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of " + ConvertToMetric("40 lbs", 0.1) + ".",
	size: [4],
	carryingCapacity: 1,
	scores: [0, 0, 1, 0, 1, 1],
	scorestxt: "+1 Con, +1 Wis, +1 Cha",
	trait: "Opsu (+1 Con, +1 Wis, +1 Cha)\n\u25C6 Keen Smell. I have adv. on Perception checks that rely on smell.\n\u25C6 Nimble Claws. My claws and tail are useful climbing tools, and grant me a climbing speed of 20 feet.\n\u25C6 Prehensile Tail. I can make object interactions using my tail, and if I'm not wearing medium or heavy armor, I can suspend my body from it.\n\u25C6 Nomadic Proficiency. I'm proficient with one set of artisan’s tools. Opsu Resilience. I have advantage on saving throws against poison and disease, and resistance to poison damage.",
	savetxt: {
		adv_vs: ["poisoned", "diseased"]
	},
	dmgres: ["poison"],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		climb: {
			spd: 20
		},
	},
	vision: [
		"Keen Smell (see traits)"
	],
	languageProfs: [
		"Common",
		"Opsu"
	],
	toolProfs: [
		["Artisan’s Tool", 1]
	],
	features: {
		"play dead": {
			name: "Play Dead",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: ["reaction", "Play Dead"],
			toNotesPage: [{
				note: desc([
					"As a reaction, I can enter a cataleptic state that is indistinguishable from death for up to 10",
					"minutes. I appear dead to all outward inspection. I'm blinded and incapacitated, I fall prone,",
					"my speed drops to 0, and I've resistance all damage except psychic damage. At the end of",
					"each of my turns, I can choose to end the state and reawaken."
				]),
				page3notes: true,
				name: "Play Dead",
				additional: "1 x per long rest",
			}],
		},
	}
};
RaceList["pangolo og"] = {
	name: "Pangolo",
	plural: "Pangolo",
	regExpSearch: /^pangolo$/i,
	source: ["OG", 53],
	age: " reach physical maturity at the age of 15, and can live up to 80 years.",
	height: " stand between 4½ and 5½ feet tall.",
	weight: " average about 170 pounds.",
	heightMetric: " stand between " + ConvertToMetric("4.5 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of " + ConvertToMetric("170 lbs", 0.1) + ".",
	size: [3],
	scores: [0, 0, 2, 0, 1, 0],
	scorestxt: "+2 Con, +1 Wis",
	trait: "Pangolo (+2 Con, +1 Wis)\n\u25C6 Natural Armor. I have tough armor plates granting an AC of 13 + my Dex mod, if I'm not wearing armor. A shields bonus adds to it.\n\u25C6 Claws. I have long, deadly claws which deal 1d6 + my Strength mod slashing damage.\n\u25C6 Wilderness Living. I have advantage on Wisdom (Survival) checks I make to correctly identify a Plant or Beast I can see and smell.\n\u25C6 Subterranean Senses. When underground, I always know my depth from the surface, and which way is north.",
	spellcastingAbility: [4, 5, 6],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	vision: [
		"Subterranean Senses"
	],
	languageProfs: [
		"Common",
		"Pangolo"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\bpangolo\b)(?=.*\bclaws?\b).*$/i,
		name: "Pangolo Claws",
		damage: [1, 6, "slashing"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	armorOptions: [{
		regExpSearch: /^(?=.*(pangolin))(?=.*(armor)).*$/i,
		name: "Pangolin Armor",
		ac: "13",
		affectsWildShape: false,
		selectNow: true
	}],
	features: {
		"earthen affinity": {
			name: "Earthen Affinity",
			minlevel: 1,
			spellcastingBonus: [{
					name: "Earthen Affinity",
					spells: ["blade ward"],
					selection: ["blade ward"],
					firstCol: "atwill"
				},
				{
					name: "Earthen Affinity",
					spells: ["mold earth"],
					selection: ["mold earth"],
					firstCol: "atwill"
				}
			],
			toNotesPage: [{
				note: desc([
					"I know the blade ward and mold earth cantrips. From 3rd level, I can cast locate animals",
					"and plants once per LR. Int, Wis, or Cha is my spellcasting ability for these spells and",
					"I require no material components to cast them."
				]),
				page3notes: true,
				name: "Earthen Affinity",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "pangolo og");
					},
					"I require no material components to cast my Pangolo racial spells."
				]
			}
		},
		"earthen affinity 3": {
			name: "Earthen Affinity",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Earthen Affinity",
				spells: ["locate animals or plants"],
				selection: ["locate animals or plants"],
				firstCol: "oncelr"
			}],
		}
	}
};
RaceList["quillen og"] = {
	name: "Quillen",
	plural: "Quillen",
	regExpSearch: /^quillen$/i,
	source: ["OG", 54],
	age: " reach physical maturity at the age of 8, and can live up to 50 years.",
	height: " stand between 3½ and 4½ feet tall.",
	weight: " average about 60 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3.5 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " average about " + ConvertToMetric("60 lbs", 0.1) + ".",
	size: [3],
	scores: [0, 1, 0, 0, 2, 0],
	scorestxt: "+2 Wis, +1 Dex",
	trait: "Quillen (+2 Wis, +1 Dex)\n\n\u25C6 Poor Eyesight. I've disadv. on attack rolls and on Perception checks that rely on sight when the target of my attack, or whatever I'm trying to perceive is not in bright light or direct sunlight.\n\n\u25C6 Keen Smell and Hearing. I've advantage on Perception skill checks that rely on smell or hearing.\n\n\u25C6 Wilderness Living. I'm proficient with the Survival skill.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Survival"],
	skillstxt: "Survival",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
	},
	vision: [
		"Poor Eyesight",
		"Keen Smell and Hearing (see traits)"
	],
	languageProfs: [
		"Common",
		"Quillen"
	],
	features: {
		"natural affinity": {
			name: "Natural Affinity",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Natural Affinity",
				spells: ["druidcraft"],
				selection: ["druidcraft"],
				firstCol: "atwill"
			}, {
				name: "Natural Affinity",
				spells: ["speak with animals"],
				selection: ["speak with animals"],
				firstCol: "oncelr"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the druidcraft cantrip and can cast speak with animals once per long rest",
					"From 3rd level I can cast cordon of arrows once per long rest. Int, Wis, or Cha is",
					"my spellcasting ability for these spells and I don't require material components."
				]),
				page3notes: true,
				name: "Natural Affinity",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "quillen og");
					},
					"I require no material components to cast my Quillen racial spells."
				]
			}
		},
		"natural affinity 3": {
			name: "Natural Affinity",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Natural Affinity",
				spells: ["cordon of arrows"],
				selection: ["cordon of arrows"],
				firstCol: "oncelr"
			}],
		},
		"quills": {
			name: "Quills",
			minlevel: 1,
			action: ["reaction", "Quills"],
			toNotesPage: [{
				note: desc([
					"Portions of my body are covered in hard, sharp quills. When a crea. I see hits me with a",
					"melee atk (w/o the reach property) or attempts to grapple, I can react to deal pierc. dmg",
					"to my attacker equal to my proficiency bonus. I can poison my spines like a weapon.",
				]),
				page3notes: true,
				name: "Quills",
			}],
		}
	}
};
RaceList["rhinox og"] = {
	name: "Rhinox",
	plural: "Rhinox",
	regExpSearch: /^Rhinox$/i,
	source: ["OG", 55],
	age: " mature at 8 years, and live up to 60 years.",
	height: " stand between 6 and 8 feet tall.",
	weight: " weigh 300-400 pounds.",
	heightMetric: " stand between " + ConvertToMetric("6 ft", 0.1) + " and " + ConvertToMetric("8 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("300 lbs", 0.1) + " and " + ConvertToMetric("400 lbs", 0.1) + ".",
	size: [3],
	carryingCapacity: 2,
	scores: [2, 0, 0, 0, 1, 0],
	scorestxt: "+2 Str, +1 Wis",
	trait: "Rhinox (+2 Str, +1 Wis)\n\u25C6 Keen Smell. I have advantage on Perception or Investigation skills checks that rely on smell.\n\u25C6 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\u25C6 Horn. I can attack with my horn for 1d6 + my Str mod pierc. Pachyderm. My thick, leathery skin grants AC 13 + Dex mod.\n\u25C6 Fey Ancestry. I've adv. on saves I make to avoid or end charmed.\n\u25C6 Cantrip. I know one druid cantrip of my choice. Intelligence, Wisdom, or Charisma is my spellcasting ability for it.",
	spellcastingAbility: [4, 5, 6],
	savetxt: {
		adv_vs: ["charmed"]
	},
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
	},
	vision: [
		"Keen Smell (see traits)"
	],
	languageProfs: [
		"Common",
		"Rhinox"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\brhinox\b)(?=.*\bhorn?\b).*$/i,
		name: "Rhinox Horn",
		damage: [1, 6, "piercing"],
		abilitytodamage: true,
		selectNow: true,
		description: "Trampling Charge if I moved 20ft straight before attack, see notes."
	}, ],
	armorOptions: [{
		regExpSearch: /^(?=.*(pachyderm))(?=.*(skin)).*$/i,
		name: "Pachyderm Skin",
		ac: "13",
		affectsWildShape: false,
		selectNow: true
	}],
	features: {
		"rhinox cantrip": {
			name: "Rhinox Cantrip",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Rhinox Cantrip",
				class: ["druid"],
				level: [0, 0],
				firstCol: "atwill",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "rhinox og");
					},
					"I require no material components to cast my Rhinox cantrip."
				]
			}
		},
		"trampling charge": {
			name: "Trampling Charge",
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"If I move at least 20ft in a straight line toward a large or smaller crea. & hit them with a horn",
					"atk, they must succeed a Str save DC 8 + my prof. bonus + my Str mod or be knocked prone."
				]),
				page3notes: true,
				name: "Trampling Charge"
			}],
		}
	}
};
RaceList["skiouros og"] = {
	name: "Skiouros",
	plural: "Skiouros",
	regExpSearch: /^skiouros$/i,
	source: ["OG", 56],
	age: " mature at 5 years, and live up to 25 years.",
	height: " average about 3 feet tall.",
	weight: " weigh about 40 pounds. ",
	heightMetric: " average about " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " average about " + ConvertToMetric("40 lbs", 0.1) + ".",
	size: [4],
	scores: [0, 2, 0, 0, 1, 0],
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Skiouros Race (+2 Dex, +1 Wis)\n\u25C6 Darkvision. Accustomed to twilit forests and the night sky, I have superior vision in dark and dim conditions. I can see in dim light within 60ft of me as if it were bright light, and in darkness as if it were dim light. I can’t discern color in darkness, only shades of gray.\n\u25C6 Climber. I have a climbing speed equal to my walking speed. When I'm not wearing medium or heavy armor, I can descend headfirst.\n\u25C6 Nimbleness. I can move through the space of any creature that is of a size larger than me.",
	spellcastingAbility: [4, 5, 6],
	skills: [],
	skillstxt: "One of Acrobatics, Sleight of Hand or Stealth",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		climb: "walk",
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: [
		"Common",
		"Skiouros"
	],
	features: {
		"shadowy legacy": {
			name: "Shadowy Legacy",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Shadowy Legacy",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "oncelr"
			}],
			toNotesPage: [{
				note: desc([
					"I can cast the Darkness spell once per long rest. I can see normally inside my own Darkness.",
					"From level 5 on I can also cast Locate Animals or Plants once per long rest. Int, Wis or Cha",
					"is my spellcasting ability for these spells and they don't require material components."
				]),
				page3notes: true,
				name: "Shadowy Legacy",
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "skiouros og");
					},
					"I require no material components to cast my Skiouros racial spells."
				]
			}
		},
		"shadowy legacy 5": {
			name: "Shadowy Legacy",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Shadowy Legacy",
				spells: ["locate animals or plants"],
				selection: ["locate animals or plants"],
				firstCol: "oncelr"
			}]
		}
	}
};
RaceList["thanoi og"] = {
	name: "Thanoi",
	plural: "Thanoi",
	regExpSearch: /^thanoi$/i,
	source: ["OG", 57],
	age: " mature at 15 years, and live up to 80 years.",
	height: " stand between 7 and 8 feet tall",
	weight: " weigh 280-400 pounds.",
	heightMetric: " stand between " + ConvertToMetric("7 ft", 0.1) + " and " + ConvertToMetric("8 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("280 lbs", 0.1) + " and " + ConvertToMetric("400 lbs", 0.1) + ".",
	size: [3],
	carryingCapacity: 2,
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Thanoi (+2 Str, +1 Con)\n\u25C6 Blubber. I've resistance to cold damage and I'm acclimated to cold climates. In hot climates, I have disadv. on saves vs. exhaustion.\n\u25C6 Flippers. My flippers grant me a swimming speed of 30 feet. Difficult terrain due to ice or snow doesn’t cost me extra movement.\n\u25C6 Hold Breath. I can hold my breath for 15 minutes at a time.\n\u25C6 Spear-Fisher. I'm proficient with spears, and nets. When I attack with a net, I cannot have disadvantage on the attack.\n\u25C6 Tusks. My long tusks are natural weapons, which deal piercing damage equal to 1d6 + my Strength modifier.",
	dmgres: ["cold"],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		swim: {
			spd: 30
		},
	},
	weaponProfs: [false, false, ["spears", "nets"]],
	languageProfs: [
		"Common",
		"Thanoi"
	],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*\bthanoi\b)(?=.*\btusks?\b)$/i,
		name: "Thanoi Tusks",
		damage: [1, 6, "piercing"],
		abilitytodamage: true,
		selectNow: true
	}, ],
	features: {}
};
var baseUrsine = {
	age: " mature at 10 years, and live up to 60 years.",
	height: " stand between 6 and 8 feet tall.",
	weight: " weigh between 240 and 380 pounds.",
	heightMetric: " stand between " + ConvertToMetric("6 ft", 0.1) + " and " + ConvertToMetric("8 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("240 lbs", 0.1) + " and " + ConvertToMetric("380 lbs", 0.1) + ".",
	trait: "\n\u25C6 Keen Smell: I have adv. on Perception checks that rely on smell." +
		"\n\u25C6 Natural Weaponry: My claws and bite are natural weapons that deal 1d4 + my Str mod bludgeoning(claws) or piercing(bite) dmg." +
		"\n\u25C6 Powerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	vision: [
		"Keen Smell (see traits)"
	],
	weaponOptions: [{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*\bursine\b)(?=.*\bclaws?\b).*$/i,
			name: "Ursine Claws",
			damage: [1, 4, "bludgeoning"],
			abilitytodamage: true,
			selectNow: true
		},
		{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*\bursine\b)(?=.*\bbite?\b).*$/i,
			name: "Ursine Bite",
			damage: [1, 4, "piercing"],
			abilitytodamage: true,
			selectNow: true
		},
	],
	hibernation: {
		name: "Hibernation",
		minlevel: 1,
		toNotesPage: [{
			note: desc([
				"If I prepare myself by consuming double the amount of food I require to live for at least",
				"one month, I can enter a state of deep sleep for a number of months equivalent to my",
				"proficiency bonus. For the duration, my metabolism slows, I do not need food or water,",
				"and I'm immune to cold damage caused by my environment.",
				"I can awaken myself at any time. If I take damage or am forced make a saving throw, I",
				"awaken.  If I have been hibernating for at least 1 month when I awaken, I must immediately",
				"succeed a DC 12 Constitution saving throw or suffer from one level of exhaustion."
			]),
			page3notes: true,
			name: "Hibernation",
		}],
	}
};
RaceList["ursine shash og"] = {
	name: "Ursine Shash",
	sortname: "Ursine, Shash",
	plural: "Ursine Shash",
	regExpSearch: /^(?=.*ursine)(?=.*shash).*$/i,
	source: ["OG", 58],
	age: baseUrsine.age,
	height: baseUrsine.height,
	weight: baseUrsine.weight,
	heightMetric: baseUrsine.heightMetric,
	weightMetric: baseUrsine.weightMetric,
	vision: baseUrsine.vision,
	weaponOptions: baseUrsine.weaponOptions,
	size: [3],
	carryingCapacity: 2,
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Ursine Shash (+2 Str, +1 Con)" +
		baseUrsine.trait +
		"\n\u25C6 Menacing: I'm proficient in Intimidation. If I have Proficiency from elsewhere, I gain Expertise instead." +
		"\n\u25C6 Forager: If there is edible flora, game to hunt or potable water within my Prof Bonus miles, I know where and how to find it.",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	skills: ["Intimidation", "increment"],
	skillstxt: "Intimidation Prof or Expert.",
	languageProfs: [
		"Common",
		"Ursine",
	],
	features: {
		"hibernation": baseUrsine.hibernation
	}
};
RaceList["ursine makwa og"] = {
	name: "Ursine Makwa",
	sortname: "Ursine, Makwa",
	plural: "Ursine Makwa",
	regExpSearch: /^(?=.*ursine)(?=.*makwa).*$/i,
	source: ["OG", 58],
	age: baseUrsine.age,
	height: baseUrsine.height,
	weight: baseUrsine.weight,
	heightMetric: baseUrsine.heightMetric,
	weightMetric: baseUrsine.weightMetric,
	vision: baseUrsine.vision,
	weaponOptions: baseUrsine.weaponOptions,
	size: [3],
	carryingCapacity: 2,
	scores: [1, 1, 0, 1, 0, 0],
	scorestxt: "+1 Str, +1 Dex, +1 Int",
	trait: "Ursine Makwa (1 Str, +1 Dex, +1 Int)" +
		baseUrsine.trait +
		"\n\u25C6 Nimble Claws: I've 20ft climb speed and can use my claws as one Artisan's Tool (or Thieves' Tool), with which I am proficient." +
		"\n\u25C6 Unseen Among the Leaves: I've adv. on stealth in forest or jungle.",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		climb: {
			spd: 20
		}
	},
	toolProfs: [
		["Artisan’s Tool or Thieves' Tools", 1]
	],
	languageProfs: [
		"Common",
		"Ursine"
	],
	features: {
		"hibernation": baseUrsine.hibernation
	}
};
RaceList["ursine helarc og"] = {
	name: "Ursine Helarc",
	sortname: "Ursine, Helarc",
	plural: "Ursine Helarc",
	regExpSearch: /^(?=.*ursine)(?=.*helarc).*$/i,
	source: ["OG", 58],
	age: baseUrsine.age,
	height: baseUrsine.height,
	weight: baseUrsine.weight,
	heightMetric: baseUrsine.heightMetric,
	weightMetric: baseUrsine.weightMetric,
	vision: baseUrsine.vision,
	weaponOptions: baseUrsine.weaponOptions,
	size: [3],
	carryingCapacity: 2,
	scores: [1, 0, 0, 0, 1, 1],
	scorestxt: "+1 Str, +1 Wis, +1 Cha",
	trait: "Ursine Helarc (1 Str, +1 Wis, +1 Cha)" +
		baseUrsine.trait +
		"\n\u25C6 Golden Tongue: I'm proficient in Persuasion. If I have Proficiency from elsewhere, I gain Expertise instead." +
		"\n\u25C6 Speech of Beast and Leaf: I can make myself understood, in a lim. manner, by beasts and plants. I have adv. on Cha checks vs. them.",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	skills: ["Persuasion", "increment"],
	skillstxt: "Persuasion Prof or Expert.",
	languageProfs: [
		"Common",
		"Ursine",
		"Speech of Beast and Leaf"
	],
	features: {
		"hibernation": baseUrsine.hibernation
	}
};
RaceList["boggle og"] = {
	regExpSearch: /^boggles?$/i,
	name: "Boggle",
	plural: "Boggles",
	source: ["OG", 64],
	age: " reach adulthood at around 20 years and live up to 150 years.",
	height: " stand between 2 and 4 ft tall.",
	weight: " weigh about 40 lbs.",
	heightMetric: " stand between " + ConvertToMetric("2 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("40 lbs", 0.1) + ".",
	size: 4,
	scores: [0, 2, 0, 1, 0, 0],
	scorestxt: "+2 Dex, +1 Int",
	trait: "Boggle, Fey (+2 Dex, +1 Int)." +
		"\n\u25C6 Uncanny Smell: Prof in Perception." +
		"\n\u25C6 Fire Resistance: Skin is coated in non-flammable oil." +
		"\n\u25C6 Optional Racial Feats: Boggle-Twisting-Space, Boggle-Mischievous-Familiar.",
	skills: ["Perception"],
	skillstxt: "Perception.",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		},
		climb: {
			spd: 20
		}
	},
	vision: [
		["Darkvision", 60],
		"Uncanny Smell: Adv on WIS(Perception)-checks relying on smell."
	],
	languageProfs: ["Common", "Sylvan"],
	dmgres: ["Fire"],
	features: {
		"boggle oil": {
			name: "Boggle Oil",
			minlevel: 1,
			action: [
				["bonus action", "Excrete Boggle Oil"]
			],
			usages: "Profiency bonus per ",
			recovery: "long rest",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			toNotesPage: [{
				note: desc([
					"I excrete non-flammable oil from my skin for 1min and choose the viscosity:",
					"\"Oily\": Adv to escape, squeeze through narrow spaces, ending grapples).",
					"\"Sticky\": Adv. to grapples, checks (maintain hold crea/surf/obj), climb-speed 20ft).",
					"I can change the viscosity as a bonus action."
				]),
				page3notes: true,
				name: "Boggle Oil",
				additional: "bonus action, # eq to my ProfBonus per LR"
			}]
		},
		"oil puddle": {
			name: "Oil Puddle",
			minlevel: 1,
			action: [
				["action", "Create Oil Puddle"]
			],
			toNotesPage: [{
				note: desc([
					"With Boggle-Oil active, I choose to create a 1inch deep puddle covering ground in my space.",
					"The puddle lasts 1h and is difficult terrain for creatures except for Boggles.",
					"\"Oily\": DEX-save or prone, \"Sticky\": STR-save or restrained.",
					"Targets repeat the saves at start of their turn, success = move to nearest safe-space.",
				]),
				page3notes: true,
				name: "Oil Puddle",
				additional: "action, SaveDC = 8 + ProfBns + ConMod"
			}]
		},
		"change oil viscosity": {
			name: "Change Oil Viscosity",
			minlevel: 1,
			action: [
				["bonus action", "Change Oil Viscosity"]
			]
		},
	}
};
RaceList["varkind og"] = {
	name: "Varkind",
	sortname: "Varkind",
	plural: "Varkinds",
	regExpSearch: /^(?=.*varkind).*$/i,
	source: ["OG", 60],
	age: " mature at 15 years, and live up to 70 years.",
	height: " are as stout as dwarves, standing between 4 and 5½ feet tall",
	weight: " weigh betweeen 100 and 200 pounds.",
	heightMetric: " are as stout as dwarves, standing between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("100 lbs", 0.1) + " and " + ConvertToMetric("200 lbs", 0.1) + ".",
	size: [3],
	carryingCapacity: 1,
	scores: [0, 0, 0, 1, 1, 1],
	scorestxt: "+1 Int, +1 Wis, +1 Cha",
	trait: "Varkinds (+1 Int, +1 Wis, +1 Cha)" +
		"\n\u25C6 Keen Smell: I have adv. on Perception checks that rely on smell." +
		"\n\u25C6 Open Minded: I have proficiency in Insight." +
		"\n\u25C6 Natural Philosopher: I know the Guidance cantrip. From 3rd level I can cast Goodberry once per long rest using this trait." +
		"\n\u25C6 Sure-Footed: I can double my Prof Bonus for checks to avoid beeing knocked prone." +
		"\n\u25C6 Mud Lover: Difficult terrain due to mud does not slow me.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Insight"],
	skillstxt: "Insight",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: [
		"Common",
		"Varkind"
	],
	vision: [
		"Keen Smell (see traits)"
	],
	features: {
		"natural philosopher": {
			name: "Natural Philosopher",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Natural Philosopher",
				spells: ["guidance"],
				selection: ["guidance"],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "varkind og");
					},
					"I require no material components to cast my Varkind racial spells."
				]
			}
		},
		"natural philosopher 3": {
			name: "Natural Philosopher",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Natural Philosopher",
				spells: ["goodberry"],
				selection: ["goodberry"],
				firstCol: "oncelr"
			}]
		},
		"thunderous squeal": {
			name: "Thunderous Squeal",
			minlevel: 1,
			usages: 2,
			recovery: "long rest",
			action: ["bonus action", "Thunderous Squeal"],
			toNotesPage: [{
				note: desc([
					"As a bonus action, I can release a loud squeal. It is audible for 500 feet, and creatures within",
					"10ft of me that can hear me must succeed a Constitution saving throw DC 8 + my proficiency",
					"bonus + my Strength modifier or take my level in thunder damage."
				]),
				page3notes: true,
				name: "Thunderous Squeal",
				additional: "2 x per long rest",
			}],
		},
	}
};
var baseVulpine = {
	age: " mature at 12 years, and live up to 60 years.",
	height: " are between 3½ and 4½ feet tall.",
	weight: " weigh an average of 60 pounds.",
	heightMetric: " stand between " + ConvertToMetric("3.5 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " weigh an average of " + ConvertToMetric("60 lbs", 0.1) + ".",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	vision: [
		["Darkvision", 60],
		"Compass Sense"
	],
	languageProfs: [
		"Common",
		"Vulpine"
	],
	trait: "\n\u25C6 Darkvision: I can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light, but can't discern color." +
		"\n\u25C6 Compass Sense: Barring magical interference, I always know north."
};
RaceList["vulpini raposi og"] = {
	name: "Vulpini Raposi",
	sortname: "Vulpini, Raposi",
	plural: "Vulpini Raposi",
	regExpSearch: /^(?=.*vulpini)(?=.*raposi).*$/i,
	source: ["OG", 61],
	age: baseVulpine.age,
	height: baseVulpine.height,
	weight: baseVulpine.weight,
	heightMetric: baseVulpine.heightMetric,
	weightMetric: baseVulpine.weightMetric,
	speed: baseVulpine.speed,
	vision: baseVulpine.vision,
	languageProfs: baseVulpine.languageProfs,
	size: [4],
	scores: [0, 2, 0, 0, 0, 1],
	scorestxt: "+2 Dex, +1 Cha",
	trait: "Vulpini Raposi (+2 Dex, +1 Cha)" +
		baseVulpine.trait +
		"\n\u25C6 Unseen Movement. I'm proficient in Stealth. I can hide as a bns a." +
		"\n\u25C6 Fast Talker. I'm proficient in the Persuasion skill." +
		"\n\u25C6 Quick to Endear: I learn the Friends cantrip. From level 3 I can also cast Expeditious Retreat once per long rest. Int, Wis or Cha is my spellcasting ability for these and they don't require material components.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Persuasion", "Stealth"],
	skillstxt: "Persuasion and Stealth",
	features: {
		"quick to endear": {
			name: "Quick to Endear",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Quick to Endear",
				spells: ["friends"],
				selection: ["friends"],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "vulpini raposi og");
					},
					"I require no material components to cast my Vulpini Raposi racial spells."
				]
			}
		},
		"quick to endear 3": {
			name: "Quick to Endear",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Quick to Endear",
				spells: ["expeditious retreat"],
				selection: ["expeditious retreat"],
				firstCol: "oncelr"
			}]
		},
		"unseen movement": {
			name: "Unseen Movement",
			minlevel: 1,
			action: ["bonus action", " (hide)"]
		}
	}
};
RaceList["vulpini tenko og"] = {
	name: "Vulpini Tenko",
	sortname: "Vulpini, Tenko",
	plural: "Vulpini Tenko",
	regExpSearch: /^(?=.*vulpini)(?=.*tenko).*$/i,
	source: ["OG", 62],
	age: baseVulpine.age,
	height: baseVulpine.height,
	weight: baseVulpine.weight,
	heightMetric: baseVulpine.heightMetric,
	weightMetric: baseVulpine.weightMetric,
	speed: baseVulpine.speed,
	vision: baseVulpine.vision,
	languageProfs: baseVulpine.languageProfs,
	size: [4],
	scores: [0, 2, 0, 0, 1, 0],
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Vulpini Tenko (+2 Dex, +1 Wis)" +
		baseVulpine.trait +
		"\n\u25C6 Ethereal Jaunt. Once per long rest I can enter the ethereal plane and dash as a bonus action. I can remain in the ethereal plane until the end of my next turn.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Persuasion", "Stealth"],
	skillstxt: "Persuasion and Stealth",
	features: {
		"tenko magic": {
			name: "Tenko Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Tenko Magic",
				spells: ["fire bolt"],
				selection: ["fire bolt"],
				firstCol: "atwill"
			}, {
				name: "Tenko Magic",
				spells: ["faerie fire"],
				selection: ["faerie fire"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "vulpini tenko og");
					},
					"I require no material components to cast my Vulpini Tenko racial spells."
				]
			},
			toNotesPage: [{
				note: desc([
					"I learn the Fire Bolt cantrip and I can cast Faerie Fire once per long rest.",
					"From 3rd level I can also cast Magic Mouth once per long rest and from level 5",
					"I can cast Nystul’s Magic Aura once per long rest. Int, Wis, or Cha is my",
					"spellcasting ability for these spells and I don't need material components for them."
				]),
				page3notes: true,
				name: "Tenko Magic",
			}],
		},
		"tenko magic 3": {
			name: "Tenko Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Tenko Magic",
				spells: ["magic mouth"],
				selection: ["magic mouth"],
				firstCol: "oncelr"
			}]
		},
		"tenko magic 5": {
			name: "Tenko Magic",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Tenko Magic",
				spells: ["nystul's magic aura"],
				selection: ["nystul's magic aura"],
				firstCol: "oncelr"
			}]
		},
		"Ethereal Jaunt": {
			name: "Ethereal Jaunt",
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", "Ethereal Jaunt & Dash"]
		}
	}
};
RaceList["vulpini guaxin og"] = {
	name: "Vulpini Guaxin",
	sortname: "Vulpini, Guaxin",
	plural: "Vulpini Guaxin",
	regExpSearch: /^(?=.*vulpini)(?=.*guaxin).*$/i,
	source: ["OG", 62],
	age: baseVulpine.age,
	height: baseVulpine.height,
	weight: baseVulpine.weight,
	heightMetric: baseVulpine.heightMetric,
	weightMetric: baseVulpine.weightMetric,
	speed: baseVulpine.speed,
	vision: baseVulpine.vision,
	languageProfs: baseVulpine.languageProfs,
	size: [4],
	scores: [0, 2, 0, 1, 0, 0],
	scorestxt: "+2 Dex, +1 Int",
	trait: "Vulpini Guaxin (+2 Dex, +1 Int)" +
		baseVulpine.trait +
		"\n\u25C6 Keen Insight. I'm proficient in Insight." +
		"\n\u25C6 Cowering Feint. I'm can Disengage as a bonus action." +
		"\n\u25C6 Sharp Tongue: I learn the Vicious Mockery cantrip. From level 3 I can also cast Knock once per long rest. Int, Wis or Cha is my spellcasting ability for these and they don't require material components.",
	spellcastingAbility: [4, 5, 6],
	skills: ["Persuasion", "Stealth"],
	skillstxt: "Persuasion and Stealth",
	features: {
		"sharp tongue": {
			name: "Sharp Tongue",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Sharp Tongue",
				spells: ["vicious mockery"],
				selection: ["vicious mockery"],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "vulpini guaxin og");
					},
					"I require no material components to cast my Vulpini Guaxin racial spells."
				]
			}
		},
		"sharp tongue 3": {
			name: "Sharp Tongue",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Sharp Tongue",
				spells: ["knock"],
				selection: ["knock"],
				firstCol: "oncelr"
			}]
		},
		"cowering feint": {
			name: "Cowering Feint",
			minlevel: 1,
			action: ["bonus action", " (disengage)"]
		}
	}
};
//  RACE: FEY FOLK
RaceList["darkling og"] = {
	regExpSearch: /^darklings?$/i,
	name: "Darkling",
	plural: "Darklings",
	source: ["OG", 65],
	age: " reach adulthood at around 20 years and live up to 300 years.",
	savetxt: {
		adv_vs: ["charmed"],
	},
	skills: ["Stealth"],
	skillstxt: "Stealth.",
	weaponProfs: [false, false, ["dagger", "scimitar", "shortsword", "rapier"]],
	vision: [
		["Darkling Vision", 120],
		"Light Sensitivity"
	],
	spellcastingAbility: [4, 5, 6],
	height: " stand between 3 and 4 ft tall.",
	weight: " weigh about 50 lbs.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("50 lbs", 0.1) + ".",
	size: 4,
	scores: [0, 2, 0, 0, 1, 0],
	scorestxt: "+2 Dex, +1 Wis",
	trait: "Darkling, Fey (+2 Dex, +1 Wis)." +
		"\n\u25C6 Fey Ancestry: Adv on saves vs. charmed." +
		"\n\u25C6 Darkling Movement: Prof in Stealth, Adv. on Stealth in darkness." +
		"\n\u25C6 Light Sensitivity: Disadv on ATK-rolls and Perception checks relying on sight, when I, my target or what I wanna perceive is in bright light." +
		"\n\u25C6 Darkling Weapon Training: I'm proficient with daggers, scimitars, shortswords, and rapiers",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Sylvan"],
	features: {
		"darkling magic": {
			name: "Darkling Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Darkling Magic",
				spells: ["prestidigitation"],
				selection: ["prestidigitation"],
				firstCol: "atwill"
			}],
		},
		"darkling magic 3": {
			name: "Darkling Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Darkling Magic",
				spells: ["bane"],
				selection: ["bane"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "darkling og");
					},
					"I require no material components to cast my Darkling racial spells."
				]
			},
			toNotesPage: [{
				note: desc([
					"I know the Prestidigitation cantrip. From 3rd level, I can cast Bane once per long rest.",
					"Int, Wis, or Cha is my spellc. ability for it and it requires no material components."
				]),
				page3notes: true,
				name: "Woad-ways",
			}]
		},
		"death flash": {
			name: "Death Flash",
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"When I die, bright nonmagical light flashes out from me to a dist. of 10ft.",
					"The flash consumes my body, my possessions (except Metal/Magic Items) burn to ash.",
					"Any crea. able to see this: CON-save (DC10) or blinded until the end of their next turn.",
				]),
				page3notes: true,
				name: "Death Flash"
			}]
		},
	}
};
RaceList["dryad og"] = {
	regExpSearch: /^(?=.*dr(y|i)ad).*$/i,
	name: "Dryad",
	plural: "Dryads",
	source: ["OG", 66],
	age: " reach adulthood at around 100 years and live up to 3000 years.",
	height: " stand between 4 and 7 ft tall.",
	weight: " weigh about 180 lbs.",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("7 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("180 lbs", 0.1) + ".",
	size: 3,
	scores: [0, 0, 0, 0, 2, 1],
	scorestxt: "+2 Wis, +1 Cha",
	trait: "Dryad, Fey (+2 Wis, +1 Cha)." +
		"\n\u25C6 Fey Ancestry: Adv on saves vs charmed." +
		"\n\u25C6 Natural Adept: Prof in Nature." +
		"\n\u25C6 Fallow: No need to sleep, instead lie fallow (semiconscious) 4h/lr" +
		"\n\u25C6 Photosynthetic: I don't eat, but must maintain physical contact with fertile soil at least 72h/w or ingest a handful fertile soil each day. I need direct sunlight 6h/d (partial light contributes 1/2, bright magical light 1/4). Standard rules for no food/water (DMG 185).",
	savetxt: {
		adv_vs: ["charmed"],
	},
	skills: ["Nature"],
	skillstxt: "Nature",
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: ["Common", "Sylvan", "Beasts and Plants"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"dryad magic": {
			name: "Dryad Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Dryad Magic",
				spells: ["druidcraft"],
				selection: ["druidcraft"],
				firstCol: "atwill"
			}],
		},
		"dryad magic 3": {
			name: "Dryad Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Dryad Magic",
				spells: ["goodberry"],
				selection: ["goodberry"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "dryad og");
					},
					"I require no material components to cast my Dryad spells."
				]
			}
		},
		"dryad magic 5": {
			name: "Dryad Magic",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Dryad Magic",
				spells: ["plant growth"],
				selection: ["plant growth"],
				firstCol: "oncelr"
			}],
		},
		"tree bond": {
			name: "Tree Bond",
			minlevel: 1,
			toNotesPage: [{
				note: desc(["I deposit my essence into a tree large enough for my body. With Tree-Bond active, I see, hear, rest and sustain myself for the reminder of its/my lifetime. If the tree is uprooted, damaged or disturbed, I am expelled and take the dmg. done to the tree as psychic dmg."]),
				page3notes: true,
				name: "Tree Bond",
				additional: "ritual 10min"
			}]
		}
	}
};
var baseGelfling = {
	age: " reach adulthood at around 16 years and live up to 80 years.",
	height: " stand between 2 to 3 ft tall.",
	weight: " weigh about 60 lbs.",
	heightMetric: " stand between " + ConvertToMetric("2 ft", 0.1) + " and " + ConvertToMetric("3 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("60 lbs", 0.1) + ".",
	languageProfs: ["Common", "Sylvan"],
	basespeed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	bravesavetxt: {
		adv_vs: ["frightened"],
	},
	wingedspeed: {
		walk: {
			spd: 25,
			enc: 15
		},
		fly: {
			spd: 25
		}
	},
	braveOrWinged: "Please pick the Brave Male or Winged Female racial variant!",
	bravetrait: "Male Gelfling: Adv on saves vs frightened.",
	wingedtrait: "Female Gelfling: Retractable Wings (can be tucked away). Taking dmg while flying causes sudden falling. Fluttering with wings only halves the fall dmg.",
	dousanTrait: "Dousan Gelfling, Fey (+2 Wis, +1 Cha)." +
		"\n\u25C6 Thoughtful: Prof in Insight or Perception." +
		"\n\u25C6 Song of Thra: Prof in 1 Instrument and 1 Gaming Set." +
		"\n\u25C6 Desert Born: Acclimated to high altitudes above 20.000ft. Naturally adapted to hot climates." +
		"\n\u25C6 ",
	drenchenTrait: "Drenchen Gelfling, Fey (+1 Dex, +1 Con, +1 Cha)." +
		"\n\u25C6 Drenchen Weapon Training: Scimitars, Blowguns, Shortbows." +
		"\n\u25C6 Amphibious: Breathe Air and Water." +
		"\n\u25C6 Poison Resistance: Adv. on saves vs poison, poison res." +
		"\n\u25C6 Survivalist: Prof in Animal Handling or Survival." +
		"\n\u25C6 ",
	grottanTrait: "Grottan Gelfling, Fey (+1 Int, +1 Wis, +1 Cha)." +
		"\n\u25C6 Herbal training: Prof with Herbalism Kit." +
		"\n\u25C6 Magic of Stone: I learn the Magic Stone cantrip." +
		"\n\u25C6 Keen Hearing: Adv. on Perception checks that rely on hearing." +
		"\n\u25C6 ",
	sifaTrait: "Sifa Gelfling, Fey (+1 Dex, +1 Wis, +1 Cha)." +
		"\n\u25C6 Silver Tongue: Prof in Persuasion or Deception." +
		"\n\u25C6 Sifa Crafts: Prof with Water Vehivles or Navigator's Tools." +
		"\n\u25C6 Sifa Weapon Training: Scimitars, Shortbows, Longbows." +
		"\n\u25C6 ",
	spritonTrait: "Spriton Gelfling, Fey (+1 Str, +1 Dex, +1 Cha)." +
		"\n\u25C6 Capable: Prof in Athletics or Acrobatics." +
		"\n\u25C6 Spriton Crafts: Prof with either Calligrapher's Supplies, Leatherworker's Tools or Weaver's Tools." +
		"\n\u25C6 Spriton Weapon Training: Light Armour,  Choose 2 martial weapons." +
		"\n\u25C6 ",
	stonewoodTrait: "Stonewood Gelfling, Fey (+1 Dex, +1 Int, +1 Cha)." +
		"\n\u25C6 Naturalist: Prof in Nature." +
		"\n\u25C6 Stonewood Crafts: Prof with two of the following: Cobbler's Tools, Mason's Tools Or Thieve's Tools." +
		"\n\u25C6 Stonewood Weapon Training: Handaxes and Battleaxes." +
		"\n\u25C6 Fixer: I learn the Mending Cantrip." +
		"\n\u25C6 ",
	vapraTrait: "Vapra Gelfling, Fey (+1 Int, +2 Cha)." +
		"\n\u25C6 Mountain Born: Acclimated to high altitudes above 20.000ft. Naturally adapted to cold climates." +
		"\n\u25C6 Vapra Education: Prof in History or Arcana." +
		"\n\u25C6 ",
	dreamfasting: {
		name: "Dreamfasting",
		minlevel: 1,
		source: ["OG", 67],
		action: [
			["action", "Dreamfasting"]
		],
		toNotesPage: [{
			note: desc([
				"I can share my memories with another Gelfing or crea that is able to dreamfast.",
				"I can teach a crea (with min 6INT) how to dreamfast, success on CHA-check (DC18).",
				"A dreametching may occur spontanously during dreamfasting (DM's discretion).",
			]),
			page3notes: true,
			name: "Dreamfasting"
		}]
	},
	dreametching: {
		name: "Dreametching",
		source: ["OG", 67],
		minlevel: 1,
		action: [
			["action", "Dreametching"]
		],
		toNotesPage: [{
			note: desc([
				"I can carve thoughts and ideas into physical shape. When a creature capable of dream-",
				"fasting touches such an etching, it experiences the dream that was stiched into it."
			]),
			page3notes: true,
			name: "Dreametching"
		}]
	},
	calcChangesSpellCost: {
		spellAdd: [
			function(k, o, n) {
				removeSpellCosts(k, o, n, "gelfling.*((dousan)|(drenchen)|(grottan)|(sifa)|(spriton)|(stonewood)|(vapra)).*og", true);
			},
			"I require no material components to cast my Gelfling racial spells."
		]
	}
};
RaceList["gelfling dousan og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*dousan).*/i,
	name: "Dousan Gelfling",
	sortname: "Gelfling, Dousan",
	plural: "Dousan Gelflings",
	source: ["OG", 68],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [0, 0, 0, 0, 2, 1],
	scorestxt: "+2 Wis, +1 Cha",
	spellcastingAbility: [4, 5, 6],
	trait: baseGelfling.dousanTrait + baseGelfling.braveOrWinged,
	skills: [],
	skillstxt: "Choose: Insight or Perception.",
	toolProfs: [
		["Musical Instrument", 1],
		["Gaming Set", 1]
	],
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching,
		"dousan magic": {
			name: "Dousan Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Dousan Magic",
				spells: ["guidance"],
				selection: ["guidance"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Guidance Cantrip. I can also cast Augury from level 3 and Dust Devil from level 5.",
					"I can cast both spells once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Dousan Magic"
			}],
			calcChanges: baseGelfling.calcChangesSpellCost
		},
		"dousan magic 3": {
			name: "Dousan Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Dousan Magic",
				spells: ["augury"],
				selection: ["augury"],
				firstCol: "oncelr"
			}],
		},
		"dousan magic 5": {
			name: "Dousan Magic",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Dousan Magic",
				spells: ["dust devil"],
				selection: ["dust devil"],
				firstCol: "oncelr"
			}],
		},
	}
};
AddRacialVariant("gelfling dousan og", "brave", {
	name: "Brave Dousan Gelfling",
	plural: "Brave Dousan Gelflings",
	sortname: "Gelfling, brave Dousan",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.dousanTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling dousan og", "winged", {
	name: "Winged Dousan Gelfling",
	plural: "Winged Dousan Gelflings",
	sortname: "Gelfling, winged Dousan",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.dousanTrait + baseGelfling.wingedtrait
});
RaceList["gelfling drenchen og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*drenchen).*/i,
	name: "Drenchen Gelfling",
	sortname: "Gelfling, Drenchen",
	plural: "Drenchen Gelflings",
	source: ["OG", 68],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	scores: [0, 1, 1, 0, 0, 1],
	scorestxt: "+1 Dex, +1 Con, +1 Cha",
	trait: baseGelfling.drenchenTrait + baseGelfling.braveOrWinged,
	skills: [],
	skillstxt: "Choose: Animal Handling or Survival.",
	weaponProfs: [false, false, ["scimitar", "blowgun", "shortbow"]],
	dmgres: ["poison"],
	savetxt: {
		adv_vs: ["poisoned"],
	},
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		swim: {
			spd: 25
		}
	},
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching
	}
};
AddRacialVariant("gelfling drenchen og", "brave", {
	name: "Brave Drenchen Gelfling",
	plural: "Brave Drenchen Gelflings",
	sortname: "Gelfling, brave Drenchen",
	regExpSearch: /brave/i,
	savetxt: {
		adv_vs: ["frightened", "poisoned"],
	},
	trait: baseGelfling.drenchenTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling drenchen og", "winged", {
	name: "Winged Drenchen Gelfling",
	plural: "Winged Drenchen Gelflings",
	sortname: "Gelfling, winged Drenchen",
	regExpSearch: /winged/i,
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		fly: {
			spd: 25
		},
		swim: {
			spd: 25
		}
	},
	trait: baseGelfling.drenchenTrait + baseGelfling.wingedtrait,
});
RaceList["gelfling grottan og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*grottan).*/i,
	name: "Grottan Gelfling",
	sortname: "Gelfling, Grottan",
	plural: "Grottan Gelflings",
	source: ["OG", 68],
	age: " reach adulthood at around 16 years and live up to 200-300 years",
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [0, 0, 0, 1, 1, 1],
	scorestxt: "+1 Int, +1 Wis, +1 Cha",
	spellcastingAbility: [4, 5, 6],
	trait: baseGelfling.grottanTrait + baseGelfling.braveOrWinged,
	toolProfs: ["Herbalism Kit"],
	vision: [
		["Darkvision", "120ft"],
		"Sunlight Sensitivity (see notes)",
		"Keen Hearing (see racial traits)"
	],
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching,
		"magic of stone": {
			name: "Magic of Stone",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Magic of Stone",
				spells: ["magic stone"],
				selection: ["magic stone"],
				firstCol: "atwill"
			}]
		},
		"sunlight sensitivity": {
			name: "Sunlight Sensitivity",
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"I have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight",
					"when I, the target of my attack, or whatever I'm trying to perceive is in direct sunlight."
				]),
				page3notes: true,
				name: "Sunlight Sensitivity",
			}],
		},
	}
};
AddRacialVariant("gelfling grottan og", "brave", {
	name: "Brave Grottan Gelfling",
	plural: "Brave Grottan Gelflings",
	sortname: "Gelfling, brave Grottan",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.grottanTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling grottan og", "winged", {
	name: "Winged Grottan Gelfling",
	plural: "Winged Grottan Gelflings",
	sortname: "Gelfling, winged Grottan",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.grottanTrait + baseGelfling.wingedtrait
});
RaceList["gelfling sifa og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*sifa).*/i,
	name: "Sifa Gelfling",
	sortname: "Gelfling, Sifa",
	plural: "Sifa Gelflings",
	source: ["OG", 69],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [0, 1, 0, 0, 1, 1],
	scorestxt: "+1 Dex, +1 Wis, +1 Cha",
	spellcastingAbility: [4, 5, 6],
	trait: baseGelfling.sifaTrait + baseGelfling.braveOrWinged,
	skills: [],
	skillstxt: "Choose: Insight or Perception.",
	toolProfs: [
		["Water Vehicles or Navigator's Tools", 1]
	],
	weaponProfs: [false, false, "scimitar", "shortbow", "longbow"],
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching,
		"sifa magic": {
			name: "Sifa Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Sifa Magic",
				spells: ["gust"],
				selection: ["gust"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Gust Cantrip. I can also cast Illusory Script from lvl 3 and Gust of Wind from lvl 5.",
					"I can cast both spells once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Dousan Magic"
			}],
			calcChanges: baseGelfling.calcChangesSpellCost
		},
		"sifa magic 3": {
			name: "Sifa Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Sifa Magic",
				spells: ["illusory script"],
				selection: ["illusory script"],
				firstCol: "oncelr"
			}],
		},
		"sifa magic 5": {
			name: "Sifa Magic",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Sifa Magic",
				spells: ["gust of wind"],
				selection: ["gust of wind"],
				firstCol: "oncelr"
			}],
		}
	}
};
AddRacialVariant("gelfling sifa og", "brave", {
	name: "Brave Sifa Gelfling",
	plural: "Brave Sifa Gelflings",
	sortname: "Gelfling, brave Sifa",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.sifaTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling sifa og", "winged", {
	name: "Winged Sifa Gelfling",
	plural: "Winged Sifa Gelflings",
	sortname: "Gelfling, winged Sifa",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.sifaTrait + baseGelfling.wingedtrait
});
RaceList["gelfling spriton og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*spriton).*/i,
	name: "Spriton Gelfling",
	sortname: "Gelfling, Spriton",
	plural: "Spriton Gelflings",
	source: ["OG", 69],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [1, 1, 0, 0, 0, 1],
	scorestxt: "+1 Str, +1 Dex, +1 Cha",
	trait: baseGelfling.spritonTrait + baseGelfling.braveOrWinged,
	skills: [],
	skillstxt: "Choose: Athletics or Acrobatics.",
	toolProfs: [
		["Calligrapher's Supplies or Leatherworker's Tools or Weaver's Tools", 1]
	],
	weaponProfs: [false, false, ["choose 2 Martial Weap."]],
	armorProfs: [true, false, false, false],
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching
	}
};
AddRacialVariant("gelfling spriton og", "brave", {
	name: "Brave Spriton Gelfling",
	plural: "Brave Spriton Gelflings",
	sortname: "Gelfling, brave Spriton",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.spritonTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling spriton og", "winged", {
	name: "Winged Spriton Gelfling",
	plural: "Winged Spriton Gelflings",
	sortname: "Gelfling, winged Spriton",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.spritonTrait + baseGelfling.wingedtrait
});
RaceList["gelfling stonewood og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*stonewood).*/i,
	name: "Stonewood Gelfling",
	sortname: "Gelfling, Stonewood",
	plural: "Stonewood Gelflings",
	source: ["OG", 69],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [0, 1, 0, 1, 0, 1],
	scorestxt: "+1 Dex, +1 Int, +1 Cha",
	trait: baseGelfling.stonewoodTrait + baseGelfling.braveOrWinged,
	skills: ["Nature"],
	skillstxt: "Nature.",
	toolProfs: [
		["Cobbler's, Mason's or Thieve's Tools", 2]
	],
	weaponProfs: [false, false, ["handaxe", "battleaxe"]],
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching,
		fixer: {
			name: "Fixer",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Fixer",
				spells: ["mending"],
				selection: ["mending"],
				firstCol: "atwill"
			}]
		}
	}
};
AddRacialVariant("gelfling stonewood og", "brave", {
	name: "Brave Stonewood Gelfling",
	plural: "Brave Stonewood Gelflings",
	sortname: "Gelfling, brave Stonewood",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.stonewoodTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling stonewood og", "winged", {
	name: "Winged Stonewood Gelfling",
	plural: "Winged Stonewood Gelflings",
	sortname: "Gelfling, winged Stonewood",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.stonewoodTrait + baseGelfling.wingedtrait
});
RaceList["gelfling vapra og"] = {
	regExpSearch: /^.*(?=.*gelfling)(?=.*vapra).*/i,
	name: "Vapra Gelfling",
	sortname: "Gelfling, Vapra",
	plural: "Vapra Gelflings",
	source: ["OG", 69],
	age: baseGelfling.age,
	height: baseGelfling.height,
	weight: baseGelfling.weight,
	heightMetric: baseGelfling.heightMetric,
	weightMetric: baseGelfling.weightMetric,
	size: 4,
	languageProfs: baseGelfling.languageProfs,
	speed: baseGelfling.basespeed,
	scores: [0, 0, 0, 0, 1, 2],
	scorestxt: "+1 Int, +2 Cha",
	spellcastingAbility: [4, 5, 6],
	trait: baseGelfling.vapraTrait + baseGelfling.braveOrWinged,
	skills: [],
	skillstxt: "Choose: Arcana or History.",
	features: {
		dreamfasting: baseGelfling.dreamfasting,
		dreametching: baseGelfling.dreametching,
		"vilyaya magic": {
			name: "Vilyaya Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Vilyaya Magic",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Minor Illusion Cantrip. I can also cast Blur from lvl 3 and Invisibility from",
					"lvl 5. I can cast both spells once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Vilyaya Magic"
			}],
			calcChanges: baseGelfling.calcChangesSpellCost
		},
		"vilyaya magic 3": {
			name: "Vilyaya Magic 3",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Vilyaya Magic",
				spells: ["blur"],
				selection: ["blur"],
				firstCol: "oncelr"
			}],
		},
		"vilyaya magic 5": {
			name: "Vilyaya Magic 5",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Vilyaya Magic",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr"
			}],
		},
	}
};
AddRacialVariant("gelfling vapra og", "brave", {
	name: "Brave Vapra Gelfling",
	plural: "Brave Vapra Gelflings",
	sortname: "Gelfling, brave Vapra",
	regExpSearch: /brave/i,
	savetxt: baseGelfling.bravesavetxt,
	trait: baseGelfling.vapraTrait + baseGelfling.bravetrait
});
AddRacialVariant("gelfling vapra og", "winged", {
	name: "Winged Vapra Gelfling",
	plural: "Winged Vapra Gelflings",
	sortname: "Gelfling, winged Vapra",
	regExpSearch: /winged/i,
	speed: baseGelfling.wingedspeed,
	trait: baseGelfling.vapraTrait + baseGelfling.wingedtrait
});
RaceList["korred og"] = {
	regExpSearch: /^.*(?=.*korred).*$/i,
	name: "Korred",
	plural: "Korreds",
	source: ["OG", 70],
	age: " reach adulthood at around 30 years and live up to 300 years.",
	height: " stand between 3 and 4 ft tall.",
	weight: " weigh about 80 lbs.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("80 lbs", 0.1) + ".",
	size: 4,
	scores: [1, 0, 1, 0, 0, 1],
	scorestxt: "+1 Str, +1 Con, +1 Cha",
	trait: "Korred, Fey (+1 Str, +1 Con, +1 Cha)." +
		"\n\u25C6 Stone Adept: Adv. on stealth-checks in rocky terrain. Difficult terrain (rock, stone) does not impede my movement." +
		"\n\u25C6 Stone Mover: I count as large for capacity (carry, push, drag, lift)." +
		"\n\u25C6 Stone Speech: I can spend 10min to speak with stones. Most rocks do not have ears/eyes and poor grasp of time but give info about mineral composition and integrity." +
		"\n\u25C6 Stone Magic: I learn the Mold Earth Cantrip. I can also cast Meld into Stone from lvl 3 once per long rest w/o material components.",
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	vision: [
		["Darkvision", 120]
	],
	languageProfs: ["Common", "Sylvan", "Terran", "Stone"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"hair whip": {
			name: "Hair Whip",
			minlevel: 1,
			weaponOptions: [{
				regExpSearch: /^(?=.*hair whip).*$/i,
				name: "Hair Whip",
				ability: 1,
				type: "Spell",
				damage: ["C", 6, "Bludgeoning"],
				range: "30ft",
				description: "I can pull Large or smaller crea 10ft closer to me",
				abilitytodamage: false,
				useSpellcastingAbility: true,
				selectNow: true
			}]
		},
		"stone magic": {
			name: "Stone Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Stone Magic",
				spells: ["mold earth"],
				selection: ["mold earth"],
				firstCol: "atwill"
			}]
		},
		"stone magic 2": {
			name: "Stone Magic 5th level",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Stone Magic",
				spells: ["meld into stone"],
				selection: ["meld into stone"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "korred og", true);
					},
					"I require no material components to cast my Korred racial spells."
				]
			}
		}
	}
};
RaceList["nocker og"] = {
	regExpSearch: /^(?=.*nocker).*$/i,
	name: "Nocker",
	plural: "Nockers",
	source: ["OG", 71],
	age: " reach adulthood in the early 20s and live up to 130 years.",
	height: " stand between 4 and 5 1/2 ft tall.",
	weight: " weigh between 85 and 150 lbs.",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("5.5 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("85 lbs", 0.1) + " and " + ConvertToMetric("150 lbs", 0.1) + ".",
	size: 3,
	scores: [0, 1, 0, 2, 0, 0],
	scorestxt: "Nocker: +1 Dex, +2 Int.",
	trait: "Nocker, Fey (+1 Dex, +2 Int)." +
		"\n\u25C6 Welder's Eyes: Crea/obj lightly obscured (smoke, fog) visible to me." +
		"\n\u25C6 Favored Tools: I double ProfBonus to checks with Favored Tool." +
		"\n\u25C6 Operational Ingenuity: I add my ProfBonus twice to Arcana, History or Nature checks regarding magi/tech items, if I'm prof in that skill." +
		"\n\u25C6 Clever Magic: I can cast Identify, Arcane Lock from level 3 and Knock from level 5. I can cast the spells once per long rest and without providing material components.",
	skills: ["Perception"],
	skillstxt: "Perception.",
	toolProfs: [
		["Pick one favored Artisan's Tool", 1]
	],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	savetxt: {
		adv_vs: ["blinded"],
	},
	vision: [
		["Darkvision", 60]
	],
	languageProfs: ["Common", "Cipher (only I can read/write)", ["Gnomish Or Goblin", 1]],
	spellcastingAbility: [4, 5, 6],
	features: {
		"clever magic": {
			name: "Clever Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Clever Magic",
				spells: ["identify"],
				selection: ["identify"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "nocker og", true);
					},
					"I require no material components to cast my Nocker spells."
				]
			}
		},
		"clever magic 3": {
			name: "Clever Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Clever Magic",
				spells: ["arcane lock"],
				selection: ["arcane lock"],
				firstCol: "oncelr"
			}],
		},
		"clever magic 5": {
			name: "Clever Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Clever Magic",
				spells: ["knock"],
				selection: ["knock"],
				firstCol: "oncelr"
			}],
		}
	}
};
var basePixie = {
	source: ["OG", 72],
	age: " reach adulthood at around 50 years and live up to 500 years.",
	height: " stand between 4\" and 10\" tall and have a wingspan between 6\" and 15\".",
	weight: " weigh between 2 and 6 lbs.",
	heightMetric: " stand between " + ConvertToMetric("4 in", 0.1) + " and " + ConvertToMetric("10 in", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("2 lbs", 0.1) + " and " + ConvertToMetric("6 lbs", 0.1) + ".",
	size: 4,
	vision: [
		["Darkvision", 60]
	],
	speed: {
		walk: {
			spd: 15,
			enc: 5
		},
		fly: {
			spd: 25
		}
	},
	savetxt: {
		adv_vs: ["magic (Wis & Cha)"],
		immune: ["sleep"],
		text: ["Vulner. to thdr"]
	},
	trait: "\n\u25C6 Fey Cunning: I've adv. on WIS/CHA-saves vs magic; magic can't put me to sleep and I'm vulnerable to thunder damage." +
		"\n\u25C6 Fly: I can't fly with medium/heavy armour or while exhausted." +
		"\n\u25C6 Naive: I gain no benefits of a background. Instead I choose one Skill and one Artisan's Tool or Musical Instrument." +
		"\n\u25C6 Feywild Access: I know the exact location of any portals to the Feywild in 100ft at all times, and can access them at will. When I reach 5th level, I can cast divination to discover the nearest Feywild portal within 7 miles of my current location once per long rest.",
	toolProfs: [
		["Artisan's Tool or Musical Instrument", 1]
	],
	alighting: {
		name: "Alighting",
		minlevel: 1,
		usages: 1,
		recovery: "long rest",
		toNotesPage: [{
			note: desc([
				"I can alight on a crea of Small or larger size by using 5ft of my movement. If the crea is ally,",
				"I may use it as half-cover. While alighted I move with the crea, releasing my grip as reaction.",
				"The crea can remove me (object-interaction, opposed STR-Athl or DEX-Acrob check vs me).",
			]),
			page3notes: true,
			name: "Alighting",
			additional: "move-action"
		}],
	},
	calcChangesRemoveCosts: {
		spellAdd: [
			function(k, o, n) {
				removeSpellCosts(k, o, n, "pixie.*((seelie)|(unseelie)|(wild)).*og", true);
			},
			"I require no material components to cast my Pixie racial spells."
		]
	},
	feywildaccess: {
		name: "Feywild Access",
		minlevel: 5,
		spellcastingBonus: [{
			name: "Feywild Access",
			spells: ["divination"],
			selection: ["divination"],
			firstCol: "oncelr"
		}],
		calcChanges: {
			spellAdd: [
				function(spellKey, spellObj, spName, isDuplicate) {
					if (/pixie.*((seelie)|(unseelie)|(wild)).*og/.test(spName) && spellKey == "divination") {
						spellObj.description = "Discover the location of the nearest Feywild Portal within 7 miles";
						return true;
					}
				},
				"I can cast the Divination spell to discover the location of the nearest Feywild Portal within 7 miles of my current location."
			]
		},
	},
	flightlight: {
		name: "Flight Light",
		minlevel: 1,
		toNotesPage: [{
			note: desc([
				"While flying, I emit dim light in a 5-foot radius and a soft noise. While flying on the material",
				"plane, I have disadvantage on Dexterity (Stealth) checks.",
				"I pick the colour of my light and the accompanying sound of the following table or roll a d8: ",
				"1    Red          Musical notes",
				"2    Orange    Gentle breeze",
				"3    Yellow      Rustling leaves",
				"4    Spring      Babbling brook",
				"5    Green       Insect buzzing",
				"6    Blue         Tinkling chimes",
				"7    Indigo      Soft singing or humming",
				"8    Violet       Child’s laughter"
			]),
			page3notes: true,
			name: "Flight Light",
		}],
	},
};
RaceList["pixie seelie og"] = {
	regExpSearch: /^.*(?=.*pixie)(?=.*seelie).*$/i,
	name: "Seelie Pixie",
	plural: "Seelie Pixies",
	sortname: "Pixie, Seelie",
	source: basePixie.source,
	age: basePixie.age,
	height: basePixie.height,
	weight: basePixie.weight,
	heightMetric: basePixie.heightMetric,
	weightMetric: basePixie.weightMetric,
	size: basePixie.size,
	vision: basePixie.vision,
	speed: basePixie.speed,
	savetxt: basePixie.savetxt,
	toolProfs: basePixie.toolProfs,
	spellcastingAbility: [4, 5, 6],
	languageProfs: ["Common", "Sylvan", "Elvish"],
	skills: ["Persuasion"],
	skillstxt: "Persuasion. Choose one additional skill!",
	scores: [0, 1, 0, 0, 0, 2],
	scorestxt: "+1 Dex, +2 Cha",
	trait: "Seelie Pixie, Fey (+1 Dex, +2 Cha)." + basePixie.trait,
	features: {
		"alighting": basePixie.alighting,
		"feywild access": basePixie.feywildaccess,
		"flight light": basePixie.flightlight,
		"courtly magic": {
			name: "Courtly Magic",
			source: ["OG", 73],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Courtly Magic",
				spells: ["friends"],
				selection: ["friends"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Friends Cantrip. I can also cast Color Spray as SL 2 from level 3.",
					"I can cast the spells once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Courtly Magic"
			}],
		},
		"courtly magic 2": {
			name: "Courtly Magic 3rd lvl",
			source: ["OG", 73],
			minlevel: 3,
			spellcastingBonus: [{
				name: "Courtly Magic",
				spells: ["colorspray level 2"],
				selection: ["colorspray level 2"],
				firstCol: "oncelr"
			}],
			calcChanges: basePixie.calcChangesRemoveCosts
		},
	}
};
RaceList["pixie unseelie og"] = {
	regExpSearch: /^.*(?=.*pixie)(?=.*unseelie).*$/i,
	name: "Unseelie Pixie",
	sortname: "Pixie, Unseelie",
	plural: "Unseelie Pixies",
	source: basePixie.source,
	age: basePixie.age,
	height: basePixie.height,
	weight: basePixie.weight,
	heightMetric: basePixie.heightMetric,
	weightMetric: basePixie.weightMetric,
	size: basePixie.size,
	vision: basePixie.vision,
	speed: basePixie.speed,
	savetxt: basePixie.savetxt,
	toolProfs: basePixie.toolProfs,
	spellcastingAbility: [4, 5, 6],
	skills: ["Intimidation"],
	skillstxt: "Intimidation. Choose one additional skill!",
	languageProfs: ["Common", "Sylvan", "Infernal"],
	scores: [0, 0, 0, 0, 1, 2],
	scorestxt: "+1 Wis, +2 Cha",
	trait: "Unseelie Pixie, Fey (+1 Wis, +2 Cha)." + basePixie.trait,
	features: {
		"alighting": basePixie.alighting,
		"feywild access": basePixie.feywildaccess,
		"flight light": basePixie.flightlight,
		"spitefulmagic": {
			name: "Spiteful Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Spiteful Magic",
				spells: ["vicious mockery"],
				selection: ["vicious mockery"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Vicious Mockery Cantrip. I can also cast Compelled Duel from level 3.",
					"I can cast the spell once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Spiteful Magic"
			}],
			calcChanges: basePixie.calcChangesRemoveCosts
		},
		"spitefulmagic2": {
			name: "Spiteful Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Spiteful Magic",
				spells: ["compelled duel"],
				selection: ["compelled duel"],
				firstCol: "oncelr"
			}],
		},
	}
};
RaceList["pixie wild og"] = {
	regExpSearch: /^.*(?=.*pixie)(?=.*wild).*$/i,
	name: "Wild Pixie",
	sortname: "Pixie, Wild",
	plural: "Wild Pixies",
	source: basePixie.source,
	age: basePixie.age,
	height: basePixie.height,
	weight: basePixie.weight,
	heightMetric: basePixie.heightMetric,
	weightMetric: basePixie.weightMetric,
	size: basePixie.size,
	vision: basePixie.vision,
	speed: basePixie.speed,
	savetxt: basePixie.savetxt,
	toolProfs: basePixie.toolProfs,
	spellcastingAbility: [4, 5, 6],
	skills: ["Animal Handling"],
	skillstxt: "Animal Handling. Choose one additional skill!",
	languageProfs: ["Common", "Sylvan", "Druidic"],
	scores: [0, 0, 1, 0, 0, 2],
	scorestxt: "+1 Con, +2 Cha",
	trait: "Wild Pixie, Fey (+1 Con, +2 Cha)." + basePixie.trait,
	features: {
		"alighting": basePixie.alighting,
		"feywild access": basePixie.feywildaccess,
		"flight light": basePixie.flightlight,
		"instinctivemagic": {
			name: "Instinctive Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Instinctive Magic",
				spells: ["primal savagery"],
				selection: ["primal savagery"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Primal Savagery Cantrip. I can also cast Animal Friendship (lvl2) from level 3.",
					"I can cast the spell once per long rest and without providing material components."
				]),
				page3notes: true,
				name: "Instinctive Magic"
			}],
			calcChanges: basePixie.calcChangesRemoveCosts
		},
		"instinctivemagic2": {
			name: "Instinctive Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Instinctive Magic",
				spells: ["animal friendship level 2"],
				selection: ["animal friendship level 2"],
				firstCol: "oncelr"
			}],
		},
	}
};
RaceList["podling og"] = {
	regExpSearch: /^(?=.*podling).*$/i,
	name: "Podling",
	plural: "Podlings",
	source: ["OG", 75],
	age: " mature at around 4 years and can live up to be 25 years.",
	height: " stand between 18 in to 2.5 ft.",
	weight: " weigh about 40 lbs.",
	heightMetric: " stand between " + ConvertToMetric("18 in", 0.1) + " and " + ConvertToMetric("2.5 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("40 lbs", 0.1) + ".",
	size: 4,
	scores: [0, 0, 1, 0, 2, 0],
	scorestxt: "+1 Con, +2 Wis",
	trait: "Podling (+1 Con, +2 Wis)." +
		"\n\u25C6 Speech of Beast and Leaf: I can speak to plants and beasts and have adv. on CHA-checks to influence them. They understand my words, but I cannot understand them." +
		"\n\u25C6 Domestic Arts: Prof with Animal Handling and 1 Artisan's Tool." +
		"\n\u25C6 Podling Magic: I learn the Friends Cantrip. I can cast Speak with Animals and from level 3 I also Locate Plants or Animals. I can cast both once per long rest, Int, Wis or Cha is my spellcasting ability for these and I don't require material components." +
		"\n\u25C6 Fizzgig: I may keep a Fizzgig as pet (at my DMs discretion).",
	skills: ["Animal Handling"],
	skillstxt: "Animal Handling.",
	toolProfs: [
		["One set of Artisan's Tools", 1]
	],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Podling", "Speech of Beast and Leaf"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"podling magic": {
			name: "Podling Magic",
			minlevel: 1,
			spellcastingBonus: [{
					name: "Podling Magic",
					spells: ["friends"],
					selection: ["friends"],
					firstCol: "atwill"
				},
				{
					name: "Podling Magic",
					spells: ["speak with animals"],
					selection: ["speak with animals"],
					firstCol: "oncelr"
				}
			],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "podling og", true);
					},
					"I require no material components to cast my Podling racial spells."
				]
			}
		},
		"podling magic 3": {
			name: "Podling Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Podling Magic",
				spells: ["locate animals or plants"],
				selection: ["locate animals or plants"],
				firstCol: "oncelr"
			}],
		},
	}
};
CreatureList["fizzgig og"] = {
	name: "Fizzgig",
	source: ["OG", 75],
	size: 5,
	type: "Fey",
	alignment: "Unaligned",
	ac: 12,
	hp: 7,
	hd: [2, 4],
	speed: "35 ft",
	scores: [8, 14, 12, 4, 13, 11],
	skills: {
		perception: 3
	},
	passivePerception: 13,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
		description: ""
	}],
	traits: [{
			name: "Keen Hearing and Smell",
			description: "The pup has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		},
		{
			name: "Podling Pet",
			description: "Some Podlings keep Fizzgig as pets. Fizzgig are aggressive toward anything they do not know or recognize."
		}
	],
};
var basePooka = {
	trait: "Pooka (+2 Dex, +1 Cha)." +
		"\n\n\u25C6 Natural Liar: I'm proficient in Deception." +
		"\n\n\u25C6 Confidant Magic: I learn the Friends cantrip. I can cast Charm Person at SL 2 from level 3 and Calm Emotions from level 5. I can cast both spells once per long rest and w/o material components." +
		"\n\n\u25C6 "
};
RaceList["pooka og"] = {
	regExpSearch: /^(?=.*pooka).*$/i,
	name: "Pooka",
	plural: "Pookas",
	source: ["OG", 76],
	age: " vary a great deal in lifespan, a few decades to centuries (see book).",
	height: " stand between 3 and 4 1/2 ft.",
	weight: " weigh between 40 and 150 lbs.",
	heightMetric: " stand between " + ConvertToMetric("3 ft", 0.1) + " and " + ConvertToMetric("4.5 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("40 lbs", 0.1) + " and " + ConvertToMetric("150 lbs", 0.1) + ".",
	size: 4,
	languageProfs: ["Common", "Sylvan"],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	skills: ["Deception"],
	skillstxt: "Deception.",
	toolProfs: [
		["One set of Artisan's Tools", 1]
	],
	scores: [0, 2, 0, 0, 0, 1],
	scorestxt: "+2 Dex, +1 Cha",
	trait: basePooka.trait + "Please choose between Darkvision, Keen Hearing or Keen smell using the \"Racial Options\"-button below",
	spellcastingAbility: [4, 5, 6],
	features: {
		"confidant magic": {
			name: "Confidant Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Confidant Magic",
				spells: ["friends"],
				selection: ["friends"],
				firstCol: "atwill"
			}]
		},
		"confidant magic 3": {
			name: "Confidant Magic",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Confidant Magic",
				spells: ["charm person level 2"],
				selection: ["charm person level 2"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "pooka og");
					},
					"I require no material components to cast my Pooka racial spells."
				]
			}
		},
		"confidant magic 5": {
			name: "Confidant Magic",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Confidant Magic",
				spells: ["calm emotions"],
				selection: ["calm emotions"],
				firstCol: "oncelr"
			}],
		},
		"affinity shape": {
			name: "Affinity Shape",
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			action: [
				["action", " (start)"],
				["bonus action", " (end)"]
			],
			toNotesPage: [{
				note: desc([
					"I assume the shape of my affinity-animal (badger, bat, cat, camel, deer, eagle, frog, goat,",
					"hawk, hyena, jackal, lizard, mastiff, mule, octopus, owl, pony, rat, giant rat, raven, vulture,",
					"weasel, giant weasel, other animals only with DM's approval.",
					"My stats are replaced with the stats of the beast (I retain INT, WIS, CHA, my personality and",
					"saving-throws). I can communicate with Beasts of my affinity type.",
					"My equip merges into my new form and has no effect until I leave my form.",
					"While in the shape, I cannot cast spells other than my Confidant Magic spells.",
					"I revert when I fall unconscious, take dmg or die."
				]),
				page3notes: true,
				name: "Affinity Shape",
				additional: "1 x short rest",
			}],
		}
	},
};
AddRacialVariant("pooka og", "darkvision", {
	regExpSearch: /darkvision/i,
	sortname: "Pooka (Darkvision)",
	name: "Pooka",
	trait: basePooka.trait + "Darkvision: I can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light, but can't discern color.",
	vision: [
		["Darkvision", 60]
	],
});
AddRacialVariant("pooka og", "keen hearing", {
	regExpSearch: /keen hearing/i,
	sortname: "Pooka (Keen Hearing)",
	name: "Pooka",
	trait: basePooka.trait + "Keen Hearing: Advantage on Perception checks relying on hearing.",
	vision: [
		"Keen Hearing"
	],
});
AddRacialVariant("pooka og", "keen smell", {
	regExpSearch: /keen smell/i,
	sortname: "Pooka (Keen Smell)",
	name: "Pooka",
	trait: basePooka.trait + "Keen Smell: Advantage on Perception checks relying on smell.",
	vision: [
		"Keen Smell"
	],
});
RaceList["redcap og"] = {
	regExpSearch: /^(?=.*redcap).*$/i,
	name: "Redcap",
	plural: "Redcaps",
	source: ["OG", 77],
	age: " mature by age 8 and can live 40 years, only few live so long.",
	height: " stand between 4 and 6 ft.",
	weight: " weigh between 100 and 250 lbs.",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("6 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("100 lbs", 0.1) + " and " + ConvertToMetric("250 lbs", 0.1) + ".",
	size: 3,
	scores: [1, 0, 2, 0, 1, 0],
	scorestxt: "+1 Str, +2 Con",
	trait: "Redcap (+1 Str, +1 Con)" +
		"\n\u25C6 Bad Attitude: I'm proficient in Intimidation. If I have Prof from elsewhere, I gain Expertise instead." +
		"\n\u25C6 Redundant Organs: I've adv. on saves vs disease and poison and Poison Resistance." +
		"\n\u25C6 Omnivore: I can eat almost everything! As long as I can put my mouth around it, I can subsist on it." +
		"\n\u25C6 Redcap Savagery: I learn the Primal Savagery Cantrip and can pick between Slashing, Piercing, and Bludgeoning for it's damage type. If it hits an object, it always crits. Str is my spellcasting ability for it.",
	spellcastingAbility: 1,
	savetxt: {
		adv_vs: ["disease", "poison"]
	},
	dmgres: ["poison"],
	skills: [
		["Intimidation", "increment"]
	],
	skillstxt: "Intimidation.",
	vision: [
		["Darkvision", 60]
	],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: ["Common", "Sylvan"],
	features: {
		"redcap savagery": {
			name: "Redcap Savagery",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Redcap Savagery",
				spells: ["primal savagery"],
				selection: ["primal savagery"],
				firstCol: "atwill"
			}],
			weaponOptions: [{
				regExpSearch: /^(?=.*redcap)(?=.*savagery).*$/i,
				baseWeapon: "primal savagery",
				name: "Redcap Savagery",
				ability: 1,
				type: "Spell",
				damage: ["C", 10, "Choose"],
				range: "Self",
				description: "Choose the dmg type: Slashing, Piercing, or Bludgeoning. Always crits on objects.",
				abilitytodamage: false,
				selectNow: true
			}],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName, isDuplicate) {
						if (spName === "redcap og" && spellKey === "primal savagery") {
							spellObj.descriptionCantripDie = spellObj.descriptionCantripDie.replace("Acid", "Slash/Pierc/Bludg");
							spellObj.description = spellObj.description.replace("Acid", "Slash/Pierc/Bludg");
							return true;
						}
					},
					"I can choose the damage type of Primal Savagery from Slashing, Piercing, or Bludgeoning."
				]
			},
		},
		"eat the victim": {
			name: "Eat the Victim",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			toNotesPage: [{
				note: desc([
					"I consume an entire corpse of a crea not larger than one size category larger than myself.",
					"I recover a number of Hit Dice eq. to my ProfBonus, but I do not expend Hit Dice."
				]),
				page3notes: true,
				name: "Eat the victim",
				additional: "ritual 1min, once per LR",
			}]
		}
	}
};
RaceList["satyr og"] = {
	regExpSearch: /^(?=.*satyr).*$/i,
	name: "Satyr",
	plural: "Satyrs",
	source: ["OG", 78],
	age: " enter adulthood in their early teens and live up to 300 years.",
	height: " stand between 4 and 6 ft.",
	weight: " weigh between 110 and 220 lbs.",
	heightMetric: " stand between " + ConvertToMetric("4 ft", 0.1) + " and " + ConvertToMetric("6 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("110 lbs", 0.1) + " and " + ConvertToMetric("220 lbs", 0.1) + ".",
	size: 3,
	scores: [0, 1, 1, 0, 0, 1],
	scorestxt: "+1 Dex, +1 Con, +1 Cha",
	trait: "Satyr (+1 Dex, +1 Con, +1 Cha)." +
		"\n\u25C6 Sylvan Living: I'm proficient with Longbows, Blowguns, Survival and Musical Instrument." +
		"\n\u25C6 Limitless Endurance: Adv. on saves vs paralysis and exhaustion." +
		"\n\u25C6 Shared Passions: I can touch a Humanoid or Fey to cast Detect Thoughts on them while we have contact." +
		"\n\u25C6 Sylvan Magic: I learn the Friends cantrip. I can cast Charm Person at SL 2 from level 3. I can cast both spells once per long rest and w/o material components.",
	skills: ["Survival"],
	skillstxt: "Survival.",
	toolProfs: [
		["Musical Instrument", 1]
	],
	weaponProfs: [false, false, ["longbow", "blowgun"]],
	savetxt: {
		adv_vs: ["paralysis", "exhaustion"]
	},
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: ["Common", "Sylvan"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"shared passion": {
			name: "Shared Passion",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Shared Passion",
				spells: ["detect thoughts"],
				selection: ["detect thoughts"],
				firstCol: "atwill"
			}],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName, isDuplicate) {
						if (spName === "satyr og" && spellKey == "detect thoughts") {
							spellObj.range = "Touch";
							spellObj.description = "touch 1 Humanoid/Fey Int>3; I detect aligment; Save or I can read thoughts; ends if I break contact";
							return true;
						}
					},
					"I can touch a Humanoid or Fey and cast Detect Thoughts on them. Even if they make their save I can learn their alignment."
				]
			},
		},
		"ramming speed": {
			name: "Ramming Speed",
			minlevel: 1,
			action: [
				["bonus action", "Ramming speed"]
			],
			toNotesPage: [{
				note: desc([
					"I move at least 10ft in a straight line and ram a crea (\"Large\" or smaller) with my horns.",
					"Target must make a STR-save or (my choice): pushed 5ft away from me / knocked prone."
				]),
				page3notes: true,
				name: "Ramming speed",
				additional: "bonus action, SaveDC = 8 + ProfBonus + StrMod"
			}],
		},
		"sylvan magic": {
			name: "Sylvan Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Sylvan Magic",
				spells: ["friends"],
				selection: ["friends"],
				firstCol: "atwill"
			}],
			toNotesPage: [{
				note: desc([
					"I learn the Friends Cantrip. I can also cast Charm Person (Lvl2) from level 3.",
					"I can cast the spell once per day and without providing material components."
				]),
				page3notes: true,
				name: "Sylvan Magic"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "satyr og");
					},
					"I require no material components to cast my Satyr spells."
				]
			}
		},
		"sylvan magic 2": {
			name: "Sylvan Magic 3rd lvl",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Sylvan Magic",
				spells: ["charm person level 2"],
				selection: ["charm person level 2"],
				firstCol: "oncelr"
			}],
		}
	}
};
RaceList["siren og"] = {
	regExpSearch: /^(?=.*siren).*$/i,
	name: "Siren",
	plural: "Sirens",
	source: ["OG", 79],
	age: " enter adulthood in their early teens and live up to 200 years.",
	height: " stand between 5 and 6 ft.",
	weight: " weigh about 140 lbs",
	heightMetric: " stand between " + ConvertToMetric("5 ft", 0.1) + " and " + ConvertToMetric("6 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("140 lbs", 0.1) + ".",
	size: 3,
	scores: [0, 1, 0, 0, 0, 2],
	scorestxt: "+1 Dex, +2 Cha",
	trait: "Siren (+1 Dex, +2 Cha)." +
		"\n\u25C6 Darkvision: I can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light, but can't discern color." +
		"\n\u25C6 Friend of the Sea: Using gestures and sounds I can communicate simple ideas to beasts with a swim speed." +
		"\n\u25C6 Siren Training: I am proficient with Spears, Tridents, and one Musical Instrument." +
		"\n\u25C6 Siren Magic: I learn the Friends cantrip. I can cast Fog Cloud at SL 2 from level 3 once per long rest and w/o material components.",
	vision: [
		["Darkvision", 60]
	],
	toolProfs: [
		["Musical Instrument", 1]
	],
	weaponProfs: [false, false, ["spear", "trident"]],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		},
		swim: {
			spd: 30
		}
	},
	languageProfs: ["Common", "Sylvan", "Aquan", "Friend of the Sea"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"child of the sea": {
			name: "Child of the Sea",
			minlevel: 1,
			usages: "prof bonus days w/o submersion",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			recovery: "submerge",
			limfeaname: "Days w/o submersion in water",
			action: [
				["action", "Split or re-form tail"],
			],
			toNotesPage: [{
				note: desc([
					"I have a swimming speed of 30 feet, and can breathe air and water. When dry, I can use my",
					"action to split my tail into legs. If I'm wet, I immediately revert to my aquatic form. I can use",
					"my action on my turn to re-form my tail. While I have a tail, my walk speed is 5 feet. If I have",
					"not fully submerged myself in water for a number of days equal to my prof. bonus, I take one",
					"level of exhaustion, which cannot be alleviated until I finish a long rest while submerged."
				]),
				page3notes: true,
				name: "Child of the Sea",
			}],
		},
		"siren magic": {
			name: "Siren Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Siren Magic",
				spells: ["friends"],
				selection: ["friends"],
				firstCol: "atwill"
			}]
		},
		"siren magic 3": {
			name: "Siren Magic 3rd lvl",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Siren Magic",
				spells: ["fog cloud level 2"],
				selection: ["fog cloud level 2"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "siren og");
					},
					"I require no material components to cast my Siren racial spells."
				]
			}
		},
		"siren song": {
			name: "Siren Song",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: [
				["action", "Siren Song"]
			],
			toNotesPage: [{
				note: desc([
					"I concentrate and fill air/water 100ft around me with music, spreading around corners, for",
					"up to 10 min. For the duration I gain adv on Performance-checks. As a bns a I force a crea",
					"which is not in combat to make WIS-save (DC = 8 + ProfBonus + ChaMod). On a failure,",
					"the crea is charmed by me for up to an hour, as long as it can hear the music.",
					"I can charm a number of creatures equal to my Cha Mod."
				]),
				page3notes: true,
				name: "Siren Song",
				additional: "1 x per long rest"
			}],
		}
	}
};
RaceList["sluagh og"] = {
	regExpSearch: /^(?=.*sluagh).*$/i,
	name: "Sluagh",
	plural: "Sluaghs",
	source: ["OG", 80],
	age: " live over 400 years.",
	height: " stand between 4'8\" and 6'8\" tall",
	weight: " weigh between 55 and 60 lbs",
	heightMetric: " stand between " + ConvertToMetric("4.67 ft", 0.1) + " and " + ConvertToMetric("6.67 ft", 0.1) + " tall.",
	weightMetric: " weigh between " + ConvertToMetric("55 lbs", 0.1) + " and " + ConvertToMetric("60 lbs", 0.1) + ".",
	size: 3,
	scores: [0, 0, 0, 1, 2, 0],
	scorestxt: "+1 Int, +2 Wis",
	trait: "Sluagh (+1 Int, +2 Wis)." +
		"\n\u25C6 Darkvision: I can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light, but can't discern color." +
		"\n\u25C6 Gelatinous Bones: I'm prof in Stealth. I can squeeze into tiny spaces, but then can do nothing else but move at a speed of 5ft." +
		"\n\u25C6 Insightful: I'm proficient in Insight." +
		"\n\u25C6 Psychometry: I can cast Speak With Object once per long rest.",
	skills: ["Stealth", "Insight"],
	skillstxt: "Stealth, Insight.",
	vision: [
		["Darkvision", 60]
	],
	speed: {
		walk: {
			spd: 25,
			enc: 15
		}
	},
	languageProfs: ["Common", "Sylvan", "Sluagh Telegraph Cipher", ["from Sluagh", 2]],
	toolProfs: ["Ritual Tea Set"],
	eval: function() {
		AddToInv("gear", "l", "Sluagh Ritual Tea Set", 1, 0.5);
	},
	removeeval: function() {
		//TODO: remove Ritual Tea Set on race removal
		//How to get the line?
		//InvDelete("gear",???);
	},
	spellcastingAbility: [4, 5, 6],
	features: {
		"messages in the leaves": {
			name: "Messages in the Leaves",
			minlevel: 1,
			toNotesPage: [{
				note: desc([
					"Using a ritual tea-set I serve the favorite tea of someone I know, who also owns a ritual tea-set. I contact them by tapping with a tea-spoon (like \"Sending\"-Spell).",
					"The tapping is the only information transferred. If the owner of the other tea-set hears it, they respond by tapping. The connection lasts until the tea has gone cold or is consumed.",
				]),
				page3notes: true,
				name: "Messages in the Leaves"
			}],
		},
		"psychometry": {
			name: "Psychometry",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Psychometry",
				spells: ["speak with object og"],
				selection: ["speak with object og"],
				firstCol: "oncelr"
			}]
		},
		"friends to the dead": {
			name: "Friends to the Dead",
			minlevel: 1,
			action: [
				["action", "Friends to the Dead"]
			],
			toNotesPage: [{
				note: desc([
					"Using a ritual tea-set I serve the favorite tea of someone I know, who also owns a ritual tea-set. I contact them by tapping with a tea-spoon (like \"Sending\"-Spell).",
					"The tapping is the only information transferred. If the owner of the other tea-set hears it, they respond by tapping. The connection lasts until the tea has gone cold or is consumed.",
				]),
				page3notes: true,
				name: "Friends to the Dead"
			}],
		},
		"friends to the dead 5": {
			name: "Friends to the Dead",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Friends to the Dead",
				spells: ["speak with dead"],
				selection: ["speak with dead"],
				firstCol: "oncelr"
			}],
			calcChanges: {
				spellAdd: [
					function(k, o, n) {
						removeSpellCosts(k, o, n, "sluagh og");
					},
					"I require no material components to cast my Sluagh racial spells."
				]
			}
		},
	},
};
RaceList["stone troll og"] = {
	regExpSearch: /^.*(?=.*stone)(?=.*troll).*$/i,
	name: "Stone Troll",
	plural: "Stone Trolls",
	source: ["OG", 81],
	age: " reach adulthood in their early 30s and live up to 200 years.",
	height: " stand between 7 and 8 ft.",
	weight: " weigh between 280 and 340 lbs",
	heightMetric: " stand between " + ConvertToMetric("7 ft", 0.1) + " and " + ConvertToMetric("8 ft", 0.1) + " tall.",
	weightMetric: " weigh about " + ConvertToMetric("280 lbs", 0.1) + " and " + ConvertToMetric("340 lbs", 0.1) + ".",
	size: 3,
	scores: [2, 0, 1, 0, 0, 0],
	scorestxt: "+2 Str, +1 Con",
	trait: "Stone Troll (+2 Str, +1 Con)." +
		"\n\u25C6 Darkvision: I can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light, but can't discern color." +
		"\n\u25C6 Natural Athlete: Prof in Athletics." +
		"\n\u25C6 Crushing Weaponry: Prof with Mauls, Morningstars, Warhammers." +
		"\n\u25C6 Mountain Adept: Ignore difficult terrain due to rock or ice.",
	skills: ["Athletics"],
	skillstxt: "Athletics.",
	weaponProfs: [false, false, ["maul", "morningstar", "warhammer"]],
	spellcastingAbility: [3],
	vision: [
		["Darkvision", 60]
	],
	speed: {
		walk: {
			spd: 30,
			enc: 20
		}
	},
	languageProfs: ["Common", "Giant"],
	features: {
		"strength of honor": {
			name: "Strength of Honor",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: [
				["reaction", "Strength of Honor"]
			],
			toNotesPage: [{
				note: desc([
					"When I take dmg from a crea, I can use my reaction to roll a # of d6s eq to my ProfBonus",
					"I reduce the incoming dmg by the total & I add the total to the next meele atk I hit.",
				]),
				page3notes: true,
				name: "Strength of Honor",
				additional: "1 x per long rest"
			}],
		},
		"thundering stomp": {
			name: "Thundering Stomp",
			minlevel: 1,
			usages: 1,
			recovery: "short rest",
			weaponsAdd: {
				select: ["Thundering Stomp"],
			},
			spellcastingBonus: [{
				name: "Thundering Stomp",
				spells: ["thundering stomp og"],
				selection: ["thundering stomp og"],
				firstCol: "oncesr"
			}],
			toNotesPage: [{
				note: desc([
					"I stomp, creating thundering sound audible 100ft. All crea within 5ft must make CON-save.",
					"Failed save: 1d8 thunder dmg and deafened until start of its next turn.",
					"Damage increase: CL5 2d8, CL11 3d8, CL17 4d8.",
				]),
				page3notes: true,
				name: "Thundering Stomp",
				additional: "once per short rest"
			}],
		}
	}
};
// RACE: MONSTROUS
// RACE: PLANTS
// RACE: UNDEAD
RaceList["bound spirit og"] = {
	regExpSearch: /^(?=.*spirit)(?=.*bound).*$/i,
	name: "Bound Spirit",
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
		}
	},
	languageProfs: ["Common", "(any from previous life)"],
	vision: [
		["Darkvision", 60],
		["Ethereal Sight", 30]
	],
	features: {
		"ethereal movement": {
			name: "Ethereal Movement",
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
			}]
		},
		"Speak with Dead": {
			name: "Speak with Dead",
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
			}]
		}
	}
};
RaceList["ghoul og"] = {
	regExpSearch: /^(?=.*ghoul).*$/i,
	name: "Ghoul",
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
				damage: [1, 6, "slashing"],
				abilitytodamage: true,
				selectNow: true,
				isAlwaysProf: true
			}]
		},
		"paralyzing strike": {
			name: "Paralyzing Strike",
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
			}]
		}
	}
};
RaceList["mummy og"] = {
	regExpSearch: /^(?=.*mummy).*$/i,
	name: "Mummy",
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
			}
		}
	}
};
RaceList["skeleton og"] = {
	regExpSearch: /^(?=.*skeleton).*$/i,
	name: "Skeleton",
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
			}]
		},
		"empty innards": {
			name: "Empty Innards",
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
			}]
		}
	}
};
RaceList["wight og"] = {
	regExpSearch: /^(?=.*wight).*$/i,
	name: "Wight",
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
		}
	},
	languageProfs: ["(any from previous life)"],
	vision: [
		["Darkvision", 60]
	],
	features: {
		"sense mortality": {
			name: "Sense Mortality",
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
			}]
		}
	}
};
RaceList["zombie og"] = {
	regExpSearch: /^(?=.*zombie).*$/i,
	name: "Zombie",
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
			}]
		}
	}
};
// RACE: OUTSIDER