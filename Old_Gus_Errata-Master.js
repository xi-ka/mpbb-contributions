/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Source Book
	Effect:		This script aims to add Races, Classes, Subclasses, Spells and more from Old Gus's Errata
	Source 1:	https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link
	Source 2:	https://www.reddit.com/r/UnearthedArcana/comments/z5872u/old_gus_errata_wanderers_of_the_infinite_skies/
	Author:		https://reddit/u/callmepartario
	Code by:	xika
	Date:		2024-11-01 (sheet v13)
	
	Repository for single scripts:	https://github.com/xi-ka/mpmb-contributions/tree/main
	
	Content included thus far:
		- Spells (187)
		- Faerie Class with four Subclasses

*/

var iFileName = "Old_Gus_Errata-Master.js";

RequiredSheetVersion("13.2.0");

SourceList.OG = {
	name : "Old Gus' Errata - Wanderer of Infinite Skies",
	abbreviation : "OG",
	abbreviationSpellsheet : "OG",
	group : "Old Gus Errata",
	url: "https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link",
	date : "2024/10/22"
};

SpellsList["acidic exudation og"] = {
	name: "Acidic Exudation",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 225],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a pinch of saltpeter",
	save : "dex",
	duration: "Conc, 1 min",
	description: "create volatile orb; throw 30m; Dex save or 2d6+1D6/SL acid dmg in 5ft radius; half on success",
	descriptionFull: "Your palm secretes a volatile gel, which you can use as a weapon. For the duration, you can use a bonus action to throw a globule of the substance up to 30 feet. The globule explodes upon impact, creating a shower of hissing acid in a 5-foot-radius sphere. Creatures in the area must make a Dexterity saving throw, taking 2d6 acid damage on a failed save, or half as much damage on a successful one.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["age plant og"] = {
	name: "Age Plant",
	classes: ["druid"],
	source: ["OG", 225],
	level: 4,
	school: "Trans",
	time: "1 min",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "age/de-age, control, enlarge/reduce or restrain target plant; see B",
	descriptionFull: "You target a Plant you can see within range. If the target is a nonmagical and immobile plant, seed, or tree, you increase or decrease its aging of by up to ten years.\nThe process can operate either forward or backward, causing flowers to blossom, seeds to sprout and grow, and trees to bear fruit; or fruit to turn to blossoms, trees to become saplings, and new shoots to turn to seeds. The extent of the changes are entirely up to you.\nYou can guide the plant’s growth so long as it can grow in the manner you direct.\nIf the target is an unwilling Plant, it must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the Plant is charmed, you can use your action to cause additional effects to the target, choosing from the following:\n- Control. You take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\n- Enlarge. The target’s size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category—from Medium to Large, for example. If there isn’t enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. While enlarged, the target’s attacks deal an additional 1d6 damage. You can enlarge the target up to twice.\n- Reduce. The target’s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category—from Medium to Small, for example. While reduced, the target’s attacks have a 1d6 damage penalty. You can reduce the target up to twice.\n- Restrain. The succeed on a Strength saving throw or be restrained until the end of its next turn.\nEach time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level, aging effect increases to 25 years. If you use a spell slot of 6th level, the aging effect increases to 100 years. If you use a spell slot of 7th level or higher, the aging effect increases to 1,000 years."
};
SpellsList["allergen cloud og"] = {
	name: "Allergen Cloud",
	classes: ["druid", "ranger", "wizard"],
	source: ["OG", 226],
	level: 1,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,M",
	compMaterial:"a pinch of ragweed",
	duration: "Conc, 1 min",
	save: "Con",
	description:"15ft+15/SL radius and 10ft+5ft/SL height; all enter/start turn save or poisoned; save: immune 24h",
	descriptionFull:"A cloud of irritating dust and pollen fills a 15-foot-radius, 10-foot-high cylinder centered on a point you can see within range. For the duration, the area is lightly obscured. When creature enters the spell’s area for the first time on a turn or starts its turn there, it must succeed on a Constitution saving throw or be poisoned for 1 minute, experiencing watering of the eyes and fits of coughs and sneezing. Constructs, Undead, and creatures that do not need to breathe succeed their saving throw automatically. An affected creature makes a new saving throw at the end of each of their turns. On a success, the effects end and it becomes immune to this spell for 24 hours. The cloud lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
	atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the cylinder’s radius increases by 15 feet, and its height increases by 5 feet for each spell slot above 1st.",
};
SpellsList["alter fortune og"] = {
	name: "Alter Fortune",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 226],
	level: 3,
	school: "Div",
	time: "1 rea",
	timeFull: "1 reaction, when a creature you can see within range makes an ability check, attack roll or saving throw",
	range: "30 ft",
	components: "S,M",
	compMaterial: "a set of weighted bone dice",
	duration: "Instantaneous",
	save: "Wis",
	description: "target rerolls ability check, attack roll, or saving throw; use the new roll; save if unwilling",
	descriptionFull: "When a creature you can see within range makes an ability check, attack roll, or saving throw, you can attempt to alter the course of fate. An unwilling target makes a Wisdom save; on a failure (or if willing), they can immediately reroll the triggering roll, accepting the new result instead.",
};
SpellsList["amanuensis og"] = {
	name: "Amanuensis",
	classes: ["artificer", "bard", "cleric", "wizard"],
	source: ["OG", 226],
	level: 2,
	school: "Trans",
	time: "1 min",
	range: "30 ft",
	components: "V,S,M\u0192",
	compMaterial: "fine ink worth at least 1 gp",
	duration: "Conc, 1 h",
	description: "copies nonmagical text from source to parchement at 250 words per minute; see B",
	descriptionFull: "You cause writing from one source (such as a book) to be copied onto parchment you provide. This spell copies 250 words per minute, creating a perfect transcription of the original. The spell only copies nonmagical text, ignoring illustrations and magical writing, leaving empty space where those items appear in the original. Alternatively, you can also use this spell to dictate verbally, and have your dictation transcribed onto a page. The spell automatically turns to the next blank page and continues its transcription until it completes the transcription, or it runs out of available pages.",
};
SpellsList["anterograde amnesia og"] = {
	name: "Anterograde Amnesia",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 226],
	level: 6,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "suppresses short-term memory in target; see B",
	descriptionFull: "You attempt to suppress the short-term memory of a creature you can see within range. The target makes a Wisdom saving throw. On a failure, they become unable to form new memories, although their long-term memory remains perfectly intact. For the duration, at the start of each of the target’s turns, they forget all events that have transpired since the start of their last turn. Roll 1d2. On a 1, the creature is incapacitated until the end of their turn. If the affected target attempts to cast a spell, they must first succeed a spellcasting ability check contested by your spell save DC. At the end of each of the creature’s turns, it can repeat the saving throw, ending the effect on a success.",
};
SpellsList["antipathetic field og"] = {
	name: "Antipathetic Field",
	classes: ["bard", "warlock"],
	source: ["OG", 227],
	level: 3,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "S",
	save: "Wis",
	duration: "Conc, 1 min",
	description: "save or 2d8+1d8/SL psychic dmg; half dmg on success; on fail line 1d8+1d8/SL psychic dmg; see B",
	descriptionFull: "You attempt to invade the mind of a creature, filling it with rage and anger toward you. The target makes a Wisdom saving throw, taking 2d8 psychic damage on a failure, and half as much on a success.\nIf the target fails the saving throw, a palpable field of mutual enmity is created in a line that stretches between you and the target. The field is so strong enough that creatures inside it are damaged by your mutual enmity. Each creature in a line between you and the target must make a Wisdom saving throw, taking 1d8 psychic damage on a failure, or half as much on a success.\nConstructs, Undead, and creatures with an Intelligence score of 4 or lower are unaffected by the spell.\nFor the duration, both you and the target have disadvantage on attack rolls made against targets other than one another, and neither of you can willingly move further apart from the other. Additionally, you can use an action to repeat the spell’s effects, damaging the target and each creature that stands between you.\nThe target can repeat its saving throw at the end of each of its turns, ending the spell on a success.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage for each of its effects increases by 1d8 for each slot level above 3rd."
};
SpellsList["arcane razor og"] = {
	name: "Arcane Razor",
	classes: ["artificer", "ranger", "sorcerer", "wizard"],
	source: ["OG", 227],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "S: 15ft rad",
	components: "V,S,M\u0192",
	compMaterial:"a melee weapon made of metal worth at least 10 gp that deals slashing damage",
	duration: "Instantaneous",
	description:"weapon dmg plus 4d10+1d10/SL slashing dmg to all where AC <= melee atk roll; also damages objects",
	descriptionFull:"You infuse your weapon with arcane energy and whirl it in a circle, unleashing a wave of razor-thin magic out in all directions. Make a melee weapon attack roll. All creatures withing 15 feet of you whose an AC is less than your attack roll suffer the attack’s normal damage plus an additional 4d10 slashing damage. The spell also damages any objects in the area that aren’t being worn or carried.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
};
SpellsList["arcane strike og"] = {
	name: "Arcane Strike",
	classes: ["artificer", "ranger", "sorcerer", "wizard"],
	source: ["OG", 227],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "10 ft",
	components: "V,S,M\u0192",
	save: "Str",
	compMaterial: "a melee weapon made of metal worth at least 10 gp",
	duration: "Instantaneous",
	description: "lunge melee atk; on hit 0-2 extra effects: 1d8+1d8/SL force dmg; save or push 10ft+5ft/SL; no react",
	descriptionFull: "You lunge at a creature, striking them with arcane force. As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and up to two of the following effects of your choice: The target takes an additional 1d8 force damage; You force a Large or smaller target to make a Strength saving throw. If they fail, they are pushed 10 feet away from you; The target can't take reactions until the start of its next turn.",
	atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the additional force damage increases by 1d8 and the distance the creature is pushed increases by 5 feet for each slot level above 1st."
};
SpellsList["avalanche og"] = {
	name: "Avalanche",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 227],
	level: 7,
	school: "Evoc",
	time: "1 a",
	range: "300 ft",
	save: "Dex",
	components: "V,S,M",
	compMaterial: "a quartz crystal",
	duration: "Instantaneous",
	description: "30ft rad, 40ft cyl; each creature save or 4d10+1d10/SL cold + 4d10+1d10/SL bludg and prone; see B",
	descriptionFull: "Choose a point you can see on the ground within range. A torrent of ice, rock and snow fall in a 30-foot-radius, 40-foot-high cylinder centered on that point. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d10 cold and 4d10 bludgeoning damage on a failed save and is knocked prone. Creatures that fail their saving throw by 5 or more are restrained by the rubble. A creature can use an action to pull itself or another buried creature free by making a Strength check with a DC equal to your spell save DC.\nAdditionally, objects in the area take 4d10 bludgeoning damage, and the area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand. The ice and rocks melt away over the course of the next 24 hours.",
	atHigherLevels: "When you cast this spell using a spell slot of 8th level or higher, the damage increases by 1d10 for each of its effects."
};
SpellsList["avyies temporal trickery og"] = {
	name: "Avyie's Temporal Trickery",
	classes: ["artificer", "bard", "wizard"],
	source: ["OG", 228],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a broken clock",
	duration: "Conc, 1 min",
	description: "during duration use bns to stop time till end of turn: undetectable, no reactions; see B",
	descriptionFull: "You dislodge yourself from your current temporality, granting you a modicum of control over the flow of time. For the duration, you can use your bonus action to stop time until the end of your turn. While time is stopped, you are undetectable and other creatures cannot react to your actions. At the end of your turn, time resumes and everything you did during your turn happens simultaneously - any creatures that you damaged take that damage at the end of your turn, and any creatures that must make a saving throw to avoid an effect must so at the end of your turn. If you move on your turn, other creatures experience events as if you had teleported.\nWhen the spell ends, your stolen time catches up with you. Until the end of your next turn, you cannot move or take any actions, and any attacks made against you have advantage.",
};
SpellsList["awaken object og"] = {
	name: "Awaken Object",
	classes: ["artificer", "wizard"],
	source: ["OG", 228],
	level: 5,
	school: "Trans",
	time: "8 h",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial:"platinum shavings worth at least 1,000 gp (consumed)",
	duration: "Instantaneous",
	description:"touched object awakens as living construct; DM assigns stats; see B",
	descriptionFull:"You touch a Huge or smaller object, which becomes a living construct, able to articulate any of its component parts. The DM rolls a d4 in secret.\n- If the result is a 1, the construct gains the Axiomatic Mind trait: Axiomatic Mind. The construct is unaligned, and remains loyal to its creator until it dies. It can’t be compelled to act in a manner contrary to instructions you provide it. It has an intelligence score of 3.\n - If the result is a 2, The construct gains the Axiomatic Mind trait and has an Intelligence score of 1d4 + 3. It gains the ability to speak one language you know.\n- If the result is a 3, the construct gains an Intelligence score of 4d4 + 3, and it also gains a personality and alignment of its own. The resulting construct it is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the construct chooses whether to remain friendly to you, based on its personality, desires and how it has been treated.\n- If the result is a 4, the construct gains all the benefits it would as if you had rolled a 3, and one other ability to the awakened construct (DM’s discretion). This may take the form of limited spellcasting, or allowing an object with “wings” (for example, a table with folding sides) to fly, even if it is not aerodynamically sound.\nThe DM assigns any remaining statistics appropriate for the awakened object. The DM assigns these traits randomly, or selects appropriate statistics informed by the object’s nature or original construction. Chapter 8 of the Dungeon Master’s Guide includes guidance for assigning AC and hit points to objects based on their size and construction. If an awakened object dies, it cannot be returned to life by spells.",
};
SpellsList["babau slime og"] = {
	name: "Babau Slime",
	classes: ["artificer", "warlock"],
	source: ["OG", 229],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial:"a vial of babau blood worth at least 100 gp",
	duration:"1 h",
	save:"Con",
	description:"coat yourself in slime; attackers in 5ft take 3d6+1d6/SL; grapple or swallow 2d6+1d6/SL on failed save",
	descriptionFull:"Your flesh and equipment begin to weep hot red tears that quickly coats your body and equipment in a slimy layer of red jelly. For the duration, a creature that touches you or hits you with a melee attack while within 5 feet of you takes 3d6 points of acid damage. Additionally, a creature that you are grappling, that is grappling you, or a creature that has swallowed you must succeed on a Constitution saving throw or take 2d6 acid damage at the start of their turn.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage for each of its effects increases by 1d6 for each slot level above 3rd."
};
SpellsList["blade of resonance og"] = {
	name: "Blade of Resonance",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 229],
	level: 2,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "S,M\u0192",
	compMaterial: "a melee weapon made of metal worth at least 10 gp",
	duration: "Instantaneous",
	description: "melee atk; all 30ft/5ft line with AC<=atk normal dmg + 3d6+1d6/SL thunder; boom audible 300ft",
	descriptionFull: "You clang your weapon on a nearby surface, causing it to vibrate, and swing it with blinding speed, releasing a thundering shockwave in its wake. As part of the action used to cast this spell, you must make a melee attack with a weapon, otherwise the spell fails. All creatures in a line 30 feet long and 5 feet wide whose AC is less than your attack roll suffer the attack’s normal damage, and take an additional 3d6 thunder damage. Additionally, the spell emits a thunderous boom audible out to 300 feet.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["blinding glitter og"] = {
	name: "Blinding Glitter",
	classes: ["artificer", "bard", "sorcerer"],
	source: ["OG", 229],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "S: 20ft rad",
	components: "S,M",
	compMaterial: "faerie dust",
	duration: "1 min",
	save: "Con",
	description: "all exc. you coated; dis. stealth; no invis; a. to remove glitter; save or blind; repeat save end of turn",
	descriptionFull: "A blinding flash of glittering dust explodes 20 feet from you, coating everything in range except you in glowing glittering dust, which glows dimly for 1 minute. Creatures coated in glittering dust have disadvantage on Dexterity (Stealth) checks and cannot benefit from being invisible. Creatures in range that can see you make a Constitution saving throw. If they fail, they are blinded, making a new saving throw at the end of each of their turns to end their blindness. A creature coated in glitter can use its action to remove the glitter from its body."
};
SpellsList["body swap og"] = {
	name: "Body Swap",
	classes: ["warlock"],
	source: ["OG", 229],
	level: 7,
	school: "Ench",
	ritual: true,
	time: "10 min",
	range: "60 ft",
	components: "V,S,M\u2020",
	compMaterial: "a lock of hair or drop of blood from each target, and crushed diamond dust worth at least 1,000 gp (consumed)",
	duration: "Conc, 8 h",
	save: "Cha",
	description: "swap essences between two creatures not in combat; save if unwilling; see B",
	descriptionFull: "You target two living creatures in range that you can see who are not in combat. Both targets must share the same creature type.\nAn unwilling target makes a Charisma saving throw. If a creature succeeds their saving throw, the spell is lost, the target(s) immediately awaken (if asleep), and are aware of your attempt and your location. If they fail, their essences are swapped.\nEach body retains its racial modifiers and abilities, its Strength, Constitution and Dexterity scores. Memories, and enchantments upon or within them are transferred to their new body, which takes on the Intelligence, Wisdom and Charisma scores as well as the languages, skills, proficiencies, spells, and abilities of its new inhabitant until the spell ends or is dispelled.",
	atHigherLevels:"If you cast this spell using a spell slot of 8th level, the duration is 24 hours. At 9th level, the targets do not need to share a creature type, and the spell lasts until dispelled. Using a spell slot of 8th level or higher grants a duration that doesn’t require concentration."
};
SpellsList["branch to branch og"] = {
	name: "Branch to Branch",
	classes: ["ranger"],
	source: ["OG", 230],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	description:"climb = move speed; add spell mod to dex(acrobatics) chk; swing with no check; SL 3+ duration = 1h",
	descriptionFull:"You pound your chest in primal exuberance. For the duration, you gain a climbing speed equal to your movement speed. You gain a bonus to Dexterity (Acrobatics) checks equal to your spellcasting ability modifier. You can brachiate (swing from branches and vines) at your movement speed without needing to make an ability check.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the duration is increased to 1 hour."
};
SpellsList["budding romance og"] = {
	name: "Budding Romance",
	classes: ["bard", "warlock"],
	source: ["OG",230 ],
	level: 6,
	school: "Ench",
	time: "1 min",
	range: "60 ft",
	components: "S, M\u2020",
	compMaterial:"a lock of hair or drop of blood from the target(s), which the spell consumes",
	duration:"conc, 1 h",
	save:"Wis",
	description:"bond of love between two creatures if save fail; see B",
	descriptionFull:"You forge a bond of love between up to two creatures. Designate up to two living creatures of the same that you can see within range who are not in combat. If the target is aware of your presence, it must not be hostile toward you, or else the spell fails.\nEach target makes a Wisdom saving throw. If a target succeeds, they are unaffected, and become aware of your attempt and location, but not your identity. If they fail their saving throw, they are consumed by feelings of love for the other target of the spell. If you targeted only one creature, designate another living creature of the same type that both you and the target can see as the object of their affection.\nFor the duration, affected creatures are helpful in their actions and will do whatever they can to spend time near the object of their affections.",
	atHigherLevels:"If you cast this spell using a spell slot of 7th-level, the duration is 8 hours. At 8th level the duration is 24 hours, and at 9th-level, the spell lasts until it is dispelled. Using a spell slot of 7th level or higher grants a duration that doesn’t require concentration."
};
SpellsList["celerity og"] = {
	name: "Celerity",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 230],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "double movement speed and use bonus action for disengage with bonus or other actions; see B",
	descriptionFull: "Pieces of your body moves at a rapid rate. For the duration, your movement speed doubles, and you can use your bonus action to perform one of the following:\n- Extricate. You take the Disengage action, and add half your spellcasting ability modifier, rounded up (minimum of 1) to our Armor Class and Dexterity saving throws until the start of your next turn.\n- Swift Hands. You make a number of object interactions or Dexterity (Acrobatics, Sleight of Hand) checks equal to half your spellcasting ability modifier (minimum of 1).\n- Quickened Senses. You make a number of ability checks equal to half your spellcasting ability modifier (minimum of 1), choosing from Intelligence (Arcana, Investigation, Nature), and Wisdom (Insight, Perception, Survival).\nWhen your turn ends, roll a 1d20 and add your spellcasting ability modifier. On a roll of 11 or higher, you maintain your celerity. On a failure, the spell ends."
};
SpellsList["cheetah sprint og"] = {
	name: "Cheetah Sprint",
	classes: ["druid", "ranger"],
	source: ["OG", 230],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "1 rnd",
	description: "speed and jump distance double; 1d6 extra damage on first melee hit; half speed next round",
	descriptionFull: "Until the end of your turn, your base walking speed and the distance you can make with a long jump double, and the first time you hit a creature with a melee weapon attack, the attack deals an additional 1d6 damage. At the end of your turn, your legs ache. Until the end of your next turn, your movement speed is halved."
};
SpellsList["choking hands og"] = {
	name: "Choking Hands",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 231],
	level: 2,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "S,M",
	compMaterial:"a silk handkerchief, tied in a knot",
	duration: "Conc, 1 min",
	save: "Con",
	description:"on save fail 1d12+1d12/SL necrotic, grappled and silenced; on success half damage, no effect; see B",
	descriptionFull:"You create a pair of spectral hands that appear around the throat of Large or smaller creature you can see within range. The target makes a Constitution saving throw. On a failure, the target takes 1d12 necrotic damage, and they are grappled, and they are unable to speak until the end of their next turn. On a success, they take half the amount, and they aren’t grappled and can speak normally. Constructs, Undead, and creatures that do not need to breathe are immune to the spell.\nIf the target moves, the hands stay wrapped around their throat, moving with them. On each of your turns after you cast this spell, you can use an action to tighten the hands again, forcing the target to make another saving throw or suffer the spells’ effects again.\nAlternatively, you can use an action to move the hands up to 60 feet. If the hands enter another creature’s space, you can cause that creature to become the target of the spell instead, forcing them to make a Constitution saving throw against the spell’s effects.\nThe spell ends if a creature succeeds their saving throw against it.\nIf you reduce a creature to 0 hit points with this spell, you can force the creature unconscious for 1 minute instead of killing them.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd."
};
SpellsList["cloudburst og"] = {
	name: "Cloudburst",
	classes: ["druid", "wizard"],
	source: ["OG", 231],
	level: 2,
	school: "Evoc",
	ritual: true,
	time: "1 a",
	range: "500 ft",
	components: "V,S,M",
	compMaterial:"a finely crushed quartz crystal",
	duration:"Conc, 10 min",
	description:"clouds and rainfall 150ft radius; lightly obscured; flames extinguished; after 1 min water vanishes; see B",
	descriptionFull:"You cause clouds to gather, and a heavy rain begins to fall in a 150-foot-radius centered on a point you can see within range. The spell fails if cast indoors, underground, underwater, or in extremely hot and dry climates.\nFor the duration, the area becomes lightly obscured, and any unprotected flames are extinguished. Soft earth is made into muddy, difficult terrain. The water created by the spell does not quench thirst, nor does it provide any nourishment to plants.\nAfter the spell ends, the fallen rainwater quickly evaporates, leaving no trace of itself after 1 minute."
};
SpellsList["conduit og"] = {
	name: "Conduit",
	classes: ["artificer", "cleric", "wizard"],
	source: ["OG", 231],
	level: 5,
	school: "Ench",
	time: "1 h",
	range: "Touch",
	components:"V,S,M\u2020",
	compMaterial:"metallic ink worth at least 100 gp per spell slot level instilled and ammunition (consumed)",
	duration:"1 h",
	description:"up to 5 pices of ammunition are instilled with spells; release on impact; see B",
	descriptionFull:"You touch up to five pieces of nonmagical ammunition and instill them with spells of 1st-4th level that you know or have prepared, expending an additional spell slot for each spell you wish to instill into the ammunition. Any additional decisions required by an instilled spell must be made as the time they added to the ammunition (for example, the exact instructions of a suggestion spell). Each piece of ammunition can only be instilled with one spell.\nFor the duration, the ammunition is magical for the purpose of overcoming resistance and immunity to nonmagical damage. If they are fired a from a weapon, and the attack hits a creature or object, the instilled spell is released, targeting (or centering upon) the target of that attack.\nIf the instilled spell requires concentration, the creature that fired the ammunition must maintain concentration on the spell. If the instilled spell requires a saving throw, the DC is 11 + the instilled spell’s level, or your spell save DC, whichever is lower."
};
SpellsList["confess og"] = {
	name: "Confess",
	classes: ["cleric", "paladin", "warlock"],
	source: ["OG", 232],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "1 rnd",
	save: "Cha",
	description: "on failed save creature must truthfully answer one question or take 1d8+1d8/SL dmg pyschic; see B",
	descriptionFull: "You attempt to force a creature to answer truthfully.\nWhen you cast the spell, you ask a target creature that you can see and that can hear you a single question no more than ten words in length, for example, “Where does Count Bartholomew Van Der Woodsen sleep?”. If the target does not understand the question or the language you spoke, the spell fails. At the start of the creature’s next turn, the target makes a Charisma saving throw.\nOn a failure, the target must answer truthfully or suffer the effects of the spell. The target can still be evasive in its answers as long as it remains within the boundaries of the truth, but must answer directly (in ten words or less) if they fail their saving throw by 5 or more. If the target fails to answer the question in the same language the question was asked, it takes 1d8 psychic damage and becomes poisoned until the end its turn.\nOn a success, the creature takes 1d4 psychic damage and is not compelled to answer truthfully nor are they poisoned. Constructs, Undead, and creatures that cannot speak or that have an Intelligence score lower than 4 are immune to the spell.\nYou receive no magical indications as to whether the answer you receive is truthful in nature. If you reduce a creature to 0 hit points with this spell, they are stable, but rendered unconscious for 1 minute. At the end of that duration, they regain 1 hit point and make a Constitution saving throw. On a failure, the target gains one level of exhaustion.",
	atHigherLevels: "At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage for a failed save increases by 1d8 for each slot level above 2nd."
};
SpellsList["conjure shield og"] = {
	name: "Conjure Shield",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 232],
	level: 1,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "S",
	duration: "Conc, 1 h",
	description: "weightless shield for +2 (+3 at SL 3) AC and Dex save and proficiency; no concentration at SL 5; see B",
	descriptionFull: "You clench a fist and conjure a weightless shield made of shimmering force that adheres to your arm. You are proficient with the shield, and for the duration, you have a +2 bonus to AC and Dexterity saving throws. If you unclench your fist or use your hand for any other purpose, the spell ends.",
	atHigherLevels: "If you cast this spell using a spell slot of 3rd level, the bonus increases to +3. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
};
SpellsList["corak's metal form og"] = {
	name: "Corak's Metal Form",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 232],
	level: 7,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u0192",
	compMaterial:"a platinum figurine worth at least 500 gp",
	duration:"Conc, 10 min",
	description:"target metalcoated; weight * 8; AC at least 20; immunities & resistances; bonus to melee attacks; see B",
	descriptionFull:"You touch a willing creature. Until the spell ends:\n- The target’s skin, clothing and equipment is covered in a lustrous metallic coating, their weight is multiplied by eight, they don’t need to breath, and they can’t swim or fly without the aid of magic. \n- The target’s AC can’t be less than 20, regardless of what kind of armor it is wearing.\n- The target is immune to acid, fire, lightning, and poison damage, and has resistance to nonmagical bludgeoning, piercing, and slashing damage. The target is also immune to the effects of extreme heat and cold as described in Chapter 5 of the Dungeon Master’s Guide.\n- The target’s melee weapon attacks that deal bludgeoning, piercing, or slashing damage count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage, can’t deal less than 1d10 damage on a hit, and if the target is an object, the hit is a critical hit.",
};
SpellsList["corrosive touch og"] = {
	name: "Corrosive Touch",
	classes: ["artificer", "warlock", "sorcerer", "wizard"],
	source: ["OG", 233],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "S,M",
	compMaterial:"a vial of lye",
	save: "Var",
	duration:"Conc, 1 min",
	description:"touch dmg metal obj. (weap., shield, armor, ...) ; constr. for 3D6+1D6/SL; touch as reac on miss; see B",
	descriptionFull:"For the duration, your hands become corrosive to ferrous metal. If a nonmagical metal object isn’t being worn or carried, you can use your action to touch it, destroying a one-inch cube of it, ending the spell. \nIf you target a nonmagical metal equipment being worn or carried by a creature: \n If targeting a shield or armor, make a melee spell attack. On a hit, the item takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. \n- If targeting a weapon (for example, a longsword), the target makes a Dexterity saving throw. On a failure, the weapon takes a permanent and cumulative -1 penalty. If its penalty drops to -5, the weapon is destroyed. \nIf you target a construct made of metal, they make a Constitution saving throw at disadvantage, taking 3d6 acid damage on a failure, and half as much on a success.\nAdditionally, if a creature misses you with a melee weapon attack, you can use your reaction to attempt to touch your attacker, or one object they are wearing or carrying.",
	atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6, and you can destroy 1 additional cubic inch of metal for each slot level above 1st."
};
SpellsList["create campsite og"] = {
	name: "Create Campsite",
	classes: ["bard", "druid"],
	source: ["OG", 233],
	level: 3,
	school: "Conj",
	ritual: true,
	time: "10 min",
	range: "Special",
	components:"V,S",
	duration:"24 h",
	description:"fey servants build campsite, fetch water and prepare meal; campsite is hard to spot; see B",
	descriptionFull:"You summon a troupe of tiny Fey servants who create a campsite for up to ten travelers. There must be enough nearby natural terrain to host the campsite, or the spell fails. The fey follow your instructions, clear the area of debris, set up any tents or bedrolls if you have them (or prepare soft earth and plants to sleep upon), start a campfire, fetch fresh water, and prepare a bland meal of local flora.\nFor the duration, the campsite is so skillfully prepared that it blends in with the surrounding terrain, such that Beasts in the area have disadvantage on Wisdom (Perception) checks to notice its presence at all, and Humanoids in the area must make a Wisdom (Survival) check against your spell save DC to notice any alterations to the natural landscape.",
};
SpellsList["cuppy snacks og"] = {
	name: "Cuppy Snacks",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 233],
	level: 2,
	ritual: true,
	school: "Conj",
	time: "1 min",
	range: "Self",
	components:"V,S,M",
	materials:"100gp + 50gp/SL, which the spell consumes",
	duration:"24 h",
	description:"time-travel-buy 2+1/SL snacks; heal 2d4+2; nourishment for 1 day; lose potency after 24h",
	descriptionFull:"You travel through time and space to an eatery you are familiar with, purchase food, and send it back to yourself in a sealed magical cup with a paraffin paper lid, which preserves, shrinks, and infuses the food with healing potential, becoming cuppy snacks.\nImmediately, two snacks appear in your hand and last for the duration. A creature can use its action to peel back the lid and eat a snack. Eating a snack restores 2d4 + 2 hit points, and the snack provides enough nourishment to sustain a creature for one day.\nThe snacks lose their potency if they have not been consumed within 24 hours.",
	atHigherLevels: "At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the material cost increases by 50 gp and the spell produces one additional snack for each slot level above 2nd."
};
SpellsList["cursory ward og"] = {
	name: "Cursory Ward",
	classes: ["cleric", "sorcerer", "warlock", "wizard"],
	source: ["OG", 233],
	level: 0,
	school: "Abjur",
	time: "1 a",
	range: "Self",
	components:"V,S",
	duration:"Instantaneous",
	descriptionCantripDie: "gain `CD`d4 + my spell mod temp hp until end of next turn",
	description:"gain 1d4 + my spell mod temp hp until end of next turn; extra D4 at CL 5, 11 and 17",
	descriptionFull:"You ward yourself from injury, granting yourself temporary hit points equal to 1d4 + your spellcasting ability modifier (minimum of 1). The temporary hit points last until the end of your next turn.\nThe number temporary hit points increase by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
};
SpellsList["dazzling strobe og"] = {
	name: "Dazzling Strobe",
	classes: ["bard", "cleric", "paladin", "sorcerer"],
	source: ["OG", 233],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "20 ft",
	components: "S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Con",
	description: "all in range that can see you make save; on fail they are incapacitated and loose concentration",
	descriptionFull: "You emit a flickering light with wild intensity. Each creature within 20 feet of that can see you makes a Constitution saving throw. If they fail, they are incapacitated until the end of their next turn, and any concentration effects they are maintaining are interrupted."
};
SpellsList["deadly lahar og"] = {
	name: "Deadly Lahar",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 234],
	level: 8,
	school: "Evoc",
	time: "1 a",
	range: "S: 60ft cone",
	components: "V,S",
	save: "Dex",
	duration: "1 min",
	description: "5d6 bludg. dmg + 5d6 fire dmg; half on save; diff. terrain; all enter/start turn spell mod fire damage",
	descriptionFull: "You cause a rushing torrent of liquid rock to burst from the ground, burying your enemies in an eruption of molten slurry. Each creature in a 60-foot cone must make a Dexterity saving throw. A creature takes 5d6 bludgeoning damage and 5d6 fire damage on a failure, or half as much on a success.\nFor the next 1 minute, the area is difficult terrain, and when a creature enters the area for the first time on a turn or starts its turn there, they take fire damage equal to your spellcasting ability modifier.\nAdditionally, creatures that failed their saving throw are restrained, buried by rubble and magma. At the start of each of their turns, a buried creature takes 3d6 fire damage. A creature can use an action to pull itself or another buried creature free by making a Strength check with a DC equal to your spell save DC."
};
SpellsList["defenestration sphere og"] = {
	name: "Defenestration Sphere",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 234],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "all enter/start turn save or 3d8+1d8/SL bludg. dmg; bns move sphere; bns hit one crea. in sphere; see B",
	descriptionFull: "You create a 15-foot-radius sphere of violently swirling air centered on a point within range. The spell’s area is difficult terrain. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or take 3d8 bludgeoning damage.\nOn each of your turns after you cast this spell, you can use an action to move the sphere up to 60 feet in any direction.\nUntil the spell ends, you can use a bonus action on each of your turns to target one creature within the sphere. The target must make a Strength saving throw. On a failure, they take 3d8 bludgeoning damage and are knocked prone. On a success, they take half the amount and aren’t knocked prone.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage for each of its effects increases by 1d8 for each slot level above 4th."
};
SpellsList["delay agony og"] = {
	name: "Delay Agony",
	classes: ["artificer", "bard", "cleric", "paladin", "wizard"],
	source: ["OG", 234],
	level: 4,
	school: "Abjur",
	time: "1 rea",
	timeFull: "You react to incoming damage and warp reality around a creature you can see within range.",
	range: "30 ft",
	components: "V,S,M",
	compMaterial:"a puff of cotton or a few down feathers",
	duration:"Conc, 1 h",
	description:"subtract 8d8+1d8/SL from attack/spell; no conc. check if you; subtracted dmg taken when spell ends",
	descriptionFull:"You react to incoming damage and warp reality around a creature you can see within range. Roll 8d8 and subtract the total from the triggering spell or attack’s damage. Record the amount of prevented damage. Any remaining damage is passed onto the target as normal, and they are also subject to any additional effects described by the spell or attack. If you cast the spell with yourself as the target, you do not need to make a concentration check against the damage from the triggering attack. The target of the spell takes the prevented damage immediately after the spell ends.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the prevented damage increases by 1d8 for each slot level above 4th."
};
SpellsList["dimensional anchor og"] = {
	name: "Dimensional Anchor",
	classes: ["cleric", "wizard"],
	source: ["OG", 235],
	level: 4,
	school: "Abjur",
	time: "1 rea",
	timeFull: "",
	range: "60 ft",
	components:"V,S",
	duration:"Conc, 1 min",
	save: "Cha",
	description: "anchor target to plane on save fail; on attempt 4d10+1d10/SL force dmg, half on save; read B",
	descriptionFull: "You grasp at a teleporting creature’s essence, and attempt to anchor it to the location and plane you are upon. The target makes a Charisma saving throw. On a failure, they are wreathed in a shimmering emerald field, shedding dim light in a 5-foot-radius. The field prevents the creature from using or willingly participating in any form of extradimensional travel or teleportation.\nForms of movement blocked by the dimensional anchor include spells like blink, dimension door, etherealness, gate, misty step, plane shift, teleport, teleport circle, as well as class abilities like shadow step and shadow walk.\nFor the duration, if the target attempts to teleport or move themselves through time, they must make Charisma saving throw, taking 4d10 force damage on a failure, or half as much on a success.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th. When you cast this spell using a spell slot of 5th level or higher, duration increases to 1 hour. If you use a spell slot of 6th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours and does not require concentration."
};
SpellsList["dimensional rift og"] = {
	name: "Dimensional Rift",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 235],
	level: 2,
	school: "Conj",
	time: "1 bns",
	range: "30 ft",
	components: "V,S",
	duration: "1 rnd",
	description: "invis. 5ft rift to space you see or specify in 30ft+30ft/SL; can move part or all of body through rift; see B",
	descriptionFull: "You create an invisible and immobile rift which is 5 feet in diameter. The rift bridges the distance between that space and any point within 30 feet of it that you can see or specify by distance and direction (such as “30 feet straight up”). While next to the rift, you are considered to be next to the destination as well, and anything you put through the it (including any portion of your body) emerges at the destination. No sound passes through the rift, and only you can see it or move through it. It lasts until the end your next turn.\nYou cannot emerge from the rift if the space it exits to is occupied, but you might be able to move the creature or object blocking your path through other means.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, distance you can place the rift away from yourself increases by an additional 30 feet for each slot level above 2nd."
};
SpellsList["dirge of the exorcist og"] = {
	name: "Dirge of the Exorcist",
	classes: ["bard", "cleric", "paladin", "wizard"],
	source: ["OG", 235],
	level: 3,
	school: "Abjur",
	ritual: true,
	time: "1 a",
	range: "60 ft",
	components: "V,S,M\u0192",
	compMaterial: "an engraved silver bell worth at least 50 gp",
	duration: "Conc, 1 min",
	save: "Con",
	description: "1 crea type 3d6+1d6/SL Thdr; save 1/2; fail >4 incapac; repeat as a; can end conditions; see B",
	descriptionFull: "You cry out ancient words that create a painful ringing in the ears of your enemies. Choose a creature type: Celestials, Elementals, Fey, Fiends, or Undead. Creatures of the selected type within 60 feet of you that can hear you must make a Constitution saving throw, taking 3d6 thunder damage on a failure, or half as much on a success. A creature that fails their saving throw by 5 or more is incapacitated until the end of their next turn.\nOn each of your turns, you can use your action to continue the dirge, repeating the spell’s effects for creatures that share of selected type that can hear you. When you do, creatures in the area who are charmed, frightened, or possessed by the chosen creature type can make a new saving throw to end the unwanted effect.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
};
SpellsList["discordant thrum og"] = {
	name: "Discordant Thrum",
	classes: ["bard"],
	source: ["OG", 236],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "S: 15ft cone",
	components: "V,S,M",
	compMaterial:"faerie dust",
	duration:"Instantaneous",
	save: "Int",
	description:"all fail save can't communicate & dis. on attack until end their turn; int < 7 immune",
	descriptionFull:"You emit an uncomfortable cacophony. Each creature in a 15-foot cone that can hear you makes an Intelligence saving throw. If they fail, they cannot communicate and have disadvantage on attack rolls until the end of their next turn. Creatures with an Intelligence score of 6 or lower are immune."
};
SpellsList["disguise undead og"] = {
	name: "Disguise Undead",
	classes: ["cleric", "wizard"],
	source: ["OG", 236],
	level: 2,
	school: "Illus",
	time: "1 min",
	range: "Touch",
	components:"V,S,M",
	compMaterial:"a moth's cocoon",
	duration:"1 h",
	description:"1+1/SL undead appear different & mask scent; Int(Investig.) vs my spell DC to unmask; see B",
	descriptionFull:"You make one undead—including its clothing, armor, weapons, and equipment—look different until the spell ends or until you use your action to dismiss it. The spell also masks the scent of any decaying flesh that might emanate from the target creature. You can make the target seem 1 foot shorter or taller and it can appear thin, fat, or in between. You can’t change its body type, so you must cause it to adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a zombie, objects pass through the hat, and anyone who touches it would feel nothing or would feel the zombie’s rotting scalp beneath. If you use this spell to add flesh to a skeleton, someone who shakes the skeleton’s hand might notice their own hand sink into the illusory flesh as they grasp its cold, boney fingers.\nTo discern that the target creature is disguised, a creature can use its action to inspect the target creature’s appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
	atHigherLevels:"When you cast this spell using a spell slot of 3rd level or higher, you can disguise one additional undead creature (creating a unique appearance for each) for each slot level above 3rd."
};
SpellsList["diterlizzis dymaxion og"] = {
	name: "DiTerlizzi's Dymaxion",
	classes: ["artificer"],
	source: ["OG", 236],
	level: 2,
	school: "Div",
	time: "1 bns",
	range: "Self",
	components:"V,S,M\u0192",
	compMaterial:"specialized copper-engraved tools worth at least 250 gp",
	duration:"Conc, 1 min",
	description:"when I cast 1st level spell: roll 1D20, 11+ no slot spend; cast 2nd level spend 1st; cast 3rd spend 2nd",
	descriptionFull:"You amplify your ability to efficiently manage your magical resources. For the duration, whenever you cast a 1st-level spell, roll a d20. On a 11 or higher, you immediately recover the expended spell slot.\nAdditionally, whenever you expend a spell slot of 2nd or 3rd level, you can expend a spell slot one level lower instead.\nWhen the spell ends, you can’t cast spells until after your next turn."
};
SpellsList["dodge-weave og"] = {
	name: "Dodge-Weave",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 236],
	level: 3,
	school: "Conj",
	time: "1 rea",
	timeFull: "1 reaction when attacked",
	range: "Self",
	components: "S,M",
	compMaterial: "a weapon",
	duration: "Instantaneous",
	description: "+5AC vs attack; teleport to attacker if in 30ft+10ft/SL; nxt turn advant. on 1st attack vs attacker",
	descriptionFull: "You briefly vanish, gaining a +5 bonus to AC against the triggering attack. If your attacker is within 30 feet of you, you can teleport to an unoccupied space within 5 feet of them. On your next turn, you gain advantage on your first attack roll against the attacker.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the distance you can teleport toward the attacker increases by an additional 10 feet away for each slot level above 3rd."
};
SpellsList["double jeopardy og"] = {
	name: "Double Jeopardy",
	classes: ["artificer", "wizard"],
	source: ["OG", 236],
	level: 4,
	school: "Div",
	time: "1 bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "an arcane focus worth at least 1000 gp",
	duration: "Conc, 1 min",
	description: "I can duplicate my lvl 1+ spell with attack roll or save as reaction; no spell slot 5+ used; see B",
	descriptionFull: "You create a torrent of magical energy around you which can mirror other magical energies.\nFor the duration, whenever you cast a spell of 1st-level or higher with a casting time of 1 action that requires an attack roll or a saving throw and that targets only one creature or object, you can use your reaction and expend a spell slot to cast the same spell a second time. Neither expended spell slot can exceed 5th level. You can choose to do this after the first spell attack hits or misses, or after the target creature fails its saving throw against the spell."
};
SpellsList["doublespeak og"] = {
	name: "Doublespeak",
	classes: ["bard", "wizard"],
	source: ["OG", 237],
	level: 2,
	school: "Illus",
	ritual: true,
	time: "1 a",
	range: "15 ft",
	components: "S,M",
	compMaterial: "a snake’s forked tongue",
	duration: "Conc, 10 min",
	description: "disguise conversation of me + 5; Wis(Percept) vs. Spell DC to discern; SL3: 1h; SL4 8h; SL5 24h no Conc",
	descriptionFull: "You and up to five willing creatures of your choice within 15 feet of you have your words cloaked in secrecy, disguising your conversation.\nFor the duration, whatever you speak of amongst one another sounds to the casual observer like mundane conversation about the weather, the taste of the food, local politics, or other banal topics. The illusion also modifies your facial expressions and mouth movements to match the illusory words being spoken.\nTo discern the true nature of the conversation, a creature can use its action to eavesdrop and must succeed on a Wisdom (Perception) check against your spell save DC.\nYou and the other targets of the spell know the general topics your illusory voices discussed, but not any of the precise phrases or details they might have used.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, duration increases to 1 hour. If you use a spell slot of 4th level or higher, the duration is 8 hours. If you use a spell slot of 5th level or higher, the duration is 24 hours and does not require concentration."
};
SpellsList["draw upon holy might og"] = {
	name: "Draw Upon Holy Might",
	classes: ["cleric", "paladin"],
	source: ["OG", 237],
	level: 1,
	school: "Ench",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "on fail all Str,Dex,Con save or chk react to reroll & use new; once add my spell mod to attack+dmg",
	descriptionFull: "You draw forth pure, holy power to bolster your physical stature. For the duration, when you fail a Strength, Dexterity, or Constitution ability check or saving throw, you can use your reaction to reroll the d20. You must use the new result.\nIn addition, once before the spell ends, when you make a weapon attack, you can add your spellcasting ability modifier to the attack and damage rolls of that attack. This attack counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
};
SpellsList["drumble dead og"] = {
	name: "Drumble Dead",
	classes: ["cleric", "wizard"],
	source: ["OG", 237],
	level: 0,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "up to 1h",
	description:"one of: spoil food/drink; drop temp & flicker/dim/change flame; corpse speaks, moves or grapples",
	descriptionFull:"You disturb the veil between life and death, creating one of the following magical effects within range: \n- You cause nonmagical food or drink that fits within a 5-foot cube to instantaneously spoil and become inedible, and any nonmagical foliage in the area wilts.\n- You cause the temperature in a 5-foot radius to drop 5 degrees Fahrenheit for 1 minute. Within the same area, you can cause flames to flicker, dim, or change color.\n- A corpse (or partial remains) you can see withing range speaks a message up to three words in length of your choosing in a language you know, and creates brief gestures in a manner of your choosing for up to an hour.\n- A Medium or smaller corpse (or partial remains) you can see withing range instantaneously moves up to 10 feet along the ground in a direction of your choice.\n- One Medium creature of your choice that you can see within range and also within 5 feet of a corpse (or partial remains) must succeed on a Strength saving throw or become grappled by the corpse (or partial remains). A grappled creature can use its action to repeat the saving throw on its turn to end the grapple. At the start of your next turn the target is released from the grapple.\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.\nThe spell can target corpses of larger size categories when you reach higher levels: Large at 5th level, Huge at 11th level, and Gargantuan at 17th level."
};
SpellsList["drunkards breath og"] = {
	name: "Drunkard's Breath",
	classes: ["artificer", "bard"],
	source: ["OG", 238],
	level: 1,
	school: "Conj",
	time: "1 a",
	range: "S: 15ft cone",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "all hit save or poisoned for 1 min and no action nxt trn; no breathing = immune; repeat save end turn",
	descriptionFull: "You let out a tremendous, foul-smelling belch in a 15-foot cone. Creatures in the area must make a Constitution saving throw. On a failed save, a creature becomes is poisoned for 1 minute, and spends its action on its next turn retching and reeling. Creatures that don’t need to breathe or are immune to poison automatically succeed on this saving throw.\nAn affected creature repeats its saving throw at the end of each of its turns, ending the effect on a success."
};
SpellsList["drunken revelry og"] = {
	name: "Drunken Revelry",
	classes: ["bard"],
	source: ["OG", 238],
	level: 4,
	school: "Ench",
	ritual: true,
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a potable liquid held in a glass or flagon",
	duration: "Conc, 10 min",
	save: "Var",
	description: "sing an enchanting drinking song; charm humanoids into revelry; see Book",
	descriptionFull: "You sing an enchanting drinking song that spurs those who can hear you into a drunken revelry. Humanoids of your choice within 60 feet of you that can see and hear you must succeed a Wisdom saving throw or become charmed by you. A creature hostile to you, or in combat with you or your companions makes any saving throws the spell demands with advantage. A creature that succeeds its Wisdom saving throw against the spell becomes immune to its effects for 24 hours.\nFor the duration, the charmed individuals are compelled to partake of any food, alcohol or other intoxicants that are available to them. If intoxicants are unavailable to the affected creatures, the spell ends.\nFor each minute that you continue the song, the affected creatures make a new saving throw as determined by the following table, increasing their stage of revelry by 1 and adding additional conditions as specified on a failure, or decreasing their stage of revelry by 1 on a success.\nIf a creature’s stage reaches 0 again, they can make a new Wisdom saving throw against the spell, becoming immune to it for 24 hours on a success. When the spell ends for a creature, it knows it was charmed by you.\n\nSee Book!"
};
SpellsList["duelist's ward og"] = {
	name: "Duelist's Ward",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 239],
	level: 3,
	school: "Abjur",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "target attacks or forces save use reaction to +1D6 to AC/Save; higher SL more Bonus; see B",
	descriptionFull: "Choose a creature you can see within 120 feet of you. For the duration, when the target hits you with an attack or forces you to make a saving throw (including to maintain your concentration on this spell), you can use your reaction to gain a 1d6 bonus to your AC against that attack, or a 1d6 bonus to that saving throw.\nYou can use this reaction a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). When you expend the final use of the reaction, the spell ends",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the bonus increases to 1d8. When you cast this spell using a spell slot of 5th level or higher, the bonus increases to 1d10. When you cast this spell using a spell slot of 6th level or higher, the bonus increases to 1d12."
};
SpellsList["dulling chains og"] = {
	name: "Dulling Chains",
	classes: ["artificer", "cleric", "warlock", "wizard"],
	source: ["OG", 239],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save:"Str",
	description:"fail save: 1d4 force dmg and speed -15ft until my nxt trn; 2 chains at CL 5, 3 at 11, 4 at 17; see B",
	descriptionShorter:"fail save: 1d4 force dmg and speed -15ft until my nxt trn; CL >5 more chains; see B",
	descriptionCantripDie: "`CD` chains vs. same or multiple targets; fail save: 1d4 force dmg and speed -15ft until my nxt trn",
	descriptionFull:"You summon a magical restraint to ensnare an enemy.\The target makes a Strength saving throw. On a failure, it takes 1d4 force damage, and its speed is reduced by 15 feet until the start of your next turn.\nThe spell creates more than one restraint when you reach higher levels: two restraints at 5th level, three restraints at 11th level, and four restraints at 17th level. You can direct the restraints at the same target or at different ones. Make a separate attack roll for each restraint."
};
WeaponsList["dulling chains og"] = {
	name: "Dulling Chains",
	source: ["OG", 239],
	regExpSearch: /^(?=.*dulling)(?=.*chains).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["C",4,"Force"],
	range: "60ft",
	dc: true,
	abilitytodamage: false,
	description: "Each d4 is a separate chain and may hit a different target. Str save per chain or -15ft speed until my next turn.",
	list: "spell",
	tooltip: "You summon a magical restraint to ensnare an enemy.\The target makes a Strength saving throw. On a failure, it takes 1d4 force damage, and its speed is reduced by 15 feet until the start of your next turn.\nThe spell creates more than one restraint when you reach higher levels: two restraints at 5th level, three restraints at 11th level, and four restraints at 17th level. You can direct the restraints at the same target or at different ones. Make a separate attack roll for each restraint."
};
SpellsList["duodimension og"] = {
	name: "Duodimension",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 239],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components:"S, M\u0192",
	compMaterial:"a strip of fine paper bound into a mobius strip and a flat ivory likeness of yourself worth at least 500 gp",
	duration:"Conc, 1 h",
	description:"I'm reduced to 2 dimensions; attacks vs. me dis.; bonus to hide; vulnerable piercing/slashing; see B",
	descriptionFull:"You fold your height, width, or depth into the Astral Plane, reducing yourself to a two-dimensional form. For the duration, you gain the following effects: \n- Attacks against you are made at disadvantage.\n- You can Hide as a bonus action without any available cover, and you have advantage on Dexterity (Stealth) checks when you do, and you gain a +5 bonus to your armor class until the start of your next turn.\n- You can move through any available space as long as your remaining two dimensions can squeeze through it.\n- You become vulnerable to piercing and slashing damage.\nWhen the spell ends, you immediately return to your three-dimensional form in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space and take 2d6 force damage. \nWhile under the effects of this spell, inserting your body inside an extradimensional space created by a bag of holding, Heward’s handy haversack, portable hole, or similar item instantly destroys the item and opens a gate to the Astral Plane. The gate originates where you were placed inside the extradimensional space. You, and any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened."
};
SpellsList["dust dash og"] = {
	name: "Dust Dash",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 240],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "5 ft",
	components: "S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Var",
	description: "dash faerie dust on creature; spell attack if unwilling; cause unpredictable effects; see Table in Book",
	descriptionFull: "You dash faerie dust wantonly upon a living creature within 5 feet of you, causing unpredictable effects. Make a melee spell attack against the target if it is unwilling. On a hit, roll a d20 to determine the dust’s unpredictable effects from the table in the Book.",
	atHigherLevels: "When you cast this spell using a spell slot of 2nd-level or higher, you can add or subtract a number to your d20 roll on the table equal to the level of the spell slot you expended minus one. For example, if you cast the spell at 2nd-level, and rolled a 10, you can choose from anywhere between 9 and 11 on the table for the applied dust effect."
	
};
SpellsList["entropic field og"] = {
	name: "Entropic Field",
	classes: ["artificer", "cleric", "sorcerer", "wizard"],
	source: ["OG", 241],
	level: 3,
	school: "Abjur",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a hunk of pewter",
	duration: "Conc, 1 min",
	save: "Str",
	description: "slow time 15ft+5/SL rad; enter or turn start save or speed halved; weakens range & spells; see B",
	descriptionFull: "You slow the flow of time in a 15-foot-radius, 40-foot-high cylinder centered on a point within range, which glows dimly for the duration. When a creature enters the area for the first time on its turn or starts its turn there, they must make a Strength saving throw. On a failure, their movement speed is reduced by half, they have -2 penalty to Armor Class when attacked by a creature outside the field, and can’t use reactions in response to events that happen outside the field.\nThe field also affects objects and projectiles that pass its area: \n- Non-magical ranged weapons. The attack is made at disadvantage.\n- Magical ranged weapons and spells. The attack is made at a -2 penalty. If the attack is a spell cast at a higher level than the entropic field, it is not subject to this penalty.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the radius of the cylinder increases by 5 feet for each slot level above 3rd."
};
SpellsList["euphoric cloud og"] = {
	name: "Euphoric Cloud",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 241],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "a few poppy seeds",
	duration: "Conc, 10 min",
	save: "Wis",
	description: "20+20/SL ft radius sphere cloud; start turn or enter save or charmed; see B",
	descriptionFull: "You create a 20-foot-radius sphere of intoxicating blue vapor centered on a point within range. The sphere spreads around corners, and its area is heavily obscured.It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. Extreme heat also eliminates the vapors (for example, the heat from a fireball spell).\nCreatures that enter the spell’s area for the first time on a turn or start their turn there must succeed on a Wisdom saving throw or become charmed until the end of their turn. A charmed creature is intoxicated by the vapor, becoming incapacitated, can speak only falteringly, and is unable to willingly leave the cloud’s area.\nConstructs, Undead, and creatures that don’t need to breathe are immune to the spell.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere increases by 20 feet for each slot level above 3rd."
};
SpellsList["exstasis og"] = {
	name: "Exstasis",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 241],
	level: 5,
	school: "Div",
	time: "1 a",
	range: "1 mile",
	components: "S",
	duration: "Conc, 1 min",
	description:"I project and control duplicate self; higher SL = more range, duration and duplicates; see B",
	descriptionFull:"You project a duplicate self, which materializes in an unoccupied point within range. The destination must be known to you, and on the same plane of existence as you. Your familiarity determines whether your second self arrives there successfully. The DM rolls a d20 and consults the table. (See Book for Teleportation Safety Book and results.)\nFor the duration, the following rules apply:\n- Your selves share the same statistics, spell slots, hit points, conditions, and equipment. \n- On your turn, you can act using any of your selves’ locations and senses. If you or your second self drops an object or gives it away, it disappears from the other location. \n- Your selves count as a single creature for spells or other abilities that target a specific number of creatures, and they can’t be targeted more than once by them. \n- If both of your selves are standing in an area created by spell or ability, for example, a Dragon’s breath weapon, both selves must make a saving throw to avoid its effects. \n- If one of your selves take damage and you aren’t incapacitated, you can use your reaction to sacrifice that self, avoiding the damage entirely.\nWhen the spell ends, you choose which of your selves you become, unless you are incapacitated. If you are incapacitated, you become the self closest to the source of your incapacitation (for example, an attacking creature or natural hazard).",
	atHigherLevels: "When you cast this spell using a spell slot of 6th, the duration is increased to 10 minutes, and the range is increased to 10 miles. When you cast this spell using a spell slot of 7th-level, you can create a third self, the duration is increased to 1 hour, and the range is increased to 100 miles. When you cast this spell using a spell slot of 8th level, the duration is increased to 8 hours, and the range is increased to 1000 miles. Using a spell slot of 9th level or higher grants a duration that doesn’t require concentration, and the range extends to any location on the plane you are upon."
	
};
SpellsList["fallow og"] = {
	name: "Fallow",
	classes: ["druid"],
	source: ["OG", 242],
	level: 2,
	school: "Trans",
	ritual: true,
	time: "1 min",
	range: "Touch",
	components:"V,S",
	duration:"max 1000 yrs",
	description:"Deposit my essence into plant or stone; enter fallow state; harder and harder to leave; see B",
	descriptionFull:"You deposit your essence within a plant or a stone large enough to contain your body. You can also deposit yourself into a stone. For the duration, you are blinded.\nAs you lie fallow, other effects set over time as noted on the following table.\nYou can rest comfortably in your hiding place, and can complete short or long rests. If you continue to remain undisturbed, you can remain in a fallow state for as long as your body is able to live. You can exit your hiding place using your action.\nIf your host plant or stone is uprooted, damaged or disturbed, you are immediately expelled from your hiding place and fallow state, and take double the damage done to your host plant or stone. You then must then succeed a Wisdom saving throw against your own spell save DC or gain the effects of the confusion spell. You can make a new saving throw on each of your turns to end the effect. See Book!",
	atHigherLevels: "You can immediately immerse yourself into a deeper fallow state by casting the spell using a higher-level spell slot as noted in the table."
};
SpellsList["fenton's flickering fists og"] = {
	name: "Fenton's Flickering Fists",
	classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 242],
	level: 0,
	school: "Evoc",
	descriptionCantripDie: "melee spell attack; hit target takes `CD`D6 force dmg and looses reaction",
	time: "1 a",
	range: "5 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "melee spell atk; target takes 1D6 force dmg on hit and looses reaction; +1D6 on CL 5, 1 and 17",
	descriptionFull: "Your hands blur, becoming able to strike a creature with devastating vibrations. Make a melee spell attack against the target. On a hit, the target takes 1d6 force damage, and they lose their reaction.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)"
};
WeaponsList["fenton's flickering fists og"] = {
	name: "Fenton's Flickering Fists",
	source: ["OG", 242],
	regExpSearch: /^(?=.*fenton)(?=.*fist).*$/i,
	type: "Cantrip",
	ability: 4,
	abilitytodamage: false,
	damage: ["C",6,"Force"],
	range: "Melee",
	description: "Target looses reaction",
	list: "spell",
	tooltip: "Your hands blur, becoming able to strike a creature with devastating vibrations. Make a melee spell attack against the target. On a hit, the target takes 1d6 force damage, and they lose their reaction.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["flourishing beanstalk og"] = {
	name: "Flourishing Beanstalk",
	classes: ["artificer", "druid", "wizard"],
	source: ["OG", 243],
	level: 2,
	school: "Trans",
	ritual: true,
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a handful of beans",
	duration: "10 min",
	description: "grow massive climbable beanstalk; radius, height, hp and duration increase with SL; see B",
	descriptionFull: "You place the beans on the ground and cause them to sprout. At the start of your next turn, they suddenly shoot upward, growing a network of vines that twist around one another, forming a mighty stalk that reaches into the sky. You must be outdoors to cast this spell. The vines rapidly grow into a 5-foot-radius, 500-foot-high cylinder, which lasts for the duration. You and creatures of your choice can climb the stalk as if you had a climbing speed equal to your movement speed.\nEach 10-foot-high section is a plant with 40 hit points and an AC of 15. It is immune to psychic damage, and vulnerable to slashing damage. If a section of the stalk is destroyed, all sections above it wither and disappear, causing any creatures above the destroyed section to fall.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the radius of the cylinder increases by 5 feet, the height increases by 500 feet, and the number of hit points for each section increases by 20 for each slot level above 2nd. If you cast this spell using a spell slot of 3rd level, the duration is 1 hour. At 4th level the duration is 8 hours. At 5th level, the duration is 24 hours. If you cast this spell using a spell slot of 6th level or higher, the spell lasts until it is dispelled, or the stalk is destroyed."
};
SpellsList["fools speech og"] = {
	name: "Fool's Speech",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["OG", 243],
	level: 4,
	school: "Illus",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a bone whistle",
	duration: "1 h",
	description: "you & six touching creat. speak secret language; incoherent to everyone else; 8h at lvl 5, 24h at lvl 6;",
	descriptionFull: "You and up to six willing creatures of your choice within range gain the ability to speak a secret language that is incomprehensible to others. The targets of the must be touching you or at least one other target of the spell when the spell is cast. For the duration, the targets can speak normally or in their secret tongue. They can speak and understand this mysterious language fluently. The language is not recognizable as any known language, nor does it resemble any to those who overhear it. A comprehend languages or tongues spell does not translate words spoken in it.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level, duration increases to 8 hours. If you use a spell slot of 6th level or higher, the duration increases to 24 hours"
};
SpellsList["fortify familiar og"] = {
	name: "Fortify Familiar",
	classes: ["wizard"],
	source: ["OG", 243],
	level: 3,
	school: "Conj",
	time: "10 min",
	range: "10 ft",
	components: "V,S,M\u2020",
	compMaterial:"charcoal, incense, and herbs worth at least 20 gp (consumed)",
	duration:"24 h",
	description:"empower a familiar with profiency, hit die, AC, damage, ability scores; see B",
	descriptionFull:"You empower a familiar in your service, keeping its current form, or altering it to new one, choosing from the options in the find familiar spell, or another form the DM has approved. The fortified familiar gains these benefits: \n- Your familiar uses your proficiency bonus rather than its own, and becomes proficient with all saving throws. \n- For each level you have gained after 3rd, your familiar gains an additional hit die and increases its hit points accordingly. \n- Your familiar’s AC and damage rolls receive a bonus equal to your proficiency bonus minus 2.\n- If you have gained the Ability Score Improvement class feature, your familiar’s abilities also improve. For each of these features you have attained, your familiar can increase one ability score of your choice by 2, or it can increase two ability scores of your choice by 1. Your familiar can’t increase an ability score above 20. Using the optional feats rule, you can forgo this feature to take a feat of your choice from the Familiar Feats list instead.\nIn combat, your empowered familiar shares your initiative count, and takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you command it otherwise (no action required). Once on your turn when you take the Attack action or cast a spell, you can command your familiar to use its reaction to make one attack, adding your spellcasting ability modifier to the damage roll on a hit. Your familiar remains empowered for the duration, after which it reverts to its usual state."
};
SpellsList["frigid wind og"] = {
	name: "Frigid Wind",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 244],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "S: 60ft line",
	components:"V,S",
	duration:"Instantaneous",
	save: "Con",
	description:"60ftx10ft line; 8d6+1d6/SL cold dmg; half on save; extinguish flames; freezes water; see B", 
	descriptionFull:"A line of strong, frigid wind 60 feet long and 10 feet wide blasts from you in a direction you choose. Each creature in the line must make a Constitution saving throw, taking 8d6 cold damage on a failed save, or half as much damage on a successful one.\nThe wind disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. If the wind passes over open water, the water freezes to a depth of 6 inches for 1 minute.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
