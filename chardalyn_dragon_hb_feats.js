/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*	-INFORMATION-
	Subject:	Feats
	Effect:		This script adds Homebrew Feats as rewards for killing the Chardalyn Dragon during the Rime of the Frostmaiden campaign
	Author:		Shaò
	Code by:	xika
	Date:		2024-12-02 (sheet v13)
	
	Notes:
	- Draconic Forge: "Infuse Item" note not changed to reflect the +1 infusions
	- Chardalyn Fury: extra Movement during Rage not added to move-speed-field
	- Sunfire Blessing: "Channel Divinity: Radiance of the Dawn"-note: extra Damage not added here
	- Chardalyn Predator: unabled to reflect either feature on the char sheet
	- Chardalyn Infusion: feature cannot be added since sneak attack damage on spell attacks is homebrew/not reflected in the sheet
	
*/
var iFileName = "chardalyn_dragon_hb_feats";

RequiredSheetVersion("13.2.0");

SourceList.HB = {
	name: "Homebrew",
	abbreviation: "HB",
	abbreviationSpellsheet: "HB",
	group: "Homebrew",
	date: "2024/12/02"
};
FeatsList["draconic forge hb"] = {
	name: "Draconic Forge",
	source: ["HB", 1],
	allowDuplicates: false,
	prereqeval: function(v) {
		return !!classes.known.artificer;
	},
	prerequisite: "Having defeated the Chardalyn Dragon as an Artificer",
	description: "I gain proficiency with Smith's Tools if not already. I can maintain one additional infusion, and can grant armour worn by myself or an ally +1 AC.",
	descriptionFull: " The dragon’s chardalyn essence improves your infusion abilities. You gain proficiency with Smith’s tools if you don’t already have it. You can maintain up to one additional infusion at a time. Additionally, you can infuse a piece of armour, worn by yourself or one of your allies, with chardalyn dragon’s fire to add a +1 bonus to its AC.",
	toolProfs: ["Smith's tools"]
};
FeatsList["chardalyn fury hb"] = {
	name: "Chardalyn Fury",
	source: ["HB", 1],
	allowDuplicates: false,
	prereqeval: function(v) {
		return !!classes.known.barbarian;
	},
	prerequisite: "Having defeated the Chardalyn Dragon as a Barbarian",
	description: "I gain bonus hit points equal to twice my level. While raging, I have advantage on saves against being grappled and restrained, and gain +10 movement speed",
	descriptionFull: "The toughness of the Chardalyn Dragon has infused your body. Your hit point maximum increases by an amount equal to twice your level. Additionally, while raging, you have advantage on saving throws against being grappled or restrained, and your movement speed increases by 10 feet.",
	savetxt: {
		text: ["Adv. vs Grapple in rage"]
	},
	calcChanges: {
		hp: function(e) {
			return [2 * e, "\n + " + e + " × 2 from the Chardalyn Fury feat (" + 2 * e + ")", !0];
		}
	},
};
FeatsList["sunfire blessing hb"] = {
	name: "Sunfire Blessing",
	source: ["HB", 1],
	allowDuplicates: false,
	prereqeval: function(v) {
		return !!classes.known.cleric;
	},
	prerequisite: "Having defeated the Chardalyn Dragon as a Cleric",
	description: "I gain an additional Channal Divinity for Radiance of the Dawn, it deals +1d10 damage.",
	descriptionFull: "You can use your Channel Divinity one additional time per long rest, but this can only be used for Radiance of the Dawn. When you use Radiance of the Dawn, it deals an additional 1d10 damage.",
	usages: 1,
	recovery: "short rest",
	limfeaname: "Channel Divinity: Radiance of the Dawn",
};
FeatsList["chardalyn predator hb"] = {
	name: "Chardalyn Predator",
	source: ["HB", 1],
	allowDuplicates: false,
	prereqeval: function(v) {
		return !!(classes.known.ranger || classes.known.rangerua)
	},
	prerequisite: "Having defeated the Chardalyn Dragon as a Ranger",
	description: "My Dread Ambusher attack uses double my DEX modifier. When in dim light or darkness, I gain my WIS mod. to DEX (Stealth) checks.",
	descriptionFull: "If your Dread Ambusher extra attack hits, you can double your Dexterity modifier to the total damage dealt. Additionally, when in dim light or darkness you can add your wisdom modifier to Dexterity (Stealth) checks.",
};
FeatsList["chardalyn infusion hb"] = {
	name: "Chardalyn Infusion",
	source: ["HB", 1],
	allowDuplicates: false,
	prereqeval: function(v) {
		return !!classes.known.rogue
	},
	prerequisite: "Having defeated the Chardalyn Dragon as a Rogue",
	description: "Sneak Attacks triggered by Spell Attacks deal +1d6 damage. I can reroll any 1's on Sneak Attack dice, but must use the new roll.",
	descriptionFull: "When dealing Sneak Attack damage through Spell Attacks, you can add an additional 1d6. Additionally, you can reroll any 1’s on the Sneak Attack dice. You must use the new roll.",
};