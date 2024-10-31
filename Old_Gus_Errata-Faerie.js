/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the Faerie Class from Old Gus's Errata https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link
	Code by:	xika
	Date:		2024-10-31 (sheet v13)
	
	Changelog:
	2024-10-31	Initial Release
	
	Todo:
	- Brownie, Wanton Assault, additional: update on Cha change
	- Sprig, add Shambling Mound as Wildshape
*/

var iFileName = "Old_Gus_Errata-Faerie.js";

RequiredSheetVersion("13.2.0");

SourceList.OG = {
    name : "Old Gus' Errata - Wanderer of Infinite Skies",
    abbreviation : "OG",
    abbreviationSpellsheet : "OG",
    group : "Old Gus Errata",
	url: "https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link",
    date : "2024/10/23"
};

ClassList["faerie og"] = {
	name: "Faerie",
	regExpSearch : /^(?=.*faerie).*$/i,
	source: ["OG", 188],
	primaryAbility: "Charisma",
	prereqs: "Charisma 13",
	die: 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Dex", "Cha"],
	skills : ["\n\n" + toUni("MyClass") + ": Choose two from Athletics, Acrobatics, Animal Handling, Deception, Intimidation, Persuasion, Performance and Stealth.", "\n\n" + toUni("MyClass") + ": none"], 
	armorProfs: {
		primary : [false, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, false]
	},
	spellcastingFactor: 1,
	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : [5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]
	},
	spellcastingList : {
		class : "any", 
		spells : ["booming blade", "cursory ward og", "dancing lights", "dulling chains og", "encode thoughts", "frigidigitation og", "gift of the soothsayer og", "green-flame blade", "leeocks lucky coin og", "magic stone", "message", "minor illusion", "nature bolt og", "peal of nine bells og", "prestidigitation", "produce flame", "puff of smoke og", "sacred strike og", "sanguine strike og", "sapping sting", "thaumaturgy", "thunderclap", "whelm og", "word of radiance", "zap og", "alarm", "allergen cloud og", "arcane strike", "catapult", "ceremony", "chaos bolt", "charm person", "cheetah sprint og", "color spray", "cure wounds", "detect magic", "drunkards breath og", "dust dash og", "ensnaring strike", "faerie fire", "find familiar", "frost fingers", "gift of alacrity", "goodberry", "hail of thorns", "healing word", "illusory script", "jump", "lightning lure", "londyns duet og", "mass distortion og", "read blood og", "reorient og", "shield", "silent image", "silvery barbs", "sleep", "snakestaff og", "snare", "speak with animals", "stumble og", "sylvan vision og", "water whip og", "witch bolt", "wood rot og", "zephyr strike", "alter self", "animal messenger", "arcane lock", "beast sense", "blade of resonance og", "borrowed knowledge", "celerity og", "darkness", "discordant thrum og", "diterlizzis dymaxion og", "doublespeak og", "enhance ability", "enlarge/reduce", "enthrall", "fallow og", "flourishing beanstalk og", "glamoured majesty og", "healing spirit", "heat metal", "hold person", "immovable object", "invisibility", "jinx og", "kinetic jaunt", "locate animals or plants", "londyns duet og", "magic mouth", "magic weapon", "mirror image", "misty step", "moon blade og", "moonbeam", "nathair's mischief ", "nystul's magic aura", "pass without trace", "plaguemask og", "polandaras petticoat pocket og", "seeking og", "silence", "solid fog og", "soul whip og", "spiritual weapon", "suggestion", "summon beast", "tasha's mind whip", "time parasite og", "tree steed og", "vortex warp", "web", "wither and bloom", "wristpocket", "alter fortune og", "antipathetic field og", "arcane razor og", "avyies temporal trickery og", "bestow curse", "blink", "catnap", "counterspell", "create campsite og", "dazzling strobe og", "dodge-weave og", "euphoric cloud og", "fly", "healing wave og", "hirsutism og", "invisible trickery og", "lightning arrow", "lipstitch og", "magic circle", "major image", "melfs unicorn arrow og", "minor glamour og", "misty slash og", "mushroom ring og", "nondetection", "pall of twilight og", "perplex og", "protection from energy", "radiant glamour og", "remove curse", "reverse projectiles og", "sending", "shape wood og", "slow", "speak with plants", "spirit guardians", "spirit shroud", "summon fey", "summon shadowspawn", "telepathy tap og", "toxic tongue og", "treasure scent og", "wild flight og", "age plant og", "blinding glitter og", "charm monster", "compulsion", "confusion", "drunken revelry og", "fabricate", "fools speech og", "freedom of movement", "giant insect", "greater invisibility", "grounding og", "insect plague", "lifebloom og", "major glamour og", "polymorph", "quentins quickling senses og", "sensory deprivation og", "sneezing dust og", "switcheroo og", "tail sweep og", "thorn spray og", "vacancy og", "wild runner og", "animate objects", "awaken", "awaken object og", "conduit og", "contact other plane", "contagion", "control winds", "dream", "far step", "geas", "glamourous craft og", "greater restoration", "hold monster", "mirror stride og", "mislead", "modify memory", "othertime og", "passwall", "power word silence og", "probability warp og", "rary's telepathic bond", "seeming", "skill empowerment", "synaptic static", "tree stride", "twisting innards og", "wind at our backs og", "zone of self immolation og", "anterograde amnesia og", "budding romance og", "conjure fey", "contingency", "drawmij's instant summons", "fizban's platinum shield", "forbiddance", "immaculate conception og", "investiture of starlight og", "mass suggestion", "mental prison", "otto's irresistible dance", "programmed illusion", "sunbeam", "tasha's otherworldly guise", "true seeing", "unconscious command og", "body swap og", "crown of stars", "dream of the blue veil", "humanoid possession og", "lunar occult og", "magic miasma og", "mirage arcane", "power word pain", "prismatic spray", "project image", "rejuvenate og", "sequester", "simulacrum", "solipsism og", "tether essence", "animal shapes", "antipathy/sympathy", "feeblemind", "glibness", "maddening darkness", "maze", "mind blank", "power word stun", "mass polymorph", "power word heal", "prismatic wall", "shapechange", "true polymorph", "unbinding og", "weird", "wish"]
	},	
	equipment : "MyClass starting equipment:\n \u2022 any simple weapon;\n \u2022 a spellcasting focus;\n \u2022 an entertainer’s pack;\n \u2022 a trinket.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses: ["Faerie Affinities", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 6,
	features: {
		"faerie affinity" : {
			name : "Faerie Affinity",
			source : ["OG", 190],
			minlevel : 1,
			description : desc([
					'My creature type is Fey in addition to the creature type determined by my race.',
				])
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["OG", 188],
			minlevel : 1,
			description : desc([
				"I can cast prepared faerie cantrips/spells, using Charisma as my spellcasting ability",
				"I can use an druidic focus or a musical instrument I'm proficient with as focus",
				"I can cast all faerie spells in my spellbook as rituals if they have the ritual tag"
			]),
			additional : levels.map(function (n, idx) {
				var cantr = [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][idx];
				var splls = [5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18][idx];
				return cantr + " cantrips \u0026 " + splls + " spells known";
			})			
		},
		"glamorous defense og" : {
			name : "Glamorous Defense",
			source : ["OG", 190],
			minlevel : 1,
			description : desc([
					"While not wearing armor or holding a shield, my AC equals 10 + Dex mod + my Cha mod."
				]),
			armorOptions : [{
				regExpSearch : /^(?=.*(glamorous))(?=.*(defense)).*$/i,
				name : "Glamorous Defense (Cha)",
				source : ["OG", 190],
				ac : "10+Cha",
				affectsWildShape : true,
				selectNow : true
			}]
		},		
		"faerie dust og" : {
			name : "Faerie Dust",
			source : ["OG", 190],
			minlevel : 1,
			description : desc([
					"My body produces glowing dust, visible to detect magic, providing spellcasting components.",
					"As bonus action, I can splash onto myself or a crea in 5 ft. Target heals for 1d6 + faerie level",
					"HP, or immed. saves vs poison, disease, enchantm. adding my spell attribute mod as bonus."
				]),
			usages: "Profiency bonus per ",
			usagescalc: "event.value = Number(How('Proficiency Bonus'));",
			recovery : "long rest",
			action : [["bonus action", "Faerie Dust"]]
		},
		"misty escape og" : {
			name : "Misty Escape",
			source : ["OG", 191],
			minlevel : 2,
			description : desc([
					"When I take dmg, I can become invisible as reaction and teleport up to 30ft. I remain",
					"invisible until the end of my next turn or until I cast a spell or attack."
				]),
			usages: 1,
			recovery : "short rest",
			action : [["reaction", "Misty Escape"]]
		},
		"dreamchaser og" : {
			name : "Dreamchaser",
			source : ["OG", 191],
			minlevel : 18,
			description : desc([
					"I can craft a Dreamstone (1 min) & gift to crea. If I craft 2nd the 1st crumbles to dust.",
					"Under an open sky I can cast dream w/o spell slot. If target has my Dreamstone it can",
					"transcend planes. The Stone will record a message and transmit it once they are asleep."
				]),
			usages: 1,
			recovery : "long rest",
			action : [["action", "Dreamchaser"]],
			spellChanges: {
				"dream": {
					description: "Under open sky I enter creatures dream and we can talk; if it has my Dreamstone see 'Dreamchaser'",
					changes: "Under open sky I can cast dream without a spell slot. If target is bearer of my dreamstone the spell can transcend planes. Dreamstone will record message and transmit once they are asleep."
				}
			},	
			spellcastingBonus: [{
				name: "Dreamchaser",
				spells: ["dream"],
				selection: ["dream"],
				firstCol: "oncelr"
			}],	
		},
		"extraplanar glamour og" : {
			name : "Extraplanar Glamour",
			source : ["OG", 191],
			minlevel : 20,
			description : desc([
					"My Charisma increases by 4, to a max of 24 and become attuned one of the inner planes.",
					"Use the \"Choose Feature\" button above to pick a Plane."
				]),
			scores : [0,0,0,0,0,4],
			scoresMaximum : [0,0,0,0,0,24],
			extraname: "Glamour Plane",
			choices: ["Feywild Access", "Astral Access", "Ethereal Access"],
			"feywild access": {
				name: "Extraplanar Glamour: Feywild Access",
				source: ["OG", 191],
				description: desc([
						"My Charisma increases by 4, to a max of 24 and become attuned one of the inner planes.",
						"If I am under the light of a full moon, I can cast the gate spell to access the Feywild or",
						"Material Plane without expending a spell slot, and without providing material components."
					]),
				spellChanges: {
					"gate": {
						description: "Under light of full moon create a portal to Material Plane or Feywild; can transport named crea to me.",
						components: "V,S,M",
						compMaterial: "",
						changes: "If I am under the light of a full moon, I can cast the gate spell to access the Feywild or Material Plane without expending a spell slot, and without providing material components for the spell. I regain use of this ability when I finish a long rest."
					}
				},	
				spellcastingBonus: [{
					name: "Extraplanar Glamour",
					spells: ["gate"],
					selection: ["gate"],
					firstCol: "oncelr"
				}],				
			},
			"astral access": {
				name: "Extraplanar Glamour: Astral Access",
				source: ["OG", 191],
				description: desc([
						"My Charisma increases by 4, to a max of 24 and become attuned one of the inner planes.",
						"I can cast the astral projection spell once without expending a spell slot, using a single quartz",
						"crystal as the material component for the spell. When I cast the spell, I can only bring a",
						"number of additional creatures equal to my Charisma modifier."
					]),
				spellChanges: {
					"astral projection": {
						description: "Me + my spell mod willing crea projected to Astral Plane with identical statistics.",
						components: "V,S,M",
						compMaterial: "One quartz crystal.",
						changes: "I can cast the astral projection spell once without expending a spell slot, using a single quartz crystal as the material component for the spell. When I cast the spell, I can only bring a number of additional creatures equal to my Charisma modifier. I regain use of this ability when I finish a long rest."
					}
				},	
				spellcastingBonus: [{
					name: "Extraplanar Glamour",
					spells: ["astral projection"],
					selection: ["astral projection"],
					firstCol: "oncelr"
				}],	
			},
			"ethereal access": {
				name: "Extraplanar Glamour: Ethereal Access",
				source: ["OG", 191],
				description: desc([
						"My Charisma increases by 4, to a max of 24 and become attuned one of the inner planes.",
						"I can cast the etherealness spell once without expending a spell slot. I can bring an additional",
						"number of willing creatures that I can see within 30 feet of I equal to my Charisma modifier."
					]),
				spellChanges: {
					"etherealness": {
						description: "Me and my spell mod willing go to Ethereal Plane; still able to perceive 60 ft into normal plane",
						changes: "I can cast the etherealness spell once without expending a spell slot, and regain the ability to do so when I finish a long rest. When I cast the spell, I can bring an additional number of willing creatures that I can see within 30 feet of I equal to my Charisma modifier."
					}
				},					
				spellcastingBonus: [{
					name: "Extraplanar Glamour",
					spells: ["etherealness"],
					selection: ["etherealness"],
					firstCol: "oncelr"
				}],	
			},
		},		
	}
};

