/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*	-INFORMATION-
	Subject:	Weapons
	Effect:		This script aims to add Weapons from Old Gus's Errata Wanderer of Infinite Skies
				This is just a part of the source book. The master file with all finished scripts can be found here:
				https://github.com/xi-ka/mpmb-contributions/blob/main/Old_Gus_Errata-Master.js
	Source:		https://callmepartario.github.io/old-gus-errata/
	Author:		Old Gus (Partario Flynn)
	Code by:	xika
	Date:		2024-12-26 (sheet v13)
*/
/*
	Todo & Notes:
	Composite Bow: Str instead of Dex to Damage
*/
/*
	Changelog:
		2024-12-26: Initial Release with 9 Weapontypes
*/

var iFileName = "Old_Gus_Errata-Misc.js";
RequiredSheetVersion("13.2.3");


WeaponsList["chain whip og"] = {
	regExpSearch : /chain whip/i,
	name : "Chain Whip",
	source : ["OG", 311],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "bludgeoning"],
	range : "melee",
	weight : 4,
	description : "Reach",
	abilitytodamage : true
};
WeaponsList["composite longbow og"] = {
	regExpSearch : /composite longbow/i,
	name : "Composite longbow",
	source : ["OG", 311],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [2, 6, "piercing"],
	range : "100/400 ft",
	weight : 6,
	modifiers: [2, 1],
	description : "Ammunition, heavy, two-handed, penalty if Str<16, can add Str instead of Dex to dmg",
	abilitytodamage : true,
	ammo : "arrow"
};
WeaponsList["greatshield og"] = {
	regExpSearch : /greatshield/i,
	name : "Greatshield",
	source : ["OG", 311],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "melee",
	weight : 10,
	description : "Heavy, two-handed, special",
	abilitytodamage : true
};
WeaponsList["katana og"] = {
	regExpSearch : /katana/i,
	name : "Katana",
	source : ["OG", 311],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "melee",
	weight : 3,
	description : "Finesse, versatile (1d10)",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["kusarigama og"] = {
	regExpSearch : /kusarigama/i,
	name : "Kusarigama",
	source : ["OG", 311],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "slashing"],
	range : "melee",
	weight : 4,
	description : "Two-handed, reach, special",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["giff pistol og"] = {
	regExpSearch : /giff pistol/i,
	name : "Giff Pistol",
	source : ["OG", 42],
	list : "Giff Weapons",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "30/90 ft",
	weight : 4,
	description : "loading",
	abilitytodamage : true,
	ammo : "giff bullet og"
};
WeaponsList["giff musket og"] = {
	regExpSearch : /giff musket/i,
	name : "Giff Musket",
	source : ["OG", 42],
	list : "Giff Weapons",
	ability : 2,
	type : "Martial",
	damage : [1, 12, "slashing"],
	range : "30/90 ft",
	weight : 4,
	description : "loading",
	abilitytodamage : true,
	ammo : "giff bullet og"
};
AmmoList["giff bullet og"] = {
	name: "Giff Bullet",
	source : ["OG", 42],
	weight: 0.1,
	icon : "Bullets",
	invName: "Giff Bullet",
	alternatives : [/^giff bullet$/i],
};
WeaponsList["frag grenade og"] = {
	regExpSearch : /frag grenade/i,
	name : "Frag Grenade",
	source : ["OG", 42],
	list : "Giff Weapons",
	ability : 2,
	dc: true,
	type : "Martial",
	damage : [5, 6, "piercing"],
	range : "30/90 ft",
	weight : 2,
	isNotWeapon: true,
	description : "DC Dexterity saving throw for half damage",
	abilitytodamage : false,
	ammo : "frag grenade og"
};
AmmoList["frag grenade og"] = {
        name: "Frag Grenade",
		source : ["OG", 42],
        weight: 2,
        icon : "Flasks",
        invName: "Frag Grenades"
};