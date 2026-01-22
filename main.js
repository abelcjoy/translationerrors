const auditLog = [
    {
        verse: "Genesis 1:1",
        category: "theology",
        severity: "high",
        popular: "God",
        correction: "The Mighty Forces",
        original: "אֱלֹהִים",
        impact: "The English 'God' implies a singular personal being. 'Elohim' is plural and refers to the sum of all powers. It's the 'Blueprint' of nature acting as one.",
        root: "AL (אל) - Strength/Mighty",
        cite: "BDB 43 / Ges. 42",
        phonetic: "eh-lo-HEEM"
    },
    {
        verse: "Matthew 5:22",
        category: "theology",
        severity: "high",
        popular: "Hell",
        correction: "The Dump / Valley of Hinnom",
        original: "γέεννα",
        impact: "Jesus used the word 'Gehenna'—a literal physical valley outside Jerusalem where trash was burned. Translators turned a physical location into a supernatural dimension of fire.",
        root: "HINNOM - Geographic Loc.",
        cite: "BDAG 190 / Str. 1067",
        phonetic: "geh-EN-nah",
        bridge: { val: "Ge-Hinnom", script: "גֵּי הִנֹּם" }
    },
    {
        verse: "Genesis 2:7",
        category: "physical",
        severity: "high",
        popular: "Soul",
        correction: "A Breathing Throat / Living Being",
        original: "נֶפֶשׁ",
        impact: "In English, a soul is a 'ghost' inside the body. In Hebrew, 'Nephesh' is your physical throat or neck. It means a 'Creature that Breathes'.",
        root: "NPS (נפש) - To Breathe/Inflate",
        cite: "BDB 659",
        phonetic: "NEH-fesh"
    },
    {
        verse: "Matthew 6:9",
        category: "physical",
        severity: "mid",
        popular: "Heaven",
        correction: "The Sky / Atmosphere",
        original: "οὐρανός",
        impact: " 'Ouranos' is just the sky above your head. By translating it as 'Heaven', it makes the Divine seem far away.",
        root: "OURAN - Sky/Limit",
        cite: "BDAG 730 / Str. 3772",
        phonetic: "oo-ran-NOS",
        bridge: { val: "Shamayim", script: "שָׁמַיִם" }
    },
    {
        verse: "Ephesians 2:8",
        category: "theology",
        severity: "high",
        popular: "Faith",
        correction: "Being Firm / Steadfastness",
        original: "πίστις",
        impact: "The Greek 'Pistis' is more about 'Reliability'. It means holding onto something firmly so it doesn't fall. It's a physical support action.",
        root: "PITH - Persuade/Bind",
        cite: "BDAG 818 / Str. 4102",
        phonetic: "PEES-tees",
        bridge: { val: "Emunah", script: "אֱמוּנָה" }
    },
    {
        verse: "Romans 3:23",
        category: "theology",
        severity: "high",
        popular: "Sin",
        correction: "Missing the Mark",
        original: "ἁμαρτάνω",
        impact: "Archery term. You shot for the target of human potential and your arrow landed in the dirt.",
        root: "HAMART - Miss the Mark",
        cite: "BDAG 49 / Str. 264",
        phonetic: "ha-mar-TAN-oh",
        bridge: { val: "Chata", script: "חָטָא" }
    },
    {
        verse: "Ecclesiastes 1:2",
        category: "physical",
        severity: "mid",
        popular: "Vanity",
        correction: "Vapor / Passing Breath",
        original: "הֶבֶל",
        impact: " 'Hebel' is a breath—it's there for a second and then gone. It's about being temporary, not being worthless.",
        root: "HBL (הבל) - Breath/Vapor",
        cite: "BDB 210 / Ges. 204",
        phonetic: "HEH-vel"
    },
    {
        verse: "Numbers 6:24",
        category: "physical",
        severity: "mid",
        popular: "Bless you",
        correction: "Kneel before you",
        original: "בָּרַךְ",
        impact: " 'Barak' is the physical act of bending the knee. To be blessed is to have the higher power kneel down to offer you support at your level.",
        root: "BRK (ברך) - Knee",
        cite: "BDB 138 / Ges. 140",
        phonetic: "ba-RARK"
    },
    {
        verse: "Proverbs 4:23",
        category: "theology",
        severity: "high",
        popular: "Heart",
        correction: "Inner Mind / Core",
        original: "לֵבָב",
        impact: "The heart was the seat of logic and decisions. Feelings were located in the 'Kidneys' or 'Bowels'.",
        root: "LBB (לבב) - Enclose/Center",
        cite: "BDB 524 / Ges. 423",
        phonetic: "lay-VAV"
    },
    {
        verse: "Exodus 33:19",
        category: "physical",
        severity: "mid",
        popular: "Grace",
        correction: "Bending / Stooping Down",
        original: "חָנַן",
        impact: " 'Khanan' is the physical act of a superior bending down to eye-level to help someone lower.",
        root: "KHN (חנן) - To Bend/Stoop",
        cite: "BDB 335 / Ges. 289",
        phonetic: "khah-NAN"
    },
    {
        verse: "Exodus 4:14",
        category: "physical",
        severity: "mid",
        popular: "Anger",
        correction: "Nose Flaring / Heat",
        original: "אַף",
        impact: "Translation: 'The anger of the Lord was kindled'. Original: 'The nose of the Power became hot'. Hebrew is concrete; anger is a physical heat you feel in your face and nose. Translating it as an abstract feeling makes the Power seem like an emotional human.",
        root: "APH (אף) - Nose/Breath",
        cite: "BDB 63 / Ges. 70",
        phonetic: "AHF"
    },
    {
        verse: "Genesis 9:16",
        category: "physical",
        severity: "mid",
        popular: "Everlasting / Eternal",
        correction: "Beyond the Horizon (Concealed)",
        original: "עוֹלָם",
        impact: "We think of 'forever' as an infinite number line. 'Olam' means a point so far away in time or space that it is hidden from view. It's about reaching your visual limit, not a mathematical eternity.",
        root: "OLM (עלם) - Conceal/Hide",
        cite: "BDB 761 / Ges. 610",
        phonetic: "oh-LAHM"
    },
    {
        verse: "Psalm 95:6",
        category: "physical",
        severity: "mid",
        popular: "Worship",
        correction: "Prostrating / Face to the Ground",
        original: "שָׁחָה",
        impact: " 'Worship' is now a mental state or singing. 'Shachah' is a physical body movement—getting as low to the ground as possible. It's a statement of physical submission.",
        root: "SHK (שחה) - To Bow/Press",
        cite: "BDB 1005 / Ges. 812",
        phonetic: "sha-KHAH"
    },
    {
        verse: "Psalm 119:1",
        category: "theology",
        severity: "high",
        popular: "Law",
        correction: "Guidance / The Aim",
        original: "תּוֹרָה",
        impact: " 'Law' implies a police officer and tickets. 'Torah' comes from the root 'Yarah' (to shoot an arrow). It means the 'Aiming Point' for a successful life. It's an instruction manual, not a criminal code.",
        root: "YRH (ירה) - Shoot/Point/Direct",
        cite: "BDB 435 / Ges. 320",
        phonetic: "toh-RAH"
    },
    {
        verse: "Genesis 3:16",
        category: "physical",
        severity: "mid",
        popular: "Desire / Lust",
        correction: "Stretching Toward / Turning",
        original: "תְּשׁוּקָה",
        impact: "Translators often add a 'lustful' or 'sinful' tone here. The root is about a physical 'turning' or a circular stretching toward something. It's a movement of the focus.",
        root: "SHQ (שוק) - To Run/Stretch",
        cite: "BDB 1003",
        phonetic: "tesh-oo-KAH"
    },
    {
        verse: "Genesis 4:1",
        category: "physical",
        severity: "mid",
        popular: "Knew / To Know",
        correction: "Intimate Perception / Experience",
        original: "יָדַע",
        impact: "Adam 'knew' Eve. In Hebrew, 'Yada' is sensory perception through experience, not just data in the brain.",
        root: "YD (יד) - Hand/Knowledge",
        cite: "BDB 393 / Ges. 330",
        phonetic: "ya-DAH"
    },
    {
        verse: "Psalm 23:3",
        category: "physical",
        severity: "mid",
        popular: "Righteousness",
        correction: "The Straight Path / Correctness",
        original: "צֶדֶק",
        impact: " 'Tzedek' is about being 'Correct' or 'Straight'. It's physical alignment with a standard.",
        root: "TZD (צדק) - Straight",
        cite: "BDB 841 / Ges. 696",
        phonetic: "TZEH-dek"
    },
    {
        verse: "Genesis 1:26",
        category: "theology",
        severity: "high",
        popular: "Image of God",
        correction: "The Shadow / Representation",
        original: "צֶלֶם",
        impact: " 'Tselem' is a shadow or a statue. We are physical representatives cast by the Power."
    },
    {
        verse: "Psalm 106:3",
        category: "theology",
        severity: "high",
        popular: "Justice / Judgment",
        correction: "The Decisive Act / Verdict",
        original: "מִשְׁפָּט",
        impact: " 'Mishpat' is the physical act of a judge making a decision to fix a broken situation."
    },
    {
        verse: "Deuteronomy 1:1",
        category: "physical",
        severity: "mid",
        popular: "Words / Commandments",
        correction: "Matters / Physical Things",
        original: "דָּבָר",
        impact: " 'Davar' means 'Word' and 'Physical Thing'. In Hebrew, words have substance."
    },
    {
        verse: "Numbers 6:26",
        category: "physical",
        severity: "high",
        popular: "Peace",
        correction: "Completeness / Wholeness",
        original: "שָׁלוֹם",
        impact: " 'Peace' in English is just the absence of war. 'Shalom' is physical completeness—like a wall with no missing stones or a debt fully paid. It's about being 'whole'."
    },
    {
        verse: "Isaiah 6:3",
        category: "physical",
        severity: "high",
        popular: "Glory",
        correction: "Weight / Heaviness",
        original: "כָּבוֹד",
        impact: " 'Glory' is often seen as bright light. In Hebrew, 'Kavod' means 'Weight'. The 'weight' of the Power is its literal physical presence and importance in the world."
    },
    {
        verse: "Psalm 113:1",
        category: "physical",
        severity: "mid",
        popular: "Praise",
        correction: "To Flash / Shine Light",
        original: "הָלַל",
        impact: " 'Praise' is usually vocal. 'Halal' (as in Hallelujah) means to emit a physical flash of light or to boast exuberantly like a shining beacon. It's a visible physical state."
    },
    {
        verse: "Deuteronomy 32:43",
        category: "physical",
        severity: "mid",
        popular: "Atonement",
        correction: "To Wipe / Cover Over",
        original: "כָּפַר",
        impact: " 'Atonement' is a theological concept of paying for sin. 'Kaphar' is the physical act of wiping a surface clean or covering a hole. It's about physical restoration."
    },
    {
        verse: "Leviticus 17:11",
        category: "physical",
        severity: "mid",
        popular: "Life",
        correction: "Vitality / Freshness",
        original: "חַיִּים",
        impact: " 'Life' is the presence of breath. 'Chayim' refers to the 'living' energy found in running water or raw, fresh meat. It's the physical vibration of vitality."
    },
    {
        verse: "Exodus 34:6",
        category: "theology",
        severity: "high",
        popular: "Truth",
        correction: "Solid Support / Firmness",
        original: "אֱמֶת",
        impact: " 'Truth' sounds like a sentence in a book. 'Emet' comes from 'Aman' (support). It's the physical firmness of a parent's arms holding a baby. It's something you can literally lean on without it breaking."
    },
    {
        verse: "Psalm 136:1",
        category: "theology",
        severity: "high",
        popular: "Mercy / Steadfast Love",
        correction: "Active Desire / Gut Commitment",
        original: "חֶסֶד",
        impact: " 'Mercy' sounds like a judge letting you go. 'Chesed' is a fierce, physical attachment and obligation to protect another. It's the 'loyal love' found in a blood-covenant or a parent's protection."
    },
    {
        verse: "Proverbs 1:7",
        category: "theology",
        severity: "high",
        popular: "Fear (of the Lord)",
        correction: "The Flowing Gut / Trembling",
        original: "יִרְאָה",
        impact: "We think it's 'being afraid' of a ghost. 'Yirah' is the physical 'turning of the stomach' or 'trembling of the limbs' when you witness something massive and overwhelming. It's a body state."
    },
    {
        verse: "Exodus 31:3",
        category: "physical",
        severity: "mid",
        popular: "Wisdom",
        correction: "The Palate / Sensory Taste",
        original: "חָכְמָה",
        impact: " 'Wisdom' is an academic achievement. In Hebrew, it's linked to the palate. It's the sensory ability to 'taste' the quality of things. A master craftsman has 'Chokhmah' because his hands can 'sense' the material."
    },
    {
        verse: "Proverbs 2:3",
        category: "physical",
        severity: "mid",
        popular: "Understanding",
        correction: "Building / Structuring",
        original: "בִּינָה",
        impact: " 'Understanding' is 'getting it' in your brain. 'Binah' is related to 'Banah' (to build). It's the physical act of taking raw parts and building a structured system. It's structured insight."
    },
    {
        verse: "Leviticus 1:2",
        category: "theology",
        severity: "high",
        popular: "Sacrifice / Offering",
        correction: "To Draw Near / Proximity",
        original: "קָרְבָּן",
        impact: " 'Sacrifice' sounds like losing something. 'Korban' comes from 'Karev' (to come close). It's a physical tool used to close the gap between you and the center. It's an act of 'Drawing Near', not 'Giving Up'."
    },
    {
        verse: "Leviticus 11:47",
        category: "physical",
        severity: "mid",
        popular: "Clean",
        correction: "Boundaried Wholeness / Unmixed",
        original: "טָהוֹר",
        impact: " 'Clean' implies soap and water. 'Tahor' describes a physical state of integrity—like pure gold. It means you are 'unmixed' and ready for the sacred center."
    },
    {
        verse: "Leviticus 15:31",
        category: "physical",
        severity: "mid",
        popular: "Unclean",
        correction: "Disconnected / Closed Off",
        original: "טָמֵא",
        impact: " 'Unclean' sounds dirty or sinful. 'Tame' is a technical status of being temporary 'shut out' from the center. It's a status of being disconnected, not a moral failure."
    },
    {
        verse: "Exodus 25:8",
        category: "physical",
        severity: "mid",
        popular: "Tabernacle",
        correction: "The Physical Residence / Dwelling",
        original: "מִשְׁכָּן",
        impact: " 'Tabernacle' is a religious tent. 'Mishkan' is from 'Shakan' (to dwell). It's the literal physical address where the Power 'sits down' to live among the people."
    },
    {
        verse: "Leviticus 1:3",
        category: "physical",
        severity: "mid",
        popular: "Burnt Offering",
        correction: "The Ascension / Going Up",
        original: "עוֹלָה",
        impact: " 'Ola' comes from the root 'to go up'. The focus isn't on the fire, but on the smoke physically 'Ascending' to the sky. It's an 'Ascension' ritual."
    },
    {
        verse: "Genesis 17:1",
        category: "theology",
        severity: "high",
        popular: "God Almighty",
        correction: "The Sustaining Power (The Breast / Mountain)",
        original: "אֵל שַׁדַּי",
        impact: " 'Almighty' implies raw power. 'Shaddai' is linked to 'Shad' (breast) or 'Shadu' (mountain). It describes a power that sustains life through provision or stands immovable like a peak. It's a 'Source' rather than a 'Crusher'."
    },
    {
        verse: "Exodus 6:3",
        category: "theology",
        severity: "high",
        popular: "The LORD",
        correction: "The Active Existence / He Causes to Become",
        original: "יהוה",
        impact: " 'The LORD' is a title of ownership. The four letters YHWH are a verb form of 'to be'. It means existence is a constant physical action. He is the raw energy of 'Becoming'."
    },
    {
        verse: "Psalm 8:1",
        category: "theology",
        severity: "high",
        popular: "Lord (Adonai)",
        correction: "The Firm Base / Foundation",
        original: "אֲדֹנָי",
        impact: " 'Lord' is a master. 'Adonai' comes from 'Adon' (the socket/base of a pillar). It's the physical foundation that holds the entire structure of reality up."
    },
    {
        verse: "Numbers 24:16",
        category: "physical",
        severity: "mid",
        popular: "Most High",
        correction: "The Summit / The Uppermost",
        original: "עֶלְיוֹן",
        impact: " 'Most High' is a religious rank. 'Elyon' is a spatial term for the top room or top basket. It describes God's physical position at the 'peak' of the hierarchy."
    },
    {
        verse: "Psalm 46:7",
        category: "physical",
        severity: "mid",
        popular: "Lord of Hosts",
        correction: "Commander of the Armies/Forces",
        original: "צְבָאוֹת",
        impact: " 'Hosts' sounds like a dinner party. 'Tzevaot' means literal armies. It refers to the physical massing of angels, stars, and soldiers as one organized force."
    },
    {
        verse: "Psalm 103:13",
        category: "physical",
        severity: "high",
        popular: "Compassion / Mercy",
        correction: "The Womb Bond / Maternal Protection",
        original: "רַחֲמִים",
        impact: " 'Compassion' is a mental feeling. 'Rachamim' is the plural of 'Rechem' (Womb). It describes the physical, biological drive of a mother to protect the life she carried. It's a 'body-memory' of protection."
    },
    {
        verse: "Psalm 16:7",
        category: "physical",
        severity: "mid",
        popular: "Reins / Heart / Soul",
        correction: "The Kidneys (Internal Organs)",
        original: "כִּלְיוֹת",
        impact: "Translators use 'heart' to sound modern. But the Bible says your 'Kidneys' instruct you in the night. The Hebrews believed the kidneys were the physical seat of your deepest emotions and secret decisions."
    },
    {
        verse: "Isaiah 16:11",
        category: "physical",
        severity: "mid",
        popular: "My Soul / My Heart",
        correction: "My Bowels / My Intestines",
        original: "מֵעַי",
        impact: " 'My soul sounds for Moab like a harp.' Original: 'My bowels sound...'. Intense emotion was seen as a literal physical vibration or 'fermenting' in the digestive system. It's visceral, not just mental."
    },
    {
        verse: "Psalm 21:1",
        category: "physical",
        severity: "mid",
        popular: "Strength",
        correction: "The Lion's Roar / Throat-Force",
        original: "עוֹז",
        impact: " 'Strength' is an abstract capacity. 'Oz' is linked to the fierce physical roar or the 'loudness' of a force. It's a visible and audible power."
    },
    {
        verse: "Proverbs 14:30",
        category: "physical",
        severity: "mid",
        popular: "Envy",
        correction: "Redness / Burning of the Skin",
        original: "קִנְאָה",
        impact: " 'Envy' is a quiet thought. 'Qinah' is the physical 'redness' that comes over the face when someone is 'burning' with passion or jealousy. It's a visible physical state."
    },
    {
        verse: "John 3:8",
        category: "physical",
        severity: "high",
        popular: "Spirit",
        correction: "The Moving Wind / Breath",
        original: "πνεῦμα",
        impact: " 'Spirit' sounds like a ghost. 'Pneuma' is literally 'air in motion'. The verse even compares it to the wind because they are the same word. It's the physical 'Atmosphere' of the Power."
    },
    {
        verse: "Matthew 25:46",
        category: "theology",
        severity: "high",
        popular: "Eternal / Everlasting",
        correction: "A Specific Age / Cycle",
        original: "αἰών",
        impact: " 'Eternal' implies endless time. 'Aion' is a fixed period with a start and end. 'Aionios' punishment means punishment that belongs to that 'Age'. It's about duration, not infinity."
    },
    {
        verse: "Psalm 16:10",
        category: "physical",
        severity: "high",
        popular: "Hell",
        correction: "The Hollow Depth / The Grave",
        original: "שְׁאוֹל",
        impact: "Translators used 'Hell' to imply fire/torment. 'Sheol' is a subterranean 'Depth'—a dark, silent place where all physical life ends. It's the 'Void', not a torture chamber."
    },
    {
        verse: "Psalm 48:2",
        category: "physical",
        severity: "mid",
        popular: "Zion",
        correction: "The Landmark / Parched Hill",
        original: "צִיּוֹן",
        impact: " 'Zion' sounds like a magical city in the clouds. In Hebrew, it's a 'Marker' or a 'Parched Place'. It’s a literal geological landmark used to navigate the physical earth."
    },
    {
        verse: "John 1:1",
        category: "theology",
        severity: "high",
        popular: "The Word",
        correction: "The Blueprint / Computation",
        original: "λόγος",
        impact: " 'The Word' sounds like a speech. 'Logos' is the 'Computation' or 'Logic' behind a design. It's the 'Reasoned Blueprint' of reality acting as the seed of creation."
    },
    {
        verse: "Exodus 19:6",
        category: "theology",
        severity: "high",
        popular: "Holy",
        correction: "Set Apart / Distinct",
        original: "קָדוֹשׁ",
        impact: " 'Holy' implies moral perfection. 'Kadosh' means to be physically 'cut off' or 'separated' from the common. It's about being distinct and unique for a specific use."
    },
    {
        verse: "Genesis 15:18",
        category: "theology",
        severity: "high",
        popular: "Covenant",
        correction: "The Cut / Bound Promise",
        original: "בְּרִית",
        impact: " 'Covenant' is a legal contract. 'Berit' is a 'Cutting'. It refers to the physical act of cutting an animal or skin to seal a life-and-death promise. It's a bloody, binding pledge."
    },
    {
        verse: "Matthew 1:20",
        category: "theology",
        severity: "mid",
        popular: "Angel",
        correction: "The Messenger / Sent One",
        original: "מַלְאָךְ",
        impact: " 'Angel' is a species of winged entity. 'Malak' is a job title for anyone sent with a message. It could be a human or a divine agent. The focus is on the 'Task' and the 'Message'."
    },
    {
        verse: "Job 1:6",
        category: "theology",
        severity: "high",
        popular: "Satan (Proper Name)",
        correction: "The Adversary / Accuser",
        original: "שָׂטָן",
        impact: "Translators turned 'Satan' into a proper name for the King of Evil. In Hebrew, it's a common noun for an 'opponent' or 'one who obstructs'. It's a legal and physical role of opposition."
    },
    {
        verse: "Exodus 19:6",
        category: "physical",
        severity: "mid",
        popular: "Priest",
        correction: "The Standing Servant",
        original: "כֹּהֵן",
        impact: " 'Priest' is a religious title. 'Cohen' describes those whose physical duty is to 'stand' and function in the presence. It's about 'service-position' rather than 'religious-rank'."
    },
    {
        verse: "Job 19:25",
        category: "theology",
        severity: "high",
        popular: "Redeemer",
        correction: "The Kinsman-Rescuer / Debt-Buyer",
        original: "גֹּאֵל",
        impact: " 'Redeemer' sounds like a spiritual savior of souls. 'Goel' is a family legal role. It's the relative who physically buys back your lost land or pays your debt to get you out of slavery. It's a 'Financial Rescue'."
    },
    {
        verse: "Psalm 49:7",
        category: "physical",
        severity: "mid",
        popular: "Ransom / Redeem",
        correction: "The Severing Payment / Release Price",
        original: "פָּדָה",
        impact: " 'Redeem' is a church word. 'Padah' means 'to sever'. It's the literal physical price paid to cut someone's chains or release them from a legal cage. It's 'The Severing Price'."
    },
    {
        verse: "Psalm 16:6",
        category: "physical",
        severity: "mid",
        popular: "Inheritance",
        correction: "The Flowing Estate / Family Land",
        original: "נַחֲלָה",
        impact: " 'Inheritance' often refers to spiritual traits. 'Nachalah' is physical property (usually land) that flows downstream through a family line. It is 'Inalienable Real Estate'."
    },
    {
        verse: "Exodus 29:7",
        category: "physical",
        severity: "mid",
        popular: "Anoint",
        correction: "To Smear / Spread Liquid",
        original: "מָשַׁח",
        impact: " 'Anoint' is a mystical ritual. 'Mashah' is the physical act of spreading oil or grease on a surface (like oiling a shield or a person). It's a 'Physical Branding' through smearing."
    },
    {
        verse: "Leviticus 5:15",
        category: "theology",
        severity: "high",
        popular: "Guilt / Trespass",
        correction: "Measured Compensation / The Fine",
        original: "אָשָׁם",
        impact: " 'Guilt' is a feeling in your head. An 'Asham' is a physical fine. It's the animal AND the extra 20% money you pay to compensate for damage. It's 'Measured Restitution', not an emotion."
    },
    {
        verse: "Psalm 62:5",
        category: "physical",
        severity: "mid",
        popular: "Hope",
        correction: "The Cord / Rope",
        original: "תִּקְוָה",
        impact: " 'Hope' is a wishful mental state. 'Tikvah' is a literal physical rope (like the scarlet cord of Rahab). It describes the physical connection you cling to for safety. It's an 'Anchor Cord'."
    },
    {
        verse: "Isaiah 40:31",
        category: "physical",
        severity: "mid",
        popular: "Wait",
        correction: "To Twist / Weave Together",
        original: "קָוָה",
        impact: " 'Wait' is passive sitting. 'Qavah' is the act of twisting strands into a strong rope. To 'wait' is to actively weave your life-force into the Power's force to become unbreakable."
    },
    {
        verse: "Ezekiel 18:30",
        category: "physical",
        severity: "high",
        popular: "Repent",
        correction: "The Physical Turn / Return",
        original: "שׁוּב",
        impact: " 'Repent' sounds like crying and feeling bad. 'Shuv' is a physical 180-degree turn. You were walking away from the path; you physically turned your body and walked back. It's a 'Course Correction'."
    },
    {
        verse: "Psalm 100:4",
        category: "physical",
        severity: "mid",
        popular: "Give Thanks / Praise",
        correction: "To Throw / Extend the Hand",
        original: "יָדָה",
        impact: " 'Give thanks' is a verbal 'thank you'. 'Yadah' is from 'Yad' (hand). It's the physical act of extending your hand or 'throwing' a gesture of total recognition. It's 'Body Language'."
    },
    {
        verse: "1 Samuel 2:1",
        category: "theology",
        severity: "high",
        popular: "Pray",
        correction: "To Judge / Differentiate oneself",
        original: "פָּלַל",
        impact: " 'Pray' is asking for things. 'Palal' is a legal term. It's the act of 'Judging oneself' or 'Umpiring' a situation to see the truth clearly. It's 'Critical Self-Alignment'."
    },
    {
        verse: "Matthew 16:18",
        category: "theology",
        severity: "high",
        popular: "Church",
        correction: "The Called-Out Assembly / Town Hall",
        original: "ἐκκλησία",
        impact: " 'Church' sounds like a building or a religion. 'Ekklesia' was a political term for an assembly of citizens 'called out' to make decisions. It's a 'Decision-Making Body', not a building."
    },
    {
        verse: "Matthew 3:11",
        category: "physical",
        severity: "mid",
        popular: "Baptize",
        correction: "To Immerse / Plunge / Submerge",
        original: "βαπτίζω",
        impact: " 'Baptize' is a religious name for a ritual. 'Baptizo' is the physical act of plunging something into liquid. Like pickling a vegetable or dyeing a cloth. It's 'The Permanent Change' through submersion."
    },
    {
        verse: "1 Timothy 3:8",
        category: "theology",
        severity: "mid",
        popular: "Deacon",
        correction: "The Waiter / Table-Servant",
        original: "διάκονος",
        impact: " 'Deacon' sounds like an ecclesiastical rank. 'Diakonos' is literally a waiter who serves food at a table. It's a job description of 'Active Service', not a title of honor."
    },
    {
        verse: "1 Timothy 3:1",
        category: "theology",
        severity: "mid",
        popular: "Bishop / Overseer",
        correction: "The Watchman / Supervisor",
        original: "ἐπίσκοπος",
        impact: " 'Bishop' carries hierarchical baggage. 'Episkopos' is a 'watcher' or 'supervisor'. It's a physical role of 'Providing Oversight' to ensure a community grows correctly."
    },
    {
        verse: "John 14:16",
        category: "theology",
        severity: "high",
        popular: "Comforter / Advocate",
        correction: "One Called Alongside / Legal Aide",
        original: "παράκλητος",
        impact: " 'Comforter' sounds like a warm blanket. 'Parakletos' is a legal term for an advocate who stands beside you in a law court to help your case. It's a 'Helping Presence', not an emotion."
    },
    {
        verse: "Joshua 3:17",
        category: "physical",
        severity: "mid",
        popular: "Pass through / Cross over",
        correction: "The Physical Bound-Cross / Limit-Break",
        original: "עָבַר",
        impact: " 'Avar' isn't just walking. It's the act of crossing the 'Final Limit'. When applied to God's 'Wrath', it means He has physically gone 'Beyond His Usual Limits' to act. It's a spatial threshold."
    },
    {
        verse: "Judges 2:16",
        category: "theology",
        severity: "high",
        popular: "Judge (Shophet)",
        correction: "The Tribal Champion / Restorer",
        original: "שָׁפַט",
        impact: " 'Judge' sounds like a man in a black robe. A 'Shophet' was a military and political champion who physically 'Delivered' the people and restored order. They were 'Rescuers', not lawyers."
    },
    {
        verse: "Jeremiah 18:8",
        category: "theology",
        severity: "high",
        popular: "Repent / Change Mind",
        correction: "The Deep Sigh / Relenting",
        original: "נָחַם",
        impact: " 'Repent' implies God made a mistake. 'Nacham' is the physical act of 'Breathing Strongly' or 'Sighing'. It describes God physically relenting or sighing in relief/sorrow based on a human change. It's 'Relentless Compassion'."
    },
    {
        verse: "Joshua 5:9",
        category: "physical",
        severity: "mid",
        popular: "Roll away / Removed",
        correction: "The Physical Stone-Roll / Displacement",
        original: "גָּלַל",
        impact: " 'Removing reproach' sounds abstract. 'Galal' is the physical act of 'Rolling a heavy stone' away from a path. It describes the total physical displacement of a burden from your history."
    },
    {
        verse: "Ruth 2:13",
        category: "physical",
        severity: "mid",
        popular: "Comforted",
        correction: "The Relieving Breath / Consolidation",
        original: "נָחַם",
        impact: " Comfort isn't a hug; it's a 'Deep Breath' after a storm. For Ruth and Naomi, 'Nacham' was the physical sigh of relief when the burden of survival was finally lifted."
    },
    {
        verse: "Amos 8:2",
        category: "physical",
        severity: "high",
        popular: "Basket of Summer Fruit",
        correction: "Ripe for the End / Final Harvest",
        original: "קַיִץ / קֵץ",
        impact: " This is a physical wordplay. 'Kayits' (fruits picked at the very end of the season) sounds exactly like 'Qets' (The End). It means the nation is physically 'over-ripe' and ready to drop. It's 'Harvest-Time Finality'."
    },
    {
        verse: "Hosea 6:3",
        category: "physical",
        severity: "mid",
        popular: "Teach / Rain",
        correction: "The Pointed Direction / Pouring Out",
        original: "יָרָה",
        impact: " 'Teaching' is a classroom activity. 'Yarah' is the physical act of 'Throwing' or 'Pointing' an arrow. It compared the Power's direction to the physical rain that points life out of the ground. It's 'Directed Flow'."
    },
    {
        verse: "Micah 6:8",
        category: "physical",
        severity: "mid",
        popular: "Walk Humbly",
        correction: "Keep it Low / Hidden Move",
        original: "צָנַע",
        impact: " 'Humbly' is a pious attitude. 'Tsana' is a physical posture. It means to 'keep it low' or stay in the shadows/privacy where you aren't drawing attention. It's 'Unobtrusive Movement' with the Power."
    },
    {
        verse: "Hosea 5:15",
        category: "physical",
        severity: "mid",
        popular: "Seek my face",
        correction: "Scour the Surface / Face-Search",
        original: "בָּקַשׁ",
        impact: " 'Seek' is a mental desire. 'Bakash' is a physical search—like scouring a field for a lost object. To seek the 'face' is to physically study the surface of reality to find the source. It's 'Deep Scouring'."
    },
    {
        verse: "Joel 1:10",
        category: "physical",
        severity: "mid",
        popular: "New Wine",
        correction: "The Head-Striker / Fresh Squeeze",
        original: "תִּירוֹשׁ",
        impact: " 'New Wine' is just a beverage. 'Tirosh' comes from a root meaning 'to take possession (of the head)'. It’s the raw physical power of the first harvest squeeze that provides immediate energy and sweetness. It's 'Vital Juice'."
    },
    {
        verse: "Galatians 4:3",
        category: "physical",
        severity: "high",
        popular: "Elementary Principles / Elements",
        correction: "The Basic Building-Blocks / Row-Formation",
        original: "στοιχεῖα",
        impact: " 'Principles' sounds like ideas. 'Stoicheia' are literal 'rows' (like soldiers) or 'A-B-C's'. It describes the physical components that make up a system. Paul is talking about being enslaved to the 'Atomic Reality' of the world."
    },
    {
        verse: "Ephesians 5:21",
        category: "physical",
        severity: "mid",
        popular: "Submit",
        correction: "To Arrange in Rank / Structural Alignment",
        original: "ὑποτάσσω",
        impact: " 'Submit' sounds like yielding your will. 'Hupotasso' is a military term. It means to 'organize yourself under' a tactical rank. It's a 'Strategic Positioning' within a team, not a loss of value."
    },
    {
        verse: "Philippians 2:7",
        category: "physical",
        severity: "high",
        popular: "Emptied Himself",
        correction: "The Physical Drain / Pouring Out",
        original: "κένωσις",
        impact: " 'Emptied' sounds like a metaphor. 'Kenosis' is the physical act of draining a container or the waning of the moon. It's the literal 'Draining of Status' to become a functional tool. It's a deficit of capacity."
    },
    {
        verse: "Colossians 2:9",
        category: "physical",
        severity: "mid",
        popular: "Fullness (Pleroma)",
        correction: "Full Ship Capacity / The Entire Crew",
        original: "πλήρωμα",
        impact: " 'Fullness' is vague. 'Pleroma' is a nautical term for the crew, cargo, and ballast that fills a ship. In Christ, the entire 'Manifest of the Power' is physically present. He is a 'Fully Loaded' vessel."
    },
    {
        verse: "Philippians 4:5",
        category: "physical",
        severity: "mid",
        popular: "Gentleness / Moderation",
        correction: "Equitable Yielding / Justice beyond Rules",
        original: "ἐπιεικής",
        impact: " 'Gentleness' is a soft personality. 'Epieikes' is a ruler’s choice to 'yield' the strict law for a better outcome. It's a 'Flexible Justice' that fits the physical reality of the situation."
    },
    {
        verse: "Revelation 1:1",
        category: "physical",
        severity: "high",
        popular: "Revelation (Apocalypse)",
        correction: "The Unveiling / Taking the Lid Off",
        original: "ἀποκάλυψις",
        impact: " 'Apocalypse' sounds like fire and destruction. 'Apokalypsis' is the literal physical act of 'Removing a Cover' from an object. It is a 'Disclosure' of what was already physically there but hidden."
    },
    {
        verse: "Matthew 24:21",
        category: "physical",
        severity: "high",
        popular: "Great Tribulation",
        correction: "The Physical Crushing / Pressure",
        original: "θλῖψις",
        impact: " 'Tribulation' is a religious time-period. 'Thlipsis' is the physical 'Weight' of a stone or a winepress. It describes the sensation of being 'Pressed' or 'Squeezed' until the essence comes out."
    },
    {
        verse: "1 Thessalonians 4:15",
        category: "theology",
        severity: "high",
        popular: "Coming of the Lord",
        correction: "The Royal Arrival / Presence of the King",
        original: "παρουσία",
        impact: " 'Coming' is a generic movement. 'Parousia' was the technical term for a King's 'Official Visitation' to a city. He hasn't just 'come'; he has 'Arrived to occupy and stay'."
    },
    {
        verse: "1 Thessalonians 4:17",
        category: "physical",
        severity: "mid",
        popular: "In the Clouds",
        correction: "In the Vapor / Atmospheric Fog",
        original: "νεφέλη",
        impact: " 'Clouds' are seen as magical vehicles. 'Nephele' is the literal physical 'Vapor' of the sky. It describes the Power manifesting within the 'Atmosphere' of the planet."
    },
    {
        verse: "1 John 2:18",
        category: "theology",
        severity: "high",
        popular: "Antichrist",
        correction: "The Substitute / In Place of the Anointed",
        original: "ἀντίχριστος",
        impact: " 'Antichrist' sounds like a demon. 'Anti' means 'instead of'. It describes someone physically taking the 'Position' of the King. It's an 'Unauthorized Replacement' for the legitimate ruler."
    },
    {
        verse: "Ecclesiastes 1:3",
        category: "physical",
        severity: "mid",
        popular: "Labor / Toil",
        correction: "The Physical Weight / Weary Effort",
        original: "עָמָל",
        impact: " 'Toil' is a work-concept. 'Amal' is the literal 'Weariness' and physical distress of the body after heavy exertion. It's the 'Body-Ache' of life under the sun."
    },
    {
        verse: "Ecclesiastes 1:14",
        category: "physical",
        severity: "mid",
        popular: "Vexation of Spirit",
        correction: "Pasturing the Wind / Feeding on Vapor",
        original: "רְעוּת רוּחַ",
        impact: " 'Vexation' is a mental mood. 'Re'ut' comes from 'to graze/pasture'. It's the physical absurdity of trying to 'herd' the wind or feed on a gust. It's 'Agricultural Futility'."
    },
    {
        verse: "Job 18:8",
        category: "physical",
        severity: "mid",
        popular: "A Net / Snare",
        correction: "The Hunter's Mesh / Tangible Entanglement",
        original: "רֶשֶׁת",
        impact: " 'Snares of sin' sound like metaphors. 'Reshet' is a physical hunter's net with weights. It describes being physically caught and 'hemmed in' by a mesh-system."
    },
    {
        verse: "Philemon 1:11",
        category: "theology",
        severity: "mid",
        popular: "Profitable / Useful",
        correction: "Commercial Utility / Marketable Asset",
        original: "εὔχρηστος",
        impact: " 'Useful' sounds like a nice personality. 'Euchrestos' is a commercial term for a servant's 'Labor Market Value'. Paul is saying Onesimus has recovered his 'Material Utility' for the mission."
    },
    {
        verse: "Song of Solomon 1:12",
        category: "physical",
        severity: "mid",
        popular: "Spikenard / Perfume",
        correction: "The Red Resin / Himalayan Oil",
        original: "נֵרְדְּ",
        impact: " 'Perfume' is a general scent. 'Nard' is a specific, expensive, physical 'Red Resin' oil from the mountains. It represents the 'Materiality of Passion'—it's a physical substance you can touch."
    },
    {
        verse: "Jude 1:13",
        category: "physical",
        severity: "mid",
        popular: "Wandering Stars",
        correction: "The Meandering Planets",
        original: "πλανῆται",
        impact: " 'Wandering stars' sounds like a poetic insult. 'Planetes' is the literal astronomical term for planets. Because they meander against the fixed stars, they are physically useless for navigation. False teachers are 'Unreliable Navigational Bodies'."
    },
    {
        verse: "Jude 1:12",
        category: "physical",
        severity: "mid",
        popular: "Feasts of Charity / Love Feasts",
        correction: "The Physical Group-Meals / Nutrition Sharing",
        original: "ἀγάπαι",
        impact: " 'Love feasts' sound like a spiritual idea. 'Agapai' were literal physical dinners where the community shared real food. It’s the 'Material Manifestation' of priority through biological support."
    },
    {
        verse: "3 John 1:2",
        category: "theology",
        severity: "mid",
        popular: "I wish / I pray",
        correction: "I vocalize the Will / Spoken Vow",
        original: "εὔχομαι",
        impact: " 'I wish' is a passive thought. 'Euchomai' is the physical act of 'Speaking a Vow' or voicing the will. John is physically 'Projecting the Will' that Gaius's physical health matches his logic."
    },
    {
        verse: "2 John 1:12",
        category: "physical",
        severity: "mid",
        popular: "With Ink",
        correction: "With the Black Fluid / Soot-Liquid",
        original: "μέλας",
        impact: " 'Ink' is just a supply. 'Melas' is the word for 'Black'. It refers to the physical material (soot-and-water) used to 'Fix' the invisible logic onto a three-dimensional surface. It's 'Materialized Thought'."
    },
    {
        verse: "1 Kings 6:3",
        category: "physical",
        severity: "mid",
        popular: "Temple (Hekhal)",
        correction: "The Great Hall / Royal Palace",
        original: "הֵיכָל",
        impact: " 'Temple' sounds purely religious. 'Hekhal' is a physical building term for a 'Great Hall' or 'Palace'. It describes the Headquarters of the Kingdom as a tangible administrative center."
    },
    {
        verse: "Ezra 9:15",
        category: "theology",
        severity: "high",
        popular: "Righteousness",
        correction: "Tangible Loyalty / Social Justness",
        original: "צְדָקָה",
        impact: " 'Righteousness' is an abstract moral perfection. 'Tsadaqah' is a physical act of 'Covenant Loyalty' or 'Social Realignment'. It's about doing the tangible right thing to restore a person's status."
    },
    {
        verse: "Ezra 1:11",
        category: "physical",
        severity: "mid",
        popular: "Captivity / Exile",
        correction: "The Displaced Community / Relocated Body",
        original: "גּוֹלָה",
        impact: " 'Exile' sounds like a metaphor for being far from God. 'Gola' refers to the physical 'Body of People' who were relocated. It's a demographic reality of displacement."
    },
    {
        verse: "2 Chronicles 24:27",
        category: "physical",
        severity: "mid",
        popular: "Burdens / Oracles",
        correction: "The Physical Load / Heavy Utterance",
        original: "מַשָּׂא",
        impact: " 'Burden' sounds like a bad day. 'Massa' is from 'to lift'. It's the literal physical 'Load' placed on a carrier. A prophetic 'Burden' is a weight the carrier physically feels in their duty."
    },
    {
        verse: "Nehemiah 5:7",
        category: "physical",
        severity: "high",
        popular: "Usury / Interest",
        correction: "The Debt-Crush / Financial Seizure",
        original: "מַשָּׁא",
        impact: " 'Usury' sounds like a banker's sin. 'Mashsha' is the physical 'Burdensome Interest' that led to the literal seizure of children and land. It's a 'Financial Crushing' of the poor."
    },
    {
        verse: "Jonah 4:6",
        category: "physical",
        severity: "mid",
        popular: "Gourd / Vine",
        correction: "The Shade-Casting Castor Plant",
        original: "קִיקָיוֹן",
        impact: " 'Gourd' is a generic plant. 'Qiqayon' is a specific fast-growing plant with giant leaves that provide a physical thermal shield. It's 'Biological Heat-Protection', not a magic vine."
    },
    {
        verse: "Habakkuk 1:1",
        category: "theology",
        severity: "mid",
        popular: "Habakkuk (Prophet Name)",
        correction: "The Physical Clasp / Ardent Embrace",
        original: "חֲבַקּוּק",
        impact: " A name is just a label. 'Habakkuk' means 'Embrace'. It describes the physical act of clasping. It represents the 'Combat-Embrace' of the man wrestling with the Power's logic."
    },
    {
        verse: "James 1:3",
        category: "physical",
        severity: "high",
        popular: "Testing of Faith",
        correction: "The Metal-Refining Fire / Slag-Removal",
        original: "δοκίμιον",
        impact: " 'Testing' sounds like a school exam. 'Dokimion' is a metallurgical process where fire is used to physically separate precious metal from slag. It's 'Linguistic and Status Refining'."
    },
    {
        verse: "Zechariah 3:8",
        category: "physical",
        severity: "mid",
        popular: "The Branch",
        correction: "The Green Sprout / Fresh Shoot",
        original: "צֶמַח",
        impact: " 'The Branch' is a static title. 'Tsemakh' is a physical agricultural 'Growth' or 'Sprout'. It describes the 'Biological Resurgence' of a lineage from a dead stump."
    },
    {
        verse: "Habakkuk 3:3",
        category: "physical",
        severity: "mid",
        popular: "Selah",
        correction: "The Physical Lift / Reflective Interval",
        original: "סֶלָה",
        impact: " 'Selah' is ignored as a musical note. It means 'To Lift Up'. It is a physical instruction to lift the voice or pause the breath. It's a 'Regulated Pause' to allow the logic to settle."
    },
    {
        verse: "Hebrews 11:1",
        category: "theology",
        severity: "high",
        popular: "Substance / Assurance",
        correction: "The Physical Foundation / Title Deed",
        original: "ὑπόστασις",
        impact: " 'Assurance' is a mental confidence. 'Hypostasis' is a legal term for a 'Title Deed'. Faith is the physical document/foundation that proves you own the reality before you see it. It's 'Tangible Proof'."
    },
    {
        verse: "2 Corinthians 5:17",
        category: "physical",
        severity: "high",
        popular: "New Creature",
        correction: "A New Physical Species / Prototype",
        original: "καινὴ κτίσις",
        impact: " 'New creature' sounds like a better version of you. 'Kaine Ktisis' describes a brand-new material creation or 'Species'. It's a structural 'Biological-Social' change, not a moral upgrade."
    },
    {
        verse: "Titus 3:5",
        category: "physical",
        severity: "mid",
        popular: "Washing of Regeneration",
        correction: "The Physical Bath-Tub / Basin",
        original: "λουτρόν",
        impact: " 'Washing' sounds like a spiritual metaphor. 'Loutron' is a literal 'Bath-Tub' or washing basin. It describes the physical act of 'Scrubbing' away the old social-material dirt to start fresh."
    },
    {
        verse: "2 Peter 2:1",
        category: "theology",
        severity: "mid",
        popular: "Heresies",
        correction: "Personal Choices / Partisan Factions",
        original: "αἱρέσεις",
        impact: " 'Heresy' is an evil thought. 'Haireseis' means 'A Choice'. It describes the physical act of 'Splitting into Factions' based on personal choice. It's about social 'Fragmenting', not just wrong ideas."
    },
    {
        verse: "Malachi 3:1",
        category: "physical",
        severity: "mid",
        popular: "Messenger / Angel",
        correction: "The Tangible Envoy / Deputy",
        original: "מַלְאָך",
        impact: " 'Angel' sounds like a mystical creature. 'Malak' is a job title for a physical 'Messenger' or diplomatic envoy. It's a functional 'Role' of carrying a message, whether human or otherwise."
    },
    {
        verse: "Esther 3:7",
        category: "physical",
        severity: "low",
        popular: "The Lot (Pur)",
        correction: "The Deciding Stone / Chance-Object",
        original: "פּוּר",
        impact: " 'Lot' is an abstract idea of fate. 'Pur' is a physical stone or cube thrown to make a decision. The entire feast of Purim is named after a tangible 'Gaming Piece' used to decide a massacre date."
    },
    {
        verse: "Obadiah 1:3",
        category: "physical",
        severity: "mid",
        popular: "Pride",
        correction: "The Seething / Boiling-Over",
        original: "זָדוֹן",
        impact: " 'Pride' is a mental state. 'Zadon' is from the root 'to boil'. It's the physical image of water swelling and bubbling over a pot. It describes an ego that has physically 'Overheated' and expanded beyond its container."
    },
    {
        verse: "Nahum 1:2",
        category: "theology",
        severity: "mid",
        popular: "Vengeance / Revenge",
        correction: "The Rectifying Response / Snorting Justice",
        original: "נָקָם",
        impact: " 'Vengeance' sounds like personal spite. 'Naqam' is a righteous 'Act to Bring Out the Truth'. It often implies the physical snorting/heavy breathing of a ruler moving to restore balance. It's 'Systematic Correction'."
    },
    {
        verse: "Luke 8:36",
        category: "physical",
        severity: "high",
        popular: "Saved / Healed",
        correction: "The Physical Rescue / Restoration to Wholeness",
        original: "σῴζω",
        impact: " 'Saved' is often spiritualized as 'going to heaven'. 'Sozo' is a medical and rescue term. It means to physically pull someone out of a fire or heal a diseased limb. It is 'Total Physical Preservation'."
    },
    {
        verse: "Mark 1:1",
        category: "theology",
        severity: "high",
        popular: "Gospel",
        correction: "The Royal Victory-News / War-Update",
        original: "εὐαγγέλιον",
        impact: " 'Gospel' is a religious word for a sermon. 'Euangelion' was a secular political term for a 'Royal Announcement' of a military victory or a new King's coronation. it's a 'Status Update' for the world."
    },
    {
        verse: "2 Thessalonians 2:3",
        category: "theology",
        severity: "high",
        popular: "Falling Away / Apostasy",
        correction: "The Military Desertion / Group Defection",
        original: "ἀποστασία",
        impact: " 'Falling away' sounds like a slow loss of faith. 'Apostasia' is a political and military term for a 'Rebellion' or 'Standing Away' from the rank. It is a 'Mass Defection' from the King's authority."
    },
    {
        verse: "2 Timothy 3:16",
        category: "physical",
        severity: "high",
        popular: "Inspired by God",
        correction: "The Physical God-Breathed / Exhalation",
        original: "θεόπνευστος",
        impact: " 'Inspired' sounds like a feeling in an author's head. 'Theopneustos' is the physical act of 'Breathing Out'. Scripture is the Power's literal 'Exhaled Logic' fixed in writing. It's 'Atmospheric Output'."
    },
    {
        verse: "2 Kings 2:11",
        category: "physical",
        severity: "mid",
        popular: "Chariot of Fire",
        correction: "The Tangible War-Vehicle / Force-Unit",
        original: "רֶכֶב",
        impact: " 'Chariot' sounds like a metaphor for heaven. 'Rekhev' is a literal military 'War-Vehicle'. It describes a tangible 'Force-Unit' that physically manipulated the atmosphere to move a person. It's a 'Material Transport'."
    },
    {
        verse: "Haggai 2:7",
        category: "physical",
        severity: "mid",
        popular: "Desire of all Nations",
        correction: "The Physical Wealth / Material Assets",
        original: "חֶמְדָּה",
        impact: " 'Desire' is spiritualized as a person. 'Chemdah' in context refers to the literal 'Silver and Gold' (v8) and physical assets of the nations. It's the 'Material Inflow' of wealth into the headquarters."
    },
    {
        verse: "Acts 2:2",
        category: "physical",
        severity: "high",
        popular: "Rushing Mighty Wind",
        correction: "The Violent Exhalation / Forced Air",
        original: "πνοή",
        impact: " 'Wind' sounds like a weather fluke. 'Pnoe' is the physical sound and pressure of 'Breathing' or 'Forced Air'. It was a tangible 'Atmospheric Event' that people felt and heard. It's 'Biological-Force'."
    },
    {
        verse: "Zephaniah 1:12",
        category: "physical",
        severity: "mid",
        popular: "Search with lamps",
        correction: "The Meticulous Exposure / Corner-Light",
        original: "חָפַשׂ",
        impact: " 'Search' is a general investigation. This is the physical act of taking a lamp into every 'Dark Corner' to look at every face. It describes 'Total Physical Exposure' of hidden truth. It's 'Optical Justice'."
    },
    {
        verse: "2 Samuel 7:15",
        category: "theology",
        severity: "mid",
        popular: "Mercy / Lovingkindness",
        correction: "Physical Loyalty / Covenant-Binding",
        original: "חֶסֶד",
        impact: " 'Mercy' is a feeling of pity. 'Chessed' is the physical 'Stuck-ness' or binding of a relationship. It's the tangible act of staying physically committed to a person regardless of their performance."
    },
    {
        verse: "1 Chronicles 17:8",
        category: "physical",
        severity: "mid",
        popular: "A Great Name",
        correction: "A High Rank / Social Sound-Label",
        original: "שֵׁם",
        impact: " 'Name' is just a word. 'Shem' is the physical 'Vibration' and social 'Position' of an individual. To have a great name is to occupy a physical high-rank 'Slot' in the collective memory."
    },
    {
        verse: "Lamentations 4:17",
        category: "physical",
        severity: "mid",
        popular: "Vain Help",
        correction: "Vaporous Help / Passing Breath",
        original: "הֶבֶל",
        impact: " 'Vain' sounds like a failed attempt. 'Hevel' is the physical image of 'Breath' or 'Vapor'. It describes help that looks real but has no physical 'Density'—it disappears as soon as you touch it."
    },
    {
        verse: "Daniel 7:1",
        category: "physical",
        severity: "mid",
        popular: "Visions / Seeing",
        correction: "The Tangible Gaze / Perception",
        original: "חָזָה",
        impact: " 'Vision' sounds like a mental movie. 'Chaza' is the physical act of 'Gazing' or staring until the pattern is seen. It's the 'Observation of the Eyes' focused on a specific reality."
    },
    {
        verse: "1 Corinthians 12:4",
        category: "theology",
        severity: "high",
        popular: "Spiritual Gifts",
        correction: "Favors / Physical Endowment Tokens",
        original: "χάρισμα",
        impact: " 'Gifts' sound like mystical superpowers. 'Charisma' is a physical 'Token of Favor'. It describes unearned 'Functional Advantages' given to a person to achieve a physical result for the group."
    },
    {
        verse: "1 Peter 2:5",
        category: "physical",
        severity: "mid",
        popular: "Living Stones",
        correction: "Quarried Blocks / Material Foundations",
        original: "λίθος",
        impact: " 'Stones' are seen as symbols. 'Lithos' is a physical building material. It describes people as literal 'Building Blocks' being fitted together into a three-dimensional social 'Architecture'."
    },
    {
        verse: "Matthew 3:2",
        category: "theology",
        severity: "high",
        popular: "Repent",
        correction: "Change of Mental Structure / Trajectory",
        original: "μετανοέω",
        impact: " 'Repent' sounds like feeling sad or sorry. 'Meta' (change) + 'Noeo' (mind/structure). It is a physical 'Recalibration' of your thinking pattern and life direction. It's a 'Course Correction', not an emotion."
    },
    {
        verse: "Matthew 10:38",
        category: "physical",
        severity: "high",
        popular: "The Cross",
        correction: "The Vertical Stake / Upright Pole",
        original: "σταυρός",
        impact: " 'The Cross' is a religious ornament. 'Stauros' is a physical object—a vertical wooden stake or pole used for execution. It represents the 'Material Cost' of rebellion against the system."
    },
    {
        verse: "Matthew 4:17",
        category: "theology",
        severity: "high",
        popular: "Preach",
        correction: "Act as a Herald / Proclaim the Decree",
        original: "κηρύσσω",
        impact: " 'Preach' sounds like giving a religious speech. 'Kerusso' is the job of a physical 'Herald' who stands in a public place to shout the King's official news. It's an 'Official Announcement' of a new reality."
    },
    {
        verse: "Romans 3:24",
        category: "theology",
        severity: "high",
        popular: "Justified",
        correction: "Straightened / Aligned with the Standard",
        original: "δικαιόω",
        impact: " 'Justified' sounds like a legal tricks. 'Dikaioo' is the physical act of 'Making Something Right' or 'Straightening' it so it fits the blueprint. It's 'Structural Alignment'."
    },
    {
        verse: "Matthew 13:3",
        category: "physical",
        severity: "mid",
        popular: "Parable",
        correction: "The Side-by-Side Comparison / Parallel",
        original: "παραβολή",
        impact: " 'Parable' is a nice story. 'Para' (alongside) + 'Bole' (to throw). It is the physical act of 'Throwing two things down next to each other' to see how they compare. It's 'Comparative Logic'."
    },
    {
        verse: "Numbers 15:38",
        category: "physical",
        severity: "low",
        popular: "Fringes / Tassels",
        correction: "The Flower-Like Blooms / Glistening Strands",
        original: "צִיצִת",
        impact: " 'Fringes' sounds like clothing trim. 'Tsitsit' is from the root 'to bloom' or 'glisten'. They are physical 'Blooms' of thread that represent the glistening light of the Commandment in the physical world."
    },
    {
        verse: "Numbers 5:12",
        category: "theology",
        severity: "mid",
        popular: "Go Aside / Wayward",
        correction: "The Physical Tilt / Leaning Away",
        original: "שָׂטָה",
        impact: " 'Wayward' is a moral trait. 'Sotah' describes a physical 'Tilt' or 'Deviation' from a straight line. It's the physical act of leaning away from the covenantal center."
    },
    {
        verse: "Deuteronomy 6:9",
        category: "physical",
        severity: "low",
        popular: "Doorposts",
        correction: "The Physical Moving-Joint / Entry-Marker",
        original: "מְזוּזָה",
        impact: " 'Doorpost' is a piece of wood. 'Mezuzah' refers to the 'Moving-Point' or pivot of the door. Marking the Mezuzah is physically marking the 'Transition Point' between private and public space."
    },
    {
        verse: "Deuteronomy 6:8",
        category: "physical",
        severity: "low",
        popular: "Frontlets",
        correction: "The Visual Bands / Eye-Fixed Markers",
        original: "טּוֹטָפֹת",
        impact: " 'Frontlets' is an archaic word for jewelry. 'Totafot' are literal 'Bands' or markers that drop between the eyes. They are physical 'Visual Obstructions' to remind the eyes to look at the Truth first."
    },
    {
        verse: "Deuteronomy 6:4",
        category: "physical",
        severity: "high",
        popular: "Hear / Listen",
        correction: "The Physical Auditory-Response / Obedience-Echo",
        original: "שָׁמַע",
        impact: " 'Hear' is a passive ear-function. 'Shema' is a physical 'Response'. It means the sound enters the ear and produces a physical movement in the body. If you don't 'do', you haven't 'heard'."
    },
    {
        verse: "Joshua 1:1",
        category: "physical",
        severity: "mid",
        popular: "Minister / Servant",
        correction: "The Physical Table-Waiter / Attendant",
        original: "מְשָׁרֵת",
        impact: " 'Minister' is a high religious office. 'Mesaresh' is a physical 'Attendant' or 'Waiter'. Joshua was Moses's literal 'Body-Server', handling his physical needs to learn the weight of the office."
    },
    {
        verse: "Joshua 6:17",
        category: "theology",
        severity: "high",
        popular: "Accursed / Devoted to Destruction",
        correction: "The Physical Separation / Ban-Status",
        original: "חֵרֶם",
        impact: " 'Accursed' sounds like a magic spell. 'Cherem' is the physical act of 'Banning' or 'Separating' an object from common use. It is 'Irreversible Allocation' to the Sacred Center."
    },
    {
        verse: "Judges 14:14",
        category: "physical",
        severity: "mid",
        popular: "Riddle / Proverb",
        correction: "The Polished Surface / Comparison-Object",
        original: "מָשָׁל",
        impact: " 'Proverb' is a wise saying. 'Mashal' is from a root for 'to represent' or 'to rule'. It is a physical 'Model' or 'Representation' thrown down to show the rule of a situation."
    },
    {
        verse: "Judges 8:16",
        category: "physical",
        severity: "mid",
        popular: "Taught / Threshed",
        correction: "The Physical Chaff-Rubbing / Friction",
        original: "יָדַע",
        impact: " The text says Gideon 'taught' the elders with thorns. The word is 'Yada' (to know). He made them 'Experience' the reality of their failure through the physical friction of thorns. Knowledge through pain."
    },
    {
        verse: "Judges 5:11",
        category: "theology",
        severity: "mid",
        popular: "Righteous Acts",
        correction: "The Social-Correctness Acts / Aligned Deeds",
        original: "צִדְקָה",
        impact: " 'Righteousness' is a moral purity. 'Tsidqah' in Judges refers to the physical 'Rescue-Deeds' of the champions. It is the 'Correct' social act of fixing a broken boundary."
    },
    {
        verse: "Joshua 5:9",
        category: "physical",
        severity: "low",
        popular: "Gilgal (Proper Name)",
        correction: "The Physical Rolling-Circle",
        original: "גִּלְגָּל",
        impact: " A name is just a marker. 'Gilgal' describes the physical act of 'Rolling' away a burden. It represents the literal 'Circle' of stones that mark a physical boundary of freedom."
    },
    {
        verse: "Judges 3:15",
        category: "physical",
        severity: "mid",
        popular: "Left-Handed",
        correction: "Shut in the Right Hand / Bound Right",
        original: "אִטֵּר",
        impact: " 'Left-handed' sounds like a biological trait. 'Itter' means 'to shut'. It describes a physical 'Constraint' or 'Binding' of the right hand, forcing the use of the left. It's 'Tactical Asymmetry'."
    },
    {
        verse: "1 Samuel 2:18",
        category: "physical",
        severity: "low",
        popular: "Ephod",
        correction: "The Physical Girdle / Wrapping",
        original: "אֵפוֹד",
        impact: " 'Ephod' is a religious vestment. It comes from 'Aphad' (to bind/gird). It is a physical 'Wrap' that identifies the carrier's rank. It's a 'Status-Wrapper'."
    },
    {
        verse: "1 Samuel 15:22",
        category: "theology",
        severity: "high",
        popular: "To Obey",
        correction: "To Hear the Sound / Listen with Action",
        original: "שָׁמַע",
        impact: " 'Obey' is a moral surrender. 'Shema' is the physical 'Reception of Sound'. In Hebrew, if the sound doesn't produce a physical deed, the hearing didn't happen. It's 'Integrated Hearing'."
    },
    {
        verse: "2 Samuel 5:8",
        category: "physical",
        severity: "mid",
        popular: "Gutter / Watercourse",
        correction: "The Water-Shaft / Hooked Channel",
        original: "צִנּוֹר",
        impact: " 'Gutter' sounds like a sewer. 'Tsinnor' is a physical 'Shaft' or 'Hooked pipe'. It describes the literal technical feat of climbing through a vertical water-conduit to breach a city."
    },
    {
        verse: "2 Samuel 22:2",
        category: "physical",
        severity: "low",
        popular: "Fortress / Stronghold",
        correction: "The Mountain Net / Bound Peak",
        original: "מְצוּדָה",
        impact: " 'Fortress' is a building. 'Metsudah' is from a root for 'hunting' or 'netting'. It describes a physical 'Peak' that is difficult to climb—it 'nets' those who try to approach. It's 'Geological Defense'."
    },
    {
        verse: "1 Kings 11:7",
        category: "theology",
        severity: "mid",
        popular: "High Place",
        correction: "The Back-Bone / Ridge-Rib",
        original: "בָּמָה",
        impact: " 'High place' is a generic altar. 'Bamah' is a biological term for an animal's 'Back' or 'Rib'. It describes built-up physical mounds that look like the 'Back-Bone' of the topography. It's 'Anatomical Architecture'."
    },
    {
        verse: "1 Kings 6:23",
        category: "physical",
        severity: "low",
        popular: "Cherubim",
        correction: "The Grippers / Scrapers / Guardians",
        original: "כְּרוּבִים",
        impact: " 'Cherubim' are winged babies. 'Kerub' is related to 'Karab' (to grip/hold). They are physical 'Guardians' or 'Grippers' who block unauthorized entry. They are 'Security Units'."
    },
    {
        verse: "2 Kings 5:10",
        category: "physical",
        severity: "mid",
        popular: "Wash",
        correction: "To Dip / Plunge Body",
        original: "רָחַץ",
        impact: " 'Wash' is about hygiene. 'Rachats' is the physical act of 'Submerging' the body in a liquid flow. It’s the 'Plunge' that shifts the physical state from 'Excluded' to 'Functional'."
    },
    {
        verse: "2 Kings 20:1",
        category: "theology",
        severity: "mid",
        popular: "Sick unto Death",
        correction: "The Falling / Waning of the Frame",
        original: "חָלָה",
        impact: " 'Sick' is a medical diagnosis. 'Chalah' describes a physical 'Waning' or 'Weakening' of the structure. It’s the physical sensation of the life-force 'draining' from the vessel."
    },
    {
        verse: "1 Chronicles 16:35",
        category: "physical",
        severity: "low",
        popular: "Save us",
        correction: "Rescue / Physically Pull us Out",
        original: "יָשַׁע",
        impact: " 'Save' is a modern religious concept. 'Yasha' is the physical act of 'Removing someone from a closed space' or a trap. It means providing 'Room to Breath' by pulling them out of danger."
    },
    {
        verse: "1 Chronicles 29:21",
        category: "physical",
        severity: "mid",
        popular: "Sacrifice",
        correction: "To Slit / The Physical Cutting",
        original: "זֶבַח",
        impact: " 'Sacrifice' implies an abstract giving up. 'Zevach' is the literal physical 'Slitting' of an animal's throat. It is the material act of releasing the life-force to seal a deal."
    },
    {
        verse: "2 Chronicles 2:4",
        category: "physical",
        severity: "low",
        popular: "Temple",
        correction: "The Great Hall / Royal Residence",
        original: "הֵיכָל",
        impact: " 'Temple' is a sanctuary. 'Hekhal' is a building term for a 'Grand Hall' or palace. It describes the Power's administrative headquarters as a tangible physical building."
    },
    {
        verse: "2 Chronicles 13:10",
        category: "theology",
        severity: "mid",
        popular: "The LORD our God",
        correction: "The Active Existence / The Forces",
        original: "יהוה אֱלֹהִים",
        impact: " 'LORD' is a personal name. 'YHWH Elohim' describes the 'Active Energy' that causes the 'Vast Forces' to function as one blueprint. It's a scientific-linguistic statement of unity."
    },
    {
        verse: "Ezra 2:62",
        category: "physical",
        severity: "mid",
        popular: "Register / Genealogy",
        correction: "The Census-Writing / Numbered List",
        original: "מִכְתָּב",
        impact: " 'Register' sounds like a church book. 'Mikta' is a physical 'Script' or 'Engraving'. It represents the tangible 'Numbered Data' of the community's lineage."
    },
    {
        verse: "Ezra 8:36",
        category: "theology",
        severity: "low",
        popular: "Laws / Decrees",
        correction: "The Royal Matter / Stamped Material",
        original: "דָּת",
        impact: " 'Law' is an abstract rule. 'Dath' is a Persian term for an 'Official Decree'. It describes the literal physical 'Stamped Material' that carries the King's force into a province."
    },
    {
        verse: "Nehemiah 2:17",
        category: "physical",
        severity: "high",
        popular: "Building the Wall",
        correction: "Stacking the Joined-Stones / Barrier",
        original: "חוֹמָה",
        impact: " 'Wall' is a general barrier. 'Homah' is from a root for 'to join'. It is the physical act of 'Joining' massive stones together to create an unbreakable social-material boundary."
    },
    {
        verse: "Nehemiah 2:7",
        category: "physical",
        severity: "low",
        popular: "Governors",
        correction: "The Regional Eyes / Province-Heads",
        original: "פֶּחָה",
        impact: " 'Governor' is a title. 'Pechah' is a job description. They are the 'Regional Overseers' who act as the King's physical 'Eyes' and 'Hands' in a faraway sector."
    },
    {
        verse: "Esther 3:10",
        category: "physical",
        severity: "low",
        popular: "Ring",
        correction: "The Sink-Hole / Stamping-Device",
        original: "טַבַּעַת",
        impact: " 'Ring' is a jewelry item. 'Tabath' is from 'to sink'. It is a physical 'Stamping-Device' that 'Sinks' into hot wax or clay to fix a decision. It's 'Decision-Fixing Hardware'."
    },
    {
        verse: "Esther 4:11",
        category: "physical",
        severity: "mid",
        popular: "Scepter",
        correction: "The Sighting-Rod / Rule-Stick",
        original: "שֵׁבֶט",
        impact: " 'Scepter' is a magic wand. 'Shevet' is a literal physical 'Rod' or 'Stick'. It is used for measurement, protection, and as a 'Sighting-Rod' to point the direction of the King's will."
    },
    {
        verse: "Ezra 1:9",
        category: "physical",
        severity: "low",
        popular: "Knives / Chargers",
        correction: "The Slaughter-Cutters / Slitting Devices",
        original: "מַחֲלָף",
        impact: " 'Knives' is a general term. 'Machalaph' refers specifically to the physical 'Cutting tools' used to change the status of an animal from living to dead. It's 'Linguistic and Material Slitting'."
    },
    {
        verse: "Nehemiah 4:9",
        category: "physical",
        severity: "mid",
        popular: "Watch",
        correction: "The Guard-Post / Watching-Position",
        original: "מִשְׁמָר",
        impact: " 'Watch' is an abstract vigilance. 'Mishmar' is a literal physical 'Post' where a sentinel stands to maintain visual oversight. It's the 'Materiality of Vigilance'."
    },
    {
        verse: "Nehemiah 7:1",
        category: "physical",
        severity: "low",
        popular: "Porters / Gatekeepers",
        correction: "The Door-Guardians / Gate-Maintainers",
        original: "שׁוֹעֵר",
        impact: " 'Porters' sounds like luggage handlers. 'Shoer' is from 'Sha'ar' (Gate). It describes the physical 'Security Role' of guarding the physical threshold of the city."
    },
    {
        verse: "Esther 1:5",
        category: "physical",
        severity: "low",
        popular: "Palace",
        correction: "The Great Hall / Grand Residence",
        original: "הֵיכָל",
        impact: " Similar to the Temple, the 'Palace' of the King is a literal 'Grand Hall'. It describes the administrative headquarters as a physical, three-dimensional space."
    },
    {
        verse: "Esther 8:8",
        category: "theology",
        severity: "low",
        popular: "The King's Decree",
        correction: "The Stamped Royal Material",
        original: "דָּת",
        impact: " The decree is not just a law; it is the physical 'Stamped Material' (clay/wax/papyrus) that carries the Royal Force into the world. It’s an 'Irreversible Physical Command'."
    },
    {
        verse: "1 Kings 10:16",
        category: "physical",
        severity: "low",
        popular: "Targets / Large Shields",
        correction: "The Sharp Thorn-Shield / Guard-Point",
        original: "צִנָּה",
        impact: " 'Targets' is a vague archery term. 'Tsinnah' is a massive shield named after a 'Thorn'. It describes the physical 'Pointed' or large surface used to protect the whole body."
    },
    {
        verse: "1 Kings 7:9",
        category: "physical",
        severity: "low",
        popular: "Measure / Dimensions",
        correction: "The Physical Extension / Measured Stretch",
        original: "מִדָּה",
        impact: " 'Measure' is an abstract number. 'Middah' is from 'Madad' (to stretch). It describes the literal physical 'Extension' of a surface from point A to point B."
    },
    {
        verse: "2 Kings 11:12",
        category: "theology",
        severity: "mid",
        popular: "The Testimony",
        correction: "The Witness-Scroll / Stamped Evidence",
        original: "עֵדוּת",
        impact: " 'Testimony' is a verbal statement. 'Edut' is a physical 'Marker' or document that stands as evidence of a covenant. It's 'Materialized Witness'."
    },
    {
        verse: "Job 38:32",
        category: "physical",
        severity: "mid",
        popular: "Mazzaroth",
        correction: "The Seasonal Crown-Steps / Constellations",
        original: "מַזָּרוֹת",
        impact: " 'Mazzaroth' is usually left untranslated. It refers to the physical 'Steps' or 'Crown' of the stars as they move through the seasons. It's the 'Material Clock' of the sky."
    },
    {
        verse: "Job 4:18",
        category: "theology",
        severity: "high",
        popular: "Folly / Error",
        correction: "The Physical Deficiency / Instability",
        original: "תָּהֳלָה",
        impact: " 'Folly' sounds like a mental mistake. 'Toholah' describes a physical 'Deficiency' or 'Lack of Fixedness' in the structure of the messengers. Nothing material is perfect by the Power's standard."
    },
    {
        verse: "1 Samuel 1:11",
        category: "theology",
        severity: "low",
        popular: "Vow",
        correction: "The Vocalized Binding / Spoken Tie",
        original: "נָדַר",
        impact: " 'Vow' is an abstract promise. 'Nadar' is the physical act of 'Binding oneself' with a spoken word. It’s the literal 'Wrapping' of one's future actions to a specific result."
    },
    {
        verse: "1 Samuel 14:6",
        category: "physical",
        severity: "mid",
        popular: "Restraint",
        correction: "The Physical Obstacle / Bar",
        original: "מַעְצוֹר",
        impact: " 'Restraint' is a mental choice. 'Ma'tsor' is a literal 'Bar' or 'Wall'. It describes the physical impossibility of stopping the Power when it decides to act. It's 'Structural Unstoppability'."
    },
    {
        verse: "2 Samuel 1:19",
        category: "physical",
        severity: "low",
        popular: "The Beauty / Glory",
        correction: "The Swelling / Prominent Point",
        original: "צְבִי",
        impact: " 'Beauty' is subjective. 'Tsebi' refers to a 'Swelling' or a 'Prominent Spot'. It describes the literal physical 'Peak' of Israel's strength being struck down. It's a 'Geological Peak'."
    },
    {
        verse: "2 Samuel 23:1",
        category: "theology",
        severity: "low",
        popular: "Sweet Psalmist",
        correction: "The Pleasant Arranger / Melody-Maker",
        original: "זָמִיר",
        impact: " 'Psalmist' is a religious title. 'Zamir' means 'to prune' or 'to trim'. It describes the physical act of 'Trimming' sounds into a beautiful, structured arrangement. It's 'Auditory Craft'."
    },
    {
        verse: "Proverbs 1:4",
        category: "physical",
        severity: "mid",
        popular: "Discretion",
        correction: "The Planning-Knots / Purposeful Ties",
        original: "מְזִמָּה",
        impact: " 'Discretion' is a mental trait. 'Meziman' is from a root for 'to plan' or 'to tie'. It describes the physical 'Knots' or structure of a plan. It's 'Tactical Thinking'."
    },
    {
        verse: "Ecclesiastes 1:1",
        category: "theology",
        severity: "mid",
        popular: "The Preacher",
        correction: "The Assembler / Body-Collector",
        original: "קֹהֶלֶת",
        impact: " 'Preacher' sounds like someone behind a pulpit. 'Koheleth' is one who physically 'Assembles' or gathers a 'Qahal' (Community). It's a role of 'Social Collection' and arrangement."
    },
    {
        verse: "Ecclesiastes 11:5",
        category: "physical",
        severity: "mid",
        popular: "The Spirit / The Wind",
        correction: "The Moving Air / Breath-Current",
        original: "רוּחַ",
        impact: " The text compares the 'Spirit' to the way 'Wind' moves. They are the same word. It describes the physical 'Current' of air that carries life-logic. It's 'Atmospheric Flow'."
    },
    {
        verse: "Isaiah 1:2",
        category: "theology",
        severity: "high",
        popular: "Transgressed / Rebelled",
        correction: "The Physical Step-Over / Breach",
        original: "פָּשַׁע",
        impact: " 'Transgression' is a religious sin. 'Pasha' is the physical act of 'Stepping Over' a boundary line. It's a 'Border Breach' of a covenantal limit. It's 'Spatial Defiance'."
    },
    {
        verse: "Isaiah 53:5",
        category: "physical",
        severity: "high",
        popular: "Wounded / Pierced",
        correction: "To Bore Through / Perforate the Frame",
        original: "חָלַל",
        impact: " 'Wounded' is a general injury. 'Chalal' is the physical act of 'Boring a Hole' into something. It describes the literal 'Perforation' of the physical vessel. It's 'Structural Puncture'."
    },
    {
        verse: "Jeremiah 1:11",
        category: "physical",
        severity: "low",
        popular: "Rod / Branch of Almond",
        correction: "The Waking-Stick / Sighting-Rod",
        original: "מַקֵּל",
        impact: " 'Rod' is just a stick. This is the 'Shaked' (Almond) rod. 'Shaked' means 'to wake up'. It’s a physical 'Waking-Rod' used to signal that the time for action has arrived. It's 'Visual Synchronization'."
    },
    {
        verse: "Jeremiah 51:34",
        category: "physical",
        severity: "mid",
        popular: "Swallowed me up",
        correction: "The Total Envelopment / Devouring Mouth",
        original: "בָּלַע",
        impact: " 'Swallowed' sounds like a metaphor for defeat. 'Bala' is the physical act of 'Engulfing' something into a cavity. It describes the total material disappearance of a nation into another's mass."
    },
    {
        verse: "Jeremiah 31:31",
        category: "theology",
        severity: "high",
        popular: "New Covenant",
        correction: "The Fresh Cut / Renewed Binding",
        original: "בְּרִית חֲדָשָׁה",
        impact: " 'Covenant' is an idea. 'Berit' is a 'Cutting'. 'Chadasha' means 'to refresh' or 'repair'. It's the physical act of 'Re-cutting' or repairing the binding-lines of the agreement. It's a 'Structural Restoration'."
    },
    {
        verse: "Jeremiah 23:29",
        category: "physical",
        severity: "mid",
        popular: "Fire / Hammer",
        correction: "The Forging Heat / Shattering Weight",
        original: "אֵשׁ / פַּטִּישׁ",
        impact: " The Power's logic isn't just a book. It's 'Esh' (Thermal Force) and 'Pattish' (Physical Beating-Mass). It describes the material 'Forging' of a human through heat and weight."
    },
    {
        verse: "Lamentations 1:3",
        category: "physical",
        severity: "mid",
        popular: "Judah is gone",
        correction: "Judah has been Relocated / Displaced",
        original: "גָּלָה",
        impact: " 'Gone' is vague. 'Galah' refers to the physical 'Relocation' or 'Uncovering' of the land. It describes the tangible 'Displacement' of the social-material body from its address."
    },
    {
        verse: "Lamentations 2:11",
        category: "physical",
        severity: "high",
        popular: "My Liver / My Soul",
        correction: "The External Organ / Heavy Gland",
        original: "כָּבֵד",
        impact: " The text says 'My liver is poured on the earth'. Translators use 'soul'. But the Bible targets the physical 'Liver' as the seat of the heavy weight of sorrow. It's a 'Visceral Secretion'."
    },
    {
        verse: "Lamentations 3:4",
        category: "physical",
        severity: "mid",
        popular: "Flesh and Skin Wasted",
        correction: "The Waning of the Outer-Layer",
        original: "בָּלָה",
        impact: " 'Wasted' is a general decay. 'Balah' describes the physical 'Wearing away' of a garment. It describes the literal 'Thinning' of the material skin under the pressure of distress."
    },
    {
        verse: "Lamentations 5:21",
        category: "theology",
        severity: "low",
        popular: "Turn us back",
        correction: "Physically Re-align / Pivot the Body",
        original: "שׁוּב",
        impact: " 'Turn' is a mental choice. 'Shuv' is the physical 180-degree 'Pivot' of the body. To return to the Power is to physically walk back the way you came. It's 'Course Correction'."
    },
    {
        verse: "Ezekiel 37:9",
        category: "physical",
        severity: "high",
        popular: "Breathe / Breath",
        correction: "The Moving Atmospheric Force / Exhalation",
        original: "רוּחַ",
        impact: " The 'Spirit' comes from the four winds. It is the literal physical 'Atmosphere' of the planet being forced into a biological frame. Life is 'Forced Air' and atmospheric logic."
    },
    {
        verse: "Ezekiel 1:4",
        category: "physical",
        severity: "mid",
        popular: "Whirlwind",
        correction: "The Physical Atmospheric Vortex / Storm",
        original: "רוּחַ סְעָרָה",
        impact: " 'Whirlwind' is a poetic storm. This is a 'Vortex of Air'. It describes a tangible 'Energy-Sleeve' in the atmosphere used as a transport for the Power's manifestation. It's 'Meterological Hardware'."
    },
    {
        verse: "Ezekiel 28:13",
        category: "physical",
        severity: "low",
        popular: "Pipes / Settings",
        correction: "The Physical Hollows / Sockets",
        original: "נֶקֶב",
        impact: " 'Pipes' sounds like music. 'Neqeb' refers to physical 'Sockets' or 'Pierced Openings' in jewelry. It describes the literal 'Settings' that held the physical stones of the King's status-garment."
    },
    {
        verse: "Ezekiel 36:26",
        category: "theology",
        severity: "high",
        popular: "New Heart / Spirit",
        correction: "The Fresh Core / Atmosphere",
        original: "לֵב חָדָשׁ",
        impact: " 'Heart' is the mind. A 'New Heart' isn't a nicer one; it's a 'Repaired Core-Logic'. Replacing 'Stone' with 'Flesh' is the physical shift from 'Dead-Rigid' to 'Living-Reactive' material."
    },
    {
        verse: "Daniel 2:34",
        category: "theology",
        severity: "high",
        popular: "A Stone cut out",
        correction: "The Physical Quarry-Block / Hewn Rock",
        original: "אֶבֶן",
        impact: " 'Stone' is a symbol. This is an 'Eben' (Quarry-Block) not cut by hands. It describes the physical intervention of a material force into the political-social statue of the world. It's 'Material Overthrow'."
    },
    {
        verse: "Daniel 12:4",
        category: "physical",
        severity: "mid",
        popular: "Seal the Book",
        correction: "To Sink the Image / Lock the Script",
        original: "חָתַם",
        impact: " 'Seal' is an administrative act. 'Chatam' is the physical act of 'Sinking' a stamp into the material. Closing the book is the literal 'Locking' of the information until a specific release time."
    },
    {
        verse: "Daniel 10:8",
        category: "physical",
        severity: "mid",
        popular: "Comeliness / Beauty",
        correction: "The Swelling / Vigorous Shine",
        original: "הוֹד",
        impact: " 'Comeliness' is an old word for appearance. 'Hod' is a physical 'Swelling' or 'Fierce-Shine'. It describes the literal 'Vibrancy' of the body being drained out into 'Pale-Death'. It's 'Bio-Luminescent Draining'."
    },
    {
        verse: "Hosea 6:1",
        category: "theology",
        severity: "mid",
        popular: "Torn and Healed",
        correction: "The Pierced / Bound-Back Wound",
        original: "רָפָא",
        impact: " 'Heal' is a mystical act. 'Rapha' is a physical 'Stitching' or 'Binding'. To be healed is to be 'Sewn back together' into a functional whole. It's 'Structural Repair'."
    },
    {
        verse: "Hosea 4:12",
        category: "theology",
        severity: "mid",
        popular: "Spirit of Whoredom",
        correction: "Developing a Habit of Tangible Departure",
        original: "רוּחַ זְנוּנִים",
        impact: " 'Whoredom' is a moral slur. 'Zanah' is the physical act of 'Departing' from a path or house. It describes a 'Habit of Wandering' away from the covenantal physical center."
    },
    {
        verse: "Hosea 13:14",
        category: "physical",
        severity: "high",
        popular: "Ransom from the Grave",
        correction: "To Sever from the Deep Hollow",
        original: "פָּדָה / שְׁאוֹל",
        impact: " 'Ransom' is a theological payment. 'Padah' is to 'Sever' a bond. 'Sheol' is the 'Hollow Grave'. It’s the physical act of 'Cutting the ties' that pull a person into the earth's void."
    },
    {
        verse: "Joel 3:16",
        category: "physical",
        severity: "mid",
        popular: "Roar / Shout",
        correction: "The Physical Vibration / Animal Sound",
        original: "שָׁאַג",
        impact: " 'Roar' is poetic. 'Sha'ag' is the literal physical 'Vibration' made by a lion. It describes the Power's manifestation as an atmospheric sound-wave that shakes the terrain."
    },
    {
        verse: "Joel 2:25",
        category: "physical",
        severity: "low",
        popular: "Restore the Years",
        correction: "To Physically Repay / Make Up the Mass",
        original: "שָׁלַם",
        impact: " 'Restore' is a general improvement. 'Shalam' is the physical act of 'Making Whole'. It describes the literal 'Filling of the gap' left by the locust-harvest as a physical repayment."
    },
    {
        verse: "Joel 2:13",
        category: "theology",
        severity: "mid",
        popular: "Rend your heart",
        correction: "Split the Core / Open the Inner Frame",
        original: "קָרַע לֵב",
        impact: " 'Rend' sounds like an emotive metaphor. 'Qara' is the physical act of 'Tearing' a garment. To tear the 'Heart' (Core) is to physically break open the shell of the self to allow logic to enter."
    },
    {
        verse: "Amos 1:2",
        category: "physical",
        severity: "low",
        popular: "Utter his voice",
        correction: "To Give Out the Sound / Atmospheric Pulse",
        original: "קוֹל",
        impact: " 'Voice' is a human trait. 'Qol' is any physical 'Sound' or pulse. It refers to the Power emitting a material frequency that causes the environment to change. It's 'Acoustic Power'."
    },
    {
        verse: "Amos 9:11",
        category: "physical",
        severity: "mid",
        popular: "I will raise up",
        correction: "To Physically Stand / Erect the Structure",
        original: "קוּם",
        impact: " 'Raise' is a symbol of success. 'Qum' is the physical act of 'Standing Up' on one's feet. It describes the reconstruction of the fallen 'Tabernacle' as a tangible physical act of building."
    },
    {
        verse: "Amos 5:24",
        category: "physical",
        severity: "high",
        popular: "Judgment / Righteousness",
        correction: "The Decision-Flow / Mighty Stream",
        original: "מִשְׁפָּט / צְדָקָה",
        impact: " These are described as a 'Stream' or 'Mighty Waters'. They aren't ideas; they are physical 'Flows' of corrective energy that wash through the social landscape like a flood."
    },
    {
        verse: "Obadiah 1:4",
        category: "physical",
        severity: "low",
        popular: "Exalt thyself",
        correction: "To Lift High / Physical Elevation",
        original: "גָּבַהּ",
        impact: " 'Exalt' is a prideful thought. 'Gabah' is the literal physical 'Height' of a bird's nest on a cliff. It’s about 'Geological Superiority' and biological isolation."
    },
    {
        verse: "Obadiah 1:21",
        category: "theology",
        severity: "mid",
        popular: "Saviors / Deliverers",
        correction: "The Rescuers / Physical Pullers-Out",
        original: "מֽוֹשִׁיעִים",
        impact: " 'Saviors' are spiritual figures. 'Moshia' is one who physically 'Pulls someone out of a narrow space' into a broad one. It refers to the physical 'Champions' of the kingdom era."
    },
    {
        verse: "Obadiah 1:15",
        category: "physical",
        severity: "mid",
        popular: "Your reward / dealing",
        correction: "Your Physical Output / What you Wrought",
        original: "גְּמוּל",
        impact: " 'Reward' is a paycheck. 'Gemul' is the literal physical 'Ripening' or 'Fullness' of what you have done. It is the material consequence 'returning' upon your own head."
    },
    {
        verse: "Jonah 4:10",
        category: "theology",
        severity: "mid",
        popular: "Had pity / Compassion",
        correction: "Bending / Giving Space",
        original: "חוּס",
        impact: " 'Pity' is an emotion. 'Chus' is from a root for 'to cover' or 'to spare'. It describes the physical act of 'Covering' an object to protect it from heat or light. It's 'Protective Shadowing'."
    },
    {
        verse: "Jonah 3:8",
        category: "physical",
        severity: "low",
        popular: "Turn every one",
        correction: "Pivot the Body / Physical Pivot",
        original: "שׁוּב",
        impact: " Repentance in Nineveh was the literal physical 'Pivoting' of the entire city's movement back toward the center. It was a 'Mass Correction' of the group's trajectory."
    },
    {
        verse: "Micah 4:1",
        category: "physical",
        severity: "low",
        popular: "Mountain of the House",
        correction: "The Geological Headquarters / Main Peak",
        original: "הַר / בַּיִת",
        impact: " 'Mountain' is a symbol. This is a literal 'Har'. It describes the physical 'Elevation' of the administration's seat as the highest and most visible point in the region."
    },
    {
        verse: "Micah 6:1",
        category: "theology",
        severity: "mid",
        popular: "Contend / Plead",
        correction: "To Wrestle / The Physical Struggle",
        original: "רִיב",
        impact: " 'Plead' sounds like a lawyer. 'Riv' is the physical act of 'Wrestling' or 'Grappling' with a situation. It describes the Power physically 'Fighting' for the truth of the case."
    },
    {
        verse: "Micah 6:7",
        category: "physical",
        severity: "mid",
        popular: "Fruit of my body",
        correction: "The Physical Yield / Output of the Frame",
        original: "פְּרִי",
        impact: " 'Fruit' is a metaphor for children. 'Peri' is the literal physical 'Yield' of a tree or body. It represents the 'Biological Cost' offered to pay for the 'Course-Deviation'."
    },
    {
        verse: "Nahum 1:7",
        category: "theology",
        severity: "mid",
        popular: "Trust in him",
        correction: "To Seek Refuge / Flee for Safety",
        original: "חָסָה",
        impact: " 'Trust' is a mental confidence. 'Chasah' is the physical act of 'Fleeing' into a shelter to stay dry or safe. The Power is a physical 'Cave' or 'Shadow' for those in danger."
    },
    {
        verse: "Nahum 3:19",
        category: "physical",
        severity: "low",
        popular: "Bruise / Wound",
        correction: "The Physical Crack / Breach of the Hull",
        original: "שֶׁבֶר",
        impact: " 'Bruise' is a light injury. 'Shever' is a literal 'Breaking' or 'Fracturing' of a material object. It describes the total 'Structural Failure' of the city's defense. It's 'Catastrophic Cracking'."
    },
    {
        verse: "Habakkuk 2:1",
        category: "physical",
        severity: "low",
        popular: "Set me upon the tower",
        correction: "To Stand at the Watching-Post",
        original: "מָצוֹר",
        impact: " Habakkuk's 'Waiting' was at a physical 'Watching-Point' or siege-mound. It represents the literal material 'Observation' required to see the Power's response. It's 'Linguistic and Visual Oversight'."
    },
    {
        verse: "Habakkuk 3:19",
        category: "physical",
        severity: "low",
        popular: "Hinds' feet",
        correction: "The Physical Grip / Agile Hooves",
        original: "אַיָּלָה",
        impact: " The Power gives 'Hinds' feet'. These aren't symbols of faith; they are physical 'Grip-Tools' for navigating high, dangerous terrain without falling. They are 'Structural Adaptations'."
    },
    {
        verse: "Habakkuk 3:4",
        category: "physical",
        severity: "mid",
        popular: "Horns / Rays of Light",
        correction: "The Physical Power-Points / Flash-Strips",
        original: "קֶרֶן",
        impact: " 'Horns' are rays of light. 'Qeren' is from 'to sprout' or 'be strong'. They are physical 'Points of Power' that emit light-energy from the center. It's 'Radiant Output'."
    },
    {
        verse: "Zephaniah 3:17",
        category: "theology",
        severity: "low",
        popular: "He will rest / rejoice",
        correction: "To Be Quiet / To Physical Spin in Joy",
        original: "חָרַשׁ / גִּיל",
        impact: " 'Rejoice' is a feeling. 'Gil' is the physical act of 'Twirling' or 'Spinning' in a circle. It describes the Power physically 'Dancing' or 'Spinning' over the restoration. It's 'Exuberant Movement'."
    },
    {
        verse: "Zephaniah 3:9",
        category: "physical",
        severity: "high",
        popular: "Pure Language",
        correction: "The Physical Unmixed Lip / Speech",
        original: "שָׂפָה בְּרוּרָה",
        impact: " 'Language' is a grammar-set. 'Saphah' is the literal physical 'Lip'. A 'Pure Lip' is one that is 'Unmixed' and capable of producing clear, unified sound for the group's logic. It's 'Acoustic Unity'."
    },
    {
        verse: "Haggai 1:8",
        category: "physical",
        severity: "low",
        popular: "Go up to the mountain",
        correction: "To Physically Ascend the Peak",
        original: "עָלָה",
        impact: " Building the house begins with the literal physical 'Ascension' of the high terrain to gather wood. It is the material 'Climb' toward the resolution of the mission."
    },
    {
        verse: "Haggai 2:23",
        category: "theology",
        severity: "mid",
        popular: "Signet",
        correction: "The Signet-Image / Decision Stamp",
        original: "חוֹתָם",
        impact: " Similar to the Ring in Esther, the 'Signet' is a physical 'Seal' that fixes the King's authority onto a document. It represents 'Materialized Decision-Power'."
    },
    {
        verse: "Zechariah 4:2",
        category: "physical",
        severity: "mid",
        popular: "Lampstand / Candlestick",
        correction: "The Light-Emitter / Oil-Burner",
        original: "מְנוֹרָה",
        impact: " 'Candlestick' is for wax. 'Menorah' is a physical 'Light-Apparatus' that burns oil. It represents the constant material 'Consumption of Energy' to produce visibility. It's 'Optical Maintenance'."
    },
    {
        verse: "Zechariah 4:6",
        category: "theology",
        severity: "high",
        popular: "Not by Might or Power",
        correction: "Not by Mass or Force",
        original: "חַיִל / כֹּחַ",
        impact: " 'Might' and 'Power' are synonyms. 'Chayil' (Military Mass) and 'Koach' (Specific Physical Force). The accomplishment comes through 'Ruwach' (The Atmospheric Flow), not through animal force or soldiers."
    },
    {
        verse: "Malachi 4:2",
        category: "physical",
        severity: "mid",
        popular: "Sun of Righteousness",
        correction: "The Shining Sphere of Correctness",
        original: "שֶׁמֶשׁ צְדָקָה",
        impact: " 'Righteousness' is a moral trait. Here it is a 'Sun'. It describes the literal physical 'Warmth and Light' of cosmic alignment that 'Heals' (Stitches) the landscape on its 'Wings' (Edges)."
    },
    {
        verse: "Malachi 3:10",
        category: "physical",
        severity: "low",
        popular: "Windows of Heaven",
        correction: "The Atmospheric Vent-Openings / Lattices",
        original: "אֲרֻבּוֹת",
        impact: " 'Windows' sound like glass. 'Arubot' are physical 'Lattices' or 'Vents' in the sky (sky-chamber). It describes the Power opening the 'Vents' of the atmosphere to allow rain-inflow. It's 'Meteorological Venting'."
    },
    {
        verse: "Acts 6:1",
        category: "physical",
        severity: "mid",
        popular: "Ministration / Service",
        correction: "The Table-Serving / Distribution",
        original: "διακονία",
        impact: " 'Ministration' is a religious work. 'Diakonia' is the literal physical act of 'Waiting on tables' or distributing real physical bread. It's 'Material Support', not just a service."
    },
    {
        verse: "Mark 1:4",
        category: "theology",
        severity: "high",
        popular: "Baptism of Repentance",
        correction: "The Permanent Plunge of Mental-Recalibration",
        original: "βάπτισμα μετανοίας",
        impact: " This isn't a church ritual. It is the physical act of 'Plunging' (Baptizo) the body to signal a total 'Recalibration' (Metanoeo) of the life-trajectory. It's a 'Structural Reset'."
    },
    {
        verse: "Mark 4:39",
        category: "physical",
        severity: "mid",
        popular: "Peace, be still",
        correction: "Be Muzzled / Be Bound",
        original: "πεφίμωσο",
        impact: " 'Be still' sounds like a gentle request. 'Pephimoso' is a physical 'Muzzling' of a wild animal. Jesus physically 'Muzzled' the atmospheric storm-forces. It's 'Atmospheric Control'."
    },
    {
        verse: "Mark 16:15",
        category: "theology",
        severity: "mid",
        popular: "Preach the Gospel",
        correction: "Herald the Victory-News",
        original: "κηρύξατε τὸ εὐαγγέλιον",
        impact: " It's not a sermon. It's the job of an official 'Herald' to announce the 'War-Update' of the King's victory. It's a 'Political Status-Update' for the physical world."
    },
    {
        verse: "Mark 10:45",
        category: "physical",
        severity: "mid",
        popular: "To Minister",
        correction: "To Wait at Table / Serve Food",
        original: "διακονῆσαι",
        impact: " 'Minister' is a rank. Jesus said he came to 'Wait at table'. It’s the physical act of 'Service-Distribution', providing for the material needs of others."
    },
    {
        verse: "Luke 1:37",
        category: "theology",
        severity: "high",
        popular: "Nothing impossible for God",
        correction: "No Matter is Void of Force",
        original: "ρήμα / ἀδυνατήσει",
        impact: " 'Word' is just a speech. 'Rhema' is a 'Matter' or 'Physical Thing'. The verse says no 'Matter' is without 'Dunamis' (Dynamic Force). It’s a statement of 'Atomic Potential'."
    },
    {
        verse: "Luke 15:7",
        category: "theology",
        severity: "mid",
        popular: "Repentance",
        correction: "Structural Re-Thinking / Mindshift",
        original: "μετάνοια",
        impact: " 'Repentance' is a religious feeling. 'Metanoia' is the physical 'Change of Mind-Structure'. It is the act of re-organizing one's logic and trajectory. It's 'Mental Re-Engineering'."
    },
    {
        verse: "Luke 24:49",
        category: "physical",
        severity: "high",
        popular: "Power from on high",
        correction: "Dynamic Force from the Summit",
        original: "δύναμις / ὕψους",
        impact: " 'Power' is an abstract authority. 'Dunamis' is 'Dynamic energy' or explosive force. It describes the physical 'Inflow' of energy from the administrative center. It's 'Kinetic Empowerment'."
    },
    {
        verse: "Luke 10:19",
        category: "physical",
        severity: "mid",
        popular: "Tread on serpents",
        correction: "Stamp Down the Crawlers",
        original: "πατεῖν",
        impact: " 'Tread' is poetic. 'Patein' is the physical act of 'Stamping' or 'Trampling' underfoot. It describes the literal physical 'Suppression' of opposing forces. It's 'Tactical Dominance'."
    },
    {
        verse: "Acts 1:8",
        category: "theology",
        severity: "mid",
        popular: "Witnesses",
        correction: "The Watchers / Eye-Witness-Fixers",
        original: "μάρτυρες",
        impact: " 'Witness' sounds like a passive observer. 'Martus' is one who physically 'Fixes' the truth through observation and testimony. It represents the 'Material Weight' of evidence."
    },
    {
        verse: "Acts 9:2",
        category: "physical",
        severity: "low",
        popular: "The Way",
        correction: "The Physical Road / Trajectory",
        original: "ἡ ὁδός",
        impact: " 'The Way' sounds like a philosophy. 'Hodos' is a literal physical 'Road' or 'Path'. It describes the community as moving along a specific physical 'Trajectory' through history."
    },
    {
        verse: "Acts 2:42",
        category: "physical",
        severity: "mid",
        popular: "Fellowship",
        correction: "Common Sharing / Joint Ownership",
        original: "κοινωνία",
        impact: " 'Fellowship' is a social chat. 'Koinonia' is the physical act of 'Sharing resources'. It refers to the tangible 'Joint-Material-Base' of the early community. It's 'Economic Unity'."
    },
    {
        verse: "Acts 3:19",
        category: "theology",
        severity: "mid",
        popular: "Times of refreshing",
        correction: "Periods of Cooling-Breath / Recovery",
        original: "ἀνάψυξις",
        impact: " 'Refreshing' is a general mood. 'Anapsuxis' is the physical 'Blowing of cool air' on a wound or a tired person. It’s the material 'Recovery' of the life-force. It's 'Biological Restoration'."
    },
    {
        verse: "Romans 1:16",
        category: "theology",
        severity: "high",
        popular: "Salvation",
        correction: "Physical Rescue / Preservation",
        original: "σωτηρία",
        impact: " 'Salvation' is often seen as a ticket to heaven. 'Soteria' is a rescue from a literal physical disaster. It describes being pulled out of a burning building or sinking ship. It's 'Existential Security'."
    },
    {
        verse: "Romans 5:1",
        category: "theology",
        severity: "mid",
        popular: "Peace with God",
        correction: "Structural Binding / Agreement with the Forces",
        original: "εἰρήνη",
        impact: " 'Peace' is the absence of war. 'Eirene' (from Eiro, to bind) is the physical act of 'Binding' two things together so they function as one. It's 'Systematic Integration'."
    },
    {
        verse: "Romans 8:2",
        category: "theology",
        severity: "high",
        popular: "Spirit of Life",
        correction: "The Atmosphere of Vitality",
        original: "πνεῦμα τῆς ζωῆς",
        impact: " This isn't a mystical presence. It is the literal physical 'Atmosphere' (Pneuma/Air) of 'Vitality' (Zoe/Vibration) that fuels the physical frame. It's 'Biological Operating System'."
    },
    {
        verse: "Romans 12:1",
        category: "physical",
        severity: "mid",
        popular: "Living Sacrifice",
        correction: "Functional Draw-Near Object / Offering",
        original: "θυσίαν ζῶσαν",
        impact: " 'Sacrifice' implies death. Paul says it's 'Living'. It is a physical 'Tool' or 'Body-Offering' that is physically present and functioning in the reality. It's 'Material Consecration'."
    },
    {
        verse: "1 Corinthians 1:10",
        category: "theology",
        severity: "mid",
        popular: "Perfectly joined",
        correction: "Physically Mended / Fixed-Frame",
        original: "καταρτίζω",
        impact: " 'Joined' is a vague social unity. 'Katartizo' is a medical term for 'Setting a bone' or 'Mending a net'. It is the physical act of 'Repairing a fracture' in the community's structure."
    },
    {
        verse: "1 Corinthians 6:20",
        category: "physical",
        severity: "high",
        popular: "Bought with a price",
        correction: "Purchased as a Commercial Asset",
        original: "ἠγοράσθητε",
        impact: " 'Bought' sounds like a metaphor. 'Agorazo' is the physical act of 'Buying at the Market' (Agora). It describes the group as literal 'Material Assets' belonging to the King. It's 'Property Transfer'."
    },
    {
        verse: "1 Corinthians 11:24",
        category: "physical",
        severity: "low",
        popular: "Remembrance",
        correction: "The Mind-Recall / Bringing to Focus",
        original: "ἀνάμνησις",
        impact: " 'Remembrance' is a feeling. 'Anamnesis' is the physical act of 'Recalling' the pattern to the front of the mind to influence the next movement. It's 'Visual Re-calibration'."
    },
    {
        verse: "1 Corinthians 15:52",
        category: "physical",
        severity: "high",
        popular: "Changed",
        correction: "Physically Mutated / Exchanged-Form",
        original: "ἀλλαγησόμεθα",
        impact: " 'Changed' is vague. 'Allasso' is the physical 'Exchange' of one material for another. It is the 'Mutation' of the biological code into a more durable physical state. It's 'Structural Transformation'."
    },
    {
        verse: "2 Corinthians 1:4",
        category: "theology",
        severity: "mid",
        popular: "Comfort / Console",
        correction: "Supporting-Presence / Help alongside",
        original: "παράκλησις",
        impact: " 'Comfort' is an emotion. 'Paraklesis' is from 'to call alongside'. It's the physical act of 'Standing beside' someone in a crisis to provide literal, tangible support. It's 'Helping-Alignment'."
    },
    {
        verse: "2 Corinthians 4:7",
        category: "physical",
        severity: "low",
        popular: "Earthen Vessels",
        correction: "The Clay-Pots / Fragile Containers",
        original: "ὀστρακίνοις σκεύεσιν",
        impact: " We are 'Clay-Pots'. It describes the literal physical 'Fragility' of the human frame holding the 'Weight' (Glory) of the Power. It's 'Biological Materiality'."
    },
    {
        verse: "2 Corinthians 10:4",
        category: "physical",
        severity: "mid",
        popular: "Strongholds",
        correction: "The Fortified Walls / Castle-Prisons",
        original: "ὀχυρωμάτων",
        impact: " 'Strongholds' are mental barriers. 'Ochuroma' is a physical 'Fortification' or castle. It represents the literal 'Material Resistance' of traditional systems against the King's logic."
    },
    {
        verse: "2 Corinthians 12:9",
        category: "theology",
        severity: "mid",
        popular: "Grace / Strength",
        correction: "Favor / Dynamic-Force",
        original: "χάρις / δύναμις",
        impact: " 'Grace' is sufficient. In Greek, 'Favor' provides the 'Dynamic Energy' (Dunamis) needed to overcome physical weakness. It's 'Kinetic Compensation'."
    },
    {
        verse: "Galatians 5:19",
        category: "physical",
        severity: "mid",
        popular: "Works of the Flesh",
        correction: "Yield of the Physical-Body",
        original: "ἔργα τῆς σαρκός",
        impact: " 'Works' are often moral decisions. 'Erga' are literal 'Yields' or material efforts. 'Sarx' is the physical 'Meat' or body-system. It describes what the biological machine produces when unguided by logic. It's 'Biological Output'."
    },
    {
        verse: "Galatians 2:20",
        category: "theology",
        severity: "high",
        popular: "Crucified with Christ",
        correction: "Staked Alongside the Anointed",
        original: "συνεσταύρωμαι",
        impact: " 'Crucified' is a religious metaphor. 'Sunestauromai' is the physical act of being 'Staked' alongside. It describes the total material identification with the King's 'Execution-Status'. It's 'Status-Sharing'."
    },
    {
        verse: "Ephesians 4:12",
        category: "physical",
        severity: "mid",
        popular: "Equipping the saints",
        correction: "The Physical Mending / Outfitting of the Set-Apart",
        original: "καταρτισμὸν",
        impact: " 'Equipping' is training. 'Katartismos' is the physical act of 'Mending' or 'Preparing' a vessel for sea. It's the material 'Outfitting' of individuals to function as a unit. It's 'Unit-Preparation'."
    },
    {
        verse: "Ephesians 1:23",
        category: "theology",
        severity: "high",
        popular: "His Body",
        correction: "His Physical Extension / Community-Structure",
        original: "τὸ σῶμα αὐτοῦ",
        impact: " 'Body' is often seen as a spiritual metaphor. 'Soma' is a literal physical 'Organism'. It describes the community as the tangible, three-dimensional 'Extension' of the Head's logic on earth. It's 'Biological Representation'."
    },
    {
        verse: "Philippians 1:27",
        category: "physical",
        severity: "mid",
        popular: "Conversation / Conduct",
        correction: "Citizenship / Political Function",
        original: "πολιτεύεσθε",
        impact: " 'Conversation' sounds like talking. 'Politeuomai' is the physical act of 'Functioning as a citizen' in a state. It describes the community as a tangible 'Political Unit' with its own laws. It's 'Civic Alignment'."
    },
    {
        verse: "Philippians 3:21",
        category: "physical",
        severity: "high",
        popular: "Vile Body",
        correction: "Body of Low-Status / Humiliation",
        original: "σῶμα τῆς ταπεινώσεως",
        impact: " 'Vile' sounds evil. 'Tapeinosis' means 'Low-Status' or 'Low-Ground'. It describes the current physical frame as a 'Low-Output' model that will be exchanged for a 'High-Output' one. It's 'Material Obsolescence'."
    },
    {
        verse: "Colossians 1:27",
        category: "theology",
        severity: "high",
        popular: "Christ in you",
        correction: "The Anointed Logic Within the Group",
        original: "Χριστὸς ἐν ὑμῖν",
        impact: " 'In you' sounds like a ghost in your heart. 'En humin' (plural) means 'Among you'. It describes the physical 'Presence' of the King's blueprint within the community's structure. It's 'Collective Operating System'."
    },
    {
        verse: "Colossians 2:14",
        category: "physical",
        severity: "mid",
        popular: "Blotting out the handwriting",
        correction: "Wiping the Written Debt-Record",
        original: "ἐξαλείψας τὸ χειρόγραφον",
        impact: " 'Blotting' is common. 'Exaleipho' is the physical act of 'Smeared-Wiping' a surface clean. 'Cheirographon' is a 'Hand-written debt note'. It's the literal 'Erasure' of a physical legal obligation."
    },
    {
        verse: "1 Thessalonians 1:3",
        category: "theology",
        severity: "mid",
        popular: "Work of Faith",
        correction: "The Material Effort of Firmness",
        original: "ἔργου τῆς πίστεως",
        impact: " 'Faith' is a belief. 'Pistis' is 'Firmness'. A 'Work of Firmness' is the literal physical 'Effort' required to stay standing under pressure. It's 'Structural Endurance'."
    },
    {
        verse: "1 Thessalonians 5:17",
        category: "physical",
        severity: "low",
        popular: "Pray without ceasing",
        correction: "Judge your status without gap",
        original: "ἀδιαλείπτως προσεύχεσθε",
        impact: " 'Pray' is asking. 'Proseuchomai' is 'Critical Self-Alignment'. To do it 'without gap' is to maintain a constant physical 'Logic-Check' on your trajectory through the day. It's 'Constant Calibration'."
    },
    {
        verse: "2 Thessalonians 1:11",
        category: "physical",
        severity: "mid",
        popular: "Fulfill all the good pleasure",
        correction: "Bring the Delight to Full-Capacity",
        original: "πληρώσῃ",
        impact: " 'Fulfill' is to finish. 'Pleroo' is the nautical 'to fill a ship'. It describes the physical act of 'Loading' the King's delight to its maximum material capacity in the group. It's 'Capacity-Loading'."
    },
    {
        verse: "1 Timothy 2:1",
        category: "theology",
        severity: "mid",
        popular: "Supplications / Intercessions",
        correction: "Individual Needs / Meeting-Interviews",
        original: "ἐντεύξεις",
        impact: " 'Intercession' is a prayer-request. 'Enteuxis' is a technical term for an 'Official Interview' or 'Meeting' with a ruler. It's the physical act of 'Presenting a Petition' to the administration."
    },
    {
        verse: "1 Timothy 6:10",
        category: "physical",
        severity: "mid",
        popular: "Love of money",
        correction: "Affection for Siver-Tokens",
        original: "φιλαργυρία",
        impact: " 'Money' is abstract. 'Philarguria' is the physical 'Affection' for 'Siver' (Arguros). It’s the material drive to collect physical 'Metal-Tokens' of status. It's 'Token-Obsession'."
    },
    {
        verse: "2 Timothy 2:15",
        category: "physical",
        severity: "mid",
        popular: "Rightly dividing",
        correction: "The Straight-Cut / Precision Surgery",
        original: "ὀρθοτομοῦντα",
        impact: " 'Dividing' is a lesson plan. 'Orthotomeuo' is a physical 'Straight Cut', like a plowman or a surgeon. It's the material 'Precision' required to handle the logic without deviation. It's 'Surgical Accuracy'."
    },
    {
        verse: "Titus 1:1",
        category: "theology",
        severity: "low",
        popular: "Servant of God",
        correction: "The Subjected-Property / Slave of the Force",
        original: "δοῦλος θεοῦ",
        impact: " 'Servant' is a choice. 'Doulos' is a 'Slave' or 'Subjected Property'. It describes a human as the literal 'Material Possession' of the King's force. It's 'Ownership-Status'."
    },
    {
        verse: "Philemon 1:12",
        category: "physical",
        severity: "mid",
        popular: "Mine own bowels",
        correction: "My Internal Organs / Visceral Core",
        original: "τὰ ἐμὰ σπλάγχνα",
        impact: " 'My heart' in English. 'Splagchna' are the literal internal 'Organs' (Guts). Onesimus is Paul's 'Living-Organ'. It describes the physical 'Integration' of people into a single biological family. It's 'Organ-Shared-Vulnerability'."
    },
    {
        verse: "Hebrews 4:12",
        category: "theology",
        severity: "high",
        popular: "Living and Powerful",
        correction: "Vibrating and Energetic (Active)",
        original: "ζῶν / ἐνεργὴς",
        impact: " 'Word' is active. 'Energis' (Energy) and 'Zon' (Life-Vibration). The logic is a literal 'Physical Force' that cuts through the material of the self. It's 'Kinetic-Linguistics'."
    },
    {
        verse: "Hebrews 12:1",
        category: "physical",
        severity: "low",
        popular: "Cloud of witnesses",
        correction: "An Atmospheric Vapor of Watchers",
        original: "νέφος μαρτύρων",
        impact: " 'Cloud' sounds like a metaphor. 'Nephos' is the physical 'Vapor' or 'Mist' of the sky. It describes the massive material 'Density' of the historical record surrounding the current participants. It's 'Atmospheric Evidence'."
    },
    {
        verse: "James 1:25",
        category: "physical",
        severity: "mid",
        popular: "Law of Liberty",
        correction: "A Blueprint of Release / Freedom-Struction",
        original: "νόμον τῆς ἐλευθερίας",
        impact: " 'Law' is a restriction. 'Nomos' is a 'Standard Pattern' or blueprint. 'Eleutheria' is the status of a 'Released Freeman'. It's a 'Blueprint for Maintaining Release-Status'. It's 'Structural Freedom'."
    },
    {
        verse: "James 5:14",
        category: "physical",
        severity: "low",
        popular: "Anointing him with oil",
        correction: "Smearing him with the Rub-Oil",
        original: "ἀλείψαντες αὐτὸν ἐλαίῳ",
        impact: " 'Anointing' is a prayer ritual. 'Aleipho' is the physical act of 'Rubbing' or 'Smearing' a liquid on the body. It represents the literal 'Physical Application' of life-maintenance. It's 'Material-Bio-Support'."
    },
    {
        verse: "1 Peter 5:8",
        category: "theology",
        severity: "mid",
        popular: "Be sober, be vigilant",
        correction: "Stay Un-Intoxicated and Awake",
        original: "νήψατε γρηγορήσατε",
        impact: " These are physical body-states. 'Nepho' is the lack of physical 'Toxins' (alcohol) in the brain. 'Gregoreuo' is the physical act of 'Staying Awake'. It represents the material 'readiness' of the biological unit. It's 'Biological Readiness'."
    },
    {
        verse: "2 Peter 1:4",
        category: "theology",
        severity: "mid",
        popular: "Partakers of the divine nature",
        correction: "Participants in the Divine Material-Blueprint",
        original: "θείας κοινωνοὶ φύσεως",
        impact: " 'Nature' is a vague essence. 'Phusis' is the physical 'Make-up' or 'Growth-Logic' of an object. To participate is to share in the physical 'Configuration' of the Higher Blueprint. It's 'Structural Shared-Code'."
    },
    {
        verse: "1 John 1:1",
        category: "physical",
        severity: "high",
        popular: "Which we have handled",
        correction: "Which we have physically Grasped with Hands",
        original: "ἐψηλάφησαν",
        impact: " John emphasizes the 'Grasping'. 'Psylaphao' is the physical act of 'Groping' or 'Handling' an object. The logic wasn't an idea; it was a 'Three-Dimensional Tangible Reality'. It's 'Tactile-Verification'."
    },
    {
        verse: "2 John 1:7",
        category: "theology",
        severity: "high",
        popular: "In the Flesh",
        correction: "Within the Physical Meat / Body",
        original: "ἐν σαρκί",
        impact: " To deny the King has come 'In the flesh' is to deny the 'Materiality' of the mission. It insists the logic must have a physical 'Bio-Frame' to function on earth. It's 'The Biological Requirement'."
    },
    {
        verse: "3 John 1:13",
        category: "physical",
        severity: "low",
        popular: "Pen and Ink",
        correction: "The Writing-Cane and Black-Soot-Liquid",
        original: "καλάμου καὶ μέλανος",
        impact: " These are the literal 'Material Tools' of communication. 'Kalamos' is a physical 'Reed/Cane'. Logic requires physical 'Carriers' (ink/reeds) to be transmitted through time. It's 'Hardware-Dependence'."
    },
    {
        verse: "Jude 1:7",
        category: "physical",
        severity: "high",
        popular: "Vengeance of eternal fire",
        correction: "The Rectifying-Snort of the Aion-Fire",
        original: "δίκην πυρὸς αἰωνίου",
        impact: " 'Eternal fire' sounds like hell. It describes the physical 'Rectification' (Dike) by 'Fire' (Thermal-Purge) belonging to a specific 'Age' (Aion). It's a 'Time-Bound Thermal-Audit'."
    },
    {
        verse: "Revelation 1:10",
        category: "physical",
        severity: "mid",
        popular: "In the Spirit",
        correction: "Within the Atmospheric-Flow / Current",
        original: "ἐν πνεύματι",
        impact: " John wasn't in a trance. He was 'En Pneumati'—within the physical 'Atmospheric Current' of the Power. It describes a 'Shifting of the Perceptual Atmosphere'. It's 'Atmospheric Entry'."
    },
    {
        verse: "Revelation 19:15",
        category: "physical",
        severity: "mid",
        popular: "Sharp Sword",
        correction: "The Pointed Slaying-Instrument / Blade",
        original: "ῥομφαία ὀξεῖα",
        impact: " A sword from the mouth. It describes the 'Linguistic Force' as a physical 'Cutting Blade' that strikes the nations. Logic has the material power to 'Sever' systems. It's 'Linguistic Ballistics'."
    },
    {
        verse: "Revelation 21:1",
        category: "theology",
        severity: "high",
        popular: "New Heaven and New Earth",
        correction: "A Fresh Atmosphere and a Fresh Terrain",
        original: "οὐρανὸν καινὸν καὶ γῆν καινήν",
        impact: " Not 'Heaven' (the home of God) but 'Ouranos' (The Sky). It describes a physical 'Recalibration' of the planet's 'Atmosphere' and 'Soil'. It is the 'Planetary-System Reset'. It's 'Climate and Crust Renewal'."
    },
    {
        verse: "Matthew 28:20",
        category: "physical",
        severity: "mid",
        popular: "End of the world",
        correction: "The Completion of the Cycle / Age-Endpoint",
        original: "συντελείας τοῦ αἰῶνος",
        impact: " Not the destruction of the earth (World). It is the 'Sunteleia' (Joint-Completion) of the 'Aion' (Cycle/Age). It’s the literal 'End-of-an-Era-Clock', not the end of matter. It's 'Cycle-Termination'."
    },
    {
        verse: "Ruth 1:16",
        category: "physical",
        severity: "mid",
        popular: "Entreat / Urge",
        correction: "The Physical Encounter / Collision",
        original: "פָּגַע",
        impact: " 'Entreat' is a polite request. 'Paga' is to 'Strike' or 'Encounter' a boundary. Ruth is 'Collding' with Naomi's decision, refusing to be bounced off. It's 'Relentless Physical Proximity'."
    },
    {
        verse: "Ruth 3:9",
        category: "physical",
        severity: "low",
        popular: "Spread your skirt",
        correction: "Extend your Wing / Protective Surface",
        original: "כָּנָף",
        impact: " 'Skirt' sounds like clothing. 'Kanaph' is a 'Wing' or 'Edge'. It is the physical act of 'Covering' someone with the edge of your status/influence for protection. It's 'Material Shielding'."
    },
    {
        verse: "Ruth 4:1",
        category: "physical",
        severity: "low",
        popular: "The Gate",
        correction: "The Opening / Business Threshold",
        original: "שַׁעַר",
        impact: " The gate isn't just a door; it's the 'Opening' of the city's authority. It's where the literal 'Physical Sifting' of legal matters happens. It's 'The Administrative Aperture'."
    },
    {
        verse: "Ruth 2:20",
        category: "theology",
        severity: "mid",
        popular: "Kindness (Chesed)",
        correction: "Active Loyalty / Body-Binding",
        original: "חֶסֶד",
        impact: " 'Kindness' is a feeling. 'Chesed' is the physical 'Stuck-ness' of the bond. Boaz chooses to 'Stick' to the family line through tangible provision. It's 'Concrete Commitment'."
    },
    {
        verse: "1 Chronicles 21:1",
        category: "theology",
        severity: "high",
        popular: "Satan (Proper Name)",
        correction: "The Adversary / Obstructor-Role",
        original: "שָׂטָן",
        impact: " Not a name, but a role. It describes an 'Opponent' who physically blocks the path or 'Obstructs' a movement. It's 'Functional Opposition'."
    },
    {
        verse: "1 Chronicles 28:9",
        category: "physical",
        severity: "mid",
        popular: "Search / Understand",
        correction: "To Tread / Step onto the Pattern",
        original: "דָּרַשׁ",
        impact: " 'Search' is mental. 'Darash' is to 'Tread' or 'Step' a path repeatedly. To search for the Power is to physically 'Trample' the path of His logic until it's clear. It's 'Iterative Inquiry'."
    },
    {
        verse: "1 Chronicles 15:2",
        category: "physical",
        severity: "low",
        popular: "To carry",
        correction: "To Lift the Load / Physical Heft",
        original: "נָשָׂא",
        impact: " Carrying the Ark is the physical act of 'Hefting' a weight. It represents the 'Material Responsibility' of holding the King's Presence. It's 'Physical Burden-Bearing'."
    },
    {
        verse: "1 Chronicles 17:1",
        category: "physical",
        severity: "mid",
        popular: "House",
        correction: "The Structure / Residence",
        original: "בַּיִת",
        impact: " David's 'House' (Palace) vs. the Power's 'House' (Temple). It's about 'Physical Residence'—where the person 'Sits' to exist in the world. It's 'Architectural Existence'."
    },
    {
        verse: "2 Chronicles 3:1",
        category: "physical",
        severity: "low",
        popular: "Mount Moriah",
        correction: "The Sighted Terrain / Vision Peak",
        original: "מוֹרִיָּה",
        impact: " Moriah comes from 'Ra'ah' (to see). It is the physical 'Spot of Sighting'. It describes a peak where the vision and the terrain 'Align' perfectly. It's 'Optical Geography'."
    },
    {
        verse: "2 Chronicles 7:14",
        category: "theology",
        severity: "high",
        popular: "Heal their land",
        correction: "Stitch the Terrain / Restore the Soil",
        original: "רָפָא",
        impact: " 'Heal' sounds like a medical miracle. 'Rapha' is the physical 'Stitching' of a wound. To heal the land is to 'Sew back together' the social and material fractures of the soil. It's 'Environmental Repair'."
    },
    {
        verse: "2 Chronicles 20:20",
        category: "theology",
        severity: "mid",
        popular: "Believe / Establish",
        correction: "Be Firm / Support-Locked",
        original: "אָמַן",
        impact: " 'Believe' is thoughts. 'Aman' is 'Firmness'. To believe a prophet is to 'Lock' your trajectory onto their word like a pillar in a socket. It's 'Structural Reliance'."
    },
    {
        verse: "2 Chronicles 34:3",
        category: "physical",
        severity: "low",
        popular: "Purge the land",
        correction: "To Make Smooth / Clear the Surface",
        original: "טָהֵר",
        impact: " 'Purge' sounds like a war. 'Taher' is to 'Clear' or 'Cleanse' a surface from mixed elements. It describes making the terrain 'Materially Consistent' with the logic. It's 'Surface Refinement'."
    },
    {
        verse: "Song of Solomon 2:1",
        category: "physical",
        severity: "low",
        popular: "Rose of Sharon",
        correction: "The Meadow Bulb / Shining Bloom",
        original: "חֲבַצֶּלֶת",
        impact: " 'Rose' is a modern variety. 'Chabatseleth' is a bulb/flower that 'Shines' or 'Glistens'. It represents the 'Physical Radiance' of life emerging from the terrain. It's 'Biological Luminosity'."
    },
    {
        verse: "Song of Solomon 5:4",
        category: "physical",
        severity: "mid",
        popular: "Bowels / Heart",
        correction: "Internal Organs / Guts",
        original: "מֵעַי",
        impact: " 'My heart moved for him.' Original: 'My bowels (intestines) moved'. Deep desire is felt as a literal 'Physical Fermentation' in the core organs. It's 'Visceral Response'."
    },
    {
        verse: "Song of Solomon 4:1",
        category: "physical",
        severity: "low",
        popular: "Behold, you are fair",
        correction: "Look, you are Physically-Shining / Correct",
        original: "יָפֶה",
        impact: " 'Fair' is an old word for pretty. 'Yapheh' is from a root for 'to shine' or 'to be straight'. It describes a physical 'Alignment' and 'Luster' that is correct to the observer. It's 'Optical Symmetry'."
    },
    {
        verse: "Song of Solomon 8:6",
        category: "theology",
        severity: "high",
        popular: "Love is strong as death",
        correction: "Attachment is Dense as the Hollow",
        original: "אַהֲבָה / מוֹת",
        impact: " 'Love' is a feeling. 'Ahavah' is a physical 'Attachment' or 'Grip'. It is as 'Dense' (Strong) as death's grip on the body. It’s about the 'Material weight' of a bond. It's 'Gravitational Connection'."
    },
    {
        verse: "Jonah 1:3",
        category: "physical",
        severity: "low",
        popular: "Presence of the Lord",
        correction: "The Face / Tangible Surface of the Power",
        original: "פָנִים",
        impact: " Jonah fled from the 'Face' (Panim). This isn't a ghost; it's the physical 'Observation-Point' or 'Surface' where the Power interacts with the terrain. It's 'The Interactive Interface'."
    },
    {
        verse: "Jonah 2:2",
        category: "physical",
        severity: "high",
        popular: "Belly of Hell",
        correction: "The Hollow Womb of the Grave",
        original: "בֶּטֶן שְׁאוֹל",
        impact: " Not a fire-pit. 'Beten' is a 'Womb' or 'Internal Cavity'. 'Sheol' is the 'Hollow Deep'. Jonah was in the physical 'Internal Void' of the earth/fish. It's 'Spatial Enclosure'."
    },
    {
        verse: "Jonah 3:10",
        category: "theology",
        severity: "mid",
        popular: "God repented",
        correction: "The Force Sigh-Relented",
        original: "נָחַם",
        impact: " 'Repent' implies a mistake. 'Nacham' is the physical act of 'Breathing Strongly' or 'Sighing' in relief. The Power 'Sighed' and shifted its trajectory based on Nineveh's shift. It's 'Fluid Response'."
    },
    {
        verse: "Joel 1:15",
        category: "theology",
        severity: "high",
        popular: "Day of the Lord",
        correction: "The Light-Cycle / Period of the Active Force",
        original: "יוֹם יהוה",
        impact: " 'Day' is 24 hours. 'Yom' is any physical 'Cycle of Light' or 'Enlightened period'. It's the moment in history when the Power's logic becomes the 'Sun' of the system. It's 'Cyclical Dominance'."
    },
    {
        verse: "Joel 2:28",
        category: "physical",
        severity: "mid",
        popular: "Pour out my Spirit",
        correction: "Empty out the Atmospheric-Current",
        original: "שָׁפַךְ רוּחַ",
        impact: " 'Pour' describes liquid. 'Shaphakh' is the physical act of 'Emptying a bowl' onto a surface. The 'Spirit' (Air/Atmosphere) is 'Emptied' into the humans, shifting their operating code. It's 'Atmospheric Infusion'."
    },
    {
        verse: "Joel 2:1",
        category: "physical",
        severity: "low",
        popular: "Blow the trumpet",
        correction: "To Physical Blast the Horn / Sound-Signal",
        original: "תָּקַע שׁוֹפָר",
        impact: " Not just music. 'Taka' is to 'Strike' or 'Drive'. It's the physical act of 'Striking the air' with a horn-wave to signal the mass of people. It's 'Acoustic Mobilization'."
    },
    {
        verse: "Amos 3:7",
        category: "theology",
        severity: "mid",
        popular: "Secret",
        correction: "The Couch / Inner-Circle / Council",
        original: "סוֹד",
        impact: " 'Secret' is hidden data. 'Sod' is a physical 'Couch' or 'Circle of Seats'. To know the 'Sod' is to physically 'Sit in the Meeting room' where decisions are made. It's 'Tactical Inclusion'."
    },
    {
        verse: "Amos 8:11",
        category: "physical",
        severity: "high",
        popular: "Famine of hearing",
        correction: "The Biological Starvation / Lack of Auditory Nutrition",
        original: "רָעָב",
        impact: " 'Famine' is usually food. Here it is a 'Starvation' of the logic. The humans are 'Empty containers' because the 'Sound' (Words) that fuels their structure has vanished. It's 'Informational Starvation'."
    },
    {
        verse: "Amos 2:13",
        category: "physical",
        severity: "mid",
        popular: "I am pressed under you",
        correction: "I am Gapped / Groaning under the Load",
        original: "עוּק",
        impact: " 'Pressed' sounds abstract. 'Uq' is the physical 'Groaning' of a wagon axle under too much weight. The Power physically 'Groans' under the material weight of the group's deviation. It's 'Structural Stress'."
    },
    {
        verse: "Obadiah 1:3",
        category: "physical",
        severity: "low",
        popular: "Clefts of the rock",
        correction: "The Physical Cracks / Split-Spaces",
        original: "חֲנָוִים",
        impact: " Not just a hiding place. These are literal 'Splits' in the geological material. Edom's security was based on 'Geological Obstruction', not just stone buildings. It's 'Topographical Security'."
    },
    {
        verse: "Obadiah 1:17",
        category: "theology",
        severity: "mid",
        popular: "Holiness",
        correction: "Physical Distinction / Set-Apart status",
        original: "קֹדֶשׁ",
        impact: " Zion shall be 'Holy'. It means it will be physically 'Separated' from the common, unguided world. It becomes a 'Clean-Room' for the King's logic. It's 'Spatial Isolation'."
    },
    {
        verse: "Obadiah 1:18",
        category: "physical",
        severity: "mid",
        popular: "House of Jacob / Flame",
        correction: "The Group-Structure / Oxidizing Heat",
        original: "בַּיִת / לֶהָבָה",
        impact: " 'House' is the social body. 'Flame' is the physical status of 'Burning' (Oxidation). The group becomes a 'Biological Fire' that consumes the 'Stubble' (Dry waste) of the opposition. It's 'Thermal Conflict'."
    },
    {
        verse: "Micah 1:3",
        category: "physical",
        severity: "low",
        popular: "Cometh forth",
        correction: "The Physical Exit / Moving Out",
        original: "יָצָא",
        impact: " The Power 'exists' the headquarters. It describes a literal physical 'Movement' from the unseen center into the visible terrain. It's 'Spatial Manifestation'."
    },
    {
        verse: "Micah 2:1",
        category: "physical",
        severity: "mid",
        popular: "Work evil on their beds",
        correction: "To Tool/Shape Distortion on the Lay-Places",
        original: "פָּעַל / רָעָה",
        impact: " 'Work' is to 'Tool' or 'Forge' (Pa'al). 'Evil' is 'Distortion'. The people are physically 'Forging' broken logical paths while their bodies are at rest. It's 'Subconscious Engineering'."
    },
    {
        verse: "Micah 5:2",
        category: "physical",
        severity: "low",
        popular: "Outgoings",
        correction: "The Origin-Flows / Exits",
        original: "מוֹצָאָה",
        impact: " Not just history. These are physical 'Flow-Points' or 'Exits'. It describes the King's influence as a material 'Stream' emerging from the ancient beyond. It's 'Historical Inflow'."
    },
    {
        verse: "Nahum 1:3",
        category: "physical",
        severity: "mid",
        popular: "Clouds / Dust of his feet",
        correction: "Atmospheric Vapor / Walking-Soot",
        original: "נַחַל / עָב",
        impact: " The clouds are described as the 'Dust' generated by the Power's movement. It's a physical explanation of 'Aerosolized Presence' in the sky. It's 'Meterological Friction'."
    },
    {
        verse: "Nahum 2:4",
        category: "physical",
        severity: "low",
        popular: "Chariots rage / jostle",
        correction: "The Tangible War-Vehicles Striking/Clanging",
        original: "הָלַל / שָׁקַק",
        impact: " Not just moving. 'Shakaq' is the physical 'Running back and forth' and 'Clanging' of material bodies in a narrow street. It's 'Tactical Chaos'."
    },
    {
        verse: "Nahum 3:4",
        category: "theology",
        severity: "mid",
        popular: "Witchcrafts",
        correction: "Linguistic Seduction / Whisperings",
        original: "כֶּשֶׁף",
        impact: " 'Witchcraft' is magic. 'Kashesh' is from a root for 'to whisper' or 'mutter'. It describes the physical act of using 'Acoustic Manipulation' to deceive the group's logic. It's 'Linguistic Psy-Ops'."
    },
    {
        verse: "Zephaniah 1:15",
        category: "physical",
        severity: "mid",
        popular: "Trouble / Distress",
        correction: "The Physical Narrowing / Enclosure",
        original: "צָרָה / מְצוּקָה",
        impact: " 'Distress' is a feeling. 'Tsarah' is a 'Narrow space'. 'Metsukah' is from 'to be tight'. It describes being physically 'Hemmed in' by the terrain with no room to move. It's 'Spatial Trap'."
    },
    {
        verse: "Zephaniah 1:17",
        category: "theology",
        severity: "high",
        popular: "Walk like blind men",
        correction: "Move without Optical Logic / Lightless",
        original: "עִוֵּר",
        impact: " Being 'Blind' is the lack of physical 'Light-Data'. Humans moving without the Power's logic are physically bumping into reality because they can't 'See' the pattern. It's 'Sensory Deprivation'."
    },
    {
        verse: "Zephaniah 3:8",
        category: "physical",
        severity: "mid",
        popular: "Indignation / Fierce Anger",
        correction: "The Boiling Pour-Out / Thermal Snort",
        original: "זַעַם / אַף",
        impact: " These aren't just moods. 'Za'am' is a 'Boiling liquid'. 'Aph' is 'Nose-Heat'. It describes the literal physical 'Thermally-Active' status of the Power moving to purge. It's 'Thermodynamic Correction'."
    },
    {
        verse: "Haggai 1:6",
        category: "physical",
        severity: "mid",
        popular: "Sown much, bring in little",
        correction: "Massive Input / Deficient Output",
        original: "מְעָט / זָרַע",
        impact: " A biological equation. The people are 'Inputting' physical energy but the 'Yield' (Output) is broken. It's a 'Material Inefficiency' caused by the lack of the Power's blessing. It's 'Bio-Economic Failure'."
    },
    {
        verse: "Haggai 2:6",
        category: "physical",
        severity: "high",
        popular: "Shake the heavens / earth",
        correction: "To Physically Quake the Atmosphere and Terrain",
        original: "רָעַשׁ",
        impact: " 'Shake' is poetic. 'Ra'ash' is the literal 'Quaking' of the physical material. The Power will physically 'Disturb' the atomic/material stability of the sky and soil. It's 'Material-Instability Trigger'."
    },
    {
        verse: "Haggai 2:9",
        category: "theology",
        severity: "mid",
        popular: "Glory / Peace",
        correction: "The Physical Weight / Completeness",
        original: "כָּבוֹד / שָׁלוֹם",
        impact: " The new house will have more 'Weight' (Kavod) and 'Wholeness' (Shalom). It’s about the 'Material Density' and 'Structural Integrity' of the state. It's 'National Consolidation'."
    },
    {
        verse: "Zechariah 3:3",
        category: "physical",
        severity: "low",
        popular: "Filthy garments",
        correction: "The Physical Excrement-Stained Wraps",
        original: "צוֹא",
        impact: " 'Filthy' is vague. 'Tsoa' is from a root for 'excrement'. It is the literal physical 'Material waste' on the high-priest's status-clothes. It's 'Physical Unfitness for Duty'."
    },
    {
        verse: "Zechariah 14:4",
        category: "physical",
        severity: "high",
        popular: "Mount of Olives split",
        correction: "The Geological Breach / Opening of the Peak",
        original: "נִבְקַע",
        impact: " A literal 'Geological Event'. The 'Peak' (Har) will be 'Breached' (Baka) to create a physical 'Pathway' for movement. It describes 'Planetary-Surface Manipulation'. It's 'Tectonic Intervention'."
    },
    {
        verse: "Zechariah 1:3",
        category: "theology",
        severity: "low",
        popular: "Turn unto me",
        correction: "Physically Pivot the Body / Return Walk",
        original: "שׁוּב",
        impact: " As in the other prophets, this is a physical 'Body-Pivot'. You were walking in one direction; you physically turn 180 degrees. It's 'Tactical Re-alignment'."
    },
    {
        verse: "Malachi 1:6",
        category: "theology",
        severity: "mid",
        popular: "Honour / Fear",
        correction: "Visible Weight / Tangible Trembling",
        original: "כָּבוֹד / מוֹרָא",
        impact: " 'Honour' is respect. 'Fear' is being afraid. In Hebrew, these are visible 'Weight-Assignment' and 'Body-Trembling'. It describes the 'Material Status' of the Power in the group's eyes. It's 'Status-Weighting'."
    },
    {
        verse: "Malachi 2:16",
        category: "physical",
        severity: "mid",
        popular: "Putting away / Divorce",
        correction: "The Physical Sending-Away / Severance",
        original: "שָׁלַח",
        impact: " 'Divorce' is a legal term. 'Shalach' is to 'Send out' or 'Cast away' someone. It describes the literal 'Physical Eviction' of a person from the covenantal unit. It's 'Structural Severance'."
    },
    {
        verse: "Malachi 4:3",
        category: "physical",
        severity: "low",
        popular: "Tread down the wicked",
        correction: "Physically Stamp/Trample the Distorted",
        original: "עָסַס",
        impact: " 'Tread' is poetic. 'Asas' is a literal 'Pressing' or 'Trampling' of grapes. It describes the physical 'Suppression' and 'Mashing' of the opposition under the group's hierarchy. It's 'Kinetic Dominance'."
    },
    {
        verse: "Daniel 1:1",
        category: "physical",
        severity: "low",
        popular: "Siege",
        correction: "The Physical Enclosure / Crowding",
        original: "מָצוֹר",
        impact: " 'Siege' is a military event. 'Matsor' is the physical act of 'Crowding' or 'Cramping' a city. It describes the tangible 'Structural Pressure' applied to the walls and people. It's 'Enclosed Compaction'."
    },
    {
        verse: "Daniel 3:19",
        category: "physical",
        severity: "mid",
        popular: "Seven times hotter",
        correction: "Heat it with Seven-Fold Intensity",
        original: "לְמֵזֵא",
        impact: " A literal 'Thermodynamic Instruction'. It describes the physical act of increasing the 'Thermal Output' of the kiln to destroy the biological frame. It's 'Energy-Scaling'."
    },
    {
        verse: "Daniel 5:5",
        category: "physical",
        severity: "high",
        popular: "Fingers of a man's hand",
        correction: "The Digits of a Physical Limb",
        original: "אֶצְבְּעָן",
        impact: " Not a ghostly spirit. It specifies the 'Digits' (Fingers) of a hand. It describes a 'Material Manifestation' of a writing-force into the physical banqueting hall. It's 'Tactile-Graphic Intervention'."
    },
    {
        verse: "Daniel 12:3",
        category: "theology",
        severity: "mid",
        popular: "Shine as the brightness",
        correction: "Emit Light like the Atmospheric-Luster",
        original: "יַזְהִרוּ",
        impact: " 'Shine' is a metaphor for being good. 'Zahar' is the physical 'Luminescence' of the atmosphere. It describes the biological unit 'Radiating Energy' in a specific frequency. It's 'Bio-Luminescent Output'."
    },
    {
        verse: "John 1:14",
        category: "theology",
        severity: "high",
        popular: "Dwelt among us",
        correction: "Pitched a physical Tent / Resided as a Body",
        original: "ἐσκήνωσεν",
        impact: " 'Dwelt' is vague living. 'Skenoo' is the physical act of 'Pitching a Tent'. It insists the Logic took on a literal 'Temporary-Skin-Cover' and resided in three-dimensional space. It's 'Material Encampment'."
    },
    {
        verse: "John 3:3",
        category: "theology",
        severity: "high",
        popular: "Born again",
        correction: "Generated from the Summit / Top-Level",
        original: "γεννηθῇ ἄνωθεν",
        impact: " 'Again' implies time. 'Anothen' means 'From the Top' (Summit). It’s the physical act of being 'Re-Generated' by the logic of the administrative center. It's 'Source-Recalibration'."
    },
    {
        verse: "John 15:1",
        category: "physical",
        severity: "low",
        popular: "True Vine",
        correction: "The Reliable Biological Flow-System",
        original: "ἡ ἄμπελος ἡ ἀληθινή",
        impact: " 'Vine' is a metaphor. It describes a literal 'Biological Network' for distributing 'Vitality' (Sap). If the branch is 'Severed' from the 'Flow-Logic', it dies. It's 'Systemic Connectivity'."
    },
    {
        verse: "John 10:10",
        category: "theology",
        severity: "mid",
        popular: "Abundantly",
        correction: "To Over-Flowing / Full-Measure",
        original: "περισσὸν",
        impact: " Not just a lot. 'Perissos' is the physical 'Spillover' or 'Excess' of a container. It describes a life-status that has more 'Input' than it can consume. It's 'Resource Saturation'."
    },
    {
        verse: "Galatians 6:2",
        category: "physical",
        severity: "mid",
        popular: "Bear one another's burdens",
        correction: "Heft the Weight of the Others",
        original: "βάρη",
        impact: " 'Burdens' are problems. 'Baros' is a literal physical 'Weight' or 'Mass'. To carry it is to physically 'Take the Load' off another's biological structure. It's 'Load-Sharing'."
    },
    {
        verse: "Galatians 3:13",
        category: "theology",
        severity: "high",
        popular: "Redeemed",
        correction: "Purchased / Bought out of the Market",
        original: "ἐξηγόρασεν",
        impact: " As in Corinthians, this is a physical 'Market-Buy'. It describes the 'Property-Shift' of the human unit from one master to another. It's 'Asset-Acquisition'."
    },
    {
        verse: "Ephesians 2:14",
        category: "physical",
        severity: "mid",
        popular: "Middle wall of partition",
        correction: "The Physical Barrier-Stone / Fence",
        original: "μεσότοιχον",
        impact: " It refers to the literal 'Stone Fence' in the temple that separated people. Jesus physically 'Demolished' the social-architectural barrier to create a single body. It's 'Architectural Integration'."
    },
    {
        verse: "Ephesians 6:11",
        category: "physical",
        severity: "low",
        popular: "Armor of God",
        correction: "The Power's Battle-Outfitting / Suit",
        original: "πανοπλίαν",
        impact: " Not a spiritual idea. 'Panoplia' is a full 'Material Suit of Armor'. It describes the 'Logical Defense-System' as a tangible 'Wrapper' for the biological frame. It's 'Protective Packaging'."
    },
    {
        verse: "Philippians 2:7",
        category: "theology",
        severity: "high",
        popular: "Made himself of no reputation",
        correction: "Physically Emptied his Status-Vessel",
        original: "ἐκένωσεν",
        impact: " 'Kenosis' is the physical act of 'Pouring out' a liquid from a container. The King physically 'Emptied' his high-output status to take on a low-output human-frame. It's 'Status-Discharge'."
    },
    {
        verse: "Philippians 4:13",
        category: "theology",
        severity: "mid",
        popular: "Strengthens me",
        correction: "Infuses me with Dynamic-Force",
        original: "ἐνδυναμοῦντί",
        impact: " 'Strengthen' is a feeling. 'Endunamo' is to 'Infuse' with 'Dunamis' (Explosive Energy). It describes a literal physical 'Power-Inflow' into the human unit. It's 'Energy-Injection'."
    },
    {
        verse: "Philippians 2:12",
        category: "theology",
        severity: "low",
        popular: "Work out your salvation",
        correction: "Tool-Form your Rescue-Status",
        original: "κατεργάζεσθε",
        impact: " 'Work out' sounds like a gym. 'Katergazomai' is to 'Shape' or 'Manufacture' an object. You are the 'Tooler' of your own rescue-logic. It's 'Logical Manufacturing'."
    },
    {
        verse: "Colossians 1:24",
        category: "physical",
        severity: "mid",
        popular: "Fill up that which is behind",
        correction: "Loading the Deficient-Gap in the Flesh",
        original: "ἀνταναπληρῶ",
        impact: " 'Fill up' is nautical. It describes physically 'Loading' the ship to make up for a lack. Paul is physically 'Suffering' to load the community's deficit. It's 'Structural Compensation'."
    },
    {
        verse: "Colossians 3:1",
        category: "physical",
        severity: "low",
        popular: "Risen with Christ",
        correction: "Elevated alongside the Anointed",
        original: "συνηγέρθητε",
        impact: " 'Risen' is a mystical state. 'Sunegeiro' is the physical act of being 'Lifted Together'. It describes the group's 'Vertical-Status' as being physically raised to the King's level. It's 'Spatial Elevation'."
    },
    {
        verse: "Colossians 2:19",
        category: "physical",
        severity: "mid",
        popular: "Knit together",
        correction: "Physically Bound / Jointed",
        original: "συμβιβαζόμενον",
        impact: " 'Knit' is a craft metaphor. 'Symbibazo' is the physical 'Joining' of limbs or pipes. It describes the community as a 'Mechanically Linked System'. It's 'Systemic Assembly'."
    },
    {
        verse: "1 Thessalonians 4:17",
        category: "physical",
        severity: "high",
        popular: "Caught up in the clouds",
        correction: "Snatched into the Atmospheric-Vapors",
        original: "ἁρπαγησόμεθα",
        impact: " 'Caught up' is a religious rapture. 'Harpazo' is the physical act of being 'Snatched' or 'Seized' by a force. It describes a 'Kinetic Relocation' into the sky. It's 'Force-Relocation'."
    },
    {
        verse: "1 Thessalonians 2:9",
        category: "physical",
        severity: "low",
        popular: "Labor and travail",
        correction: "Hard-Tugging and Wear-Down",
        original: "κόπον / μόχθον",
        impact: " Not just 'work'. These describe the physical 'Grind' and 'Muscular Effort' of survival. It represents the 'Material Cost' of the mission. It's 'Body-Depletion'."
    },
    {
        verse: "2 Thessalonians 2:3",
        category: "theology",
        severity: "high",
        popular: "Falling away",
        correction: "The Departure / The Physical Move-Away",
        original: "ἀποστασία",
        impact: " 'Apostasy' is a religious abandonment. 'Apostasia' is the physical act of 'Departing' or 'Moving from one space to another'. It is the 'Great Walk-Out'. It's 'Trajectory Departure'."
    },
    {
        verse: "2 Thessalonians 3:10",
        category: "physical",
        severity: "mid",
        popular: "Would not work / eat",
        correction: "No Yield / No Input",
        original: "ἐργάζεσθαι / ἐσθιέτω",
        impact: " A biological law. If there is no 'Output' (Work/Ergon), there should be no 'Input' (Eating). It is the Power's 'Biological-Economic Order'. It's 'Resource Management'."
    },
    {
        verse: "2 Thessalonians 3:6",
        category: "physical",
        severity: "low",
        popular: "Withdraw yourselves",
        correction: "Physically Detach From / Step Back",
        original: "στέλλεσθαι",
        impact: " 'Withdraw' is a social request. 'Stello' is to 'Furrow' a sail or 'Step back'. It's the physical act of 'Removing your body' from the proximity of a distorted unit. It's 'Spatial Severance'."
    },
    {
        verse: "1 Timothy 3:1",
        category: "physical",
        severity: "low",
        popular: "Office of a bishop",
        correction: "The Task of the Overseer / Viewer",
        original: "ἐπισκοπῆς",
        impact: " 'Office' is a title. 'Episkope' is the job of 'Watching Over'. It’s the physical act of 'Visual Oversight' to ensure the logic and the bodies stay in alignment. It's 'Linguistic Supervision'."
    },
    {
        verse: "1 Timothy 4:10",
        category: "theology",
        severity: "mid",
        popular: "Savior of all men",
        correction: "Rescuer / Preserver of All Frames",
        original: "σωτὴρ",
        impact: " 'Savior' is spiritual. 'Soter' is a 'Rescuer' or 'Lifeguard'. It describes the King as the 'Physical Guarantor' of even the non-aligned humans. He 'Preserves' the material species. It's 'Biological Preservation'."
    },
    {
        verse: "1 Timothy 6:12",
        category: "physical",
        severity: "mid",
        popular: "Fight the good fight",
        correction: "Agonize the Good Struggle / Contest",
        original: "ἀγωνίζου / ἀγῶνα",
        impact: " 'Fight' is a war. 'Agon' is an 'Athletic Contest'. It describes the physical 'Straining' and 'Agony' of competition. It’s the material 'Body-Straining' for the prize. It's 'Bio-Kinetic Effort'."
    },
    {
        verse: "2 Timothy 1:7",
        category: "theology",
        severity: "mid",
        popular: "Spirit of fear / power",
        correction: "Atmosphere of Timidity / Dynamic-Force",
        original: "πνεῦμα δειλίας / δυνάμεως",
        impact: " Similar to elsewhere, this is about the 'Atmospheric Operating Code'. You aren't given a code of 'Body-Trembling' (Fear) but of 'Kinetic Force' (Dunamis). It's 'Neural-Code Shifting'."
    },
    {
        verse: "2 Timothy 4:7",
        category: "physical",
        severity: "low",
        popular: "Finished my course",
        correction: "Completed the Physical Race-Track",
        original: "δρόμον τετέλεκα",
        impact: " 'Course' is life. 'Dromos' is a literal 'Race-track' or 'Run'. Paul has physically 'Traversed' the entire allocated terrain for his mission. It's 'Spatial Task-Completion'."
    },
    {
        verse: "2 Timothy 3:16",
        category: "theology",
        severity: "high",
        popular: "Inspiration of God",
        correction: "Breathed out by the Force / God-Air",
        original: "θεόπνευστος",
        impact: " 'Inspiration' is a mental muse. 'Theopneustos' is 'God-Breathed'. It describes the logic as literal 'Compressed-Air-Data' forced out into human language. It's 'Acoustic-Information Injection'."
    },
    {
        verse: "Titus 2:11",
        category: "theology",
        severity: "mid",
        popular: "Grace of God appeared",
        correction: "The Force's Favor-Output Shined forth",
        original: "ἐπεφάνη",
        impact: " 'Appeared' is vague. 'Epephane' is to 'Shine upon' or 'Surface'. It is the physical 'Visibility' of the Higher Logic reaching the terrain. It's 'Luminous Manifestation'."
    },
    {
        verse: "Titus 3:5",
        category: "physical",
        severity: "mid",
        popular: "Washing of regeneration",
        correction: "The Bath of Re-Generation / New-Growth",
        original: "λουτροῦ παλιγγενεσίας",
        impact: " 'Washing' is literal. 'Loutron' is a 'Wash-basin'. 'Paliggenesia' is 'New Growth'. It's the physical act of 'Cleaning' the biological unit for a 'Genetic Reset'. It's 'Bio-Material Purging'."
    },
    {
        verse: "Titus 1:9",
        category: "theology",
        severity: "low",
        popular: "Holding fast",
        correction: "Adhering / Stuck to the Word",
        original: "ἀντεχόμενον",
        impact: " 'Holding' is with hands. 'Antechomai' is to 'Hold against' or 'Stick to'. It describes the human staying 'Physically Fastened' to the logic. It's 'Adhesive Alignment'."
    },
    {
        verse: "Philemon 1:11",
        category: "physical",
        severity: "low",
        popular: "Unprofitable / Profitable",
        correction: "Useless-Tool / Marketable Utility",
        original: "ἄχρηστον / εὔχρηστον",
        impact: " Philemon is about a slave. 'Euchrestos' means 'Easy to use' or 'High utility'. It describes the human as a literal 'Functional Asset' in the King's economy. It's 'Operational Value'."
    },
    {
        verse: "Philemon 1:20",
        category: "physical",
        severity: "mid",
        popular: "Refresh my bowels",
        correction: "Chill/Cool my Internal Organs",
        original: "ἀνάπαυσόν μου τὰ σπλάγχνα",
        impact: " 'Refresh my heart' in English. Paul asks to have his 'Guts' cooled. It describes the physical 'Relief of Tension' in the core organism. It's 'Internal Physiological Recovery'."
    },
    {
        verse: "Philemon 1:7",
        category: "theology",
        severity: "low",
        popular: "Saints are refreshed",
        correction: "The Set-Apart have been Cooled",
        original: "ἀναπέπαυται",
        impact: " 'Refreshed' sounds like a soda. 'Anapauo' is to 'Chill' or 'Stop the heat'. It represents the physical 'Stopping of the struggle' for a period of cooling. It's 'Bio-Thermal Reset'."
    },
    {
        verse: "Hebrews 1:3",
        category: "theology",
        severity: "high",
        popular: "Upholding all things",
        correction: "Bearing/Carrying the Whole-Mass",
        original: "φέρων τε τὰ πάντα",
        impact: " 'Uphold' is a mental force. 'Phero' is the physical act of 'Hefting' or 'Carrying' a load. It describes the King's logic as the literal 'Weight-Carrier' of the atomic universe. It's 'Mass-Maintenance'."
    },
    {
        verse: "Hebrews 11:1",
        category: "theology",
        severity: "high",
        popular: "Substance / Evidence",
        correction: "The Title-Deed / Solid-Base / Proof",
        original: "ὑπόστασις / ἔλεγχος",
        impact: " 'Faith' isn't hope. 'Hypostasis' is a legal 'Title-Deed' or the 'Solid-Under-Base'. It is the physical 'Material Certainty' of a future reality. It's 'Legalized Materiality'."
    },
    {
        verse: "Hebrews 13:14",
        category: "physical",
        severity: "low",
        popular: "Continuing City",
        correction: "Permanently-Remaining Urban-Center",
        original: "μένουσαν πόλιν",
        impact: " 'Continuing' is time. 'Meno' is 'to remain standing'. It describes the King's city as a literal 'Immovable Physical Structure' in history. It's 'Architectural Permanence'."
    },
    {
        verse: "James 1:17",
        category: "physical",
        severity: "mid",
        popular: "No variableness / shadow",
        correction: "No Deviation-Shift / Shadow-Rotation",
        original: "παραλλαγὴ / τροπῆς",
        impact: " Astronomial terms. 'Parallage' is 'Parallax' (Perspective shift). 'Trope' is 'Turning' (Rotation). The Power's logic has no 'Angular Shifting' or shadow-movement. It's 'Geometric Invariance'."
    },
    {
        verse: "James 3:4",
        category: "physical",
        severity: "low",
        popular: "Ships / Helm",
        correction: "Water-Vessels / The Small Turning-Tool",
        original: "πηδαλίου",
        impact: " James compares the tongue to a 'Helm' or 'Rudder'. It's a literal 'Mechanical leverage' point that turns a massive physical body. It's 'Control-Hardware Logic'."
    },
    {
        verse: "James 5:7",
        category: "physical",
        severity: "low",
        popular: "Patient until the coming",
        correction: "Wait with Long-Atmosphere until the Arrival",
        original: "μακροθυμήσατε",
        impact: " 'Patient' is a virtue. 'Makrothumeo' is 'Long-Breath'. It describes the physical act of maintaining a 'Slow-Metabolism/Steady-State' until the target arrives. It's 'Biological Pacing'."
    },
    {
        verse: "1 Peter 2:5",
        category: "physical",
        severity: "mid",
        popular: "Lively stones",
        correction: "Vibrating Quarry-Blocks / Living Rock",
        original: "λίθοι ζῶντες",
        impact: " We aren't just 'living'. We are 'Lithoi' (Quarry-Blocks) that are 'Zontes' (Vibrating with life). It describes the community as a literal 'Living Stone Wall'. It's 'Biological Masonry'."
    },
    {
        verse: "1 Peter 1:7",
        category: "physical",
        severity: "mid",
        popular: "Trial of your faith",
        correction: "The Refining-Fire / Slag-Filtering",
        original: "δοκίμιον",
        impact: " 'Trial' is a court case. 'Dokimion' is the physical 'Refining' of metal in a furnace. It describes the Power 'Burning' the impurities out of the human's firmness. It's 'Thermal Purification'."
    },
    {
        verse: "1 Peter 5:4",
        category: "physical",
        severity: "low",
        popular: "Crown of glory",
        correction: "The Encircling-Band of Heavy-Weight",
        original: "στέφανον τῆς δόξης",
        impact: " 'Crown' is gold. 'Stephanos' is a 'Wreath' or 'Circular Band' (from Steipho, to encircle). It's the physical 'Wrapper' of high-status weight around the head. It's 'Status-Hardware'."
    },
    {
        verse: "2 Peter 3:10",
        category: "physical",
        severity: "high",
        popular: "Elements shall melt",
        correction: "The Atomic-Components (Stoicheia) shall Untie",
        original: "στοιχεῖα / λυθήσεται",
        impact: " 'Elements' are air/fire/water. 'Stoicheia' are the 'Atomic units' or letters. 'Luo' is to 'Untie'. It describes the literal 'Un-binding' of the atomic structure of the environment. It's 'Material De-composition'."
    },
    {
        verse: "2 Peter 1:19",
        category: "physical",
        severity: "mid",
        popular: "Sure word of prophecy",
        correction: "The Fixed-Firm Logic of Forth-Telling",
        original: "βεβαιότερον",
        impact: " 'Sure' is a feeling. 'Bebaios' is 'Firmly-Fixed' or 'Stable-State'. It describes the prophet's logic as a literal 'Anchor-Point' in the timeline. It's 'Chronological Stability'."
    },
    {
        verse: "2 Peter 2:17",
        category: "physical",
        severity: "low",
        popular: "Wells without water",
        correction: "Empty Spring-Holes / Dry-Points",
        original: "πηγαὶ ἄνυδροι",
        impact: " Distorted teachers are 'Pi' (Sprays/Springs) without 'Hudor' (Water). They are physical 'Hardware' with no 'Liquid-Logic' (Output). It's 'Functional Deficiency'."
    },
    {
        verse: "1 John 2:1",
        category: "theology",
        severity: "mid",
        popular: "Advocate",
        correction: "The Supporting-Presence / Legal-Aide",
        original: "παράκλητον",
        impact: " As elsewhere, this is the 'One called alongside'. It’s the physical act of having a 'Supporting Body' in the courtroom of reality. It's 'Legal-Body-Guarding'."
    },
    {
        verse: "1 John 3:9",
        category: "theology",
        severity: "high",
        popular: "His seed remaineth",
        correction: "His Genetic-Logic / Sperm Stays inside",
        original: "σπέρμα αὐτοῦ",
        impact: " 'Seed' is a metaphor for word. 'Sperma' is literal 'Sperm' or 'Genetic code'. The King's 'Code' physically 'Remains' in the aligned human, preventing distortion. It's 'Biological Re-Programming'."
    },
    {
        verse: "1 John 5:4",
        category: "theology",
        severity: "high",
        popular: "Overcometh the world",
        correction: "Conquers the Arranged-System (Kosmos)",
        original: "νικᾷ τὸν κόσμον",
        impact: " 'Overcome' is to feel better. 'Nikao' is 'Military Victory' or 'Conquest'. 'Kosmos' is the 'Arrangement' or 'System'. It's the physical 'Overthrow' of the current social-material order. It's 'Systemic Victory'."
    },
    {
        verse: "2 John 1:1",
        category: "theology",
        severity: "low",
        popular: "Elder",
        correction: "The Old-Man / The Biological Elder",
        original: "πρεσβύτερος",
        impact: " 'Elder' is a church rank. 'Presbuteros' is simply an 'Old Man'. It specifies the physical 'Maturity' and 'Experience-Weight' required for the role. It's 'Bio-Aged Authority'."
    },
    {
        verse: "2 John 1:4",
        category: "physical",
        severity: "mid",
        popular: "Walking in truth",
        correction: "Physically Moving within the Un-Concealed",
        original: "περιπατοῦντας ἐν ἀληθείᾳ",
        impact: " 'Walk' is literal feet. To walk 'In Truth' (Aletheia - Unconcealed) is to physically move where everything is visible and nothing is hidden by distortion. It's 'Optical Navigation'."
    },
    {
        verse: "3 John 1:2",
        category: "physical",
        severity: "high",
        popular: "Prosper and be in health",
        correction: "To be Fast-on-the-Road and Bio-Sound",
        original: "εὐοδοῦσθαι / ὑγιαίνειν",
        impact: " 'Prosper' is wealth. 'Euodoo' is 'To have a Good Road'. 'Hugiaino' is 'To be Sound' (Hygiene). It describes a human with 'Good Trajectory' and a 'Functional Frame'. It's 'Mechanical and Biological Wellness'."
    },
    {
        verse: "3 John 1:8",
        category: "theology",
        severity: "low",
        popular: "Fellowhelpers",
        correction: "Joint-Workers / System-Partners",
        original: "συνεργοί",
        impact: " 'Helpers' is social. 'Sunergos' is 'Joint-Energy/Work'. It describes humans physically 'Adding their effort' to the single output of the King's logic. It's 'Energy-Summation'."
    },
    {
        verse: "Jude 1:12",
        category: "physical",
        severity: "mid",
        popular: "Clouds without water / Trees withered",
        correction: "Dry-Vapors / Fruitless Dead-Frames",
        original: "νεφέλαι ἄνυδροι / δένδρα φθινοπωρινὰ",
        impact: " Distorted ones are 'Dry Vapors' moved by wind. They are 'Autumn Trees' with no yield. It's a 'Biological Waste' description—units that consume resources but provide zero logic-grain. It's 'Productive Sterility'."
    },
    {
        verse: "Jude 1:13",
        category: "physical",
        severity: "low",
        popular: "Wandering stars",
        correction: "Meandering Planets / Erratic Orbiters",
        original: "ἀστέρες πλανῆται",
        impact: " Distorted teachers are 'Planetes' (Planets/Wanderers). They have no 'Fixed Orbit' in logic. They meander erratically through the social system. It's 'Orbital Instability'."
    },
    {
        verse: "Revelation 22:20",
        category: "theology",
        severity: "high",
        popular: "Even so, come",
        correction: "Correct, Physically Arrive",
        original: "ναί, ἔρχου",
        impact: " 'Even so' is an agreement. 'Nai' is 'Yes' (Correct). 'Erchou' is the physical act of 'Coming/Arriving'. It is the final 'Demand for Presence' of the King in the three-dimensional terrain. It's 'The Final Arrival Request'."
    }
];