AddSubClass("faerie og", "sidhe", {
        regExpSearch: /^(?=.*(sidhe)).*$/i,
        subname: "Sidhe",
        source: [ "OG", 192],
        features: {
            "subclassfeature1": {
                name: "Fluid Magics",
                source: ["OG", 192],
                minlevel: 1,
                description: desc([
					"I gain proficiency with the Insight skill and know the gust and shape water cantrips.",
					"I learn additional spells, which do not count towards the number of spells I can know."
				]),
                skills: "Insight",
				spellcastingExtra: ["gust", "shape water", "create or destroy water", "fog cloud", "gust of wind", "warding wind", "slow", "wind wall", "storm sphere", "wall of water", "wind walk", "whirlwind", "control weather", "storm of vengeance"],
				spellcastingExtraApplyNonconform: true,				
            },
			"heroic glamour": {
				name: "Heroic Glamour",
				source: ["OG", 192],
				minlevel: 2,
				description: desc([
						"As a bonus action, I entwine my essen with an ally in 30ft. Until my next turn their",
						"AC, all saves, damage rolls +my charisma mod. They have ress to all dmg and I take",
						"half the amount they take as psychic dmg. Ends if they move over 30ft away."
					]),
				usages : levels.map(
					function(n) {
						return n < 2 ? 0 : n < 3 ? 2 : n < 6 ? 4 : n < 12 ? 4 : n < 17 ? 5 : 6;
					}),
				additional: levels.map(
					function(n) {
						return (n < 2 ? 0 : n < 6 ? 30 : n < 12 ? 35 : n < 17 ? 40 : 45) + "ft";
					}),
				recovery: "short rest",
				action: ["bonus action", "Heroic Glamour"]
			},
			"flowing favors": {
				name: "Flowing Favors",
				source: ["OG", 192],
				minlevel: 6,
				description: desc([
						"I learn mage hand cantrip and it's invisible. When a crea I can see makes atk roll, check or",
						"save I can apply my charisma mod as a bonus or penalty to the roll before results are known."
					]),
				usages: 1,
				recovery: "short rest",
				action: ["reaction","Flowing Favors"],
				spellChanges: {
					"mage hand": {
						description: "Create invisible hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple instances",
						changes: "Mage Hand is invisible for me."
					}
				},
				spellcastingBonus: [{
					name: "Flowing Favors",
					spells: ["mage hand"],
					selection: ["mage hand"],
					firstCol: "atwill"
				}],					
			},
			"glamourous incorporation": {
				name: "Glamourous Incorporation",
				source: ["OG", 192],
				minlevel: 10,
				description: desc([
						"If I or the target of my Heroic Glamour are the sole target of a spell <= 5th level I react to",
						"make a Cha save instead. If I succeed I regain a spell slot up to the spells level."
					]),
				usages: 1,
				recovery: "long rest",
				action: ["reaction", "Glamourous Incorporation"]
			},
			"thundering heroism": {
				name: "Thundering Heroism",
				source: ["OG", 192],
				minlevel: 14,
				description: desc([
						"The recipient of my Heroic Glamour adds half my faerie level to dmg rolls as thunder dmg."
					])
			},			
		}
});

