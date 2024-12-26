/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*	-INFORMATION-
	Subject:	Subclasses
	Effect:		This script aims to add Subclasses from Old Gus's Errata's Wanderer of Infinite Skies
				This is just a part of the source book. The master file with all finished scripts can be found here:
				https://github.com/xi-ka/mpmb-contributions/blob/main/Old_Gus_Errata-Master.js
	Source:		https://callmepartario.github.io/old-gus-errata/
	Author:		Old Gus (Partario Flynn)
	Code by:	xika
	Date:		2024-12-26 (sheet v13)
	
*/
/*
	Done (4/35):
		- Artificer: Tattoosionist
		- Bard: Mayhem
		- Cleric: Domain of Pestilence
		- Ranger: Sensate
		- Rogue: Gatecrasher
*/
var iFileName = "Old_Gus_Errata-Subclasses.js";
RequiredSheetVersion("13.2.3");
AddSubClass("artificer", "tattoosionist og", {
	regExpSearch: /tattoosionist/i,
	subname: "Tattoosionist",
	fullname: "Tattoosionist",
	source: ["OG", 135],
	features: {
		"subclassfeature3": {
			name: "Irons & Skin Show",
			minlevel: 3,
			source: ["OG", 135],
			description: desc([
				"I gain profiency with Calligrapher's Supplies or another artisan tool if I already have it.",
				"I can animate tattoos on my skin and create new ones. I can also permanently tattoo others."
			]),
			spellcastingBonus : [{
				name: "Skin Show",
				spells: ["tattoosion og"],
				selection: ["tattoosion og"]
			},{
				name: "Skin Show",
				spells: ["puncture og"],
				selection: ["puncture og"]
			}],
			toolProfs: [
				["Calligrapher's Supplies"]
			],
		},
		"tattoosionist spells": {
			name: "Tattoosionist Spells",
			minlevel: 3,
			source: ["OG", 135],
			spellcastingExtra: [
				//SL 1
				"illusory script", "inflict wounds",
				//SL 2
				"cloud of daggers", "crown of madness",
				//SL 3
				"spirit guardians", "major image",
				//SL 4
				"giant insect", "summon greater demon",
				//SL 5
				"circle of power", "hold monster"
			],		
			description: desc([
				"I have a number of extra spells always prepared after I reach 3rd, 5th, 9th, 13th and 17 level.",
				"They are artificer spells for me, but they don’t count against the number of spells I prepare."
			]),
		},
		"custom work": {
			name: "Custom Work",
			minlevel: 3,
			source: ["OG", 136],
			description: desc([
				"I can create constructs from my tattoos (See \"Animated Tattoos List\" in Book; add creatures",
				"on companion page and switch type to \"Animated Tattoo\"). When I finish a long rest and",
				"my alchemist’s supplies are with me, I can choose new forms for my animated tattoos."
			]),
			additional: "Max animated tattoos: Int Mod",
			action: ["action","Animate Tattoo"],
			extraLimitedFeatures : [{
				name : "Animate Tattoo",
				usages : 1,
				recovery : "long rest",
				altResource : "SS 1+"
			}]
		},
		"loyal to the coil": {
			name: "Loyal to the Coil",
			minlevel: 9,
			source: ["OG", 136],
			description: desc([
				"I can exert complete control over one of my animated tattoos as an action. It gains 60ft",
				"darkvision and 10ft tremorsense. I can speak through it with my own voice, but I'm deaf",
				"and blind with regard to my own senses. As an action I can cause it to explode dealing 4d8",
				"psychic damage; half on Wis save. I need to restore that tattoo as part of a short/long rest."
			])
		},
		"my art suffers for me": {
			Name: "My Art Suffers For Me",
			minlevel: 15,
			source: ["OG", 135],
			description: desc([
				"My animated tattoo can swap with a crea. that has just been attacked (see companion page)."
			]),
			action: ["reaction", "My Art Suffers For Me"]
		}
	}		
});
CompanionList.animated_tattoo = {
	/*
	Animated Tattoo for the Tattoosionist, Artificer Subclass
	+ type: construct
	+ immune: immune to poison and psychic damage, and the charmed, exhausted, frightened, paralyzed, petrified, and poisoned conditions
	+ hp: 2 + your Intelligence modifier + five times your artificer level
	+ weapon attacks are magical
	+ to hit bonus replaced by PC spell attack bonus
	+ spell DC replaced by PC spell dc
	+ bonus to damage of PC profiency - 2
	+ disappears after 1h or 100 * int ft distance
	+ command as bns
	*/
	name: "Animated Tattoo",
	nameTooltip: "Animated Tattoo (Warlock Subclass Tattoosionist)",
	nameOrigin: "Stat adjustment for Animated Tattoos from the Warlock Subclass Tattoosionist",
	nameMenu: "Animated Tattoo (Tattoosionist)",
	source: [
		["OG", 243]
	],
	attributesAdd : {
		header: "Animated Tattoo",
		type: "Construct",
		minlevelLinked: ["artificer"],
		subtype: "",
		features: [{
			name: "Immunities",
			description: "The animated tattoo is immune to poison and psychic damage, and the charmed, exhausted, frightened, paralyzed, petrified, and poisoned conditions."
		},{
			name: "Summon",
			description: "The animated tattoo disappears when it reaches 0 HP, after 1h or if it moves more than 100 ft * my int mod away from me."
		}],
		actions: [{
			name: "Pounding Skin",
			minlevel: 5,
			description: "Once per turn when one of my animated tattoos deals damage I can add a d12."
		},{
			name: "My Art Suffers For Me",
			minlevel: 14,
			description: "As a reaction I can command one of my animated tattoos to swap places with a willing creature within 5ft that has just been attacked. The attack hits my animated tattoo and it gains resistance to it. Additionally I can now use Pounding Skin twice per turn."
		}],
		notes: [{
			name: "Animated Tattoo",
			description: "Once per long rest I can animate a tattoo I created earlier for free as an action, after that it costs a spell slot. When animated, the tattoo appears in an unoccupied space within 5ft of the person bearing it. It has the creature type construct, no senses of its own and is under my control. "
		},{
			name: "Combat",
			description: "The animated tattoo shares my initiative count, but it takes its turn immediately after mine. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless I take a bonus action to command it to take one of the actions in its stat block or the Dash, Disengage, Help, Hide, or Search action. The animated tattoo uses my artificer spell mod as attack modifier, gets a bonus of my Prof Bonus -2 to damage and its attacks count as magical.  If it causes a creature to make a saving throw, I can use my spell save DC for it instead.\nThe first row of the attacks above already has these bonuses added. The Description and text in traits and features does not."
		}],
		senses: "No senses of it's own."
		
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.artificer && /tattoosionist/.test(classes.known.artificer.subclass)) return;
			HDobj.alt.push( 2 + What("Int Mod") + 5 * classes.known.artificer.level );
			HDobj.altStr.push(" =  2 + your Intelligence modifier + five times your Artificer level.");
		},
		setAltHp : true
	},
	attributesChange : function(sCrea, objCrea) {
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			strExtraDmg = "oProf-2";
			if (!oAtk.dc) 
			{
				if(oAtk.abilitytodamage !== false)
				{
					//If the previous Attack had abilityToDamage we now need to add
					//     it manually since switching to the spellMod removes that
					var strAttribute = ["Str","Dex","Con","Wis","Int","Cha"][oAtk.ability - 1];
					strExtraDmg = strAttribute + "+" + strExtraDmg;
				}
				oAtk.useSpellMod = "artificer";
				if (!oAtk.modifiers)
				{
					oAtk.modifiers = [0, strExtraDmg];
				}
				else
				{
					oAtk.modifiers[1] += "+" + strExtraDmg;
				}
			} else {
				//Change Spell DC to Artificer Spell DC
				oAtk.useSpellMod = "artificer";
				oAtk.modifiers[0] = "dc";
			}
		}
	}
};

