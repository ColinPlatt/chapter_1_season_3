import { ALTO_COMMON_COLLECTION } from "../utils/env-vars"

type Traits = { [ trait: string ]: string[] }

export type WhitelistCollection = {
	contract: string,        // contract address
	name: string,            // collection name
	symbol: string,          // collection symbol
	supply: number,          // total supply
	mintAddress?: string,    // address that transfers NFT on mint
	royalty?: number,        // creator royalty
	royaltyAddress?: string, // creator royalty payment address
	thumbnail?: string,      // image url for displaying collection
	website?: string,        // mint or general project website url
	twitter?: string,        // project twitter
	discord?: string,        // project discord
	traits: Traits,          // all available traits
	metadataTransform?: (uri: string, identifier: string) => string // transform uri fetched from backend
}

export const whitelistedCollections: WhitelistCollection[] = [
	{
		contract: "0x79cb916add1dcb55049a610fed35dd60ad30d219",
		name: "Jackie Wombat: A Celebration",
		symbol: "WOMBAT",
		supply: 1_000,
		royalty: 0.069,
		royaltyAddress: "0x07c12a35f8e0e3a944bcbbc04650446a7b618bd8",
		traits: {
			"Album": [
				"It Ain't The Size Of The Horn"
			],
			"First Released": [
				"11th November 2012"
			],
			"Scat Level": [
				"5/5"
			]
		},
		website: "https://www.jackiewombat.xyz/"
	},
	{
		contract: "0xc0c73ccfee66eb400accee23fe70369186e4d3c9",
		name: "Canto Longnecks",
		symbol: "CLNFT",
		supply: 2_222,
		royalty: 0.05,
		royaltyAddress: "0xeafcbc638b7b45f3ef20113f113f7babbb74ee03",
		traits: {
			BACKGROUND: [
				"Blue",
				"Yellow",
				"Red",
				"Green",
				"Purple",
				"Mint", 
				"UpOnly"
			],
			FUR: [
				"RedFur",
				"BlackFur",
				"GreenFur",
				"BlueFur",
				"PurpleFur",
				"MintFur",
				"WhiteFur",
				"GlitchFurGreen",
				"YellowFur",
				"GlitchFurRed",
				"SkeletonFur",
				"GlitchFurBlue",
				"GlitchFurPurple"
			],
			HEAD: [
				"None",
				"KidCap",
				"RedLeggo",
				"RedPill",
				"BluePill",
				"Sir",
				"Conspiracy",
				"Kipo",
				"Headphones"
			],
			BEAK: [
				"Yellow",
				"Red",
				"Mint",
				"Green",
				"Blue",
				"WormyBoi",
				"Purple",
				"Pink"
			],
			EYES: [
				"CornerEyes",
				"RedEyes",
				"BlueEyes",
				"BlackEyes",
				"WeedEyes",
				"RegularEyes",
				"GreenEyes",
				"SusEyes",
				"BloodEyes",
				"AllBlackEyes",
				"BabyEyes",
				"ReptileEyes"
			],
			BODY: [
				"Tutu",
				"Necklace",
				"None",
				"BlueJean",
				"ParanoidBurrito",
				"CL",
				"BowTie",
				"Cure",
				"SnakePajamas",
				"Bell",
				"Bald"
			],
			GLASSES: [
				"None",
				"Sunglasses",
				"BrightGlasses",
				"BlueSunglasses",
				"3D",
				"Matrix",
				"LaserEyes"
			],
			EYEBROWS: [
				"Regular",
				"Ayo",
				"None",
				"Mad"
			],
			GRAIL: [
				"Carefullo"
			]
		},
		website: "https://www.cantolongnecks.com/",
		twitter: "https://twitter.com/cantolongnecks",
		discord: "http://discord.gg/longnecks"
	},
	{
		contract: "0x21950fc9409343aa1120d275d819a6d5a7e6ccb3",
		name: "CanToes",
		symbol: "CTOES",
		supply: 4_444,
		mintAddress: "0x1d1ea8f4cb924af9747608be636cf7346915b210",
		royalty: 0.05,
		royaltyAddress: "0x1d1ea8f4cb924af9747608be636cf7346915b210",
		traits: {
			"Backgrounds": [
				"Yellow",
				"Pink",
				"Dark Blue",
				"Digital",
				"Light BLue",
				"Swamp",
				"Sweet",
				"Grey",
				"Pink Camo",
				"Froggy",
				"Purple",
				"Sky",
				"Night Sky",
				"Palms",
				"Galaxtic"
			],
			"Body": [
				"Ogre",
				"Fairy",
				"Monkey",
				"Wax",
				"Sick",
				"Giant",
				"Grey",
				"Icyy",
				"Tiger",
				"Cheese",
				"Plain",
				"Purple",
				"Blue Gum",
				"Brown",
				"Hot",
				"Egg Plant",
				"Bubble Gum",
				"Goblin",
				"Stone",
				"Solid Gold",
				"Diamond"
			],
			"Eyes": [
				"Shades",
				"Goofy 4 Eyes",
				"Sus",
				"Blue beams",
				"Tears",
				"Fried",
				"Cyclopse",
				"4 Eyes",
				"3d",
				"Green Glasses",
				"Yellows",
				"feels",
				"Goofy",
				"Blue Cyborg",
				"Wide Open",
				"Nouuns",
				"Dotted",
				"Closed",
				"Big Fried",
				"Neos",
				"Angry",
				"Xx",
				"Canto Shades",
				"Meebit",
				"uh ok",
				"Red Cyborg",
				"Noouunnss"
			],
			"Mouths": [
				"Oh",
				"Forward",
				"Cig ",
				"Lipstick",
				"Serious",
				"Bubbles",
				"Droll",
				"Wide Missing Teeth",
				"Excited",
				"Smiles",
				"Missing Teeth",
				"More Chocolate",
				"Joker",
				"Sad",
				"uh okay",
				"Snake",
				"Chocolate ",
				"Crossed",
				"Mega Droll",
				"Bearded",
				"Vampire",
				"Bloody Smile",
				"Bron"
			],
			"Clothes": [
				"Uniform",
				"Black Hoodie",
				"Blue Hoodie",
				"Toxic hoodie"
			],
			"Hats": [
				"Crown",
				"Halo",
				"Arrow",
				"Farmer",
				"Disco Hat",
				"Black Bandana",
				"Red Pill",
				"Witch Hat",
				"Melting Hat",
				"Blue Pill",
				"Top Hat",
				"Pizza",
				"Jam",
				"Blue Bandana",
				"Miner",
				"Work Hat",
				"Tupae",
				"Neon Hoody",
				"Barrell",
				"Hoody"
			]
		},
		website: "https://cantoe.com/",
		twitter: "https://twitter.com/CanToeNFT",
		discord: "https://discord.gg/r5hn3ubfkw"
	},
	{
		contract: "0x61720daf21641487e7cc3c71dd3583b8ce2b8d0a",
		name: "CANTOADZ",
		symbol: "C_TOADZ",
		supply: 6_969,
		royalty: 0.05,
		royaltyAddress: "0x5cc2e4691436cb3a68e1c4be198327ddb6e12164",
		traits: {
			"Background": [
				"Damp",
				"Mold",
				"95",
				"Blanket",
				"Bubblegum",
				"Violet",
				"Greyteal",
				"Middlegrey",
				"Greige",
				"Salmon",
				"Universe Foam",
				"Grey Foam",
				"Bruise",
				"Dark",
				"Ghost Crash",
				"Matrix",
				"Blood"
			],
			"Body": [
				"Gorilla",
				"Lasagna",
				"Albino",
				"Pox",
				"Hypnotic",
				"Sleepy",
				"Gargoyle",
				"Creep",
				"Dog",
				"Pasty",
				"Chimp",
				"Booger",
				"Gremplin Green",
				"Blue Cat",
				"Gremplin Blue",
				"Undead",
				"Ape",
				"Normal",
				"Toadbot",
				"Gummy Peach",
				"Gummy Tropical",
				"Gummy Blue",
				"Berry",
				"Only Socks",
				"Alien",
				"Bones",
				"Gummy Raspberry",
				"Gummy Slime",
				"Blood Bones",
				"Ghost Bones",
				"Angry",
				"Toadenza"
			],
			"Mouth": [
				"Pink Bucktooth",
				"Well Actually",
				"Blue Smile",
				"Slimy",
				"Sad",
				"Teal Wide",
				"Croak",
				"Beard",
				"Peach Smile",
				"Teal Smile",
				"Bandit Smile",
				"Ribbit Blue",
				"Lincoln",
				"Green Bucktooth",
				"Shifty",
				"Purple Wide",
				"Bandit Wide",
				"Vampire"
			],
			"Head": [
				"Wizard",
				"Fun Cap",
				"Swampy Double Bun",
				"Aqua Mohawk",
				"Blue Pigtails",
				"Swampy Sidepart",
				"Floppy Hat",
				"Swampy Crazy",
				"Vampire",
				"Wild Black",
				"Wild Orange",
				"Grey Knit Hat",
				"Rainbow Mohawk",
				"Swampy Bumps",
				"Stringy",
				"Tophat",
				"Yellow Flattop",
				"Aqua Shave",
				"Dark Tall Hat",
				"Swept Orange",
				"Aqua Puff",
				"Crazy Blonde",
				"Toadstool",
				"Swampy Single Bun",
				"Fez",
				"Red Gnome",
				"Short Feathered Hat",
				"Super Stringy",
				"Blue Shave",
				"Pink Puff",
				"Orange Double Buns",
				"Rusty Cap",
				"Orange Bumps",
				"Dark Pigtails",
				"Backward Cap",
				"Blonde Pigtails",
				"Orange Tall Hat",
				"Aqua Sidepart",
				"Swampy Flattop",
				"Periwinkle Cap",
				"Orange Knit Hat",
				"Plaid Cap",
				"Truffle",
				"Dark Single Bun",
				"Teal Knit Hat",
				"Brain",
				"Wild White",
				"Black Sidepart",
				"Teal Gnome",
				"Swept Purple",
				"Bowlcut",
				"Orange Shave"
			],
			"Eyes": [
				"Vampire",
				"Gold Specs",
				"Anime",
				"Glowing Blue",
				"Patch",
				"Judgment",
				"Dilated",
				"Bandit",
				"Thick Round",
				"Blue Eyeshadow",
				"Nice Shades",
				"Green Eyeshadow",
				"Big Crazy Red",
				"Croaked",
				"Red & Black Goggles",
				"Gremplin",
				"Violet Goggles",
				"Nounish Blue",
				"Black & Blue Goggles",
				"Butthole",
				"Round Shades",
				"Big Yellow Side-eye",
				"Nounish Red",
				"3D",
				"White & Red Goggles",
				"Undead",
				"Awake",
				"Creep",
				"Cool Shades",
				"Glowing Red",
				"Thick Square",
				"Big Crazy Orange",
				"Nerd"
			],
			"# Traits": [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7"
			],
			"Terraform": [
				"Math"
			],
			"Clothes": [
				"Force Hoodie",
				"Slime Hoodie",
				"Grey Hoodie"
			],
			"Accessory II": [
				"Blush",
				"Long Cigarette",
				"Earring",
				"Watch",
				"Just for the Looks",
				"Shackles",
				"Chocolate",
				"Short Cigarette"
			],
			"Accessory I": [
				"Four Flies",
				"Explorer",
				"One Fly",
				"Drive-thru",
				"Three Flies",
				"Two Flies",
				"Mysterious Hoodie",
				"Toxic Lumps",
				"Fly Lick"
			],
			"Custom": [
				"Legendary",
				"Licked - Warped",
				"Murdered by Fronkz"
			],
			"Name": [
				"Fronkz Henchman 1",
				"Fronkz Henchman 2",
				"Colonol Floorbin"
			]
		},
		website: "https://www.cantoadz.com/",
		twitter: "https://twitter.com/CanToadz",
		discord: "https://discord.gg/Agw35fEaSZ",
		metadataTransform: (uri) => `/api/metadata?url=${uri}.json`
	},
	{
		contract: "0x1d20740cced2caf15389d4ed625d25c8ac4e0272",
		name: "CantoLanterns",
		symbol: "CLTN",
		supply: 200,
		royalty: 0.075,
		royaltyAddress: "0xfab42226d198f59ca98b91567613d541dcb59dd9",
		traits: {
			"Background": [
				"Black",
				"Binary",
				"Green Yellow",
				"Light Green",
				"Mid Green",
				"Green",
				"Grey",
				"Matrix",
				"Green Spooky",
				"Grey Spooky",
				"Greenish Spooky"
			],
			"Background Overlay": [
				"Empty",
				"Explosion",
				"Half Tone",
				"Trippy",
				"Spiral",
				"Speed",
				"Gradient",
				"Chunky Spiral",
				"Squares"
			],
			"White Body": [
				"Matrix Shirt",
				"Chain and Black shirt",
				"Cape",
				"Suit",
				"Fang Hoodie",
				"Spider",
				"White Shirt",
				"Green Shirt",
				"Black Shirt",
				"Dracula",
				"Venom",
				"Basketball"
			],
			"White Head": [
				"White Head"
			],
			"Face": [
				"Shades",
				"Stitched",
				"Frankenstein",
				"Sad Smile",
				"Jagged",
				"Laughing",
				"Slimey",
				"Simple Cut Out",
				"Big Mouth",
				"Classic",
				"Silly",
				"Scarry",
				"Happy Glow",
				"Thick Cuts",
				"Spiders",
				"Angry",
				"Laser Glow",
				"NO",
				"Angry Glow",
				"Heart Eyes",
				"Spikey Cut Out",
				"Phased",
				"Joint",
				"Crooked",
				"Chunky Drip",
				"Spooky",
				"Chunky Cut Out",
				"Fangs",
				"Jack",
				"Smirk",
				"Scream"
			],
			"Hat": [
				"Empty",
				"Skull Mask",
				"Machete",
				"Witch Hat",
				"Frankenstein",
				"Green Turnt Hat",
				"Afro",
				"Green Halo",
				"Gamer",
				"Halo",
				"Black Hat",
				"Horns White",
				"Fang Hat",
				"Wizard Hat"
			],
			"Green Body": [
				"Matrix Shirt",
				"Venom",
				"Green Shirt",
				"Dracula",
				"Spider",
				"Suit",
				"Chain and Black shirt",
				"Cape",
				"Fang Hoodie",
				"Basketball",
				"White Shirt",
				"Black Shirt"
			],
			"Green Head": [
				"Green"
			]
		},
		website: "https://canto.portaljump.io/mintpage"
	},
	{
		contract: "0x1371c76e09de58d15fc15a319e71f8da2f62cf7b",
		// contract: "0x20dd43dfedc8af2046657a84a47bf832a8825a7a", // redeployed
		name: "Canto Waifus",
		symbol: "WAIFU",
		supply: 999,
		royalty: 0.069,
		royaltyAddress: "0x6b38b2f7f357cf97bd58eb5d2f94e3cdc8a7e70c",
		traits: {
			"Favorite Color": [
				"Antique",
				"Retro",
				"Earth Tones",
				"Blue",
				"Green",
				"Purple",
				"Red",
				"Black",
				"Pink",
				"Bioluminescent",
				"Black & Silver",
				"Orange",
				"Cyan",
				"Magenta",
				"Rainbow",
				"Monochrome",
				"Natural",
				"Metallic",
				"Blue & Orange",
				"Vintage",
				"Sunset",
				"Greenphospher",
				"Commodorec16"
			],
			"Favorite Outfit": [
				"Pirate",
				"Cyborggeisha",
				"Steampunk Kimono",
				"Nude",
				"Cyber Goth",
				"Kimono",
				"Lingerie",
				"Leather",
				"Slime",
				"Robot Kimono",
				"Solar Kimono",
				"Magickimono",
				"Acid",
				"Punk",
				"Goth",
				"Viking",
				"Occultkimono",
				"Lingere"
			],
			"Hometown": [
				"Ocean",
				"Kyoto",
				"Victorian London",
				"Cyber Jungle",
				"New World",
				"Fishing Village",
				"Neo Tokyo",
				"Shiganshina District",
				"Shinjuko Gyoen",
				"Mushroom Forest",
				"Appalachia",
				"Secret Temple",
				"Flower City",
				"Valhala",
				"Mountain Village",
				"Shenzhen",
				"Neverland",
				"The Matrix",
				"Royal Palace"
			],
			"Mood": [
				"Fiesty",
				"Retro",
				"Sultry",
				"Happy",
				"Mysterious",
				"Dissapointed",
				"Alluring",
				"Fascinated",
				"Bossy",
				"Content",
				"Curious",
				"Angry",
				"Programmable",
				"Pouty",
				"Witchy",
				"Surprised",
				"Fierce",
				"Sad",
				"Lonely",
				"Powerful",
				"Modest",
				"Sneaky"
			]
		},
		website: "http://canto-waifus.xyz/"
	},
	{
		contract: "0x429f76a0a405af14591958efff22cd4d6003215a",
		name: "cantopunks",
		symbol: "PNKS",
		supply: 10_000,
		royalty: 0.1,
		royaltyAddress: "0x79c32f042e2e5ae9c70a9814833a9013f0023c7a",
		traits: {
			"Type": [
				"Female",
				"Male",
				"Ape",
				"Zombie"
			],
			"Accessory": [
				"Spots",
				"Mohawk Thin",
				"Horned Rim Glasses",
				"Do-rag",
				"Big Beard",
				"Frumpy Hair",
				"Regular Shades",
				"Cigarette",
				"Messy Hair",
				"Big Shades",
				"Earring",
				"Shaved Head",
				"Mole",
				"Bandana",
				"Front Beard Dark",
				"Rosy Cheeks",
				"Small Shades",
				"Cap",
				"Tiara",
				"Purple Lipstick",
				"Handlebars",
				"Wild Hair",
				"Purple Eye Shadow",
				"Half Shaved",
				"Mohawk Dark",
				"Red Mohawk",
				"Black Lipstick",
				"Blue Eye Shadow",
				"Shadow Beard",
				"Knitted Cap",
				"Tassle Hat",
				"Hot Lipstick",
				"Clown Eyes Blue",
				"Mustache",
				"Stringy Hair",
				"Choker",
				"Straight Hair Blonde",
				"Classic Shades",
				"Green Eye Shadow",
				"Chinstrap",
				"Eye Patch",
				"Luxurious Beard",
				"Clown Eyes Green",
				"Peak Spike",
				"Nerd Glasses",
				"Crazy Hair",
				"Vape",
				"Normal Beard",
				"Cap Forward",
				"Muttonchops",
				"Normal Beard Black",
				"Wild White Hair",
				"Mohawk",
				"Pigtails",
				"Fedora",
				"Blonde Short",
				"Clown Hair Green",
				"Silver Chain",
				"Clown Nose",
				"Purple Hair",
				"VR",
				"Top Hat",
				"Hoodie",
				"Smile",
				"Wild Blonde",
				"Pipe",
				"Pilot Helmet",
				"Frown",
				"Goat",
				"Eye Mask",
				"3D Glasses",
				"Orange Side",
				"Pink With Hat",
				"Cowboy Hat",
				"Front Beard",
				"Straight Hair Dark",
				"Blonde Bob",
				"Medical Mask",
				"Straight Hair",
				"Headband",
				"Police Cap",
				"Vampire Hair",
				"Dark Hair",
				"Welding Goggles",
				"Gold Chain",
				"Buck Teeth"
			]
		},
		website: "https://cantopunks.xyz/mint",
		twitter: "https://twitter.com/CantoPunks_",
		discord: "http://discord.gg/QefaCxzUbG"
	},
	// {
	// 	contract: "0x526a3bbe794b0ec81fbd77c27ba7a5398a06b095",
	// 	// contract: "0x7b5032536a83ed9b275888002f2f9613846f3472",
	// 	name: "CantoApes",
	// 	symbol: "CAC",
	// 	supply: 3_333,
	// 	traits: {},
	// 	website: "https://cantoapes.club/"
	// },
	{
		contract: "0x6fb5286f58690384d05c8cac986624d31ee585e8",
		name: "Cantoliens",
		symbol: "CLIENS",
		supply: 3_333,
		royalty: 0,
		traits: {
			"Background": [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			"Body": [
				"green"
			],
			"Eyes": [
				"yellow alien",
				"red alien",
				"vr",
				"big black shades",
				"sleeping mask",
				"3 eyes",
				"3d glasses",
				"purple shades",
				"scary",
				"pink modern",
				"thug glasses",
				"green alien",
				"round glasses",
				"blue alien",
				"glitch"
			],
			"Clothes": [
				"highneck",
				"powder blue shirt",
				"pink hoodie",
				"highneck blue",
				"beige shirt with tie",
				"bug hoodie",
				"night suit",
				"gold alien suit",
				"blue tshirt",
				"highneck purple",
				"basketball",
				"red galaxy",
				"highneck green",
				"turtleneck sweater 1",
				"lab coat",
				"turtleneck sweater",
				"highneck yellow",
				"none",
				"pacman tshirt",
				"sleeveless",
				"galaxy",
				"highneck lavendar",
				"night suit 1",
				"full sleeve",
				"pink tshirt",
				"alien hoodie",
				"glitch"
			],
			"Headwear": [
				"spacesuit",
				"santa hat",
				"horns",
				"RED MOHAWK",
				"two antenna",
				"CAP",
				"ORANGE BEANIE",
				"PINK MOHAWK",
				"winter capt",
				"VIKING",
				"blue winter cap",
				"none",
				"single antenna",
				"three antenna",
				"PURPLE BEANIE",
				"PIRATE HAT",
				"GOLD PLATE",
				"BIG BLUE CAP",
				"LIGHT BULB",
				"CROWN"
			]
		},
		twitter: "https://twitter.com/Cantoliens"
	},
	// {
	// 	contract: "0x7db74173b0fbe679642f371acbddd96180611200",
	// 	name: "P3p3 Y00ts",
	// 	symbol: "P3p3 Y00ts",
	// 	supply: 10_000,
	// 	traits: {}
	// },
	{
		contract: "0xa31b1531489edf96a31ea2de5ef252be89038c68",
		name: "Cantillionaires",
		symbol: "CNTL",
		supply: 2_569,
		royalty: 0.05,
		royaltyAddress: "0x9e884f11f96b0dd527a6e267b344927338ace6d9",
		traits: {},
		website: "https://www.cantillionaires.com/",
		twitter: "https://twitter.com/Cantillionaires",
		metadataTransform: (_, identifier) => `https://pub-ed1053a4a900474ea1d7d5a8d192e9ed.r2.dev/assets/${identifier}.gif`
	},
	{
		contract: "0xde7aa2b085bef0d752aa61058837827247cc5253",
		name: "NON FUNGIBLE DOG",
		symbol: "WOOF",
		supply: 0,
		royalty: 0.069,
		royaltyAddress: "0xf0e4e74ce34738826477b9280776fc797506fe13",
		traits: {},
		metadataTransform: () => "data:application/json;base64" // hack to force contract polling
	},
	{
		contract: "0xbb51bdabedf302e9dea7938f1eceb9f705229fd5",
		name: "CantoPunks",
		symbol: "CP",
		supply: 3_333,
		traits: {
			"Body": [
				"Pale",
				"White",
				"Black",
				"Brown",
				"Gold"
			],
			"Hat": [
				"Blue Fire",
				"Red Cap",
				"Bandana",
				"Sweatband",
				"None",
				"Police Cap",
				"Sombrero",
				"Fire",
				"Blue Cap",
				"Racing Helmet",
				"Pirate Hat",
				"Classy Hat",
				"Mc Cap",
				"Medic Helmet",
				"Crown",
				"Green Fire"
			],
			"Chain": [
				"None",
				"Silver Chain",
				"Gold Chain"
			],
			"Mouth": [
				"Ciggarete",
				"Black Mask",
				"Vape Box",
				"Vape Stick",
				"Golden_Mask",
				"Joint"
			],
			"Glasses": [
				"Vr",
				"None",
				"Monocule Right",
				"Green Laser",
				"Eyepatch Left",
				"Red Laser",
				"Monocule Left",
				"3D Glasses",
				"Sunglasses",
				"Yellow Laser",
				"White Frame Sunglasses",
				"Eyepatch Right"
			]
		}
	},
	{
		contract: "0x1379b2dFa9918F302B6f74A26360fa6C9bF297f9",
		name: "CANTO OG COLLECTION",
		symbol: "CANTO OG",
		supply: 8_000,
		royalty: 0.069,
		royaltyAddress: "0x07c12a35f8e0e3a944bcbbc04650446a7b618bd8",
		traits: {},
		website: "https://www.ogcantonft.xyz/",
		twitter: "https://twitter.com/CantoOgs"
	},
	{
		contract: "0x81996BD9761467202c34141B63B3A7F50D387B6a",
		name: "amplice Ghouls",
		symbol: "GHLS",
		supply: 10_000,
		traits: {
			"Background": [
				"Gloom"
			],
			"Ghoul": [
				"Bleached_Flesh"
			],
			"Eyes": [
				"Green"
			],
			"Cranium": [
				"Eye_Socket"
			],
			"TopHeadAcc": [
				"Red_Halo"
			],
			"LowerEyeAcc": [
				"Bandage"
			]
		},
		website: "https://evm.explorer.canto.io/address/0x81996BD9761467202c34141B63B3A7F50D387B6a",
		metadataTransform: (uri) => `/api/metadata?url=${uri.split("json/")[0] + `json/5589.json`}` // fix this to keep from extrapolating
	},
	{
		contract: "0xcbd058b9a6d48f8caef2ebbd1e5977514606941f",
		name: "Matrix Key",
		symbol: "KEY",
		supply: 3_333,
		traits: {},
		metadataTransform: () => "https://robofrens.mypinata.cloud/ipfs/QmZ1pWBifpbVf5ZvUfyJb5C3qXEGoz6BWhamJYVRcPwgkN/matrix.gif"
	},
	{
		contract: "0x8c4f9d90e37e5Ad8eed7A8aD2d40B41e554cadaD",
		name: "XWAVE ART",
		symbol: "XWAVE",
		supply: 0,
		royalty: 0.069,
		royaltyAddress: "0x6B38b2f7f357CF97Bd58Eb5D2f94e3cDc8A7e70c",
		traits: {},
		website: "https://xwave.art/",
		twitter: "https://twitter.com/xwaveart"
	},
	// {
	// 	contract: "0xbA38Ca76b183A3C5ED2022bed0CfcF4644e5F963",
	// 	name: "Canto Crabs",
	// 	symbol: "CRAB",
	// 	supply: 3_333,
	// 	royalty: 0.05,
	// 	royaltyAddress: "0x85b6D0a0623E3ec7DdE67e2274BAA74D553EC5e8",
	// 	traits: {
	// 		"Body": [
	// 			"Purple",
	// 			"Pink",
	// 			"Yellow",
	// 			"Brown",
	// 			"Green",
	// 			"Blue",
	// 			"Red"
	// 		],
	// 		"Claws": [
	// 			"Pink",
	// 			"Purple",
	// 			"Red",
	// 			"Brown",
	// 			"Green",
	// 			"Yellow",
	// 			"Blue"
	// 		],
	// 		"Eyes": [
	// 			"Curious",
	// 			"Sad",
	// 			"Happy",
	// 			"Doubty",
	// 			"Tired",
	// 			"Angry",
	// 			"Default",
	// 			"Sleepy"
	// 		],
	// 		"Accessories": [
	// 			"N/A",
	// 			"Gold Chain",
	// 			"Tie",
	// 			"Silver Chain",
	// 			"Ruby Chain",
	// 			"Bowtie",
	// 			"Black Bowtie",
	// 			"Clown Nose",
	// 			"Bandage",
	// 			"Mask",
	// 			"Golden Chain"
	// 		],
	// 		"Glasses": [
	// 			"N/A",
	// 			"Square Glasses",
	// 			"Hear Glasses",
	// 			"Blue Circle Glasses",
	// 			"3D Glasses",
	// 			"Opaz Glasses",
	// 			"Fly Glasses",
	// 			"Blue Glasses",
	// 			"Black Glasses",
	// 			"VR Glasses",
	// 			"Circular Glasses"
	// 		],
	// 		"Hats": [
	// 			"N/A",
	// 			"Black Hat",
	// 			"Rainbow Hat",
	// 			"Green Hat",
	// 			"Sleep Cap",
	// 			"Party Hat",
	// 			"Grape Hat",
	// 			"Orange Hat",
	// 			"Chef Hat",
	// 			"White Hat",
	// 			"Navy Hat"
	// 		]
	// 	},
	// 	website: "https://cantocrabs.com/",
	// 	twitter: "https://twitter.com/CantoCrabs"
	// },
	// {
	// 	contract: "0xce4ebdb16b564f6818d4ae67e491ec3acd515c15",
	// 	name: "CANTOGHOULS",
	// 	symbol: "CANTOGHOULS",
	// 	supply: 10_000,
	// 	traits: {},
	// 	metadataTransform: (uri) => uri + ".json"
	// },
	// {
	// 	contract: "0xe5c8c4a77ea40843eed7324b56a9bb154ee9e510",
	// 	name: "Edgetestnician",
	// 	symbol: "EDGE",
	// 	supply: 10_000,
	// 	traits: {}
	// },
	{
		contract: ALTO_COMMON_COLLECTION,
		name: "Alto",
		symbol: "ALTO",
		supply: 0,
		traits: {},
		thumbnail: "/alto-logo-v2.png",
		metadataTransform: () => "data:application/json;base64" // hack to force contract polling
	}
]

export const whitelistedCollectionsObject = whitelistedCollections.reduce((obj, wContract) => {
	obj[ wContract.contract.toLowerCase() ] = wContract
	return obj
}, {} as { [ key: string ]: WhitelistCollection })

export const whitelistedCollectionContracts = whitelistedCollections.map(({ contract }) => contract)