var tricksyCantripDesc = "\n   	I empower 1 faerie cantrip that targets 1 crea. The cantrip can target 1 extra crea within\n   	range & also within 30ft of 1st target. If it needs an atk roll I need a separate roll for 2nd.";

AddSubClass("faerie og", "nixie", {
        regExpSearch: /^(?=.*(nixie)).*$/i,
        subname: "Nixie",
        source: [ "OG", 193],
        features: {
            "subclassfeature1": {
                name: "Cunnnig Magics",
                source: ["OG", 193],
                minlevel: 1,
                description: desc([
					"I gain proficiency with the Arcana skill and know the Vicious Mockery and Infestation cantrips.",
					"I learn additional spells, which do not count towards the number of spells I can know."
				]),
                skills: "Arcana",
				spellcastingExtra: ["vicious mockery","infestation","command","dissonant whispers","crown of madness","phantasmal force","fear","hypnotic pattern","phantasmal killer","dominate person","eyebite","reverse gravity","dominate monster","psychic scream"],
				spellcastingExtraApplyNonconform: true,	
            },
			"nightmarish delirium": {
				name: "Nightmarish Delirium",
				source: ["OG", 194],
				minlevel: 2,
				description: desc([
						"I can plunge a creature charmed, frightened, or put to sleep by me into a delirious nightmare.",
						"(See explanation on the Notes Page.)"
					]),
				usages: 1,
				recovery: "long rest",
				action: ["bonus action", "Nightmarish Delirium"],
				toNotesPage : [{
					name: "Nightmarish Delirium",
					note: [
						"I can plunge a creature charmed or frightened of me, or that I have put to sleep into a delirious nightmare.",
						"As a bonus action, I concentrate (as if concentrating on the spell, if you are not already) and double the remaining duration of the effect upon the creature, which becomes lost in a nightmare of my design. The creature sees and hears only itself and the nightmare, experiencing up to one hour’s passing on each of their turns. At the end each of my turns, I can alter the nightmare, causing the creature to be charmed by me, frightened of me, unconscious or confused.",
						"If the target takes damage, they immediately make a Wisdom saving throw against my faerie spell save DC, ending the effect on a success. Once the effect ends, the creature becomes immune to my Nightmarish Delirium for 24 hours.\n",
						"Confusion",
						"A confused creature can’t take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.",
						"d10    Behavior",
						"1-2    The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn’t take an action this turn.",
						"2-6    The creature doesn’t move or take Actions this turn.",
						"7-8    The creature uses its action to make a melee Attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.",
						"9-10  The creature can act and move normally."
					],
					popupName: "Nightmarish Delirium",
					source : ["OG", 194]
				}],				
			},
			"supple wards": {
				name: "Supple Ward",
				source: ["OG", 192],
				minlevel: 6,
				description: desc([
					   "When rng spell atk (or mag. missile) <= lvl 5 targtes crea in 30 feet, I can react and expend an",
					   "equivalent spell slot to make opposed spellcasting check vs. the caster. If I win, the spell hits",
					   "the caster instead."
					]),
				usages: 1,
				recovery: "short rest",
				action: ["reaction","Supple Ward"]
			},
			"tricksy cantrip": {
				name: "Tricksy Cantrip",
				source: ["OG", 192],
				minlevel: 10,
				description: desc([
						"I empower 1 faerie cantrip that targets a 1 crea. The cantrip can target one extra crea within",
						"range & also within 30ft of 1st target. If it needs an atk roll I need a separate roll for 2nd.",
						"Use the \"Choose Feature\" button above to select a known cantrip."
					]),
				choices: ["Cursory Ward", "Leeocks Lucky Coin", "Message", "Nature Bolt", "Peal Of Nine Bells", "Sanguine Strike", "Sapping Sting", "Whelm", "Zap", "Lightning Lure"],
				"cursory ward": {
					name: "Tricksy Cantrip: Cursory Ward",
					source: ["OG", 233],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("cursory ward og", true); },
					spellChanges: {
						"cursory ward og": {
							descriptionCantripDie: "I & 1 crea in 30 ft gain `CD`d4 + my spell mod temp hp until end of next turn",
							changes: tricksyCantripDesc
						}
					}
				},
				"leeocks lucky coin": {
					source: ["OG", 254],
					name: "Tricksy Cantrip: Leeock's Lucky Coin",
					description: tricksyCantripDesc + "\nChosen Cantrip: Leeock's Lucky Coin.",
					prereqeval : function() { return isSpellUsed("leeocks lucky coin og", true); },
					spellChanges: {
						"leeocks lucky coin og": {
							descriptionCantripDie: "rng spell attack for `CD`D6+spell mod bludg dmg; 2nd target 30 ft of 1st; ignore 1/2 cover; 3/4 = 1/2 cover",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "leeocks lucky coin og") fields.Description = "1 crea (+2nd in 30ft of 1st, separate roll); Ignore 1/2 cover; Treat 3/4 cover as 1/2 cover.";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Leeock's Lucky Coin"] }
				},
				"lightning lure": {
					source: ["T", 107],
					name: "Tricksy Cantrip: Lightning Lure",
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("lightning lure", true); },
					spellChanges: {
						"lightning lure": {
							descriptionCantripDie: "1 crea (+2nd in 30ft of 1st) save or pull 10 ft to me; if it ends in 5 ft, ´CD´d8 Lightning dmg",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "lightning lure") fields.Description = "1 crea (+2nd in 30ft of 1st) str save; fail: pull 10 ft closer to me & take damage if end within 5 ft of me";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Lightning Lure"] }
				},
				"message": {
					name: "Tricksy Cantrip: Message",
					source: ["P", 259],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("message", true); },
					spellChanges: {
						"message": {
							description:"1 crea (+2nd in 30ft of 1st) hears whispered message & can reply with a whisper; none can overhear",
							changes: tricksyCantripDesc
						}
					}
				},
				"nature bolt": {
					name: "Tricksy Cantrip: Nature Bolt",
					source: ["OG", 263],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("nature bolt og", true); },
					spellChanges: {
						"nature bolt og": {
							descriptionCantripDie: "rng spell atk crea (+2nd in 30ft of 1st) `CD`d8; see B for dmg type (depends on terrain)",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "nature bolt og") fields.Description = "Separate roll for 2nd target in 30ft of 1st; damage type depends on terrain; see Book.";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Nature Bolt"] }
				},
				"peal of nine bells": {
					name: "Tricksy Cantrip: Peal of Nine Bells",
					source: ["OG", 265],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("peal of nine bells og", true); },
					spellChanges: {
						"peal of nine bells og": {
							descriptionCantripDie: "1 crea (+2nd in 30ft of 1st) on save fail: `CD`D6 thunder dmg and 10ft pushed away",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "peal of nine bells og") fields.Description = "One crea (+2nd in 30ft of 1st) Str Save, Fail: damage & pushed 10ft away in straight line";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Peal of Nine Bells"] }
				},
				"sanguine strike": {
					name: "Tricksy Cantrip: Sanguine Strike",
					source: ["OG", 269],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("sanguine strike og", true); },
					spellChanges: {
						"sanguine strike og": {
							description: "touched creature (+2nd in 30ft of 1st) gains advantage for next attack roll",
							changes: tricksyCantripDesc
						}
					},
				},
				"sapping sting": {
					name: "Tricksy Cantrip: Sapping Sting",
					source: ["W", 189],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("sapping sting", true); },
					spellChanges: {
						"sapping sting": {
							description: "1 crea (+2nd in 30ft) save or 1d4 Necrotic dmg and fall prone; +1d4 at CL 5, 11, and 17",
							descriptionCantripDie: "1 crea (+2nd in 30ft) save or `CD`d4 Necrotic dmg and fall prone",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "sapping sting") fields.Description = "1 crea (+2nd in 30ft) , Con save, success - no damage, fail - also fall prone";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Sapping Sting"] }					
				},
				"whelm": {
					name: "Tricksy Cantrip: Whelm",
					source: ["OG", 280],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("whelm og", true); },
					spellChanges: {
						"whelm og": {
							descriptionCantripDie: "creat. (+2nd in 30ft of 1st) save or `CD`d6 psychic damage; if taken to 0 hp unconscious + stable; see B",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "whelm og") fields.Description = "1 crea (+2nd in 30ft of 1st) wis save; fail: dmg; taken to 0: unconscious for 1 min + stable.";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Whelm"] }
				},
				"zap": {
					name: "Tricksy Cantrip: Zap\n",
					source: ["OG", 284],
					description: tricksyCantripDesc,
					prereqeval : function() { return isSpellUsed("zap og", true); },
					spellChanges: {
						"zap og": {
							descriptionCantripDie: "rng spell atk; 1 target (+2nd in 30ft of 1st); random type of `CD`d8 damage; see B",
							changes: tricksyCantripDesc
						}
					},
					calcChanges: {
						atkAdd: [
							function (fields, v) {
								if (v.WeaponName == "zap og") fields.Description = "Roll 1d8; 1:fire, 2:cold, 3:acid, 4:light, 5:thdr, 6: rad, 7: force, 8: psy; see B; 2nd target in 30ft of 1st;";
							},
							tricksyCantripDesc
						]
					},
					weaponsAdd : { select : ["Zap"] }
				}
			},
			"magical mimicry": {
				name: "Magical Mimicry",
				source: ["OG", 192],
				minlevel: 14,
				description: desc([
						"If ally in 30ft casts spell lvl <=5 with a casting time = 1 action or bonus action & no Conc.",
						"I can react and cast the same spell, even if unknown. I can cast at lower SL if req. for the",
						"spell are met. Next turn I cannot cast spells, only cantrips."
					]),
				usages: 1,
				recovery: "long rest",
				action: ["reaction","Magical Mimicry"]
			},			
		}
});