SpellsList["frigidigitation og"] = {
	name: "Frigidigitation",
	classes: ["artificer", "druid", "sorcerer", "wizard"],
	source: ["OG", 244],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "S",
	duration: "Instantaneous",
	description: "small icy effect: snuff fire, snowflakes, frost surface, freeze 5ft cube water, icy trinket; max 3 act.; see B",
	descriptionFull: "You weave your frosty magics into a plethora of icy legerdemain. You create one of the following effects: \n- You snuff out a candle, a torch, or a small campfire.\n- You create an instantaneous, harmless effect such as a flurry of snowflakes, a shower of sleet, or a harmless spray of icy mist. \n- You chill up to 1 cubic foot of nonliving material for 1 hour. \n- You make frost appear on an object or a surface you touch for 1 minute. \n- You freeze the water within a 5-foot cube, provided there are no creatures in it. The water unfreezes in 1 hour. \n- You weave a nonmagical trinket or an illusory image of ice or snow that can fit in your hand that lasts for 1 minute.\If you cast this spell multiple times, you can have two of its non-instantaneous effects active at a time, and you can use an action to dismiss any effect it has produced."
};
SpellsList["ghastlight og"] = {
	name: "Ghastlight",
	classes: ["cleric", "wizard"],
	source: ["OG", 244],
	level: 2,
	school: "Abjur",
	ritual: true,
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "defiled oil worth at least 5 gp (consumed)",
	duration: "1 h",
	description: "obj. bright 15ft+10ft/SL, dim light 30ft+20ft/SL rad; undead in light get spell mod to save vs. fright/turn",
	descriptionFull: "You touch an object, which alights with a sickly green flame that gives off no heat, shedding bright light in a 15- foot-radius, and dim light for an additional 15 feet.\nUndead creatures within 30 feet of the lighted object that can see it gain a bonus to saving throws against being frightened and effects that turn undead. The bonus is equal to your spellcasting ability modifier. A creature can only benefit from one such light at a time.\nThe flame cannot be extinguished by water or wind, but it can be covered and hidden, or overwhelmed by the darkness spell.",
	atHigherLevels: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the radius of the bright and dim light increases by an additional 10 feet for each slot level above 1st. If you use a spell slot of 3rd level or higher, the duration is 8 hours. If you use a spell slot of 4th level or higher, the duration is 24 hours. If you use a 5th level spell slot or higher, the spell lasts until it is dispelled."
};
SpellsList["ghost armor og"] = {
	name: "Ghost Armor",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 245],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial:"a shard of battle-worn metal",
	duration:"1 h",
	description:"AC 13 + spell mod; resistance necrotic; creat. touch or melee atks me 1d4+spell mod necrotic dmg",
	descriptionFull:"You touch a willing creature and cause a haunting, magical force in the shape of a suit of armor to surround it. Until the spell ends, the target gains resistance to necrotic damage, and its AC cannot be less than 13 + your spellcasting ability modifier (minimum of 1). \nA creature that touches the bearer of the armor or hits it with a melee attack while within 5 feet of it takes necrotic damage equal to 1d4 + your spellcasting ability modifier (minimum of 1)."
};
SpellsList["ghost trap og"] = {
	name: "Ghost Trap",
	classes: ["artificer", "cleric", "paladin", "wizard"],
	source: ["OG", 245],
	level: 5,
	school: "Abjur",
	time: "1 a",
	range: "S: 60ft rad",
	components:"V,S,M",
	compMaterial:"a scrap of tulle or lace",
	duration:"Conc, 1 min",
	description:"aura moves with me; all ethereal creatures move to my plane and can't leave while in aura",
	descriptionFull:"Supernatural ripples radiate from you in an aura with a 60-foot-radius. Ethereal creatures in the area are transported to your plane and cannot return to the Ethereal Plane until the spell ends or they leave the aura’s area."
};
SpellsList["ghostly disguise og"] = {
	name: "Ghostly Disguise",
	classes: ["artificer", "wizard"],
	source: ["OG", 245],
	level: 2,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components:"V,S",
	duration:"Conc, 1 h",
	description:"I & my equip & voice appear ghostly; DC 15 Wis(Perc) within 15ft to discern; end on attack; (D)",
	descriptionFull:"You make yourself—including your clothing, armor, weapons, and other belongings on your person—appear as if you were a ghost until the spell ends or until you use your action to dismiss it. You appear to hover ever so slightly off the surface you are standing upon, and your eyes appear sunken, and the edges of your form take on a wispy, tattered. Your voice takes on a ghostly echo. If you are already under the effects of a spell that alters your form, such as disguise self or alter self, the ghostly appearance adapts to it.\nThe spell doesn’t confer any other benefits of etherealness, and actual ghosts can still detect your life force without any difficulty. You cannot fly, nor can you see or enter the Ethereal Plane. The changes wrought by this spell fail to hold up to physical inspection. For example, if a creature through a vase at you, it would bounce off your physical form.\nTo discern that your spectral appearance is an illusion, a creature within 15 feet of you can use its action to inspect your appearance and must succeed on a Wisdom(Perception) check against your spell save DC.\nThe spell ends if you attack a creature, including spells that require a spell attacks or cause damage of any kind."
};
SpellsList["gift of the soothsayer og"] = {
	name: "Gift of the Soothsayer",
	classes: ["cleric", "bard", "druid", "sorcerer", "wizard"],
	source: ["OG", 246],
	level: 0,
	school: "Div",
	time: "Special",
	range: "Special",
	components: "V,S,M",
	compMaterial: "a deck of cards, crystal ball, bones, runic stones, a haruspex, sacred oils, needles, ritual salts, tea leaves, or a pendulum",
	duration: "Special",
	description: "gain insights through divination about local area, weather, direction, an object or a person; see B",
	descriptionFull: "The spell can be cast in several ways. When you cast it, choose one from the following three versions of the spell: Auspex. The spell’s casting time is 1 action. A truth is revealed to you, choosing one of the following: \n- Sixth Sense. You learn if any space within 30 feet of you has been consecrated, desecrated, or the site of planar travel within the last 7 days. \n- True North. You learn what time it is and what direction you are facing. \n- Weathervane. You learn what the weather will be at your location for the next 24 hours. \nIf magic prevents you from learning anything, you are aware of the obstruction, but gain no special insight as to its source.\nPsychometry. The spell’s casting time is 1 minute, during which you touch a nonmagical object, becoming deaf and blind to your own senses, instead experiencing a vision the most potent memory left imprinted on the object by a creature that was touching it within the last 30 days. You gain no special insight into the identity of the creature that created the memory. \nRead Fortune. The spell’s casting time is 1 action. You touch a willing creature other than yourself, and learn two pieces of information about it, choosing from the following options: \n- Feature and Foil. You learn which ability scores are its highest and lowest.\n- Health. You learn if its total hit points are higher or lower than yours. \n- Nature. You learn your choice of its creature type, Armor Class, or total class levels (if any). \n- Skillsets. You learn two skills, tools, or weapons it is proficient with, or spells it can cast (the DM’s choice).\nIf you continue to cast the spell for 1 minute, and the target willingly remains within 5 feet of you throughout, you experience a brief vision about the target. The DM determines the exact nature of the vision, but you guide it, choosing one of the following options:\n- Provenance. You experience the moment of its birth (from its perspective) or the moment of its conception (from the perspective of a parent).\n- Memory. You experience a powerful memory of when it gained a personality trait, ideal, bond, or flaw. \n- Motivation. You experience a recent dream it had, or a great ambition it holds, or a great fear it harbors. If magic prevents you from learning anything about the target, you are aware of the obstruction, but gain no special insight as to its source."
};
SpellsList["glamoured majesty og"] = {
	name: "Glamoured Majesty",
	classes: ["cleric", "paladin", "warlock"],
	source: ["OG", 246],
	level: 2,
	school: "Illus",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Cha",
	description: "choose 3+1/SL creat in 30ft; save or charmed; dis. on atk vs. others in 30ft of me",
	descriptionFull: "You create an awe-inspiring, majestic appearance that forces others to avert their gaze from you. Choose up to three creatures of your choice within 30 feet of you that can see you must succeed on a Charisma saving throw or become charmed by you. A charmed creature has disadvantage on attack rolls they make against other creatures within 30 feet of you until the end of their next turn.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
};
SpellsList["glamourous craft og"] = {
	name: "Glamourous Craft",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 246],
	level: 5,
	school: "Ench",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Conc, 8 h",
	description:"craft quickly with advantage or enchant one masterwork item and bind one spell slot to it; see B",
	descriptionFull:"Left uninterrupted to work, you can perform incredible feats of craftsmanship. Choose from the following two options:\nHasty Craft. Designate one artisan’s tool with which you are proficient. You gain an additional action on your turn, which you can use to make an ability check using the tool, and any checks you make with the tool are made with advantage. You might complete an intricate painting, or work a stack of leather into several pairs of high-quality shoes. \nMasterwork. Alternatively, the spell can enchant a mundane item you created. When you do, your spell slot is consumed, and is lost. The item becomes magical, and gains an enchantment of your choice made from the following spells: blur, comprehend languages, enhance, elemental weapon (if a weapon), enlarge/reduce, fly, gaseous form, haste, invisibility, magic weapon (if a weapon), major image, pass without trace, or tongues. Any decisions required by the spell are made by you when you create the item. \nYou cannot use your own masterwork item, and its command word is your name. A creature who becomes attuned to the item learns the command word (even if they do not recognize its significance), and can activate it, gaining the spell’s effect, which are cast with your spell save DC. The item recharges after one day as long as you are still alive and on the same plane as the item. You can retract the item’s boon if you can see or touch it (no action required by you), recovering the spell slot when you complete your next long rest, and any creature under the effects of its magic loses it."
};
SpellsList["glass strike og"] = {
	name: "Glass Strike",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 247],
	level: 7,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components:"V,S,M",
	compMaterial:"a shard of transparent glass",
	duration:"Special",
	save:"Con",
	description:"small object or 5ft cube becomes glass; or one creature on save fail for 1 min conc; see B",
	descriptionFull:"You transform a target creature or object you can see into glass. You can cast either of these two versions of the spell: \nGlass Transmute. You transform up to 5 cubic feet of nonliving matter or a nonmagical object of equal or lesser volume into glass. Part of a larger object (such as a door or siege weapon) can be transformed by this spell. The object (or area)’s AC becomes 13, and it is vulnerable to bludgeoning and thunder damage.\nFlesh to Glass. You target a Medium or smaller creature, which must make a Constitution saving throw. On a failed save, its flesh becomes transparent and brittle. Constructs, Undead, and creatures not made of flesh are immune to the spell.\nYou concentrate for up to 1 minute, and for the duration, the target’s movement speed is reduced by half, it has disadvantage on attack rolls, it is vulnerable to bludgeoning and thunder damage, it is immune to poison and necrotic damage, and cannot become diseased.\nAdditionally, any nonmagical equipment the creature is wearing or carrying is transformed. Unless it is wearing magical armor, its AC cannot be higher than 13. If the target rolls a 1 on an attack roll with a glass weapon, it shatters and can no longer be used.\nIf the creature is physically broken while in its glass form, it suffers from similar deformities if it reverts to its original state.\nAn affected creature can repeat its saving throw at the end of each of its turns, ending the effect on a success. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to glass until the effect is removed by a dispel magic spell."
};
SpellsList["glassteel og"] = {
	name: "Glassteel",
	classes: ["artificer", "wizard"],
	source: ["OG", 247],
	ritual: true,
	level: 5,
	school: "Trans",
	time: "10 min",
	range: "Touch",
	components:"V,S,M\u0192",
	compMaterial:"a piece of fine crystal worth at least 2,500 gp",
	duration:"1 h",
	description:"5ft cube metal/wood/stone = steelglass; pick transpar.; perm if conc till end; SL7 8h; SL9 perm, no Conc",
	descriptionFull:"You touch an object or area of metal, stone, or wood, causing up to a 5-foot cube of material to become transparent as glass for the duration. Lead, gold, and platinum cannot be altered by the spell.\nYou decide how transparent or clear, opaque, or diffuse the material becomes, and if creatures other than you can see through it at all. If only you can see through the material, no actual light passes through it. If you allow others to see through it, light passes through the material normally. Although the material can have the appearance of glass, it has the strength and other material properties of the original material.\nIf you concentrate on the spell for its entire duration, the transformation becomes permanent, and the spell consumes the material component.",
	atHigherLevels: "When you cast this spell using a spell slot of 7th level, the duration increases to 8 hours. If you cast the spell using a spell slot of 9th level, the spell doesn’t require concentration, and its effects are instantaneous and permanent."
};
SpellsList["glogalas paradox og"] = {
	name: "Glogala's Paradox",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 248],
	level: 8,
	school: "Conj",
	time: "1 min",
	range: "Self",
	components: "V,S,M\u2020",
	compMaterial: "A platinum hourglass worth at least 5,000 gp filled with diamond dust worth at least 5,000 gp (the dust is consumed)",
	duration: "1 h",
	description: "go back in time up to 1 month; observe or alter; DM determines results; SL 9 duration 24h; see B",
	descriptionFull: "You disappear entirely, traveling backwards in time up to one month earlier, to a time when you had just completed a long rest. You become yourself at that moment in time, with all your memories of the following month. You assume the senses and control of your past self, allowing you to make alterations to your own past.\nYou can allow time to proceed exactly as it did, making only passive observations. Alternatively, you can make alterations of your choosing, which might affect the present. Such an event could be preparing one a different list of spells, purchasing an item, or showing mercy to a slain foe. If you have traveled through time in any other fashion in the past month, you can only return as far back as the end of your most recent temporal journey. \nWhen the spell ends, you return to your present time, at the location you cast the spell from. The DM determines the totality of the effects of your changes, including any unintended consequences or the notification of beings attuned to such alterations.",
	atHigherLevels: "When you cast this spell using a spell slot of 9th level, the duration extends to 1 day."
};
SpellsList["grounding og"] = {
	name: "Grounding",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 248],
	level: 4,
	school: "Abjur",
	time: "1 a",
	range: "S:30ft rad",
	components: "V,S,M",
	compMaterial: "an iron rod wrapped in a coil of copper wire",
	duration: "Conc, 1 min",
	description: "all in aura gain resistance vs lightning and adv. on saves vs spells and effects dealing lighting dmg",
	descriptionFull: "You create a deflection aura that protects creatures in the area from electrical energy in a 30-foot-radius sphere centered on you.\nFor the duration, creatures within the area have resistance to lightning, and have advantage on saving throws against spells and other effects that would deal lightning damage to them"
};
SpellsList["hawkeye og"] = {
	name: "Hawkeye",
	classes: ["druid", "ranger"],
	source: ["OG", 248],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V",
	duration: "Conc, 10 min",
	description: "audible 60ft; see 1mile, detail 100ft; dim light no dis.; rng atk rng +5x spell mod; Int(Invest) + Wis mod",
	descriptionFull: "You let out a cry resembling that of a hawk audible up to 60 feet away, enhancing your eyesight. For the duration, you gain the following benefits:\n- You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn’t impose disadvantage on your Wisdom (Perception) checks.\n- The range at which you can make ranged weapon attacks before suffering disadvantage on the attack roll increases by a number of feet equal to 5 × your spellcasting ability modifier.\n- You gain a bonus to Intelligence (Investigation) checks you make equal to your Wisdom modifier."
};
SpellsList["healing wave og"] = {
	name: "Healing Wave",
	classes: ["bard", "cleric", "druid"],
	source: ["OG", 249],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	description:"10d4+3d4/SL heal pool; 1st crea heal 1/2 +spell mod; 2nd 1/2 remain +spell mod; 3rd rest +spell mod",
	descriptionFull:"You create a pool of 10d4 restorative healing and channel it toward a creature you can see within range. Roll half the pool’s dice, restoring a number of hit points to the creature equal to the result + your spellcasting ability modifier.\nChoose a second creature you can see within range. Roll half the pool’s remaining dice, restoring a number of hit points to the creature equal to the result.\nChoose a third creature within range. Roll the remaining dice in the pool, restoring a number of hit points to the creature equal to the result.\nThis spell has no effect on Constructs or Undead.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the pool of restorative healing increases by 3d4 for each slot level above 3rd. If you cast the spell at 5th level or higher, you can add your spellcasting ability modifier to the second creature’s healing. If you cast the spell at 7th level or higher, you can add your spellcasting ability modifier to the third creature’s healing."
};
SpellsList["hirsutism og"] = {
	name: "Hirsutism",
	classes: ["artificer", "bard", "druid", "wizard"],
	source: ["OG", 249],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components:"V,S,M",
	compMaterial:"a drop of castor oil",
	duration:"Conc, 1 min",
	save:"Str",
	description:"willing crea chooses hair,beard,... or unwilling crea cursed with massive hair growth; see B",
	descriptionFull:"You cause hair to sprout from a target you can see within range. Constructs, Celestials, Plants, and Undead are immune to the spell. Choose from the following two versions of the spell:\nHirsute Blessing. You choose a willing target within range. The target then determines any amount hair growth they desire, including where it sprouts from, it’s density and texture. The spell results in a new hairstyle, beard, moustache, or pouf of chest hair of their own design. The hair created by the spell lasts until shorn.\nHirsute Curse. You choose a target you can see, which makes a Charisma saving throw. On a failure, the target sprouts a copious amount of thick, unruly hair all over their body. On a success, the target is unaffected.\nFor the duration, an affected target is blinded by the hair, and their movement speed is reduced by half as the tangled masses of hair catch on their equipment and anything else near to them. At the start each of an affected creature’s turns, they must succeed on a Strength saving throw or be restrained by the hair until the start of their turn. \nA creature with an Intelligence score of at least 6 that is holding an appropriate implement (for example, shears or a dagger) can use its action to shear enough hair from an affected creature’s eyes, to alleviate their blindness or restraints, but the grows so quickly that the spell’s effects resume at the end of the affected creature’s next turn.\nThe target makes a new Charisma saving throw at the end of each of its turns, ending the effect on a success. A dispel magic or remove curse spell ends the effects early. If you maintain your concentration on this spell for the entire possible duration, the hair growth becomes permanent until it is dispelled, or the creature spends an hour with shears or other bladed weapon to remove the unwanted tangles of hair from their body (or half as much time if they have assistance from another creature)."
};
SpellsList["hold portal og"] = {
	name: "Hold Portal",
	classes: ["artificer", "wizard"],
	source: ["OG", 250],
	level: 1,
	school: "Abjur",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "an iron bar at least two inches long",
	duration: "Conc, 1 h",
	description: "hold shut nonmag. entrance; max size 15+5/SL cu ft.; temp hp 1d8+1d8/SL; see B",
	descriptionFull: "You magically close and hold shut a nonmagical entrance you can see within range, holding any locking mechanisms it can have in place for the duration. The entrance must be a door, gate, window, or shutter made of wood, metal, or stone whose total area does not exceed 15 cubic feet. For the duration, the target object gains 1d8 temporary hit points and has resistance to damage from nonmagical attacks.\nA creature can attempt to force the door open by making a Strength ability check equal to your spell save DC, or the same DC the door would usually require to be forced open, adding your spellcasting ability modifier, as a bonus (minimum of 1), whichever is higher.\nA more powerful knock or dispel magic spell opens the entrance and ends the spell.",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, the temporary hit points increase by an additional 1d8 for each slot level above 1st, and the size of the spell door it can hold increases by 5 cubic feet."
};
SpellsList["humanoid possession og"] = {
	name: "Humanoid Possession",
	classes: ["warlock"],
	source: ["OG", 250],
	level: 7,
	school: "Ench",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a fragment of an oyster’s shell and a piece of the target’s body (hair, blood, or fingernail)",
	duration: "Conc, 10 min",
	save: "Cha",
	description: "posses humanoid's; hostile has adv. on save; enter body; target aware; repeat save 1 min; see B",
	descriptionFull: "You touch one Humanoid you can see within range, forcing it to make a Charisma saving throw. If the target is hostile to you, it makes its saving throw with advantage, and it succeeds automatically if it is under the effect of a ring of mind shielding, the glibness or mind blank spells or similar magic. On a success, the spell is lost, and you have disadvantage on any saving throw the target forces you to make until the end of your next turn. On a failure, the target is charmed, and your essence, body, and all your equipment enter the creature’s consciousness.\nFor the duration, you control the target’s body, although target’s consciousness remains aware of what its body is doing. You have total cover, and can’t be targeted by any attack, spell, or other effect, except ones that turn Fey. You retain your alignment and Intelligence, Wisdom, and Charisma scores, and the possessed body retains its Strength, Dexterity and Constitution scores. You do not gain access to the target’s knowledge, proficiencies, spellcasting, or other abilities. You have advantage on Wisdom (Insight) checks you make against the target.\nOnce each minute the target can attempt to wrestle control of itself back by making a new saving throw. If the target’s body is in combat, they can make a new saving throw at the end of each of your turns, ending the spell on a success. If the target’s body takes damage, you take an equal amount as psychic damage.\nThe possession lasts for the duration, until the target is reduced to 0 hit points, until you are otherwise forced out by the dispel evil and good spell or similar magic, or until you end exit the body using a bonus action. When the spell ends, you reappear in an unoccupied space within 5 feet of the target and the target becomes immune to your possession for 24 hours.",
	atHigherLevels:"If you cast this spell using a spell slot of 9th level, the duration is 1 hour, and an affected target makes their saving throw to break the effect and reassert control over their body only once every ten minutes."
};
SpellsList["hunter's mercy og"] = {
	name: "Hunter’s Mercy",
	classes: ["ranger"],
	source: ["OG", 251],
	level: 1,
	school: "Div",
	time: "1 bns",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 rnd",
	description: "I gain adv on first weapon hit vs. one beast or fav enemy type I can see in range; first hit is crit",
	descriptionFull: "You are filled with the memories and experience of generations of hunters. Choose a Beast (or a creature of a type that matches your Favored Enemy feature, if you have it) that you can see within range. Until the spell ends, you gain unique insight into the target’s weaknesses. Until the end of your next turn, the first hit you make with a weapon attack against your designated target is a critical hit."
};
SpellsList["hypothermia og"] = {
	name: "Hypothermia",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 251],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description:"8d8+1d8/SL cold dmg, half speed, dis. chk, atk, dex save; half dmg on save, no effect; see B",
	descriptionFull:"You target a creature you can see within range, and an icy rime covers their body and equipment, draining heat away from them. The target makes a Constitution saving throw, taking 8d8 cold damage on a failure, or half as much on a success. Creatures that have resistance to cold damage, or that are adapted to extreme cold as described in Chapter 5 of the Dungeon Master’s Guide have advantage on their saving throw. Constructs and creatures immune to cold damage are immune to the spell. If the target is within 5 feet of an open flame, they make saving throws against the spell with advantage. Creatures that fail their saving throw suffer an ongoing chilling sickness. Their movement speed is halved, and they have disadvantage on ability checks, attack rolls and Dexterity saving throws. An affected target can repeat their saving throw at the end of each of their turns, ending the effects on a success.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
};
SpellsList["ice blade og"] = {
	name: "Ice Blade",
	classes: ["druid"],
	source: ["OG", 251],
	level: 2,
	school: "Evoc",
	time: "1 bns",
	range: "Self",
	components:"V,S,M",
	compMaterial: "leaf of hellebore",
	duration:"Conc, 10 min",
	description:"evoke icy scimitar; melee spell atk. for 3d6+1d6/2SL and movement -10ft; re-summon with bns a",
	descriptionFull:"You evoke an icy blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use your action to make a melee spell attack with the icy blade. On a hit, the target takes 3d6 cold damage, and its movement speed is reduced by 10 feet until the end of its next turn.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
};
WeaponsList["ice blade og"] = {
	name: "Ice Blade",
	source: ["OG", 251],
	regExpSearch: /^(?=.*ice)(?=.*blade).*$/i,
	type: "Spell",
	ability: 5,
	abilitytodamage: false,
	damage: ["3",6,"Cold"],
	range: "Melee",
	description: "+1D6/2SL cold dmg; Target -10ft speed until end of their next turn; bns a to re-summon",
	list: "spell",
	tooltip: "You evoke an icy blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.\nYou can use your action to make a melee spell attack with the icy blade. On a hit, the target takes 3d6 cold damage, and its movement speed is reduced by 10 feet until the end of its next turn.\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
};
SpellsList["icicle og"] = {
	name: "Icicle",
	classes: ["artificer", "druid", "sorcerer", "wizard"],
	source: ["OG", 252],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "10 min",
	save: "Dex",
	description: "first enter 5ft sq area 2d12 pierc and restr.; 1/2 on save, not restr.; 2d6 cold in 5ft; 1/2 on save; see B",
	descriptionFull: "You create several large, crystal-clear icicles on 5-foot-diameter surface on a ceiling, doorway, or similar overhang within range. When a creature walks beneath the icicles, they fall, and the creature beneath them must make a Dexterity saving throw. On a failure, the creature takes 2d12 piercing damage and is restrained until the start of their next turn. On a success, they take half as much damage and aren’t restrained.\nAdditionally, creatures within 5 feet of the creature that triggered the icicles’ fall must also make a Dexterity saving throw, taking 2d6 cold damage on a failure or half as much on a success.\nCreatures of your choice can safely traverse the overhang without triggering the spell. You can dismiss the icicles using your reaction.\nTo discern the presence of the icicles, a creature that can see them can use its action to inspect the area, and must succeed on a Wisdom (Perception) check against your spell save DC.\nThe icicles have an AC of 13 and 10 hit points, and are vulnerable to fire damage.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can choose to increase the piercing damage by 1d12, or the cold damage by 1d6 for each slot level above 2nd. Additionally, the number of hit points the icicles have increases by 5 for each slot level above 2nd."
};
SpellsList["icy sheet og"] = {
	name: "Icy Sheet",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 252],
	level: 3,
	school: "Evoc",
	time: "1 bns",
	range: "Special",
	components: "V,S",
	duration: "Instantaneous",
	description: "create 5ft sq, 1ft high ice sheet while moving 10ft; do that spell mod times; last 1 min; see B",
	descriptionFull: "You move 10 feet in any direction, up to a number of times equal to your spellcasting ability modifier (minimum of 1), creating a 5-foot-square, 1-foot-thick sheet of ice in your wake. This movement does not provoke attacks of opportunity. You can end your movement on any side of the resulting sheet. If the sheet cuts through a creature’s space when it appears, the creature within its area is pushed to one side of the wall of your choice. The ice can be clear or opaque (your choice), but each section must have the same opacity.\nThe sheet lasts for 1 minute or until it is destroyed. The sheet is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of sheet to 0 hit points destroys it, and if a section is destroyed that leave any other section unsupported or unsuspended, those sections are also destroyed.\nA medium or smaller creature attempting to climb the sheet must succeed on a Strength (Athletics) check equal to your spell save DC or fall prone, even if the creature has a climbing or is under the effects of the spider climb spell.\nA Medium or smaller creature attempting to climb the sheet as if climbing a wall must succeed on a Strength (Athletics) check equal to your spell save DC or fall prone, even if the creature has a climbing speed or is under the effects of the spider climb spell.\nA Medium or smaller creature attempting to traverse the sheet’s flat surface area for the first time on a turn or that starts its turn upon it must make a Dexterity saving throw. On a failed save, it falls prone."
};
SpellsList["immaculate conception og"] = {
	name: "Immaculate Conception",
	nameShort: "Immacul. Conception",
	classes: ["cleric", "sorcerer", "wizard"],
	source: ["OG", 253],
	level: 6,
	school: "Trans",
	ritual: true,
	time: "1 h",
	range: "10 ft",
	components: "V,S,M",
	compMaterial: "a meal prepared by the spell’s targets",
	duration: "Special",
	description: "2+1/SL willing creatures conceive offspring; secret D20 roll decides number of offspring; see B",
	descriptionFull: "You bind two willing creatures you can see within range together, comingling their essences, and calling forth a new life into the world, whose parents are the targets of the spell. This spell must be cast under a full moon.\nWhile the spell is being cast, the targets must maintain physical contact with one another, consuming the meal they have prepared by feeding it to one another. During the casting, one of the targets must declare their intent out loud to carry the child to be created by the spell. When the spell is cast, the DM rolls a d20 and adds the half the Charisma modifier of the creature who wishes to carry the child as a bonus to the roll. The DM makes this roll in secret, consulting the following table:\nResults\n-1–5 Conception does not occur, and the targets must wait until the next full moon to make another attempt at conception using this spell.\n-5–18 A single child is conceived.\n-19–20 Twins are conceived.\n-21+ For each value in excess of 20, an additional child is conceived.\n\nThe spell can produce offspring from creatures that cannot normally produce offspring together. For example, a dwarf and a gnome, a dragon and a human, or a devil and an elf. Even an awakened bear and an awakened owl, if they consent to the spell, might produce an owlbear cub.\nThis spell also renders creatures that are not normally able to carry or deliver offspring able to do until such time as the child is born or lost. They grow a womb and any other required anatomy to deliver the child (or lay the egg). The gestation (and/or incubation) period and exact nature of the offspring are entirely up to the DM.",
	atHigherLevels: "At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the spell can incorporate one additional parent whose essence contributes to the child’s parentage for each slot level above 6th."
};
SpellsList["indefinite suspension og"] = {
	name: "Indefinite Suspension",
	classes: ["cleric", "sorcerer", "wizard"],
	source: ["OG", 253],
	level: 7,
	school: "Abjur",
	ritual: true,
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a hunk of amber with an insect preserved inside",
	duration: "Special",
	save: "Cha",
	description:"1 crea on save 4d10 force dmg, on fail stunned 1 trn; save again; fail petrified for 1-10min; see B",
	descriptionFull:"You touch a Large or smaller creature and attempt to suspend them in time. The target makes a Charisma saving throw, taking 4d10 force damage on a success. On a failure, the creature begins to untether itself from the timeline and is stunned. At the start of its next turn, it is no longer stunned, and makes another Charisma saving throw. On a success, the spell ends. On a failure, the creature is suspended in time.\nTo determine the number of minutes the creature stays suspended, the DM rolls a 1d10 in secret. For the duration, the creature is petrified, and nothing, not physical objects, energy, or other spell effects, can affect it. The creature is immune to all damage, and can’t be damaged by attacks or effects originating from outside. A creature can choose to willingly fail any of these saving throws.",
	atHigherLevels:"If you cast this spell using a spell slot of 8th level, the duration is measured in hours. If you cast this spell using a spell slot of 9th level, the duration is measured in days."
};
SpellsList["infestation of maggots og"] = {
	name: "Infestation of Maggots",
	classes: ["druid", "warlock"],
	source: ["OG", 254],
	level: 2,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components:"V,S,M",
	compMaterial: "several dead flies",
	duration:"Conc, 1 min",
	save: "Con",
	description:"poison 1 (3SL:2;5:3,7:4) crea on save fail 1d6+1d6/SL+spell mod necro dmg; repeat as bns; see B",
	descriptionFull:"You exhale a foul-smelling stench of decay, which winds its way onto a creature you can see within range. The target makes a Constitution saving throw. On a failure, the target is poisoned for 1 minute, and hundreds of writhing maggots burst forth from its flesh, dealing necrotic damage equal to 1d6 + your spellcasting modifier. Creatures that lack flesh (for example, a skeleton or iron golem) are immune to the spell.\nCreatures with immunity to poison only are only exempt from the spell’s poisoning effects, and can still find their flesh devoured by the maggots (for example, a flesh golem).\nFor the duration, you can use a bonus action to inspire hunger in the maggots, dealing an additional 2d6 necrotic damage to the target.\nA poisoned creature repeats their saving throw at the end of each of their turns, ending the effect on a success. The spell’s effects end on a creature it if recovers any of its missing hit points.",
	atHigherLevels:"When you cast this spell using a spell slot of 3rd level or higher, the damage for each of its effects increases by 1d6 for each slot level above 2nd. If you use a spell slot of 3rd level or higher, you can target two creatures with the spell. If you use a spell slot of 5th level or higher, you can target three creatures with the spell. If you use a spell slot of 7th level or higher, you can target four creatures with the spell."
};
SpellsList["investiture of starlight og"] = {
	name: "Investiture of Starlight",
	classes: ["druid"],
	source: ["OG", 254],
	level: 6,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "hover, all enter/start turn 5ft of me save or blind, bns a: telep, a: 4 range spell attack for 1d8 rad dmg",
	descriptionFull: "Your body emits intense starlight, shedding bright light in a 30-foot radius, and dim light for an additional 30 feet for the spell’s duration. This light is sunlight. Until the spell ends, you gain the following benefits:\n- You can use a bonus action to teleport up to your movement speed to an unoccupied space that you can see.\n- You gain the ability to hover.\n- Any creature that moves within 5 feet of you for the first time on a turn, or starts its turn there must make a Constitution saving throw. On a failure, creature becomes blinded until the end of their turn.\n- You can use your action to create four motes of starlight, which immediately assail creatures of your choice you can see within 90 feet of you. Make a separate ranged spell attack for each mote. On a hit, a mote deals 1d8 radiant damage."
};
SpellsList["invisible trickery og"] = {
	name: "Invisible Trickery",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["OG", 254],
	level: 3,
	school: "Illus",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "end turn 1D20: 11+ invis unt. nxt trn; I atk,cast,react ends invs; spell mod (min 2) invis: spell ends; see B",
	descriptionFull: "For the duration, roll a d20 at the end of each of your turns. On a roll of 11 or higher, you become invisible until the start of your turn. Anything you are wearing or carrying is invisible as long as it is on your person. Your invisibility ends early if you attack a creature, cast a spell, or use your reaction.\n Once the spell causes you to become invisible twice or a number of times equal to your spellcasting ability modifier (whichever is higher), the spell ends at the start of your next turn when your invisibility expires."
	};