// --- LIVE SCANNER PIVOT ---

const state = {
    view: 'registry', // 'registry' or 'scanner'
    activeBook: 'Genesis',
    activeChapter: 1,
    lexicon: {},
    hudPinned: false,
    source: 'web' // 'web' or 'kjv'
};

// Build the lexicon from the auditLog
function buildLexicon() {
    auditLog.forEach(entry => {
        const key = entry.popular.toLowerCase();
        if (!state.lexicon[key]) {
            state.lexicon[key] = {
                correction: entry.correction,
                original: entry.original,
                impact: entry.impact,
                root: entry.root || null,
                cite: entry.cite || null,
                phonetic: entry.phonetic || null,
                bridge: entry.bridge || null
            };
        }
    });
}

// Full Bible Book List with Chapter Counts
const bibleBooks = [
    { name: "Genesis", chapters: 50 }, { name: "Exodus", chapters: 40 }, { name: "Leviticus", chapters: 27 },
    { name: "Numbers", chapters: 36 }, { name: "Deuteronomy", chapters: 34 }, { name: "Joshua", chapters: 24 },
    { name: "Judges", chapters: 21 }, { name: "Ruth", chapters: 4 }, { name: "1 Samuel", chapters: 31 },
    { name: "2 Samuel", chapters: 24 }, { name: "1 Kings", chapters: 22 }, { name: "2 Kings", chapters: 25 },
    { name: "1 Chronicles", chapters: 29 }, { name: "2 Chronicles", chapters: 36 }, { name: "Ezra", chapters: 10 },
    { name: "Nehemiah", chapters: 13 }, { name: "Esther", chapters: 10 }, { name: "Job", chapters: 42 },
    { name: "Psalms", chapters: 150 }, { name: "Proverbs", chapters: 31 }, { name: "Ecclesiastes", chapters: 12 },
    { name: "Song of Solomon", chapters: 8 }, { name: "Isaiah", chapters: 66 }, { name: "Jeremiah", chapters: 52 },
    { name: "Lamentations", chapters: 5 }, { name: "Ezekiel", chapters: 48 }, { name: "Daniel", chapters: 12 },
    { name: "Hosea", chapters: 14 }, { name: "Joel", chapters: 3 }, { name: "Amos", chapters: 9 },
    { name: "Obadiah", chapters: 1 }, { name: "Jonah", chapters: 4 }, { name: "Micah", chapters: 7 },
    { name: "Nahum", chapters: 3 }, { name: "Habakkuk", chapters: 3 }, { name: "Zephaniah", chapters: 3 },
    { name: "Haggai", chapters: 2 }, { name: "Zechariah", chapters: 14 }, { name: "Malachi", chapters: 4 },
    { name: "Matthew", chapters: 28 }, { name: "Mark", chapters: 16 }, { name: "Luke", chapters: 24 },
    { name: "John", chapters: 21 }, { name: "Acts", chapters: 28 }, { name: "Romans", chapters: 16 },
    { name: "1 Corinthians", chapters: 16 }, { name: "2 Corinthians", chapters: 13 }, { name: "Galatians", chapters: 6 },
    { name: "Ephesians", chapters: 6 }, { name: "Philippians", chapters: 4 }, { name: "Colossians", chapters: 4 },
    { name: "1 Thessalonians", chapters: 5 }, { name: "2 Thessalonians", chapters: 3 }, { name: "1 Timothy", chapters: 6 },
    { name: "2 Timothy", chapters: 4 }, { name: "Titus", chapters: 3 }, { name: "Philemon", chapters: 1 },
    { name: "Hebrews", chapters: 13 }, { name: "James", chapters: 5 }, { name: "1 Peter", chapters: 5 },
    { name: "2 Peter", chapters: 3 }, { name: "1 John", chapters: 5 }, { name: "2 John", chapters: 1 },
    { name: "3 John", chapters: 1 }, { name: "Jude", chapters: 1 }, { name: "Revelation", chapters: 22 }
];