AddSubClass("faerie og", "sprig", {
        regExpSearch: /^(?=.*(sprig)).*$/i,
        subname: "Sprig",
        source: [ "OG", 195],
        features: {
            "subclassfeature1": {
                name: "Floral Fortitude",
                source: ["OG", 195],
                minlevel: 1,
                description: desc([
					"I gain proficiency with the Nature skill and know the Thorn Whip and Druidcraft cantrips.",
					"I learn additional spells, which do not count towards the number of spells I can know.",
					"I gain adv. on poison saves, ress vs. poison and can cast Speak With Plants 1/Longrest."
				]),
                skills: "Nature",
				spellcastingExtra: ["thorn whip","druidcraft","entangle", "ray of sickness", "spike growth", "melf’s acid arrow", "daylight ", "plant growth", "grasping vine", "wrath of nature", "wall of thorns", "regenerate", "sunburst", "mass heal"],
				spellcastingExtraApplyNonconform: true,
				dmgres : "poison",
				savetxt : { adv_vs : "poison" },
				spellcastingBonus: [{
					name: "Floral Fortitude",
					spells: ["speak with plants"],
					selection: ["speak with plants"],
					firstCol: "oncelr"
				}],					
            },
			"corrosive ichor": {
				name: "Corrosive Ichor",
				source: ["OG", 195],
				minlevel: 2,
				description: desc([
						"When I hit w/ Thorn Whip I can deal +2d8+1d8/SL acid dmg as bns spending a spell slot.",
					]),
				action: ["bonus action", "Corrosive Ichor (with Thorn Whip)"],
			},
			"grasping vines": {
				name: "Grasping Vines",
				source: ["OG", 195],
				minlevel: 6,
				description: desc([
					   "I can cast Speak With Plants at will. My Thorn Whip can pull up to 15ft and has 45ft range.",
					   "As bns I can move the area of my entangle, spike growth or grasping vine my cha mod ft."
					]),
				action: ["bonus action","Grasping Vines"],
				calcChanges : {
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if(spellKey === "speak with plants") {
								spellObj.firstCol = "atwill";
							}
						},
						"I can cast Speak With Plants at will."
					],
					atkAdd: [
						function (fields, v) {
							if (v.WeaponName == "thorn whip") 
							{
								fields.Range = "Melee, 45 ft";
								fields.Description = "Melee spell attack, pull target up to 15 ft closer";
							}
						},
						"My Thorn Whip can pull up to 15ft and has 45ft range."
					]					
				},
				spellChanges: {
					"thorn whip": {
						description: "Melee spell atk for 1d6 Piercing dmg and pull crea up to 15 ft towards me; +1d6 at CL 5, 11, and 17",
						descriptionCantripDie: "Melee spell attack for `CD`d6 Piercing dmg and pull crea up to 15 ft towards me",
						range: "45 ft",
						changes: "My Thorn Whip can pull up to 15ft and has 45ft range."
					}
				},
				weaponsAdd : { select : ["Thorn Whip"] }
			},
			"natural raiment": {
				name: "Natural Raiment",
				source: ["OG", 195],
				minlevel: 10,
				description: desc([
					"I can assume the form of a shambling mound for half my faerie level in hours with HP = 50 +",
					"fearie level. In this form I can only cast Thorn Whip and other Sprig spells. I retain my Int, Wis,",
					"Cha and my skill and save profiencies. If reduced to 0 HP I take the remainder of the dmg.",
					"I can release the forme anytime, no action."
					]),
				action: ["action", "Natural Raiment"],
				usages: 1,
				recovery : "long rest",
			},
			"we are the vine": {
				name: "We are the Vine",
				source: ["OG", 195],
				minlevel: 14,
				description: desc([
						"Plants I created or charmed can be origin for my Thorn Whip, it gets + my cha mod acid",
						"dmg and I can use it to pull friendly crea 15ft with no dmg or attack roll."
					]),
				spellChanges: {
					"thorn whip": {
						description: "Melee spell atk for 1d6 Piercing dmg and pull crea up to 15 ft towards me; +1d6 at CL 5, 11, and 17",
						descriptionCantripDie: "Melee spell atk,`CD`d6 pierc + my spell mod acid dmg, pull crea max 15ft closer, can pull friend (no atk/dmg)",
						changes: "Plants I created or charmed can be origin for my Thorn Whip, it gets + my cha mod acid dmg and I can use it to pull friendly crea 15ft with no dmg or attack roll."
					}
				},
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.WeaponName == "thorn whip") 
							{
								fields.Description = "Melee spell atk, +" + What('Cha Mod') + " acid damage, pull target max 15ft closer, can pull friend (no dmg/atk)";
							}
						},
						"Plants I created or charmed can be origin for my Thorn Whip, it gets + my cha mod acid dmg and I can use it to pull friendly crea 15ft with no dmg or attack roll."
					]
				},
			},			
		}
});