SpellsList["jinx og"] = {
	name: "Jinx",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 254],
	level: 2,
	school: "Ench",
	time: "1 bns",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Conc, 1 h",
	description: "1 crea disv on chk with 1 ability; 1/trn and 1/react if atk or cast spell Dex Save or 2d8 thdr dmg; see B",
	descriptionFull: "You curse one creature you can see, jinxing them. Until the spell ends, each time the target takes the Attack action or casts a spell, they must succeed a Dexterity saving throw or take 2d8 thunder damage. A creature can only suffer this damage once on their turn, but can be jinxed again if they cast a spell or make an attack of opportunity using their reaction.\nAlso, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. A remove curse spell or similar magic ends the spell.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
};
SpellsList["leeocks lucky coin og"] = {
	name: "Leeock's Lucky Coin",
	classes: ["artificer", "bard", "sorcerer", "warlock"],
	source: ["OG", 254],
	level: 0,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "S, M",
	compMaterial: "a metal coin",
	duration: "Instantaneous",
	descriptionCantripDie: "rng spell attack for `CD`D6 + spell mod bludg dmg; ignore 1/2 cover; 3/4 cover = 1/2 cover",
	description:"rng spell atk for 1D6 + spell mod bludg dmg; ign. 1/2 cover; 3/4 cover = 1/2 cover; +1D6 at CL 5,11,17",
	descriptionFull:"You fling a coin toward a creature you can see within range. Make a ranged spell attack, ignoring half cover, and treating three-quarters cover as half cover. On a hit, the target takes 1d6 + your spellcasting ability modifier bludgeoning damage. At the end of your turn, the coin bounces back into your hand or pocket.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["leeocks lucky coin og"] = {
	name: "Leeock's Lucky Coin",
	source: ["OG", 242],
	regExpSearch: /^(?=.*leeock)(?=.*lucky)(?=.*coin).*$/i,
	type: "Cantrip",
	ability: 4,
	abilitytodamage: true,
	damage: ["C",6,"Bludgeoning"],
	range: "30ft",
	description: "Ignore 1/2 cover; Treat 3/4 cover as 1/2 cover",
	list: "spell",
	tooltip: "You fling a coin toward a creature you can see within range. Make a ranged spell attack, ignoring half cover, and treating three-quarters cover as half cover. On a hit, the target takes 1d6 + your spellcasting ability modifier bludgeoning damage. At the end of your turn, the coin bounces back into your hand or pocket.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["lifebloom og"] = {
	name: "Lifebloom",
	classes: ["druid", "ranger"],
	source: ["OG", 255],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "30 ft",
	components:"V,S,M",
	compMaterial: "a fresh sprig of local flora",
	duration:"Instantaneous",
	description:"20ft rad sphere; heal 3d6+1d6/SL; beast,fey,plant +spell mod heal, rest only if DC10 Cha ab. chk; see B",
	descriptionFull:"You draw pure life force from the Feywild, sharing it with your allies. You create 20-foot-radius sphere filled with pure life force centered on a point you can see within range. Each creature of your choice that you can see in the area regains 3d6 hit points and makes a DC 10 Charisma ability check. If they succeed, they add your spellcasting modifier to the amount healed. Beasts, Fey and Plants automatically succeed this check. This healing has no effect on Constructs or Undead.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet and the healing increases by 1d6 for each slot level above 4th."
};
SpellsList["lipstitch og"] = {
	name: "Lipstitch",
	classes: ["sorcerer", "wizard", "warlock"],
	source: ["OG", 255],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "curse a crea mouth shut; only mumble, no verbal spells; threads can be attacked or cut; see B",
	descriptionFull: "You speak a rebuking word and make a matching gesture. Choose a creature you can within range. The target must make Constitution saving throw. On a failure, the target becomes cursed, taking 2d4 piercing damage, and its mouth is sewn shut by a sinuous thread.\nIf the creature has multiple mouths, you choose which one to close. A cursed mouth can produce only muffled sounds, it cannot produce speech or the verbal components of spellcasting, and it is unable to make biting attacks. Constructs and creatures without a mouth are immune to the spell.\nThe threads have an AC equal to your spell save DC, and a number of hit points equal to 1d4 + your spellcasting ability modifier. If you can see the target, you can use a bonus action to restore a number of hit points to the threads equal to 1d4 + your spellcasting ability modifier. \nAn affected creature can use its action on its turn to make a Strength saving throw. On a success, they to burst through the stitches. Alternatively, a creature can use its action and an appropriate implement to cut the threading away. Damaging or destroying destroy the threads causes the target to take 1d4 slashing damage. Additionally, a creature can spend 1 minute and make a medicine check whose DC equals your spell save DC to remove the thread harmlessly.\nIf the threads are burst, reduced to 0 hit points, removed, or dispelled, the spell ends. A lesser restoration or remove curse spell also ends it.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage for each of its effects and the number of hit points of the threads increases by 1d4 for each slot level above 3rd. If you cast this spell using a spell slot of 4th level, the duration is concentration, up to 1 hour. If you use a spell slot of 5th level, the duration is 8 hours. If you use a spell slot of 6th level, the duration is 24 hours. If you use a spell slot of 7th level, the duration is 10 days. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn’t require concentration."
};
SpellsList["lloyds beacon og"] = {
	name: "Lloyd's Beacon",
	classes: ["artificer", "bard", "cleric", "wizard"],
	source: ["OG", 256],
	level: 4,
	school: "Conj",
	ritual: true,
	time: "1 min",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "create beacon for teleport which lasts 1 year or teleport myself + 5 creatures to a beacon; see B",
	descriptionFull: "When casting the spell, choose from the following two options:\nLight. You light a non-magical object, such as a candle, a lantern, lamp, brazier, or torch with a magical flame, which gives off a bright light for 10 feet and dim light for an additional 10 feet. The flame provides no heat and does not consume the object’s substance, burning silently for up to 1 year. If you light a second beacon, the first extinguishes itself. A creature can use its action to extinguish the flame.\nRecall. The spell transports you and up to five willing creatures of your choice within range. You instantaneously appear within 30 feet of the beacon’s location. You must be on the same plane as the beacon you have lit to use this option."
};
SpellsList["londyns duet og"] = {
	name: "Londyn's Duet",
	classes: ["bard"],
	source: ["OG", 256],
	level: 2,
	school: "Conj",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a metal coin with two identical sides",
	duration: "Conc, 10 min",
	description:"create a duplicate of myself for performance or combat support; see Book",
	descriptionFull:"You create a translucent duplicate of yourself, which shares your personality, which appears within 5 feet of you, or the nearest unoccupied space. You can use it to perform a duet or a two-person comedy routine together, or to support you and your allies in combat. The duplicate looks exactly like you, and has your equipment.\nYou can determine the appearance of its clothing, but its face must be visible.\nThe duplicate knows all the japes, songs that you do, and shares proficiencies with musical instruments that you possess. While the duplicate is within 30 feet of you, you have advantage on Charisma (Performance) checks you make, and the duplicate accompanies and harmonizes with you.\n- The duplicate has an AC of 11 + your spellcasting ability modifier. It is immune to the charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, and restrained conditions, and it is immune to attacks of opportunity and to psychic damage. If it is forced to make any saving throw, it uses your proficiency bonus and adds your spellcasting ability modifier to the roll.\n- Your duplicate speaks and understands the languages that you do, and while it is within 1 mile of you, you can communicate with each other telepathically. If your duplicate takes damage, you take half the amount as psychic damage.\n- Your duplicate cannot interact with objects other than its possessions that were created by the spell. It cannot make ability checks or cast spells.\nYou can use a bonus action to cause your duplicate to perform one the following:\n- You command the duplicate to move up to 30 feet and make one weapon attack. The duplicate’s weapon must have been upon your when you cast the spell, and it gains no bonuses from being magical. Make a melee or ranged spell attack that matches the melee or ranged properties of the weapon. If it hits, it deals force damage equal to the weapon’s damage die + your spellcasting ability modifier.\n- You expend a use of your bardic inspiration, granting the die to a creature within 60 feet of the duplicate that can hear it.\n- You command the duplicate to take the Dodge action, or to move up to 60 feet.\nIf your duplicate travels more than 1 mile away from you, the spell ends.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, damage of its weapon attacks increases by 1d6 for each slot level above 2nd. If you use a spell slot of 3rd level, the duration increases to 1 hour. If you use a spell slot of 5th level or higher, the duration increases to 8 hours."
};
SpellsList["longlimb og"] = {
	name: "Longlimb",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 257],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a length of rubber",
	duration: "Conc, 1 min",
	description:"extend arms for +10+5/SL ft reach or legs for +15+5/SL ft speed and triple jump distance",
	descriptionFull:"You touch a willing creature, causing one pair of limbs to grow two beyond their normal length and become flexible until the end of your next turn. Choose one of the following: \nArms. The target’s reach is increased by 10 feet.\nLegs. The creature’s walking speed is increased by 15 feet, and their jump distance is tripled.",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, the target’s reach or movement speed is increased by 5 feet for each slot level above 1st."
};
SpellsList["luck og"] = {
	name: "Luck",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 257],
	level: 3,
	school: "Div",
	time: "1 a",
	range: "Touch",
	components:"V,S,M",
	compMaterial: "a four-leaf clover or rabbit’s foot",	
	duration:"Conc, 1 min",
	description:"crea gains 2+1/SL luck points to re-roll chk,atk,save or gain adv. or use react to re-roll dmg die; see B",
	descriptionFull:"You touch a willing creature and imbue them with good fortune. For the duration, the target gains 2 Luck points, which last for the duration. When the recipient makes an ability check, attack roll, or saving throw, they can spend a Luck point to gain advantage on the roll. They can also use their reaction to expend a Luck point to reroll a number of damage dice for a spell or weapon attack up to your spellcasting ability modifier (minimum of 1), and accept either result.\nOnce the target spends a Luck point, they cannot spend another until the start of their next turn.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the target gains 1 additional Luck point for each slot level above 3rd."
};
SpellsList["lunar occult og"] = {
	name: "Lunar Occult",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: ["OG", 257],
	level: 7,
	school: "Conj",
	time: "1 min",
	range: "Special",
	components: "V,S,M\u0192",
	compMaterial: "a handful of meteoric iron worth at least 125 gp",
	duration: "Conc, 1 h",
	description: "block sunlight in 10 mile rad; 1st min dim light, then darkness; look at corona: Con save or blind; see B",
	descriptionFull: "You cause an astral object to materialize high in the sky, interposing itself between the sun and the land. This spell must be cast during the day. The conjured object blocks sunlight in a 10-mile radius centered on the point where you cast the spell. Immediately, sunlight becomes dim light. After 1 minute has passed, the area is plunged into a darkness as the sun is eclipsed by the object.\nA bright corona of sunlight is still visible around the object, and creatures who look directly at the object must succeed on a Constitution saving throw or be blinded until the end of their next turn",
	atHigherLevels: "When you cast this spell using a spell slot of 8th level or higher, duration is increased to 8 hours. If you use a spell slot of 9th level, the duration increases to 24 hours. Casting the spell using an 8th level spell slot or higher grants a duration that doesn’t require concentration."
};
SpellsList["magic miasma og"] = {
	name: "Magic Miasma",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 257],
	level: 7,
	school: "Abjur",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "a tiny pillow of fine quilted silk",
	duration: "Conc, 1 min",
	description: "30ft rad, 10ft high; heavy obsc.; atks within or pass. through <=spell DC: lost; disr. spells; slow fall; see B",
	descriptionFull: "You create A 30-foot-radius, 10-foot-high cylinder of billowing, sparkling, purple mist centered on a point within range, emitting dim light in a 5-foot-radius. The cylinder spreads around corners, and its area is heavily obscured. It lasts for the duration.\nIn addition to obscuring sight, the miasma is so thick that the area is difficult terrain. Melee attack rolls made from within it (or ranged attack rolls whose projectiles pass through it) whose results are less than your spell save DC are lost.\nA creature or object that falls through the miasma is slowed, so that each 10 feet of the miasma that it passes through reduces falling damage by 1d6.\nAdditionally, the miasma disrupts spells cast by creatures that are entirely inside it. When a creature attempts to cast a spell from within the miasma, they must make a spellcasting ability check. If the results are lower than your spell save DC, the spell is lost.",
	atHigherLevels: "When you cast this spell using a spell slot of 8th level or higher, the radius of the cylinder increases by 30 feet and the height increases by 10 feet for each slot level above 7th."
};
SpellsList["magnetism og"] = {
	name: "Magnetism",
	classes: ["artificer", "wizard"],
	source: ["OG", 258],
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M\u0192",
	compMaterial: "a horseshoe-shaped piece of magnetic iron coated in mithril worth at least 250 gp",
	duration: "Conc, 1 min",
	description:"one obj, 10 cu ft of mat., becomes magnetic; pulls unatt. obj and creat w/ metal armor/weapon; see B",
	descriptionFull:"You cause an object made of nonmagical stone or metal you can see within range to emit a powerful magnetic field. Up to 10 cubic feet of material can be affected (for example, a section of stone wall). For the duration, the object attracts all other nonmagical ferrous metals within 60 feet of itself.\nWhen you cast the spell, and at the start of each of your turns, the object pulses with magnetic force. Any Large or smaller metal objects that aren’t being worn or carried move 30 feet toward the magnet, and Large or smaller creatures in the area that are wearing metal armor or carrying metal weapons must make a Strength saving throw. On a failure, they fall prone, are disarmed of their metal weapons, and are pulled 30 feet toward the magnetized object. If they collide with a creature or object during this movement, they are treated as if they were falling the same distance.\nOn a successful saving throw, the target is unaffected, but their movement speed is reduced by half. A creature can use its action on its turn to prepare for the next pulse, gaining advantage on their next saving throw.\nA creature wearing metal armor who touches the magnet is restrained for the duration of the spell, and such creatures are likewise affected if they are touching another armored creature who is touching the magnet."
};
SpellsList["magnetokinesis og"] = {
	name: "Magnetokinesis",
	classes: ["artificer", "wizard"],
	source: ["OG", 258],
	level: 6,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a lodestone and a piece of iron wire",
	duration: "Conc, 10 min",
	description: "grasp metallig object or large or smaller creature; move/damage each round as action; see B",
	descriptionFull: "You gain the ability to move or manipulate objects made of ferrous metal by thought. When you cast the spell, and as your action each round for the Duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.\n\nCreature. You attempt to grip a Large or smaller creature that is wearing armor or shield made of nonmagical ferrous metal. The target makes a Strength saving throw. If it fails, it is restrained, and you can immediately move the creature up to 30 feet in any direction, including upward, but not beyond the range of this spell. A creature lifted upward is suspended in mid-air by your grasp.\nWhile the target remains in your grasp, you can use an action to crush its armor (or shield) and the target’s body within, dealing 2d12 bludgeoning damage to the target. When you do, the target’s armor (or shield) takes a permanent and cumulative -1 penalty to the AC it offers.\nOn each of its turns, the affected creature can use its action to attempt to escape your grip by making a new Strength saving throw, ending the spell early on a success.\n\nObject. You can try to move an object made of nonmagical ferrous metal that weighs up to 250 pounds.\nIf the object isn’t being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.\nIf the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature’s Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell. You can exert fine control on objects you control, such as manipulating a simple tool, or pouring the contents from a goblet.\nAny creature in the path of a Small or larger object you are moving must succeed on a Strength saving throw or take 1d12 bludgeoning damage and be knocked prone.\nOn subsequent turns, you can use your action to move the object again, or to crush it by making a ranged spell attack. If it hits, you deal 3d6 force damage to the object.\nIf the object is a weapon, you can use a bonus action to move the weapon up to 30 feet make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes damage equal to the weapon’s damage dice + your spellcasting ability modifier. The damage type matches that of the weapon.\nA creature within 5 feet of the object can use their action on their turn to make a Strength ability check against your spellcasting ability. If they succeed, they gain control of the object and the spell ends."
};
SpellsList["major glamour og"] = {
	name: "Major Glamour",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 259],
	level: 4,
	school: "Trans",
	ritual: true,
	time: "1 min",
	range: "Self",
	components: "V,S,M\u2020",
	compMaterial: "an uncut ruby, emerald or sapphire worth at least 500 gp, which the spell consumes",
	duration: "Conc, 1 h",
	description: "I transform into a living humanoid or beast; longer duration and no conc at higher SL; see B",
	descriptionFull: "You transform yourself into a living creature. For the duration, you are Fey and are also the creature type you transformed into. A hostile creature can use its action to make an Intelligence (Investigation) check against your spell save DC. If they succeed, you must make a concentration check to maintain your form. Choose one of following two creature types:\n\nGlamourous Humanoid. You become a human, half-elf, halfling, gnome or elf that is not a drow. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. None of your statistics change. Additionally, you can become proficient with one skill, tool, armor, or weapon of your choice for the duration.\n\nGlamourous Beast. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. You become a Tiny, Small, or Medium Beast of great beauty, perfectly suited to the target’s aesthetics, such as a colorful bird, a white stag, or a silvery fish. You can cast the message cantrip at will with the target as a recipient, and make Charisma (Persuasion) and Charisma (Performance) checks against them with advantage. You gain the traits of your chosen form, and can fly, swim, or breathe water as applicable, but cannot speak, cast spells, make attacks, or use any class abilities. If you take damage, you must succeed a concentration check to maintain the transformation.",
	atHigherLevels: "If you cast this spell using a spell slot of 5th level, the duration is 8 hours. The duration is 24 hours at 6th level, 72 hours at 7th level, and one week at 8th level. At 9th level, you can maintain your transformation indefinitely. Using a spell slot of 5th level or higher grants a duration that doesn’t require concentration, and using of a spell slot of 7th level or higher makes your transformation invisible to the effects of the detect magic spell.\nNo matter the spell slot expended, if you are damaged during your transformation, you must roll a concentration check to maintain it"
};
SpellsList["mass distortion og"] = {
	name: "Mass Distortion",
	classes: ["artificer", "wizard"],
	source: ["OG", 259],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a lead sphere at least 1 inch in diameter",
	duration: "24 h",
	description: "alter 5ft cu obj + contents by 5 times; decrease for me or increase for all other; perm if re-cast for 30d",
	descriptionFull: "You touch one nonmagical object no larger than a 5-foot cube, altering its apparent weight for you or for others.\nThe effect lasts for the duration. When you cast the spell, choose one of the following effects:\n\nMass Decrease. When handled by you, the apparent weight of the object is five times less, as are any contents that are inside it (if the object is a container). Any other creature handling the object experiences its normal weight.\n\nMass Increase. When handled by any creature other than you, the apparent weight of the object, and any contents that are inside it (if the object is a container) are five times their normal weight. \n\nIf you cast this spell on the same object every day for 30 days, placing the same effect on it each time, the spell’s effects last until it is dispelled."
};
SpellsList["melfs unicorn arrow og"] = {
	name: "Melf's Unicorn Arrow",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 259],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M\u0192",
	compMaterial: "a unicorn's horn or a nightmare's hoof worth at least 250 gp",
	duration: "Instantaneous",
	description: "rng spell atk; 5d12+1d12/SL rad or nec dmg; push 15ft; ignore 1/2 cover and dim light; see B",
	descriptionFull: "You release a spectral arrow from your hand, which becomes the shimmering, transparent form of a unicorn or nightmare (your choice), which rushes toward a creature of your choice that you can see. Make a ranged spell attack, ignoring up to half cover, or dim light if the target is not fully illuminated by your vision.\nOn a hit, the target takes 5d12 damage and is pushed 15 feet away from you. The damage is radiant if the arrow becomes a unicorn and necrotic if the arrow becomes a nightmare.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd. When you cast this spell using a spell slot of 5th level or higher, you can create two arrows with it. If you use a spell slot of 7th level or you can create three arrows. If you use a spell slot of 9th level, you can create four arrows. Each additional arrow you create must target a different creature"
};
SpellsList["metamorphose liquid og"] = {
	name: "Metamorphose Liquid",
	classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],
	source: ["OG", 260],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,M",
	compMaterial: "a drop of the target liquid",
	duration: "Instantaneous",
	description: "change max 1 gal (SL2: 15, SL3: 50) of nonmag. liquid; can neutralize liquid poisons; can't be in creature",
	descriptionFull: "You transmute up to one gallon of nonmagical liquid into an equal amount of a different, nonmagical liquid (for example, water into wine, blood into oil, or beer into urine). You must dip at least one finger into the target liquid for the spell to take effect. Liquid poisons can also be neutralized by this spell. The liquid must not be inside a creature for the spell to take effect.",
	atHigherLevels: "When you cast this spell using a spell slot of 2nd level, you can transmute up to 15 gallons of liquid (a keg). If you use a spell slot of 3rd level, you can transmute up to 50 gallons of liquid (a barrel)."
};
SpellsList["minor glamour og"] = {
	name: "Minor Glamour",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 260],
	level: 3,
	school: "Trans",
	ritual: true,
	time: "1 a",
	range: "Self",
	components: "S, M\u2020",
	compMaterial: "a hunk of jade or malachite worth at least 250 gp which the spell consumes",
	duration: "Conc, 8 h",
	description: "I transform into obj smaller th. me; can't move,cast,atk, have disadv. wis(per) chks; revert on dmg; see B",
	descriptionFull: "You transform yourself into an object up to one size category smaller than yourself. While in an object form, you cannot move, attack, or cast spells but you remain aware, and make any Wisdom (Perception) checks with disadvantage. If your object form is damaged, you immediately revert to your natural form, appearing prone in the nearest unoccupied space, and taking 2d8 force damage.\nTo discern that you are transfigured, a creature can use its action to make an Intelligence (Investigation) check against your spell save DC. If they succeed, you must succeed a concentration check to maintain your disguised form.\nYou can remain in your object form for the duration, or revert to your form on your turn (no action required).\nChoose one the following two object types:\n\nMundane Object. You become a mundane object. For example, a bundle of rags if you are small, or a wooden chair or suit of armor if you are medium.\n\nGlamourous Object. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. You become an object of great beauty, such as a jeweled statue. If the target sees you in your object form, they must make a Wisdom saving throw. If they fail, they are charmed, and are compelled to attempt to add you to their personal possessions.",
	atHigherLevels: "If you cast this spell using a spell slot of 4th level, the duration is 8 hours. The duration is 24 hours at 5th level, 72 hours at 6th level spell, one week at 7th level, one month at 8th level, and one year at 9th level. Using a spell slot of 5th level or higher grants a duration that doesn’t require concentration, and you can finish a long rest while in your object form. Using a spell slot of 7th level or higher makes you invisible to the effects of the detect magic spell."
};
SpellsList["mirror stride og"] = {
	name: "Mirror Stride",
	classes: ["artificer", "sorcerer", "wizard", "warlock"],
	source: ["OG", 261],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "Special",
	components:"V,S",
	duration:"conc, 10 min",
	description:"step into, out of or reside in space behind mirror/reflective surface; int(invest.) to spot you; see B",
	descriptionFull:"You gain the ability to enter reflective surfaces to a space between them. For the duration, you can use 5 feet of movement to step through a reflective surface of glass, metal, crystal or ice for example, a mirror or a highly polished breastplate. The surface must be large enough for you to squeeze into. On the other side of the surface, you enter an extradimensional space, where you can comfortably remain for the duration of the spell. You can make a number of such entrances equal to 1 + your spellcasting ability modifier (minimum of twice).\nThe space is furnished with an exit to the surface you entered from, as well as exits to any other mirrored surfaces within a 120-foot-radius of the surface you entered. You can look out through any of these surfaces, and exit through any of them that can squeeze through, appearing in a spot of your choice within 5 feet of the destination, using another 5 feet of movement. Such a space might include dozens of exits to destinations you cannot see or are unfamiliar with.\nTo discern that you are inhabiting spaces between nearby eligible exits, a creature can use its action to inspect an object with an exit available to you, and must succeed on an Intelligence (Investigation) check against your spell save DC. If the inspected surface is too small for you to exit through, the creature has disadvantage on the check.\nIf the object you first entered through is damaged or destroyed while you are inside the extradimensional space, or the spell ends while you are inside it, you are expelled, falling prone in an unoccupied space closest to where you first entered, taking 4d6 psychic damage.",
	atHigherLevels: "If you cast this spell using a spell slot of 6th level, the radius is increased to 500 feet. If you cast this spell using a spell slot of 7th level, the radius is increased to 1000 feet. If you cast this spell using a spell slot of 8th level, the radius is increased to 1 mile, and the duration is increased to 1 hour. If you cast this spell using a spell slot of 9th level, the radius is increased to 10 miles, and the duration is increased to 8 hours."
};
SpellsList["missile magnet og"] = {
	name: "Missile Magnet",
	classes: ["artificer", "ranger", "wizard", "warlock"],
	source: ["OG", 261],
	level: 2,
	school: "Ench",
	time: "1 a",
	range: "120 ft",
	components:"V, M",
	compMaterial: "a sliver of magnetic iron",
	duration:"Conc, 1 min",
	save: "Wis",
	description:"target no benefit of 1/2, 3/4 cover, 1d4+1d4/SL extra range dmg; repeat save at turnend; see B",
	descriptionFull: "You curse a target, drawing projectiles toward it. The target makes a Wisdom saving throw. If it fails, it is wreathed in a nimbus of emerald light that sheds dim light in a 5-foot-radius and attracts projectiles. For the duration, ranged attack rolls against the target have advantage, the target loses any benefits from half and three-quarters cover from ranged attacks, and it takes an additional 1d4 force damage from ranged attacks that hit it.nAdditionally, ranged attack rolls that would hit a creature within 5 feet of the cursed target force it to make a Charisma saving throw. On a failure, the cursed target it hit by the instead, even if the attack roll is lower than their own AC.\nAt the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. A remove curse spell or similar magic ends the effect early.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the additional damage from projectiles increases by 1d4 for each slot level above 3rd."
};
SpellsList["misty slash og"] = {
	name: "Misty Slash",
	classes: ["sorcerer", "wizard", "warlock"],
	source: ["OG", 261],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "S",
	components:"V,S,M\u0192",
	compMaterial: "a melee weapon worth at least 10 gp that deals slashing damage",
	duration:"1 rnd",
	description:"teleport 30ft, 1st melee atk +2d6+1d6/SL; if hit or force moved in duration rea to teleport back;",
	descriptionFull:"You surround yourself in silvery mist, teleporting up to 30 feet to an unoccupied space that you can see. Until the start of your next turn, the weapon is magical, and the first time you hit a creature with it, the attack deals an additional 2d6 damage.\nFor the duration, when you hit a creature with the weapon, or if you are hit by an attack or fail a saving throw that doesn’t result in your being moved, you can use your reaction to teleport to the space you were in when you cast the spell.\nIf the space you were in when you cast the spell is occupied, you teleport to the nearest unoccupied space instead.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
SpellsList["moon blade og"] = {
	name: "Moon Blade",
	classes: ["druid", "ranger"],
	source: ["OG", 262],
	level: 2,
	school: "Evoc",
	time: "1 bns",
	range: "S",
	components:"VSM",
	compMaterial:"a drop of wintergreen oil",
	duration:"Conc, 1h",
	description:"melee weap; 2d8+1d8/2SL rad dmg; finesse,light,throw (20/60); special vs. shapechanger/undead; see B",
	descriptionFull:"You create a crescent-shaped sword of solidified moonlight in your hand. This magic sword lasts until the spell ends, shedding dim light in a 5-foot-radius. It counts as a simple melee weapon with which you are proficient. It deals 2d8 radiant damage on a hit and has the finesse, light, and thrown properties (range 20/60).\nWhen you use the sword to attack a shapechanger, you have advantage on the attack roll. If you hit a shapechanger with your moon blade, it must succeed on a Charisma saving throw or instantly revert to its original form. An affected shapechanger can’t assume a different form until it the end of their next turn.\nWhen you use the sword to attack an undead creature, you gain a bonus to your attack and damage rolls equal to your spellcasting ability modifier (minimum of 1). If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.",
	atHigherLevels:"When you cast this spell using a spell slot of 3rd or 4th level, the damage increases to 3d8. When you cast it using a spell slot of 5th or 6th level, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8, and when you hit a target, you can use a bonus action to end the effects of a spell on the target if the spell’s level is equal to or less than the level of the spell slot you used. You can end a number of spells in this manner equal to your spellcasting ability modifier (minimum of 1).",
};
SpellsList["mushroom ring og"] = {
	name: "Mushroom Ring",
	classes: ["druid", "ranger"],
	source: ["OG", 262],
	level: 3,
	school: "Conj",
	ritual: true,
	time: "1 min",
	range: "10 ft",
	components: "V,S,M",
	compMaterial: "faerie dust and a sample of fungi",
	duration: "1 h",
	description: "10ft rad ring; protects me+invited against ent., atk, charm, fright from chosen type; can explode; see B",
	descriptionFull: "You enhance the fecundity of a 10-foot-radius circle of bare rock, earth or soil centered directly underneath you.\nAt the start of your next turn, dimly glowing mushrooms appear at the edges of the circle. The ring’s effects extend in a 15-foot-high cylinder above and below the ring.\nWhen you cast the spell, choose one of the following: Beasts, Humanoids, or Monstrosities. The ring affects a creature of the chosen type in the following ways:\n- The creature attempting to enter the area must first succeed on a Charisma saving throw.\n- The creature has disadvantage on attacks against you while in the area. \n- Invited creatures within the cylinder can’t be charmed or frightened by the creature. While the ring exists, you can use your bonus action to invite a creature of the excluded type into the ring without penalty.\nYou can use your action to consume the ring in an explosion of spores, ending the spell. When you do, creatures other than you and those you have invited within 5 feet of the area must make a Constitution saving throw, taking 4d8 poison damage on a failed save, or half as much damage on a success.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd"
};
SpellsList["nature bolt og"] = {
	name: "Nature Bolt",
	classes: ["druid", "wizard"],
	source: ["OG", 263],
	level: 0,
	school: "Trans",
	
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "ranged spell attack for 1d8; +1d8 CL 5, 11, 17; see B for dmg type (depends on terrain)",
	descriptionCantripDie: "ranged spell attack for `CD`d8; see B for dmg type (depends on terrain)",
	descriptionFull: "A handful of solid terrain you can reach crumbles at your touch, and you hurl the mass at a creature or object within range. Make a ranged spell attack against the target. If you hit, the target takes 1d8 of damage of a type based on the terrain.\n\nstone, dirt: Bludgeoning\nmetal, wood: Piercing\ngravel, sand: Slashing\nswamp, marsh: Poison\nwater, snow, ice: Cold\n\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
WeaponsList["nature bolt og"] = {
	name: "Nature Bolt",
	source: ["OG", 263],
	regExpSearch: /^(?=.*nature)(?=.*bolt).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["C",8,"Special"],
	range: "60ft",
	description: "stone, dirt: bludg; metal, wood: pierc; gravel, sand: slash; swamp, marsh: pois; water, snow, ice: cold",
	list: "spell",
	tooltip: "A handful of solid terrain you can reach crumbles at your touch, and you hurl the mass at a creature or object within range. Make a ranged spell attack against the target. If you hit, the target takes 1d8 of damage of a type based on the terrain. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["negromantic regombination og"] = {
	name: "Negromantic Regombination",
	nameShort: "Negrom. Regombination",
	classes: ["cleric", "wizard"],
	source: ["OG", 263],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "combine 3 skeletons into 1 minotaur skeleton or 3 zombies into 1 ogre zombie",
	descriptionFull: "You create a more powerful undead servant out of lesser ones. You target three skeletons or zombies that you created by means of the animate dead spell and who are under your control, combining their mass into a single creature with the statistics of a minotaur skeleton (if you combined three skeletons) or ogre zombie (if you combined three zombies). The DM has the creature’s game statistics. \nYou command the resulting creature in the exact same manner as outlined in the animate dead spell.\nThe creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast the animate dead spell on the creature again before the current 24-hour period ends. A creature created by means of this spell counts as three undead for the purposes of the number of creatures you can maintain control of with the animate dead spell."
};
SpellsList["othertime og"] = {
	name: "Othertime",
	classes: ["artificer", "bard", "cleric"],
	source: ["OG", 264],
	level: 5,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "S, M\u2020",
	compMaterial: "a fold of brocade fabric worth at least 50 gold, which the spell consumes",
	duration: "Conc, 1 rnd",
	description: "step 1+1/SL rnd into future; cannot affect any crea, traps, sensors or unheld item; return to origin; see B",
	descriptionFull: "You step into the future, to the start of your next turn. To other creatures, you appear to vanish altogether, only to reappear at a later point in time. Time continues to progress for everything except you.\nAt the start of your next turn, you reappear at that exact in the space you were in when you cast the spell, or in the nearest unoccupied space. The world around you remains frozen in time until the end of your turn. For the duration, you are completely unaffected an observed by your surroundings. For the duration, you can move, perceive the world, take actions, and cast spells that target only yourself. You cannot affect any creature or object while time remains frozen, nor do you trigger any traps, magical alarms, or sensors. For example, you read a book at the page it was opened to, but could not turn to the following page.\nWhen the spell ends, time resumes at its normal pace for both you and your surroundings. The spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
	atHigherLevels: "If you cast this spell using a spell slot of 6th level or higher, you move 1 additional turn into the future for each slot level above 5th."
};
SpellsList["pall of twilight og"] = {
	name: "Pall of Twilight",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 264],
	level: 3,
	school: "Illus",
	time: "1 a",
	range: "120 ft",
	components: "S,M",
	compMaterial: "a ball of cotton or wool, dyed grey or black",
	duration: "Conc, 1 min",
	description: "30ft+30ft/SL rad of mist; reduces light; disadv. on hearing, blindsense and tremorsense; ",
	descriptionFull: "A creeping pall of grey mist manifests in a 30-foot-radius sphere centered on a point you can see within range, muting sound and color alike. \nThis spell reduces bright light (including magical light created by spells of 2nd level or lower) in the area to dim light, and dim light to darkness. Additionally, creatures inside the area have disadvantage on Wisdom (Perception) check that rely on hearing.\nCreatures with blindsense or tremorsense have these senses similarly affected, and they have disadvantage on Wisdom (Perception) checks they make while in the area, and attack rolls against targets they rely on blindsight or tremorsense to see.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the radius of the mist increases by 30 feet for each slot level above 3rd."
};
SpellsList["papercut og"] = {
	name: "Papercut",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 264],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "120 ft",
	components: "S, M\u2020",
	compMaterial: "a sheet of parchment, which the spell consumes",
	duration: "Instantaneous",
	save: "Dex",
	description: "tear & throw paper for 10d8+2d8/SL slash dmg; half on save; see B for extra dmg if spell scroll used",
	descriptionFull: "You tear a sheet of into dozens of fragments, and send them flying toward a creature you can see within range. The target makes a Dexterity saving throw, taking 10d8 damage on a failed save, or half as much on a successful one.\nIf you use a spell scroll as the material component for the spell, it deals 1d8 additional damage, plus 1d8 times the spell level of the scroll. The additional damage matches the damage type the spell upon the scroll would deal. If the spell upon the scroll does not deal damage, the damage is force damage.",
	atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 2d8 for each slot level above 4th."
};
SpellsList["peal of nine bells og"] = {
	name: "Peal of Nine Bells",
	classes: ["artificer", "bard", "cleric", "wizard"],
	source: ["OG", 265],
	level: 0,
	school: "Conj",
	time: "1 a",
	range: "20 ft",
	components: "S,M",
	compMaterial: "a chime or bell",
	duration: "Instantaneous",
	save: "Str",
	description: "on save fail: 1D6 thunder dmg and 10ft pushed away; +D6 at CL 5, 7 and 11",
	descriptionCantripDie: "on save fail: `CD`D6 thunder dmg and 10ft pushed away",
	descriptionFull: "You create a beam of ringing sound that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pushed up to 10 feet in a straight line away from you, taking 1d6 thunder damage.\nThe spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)"
};
WeaponsList["peal of nine bells og"] = {
	name: "Peal of Nine Bells",
	source: ["OG", 265],
	regExpSearch: /^(?=.*peal)(?=.*bell).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["C",6,"Thunder"],
	range: "20ft",
	dc : true,
	description: "Target is pushed 10ft away from me in a straight line, Str save, success - no damage/push",
	list: "spell",
	tooltip: "You create a beam of ringing sound that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pushed up to 10 feet in a straight line away from you, taking 1d6 thunder damage.\nThe spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["perplex og"] = {
	name: "Perplex",
	classes: ["bard", "wizard"],
	source: ["OG", 265],
	level: 3,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "turnstart: 1d6 psychic dmg and subtract result from all atk, checks and con saves; turnend: repeat save",
	descriptionFull: "You target one creature you can see within range, and attempt to wreak havoc among its thoughts. The target makes a Wisdom saving throw. On a failure, the target rolls a d6 at the start of its turn, taking the amount rolled as psychic damage, and subtracting that number from attack rolls, ability checks, and concentration checks it makes until the start of its next turn. The target repeats its saving throw at the end of its turn, ending the spell on a success. Creatures with an Intelligence score of 2 or lower are immune to this spell."
};
SpellsList["plaguemask og"] = {
	name: "Plaguemask",
	classes: ["artificer", "wizard"],
	source: ["OG", 265],
	level: 2,
	school: "Illus",
	time: "1 a",
	range: "Touch",
	components: "V,M",
	compMaterial: "A white handkerchief",
	duration: "24 h",
	description: "3 willing crea appear sick; I choose symptoms; Cha(perf) adv. to convince; Wis(med) with dis. to dispell",
	descriptionFull: "You touch up to three willing creature, making them appear sick or plagued. You decide the symptoms of the illusory disease, which could include a fever, runny nose, clammy hands, swollen extremities, and weeping sores. Each target must display the same symptoms.\nFor the duration, the targets gain advantage on Charisma (Performance) checks to convince others of the illusory disease.\nA creature can make a Wisdom (Medicine) check at disadvantage against your spell save DC to determine if the symptoms are real. On a success, the illusion is immediately dispelled."
};
SpellsList["polandaras petticoat pocket og"] = {
	name: "Polandara's Petticoat Pocket",
	nameShort: "Polandara's Pettic. Pocket",
	classes: ["artificer", "bard", "wizard"],
	source: ["OG", 265],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "Self",
	components: "S,M\u2020",
	compMaterial: "a fold of fine fabric worth at least 10 gold, which is consumed by the spell",
	duration: "Instantaneous",
	description: "create miniature bag of holding in my garment weighing 3 lbs; holds 20 cu ft, 50 lbs; slot is consumed",
	descriptionFull: "The spell creates a pocketed square of fabric, which immediately attaches to a location on a garment the caster is wearing. The spell slot used to create the pocket is consumed, and cannot be recovered until the pocket no longer exists.\nThe pocket has an opening no larger than a six-inch diameter, with an interior space considerably larger than its outside dimensions suggest: the pocket is to 10 feet deep. The pocket can hold up to 50 pounds, not exceeding a volume of 20 cubic feet. The pocket weighs 3 pounds, regardless of its contents. Retrieving an item from the depths of the pocket requires a bonus action. If the pocket is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents scatter within 10 feet of the garment the pocket is attached to.\nIf the pocket is turned inside out, its contents spill forth, unharmed, but the pocket must be put right before it can be used again. Breathing creatures inside the pocket can survive up to a number of minutes equal to their Constitution modifier (minimum of 1), after which they begin to suffocate.\nPlacing another extradimensional space, such as a bag of holding, Heward’s handy haversack, portable hole, or similar item instantly destroys both the pocket and the item and opens a gate to the Astral Plane. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.\nYou can dismiss the pocket at any time with a bonus action, causing its contents to immediately scatter outside of its present location. You can then recover the spell slot the pocket consumed at your next available opportunity."
};
SpellsList["power word silence og"] = {
	name: "Power Word Silence",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 266],
	level: 6,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Cha",
	description: "1 crea <151 HP save or mute and thunder immunity; repeat save at end of each turn",
	descriptionFull: "You speak a word of power that removes the ability to speak from one creature you can see within range. If the target has 150 hit points or fewer, it is enveloped in silence. No sound can reach nor escape from the target. It becomes immune to thunder damage, and it is deafened. Casting a spell that includes a verbal component becomes impossible for them.\nThe silenced target must make a Charisma saving throw at the end of each of its turns. On a successful save, the silencing effect ends."
};
SpellsList["probability warp og"] = {
	name: "Probability Warp",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 266],
	level: 5,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a strong iron magnet",
	duration: "Conc, 1 min",
	description: "creat atks are mag., atk bonus half spell mod (min1), crit on 19-20; I rea add spell mod to AC or Save",
	descriptionFull: "A subtle field of favorable probability surrounds one creature you can see within 60 feet of you. For the duration:\n- The target’s attacks are magical. Their attack rolls gain a bonus equal to half your spellcasting ability modifier (minimum of 1), and they score a critical hit on a roll of 19 or 20.\n- You can use your reaction to apply your spellcasting ability modifier as a bonus to the target’s Armor Class against a triggering attack, or to one saving throw they make (after the roll, but before the results are announced)"
};
SpellsList["puff of smoke og"] = {
	name: "Puff of Smoke",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 266],
	level: 0,
	school: "Conj",
	/* descriptionCantripDie: "`CD*0.5` 5ft rad, 15ft high; heavy obsc.; choose color and if 5ft dim light; audible for 100ft", TODO after rounding update*/
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "1 rnd",
	description: "1 (+1 at CL11) 5ft rad, 15ft high; heavy obsc.; choose color and if 5ft dim light; audible for 100ft",
	descriptionFull: "You create a 5-foot-radius, 15-foot-high cylinder of fog centered on a point within range. The smoke spreads around corners, and its area is heavily obscured. When created, the puff produces a dull thud which is audible out to 100 feet.\nThe smoke can be any color you desire, and you can cause it to shed dim light in a 5-foot-radius in the same color. It lasts until the start of your next turn, or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\nWhen you reach 11th level, you can create two puffs of smoke with the spell."
};
SpellsList["puncture og"] = {
	name: "Puncture",
	classes: ["artificer"],
	source: ["OG", 266],
	level: 0,
	school: "Trans",
	descriptionCantripDie: "`CD` ranged spell attacks for 1d10 pierc dmg",
	time: "1 a",
	range: "120 ft",
	components: "S,M",
	compMaterial: "a steel needle",
	duration: "Instantaneous",
	description: "1 (+1 at CL 5, 11, 17) ranged spell attacks for 1d10 pierc dmg",
	descriptionFull: "A psionic needle streaks toward a creature within range. Make a ranged spell attack against the target. On a hit,the target takes 1d10 piercing damage.\nThe spell creates more needles when you reach higher levels: two needles at 5th level, three needles at 11th level, and four needles at 17th level. You can direct the needles at the same target or at different ones. Make a separate attack roll for each needle."
};
WeaponsList["puncture og"] = {
	name: "Puncture",
	source: ["OG", 266],
	regExpSearch: /^(?=.*puncture).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["C",10,"Piercing"],
	range: "120ft",
	description: "Each d10 is a separate needle requiring separate rolls",
	list: "spell",
	tooltip: "A psionic needle streaks toward a creature within range. Make a ranged spell attack against the target. On a hit,the target takes 1d10 piercing damage.\nThe spell creates more needles when you reach higher levels: two needles at 5th level, three needles at 11th level, and four needles at 17th level. You can direct the needles at the same target or at different ones. Make a separate attack roll for each needle."
};
SpellsList["pyroclasm og"] = {
	name: "Pyroclasm",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 266],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a shard of obsidian or pumice",
	duration: "Instantaneous",
	save: "Dex",
	description: "20 ft rad 2d8 fire dmg & 2d8 pois dmg; save 1/2; start next trn 4d8 fire; save 1/2; see B for higher SL",
	descriptionFull: "A cloud of volatile fumes and scorching lava erupts forth at a point you choose in range. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw, taking 2d8 fire damage and 2d8 poison damage on a failure, or half as much damage on a successful one.\nAfter damage is dealt, the spell’s area of effect is filled by the cloud of fumes and ash, lightly obscuring the area. At the start of your next turn, the cloud ignites. Each creature in the area must make a Dexterity saving throw. A target takes 4d8 fire damage on a failure, or half as much damage on a successful one. Afterwards, the cloud vanishes.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the initial fire or poison damage (your choice when you cast the spell) increases by 1d8 for each slot level above 3rd."
};
SpellsList["quentins quickling senses og"] = {
	name: "Quentin's Quickling Senses",
	nameShort: "Quentin's Quickl. Senses",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 267],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a hummingbird feather",
	duration: "Conc, 1 min",
	description: "+spell mod (min1) AC; ign. dif.ter.; imm. AoO; adv. Dex,Int,Wis chk/sv; dis. atk, cha chk; a to talk; see B",
	descriptionFull: "For the duration, you can a bonus to your armor class equal to your spellcasting ability modifier (minimum of 1), you ignore difficult terrain and are immune to attacks of opportunity. You have advantage on Dexterity, Intelligence and Wisdom checks and saving throws, and you cannot be surprised. In addition, attacks against you from sources you can see are made at disadvantage.\nHowever, your quickening makes it difficult to engage with those moving at normal speed: you also have disadvantage on attack rolls, Charisma ability checks you make to influence others, and you must use an action to communicate non-telepathically with any creature with whom you share a language.\nWhen the spell ends, you must succeed on a DC 14 Constitution saving throw or suffer one level of exhaustion."
};
SpellsList["radiant glamour og"] = {
	name: "Radiant Glamour",
	classes: ["cleric", "paladin"],
	source: ["OG", 267],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "20 ft",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Con",
	description: "all choosen 3D12+1D12/SL rad dmg; half on save; fiend/undead dis. save + blind on fail till end nxt trn",
	descriptionFull: "You emit an intense light, searing nearby enemies. Each creature of your choice within 20 feet of that can see you makes a Constitution saving throw. A creature takes 3d12 radiant damage on a failure, or half as much on a success. Fiends and Undead have disadvantage on their saving throws, and if they fail, they are blinded until the end of their next turn.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd"
};
SpellsList["read blood og"] = {
	name: "Read Blood",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: ["OG", 267],
	level: 1,
	school: "Div",
	ritual: true,
	time: "1 a",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "a drop of blood, ichor or other fluid that left a creature in the last 24 hours, suspended in an inscribed vial worth at least 10 gp",
	duration: "Instantaneous",
	description: "learn 2+1/SL: surface thoughts; crea type & con score; highest SL cast; relation to crea I see; see B",
	descriptionFull: "You focus your mind on the fluid, gaining mystical insight into the magics connecting it to the creature it came from, revealing certain information about the creature. The DM tells you information in regard to two choices from the following list:\n\n- The creature’s surface thoughts at the time the fluid was spilled.\n- The creature’s type and Constitution score.\n- The highest level of spell (if any) the creature had cast, up to a month before the fluid was spilled.\n- If the creature was diseased or poisoned.\n- How closely another creature you can see within 60 feet of you is related to the creature the fluid came from (for example, they might be the same creature, or a close relative, or the same species)",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, you can request one additional piece of information for each slot level above 1st."
};
SpellsList["regall agony og"] = {
	name: "Regall Agony",
	classes: ["bard", "cleric", "warlock"],
	source: ["OG", 267],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a shard of mirrored glass",
	duration: "Conc, 1 min",
	save: "Cha",
	description: "4d10+1d10/SL psy; save: 1/2; fail: when crea takes dmg reac for +1/2 psydmg; unde/cons/int<4 imm.",
	descriptionFull: "You draw upon a painful memory within one creature you can see within range and force them to relive the experience. The target makes a Charisma saving throw, taking 4d10 psychic damage on a failure, and half as much on a success.\nIf they fail their saving throw, they are become cursed. For the duration, whenever the target takes damage, you can use your reaction to force them to relive the experience, dealing half the amount as additional psychic damage to the creature.\nConstructs, Undead, and creatures with an Intelligence score lower than 4 are immune to the spell’s effects.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};
SpellsList["rejuvenate og"] = {
	name: "Rejuvenate",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 268],
	level: 7,
	school: "Necro",
	time: "1 a",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "an inscribed platinum egg worth at least 5000 gp, which the spell consumes",
	duration: "Conc, 1 min",
	save: "Cha",
	description: "human./beast willing or save fail: -1d6 age; rea to -spell mod age; re-roll save start turn; see B",
	descriptionFull: "You touch a Humanoid or Beast, reversing its aging process. An unwilling target can make a Charisma saving throw to resist the effect. If the creature is willing or if it fails the saving throw, roll 1d6 and subtract the results from the creature’s age. You cannot reduce a creature’s age to be less than at the time of their birth.\nFor the duration, you can use your action on your turn to touch and rejuvenate the creature again, up to an additional number of times equal to your spellcasting ability modifier (minimum of 1).\nCreatures repeat their saving throw at the start of each of their turns, ending the effect on a success. When the spell ends, the unnatural aging lingers, and the target gradually returns to their natural age over the course of a year, or until restored by a dispel magic spell or similar magic.",
	atHigherLevels:"When you cast this spell using a spell slot of 8th level, the die is increased to 1d10, and its effects linger for a century. At 9th level, the die is increased to 1d12, and its effects are permanent."
};
SpellsList["reminiscence og"] = {
	name: "Reminiscence",
	classes: ["cleric", "druid"],
	source: ["OG", 268],
	level: 4,
	school: "Div",
	ritual: true,
	time: "1 min",
	range: "Self",
	components: "V,M\u2020",
	compMaterial: "a lens of glass worth at least 250 gp which the spell consumes",
	duration: "Conc, 10 min",
	description: "relive >1 min of last century at present location in reverse and compressed; blind and deaf during; see B",
	descriptionFull: "Choose a span of time 1 minute or longer within the last century. Visions of your selected range of time fill your senses, and subsume all sensory input you experience in the present. For the duration, you are blinded and deafened.\nYou experience specified range of time from your present location, compressed proportionally into the duration of the spell. You view the events in reverse, from the vantage point of current position. You are unable to interact with the past in any way other than to witness it.\nWhile viewing the past, you still have any special senses you possess, such as darkvision. You can speak to others and move about normally in the present during the experience, but this might be difficult in places where the placement of objects or your surroundings that have changed in the intervening time."
};
SpellsList["rending distortion og"] = {
	name: "Rending Distortion",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: ["OG", 268],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "5d10+1d10/SL foce dmg; half on save; on fail till end next turn restr. and 2d10 force dmg if action",
	save: "Con",
	descriptionFull: "The spell causes the space and time around and inside a target creature or object to rapidly accelerate and decelerate in random patches, tearing their body as they attempt to move through the fluctuations. The target makes a Constitution save, taking 5d10 force damage on a failure and half as much on a success. If they fail their saving throw, they are restrained until the end of their next turn, and if they take an action on that turn, they are dealt an additional 2d10 force damage.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};
SpellsList["reorient og"] = {
	name: "Reorient",
	classes: ["artificer", "wizard"],
	source: ["OG", 268],
	level: 1,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a leaden sphere",
	duration: "1 rnd",
	description: "fall into chosen direction; max 500ft; DM determ. fall dmg if collision; gravity restores start of nxt turn",
	descriptionFull: "You alter gravity’s pull upon your person, causing yourself to fall in a direction of your choosing until the end of your turn, covering a distance up to 500 feet. If you collide with any objects during this movement, you take appropriate falling damage as determined by the DM.\nAt the start of your next turn, gravity reorients itself as is normal for the space you occupy, potentially causing you to fall again"
};
SpellsList["reverse projectiles og"] = {
	name: "Reverse Projectiles",
	classes: ["artificer", "cleric", "paladin", "wizard"],
	source: ["OG", ],
	level: 3,
	school: "Abjur",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a tortoiseshell fragment",
	duration: "Conc, 1 min",
	description: "on range atk hit -1d10+spell mod dmg; if dmg = 0 reflect back to attacker & dmg re-rolled; see B",
	descriptionFull: "You wrap yourself in a nimbus of lavender light which sheds dim light in a 5-foot-radius and deflects projectiles. For the duration, when you are hit by a ranged attack, the damage you take from it is reduced by 1d10 + your spellcasting ability modifier. If the spell reduces the projectile’s damage to 0, the missile is turned back upon the creature that attacked you.\nThe original attack roll is used to determine if the reversed projectile strikes your attacker, but the damage is rerolled using the original attacker’s modifiers and bonuses.\nIf an attack bounces back toward a creature that is also protected by this spell, it is immediately reduced to 0 damage and the ammunition is destroyed or its magical energies dispersed.\nYou can also use this spell to dispel the effects of a missile magnet spell you have been affected by."
};
SpellsList["roar of waves og"] = {
	name: "Roar of Waves",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", ],
	level: 3,
	school: "Illus",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "a seashell",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1+1/SL crea imagine drowning; save end ea. trn to end spell, 4d4 psy dmg on fail; see B for immun.",
	descriptionFull: "You tap into the mind of a creature you can see within range, creating an illusory manifestation of rising ocean waters, visible only to the target, which must make a Wisdom saving throw. On a failed save, the target is overcome by the rising waters, lost in a nightmare of drowning alone at sea. Creatures with a swimming speed succeed their saving throw automatically.\nFor the duration, the creature’s movement speed is halved, and is deafened and incapacitated, hearing only the sound of the waves and winds, as it desperately tries to swim to safety. Creatures within 30 feet of the affected target also hear the dull sound of ocean waves.\nAt the end of each of the target’s turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d4 psychic damage. On a successful save, the spell ends. The spell also ends if the target becomes the subject of a spell that allows them to escape the illusion, for example, the alter self (aquatic adaptation), water breathing, or water walk spells.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
};
SpellsList["sacred strike og"] = {
	name: "Sacred Strike",
	classes: ["cleric"],
	source: ["OG", 269],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "5 ft",
	components: "V,M",
	compMaterial: "a weapon",
	duration: "1 rnd",
	descriptionCantripDie: "melee spell atk; next hit by not me deals +`CD-1`D6 + my spell mod rad dmg",
	description: "spell cast with successful melee atk; next hit by not me +my spell mod rad dmg; +1D6 at CL 5, 11, 17",
	descriptionFull: "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the target suffers the attack’s normal effects, and it is wreathed in light, shedding dim light in a 5-foot-radius until the start of your next turn. For the duration, if the creature is hit with an attack made by a creature other than you, the attack deals additional radiant damage equal to your spellcasting modifier, and the wreath of light dissipates.\nThis spell’s damage increases by 1d6 when you reach 5th level (1d6 + your spellcasting ability modifier), 11th level (2d6 + your spellcasting ability modifier), and 17th level (3d6 + your spellcasting ability modifier)."
};
WeaponsList["sacred strike og"] = {
	name: "Sacred Strike",
	source: ["OG", 284],
	regExpSearch: /^(?=.*sacred)(?=.*strike).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["B",6,"radiant"],
	abilitytodamage: true,
	range: "melee",
	description: "Cast with melee attack, no extra dmg. On hit: marked & extra dmg if hit by other within 1 turn.",
	list: "spell",
	tooltip: "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell’s range, otherwise the spell fails. On a hit, the target suffers the attack’s normal effects, and it is wreathed in light, shedding dim light in a 5-foot-radius until the start of your next turn. For the duration, if the creature is hit with an attack made by a creature other than you, the attack deals additional radiant damage equal to your spellcasting modifier, and the wreath of light dissipates.\nThis spell’s damage increases by 1d6 when you reach 5th level (1d6 + your spellcasting ability modifier), 11th level (2d6 + your spellcasting ability modifier), and 17th level (3d6 + your spellcasting ability modifier)."
};
SpellsList["sanguine strike og"] = {
	name: "Sanguine Strike",
	classes: ["bard", "cleric", "sorcerer"],
	source: ["OG", 269],
	level: 0,
	school: "Div",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 rnd",
	description: "touched creature gains advantage for next attack roll",
	descriptionFull: "You touch a willing creature. Your magic grants them exceptional skill with their weapon. The target then designates a creature they can see within 30 feet of them. Until the end of their next turn, they gain advantage on the first attack roll they make against the designated creature, provided that this spell hasn’t ended."
};
SpellsList["seeking og"] = {
	name: "Seeking",
	classes: ["artificer", "cleric", "paladin", "ranger", "wizard"],
	source: ["OG", 270],
	level: 2,
	school: "Div",
	time: "1 min",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "alchemical ink worth at least 25 gp, which the spell consumes, and the ammunition being imbued, which crumbles to dust when this spell ends",
	duration: "1 h",
	description: "imbue 5 pieces of ammo; attacks with these are magical, deal base dmg only and hit without atk roll",
	descriptionFull: "You touch up to 5 nonmagical pieces of ammunition. For the duration, this seeking ammunition is magical for the purpose of overcoming resistance and immunity to nonmagical damage.\nWhen a creature makes an attack with seeking ammunition, they do not make an attack roll, but instead declare the target of the attack to be a creature or object they can see within range of their weapon. Provided there is a pathway along which a projectile might reach the target, regardless of how winding, crooked or circuitous that path is, the attack hits.\nAttacks made with seeking ammunition do not add the ability modifier of the attacker to the damage roll of the attack, nor do they gain any other damage bonuses from any source, such as a class features or benefits usually conferred from a magical weapon."
};
SpellsList["sensory deprivation og"] = {
	name: "Sensory Deprivation",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 270],
	level: 4,
	school: "Illus",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M\u0192",
	compMaterial: "a chrysoberyl worth at least 20 gp and black silk cloth",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "on save fail 1+1/SL crea looses all senses except touch and telepathy; re-roll save end trn to end spell",
	descriptionFull: "You attempt to blot out the senses of a creature you can see within range. The target makes a Wisdom saving throw. On a failure, the target’s senses are nullified for the duration, including their auditory, olfactory, taste, and visual senses. In addition to being blinded and deafened, an affected creature cannot benefit from blindsight or tremorsense while under the effects of the spell, and any Wisdom (Perception) checks they make that do not rely on touch automatically fail. The target retains any telepathic links it has with other creatures (for example, a myconid can still communicate through its rapport spores).\nAt the end of each of its turns, the target makes a Wisdom saving throw, ending the effect on a success.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
};
SpellsList["shape wood og"] = {
	name: "Shape Wood",
	classes: ["artificer", "druid"],
	source: ["OG", 270],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a pinch of sawdust",
	duration: "Instantaneous",
	description: "change non-mag wooden obj up to 10 cu ft into any other shape",
	descriptionFull: "You touch a nonmagical wooden object of Large size or smaller or a section of wood no more than 10 feet in any dimension and form it into any shape that suits your purpose. For example, you might shape a trap door into a spear or quarterstaff, or you might shape a large wooden throne into a cage fit for a Medium creature."
};
SpellsList["shatterfloor og"] = {
	name: "Shatterfloor",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: ["OG", 270],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "S:60ft cone",
	components: "V,S,M",
	compMaterial: "a tuning fork",
	duration: "Instantaneous",
	save: "Con",
	description: "use solid floor to deal 7d6+1d6/SL Thdr. dmg; 1/2 on save; non-magical floor becomes diff.terr.",
	descriptionFull: "You unleash a thrumming crescendo across a solid surface in a 60-foot cone. Creatures in the area must make a Constitution saving throw, taking 7d6 thunder damage on a failure, or half as much on a success. If the surface is made of nonmagical stone, wood, ice, or material with a hardness less than those, the floor is pulverized, becoming difficult terrain.",
	atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
SpellsList["skip day og"] = {
	name: "Skip Day",
	classes: ["artificer", "wizard"],
	source: ["OG", 270],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "S:10ft rad",
	components: "S,M\u0192",
	compMaterial: "diamond dust worth at least 250 gp",
	duration: "Instantaneous",
	description: "I & up to 6 willing crea mv 24h into future; DC12 Con save or +1 lvl exhaustion;",
	descriptionFull: "You and up to six willing creatures of your choice within 10 feet of you are swallowed by a tear in space-time, traveling 24 hours into the future. For the travelers, this feels like a mere instant. Constructs and Elementals cannot be targeted by the spell. Creatures observing the spell from outside its range see you disappear in a momentary flash of bright, white light. You and your companions arrive in the exact spaces they were when the spell was cast. If a creature's space is now occupied due to changing conditions in the intervening time, they are shunted to the nearest available space, taking 1d10 force damage for every 5 feet they are moved. Creatures traveling in time this way must succeed on a DC 12 Constitution saving throw or take one level of exhaustion."
};
SpellsList["slipstream og"] = {
	name: "Slipstream",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 271],
	level: 2,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a length of silk",
	duration: "Conc, 1 min",
	description: "create a 60ft*15ft*10ft corridor; one direct. double movement; other direct. diff.terr.; bns a to change",
	descriptionFull: "A 10-foot-tall, 15-foot-wide, 60-foot-long corridor of flowing space-time unfurls in a straight line in front of you, aiding or hindering travel along its length. You can choose whether the line flows towards or away from you. Creatures moving with the flow can move 2 feet for every one foot of spent movement, and those moving against it treat the area as difficult terrain.\nFor the duration, you can use a bonus action to reverse the direction of the flow."
};
SpellsList["snakestaff og"] = {
	name: "Snakestaff",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 271],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "15 ft",
	components: "V,S,M",
	compMaterial: "a wooden quarterstaff or similar length of wood",
	duration: "Conc, 1 h",
	description: "wooden spear or statt turns into giant poisonous snake under my control; command as bns a; see B",
	descriptionFull: "You throw a wooden spear or quarterstaff up to 15 feet away from you, transforming it into a giant poisonous snake. The snake is friendly to you and your companions, and it obeys your commands.\nIn combat, the snake shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action to command it to take one of the actions in its stat block or to take the Dash, Disengage, or Help action. The snake adds your spellcasting ability modifier as a bonus to its ability checks, attack rolls, and saving throws (minimum of 1).\nThe transformation lasts for the duration, or until the snake drops to 0 hit points or dies. When the spell ends, it becomes the object used to create it.\nIf the weapon used to create the snake has a bonus to attack rolls and damage rolls, those same bonuses are also conferred upon any snake created by the spell.",
	atHigherLevels:"When you cast this spell using a spell slot of 3rd level or higher, you can transform the staff into a giant constrictor snake or a swarm of poisonous snakes."
};
SpellsList["sneezing dust og"] = {
	name: "Sneezing Dust",
	classes: ["bard", "druid", "ranger", "wizard"],
	source: ["OG", 271],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "S: 20 ft rad",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Con",
	description: "any breathing crea save or incapacitated and suffocating; if conscious repeat save end turn to end",
	descriptionFull: "You unleash a cloud of irritating dust out from yourself to a distance of 20 feet. Creatures of your choice in the area must succeed a Constitution saving throw or begin sneezing uncontrollably. Creatures that do not need to breathe succeed their saving throw automatically.\nAn affected creature is incapacitated and begins suffocating. As long as it remains conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. A lesser restoration spell also ends the effect."
};
SpellsList["solid fog og"] = {
	name: "Solid Fog",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 271],
	level: 2,
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "a pinch of powdered animal hoof",
	duration: "Conc, 10 min",
	description: "20ft+20/SL rad, 10ft+10/SL high fog; obsc.; diff.terr.; slows fall; melee atk in or range atk through dis.",
	descriptionFull: "You create a 20-foot-radius, 10-foot-high cylinder of dense, palpable fog centered on a point within range. The cylinder spreads around corners, and its area is heavily obscured. It lasts for the duration or until a strong wind (at least 30 miles per hour) disperses it.\nIn addition to obscuring sight, the solid fog is so thick that the area is difficult terrain. Melee attack rolls made from within it (or ranged attack rolls whose projectiles pass through it) whose results are less than your spell save DC are lost.\nA creature or object that falls through the solid fog is slowed, so that each 10 feet of the fog that it passes through reduces falling damage by 1d6.",
	atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the radius of the cylinder increases by 20 feet and the height increases by 10 feet for each slot level above 2nd."
};
SpellsList["solipsism og"] = {
	name: "Solipsism",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 272],
	level: 7,
	school: "Illus",
	time: "1 a",
	range: "120 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "target stunned, watching world without reacting; repeat save at end of their turn to end spell",
	descriptionFull: "You manipulate the senses of one creature and attempt to convince them that they are the only real creature in all of existence and that everything around them is merely an illusion.\nThe target makes a Wisdom saving throw. On a failure, they become despondent and are stunned, watching the world around themselves with boredom or bemusement. Since they do not consider their surroundings to be real, they make no effort to interact with them or to defend themselves from any potential threat.\nThe target repeats its saving throw at the end of each of its turns, ending the effect early on a success."
};
SpellsList["soul whip og"] = {
	name: "Soul Whip",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 272],
	level: 2,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "create whip(finesse, reach, light) dealing 2d4+spell mod psychic dmg; bns to re-summon; see B",
	descriptionFull: "You weave together threads of wrathful thought to create a whip of solidified enmity in your hand. This magic whip lasts until the spell ends. It counts as a martial melee weapon with which you are proficient. It deals 2d4 + your spellcasting ability modifier psychic damage on a hit and has the finesse, light, and reach properties. In addition, when you use the whip to attack a target that charmed or frightened by you, you make the attack roll with advantage.\nIf you drop the weapon or throw it, it dissipates as it leaves your hand. Thereafter, while the spell persists, you can use a bonus action to cause the whip to reappear in your hand.",
	atHigherLevels:"When you cast this spell using a spell slot of 3rd or 4th level, the damage increases to 3d4 + your spellcasting ability modifier. When you cast it using a spell slot of 5th or 6th level, the damage increases to 4d4 + your spellcasting ability modifier. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d4 + your spellcasting ability modifier."
};
WeaponsList["soul whip og"] = {
	name: "Soul Whip",
	source: ["OG", 251],
	regExpSearch: /^(?=.*soul)(?=.*whip).*$/i,
	type: "Spell",
	ability: 4,
	abilitytodamage: true,
	baseWeapon: "whip",
	damage: ["2",4,"Psychic"],
	range: "Melee",
	description: "finesse, reach, light; +1D4 at SL 3,5&7; adv if target charmed/frightened by me; bns a to re-summon",
	list: "spell",
	tooltip: "You weave together threads of wrathful thought to create a whip of solidified enmity in your hand. This magic whip lasts until the spell ends. It counts as a martial melee weapon with which you are proficient. It deals 2d4 + your spellcasting ability modifier psychic damage on a hit and has the finesse, light, and reach properties. In addition, when you use the whip to attack a target that charmed or frightened by you, you make the attack roll with advantage.\nIf you drop the weapon or throw it, it dissipates as it leaves your hand. Thereafter, while the spell persists, you can use a bonus action to cause the whip to reappear in your hand.\n\nWhen you cast this spell using a spell slot of 3rd or 4th level, the damage increases to 3d4 + your spellcasting ability modifier. When you cast it using a spell slot of 5th or 6th level, the damage increases to 4d4 + your spellcasting ability modifier. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d4 + your spellcasting ability modifier."
};
SpellsList["speak with object og"] = {
	name: "Speak with Object",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 272],
	level: 3,
	school: "Conj",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "10 min",
	description: "object touched by creature within 10 days answeres 5 questions by sharing memories; see B",
	descriptionFull: "You summon the most potent memories of a creature by touching an object they once held. The spell fails if the object was the target of this spell within the last 10 days.\nUntil the spell ends, you can ask the memory up to five questions. The memory knows only what the creature knew up until the last moment it touched the object. The answers come in the form of memories, impressions, or emotions, and the memory is under no compulsion to offer answers if you are hostile to it or it recognizes you as an enemy. The spell doesn’t put you in contact with the original creature, or its soul."
};
SpellsList["squeaking floor og"] = {
	name: "Squeaking Floor",
	classes: ["artificer", "cleric", "wizard"],
	source: ["OG", 272],
	level: 3,
	school: "Abjur",
	ritual: true,
	time: "1 min",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "a rusty iron hinge",
	duration: "8 h",
	description: "50ft*50ft floor; crea > 3 lbs steps on squeak; audible in 100ft, 50ft if moving silently; know direction",
	descriptionFull: "You create a thin sheet of magical sensors along a stretch of even flooring or terrain with an area is up to 50 feet long and 50 feet wide. For the duration, if a creature weighing more than three pounds steps into the area, it emits loud, unmistakable squeaks that can be heard up to 100 feet away. The sound spreads around corners, and through 1 foot of stone, 1 inch of common metal, or 3 feet of wood blocks. Those who hear the squeaking automatically know the direction of the sounds.\nCreatures capable of moving completely silently reduce the audible range of the squeaking they produce by half. Flying creatures and others that avoid direct contact with the affected surface do not inspire the spell’s effects."
};
SpellsList["stumble og"] = {
	name: "Stumble",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 272],
	level: 1,
	school: "Ench",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a scrap of fruit skin or a drop of grease",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "each time cursed crea moves >5ft on their turn I rea to force Dex save; on fail prone and 0 movement",
	descriptionFull: "You curse a creature, causing them to suffer a humiliating fall. For the duration, if the target moves more than 5 feet on their turn, you can use your reaction to force them to make a Dexterity saving throw. On a failure, they fall prone and lose the rest of their movement.\nCreatures using a flying or swimming speed for their movement are immune to this spell’s effects."
};
SpellsList["suspended silence og"] = {
	name: "Suspended Silence",
	classes: ["artificer", "bard", "cleric", "ranger"],
	source: ["OG", 273],
	level: 3,
	school: "Ench",
	time: "1 min",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "a feather and a handful of gem dust worth 25 gp, which the spell consumes",
	duration: "24 h",
	description: "enchant obj <= 5 lbs & pick command; I say command as bns: obj has 20ft silence aura for 1 min; see B",
	descriptionFull: "You enchant an object weighing no more than 5 pounds, imbuing it with the silence spell. As you finish casting the spell, you assign a command word, which is inaudible to all but you, and is dragged inside the enchanted object. The object remains enchanted for the duration of the spell or until you speak the command word. \nAs a bonus action, you can speak the command word, and if your words are audible to the object, it immediately projects a silencing aura in a 20-foot-radius sphere centered on itself. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.\nIf the object moves, the aura moves with it. The aura lasts for 1 minute or until the object is destroyed."
};
SpellsList["switcheroo og"] = {
	name: "Switcheroo",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 273],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Wil",
	description: "I can swap positions of 2+1/SL crea (no constr./undead) willing or fail save; I can tel back as rea: see B",
	descriptionFull: "You attempt to exchange the positions of two creatures you can see within range. The targets must be of the same size category. If either target is unwilling, they make a Wisdom saving throw, and if they succeed, they are not eligible to participate in the switch. Constructs and Undead succeed their saving throw automatically. Additionally, until the end of your next turn, you can use your reaction to teleport to the position you were at when you cast this spell.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th, exchanging each the positions of targets that fail their saving throws as you desire."
};
SpellsList["sylvan vision og"] = {
	name: "Sylvan Vision",
	classes: ["druid", "ranger"],
	source: ["OG", 273],
	level: 1,
	school: "Div",
	ritual: true,
	time: "1 a",
	range: "200 ft",
	components: "V,M\u2020",
	compMaterial: "a fresh sprig of local flora, which the spell consumes",
	duration: "Conc, 10 min",
	description: "I can see through non-magical foliage",
	descriptionFull: "For the duration, nonmagical foliage does not obscure your vision."
};
SpellsList["synostodweomer og"] = {
	name: "Synostodweomer",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 273],
	level: 3,
	school: "Trans",
	time: "1 bns",
	range: "Self",
	components: "V,S",
	duration: "1 rnd",
	description: "until end of nxt turn I can touch crea (no constr./undead) and expend spell 1-5 SL for 2d8+1/SL heal",
	descriptionFull: "You channel the magical energy from a spell you know or have prepared into healing magic instead. Your hands glow with a golden curative radiance.\nUntil the end of your next turn, you can use your action to touch a creature and expend a spell slot of 5th level or lower, restoring a number of hit points to the target. The amount of hit points restores is 2d8 for a spell slot of 1st level, plus 1d8 for level higher than 1st, to a maximum of 6d8. This healing has no effect on yourself, Constructs, or Undead."
};
SpellsList["tail sweep og"] = {
	name: "Tail Sweep",
	classes: ["artificer", "druid", "sorcerer", "wizard"],
	source: ["OG", 273],
	level: 4,
	school: "Evoc",
	time: "1 a",
	range: "S: 10 ft rad",
	components: "S",
	duration: "Instantaneous",
	save: "Dex",
	description: "any crea in range 4d10+1d10/SL force damage and knocked prone; on save half dmg and no prone",
	descriptionFull: "A translucent, scaled tail uncoils from behind you and sweeps around you in a 10-foot-radius, and then vanishes as quickly as it appeared.\nEach creature of your choice within range must make a Dexterity saving throw. On a failure, a creature takes 4d10 force damage and is knocked prone. On a success, they take half as much damage and aren’t knocked prone.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};
SpellsList["tattoosion og"] = {
	name: "Tattoosion",
	classes: ["artificer", "sorcerer", "bard", "warlock", "wizard"],
	source: ["OG", 274],
	level: 0,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "S",
	duration: "1 min",
	description: "enchant tattoos: animate life-like, emit approp. sound, perm. relocate, new tattoo for spell mod h; see B",
	descriptionFull: "This spell is a minor magical trick that novice tattoosionists use for practice. You create one of the following magical effects:\n\n- You create lifelike animations of your tattoos, for example, causing a snake to slither in a spiral around your forearm, or re-arranging a series of letters or runes to spell something clever or vulgar. \n- You cause one of your tattoos to emit sounds appropriate to their nature, audible up to 10 feet away from you, for example, making a snake hiss. \n- You permanently relocate a tattoo, for example from your left cheek (face) to your left cheek (rump). \n- You make a colored shape, an image, or a symbol appear on a willing creature for a number of hours equal to your spellcasting ability modifier.\n\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["telepathy tap og"] = {
	name: "Telepathy Tap",
	classes: ["cleric", "sorcerer", "wizard"],
	source: ["OG", 274],
	level: 3,
	school: "Div",
	time: "1 a",
	range: "120 ft",
	components: "S",
	duration: "Conc, 10 min",
	description: "overhear telepathic convers. and message cantrip; if lots of telep. I pick my spell mod (min 2) crea; see B",
	descriptionFull: "You can overhear the telepathic conversations of other creatures within 120 feet of you, and the contents of any message cantrips cast in the same area. You do not detect the uncommunicated thoughts of creatures, nor do you understand telepathic conversations spoken in a language you don’t know.\nIn an area where numerous telepathic conversations are occurring at the same time, you must specify the specific creatures whose transmissions you wish to overhear, up to a number equal to your spellcasting ability modifier (minimum of 2).\nTelepathy tap does not allow you to overhear the telepathic conversations of creatures protected by a mind blank spell, nor does it grant the ability to telepathically send telepathic messages of your own to other creatures."
};
SpellsList["thorn spray og"] = {
	name: "Thorn Spray",
	classes: ["druid"],
	source: ["OG", 274],
	level: 4,
	school: "Trans",
	time: "1 a",
	range: "60 ft cone",
	components: "V,S,M",
	compMaterial: "the stem of a plant with thorns",
	duration: "Instantaneous",
	description: "split 10d6+2d6/SL pierc dmg between any crea hit with ranged spell atk; hit crea pois end my nxt trn",
	descriptionFull: "You create a spray of thick, painful thorns which you distribute in a 60-foot cone, dealing up to 10d6 piercing damage.\nMake a ranged spell attack for each creature of your choice within the area. When you do, divide the spell’s damage dice between the targets. For example, you can target two creatures for 5d6 damage each, or three creatures: one for 5d6, one for 3d6 and one for 2d6 damage.\nOn a hit, the target is poisoned until the end of your next turn",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 2d6 for each slot level above 4th."
};
SpellsList["time bomb og"] = {
	name: "Time Bomb",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: ["OG", 274],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "a working watch",
	duration: "Conc, 1 min",
	Save: "Con",
	description: "3d6+1d6/SL force dmg; save 1/2 dmg+spell ends; rpt save turnend; a rpt dmg; 0 HP = explode; see B",
	descriptionFull: "You cause a well of pressure to build from within a creature you can see within range, turning them into a living bomb. The target must make a Constitution saving throw. On a failure, they take 3d6 force damage, and their movement speed is halved. On a success, they take half the amount and are otherwise unaffected. Elementals and creatures immune to the grappled condition succeed their saving throw automatically. An affected creature repeats its saving throw at the end of each of their turns, ending the effect on a success.\nFor the duration, you can use an action on your turn to deal 3d6 force damage to an affected target. If the target is reduced to 0 hit points, they explode, causing each creature within 15 feet of them to make a Dexterity saving throw. Creatures that fail this saving throw take 4d6 bludgeoning damage on a failure, or half as much on a success.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage for each of its effects increases by 1d6 for each slot level above 3rd."
};
SpellsList["time knife og"] = {
	name: "Time Knife",
	classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],
	source: ["OG", 275],
	level: 0,
	descriptionCantripDie: "`CD` ranged spell attacks for 1d6+spell mod slashing dmg",
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "ranged spell attack for 1d6+spell mod slashing dmg; more blades at CL 5, 11 and 17",
	descriptionFull: "A magical blade of disruptive energy sails toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d6 slashing damage plus force damage equal to your spellcasting ability modifier. \nThe spell creates additional blades when you reach higher levels: two blades at 5th level, three blades at 11th level, and four blades at 17th level. You can direct the blades at the same target or at different ones. Make a separate attack roll for each blade."
};
WeaponsList["time knife og"] = {
	name: "Time Knife",
	source: ["OG", 275],
	regExpSearch: /^(?=.*time)(?=.*knife).*$/i,
	type: "Cantrip",
	ability: 4,
	abilitytodamage: true,	
	damage: ["C",6,"slashing"],
	range: "120ft",
	description: "Each d6 is a separate knife requiring separate rolls. Add spell mod each time.",
	list: "spell",
	tooltip: "A magical blade of disruptive energy sails toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d6 slashing damage plus force damage equal to your spellcasting ability modifier. \nThe spell creates additional blades when you reach higher levels: two blades at 5th level, three blades at 11th level, and four blades at 17th level. You can direct the blades at the same target or at different ones. Make a separate attack roll for each blade."
};
SpellsList["time parasite og"] = {
	name: "Time Parasite",
	classes: ["bard", "sorcerer", "warlock"],
	source: ["OG", 275],
	level: 2,
	school: "Abjur",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "1 rnd",
	description: "target saves or incapacitated and I gain extra action at the end of their turn",
	save: "Con",
	descriptionFull: "You attempt to steal time from a creature you can see within range. The target makes a Constitution saving throw. On a failure, they become incapacitated until the end of their next turn, and you gain an additional action, which you can use at the end of the target’s next turn."
};
SpellsList["towering oak og"] = {
	name: "Towering Oak",
	classes: ["druid", "ranger"],
	source: ["OG", 275],
	level: 1,
	school: "Illus",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Grow spell mod inches taller and gain spell mod Cha(intimidation) bonuses.",
	descriptionFull: "Your voice becomes deeper, rasping with the strength of earth. For the duration, you gain the following benefits:\n- You grow a number of inches taller equal to your spellcasting ability modifier.\n- You gain a bonus to Charisma (Intimidation) checks that you make equal to twice your spellcasting ability modifier."
};
SpellsList["toxic tongue og"] = {
	name: "Toxic Tongue",
	classes: ["artificer", "druid", "ranger", "warlock"],
	source: ["OG", 275],
	level: 3,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "poison in my mouth; spit for 3d10+1d8/SL; half on save; bns to apply poison to blade/ammo; see B",
	descriptionFull: "Your mouth gains the ability to create a virulent poison for the duration. You can use your poison in two ways:\n- Poison Spit: As a bonus action, you can spray a stream of poison from your mouth, targeting one creature you can see within 30 feet of you. The target makes a Constitution saving throw. On a failure, they take 3d10 poison damage.\n- Poison Weapon: As a bonus action, you can apply your poison to a melee weapon or piece of ammunition on your person or carried by a willing creature within 5 feet of you. The poison’s potency lasts until the start of your next turn. If the poisoned weapon hits a creature, the target must make a Constitution saving throw, taking 3d6 poison damage on a failure, or half as much on a success. The poison has no effect if ingested.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage of the poison increases by 1d8 for each slot level above 3rd."
};
WeaponsList["toxic tongue og"] = {
	name: "Toxic Tongue",
	source: ["OG", 275],
	regExpSearch: /^(?=.*toxic)(?=.*tongue).*$/i,
	type: "Spell",
	ability: 4,
	dc: true,
	damage: ["3",10,"Poison"],
	range: "30ft",
	description: "Spit Poison as Bonus Action; Con Save: no damage; +1d8 dmg per SL > 3.",
	list: "spell",
	tooltip: "Your mouth gains the ability to create a virulent poison for the duration. You can use your poison in two ways:\n- Poison Spit: As a bonus action, you can spray a stream of poison from your mouth, targeting one creature you can see within 30 feet of you. The target makes a Constitution saving throw. On a failure, they take 3d10 poison damage.\n- Poison Weapon: As a bonus action, you can apply your poison to a melee weapon or piece of ammunition on your person or carried by a willing creature within 5 feet of you. The poison’s potency lasts until the start of your next turn. If the poisoned weapon hits a creature, the target must make a Constitution saving throw, taking 3d6 poison damage on a failure, or half as much on a success. The poison has no effect if ingested.\n\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage of the poison increases by 1d8 for each slot level above 3rd."
};
SpellsList["treasure scent og"] = {
	name: "Treasure Scent",
	classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],
	source: ["OG", 276],
	level: 3,
	school: "Div",
	time: "1 a",
	range: "S: 30ft rad",
	components: "V,S",
	duration: "1 h",
	description: "detect copper, silver, gold, platinum, mithral, adamantine, and gems; exact location in 10ft; see B",
	descriptionFull: "A multihued mist appears in front of you before swirling up into your nose. For the duration, you can detect copper, silver, gold, platinum, mithral, adamantine, and gems within 30 feet of you, as well as differentiate between types of valuables you sense.\nWhen you detect valuables, their exact location is not revealed, only their presence and direction. When you come within 10 feet of treasure, you can pinpoint its exact location. This spell can’t locate treasure if more than 5 feet of stone, 1 foot of common metal, or any thickness of lead, even a thin sheet, blocks a direct path between you and the treasure."
};
SpellsList["tree steed og"] = {
	name: "Tree Steed",
	classes: ["druid", "ranger"],
	source: ["OG", 276],
	level: 2,
	school: "Ench",
	time: "10 min",
	range: "Touch",
	components: "V,S",
	duration: "24 h",
	description: "turn log into steed; AC 16, vuln. fire; chose br.bear, crocodile, elk, giant goat, ox or riding horse; see B",
	descriptionFull: "You touch a wooden log at least one foot in diameter, and five to ten feet long, causing it to spring to life, sprouting four wooden legs. The steed takes on a form that you choose: a brown bear, crocodile, elk, giant goat, ox or riding horse. The steed has the statistics of your chosen form, though it a plant instead of a Beast. Additionally, your steed’s wooden exterior grants it an AC of 16, and it is vulnerable to fire damage. It cannot speak, but understands sylvan and druidic, and when you cast the spell, you can give it the ability to understand one additional language you know. It is friendly to you and your companions, and obeys your commands.\nThe steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.\When the steed drops to 0 hit points, its legs retract and it falls to the ground, becoming a normal log again. If it is slain by fire damage, the log is burned and cannot be used as a steed again.\nYou can’t create more than one steed with this spell at a time. As bonus action, you can release the steed from your service, causing it to become a mundane log."
};
SpellsList["twisting innards og"] = {
	name: "Twisting Innards",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", ],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "1 h",
	description: "protect crea (no Const/Unde/Plant); on crit & sneak roll d4 on 3-4 (SL 6: 2-4, SL 7: 1-4) no extra dmg",
	descriptionFull: "You cause the target’s vital organs to writhe, shift, and move about, making it difficult to strike the target in a vulnerable area. For the duration, if the target is subjected to a critical hit or sneak attack, roll a 1d4. If the result is a 3-4, the target is unaffected by the extra damage caused by the sneak attack or critical it.\nThis spell can’t affect Constructs, Plants, or Undead.",
	atHigherLevels:"If you cast this spell using a spell slot of 6th level, the additional damage from a critical hit or sneak attack is avoided on a roll of 2-4. If you use a spell slot of 7th level, the target is rendered immune to critical hits and sneak attacks"
};
SpellsList["unbinding og"] = {
	name: "Unbinding",
	classes: ["cleric", "sorcerer", "wizard"],
	source: ["OG", 277],
	level: 9,
	school: "Abjur",
	time: "1 a",
	range: "S: 120 ft rad",
	components: "V,S,M\u2020",
	compMaterial: "a pristine yellow diamond worth at least 5,000 gp, which the spell consumes",
	duration: "Instantaneous",
	description: "dispel certain effects SL <=7th in rad: charm, paralyse, arc. lock, haste, slow, curse, mag walls... see B",
	descriptionFull: "A burst of yellow-white energy erupts from your body in a 120-foot radius, dispelling certain spells of 7th level or lower (without regard to your wishes) as follows:\n\n- Charmed creatures are released from their enchantments.\n- Paralyzed creatures under the effect of the hold person, hold monster or similar magic are freed from their paralysis.\n- Magical locking mechanisms such as arcane lock are opened, and a magic mouth speaks its message. The opening of locks or other closures immediately triggers any alarms or traps attached to them.\n- Temporal alterations, such as haste and slow spells are ended.\n- The bestow curse and geas spells are dispelled.\n- Magical barriers such as wall of fire, wall of stone, wall of force, guards and wards, symbol and forcecage are dispelled.\n- A magic circle that currently holds an imprisoned creature is dispelled. Any released creature might or might not be friendly to you or your allies.\n- Ammunition enchanted by spells such as conduit and seeking lose their magic. A ring of spell storing releases its contents into the nearest unoccupied space. Spells bound by a contingency immediately release them into the nearest unoccupied space.\n- A magic jar is shattered."
};
SpellsList["unconscious command og"] = {
	name: "Unconscious Command",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: ["OG", 277],
	level: 6,
	school: "Ench",
	time: "1 min",
	range: "Touch",
	components: "V,S",
	duration: "1 h",
	save: "Wis",
	description: "put max 2 sentence command in crea mind; fail: crea unconsc. & no memory; new save on dmg; see B",
	descriptionFull: "You touch a creature’s forehead, implanting a course of activity (limited to a sentence or two) deep into the recesses of their mind. You must share at least one language with the target. You dictate the trigger for the command to take hold of the target, which must be worded in such a manner as to sound reasonable. You can cause the creature to attack another creature, even in the face of overwhelming odds, but not to cause direct harm to themselves (for example, “When you are alone in a room with Old Gus, strangle him to death!”). The target makes a Wisdom saving throw. On a failure, the target has no knowledge of the spell affecting them, and they fall unconscious (or if they are immune to sleep magic, are stunned) until the end of their next turn, at which time they lose all memory of the last 10 minutes. Creatures that can’t be charmed are immune to the spell.\nFor the duration, when the conditions you have set come to pass, the target is forced to single-mindedly attempt to fulfill your command. For the next hour, each time the target takes damage, it makes a new Wisdom saving throw against the spell, ending it on a success. When the spell ends, the target retains any memories of actions it took while under the spell.\nThe spell is detectable by the detect magic and detect thoughts spells, but the course of activity itself is not discernible. A remove curse spell ends the effect, but a dispel magic spell does not.\n\n(Note: Level 6 Duration adjusted by xika.)",
	atHigherLevels:"When you cast this spell using a spell slot of 7th level, the duration increases to 24 hours. If you use a spell slot of 8th level, the duration is 30 days. If you use a 9th level spell slot, the spell lasts until it is dispelled."
};
SpellsList["undead alacrity og"] = {
	name: "Undead Alacrity",
	classes: ["cleric", "wizard"],
	source: ["OG", 277],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "buff 3+1/SL undead: speed +10ft, +1 to AC, Dex Save and Iniative",
	descriptionFull: "You imbue up to three undead creatures you can see within range with the speed of the living. For the duration, the targets’ base walking speed is increased by 10 feet, and they gain a +1 bonus to their AC, Dexterity saving throws, and initiative rolls.",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};