// Initialize UI
function initApp() {
    buildLexicon();
    initTabs();
    initNavigation();
    initMenu();
    initSourceToggle();
    initScrollTop();
    renderAudit();
    initProgressList();
}

function initMenu() {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.progress-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleMenu = () => {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Auto-close menu when a book is clicked (mobile navigation behavior)
    sidebar.addEventListener('click', (e) => {
        if (e.target.closest('.book-progress-item')) {
            toggleMenu();
        }
    });
}

function initSourceToggle() {
    const webBtn = document.getElementById('toggle-web');
    const kjvBtn = document.getElementById('toggle-kjv');

    webBtn.addEventListener('click', () => {
        state.source = 'web';
        webBtn.classList.add('active');
        kjvBtn.classList.remove('active');
        renderScanner();
    });

    kjvBtn.addEventListener('click', () => {
        state.source = 'kjv';
        kjvBtn.classList.add('active');
        webBtn.classList.remove('active');
        renderScanner();
    });
}

function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTabs() {
    const tabRegistry = document.getElementById('tab-registry');
    const tabScanner = document.getElementById('tab-scanner');
    const registryView = document.getElementById('registry-view');
    const scannerView = document.getElementById('scanner-view');
    const searchContainer = document.getElementById('registry-search-container');
    const scannerControls = document.getElementById('scanner-controls');

    tabRegistry.addEventListener('click', () => {
        state.view = 'registry';
        tabRegistry.classList.add('active');
        tabScanner.classList.remove('active');
        registryView.classList.remove('hidden');
        scannerView.classList.add('hidden');
        searchContainer.classList.remove('hidden');
        scannerControls.classList.add('hidden');
    });

    tabScanner.addEventListener('click', () => {
        state.view = 'scanner';
        tabScanner.classList.add('active');
        tabRegistry.classList.remove('active');
        scannerView.classList.remove('hidden');
        registryView.classList.add('hidden');
        searchContainer.classList.add('hidden');
        scannerControls.classList.remove('hidden');
        renderScanner();
    });
}

function initNavigation() {
    const bookSelect = document.getElementById('book-select');
    const chapterSelect = document.getElementById('chapter-select');

    bibleBooks.forEach(book => {
        const opt = document.createElement('option');
        opt.value = book.name;
        opt.textContent = book.name;
        bookSelect.appendChild(opt);
    });

    bookSelect.addEventListener('change', (e) => {
        state.activeBook = e.target.value;
        updateChapters();
        renderScanner();
    });

    chapterSelect.addEventListener('change', (e) => {
        state.activeChapter = parseInt(e.target.value);
        renderScanner();
    });

    updateChapters();
}

function updateChapters() {
    const chapterSelect = document.getElementById('chapter-select');
    chapterSelect.innerHTML = '';
    const book = bibleBooks.find(b => b.name === state.activeBook);
    for (let i = 1; i <= book.chapters; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `Chapter ${i}`;
        chapterSelect.appendChild(opt);
    }
}

// The core "Live Scanner" rendering engine
async function renderScanner() {
    const container = document.getElementById('verse-container');
    container.innerHTML = '<div class="scanner-loading">Initializing Satellite Link... Scanning Text...</div>';

    try {
        const bookName = state.activeBook.toLowerCase().replace(' ', '');
        // Map the source to the API parameter
        const translation = state.source === 'kjv' ? 'kjv' : 'web';
        const response = await fetch(`https://bible-api.com/${bookName}+${state.activeChapter}?translation=${translation}`);
        const data = await response.json();

        container.innerHTML = '';

        if (!data.verses) {
            container.innerHTML = '<div class="scanner-error">Failed to retrieve data for this segment.</div>';
            return;
        }

        data.verses.forEach(v => {
            const verseEl = document.createElement('div');
            verseEl.className = 'scanned-verse';

            const num = document.createElement('span');
            num.className = 'verse-num';
            num.textContent = v.verse;

            const text = document.createElement('div');
            text.className = 'verse-text';
            text.innerHTML = transformText(v.text);

            verseEl.appendChild(num);
            verseEl.appendChild(text);
            container.appendChild(verseEl);
        });
    } catch (err) {
        container.innerHTML = '<div class="scanner-error">Link Interrupted. Check network connection.</div>';
    }
}

// Transforms standard text into deconstructed physical text
function transformText(raw) {
    let result = raw;

    // --- CONTEXTUAL DEFENSIVE SHIELDING ---
    // Identify ANY hyphenated word and protect it (e.g., brother-in-law, heart-broken, stiff-necked)
    const placeholders = {};
    let counter = 0;

    // Match anything with a hyphen: word-word, word-word-word
    const hyphenRegex = /(\b[\w]+-[\w]+(?:-[\w]+)*\b)/g;

    result = result.replace(hyphenRegex, (match) => {
        const p = `__COMPOUND_${counter}__`;
        placeholders[p] = match;
        counter++;
        return p;
    });

    const keywords = Object.keys(state.lexicon);

    // Sort keywords to ensure longer phrases are replaced first
    keywords.sort((a, b) => b.length - a.length);

    keywords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, (match) => {
            const data = state.lexicon[word.toLowerCase()];
            return `<span class="ghost-word" 
                          onmouseenter="showDeconstruction(event, '${word.toLowerCase()}', false)"
                          onmouseleave="hideDeconstruction()"
                          onclick="showDeconstruction(event, '${word.toLowerCase()}', true)"
                          data-correction="${data.correction}">
                ${match}
                <span class="physical-layer">${data.correction}</span>
            </span>`;
        });
    });

    // --- RESTORE PROTECTED TERMS ---
    Object.keys(placeholders).forEach(p => {
        result = result.replace(new RegExp(p, 'g'), placeholders[p]);
    });

    return result;
}