var arFaerieWeapon = ["My fists, teeth, nails, or a simple melee weapon become a magical d4 faerie weapon. I can",
				"attack twice if I take the Attack Action with it. My speed increases by 5 feet, I have a climbing",
				"speed of at least 20 feet. I lose any flying speed. I gain 1 hit point per level."];

AddSubClass("faerie og", "brownie", {
	regExpSearch: /^(?=.*(brownie)).*$/i,
	subname: "Brownie",
	source: [ "OG", 196],
	features: {
		"subclassfeature1": {
			name: "Grugach Magic",
			source: ["OG", 196],
			minlevel: 1,
			description: desc([
				"I gain proficiency with the Survival skill, Light Armor and know the Mold Earth cantrip.",
				"I learn additional spells, which do not count towards the number of spells I can know."
			]),
			skills: "Survival",
			spellcastingExtra: ["mold earth","longstrider", "zephyr strike", "earth tremor", "maximilian's earthen grasp", "erupting earth", "meld into stone", "staggering smite", "transmute rock", "move earth", "mordenkainen's sword", "earthquake", "invulnerability"],
			spellcastingExtraApplyNonconform: true,
			armorProfs: [true, false, false, false]
		},
		// Level 1 - 2 Faerie Weapon
		"faerie weapon": {
			name: "Faerie Weapon",
			source: ["OG",195],
			minlevel: 1,
			description: desc([
				arFaerieWeapon,
				"Use the \"Choose Feature\" button above to pick the Damage Type of your Faerie Weapon."
			]),
 			calcChanges : {
				hp : function (totalHD, HDobj, prefix) {
					if (classes.known["faerie og"]) return [classes.known["faerie og"].level, "Faerie (Brownie)"];
				},
			},
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*weapon)(?=.*faerie).*$/i,
				name: "Faerie Weapon",
				source: ["OG", 196],
				damage: [1, 4, "slashing"],
				abilitytodamage: true,
				selectNow: true,
				description: "Finesse, magical"
			}],
			action: ["action", "Attack twice w/ Faerie Weapon"],
			speed: {
				walk: {
					bonus: "+5",
				},
				fly: "fixed 0",
				climb: 20
			},
			choices: ["Bludgeoning","Piercing","Slashing"],
			"bludgeoning": {
				name: "Faerie Weapon (Bludgeoning)",
				calcChanges : {
					atkAdd : [
						function(fields, v) {
							if(/\faerie weapon/i.test(v.WeaponText)) fields.Damage_Type = "Bludgeoning";
						}
					]
				},
				description: desc(arFaerieWeapon),
			},
			"piercing": {
				name: "Faerie Weapon (Piercing)",
				calcChanges : {
					atkAdd : [
						function(fields, v) {
							if(/\faerie weapon/i.test(v.WeaponText)) fields.Damage_Type = "Piercing";
						}
					]
				},
				description: desc(arFaerieWeapon),
			},
			"slashing": {
				name: "Faerie Weapon (Slashing)",
				calcChanges : {
					atkAdd : [
						function(fields, v) {
							if(/\faerie weapon/i.test(v.WeaponText)) fields.Damage_Type = "Slashing";
						}
					]
				},
				description: desc(arFaerieWeapon),
			},
			
		},
		"whimsy": {
			name: "Whimsy",
			source: ["OG", 196],
			minlevel: 2,
			description: desc([
					"I can whimsy at turnstart, until end of next turn. During I have resist. to pierc, slash, bludg.",
					"I can conc. on spells, but only cast cantrips, and I have disadv. on conc. checks. Atk and dmg",
					"with my faerie weapon use Cha instead of Str/Dex. The whimsy ends on unconscious.",
				]),
			usages: "Con mod per ",
			usagescalc: "event.value = Math.max(1, What('Con Mod'));",
			recovery: "short rest",
			calcChanges : {
				atkAdd : [
					function(fields, v) {
						if(classes.known["faerie og"] && What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (fields.Mod == 1 || fields.Mod == 2) && /\bwhimsy/i.test(v.WeaponText)) {
							fields.Mod = 6;
						}
					},
					"If I include the word 'Whimsy' in a melee weapon's name, the weapon will use my Charisma mod for Attack and Damage."
				]
			},
			weaponsAdd : {
				select : ["Faerie Weapon, Whimsy"]
			},			
			dmgres : [
				["Bludgeoning", "Bludge. (in whimsy)"],
				["Slashing", "Slash. (in whimsy)"],
				["Piercing", "Pierc. (in whimsy)"]
			],			
		},
		"quickling attack": {
			name: "Quickling Attack",
			source: ["OG", 196],
			minlevel: 6,
			description: desc([
					"When I atk with my Faerie Weapon I can atk an additional time as bonus action.",
				]),
			action: ["bonus action", "Quickling Attack w/ Faerie Weapon"],
		},
		"wanton assault": {
			name: "Wanton Assault",
			source: ["OG", 196],
			minlevel: 10,
			//additional : Math.max(3, What('Cha Mod')) + " atks",
			description: desc([
					"Use action + bns during whimsy: +15 feet speed, immune atks of opport., make Cha mod",
					"(min 3) atks w/ faerie weapon & deal +1d6 extra dmg. Whimsy ends at end of turn.",
					"Use the \"Choose Feature\" button above to pick beetween Necrotic and Radiant damage."
			]),
			usages: 1,
			recovery: "long rest",
			choices : ['Radiant', 'Necrotic'],
			"radiant" : {
				name: "Wanton Assault",
				description: desc([
						"While in a whimsy, use action and bns to: +15 feet speed, immune to atks of opport.,",
						"make a number of atks with my faerie weapon equal to my Cha mod (min 3) which deal",
						"+1d6 Radiant dmg. When my turn ends, so does my whimsy."
					]),
				calcChanges : {
					atkAdd : [
						function(fields, v) {
							if(/\bwhimsy/i.test(v.WeaponText)) {
								if(classes.known["faerie og"].level < 14)
									fields.Description = "Magical, +1D6 Radiant Damage during Wanton Assault.";
								else
									fields.Description = "Finesse, magical, +" + Math.floor(classes.known["faerie og"].level/2) + " Radiant dmg on first hit/rnd, +1D6 Radiant dmg during Wanton Assault.";
							}
						},
						"Attacks with my Faerie Weapon deal an additional 1D6 Radiant Damage during Wanton Assault. From level 14 on the first hit each round during whimsy deals half my faerie level extra Radiant damage."
					]
				},
			},
			"necrotic" : {
				name: "Wanton Assault",
				description: desc([
						"While in a whimsy, use action and bns to: +15 feet speed, immune to atks of opport.,",
						"make a number of atks with my faerie weapon equal to my Cha mod (min 3) which deal",
						"+1d6 Necrotic dmg. When my turn ends, so does my whimsy."
					]),
				calcChanges : {
					atkAdd : [
						function(fields, v) {
							if(/\bwhimsy/i.test(v.WeaponText)) {
								if(classes.known["faerie og"].level < 14)
									fields.Description = "Magical, +1D6 Necrotic Damage during Wanton Assault.";
								else
									fields.Description = "Finesse, magical, +" + Math.floor(classes.known["faerie og"].level/2) + " Necrotic dmg on first hit/rnd, +1D6 Necrotic dmg during Wanton Assault.";
							}
						},
						"Attacks with my Faerie Weapon deal an additional 1D6 Necrotic Damage during Wanton Assault. From level 14 on the first hit each round during whimsy deals half my faerie level extra Necrotic damage."
					]
				},
			}

		},
		"smiting glamour": {
			name: "Smiting Glamour",
			source: ["OG", 196],
			minlevel: 14,
			description: desc([
				"During whimsy the first hit ea turn deals +half faerie level dmg (same type as above)."
				]),
		},
	}
});


/*
CreatureList."shambling mound" = {
        name: "Shambling Mound",
        source: ["MM", 270],
        size: 2,
        type: "Plant",
        companion: "familiar_not_al",
        alignment: "Unaligned",
        ac: 15,
        hp: 136,
        hd: [16, 10],
		speed: "20 ft, swim 20 ft",
        scores: [18, 8, 16, 5, 10, 3],
        skills: {
            stealth: 2
        },
        senses: "Blindsight 60 ft; blind beyond that",
        passivePerception: 10,
        challengeRating: "5",
        proficiencyBonus: 3,
        attacksAction: 1,
        attacks: [{
            name: "Slam",
            ability: 1,
            damage: [2, 8, "bludgeoning"],
            range: "Melee (5 ft)",
            description: ""
        },{
		    name: "Engulf",
            ability: 1,
            damage: [2, 8, "bludgeoning"],
            range: "Special",
            description: ""
        }
		],
        traits: [{
            name: "Lightning Absorption",
            description: "When subjected to lightning damage, take no dmg and gain hp equal to the lightning damage."
        },
		{
			name: "Multiattack",
			description: "Make 2 slam attacks. If both hit a Medium or smaller crea it is grappled (escape DC 14), and I use Engulf on it."
		}]
};*/