AddSubClass("ranger", "sensate og", {
	regExpSearch: /sensate/i,
	subname: "Sensate",
	fullname: "Sensate",
	source: ["OG", 162],
	features: {
		"subclassfeature3": {
			name: "Sensate Weaponry",
			minlevel: 3,
			source: ["OG", 162],
			additional: levels.map(function(n, idx) {
				var sensateWeapons = [0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5][idx];
				return sensateWeapons + " Weapon Types (see page 3)";
			}),
			description: "",
			toNotesPage: [{
				name: "Sensate Weaponry",
				popupName: "Sensate Weaponry",
				source: ["OG", 148],
				page3notes: true,
				note: [
					"I pick 2 types of weapons I'm proficient with to be my sensate weapons. I can use my Wis",
					"mod, instead of Str or Dex, for the attack and damage rolls. Once on each of my turns, after",
					"I hit with a sensate weapon or unarmed strike, I can choose one of the following:",
					"\u25C6 I cause the attack to deal an additional 1d6 damage.",
					"\u25C6 Target has disadv. on 1st atk it makes before the end of it's next turn if it fails a Str Save.",
					"\u25C6 I push the target 10 feet away from me",
					"When I reach 6th, 11th, and 17th level in this class, I can choose another type of weapon.",
					"Include the word \"Sensate\" in the name of a weapon on page 1 to activate."
				]
			}],				
			calcChanges: {
				atkAdd: [
					function(fields, v) {
						if (classes.known.ranger && What('Wis Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (fields.Mod == 1 || fields.Mod == 2) && /\bsensate\b/i.test(v.WeaponText)) {
							fields.Mod = 5;
							return true;
						}
					},
					"If I include the word 'Sensate' in a melee weapon's name, the weapon will use my Wisdom mod for Attack and Damage."
				]
			},			
		},
		"sensate spells": {
			name: "Sensate Spells",
			minlevel: 3,
			source: ["OG", 162],
			spellcastingBonus : [{
				//Class Level 3
				name : "Sensate Spells SL1",
				spells: ["bane", "bless"],
				times : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				level : [1, 1]
			},{
				//Class Level 5
				name : "Sensate Spells SL2",
				spells: ["augury", "detect thoughts"],
				times : [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				level : [2, 2]
			},{
				//Class Level 9
				name : "Sensate Spells SL3",
				spells: ["clairvoyance", "mass healing word"],
				times : [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				level : [3, 3]
			},{
				//Class Level 13
				name : "Sensate Spells SL4",
				spells: ["divination", "otiluke's resilient sphere"],
				times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
				level : [4, 4]
			},{
				//Class Level 17
				name : "Sensate Spells",
				spells: ["destructive wave", "mass cure wounds"],
				times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
				level : [5, 5]
			}],			
			description: desc([
				"Starting at level 3 I can can pick one of two additional spells when I reach certain levels.",
				"They count as ranger spells for me, but they don’t count against the number of spells I know."
			]),
		},
		"subclassfeature7": {
			name: "Truesense",
			minlevel: 7,
			source: ["OG", 162],
			description: desc([
				"I can focus my senses and gain one of three bonuses (see page 3)."
			]),
			action: ["bonus action", ""],
			usages: 1,
			recovery: "short rest",
			toNotesPage: [{
				name: "Truesense",
				popupName: "Truesense",
				source: ["OG", 148],
				additional: "1 x short rest, 10 Minutes",
				page3notes: true,
				note: [
					"I gain one of the following benefits when using \"Truesense\":",
					"\u25C6 Know Truth: Adv. on Wisdom (Insight & Perception) checks, checks to discern or",
					"   disbelieve illusions, and saves vs charmed or frightened.",
					"\u25C6 See Beyond: I can see invisible crea and objects as if they were visible and can see",
					"   into the Ethereal Plane. Ethereal things appear ghostly and translucent.",
					"\u25C6 Steel Resolve: I've adv. on initiative rolls and can’t be surprised.",
					"   I've resistance to psychic dmg, and adv. on Int and Cha saving throws."
				]
			}],	
		},
		"mystic enlightenment": {
			name: "Mystic Enlightenment",
			minlevel: 11,
			source: ["OG", 162],
			description: desc([
				"I learn one spell from any class and can cast it once per long rest for free as a 3rd level spell."
			]),
			spellcastingBonus : [{
				name : "Mystic Enlightenment",
				times : [1],
				level : [1, 3],
				firstCol: "ME"
			}],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName) {
						if (spellObj.firstCol == "ME" && spellObj.level != 3)
						{
							spellObj.description = spellObj.description + " (cast at SL 3)";
							spellObj.firstCol = "oncelr";
							return true;
						}
						else if (spellObj.firstCol == "ME" )
						{
							spellObj.firstCol = "oncelr";
						}
					},
					"I can cast the spell gained through \"Mystic Enlightenment\" at Spell Level 3."
				]
			}			
		},
		"impenetrable defense": {
			name: "Impenetrable Defense",
			minlevel: 15,
			source: ["OG", 162],
			description: desc([
				"When attacked I can react and add my Wis mod to AC until the start of my next turn."
			]),
			action: ["reaction", " (+ Wis Mod AC)"],
			usages: "Prof Bonus x per long rest",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			recovery: "long rest",	
		}
	}
});
var arMayhemPowerBallad = [
	"As a bonus action I can transform a musical instrument I am holding into a musical weapon.",
	"It is a simple weapon dealing 1d6 damage and a spell focus for me. It remains transformed",
	"for 10 Minutes or until I'm incapacitated."
];
AddSubClass("bard", "college of mayhem og", {
	regExpSearch: /college of mayhem/i,
	subname: "College of Mayhem",
	source: ["OG", 143],
	features: {
		"subclassfeature3": {
			name: "Power Ballad",
			minlevel: 3,
			source: ["OG", 143],
			description: desc([
				...arMayhemPowerBallad,
				"Please select the damage type of the Musical Weapon using \"Choose Feature\"."
			]),
			toNotesPage: [{
				name: "Power Ballad",
				popupName: "Power Ballad",
				source: ["OG", 143],
				page3notes: true,
				note: [
					"I can add the following Transformations to my Instrument:",
					"\u25C6 Encore: Once per turn I can attack twice with an attack action",
					"\u25C6 Heavy Metal: It gains the Reach & 2-Handed properties and deals 1d10 dmg",
					"\u25C6 Masterpiece: It gains the Finesse & Thrown(20/60ft) properties,",
					"   +2 to attack rolls and returns to my hand when thrown.",
					"\u25C6 Unison: I gain +1 AC when wielding the weapon and when a crea I see",
					"   attacks a target within 5ft of me I can react to give it disadvantage."
				]
			}],				
			weaponOptions: [{
				baseWeapon: "club",
				regExpSearch: /^(?=.*instrument).*$/i,
				name: "Instrument",
				source: ["OG", 143],
				damage: [1, 6, "Special"],
				abilitytodamage: true,
				selectNow: true,
				description: "",
				isAlwaysProf: true
			}],
			action: [
				["action", "Attack twice with Encore"],
				["bonus action", "Transform Instrument"]
			],
			additional: levels.map(function(n, idx) {
				var properties = [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3][idx];
				return properties + " Properties, 10 Minutes";
			}),
			calcChanges: {
				atkAdd: [
					function(fields, v) {
						if (/instrument/i.test(v.WeaponText)) {
							if (classes.known.bard.level < 5)
								fields.Description = "I can add a Transformation (see page 3 notes) to my Instrument";
							else if (classes.known.bard.level < 11)
								fields.Description = "I can add two Transformations (see page 3 notes) to my Instrument";
							else
								fields.Description = "I can add three Transformations (see page 3 notes) to my Instrument";
							var transformations = [];
							if (/\heavy metal/i.test(v.WeaponText)) transformations.push("Reach, Two-Handed");
							if (/\masterpiece/i.test(v.WeaponText)) {
								transformations.push ("Finesse, returns after throw");
								fields.Range = "Melee, 20/60 ft";
							}
							if (/\encore/i.test(v.WeaponText)) transformations.push("attack twice");
							if (/\unison/i.test(v.WeaponText)) transformations.push("+1 AC, react to disadv. on atk vs oth. crea in 5ft");
							if(transformations.length > 0	)
								fields.Description = transformations.join(", ");
						}
					},
					"I can add Properties to my Instrument (1 before lvl 5, 2 from lvl 5, 3 from lvl 11). Add 'Encore', 'Heavy Metal', 'Masterpiece' and/or 'Unison' to an 'Instrument' to automatically add the properties."
				],
				atkCalc: [
					function(fields, v, output) {
						if (/instrument/i.test(v.WeaponText)) {
							if (/\heavy metal/i.test(v.WeaponText))
								output.die = "1d10";
							if (/\masterpiece/i.test(v.WeaponText))
								output.extraHit = output.extraHit + 2;
						}
					},
					""
				]
			},
			choices: ["Bludgeoning", "Piercing", "Slashing"],
			"bludgeoning": {
				name: "Musical Weapon (Bludgeoning)",
				calcChanges: {
					atkAdd: [
						function(fields, v) {
							if (/\instrument/i.test(v.WeaponText))
							{
								if (classes.known.bard.level > 5)
									fields.Damage_Type = "Bludg/Thdr";
								else
									fields.Damage_Type = "Bludgeoning";
							}
						}
					]
				},
				description: desc(arMayhemPowerBallad),
			},
			"piercing": {
				name: "Musical Weapon (Piercing)",
				calcChanges: {
					atkAdd: [
						function(fields, v) {
							if (/\instrument/i.test(v.WeaponText))
							{
								if (classes.known.bard.level > 5)
									fields.Damage_Type = "Pierc/Thdr";
								else
									fields.Damage_Type = "Piercing";
							}
						}
					]
				},
				description: desc(arMayhemPowerBallad),
			},
			"slashing": {
				name: "Musical Weapon (Slashing)",
				calcChanges: {
					atkAdd: [
						function(fields, v) {
							if (/\instrument/i.test(v.WeaponText))
							{
								if (classes.known.bard.level > 5)
									fields.Damage_Type = "Slash/Thdr";
								else
									fields.Damage_Type = "Slashing";
							}
						}
					]
				},
				description: desc(arMayhemPowerBallad),
			}			
		},
		"exorcists education": {
			name: "Exorcist's Education",
			minlevel: 3,
			source: ["OG", 143],
			spellcastingExtra: [
				"thaumaturgy",
				//SL 1
				"detect evil and good", "wrathful smite",
				//SL 2
				"tasha's mind whip", "spirit shroud",
				//SL 3
				"phantom steed", "spirit shroud",
				//SL 4
				"otiluke's resilient sphere", "shadow of moil",
				//SL 5
				"banishing smite", "dispel evil and good"
			],		
			description: desc([
				"I learn the Thaumaturgy cantrip and a couple of spells are added to bard spell list for me."
			]),
			spellcastingBonus : [{
				name: "Exorcist's Education",
				spells: ["thaumaturgy"],
				selection: ["thaumaturgy"],
				firstCol: "atWill"
			}]
		},		
		"cathartic cacophony": {
			name: "Cathartic Cacophony",
			minlevel: 6,
			source: ["OG", 143],
			description: desc([
				"When I attack with a transformed instrument I can cast Vicious Mockery as bns a.",
				"Even if I don't know the cantrip. Additionally my instrument can deal thunder dmg."
			]),
			spellcastingBonus : [{
				name: "Cathartic Cacophony",
				spells: ["vicious mockery"],
				selection: ["vicious mockery"],
				firstCol: "-"
			}],
			weaponsAdd: {
				select: ["Vicious Mockery"]
			},
			action: [
				["bonus action", "Vicous Mockery (after Instrument attack)"]
			],			
		},
		"bring the whole band": {
			name: "Bring the Whole Band",
			minlevel: 14,
			source: ["OG", 143],
			description: desc([
				"When I give a willing creature a bardic inspiration I can choose one weapon or musical",
				"instrument it is holding to gain one property of my choice from my Power Ballad feature.",
				"If it is an instrument it also becomes a melee weapon the creature is proficient with, and",
				"it deals 1d6 thunder dmg on hit. The effect last until the Bardic Inspiration is lost, the",
				"instrument leaves the creatures hand or I become incapacitated."
			]),
		}
	}
});
AddSubClass("cleric", "pestilence og", {
	regExpSearch: /^(?=.*cleric)(?=.*pestilence).*$/i,
	subname: "Pestilence Domain",
	source: ["OG", 147],
	features: {
		"subclassfeature1": {
			name: "An Itch to Scratch",
			minlevel: 1,
			source: ["OG", 147],
			description: desc([
				"I learn the infestation cantrip. It is a cleric spell for me, and doesn’t count against my",
				"number of cleric cantrips known. When I cast the spell, it can target two creatures within",
				"range and within 5 feet of each other."
			]),
			spellcastingExtra: [
				//Cantrip
				"infestation",
				//SL 1
				"false life", "ray of sickness",
				//SL 2
				"blur", "ray of enfeeblement",
				//SL 3
				"gaseous form", "stinking cloud",
				//SL 4
				"blight", "hallucinatory terrain",
				//SL 5
				"contagion", "cloudkill"
			],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName) {
						if (spellKey === "infestation" && spName === "cleric") {
							spellObj.descriptionCantripDie = "1-2 crea (within 5ft of each other) save or `CD`d6 Poison dmg and moved 5 ft in random direction";
							return true;
						}
					},
					"I can target two creatures within 5ft with Infestation."
				],
				atkAdd: [
					function(fields, v) {
						if (v.WeaponName == "infestation") {
							fields.Description = "1-2 crea (within 5ft of each other), Con save, success - no damage, fail - targets also moved 5 ft in random direction";
							return true;
						}
					},
					"I can target two creatures within 5ft with Infestation"
				]
			},
		},
		"faithfuls inoculation": {
			name: "Faithful's Inoculation",
			minlevel: 1,
			source: ["OG", 147],
			description: desc([
				"I can touch a willing crea as a bns a and remove one disease or neutralize one poison."
			]),
			action: ["bonus action", ""],
			usages: "Wis Mod x per long rest",
			usagescalc: "event.value = What('Wis Mod');",
			recovery: "long rest",
		},
		"channel divinity tide of affliction": {
			name: "Channel Divinity: Tide of Affliction",
			minlevel: 2,
			source: ["OG", 147],
			description: desc([
				"I can use my Channel Divinity to emit a wave of affliction. I pick a number of creatures not",
				"immune to disease up to my Wis Mod (min 1). If my targets fail a con save they take poison",
				"damage equal to my cleric level and are poisoned for 1 minute. They can repeat their save at",
				"the end of their turn and end the effect on success."
			]),
			action: ["action", ""]
		},
		"withering affliction": {
			name: "Withering Affliction",
			minlevel: 6,
			source: ["OG", 147],
			description: desc([
				"Poison damage dealt by my cleric spells and Tide of Affliction ignores resistance."
			])
		},
		"potent spellcasting": {
			name: "Potent Spellcasting",
			minlevel: 8,
			source: ["OG", 147],
			description: desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
			calcChanges: GenericClassFeatures["potent spellcasting"].calcChanges
		},
		"subclassfeature17": {
			//generic feature name so that the entry on the notes page has the correct header
			name: "Befoulment",
			minlevel: 17,
			source: ["OG", 147],
			description: desc([
				"As an action I touch a creature and befoul it, or befoul up to 24 cu ft of food or drink.",
				"The target creature (or any creature who consumed the befouled drink or food within a",
				"number of hours equal to my cleric level) must succeed a Con save or be infected.",
				"My befoulment can infect a number of creatures equal to five times my cleric level",
				"When I use this feature I choose one befoulments (see book or the notes page).",
				"My befoulment is only curable by greater restoration spell or a paladin’s Lay on Hands ability.",
				"When an infected creature saves against or is otherwise cured of one of my diseases, they",
				"become immune to it for one year. Additionally, when a creature fails a Constitution saving",
				"throw against one of my domain spells or my Tide of Affliction, I can apply a Befoulment",
				"upon them as a bonus action. The disease’s symptoms manifest immediately."
			]),
			usages: "Wis Mod x ",
			toNotesPage: [{
				name: "Befoulments",
				popupName: "Befoulments Table",
				source: ["OG", 148],
				additional: "max infected: cleric level x 5",
				note: [
					"\u25C6 Tell-Tale Cough. After 1d12 hours, infected creatures begin to cough and become exhausted. Resting with the nagging cough is impossible. The next day and each day after, infected creatures repeat their saving throw or take an additional level of exhaustion. If they succeed, they lose one level of exhaustion, and end their infection if their exhaustion level reaches zero. If they succeed in this manner, they are immune to my Tell-Tale cough for one year. Coughing creatures can infect other breathing creatures within 10 feet, who must succeed a Constitution saving throw or become infected.",
					"\u25C6 Fleshrot. After 3d12 hours, the extremities of an infected creature’s body such as their toes, fingers or ears begin to harden and turn a waxy-looking green, yellow, purple, or black. Creatures repeat their saving throw at the start of each day, and on a failure, their movement speed is reduced by 5 feet. If they fail, they take necrotic damage equal to my cleric level one random extremity, and the disease spreads closer to their heart and organs. The disease can be cured by amputation. If the creature’s speed becomes 0, they die. Creatures that come into direct contact with the infected flesh must succeed a Constitution saving throw or contract the disease.",
					"\u25C6 Maddening Fever. After 2d12 hours, an infected creature descends into a feverish delirium, making all Wisdom (Insight, Perception) checks with disadvantage. They repeat their saving throw the following day. If they fail, they are also under the effects of the confusion spell, and their maximum hit point total is reduced by half my cleric level for each day they have had the disease. If their maximum hit point total reaches 0, they die. If they succeed, the fever begins to subside, and they regain their faculties after 24 hours.",
					"\u25C6 Weeping Sores. After 4d12 hours, boils and pustules rise to the surface of the infected creature’s skin, eventually exploding in a shower of blood and pus, dealing poison damage equal to my cleric level to the infected creature. Creatures can repeat their saving throw each day, but do so at disadvantage unless bound in clean bandages. Otherwise, the creature’s sores rise again and burst again, dealing an additional 1d6 slashing damage for each day since they contracted the disease. A creature whose skin comes into contact with an infected creature’s bodily fluids must succeed a Constitution saving throw or become infected."
				]
			}],			
			action: [
				["action", ""],
				["bonus action", "(after target Con Save fail)"]
			],
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "long rest"
		}
	}
});
AddSubClass("rogue", "gatecrasher og", {
	regExpSearch: /gatecrasher/i,
	subname: "Gatecrasher",
	fullname: "Gatecrasher",
	source: ["OG", 163],
	abilitySave: 4,
	spellcastingFactor: 3,
	spellcastingList: {
		class: "sorcerer",
		school: ["Conj", "Div", "Trans"],
		level: [0, 4]
	},
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells: [0, 0, 3, 4, 4, 4, 5, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10]
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			minlevel: 3,
			source: ["OG", 163],
			description: desc([
				"I can cast known sorcerer cantrips/spells picked from the conjuration, divination, or",
				"transmutation schools, using Intelligence as my spellcasting ability. I start with 3 known",
				"spells at level 3 and learn more as I level up. Each time I gain a level I can also replace",
				"one spell. The spells learned at level 8, 14 and 20 can be from any school of magic.",
				"At 3rd level I learn the Mage Hand cantrip and two more from the sorcerer spell list.",
				"At level 10 I learn another sorcerer cantrip of my choice."
			]),
			additional: levels.map(function(n, idx) {
				var cantr = [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3][idx];
				var splls = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13][idx];
				return cantr + " cantrips \u0026 " + splls + " spells known";
			}),
			spellcastingBonus : [{
				name: "Magehand",
				spells: ["mage hand"],
				selection: ["mage hand"]
			}, {
				name : "Any school",
				class : "sorcerer",
				times : [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3],
				level : [1, 4]
			}]
		},
		"quicktunnel": {
			name: "Quicktunnel",
			minlevel: 3,
			source: ["OG", 164],
			description: desc([
				"I can quicktunnel after Disengaging or as a reaction when falling or taking damage. I",
				"teleport to an unoccupied space in 30ft I can see. Once I learn Uncanny Dodge I can",
				"quicktunnel as part of that reaction. Once I learn Evasion I can quicktunnel if I succeed a",
				"Dex save. I also learn the Detect Good and Evil spell and sense Extraplanar Portals with it."
			]),
			usages: "",
			usagescalc: "event.value = classes.known.rogue.level < 5 ? 2 : classes.known.rogue.level < 11 ? 3 : classes.known.rogue.level < 17 ? 4 : 5",
			action: ["bonus action", "Disengage & Quicktunnel"],
			recovery: "short rest",
			additional: [
				"", "",
				"2 times, 30ft", "2 times, 30ft",
				"3 times, 35ft", "3 times, 35ft", "3 times, 35ft", "3 times, 35ft", "3 times, 35ft", "3 times, 35ft",
				"4 times, 40ft", "4 times, 40ft", "4 times, 40ft", "4 times, 40ft", "4 times, 40ft", "4 times, 40ft",
				"5 times, 45ft", "5 times, 45ft", "5 times, 45ft", "5 times, 45ft",
			],
			spellcastingBonus: [{
				name: "Quicktunnel",
				spells: ["detect evil and good"],
				selection: ["detect evil and good"]
			}],
			calcChanges: {
				spellAdd: [
					function(spellKey, spellObj, spName) {
						if (spellKey === "detect evil and good" && spName === "rogue") {
							spellObj.description = "Know if aberr., celest., elem., fey, fiend, und., des-/consecrated area, and extrapl. portal within 30 ft";
							return true;
						}
					},
					"I also know the presence of extraplanar portals when I cast detect evil and good."
				]
			},
		},
		"uncanny dodge" : {
			name : "Uncanny Dodge",
			source : [["SRD", 40], ["P", 96]],
			minlevel : 5,
			description : desc("As a reaction, I can halve the damage of an attack from an attacker that I can see"),
			action : [
				["reaction", ""],
				["reaction", "Uncanny Dodge & Quicktunnel"]
			]
		},
		"evasion" : {
			name : "Evasion",
			source : [["SRD", 40], ["P", 96]],
			minlevel : 7,
			description : desc("My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"),
			savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] },
			action: ["reaction", "Quicktunnel after Evasion success"]
		},		
		"interplanar knack": {
			name: "Interplanar Knack",
			minlevel: 9,
			source: ["OG", 164],
			description: desc([
				"I can see through opaque portals. The time it takes me to learn a new language is halved",
				"and I can communicate simple ideas with any creature that speaks at least one language."
			])
		},
		"oblique ambush": {
			name: "Oblique Ambush",
			minlevel: 13,
			source: ["OG", 164],
			description: desc([
				"After I quicktunnel I create sensory distractions and have advantage on the first weapon",
				"attack on any crea. in 30ft of my arrival point until the start of my next turn."
			]),
		},
		"quicktunnel stabilization": {
			name: "Quicktunnel Stabilization",
			minlevel: 17,
			source: ["OG", 164],
			description: desc([
				"I can bring one medium or smaller creat. along when I quicktunnel. Cha save if unwilling."
			]),
			additional: "Save DC: 8 + Int mod + Prof bonus"
		}
	}
});