function showDeconstruction(e, word, forcePin) {
    const panel = document.getElementById('deconstruction-panel');
    const data = state.lexicon[word];
    if (!data) return;

    if (state.hudPinned && !forcePin) return;

    // Manage active visual state for the word
    // Ensure we find the ghost-word element even if a child was clicked
    const targetEl = e.target.closest('.ghost-word');

    document.querySelectorAll('.ghost-word').forEach(el => el.classList.remove('word-active'));
    if (targetEl) {
        targetEl.classList.add('word-active');
    }

    if (forcePin) state.hudPinned = true;

    panel.classList.remove('hidden');
    panel.innerHTML = `
        <div class="panel-header">
            <h3>DECONSTRUCTION: ${word.toUpperCase()}</h3>
            ${state.hudPinned ? '<button class="close-hud" onclick="closeHud()">×</button>' : ''}
            <span class="panel-root">${data.original}</span>
            ${data.phonetic ? `<div class="aural-hint">🔊 [${data.phonetic}]</div>` : ''}
        </div>
        <div class="panel-body">
            <div class="panel-item">
                <label>PHYSICAL CORE</label>
                <div class="val">${data.correction}</div>
                ${data.root ? `<div class="root-badge">ROOT: <strong>${data.root}</strong></div>` : ''}
            </div>
            <div class="panel-item">
                <label>IMPACT LOSS</label>
                <div class="val">${data.impact}</div>
            </div>
            ${data.cite ? `
                <div class="panel-item">
                    <label>SCHOLARLY SOURCE</label>
                    <div class="cite-badge" style="margin-top:5px">${data.cite}</div>
                </div>
            ` : ''}
            ${data.bridge ? `
                <div class="bridge-layer">
                    <label>HEBREW BRIDGE (ORIGINAL LOGIC)</label>
                    <div class="bridge-val">${data.bridge.val} <span class="bridge-script">${data.bridge.script}</span></div>
                </div>
            ` : ''}
        </div>
        ${state.hudPinned ? '<div class="pin-indicator">LOCKED FOR STUDY</div>' : ''}
    `;
}