SpellsList["undead detonation og"] = {
	name: "Undead Detonation",
	classes: ["cleric", "wizard"],
	source: ["OG", 278],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "zombie I control or corpse mov. max 40ft & explodes 6d6+1d6/SL nec dmg in 10ft; 1/2 on save; see B",
	descriptionFull: "You cause a zombie under your control (or an available corpse of a Medium-sized creature, which becomes a zombie) that you can see to immediately move up to 40 feet and explode. Creatures in a 10-foot radius of the zombie must make a Dexterity saving throw, taking 6d6 necrotic damage and 6d6 thunder damage on a failed save, or half as much on a successful one. If the zombie is reduced to 0 hit points, it explodes immediately.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage of each of its effects increases by 1d6 for each slot level above 4th."
};
SpellsList["undead emissary og"] = {
	name: "Undead Emissary",
	classes: ["cleric", "wizard"],
	source: ["OG", 278],
	level: 4,
	school: "Necro",
	ritual: true,
	time: "1 h",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "a cold iron crown with mithril runes worth at least 500 gp, which the spell consumes",
	duration: "1 h",
	description: "empower undead as emissary; in 1 mile I can use senses, speak and command other undead; see B",
	descriptionFull: "You place the iron crown onto a willing undead creature in your service, empowering it as your emissary. For the duration, the target gains 3d8 temporary hit points, and has advantage on saving throws against being frightened and effects that turn undead, and its Intelligence and Wisdom scores increase by an amount equal to your spellcasting ability modifier (minimum of 1), and it can cast the thaumaturgy cantrip, allowing it to speak. Additionally, you can gift your emissary with the ability to speak one language you know that it did not know in life.\nWhile the target is within 1 mile of you, you can communicate with it telepathically. As an action, you can perceive the world through its senses, seeing what it sees, hearing what it hears. Additionally, you can speak with your own voice through your emissary. During this time, you are deaf and blind with regard to your own senses.\nAdditionally, on each of the target’s turns, it can use a bonus action to mentally command any creature within 60 feet of itself that you created with the animate dead spell. While you are in possession of your emissary’s sense, you can issue these commands yourself. Finally, when you cast a spell with a range of touch, the target undead can deliver the spell as if it had cast the spell. The undead must be within 1 mile of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.\nIf your emissary is turned or reduced to 0 hit points, your connection to it is severed, it loses any remaining temporary hit points it has, and the iron crown upon its head clatters to the floor, and the mithril runes carved into it disappear. You can’t have more than one undead emissary at a time. If you cast this spell while you already have an undead emissary, the first loses its temporary hit points, its crown disintegrates.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the temporary hit points are increased by 1d8 for each slot level above 4th. If you use a spell slot of 5th level, the duration increases to 8 hours. If you use a spell slot of 6th level, the duration is 24 hours. If you use a spell slot of 7th level or higher, the spell and your control over the undead last until dispelled, even if the original spell used to animate the undead expires."
};
SpellsList["undead regeneration og"] = {
	name: "Undead Regeneration",
	classes: ["cleric", "wizard"],
	source: ["OG", 279],
	level: 3,
	school: "Necro",
	time: "1 a",
	range: "60 ft",
	components: "V,M\u2020",
	compMaterial: "the freshly severed head of a Medium-sized Beast, which the spell consumes",
	duration: "24 h",
	description: "restore 2d12+1d12/SL + spell mod hitpoints in up to six undead",
	descriptionFull: "You reinforce the magic that keeps an undead animated. Up to six undead creatures of your choice that you can see within range each regain hit points equal to 2d12 + your spellcasting ability modifier.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d12 for each slot level above 3rd."
};
SpellsList["vacancy og"] = {
	name: "Vacancy",
	classes: ["artificer", "sorcerer", "wizard"],
	source: ["OG", 279],
	level: 4,
	school: "Illus",
	time: "10 min",
	range: "60 ft",
	components: "V,S,M\u0192",
	compMaterial: "a square of fine black silk embroidered with silver thread worth at least 100 gp",
	duration: "24 h",
	description: "structure max 50ft cube appears vacant, neglected, and unused; Wis save to dispell if touching object",
	descriptionFull: "You cause a structure (or part of a larger structure) no larger than a 50-foot cube to appear vacant, neglected, and unused. Those who enter the area see dust on the floor, cobwebs, dirt, and other conditions typical of a long-abandoned place, including when looking inside drawers or other shuttered spaces. When you cast the spell, you can cause furniture or other objects in the room to become hidden by the illusion, although they remain physically present.\nIf a creature passes through the area, they seem to leave footprints in the dust, and tear away cobwebs, and gain the olfactory stimulation of inhaling the illusory dust. Unless a creature comes into contact with an object hidden by the spell, the space appears empty.\nWhen a creature comes into contact with an object hidden by the spell, they immediately make a Wisdom saving throw. On a success, the spell is lost. On a failure, they believe the hidden object to be invisible. Removing an object from the spell’s area causes it to reappear and assume its normal appearance."
};
SpellsList["wall of pain og"] = {
	name: "Wall of Pain",
	classes: ["cleric", "warlock", "wizard"],
	source: ["OG", 279],
	level: 5,
	school: "Necro",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "a length of viscera",
	duration: "Conc, 10 min",
	save: "Con",
	description: "60ft lng, 1ft thk; cast: all in area 6d8+1d8/SL nec dmg; save 1/2; 1 side repeat dmg ea turn in 5ft; see B",
	descriptionFull: "You create a wall of twisting energy on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall itself is invisible, but the area is filled with dim green light. The wall lasts for the duration.\nWhen the wall appears, each creature within its area must make a Constitution saving throw. On a failed save, a creature takes 6d8 necrotic damage, or half as much damage on a successful save.\nOne side of the wall, selected by you when you cast this spell, deals 6d8 necrotic damage to each creature that ends its turn within 5 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there.\nThe other side of the wall deals no damage.",
	atHigherLevels:"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["water whip og"] = {
	name: "Water Whip",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 280],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "30 ft",
	components: "S,M",
	compMaterial: "a waterskin",
	duration: "Instantaneous",
	description: "ranged atk for 2D12 + 1D12/SL Bludgeoning; move target 15ft + 5ft/SL.; grapple if within 5ft.",
	descriptionFull: "You extend a whip of water at a target within range. Make a ranged spell attack; on hit, it takes 2d12 bludgeoning damage and can be pushed or pulled up to 15 feet in any direction but upwards. If pulled within 5 feet of you, use a bonus action to attempt to grapple it. At Higher Levels: When cast using a spell slot of 2nd level or higher, damage increases by 1d12 and movement distance by 5 feet per slot level above 1st.",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d12, and the distance the target is moved increases by 5 feet for each slot level above 1st (to a maximum of 30 feet)."
};
SpellsList["waypoint og"] = {
	name: "Waypoint",
	classes: ["wizard"],
	source: ["OG", 280],
	level: 9,
	school: "Abjur",
	time: "1 h",
	range: "30 ft",
	components: "V,S,M\u2020",
	compMaterial: "an ornately inscribed platinum stake costing at least 5000 gp, which the spell consumes",
	duration: "24 h",
	description: "I anchor to point in place and time; as action or on trigger/command word I return; only I remember",
	descriptionFull: "You pound an ornate stake into the ground, magically anchoring your essence to the current coordinates of timeline, creating a waypoint for your eventual return. Once cast, for the duration, you can return to your waypoint using your action.\nYou can also set conditions that would trigger a return to your waypoint (for example, your death, the failure of a particular objective, or a spoken command word).\nReturning to your waypoint consumes it, undoing everything that happened since its creation. Only you retain any memory of the undone time.\nThe waypoint immediately disappears if you travel through time in any way, move to a different plane, or after 24 hours passes."
};
SpellsList["whelm og"] = {
	name: "Whelm",
	classes: ["artificer", "bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source: ["OG", 280],
	level: 0,
	school: "Ench",
	
	time: "1 a",
	range: "30 ft",
	components: "S",
	duration: "Instantaneous",
	save: "Wis",
	descriptionCantripDie: "creat. save or `CD`d6 psychic damage; if taken to 0 hp unconscious + stable; see B",
	description: "creat. save or 1d6 psychic damage; if taken to 0 hp unconscious + stable; +1d6 at CL 5,11,17",
	descriptionFull: "You thrust your arm forward with your palm open and fingers splayed, targeting a creature you can see within range, and attempt to overwhelm its mind. The target makes a Wisdom saving throw, taking 1d6 points of psychic damage on a failure, or half as much on a success. Constructs, Undead, and creatures with an Intelligence score of 4 or lower are immune to the spell.\If the spell reduces a creature to 0 hit points, they are unconscious, but stable. They remain unconscious for 1 minute, or until someone uses an action to shake or slap them awake, at which time they gain 1 hit point.\nIf the creature takes damage while they are unconscious, they lose their stability and die, or begin to make death saving throws.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["whelm og"] = {
	name: "Whelm",
	source: ["OG", 280],
	regExpSearch: /^(?=.*whelm).*$/i,
	type: "Cantrip",
	ability: 4,
	cd: true,	
	damage: ["C",6,"psychic"],
	range: "120ft",
	description: "if taken to 0: unconscious for 1 min + stable; undead, construct & <int4 immune",
	list: "spell",
	tooltip: "You thrust your arm forward with your palm open and fingers splayed, targeting a creature you can see within range, and attempt to overwhelm its mind. The target makes a Wisdom saving throw, taking 1d6 points of psychic damage on a failure, or half as much on a success. Constructs, Undead, and creatures with an Intelligence score of 4 or lower are immune to the spell.\If the spell reduces a creature to 0 hit points, they are unconscious, but stable. They remain unconscious for 1 minute, or until someone uses an action to shake or slap them awake, at which time they gain 1 hit point.\nIf the creature takes damage while they are unconscious, they lose their stability and die, or begin to make death saving throws.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["wild flight og"] = {
	name: "Wild Flight",
	classes: ["cleric", "sorcerer"],
	source: ["OG", 280],
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S,M",
	compMaterial: "faerie dust",
	duration: "Instantaneous",
	save: "Dex",
	description: "double remain. move; move in 10ft increm. through crea & deal 4d6+1d6/SL dmg; 1/2 on save; see B",
	descriptionFull: "You become a swirling orb of magical energy. You double your remaining movement speed. Until the end of your turn, you can use your movement speed to move freely through creatures. Your velocity so high that you can only change direction every 10 feet you move.\nEach creature you move through must make a Dexterity saving throw, taking 4d6 radiant damage on a failure, or half as much on a success. A creature takes an additional 1d6 damage for every size category larger than Medium they exceed (for example, a Huge creature takes an additional 2d6 damage). A creature can only be damaged by your travel path once.\nIf you end your turn in a space occupied by another creature, you take 2d6 force damage and are shunted to the nearest available space.",
	atHigherLevels:"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
SpellsList["wild runner og"] = {
	name: "Wild Runner",
	classes: ["druid", "ranger"],
	source: ["OG", 281],
	level: 4,
	school: "Trans",
	time: "1 min",
	range: "Self",
	components: "V,S,M",
	compMaterial: "a fragment of hoof or antler",
	duration: "1 h",
	description: "grow hoofed legs; str min 18, dex/con min 14, speed 50ft; natural weapon; charge atk; mount; see B ",
	descriptionFull: "You alter your form, growing a sturdy second pair of hoofed legs, complete with tail. This growth increases your size by one category—from Medium to Large, for example. Your equipment adapts to your new form.\nFor the duration, you are a Monstrosity, and you gain the following benefits:\n\n- Your strength cannot be less than 18, and your Dexterity and Constitution cannot be less than 14, and your base walking speed becomes 50 feet.\n- You gain a set of natural weapons, choosing from hooves (which deal 2d6 bludgeoning damage) or antlers (which deal 2d6 piercing damage). \n- If you move at least 30 feet straight toward a target and hit it with a weapon attack on the same turn, the target takes an additional 2d6 damage. You can deal this additional damage only once per turn.\n- You can carry a rider one size category smaller than you.\n\nYou can end the spell early using a bonus action."
};
SpellsList["wind at our backs og"] = {
	name: "Wind at Our Backs",
	classes: ["cleric", "druid", "paladin", "ranger"],
	source: ["OG", 281],
	level: 5,
	school: "Div",
	ritual: true,
	time: "10 min",
	range: "60 ft",
	components: "V,S,M\u0192",
	compMaterial: "a brass talisman with inlaid amethyst crystals worth at least 500 gp",
	duration: "24 h",
	description: "bless one vessel or 10 creatures; double travel speed (non-combat); less ill fortune/bad weather; see B",
	descriptionFull: "You bless up to ten willing creatures you can see within range with good fortune as they travel. Difficult terrain doesn’t slow the group’s travel, and they can’t become lost except by magical means.\nAlternatively, you can bless one vessel that travels by sea or air, doubling its travel pace. The spell does not affect the vessel’s speed in combat.\nFor the duration the blessed target(s) travel at double the normal pace, provided they are all traveling together in the same direction.\nAdditionally, any rolls the DM make that result in ill fortune or undesirable weather for the group, the DM rolls a 1d2. If the result is a 2, the results do not affect the group (or vessel) in any way."
};
SpellsList["witness og"] = {
	name: "Witness",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["OG", 281],
	level: 3,
	school: "Div",
	time: "1 a",
	range: "Touch",
	components: "S",
	duration: "Conc, 1 h",
	description: "link w/ willing crea; use a to experience their senses; loose all my senses during; share dmg taken; see B",
	descriptionFull: "You touch a willing creature, creating a magical link from their senses to your own that functions over any distance. For the duration, you can use your action to experience the world through the target’s senses, including sight, sound, touch, smell and taste, and any special senses such as darkvision. While doing so, you are blinded, deafened, and restrained, and your own senses of taste, smell and touch are suspended. You can speak normally, but the only actions you can take are to make Wisdom and Intelligence ability checks, or to cast a spell that allows you to communicate with the target (for example, message or sending). You can return to your own senses as a bonus action.\nAdditionally, if the target takes damage while you are experiencing its senses, you take half the amount as psychic damage.\nThe spell ends if the target is on plane of existence different than your own."
};
SpellsList["wizen og"] = {
	name: "Wizen",
	classes: ["cleric", "sorcerer", "warlock", "wizard"],
	source: ["OG", 282],
	level: 6,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S,M\u2020",
	compMaterial: "desecrated gem dust worth at least 1000 gp, which the spell consumes",
	duration: "Conc, 10 h",
	save: "Cha",
	description: "age human./beast; save fail: 1d6 aged & necrotic dmg; repeat save start turn; repeat aging as a; see B",
	descriptionFull: "A jet-black beam fires from your hand and ages one Humanoid or Beast you can see within range. The target makes a Charisma saving throw. If they fail, you curse the target, roll a 1d6 and deal the results in necrotic damage to the target, and age them by an equivalent number of years.\nFor the duration, you can use your action to repeat the aging process on your turn, up to an additional number of times equal to your spellcasting ability modifier (minimum of 1). Each additional time you age the target, it must succeed a Constitution saving throw or take one level of exhaustion.\nThe target can repeat its saving throw at the start of its turns, ending the spell on a success. The unnatural aging lingers after the spell ends, and the target gradually returns to their natural age over the course of a year, or until removed by a remove curse spell or similar magic.\nA creature aged past its maximum natural lifespan must begin to make death saving throws.",
	atHigherLevels:"When you cast this spell using a spell slot of 7th level, the die is increased to 1d8, and its effects linger for a decade. At 8th level, the die is increased to 1d10, and its effects linger for a century. At 9th level, the die is increased to 1d12, and its effects, including any exhaustion applied by the aging process, are permanent."
};
SpellsList["wood rot og"] = {
	name: "Wood Rot",
	classes: ["artificer", "druid", "wizard"],
	source: ["OG", 282],
	level: 1,
	school: "Trans",
	time: "1 a",
	range: "Touch",
	components: "S,M",
	compMaterial: "a termite queen’s carapace",
	duration: "Instantaneous",
	description: "plant: 4d6+1d6/SL necr, save 1/2; obj worn/carried: dex sv or brittle; obj: 5+5/SL cu ft destroy.; see B",
	descriptionFull: "You touch a plant creature or nonmagical wooden object, and an insidious rot immediately taints it.\nIf the target is a plant, they must make a Constitution saving throw, taking 4d6 points of necrotic damage on a failure or half as much on a success.\nIf the target is a nonmagical wooden object that isn’t being worn or carried, you can destroy up to 5 cubic feet of it, ending the spell.\nIf the target is a wooden shield or armor being carried or worn by a creature, the target makes a Dexterity saving throw. On a failure, the shield or armor becomes brittle, and the next time a creature hits the creature with an attack, the shield or armor is destroyed.\nIf the target is a wooden weapon (for example, a club or quarterstaff) being word or carried by a creature, make a melee spell attack. On a hit, the weapon becomes brittle, and the next time the target makes a damage roll with the weapon, the result is reduced by an amount equal to your spellcasting ability modifier, and the weapon is destroyed.",
	atHigherLevels:"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6, and you can destroy 5 additional cubic feet of wood for each slot level above 1st."
};
SpellsList["wrack og"] = {
	name: "Wrack",
	classes: ["sorcerer", "warlock", "wizard"],
	source: ["OG", 283],
	level: 4,
	school: "Necro",
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "save or cursed; repeat save each rnd; as a deal 3d10+1d10/SL nec damage and Str save or prone; see B",
	descriptionFull: "You target a creature you can see within range with a painful curse. The target makes a Constitution saving throw. On a failure, the target’s body blisters with weeping sores, and its eyes cloud with blood, rendering it blind for the duration of the spell. Constructs, Undead, and creatures immune to disease succeed their saving throw automatically.\nFor the duration of the spell, you can use an action on your turn to deal 3d10 necrotic damage to the target, which must succeed a Strength saving throw or fall prone.\nThe target can repeat its saving throw at the end of each of its turns, ending the effect early on a success.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};
SpellsList["wyrmhole og"] = {
	name: "Wyrmhole",
	classes: ["sorcerer", "wizard"],
	source: ["OG", 283],
	level: 9,
	school: "Conj",
	time: "1 a",
	range: "60 ft",
	components: "V,S,M\u2020",
	compMaterial: "A platinum hourglass worth at least 5,000 gp filled with diamond dust worth at least 20,000 gp. The dust is consumed.",
	duration: "Conc, 1 min",
	description: "create a portal between now and min 24h in the future or past at same spot; see B",
	descriptionFull: "You conjure a portal linking an unoccupied space you can see within range to the same location in a different time of your choice. The destination must be at least 24 hours apart from your current location in time.\nThe portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration. The portal has a front and a back at each time where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other time, appearing in the unoccupied space nearest to the portal.\nDeities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains."
};
SpellsList["xorn movement og"] = {
	name: "Xorn Movement",
	classes: ["artificer", "druid", "sorcerer", "wizard"],
	source: ["OG", 283],
	level: 5,
	school: "Trans",
	time: "1 a",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "a pristine fold of xorn hide worth at least 500 gp",
	duration: "Conc, 1 min",
	description: "burrow through earth/stone at move speed w/o disturbing it; can breathe; attack or casting ends spell",
	descriptionFull: "A yellow glow spreads over your entire form, shedding dim light in a 5-foot radius. For the duration, you burrow through nonmagical, unworked earth and stone at your movement speed. While doing so, you don’t disturb the material you move through, and you can breathe normally while entombed in earth and rock. The spell ends if you cast another spell or attack a creature.\nWhen the spell ends, if you have not emerged into a space large enough to contain your body, you are shunted to the nearest unoccupied space, taking 1d6 points of bludgeoning damage for every 5 feet you are moved."
};
SpellsList["zap og"] = {
	name: "Zap",
	classes: ["bard", "sorcerer", "wizard"],
	source: ["OG", 284],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	descriptionCantripDie: "ranged spell attack; random type of `CD`d8 damage; see B",
	description: "ranged spell attack; random type of 1d8 damage; +1d8 at CL 5,11,17; see B",
	descriptionFull: "A thrum of chaotic magic streaks out of you toward one creature of your choice that you can see within range. Make a ranged spell attack. If it hits, roll a d8 to determine the type of damage, then deal 1d8 of that type to the creature. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). Each time the damage dice increase, you can modify the results of your damage type’s roll by an additional ±1.\n\nZap Damage Type:\n1 fire\n2 cold\n3 acid\n4 lightning\n5 thunder\n6 radiant\n7 force\n8 psychic\n"
};
WeaponsList["zap og"] = {
	name: "Zap",
	source: ["OG", 284],
	regExpSearch: /^(?=.*zap).*$/i,
	type: "Cantrip",
	ability: 4,
	damage: ["C",8,"Special"],
	range: "60ft",
	description: "Roll 1d8; 1:fire, 2:cold, 3:acid, 4:light, 5:thdr, 6: rad, 7: force, 8: psy; see B",
	list: "spell",
	tooltip: "A thrum of chaotic magic streaks out of you toward one creature of your choice that you can see within range. Make a ranged spell attack. If it hits, roll a d8 to determine the type of damage, then deal 1d8 of that type to the creature. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). Each time the damage dice increase, you can modify the results of your damage type’s roll by an additional ±1.\n\nZap Damage Type:\n1 fire\n2 cold\n3 acid\n4 lightning\n5 thunder\n6 radiant\n7 force\n8 psychic\n"
};
SpellsList["zone of self immolation og"] = {
	name: "Zone of Self-Immolation",
	classes: ["druid", "sorcerer", "wizard"],
	source: ["OG", 284],
	level: 5,
	school: "Abjur",
	time: "1 a",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "a fragment of charred tree bark",
	duration: "Conc, 1 h",
	description: "30ft+10ft/SL rad; spell level 4+1/SL or lower creating flame backfires only on caster; see B",
	descriptionFull: "You create a 30-foot-radius sphere centered on a point you can see within range where magical fire twists against its creator. The zone is invisible, but smells of ash and sulfur, which is perceptible with a successful Wisdom (Perception) check against your spell save DC.\For the duration, nonmagical flames are immediately extinguished in the area. If a creature in the area casts a spell of 4th level or lower cast that would create magical flame, the spell backfires and they (and only they) become the target of the spell’s effects instead. If the spell requires an attack roll and the result would hit the caster, it does so. If the spell requires a saving throw, the caster must do so.\nAdditionally, creatures in the area have resistance to fire damage that they did not cause themselves. The breath weapons of Dragons are unaffected by any of the spell’s effects, including this resistance.",
	atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 10 feet for each slot level above 5th.\nAdditionally, the zone causes spells of one level higher to backfire for each slot level above 5th"
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
	skills : ["\n\n" + toUni("MyClass") + ": Choose two from Acrobatics, Animal Handling, Athletics, Deception, Intimidation, Performance, Persuasion and Stealth.", "\n\n" + toUni("MyClass") + ": none"],
	armorProfs: {
		primary : [false, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, false]
	},
	toolProfs : { 
		primary : [["Musical instrument", 1], ["Artisan Tool", 1]],
		secondary : [["Musical instrument", 1]]
	},
	spellcastingFactor: 1,
	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : [5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]
	},
	spellcastingList : {
		spells : [
		//Cantrips
		"booming blade", "cursory ward og", "dancing lights", "dulling chains og", "encode thoughts", "frigidigitation og", "gift of the soothsayer og", "green-flame blade", "leeocks lucky coin og", "magic stone", "message", "minor illusion", "nature bolt og", "peal of nine bells og", "prestidigitation", "produce flame", "puff of smoke og", "sacred strike og", "sanguine strike og", "sapping sting", "thaumaturgy", "thunderclap", "whelm og", "word of radiance", "zap og",
		//Level 1
		"alarm", "allergen cloud og", "arcane strike", "catapult", "ceremony", "chaos bolt", "charm person", "cheetah sprint og", "color spray", "cure wounds", "detect magic", "drunkards breath og", "dust dash og", "ensnaring strike", "faerie fire", "find familiar", "frost fingers", "gift of alacrity", "goodberry", "hail of thorns", "healing word", "illusory script", "jump", "lightning lure", "londyns duet og", "mass distortion og", "read blood og", "reorient og", "shield", "silent image", "silvery barbs", "sleep", "snakestaff og", "snare", "speak with animals", "stumble og", "sylvan vision og", "water whip og", "witch bolt", "wood rot og", "zephyr strike",
		//Level 2
		"alter self", "animal messenger", "arcane lock", "beast sense", "blade of resonance og", "borrowed knowledge", "celerity og", "darkness", "discordant thrum og", "diterlizzis dymaxion og", "doublespeak og", "enhance ability", "enlarge/reduce", "enthrall", "fallow og", "flourishing beanstalk og", "glamoured majesty og", "healing spirit", "heat metal", "hold person", "immovable object", "invisibility", "jinx og", "kinetic jaunt", "locate animals or plants", "londyns duet og", "magic mouth", "magic weapon", "mirror image", "misty step", "moon blade og", "moonbeam", "nathair's mischief ", "nystul's magic aura", "pass without trace", "plaguemask og", "polandaras petticoat pocket og", "seeking og", "silence", "solid fog og", "soul whip og", "spiritual weapon", "suggestion", "summon beast", "tasha's mind whip", "time parasite og", "tree steed og", "vortex warp", "web", "wither and bloom", "wristpocket",
		//Level 3
		"alter fortune og", "antipathetic field og", "arcane razor og", "avyies temporal trickery og", "bestow curse", "blink", "catnap", "counterspell", "create campsite og", "dazzling strobe og", "dodge-weave og", "euphoric cloud og", "fly", "healing wave og", "hirsutism og", "invisible trickery og", "lightning arrow", "lipstitch og", "magic circle", "major image", "melfs unicorn arrow og", "minor glamour og", "misty slash og", "mushroom ring og", "nondetection", "pall of twilight og", "perplex og", "protection from energy", "radiant glamour og", "remove curse", "reverse projectiles og", "sending", "shape wood og", "slow", "speak with plants", "spirit guardians", "spirit shroud", "summon fey", "summon shadowspawn", "telepathy tap og", "toxic tongue og", "treasure scent og", "wild flight og",
		//Level 4
		"age plant og", "blinding glitter og", "charm monster", "compulsion", "confusion", "drunken revelry og", "fabricate", "fools speech og", "freedom of movement", "giant insect", "greater invisibility", "grounding og", "insect plague", "lifebloom og", "major glamour og", "polymorph", "quentins quickling senses og", "sensory deprivation og", "sneezing dust og", "switcheroo og", "tail sweep og", "thorn spray og", "vacancy og", "wild runner og",
		//Level 5
		"animate objects", "awaken", "awaken object og", "conduit og", "contact other plane", "contagion", "control winds", "dream", "far step", "geas", "glamourous craft og", "greater restoration", "hold monster", "mirror stride og", "mislead", "modify memory", "othertime og", "passwall", "power word silence og", "probability warp og", "rary's telepathic bond", "seeming", "skill empowerment", "synaptic static", "tree stride", "twisting innards og", "wind at our backs og", "zone of self immolation og",
		//Level 6
		"anterograde amnesia og", "budding romance og", "conjure fey", "contingency", "drawmij's instant summons", "fizban's platinum shield", "forbiddance", "immaculate conception og", "investiture of starlight og", "mass suggestion", "mental prison", "otto's irresistible dance", "programmed illusion", "sunbeam", "tasha's otherworldly guise", "true seeing", "unconscious command og",
		//Level 7
		"body swap og", "crown of stars", "dream of the blue veil", "humanoid possession og", "lunar occult og", "magic miasma og", "mirage arcane", "power word pain", "prismatic spray", "project image", "rejuvenate og", "sequester", "simulacrum", "solipsism og", "tether essence",
		//Level 8
		"animal shapes", "antipathy/sympathy", "feeblemind", "glibness", "maddening darkness", "maze", "mind blank", "power word stun",
		//Level 9
		"mass polymorph", "power word heal", "prismatic wall", "shapechange", "true polymorph", "unbinding og", "weird", "wish"
		]
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
		"glamorous defense" : {
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
		"faerie dust" : {
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
		"misty escape" : {
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
		"dreamchaser" : {
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
		"extraplanar glamour" : {
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

var tricksyCantripDesc = "\n   I empower 1 faerie cantrip that targets 1 crea. The cantrip can target 1 extra crea within\n   range & also within 30ft of 1st target. If it needs an atk roll I need a separate roll for 2nd.";

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
					description: tricksyCantripDesc,
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
					"I can release the forme anytime, no action. (See wildshape page for stats, adjust HP.)",
					]),
				action: ["action", "Natural Raiment"],
				usages: 1,
				recovery : "long rest",
				eval: function () { AddWildshape("Shambling Mound"); }
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

CreatureList["shambling mound"] = {
        name: "Shambling Mound",
        source: ["MM", 270],
        size: 2,
        type: "Plant",
        companion: "familiar_not_al",
        alignment: "Unaligned",
        ac: 15,
        hp: 50,
        hd: [16, 10],
		speed: "20 ft, swim 20 ft",
        scores: [18, 8, 16, 5, 10, 3],
        skills: {
            stealth: 2
        },
        senses: "Blindsight 60 ft, blind beyond that",
        damage_resistances : "cold, fire",
		damage_immunities : "poison",
		condition_immunities : "blind, deaf, exhaustion",
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
            description: "Target is blind, restr., unable to breath. DC 14 Con/rnd or DMG. See B"
        }
		],
        traits: [
			{
				name: "Lightning Absorption",
				description: "When taking lightn. dmg, take no dmg and gain hp equal to the lightn. dmg."
			},
			{
				name: "Multiattack",
				description: "Make 2 slam atks. If both hit a <=Medium  crea it is grappled (escape DC 14), and I use Engulf on it."
			}
		]
};