function hideDeconstruction() {
    if (state.hudPinned) return;
    const panel = document.getElementById('deconstruction-panel');
    panel.classList.add('hidden');
    document.querySelectorAll('.ghost-word').forEach(el => el.classList.remove('word-active'));
}

function closeHud() {
    state.hudPinned = false;
    hideDeconstruction();
}

// Progress Sidebar Logic
function initProgressList() {
    const progressList = document.getElementById('book-progress-list');
    progressList.innerHTML = '';

    const books = [
        "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
        "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
        "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
        "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
        "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
        "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
        "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
        "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
        "1 John", "2 John", "3 John", "Jude", "Revelation"
    ];

    const bookCounts = {};
    auditLog.forEach(entry => {
        const match = entry.verse.match(/^(.*?)\s\d+:/);
        let bookName = match ? match[1].trim() : entry.verse.split(' ')[0];

        // Advanced Normalization Mapper
        if (bookName === 'Psalm') bookName = 'Psalms';
        if (bookName === '1 Cor') bookName = '1 Corinthians';
        if (bookName === '2 Cor') bookName = '2 Corinthians';
        if (bookName === '1 Thess') bookName = '1 Thessalonians';
        if (bookName === '2 Thess') bookName = '2 Thessalonians';
        if (bookName === '1 Tim') bookName = '1 Timothy';
        if (bookName === '2 Tim') bookName = '2 Timothy';
        if (bookName === '1 Pet') bookName = '1 Peter';
        if (bookName === '2 Pet') bookName = '2 Peter';
        if (bookName === '1 Jn') bookName = '1 John';
        if (bookName === '2 Jn') bookName = '2 John';
        if (bookName === '3 Jn') bookName = '3 John';

        bookCounts[bookName] = (bookCounts[bookName] || 0) + 1;
    });

    books.forEach(name => {
        const count = bookCounts[name] || 0;
        const status = count >= 5 ? 'verified' : (count > 0 ? 'in-progress' : 'pending');

        const item = document.createElement('div');
        item.className = `book-progress-item ${status}`;
        item.innerHTML = `
            <span class="book-name">${name}</span>
            <span class="book-status-dot"></span>
        `;

        // --- BRIDGE: SIDEBAR TO SCANNER ---
        item.addEventListener('click', () => {
            state.activeBook = name;
            state.activeChapter = 1;

            // Trigger Tab Switch
            document.getElementById('tab-scanner').click();

            // Update Selectors
            document.getElementById('book-select').value = name;
            updateChapters();
            renderScanner();

            // Mobile: Scroll to scanner
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        progressList.appendChild(item);
    });

    // Update Percentage
    const verifiedCount = books.filter(b => (bookCounts[b] || 0) >= 5).length;
    const percent = Math.round((verifiedCount / 66) * 100);
    const progressText = document.getElementById('progress-percent');
    if (progressText) progressText.textContent = `${percent}%`;
}

// Initial Audit Rendering
function renderAudit() {
    const container = document.getElementById('audit-registry');
    if (!container) return;
    container.innerHTML = '';

    const searchTerm = document.getElementById('audit-search').value.toLowerCase();

    const filtered = auditLog.filter(item => {
        return item.verse.toLowerCase().includes(searchTerm) ||
            item.popular.toLowerCase().includes(searchTerm) ||
            item.impact.toLowerCase().includes(searchTerm) ||
            item.original.toLowerCase().includes(searchTerm) ||
            item.correction.toLowerCase().includes(searchTerm) ||
            (item.root && item.root.toLowerCase().includes(searchTerm));
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = `audit-card severity-${item.severity}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="card-verse">${item.verse}</span>
                <div class="header-tools">
                    ${item.cite ? `<span class="cite-badge">${item.cite}</span>` : ''}
                    <span class="card-severity">${item.severity.toUpperCase()}</span>
                </div>
            </div>
            <div class="comparison-grid">
                <div class="box">
                    <label>Translation Error</label>
                    <div class="popular-error">${item.popular}</div>
                </div>
                <div class="side-arrow">→</div>
                <div class="box">
                    <label>Physical Reality</label>
                    <div class="correction">${item.correction} <span class="original-word">${item.original}</span></div>
                    ${item.root ? `<div class="root-badge">ROOT: <strong>${item.root}</strong></div>` : ''}
                </div>
            </div>
            <div class="impact-section">
                <h4>THE IMPACT</h4>
                <p>${item.impact}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById('audit-search').addEventListener('input', renderAudit);

// Start
initApp();

// PWA: Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker: Registered (PWA Active)'))
            .catch(err => console.log('Service Worker: Registration Failed', err));
    });
}
