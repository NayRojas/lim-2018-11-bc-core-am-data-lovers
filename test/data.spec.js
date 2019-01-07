const input = [
  {
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox\'s ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank']
  },
  {
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin']
  },
  {
    name: 'Nunu',
    title: 'the Yeti Rider',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nunu.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg',
    blurb:
      'Sometimes bonds of friendship become stronger than even bonds of blood. When those bonds link a fearless boy to a fearsome Yeti, the bond becomes a force to be reckoned with. Given the responsibility of taming a terrifying beast, Nunu forged a ...',
    info: {
      attack: 4,
      defense: 6,
      magic: 7,
      difficulty: 4
    },
    tags: ['Support', 'Fighter']
  },
  {
    name: 'Orianna',
    title: 'the Lady of Clockwork',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Orianna.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Oriana_0.jpg',
    blurb:
      'There once was a Piltovian man named Corin Reveck who had a daughter named Orianna, whom he loved more than anything else in the world. Though Orianna had incredible talent for dancing, she was deeply fascinated by the champions of the League of ...',
    info: {
      attack: 4,
      defense: 3,
      magic: 9,
      difficulty: 7
    },
    tags: ['Mage', 'Support']
  },
];
const output = [
  {
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin']
  },
  {
    name: 'Orianna',
    title: 'the Lady of Clockwork',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Orianna.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Oriana_0.jpg',
    blurb:
      'There once was a Piltovian man named Corin Reveck who had a daughter named Orianna, whom he loved more than anything else in the world. Though Orianna had incredible talent for dancing, she was deeply fascinated by the champions of the League of ...',
    info: {
      attack: 4,
      defense: 3,
      magic: 9,
      difficulty: 7
    },
    tags: ['Mage', 'Support']
  }
];

const inputChampions = [
  {
    version: '6.24.1',
    id: 'Cassiopeia',
    top: 'top5',
    key: '69',
    name: 'Cassiopeia',
    title: 'the Serpent\'s Embrace',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Cassiopeia.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    blurb:
      'Cassiopeia is a terrifying creature - half woman, half snake - whose slightest glance brings death. The youngest daughter of one of Noxus\' most influential families, she was once a beautiful and cunning temptress capable of manipulating the hardest ...',
    info: {
      attack: 2,
      defense: 3,
      magic: 9,
      difficulty: 10
    },
    tags: ['Mage'],
    partype: 'MP',
    stats: {
      hp: 525,
      hpperlevel: 75,
      mp: 375,
      mpperlevel: 60,
      movespeed: 328,
      armor: 25,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 5.5,
      hpregenperlevel: 0.5,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.034,
      attackspeedperlevel: 1.5
    }
  },
  {
    version: '6.24.1',
    id: 'KogMaw',
    top: 'top5',
    key: '96',
    name: 'Kog\'Maw',
    title: 'the Mouth of the Abyss',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/KogMaw.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg',
    blurb:
      '\'\'If that\'s just hungry, I don\'t want to see angry.\'\'<br><br>When the prophet Malzahar was reborn in Icathia, he was led there by an ominous voice which thereafter anchored itself to his psyche. From within, this voice bestowed upon him terrible ...',
    info: {
      attack: 8,
      defense: 2,
      magic: 5,
      difficulty: 6
    },
    tags: ['Marksman', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 517.76,
      hpperlevel: 82,
      mp: 322.2,
      mpperlevel: 40,
      movespeed: 325,
      armor: 19.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 500,
      hpregen: 5.92,
      hpregenperlevel: 0.55,
      mpregen: 8.675,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: -0.06,
      attackspeedperlevel: 2.65
    }
  },
  {
    version: '6.24.1',
    id: 'Mordekaiser',
    top: 'top5',
    key: '82',
    name: 'Mordekaiser',
    title: 'the Iron Revenant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Mordekaiser.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg',
    blurb:
      '\'\'All things must die... and yet I live on.\'\'<br><br>The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery ...',
    info: {
      attack: 4,
      defense: 6,
      magic: 7,
      difficulty: 4
    },
    tags: ['Fighter'],
    partype: 'None',
    stats: {
      hp: 525,
      hpperlevel: 73,
      mp: 0,
      mpperlevel: 0,
      movespeed: 325,
      armor: 20,
      armorperlevel: 3.75,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 4,
      hpregenperlevel: 0.3,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61,
      attackdamageperlevel: 5,
      attackspeedoffset: 0.04,
      attackspeedperlevel: 2.2
    }
  },
  {
    version: '6.24.1',
    id: 'Shaco',
    top: 'top5',
    key: '35',
    name: 'Shaco',
    title: 'the Demon Jester',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Shaco.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
    blurb:
      'Most would say that death isn\'t funny. It isn\'t, unless you\'re Shaco - then it\'s hysterical. He is Valoran\'s first fully functioning homicidal comic; he jests until someone dies, and then he laughs. The figure that has come to be known as the Demon ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 6,
      difficulty: 9
    },
    tags: ['Assassin'],
    partype: 'MP',
    stats: {
      hp: 582.12,
      hpperlevel: 84,
      mp: 297.2,
      mpperlevel: 40,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.37,
      hpregenperlevel: 0.55,
      mpregen: 7.155,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.58,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Sona',
    top: 'top5',
    key: '37',
    name: 'Sona',
    title: 'Maven of the Strings',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Sona.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg',
    blurb:
      'Sona has no memories of her true parents. As an infant, she was found abandoned on the doorstep of an Ionian adoption house, nestled atop an ancient instrument in an exquisite case of unknown origins. She was an unusually well-behaved child, always ...',
    info: {
      attack: 5,
      defense: 2,
      magic: 8,
      difficulty: 4
    },
    tags: ['Support', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 482.36,
      hpperlevel: 77,
      mp: 340.6,
      mpperlevel: 45,
      movespeed: 325,
      armor: 20.544,
      armorperlevel: 3.3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 5.42,
      hpregenperlevel: 0.55,
      mpregen: 11.5,
      mpregenperlevel: 0.4,
      crit: 0,
      critperlevel: 0,
      attackdamage: 50.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.03,
      attackspeedperlevel: 2.3
    }
  },
  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox\'s ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Chogath',
    key: '31',
    name: 'Cho\'Gath',
    title: 'the Terror of the Void',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Chogath.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
    blurb:
      'There is a place between dimensions, between worlds. To some it is known as the Outside, to others it is the Unknown. To those that truly know, however, it is called the Void. Despite its name, the Void is not an empty place, but rather the home of ...',
    info: {
      attack: 3,
      defense: 7,
      magic: 7,
      difficulty: 5
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 574.4,
      hpperlevel: 80,
      mp: 272.2,
      mpperlevel: 40,
      movespeed: 345,
      armor: 28.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.925,
      hpregenperlevel: 0.85,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.156,
      attackdamageperlevel: 4.2,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.44
    }
  },
  {
    version: '6.24.1',
    id: 'FiddleSticks',
    key: '9',
    name: 'Fiddlesticks',
    title: 'the Harbinger of Doom',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
    blurb:
      'For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger ...',
    info: {
      attack: 2,
      defense: 3,
      magic: 9,
      difficulty: 9
    },
    tags: ['Mage', 'Support'],
    partype: 'MP',
    stats: {
      hp: 524.4,
      hpperlevel: 80,
      mp: 400.12,
      mpperlevel: 56,
      movespeed: 335,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 480,
      hpregen: 5.605,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 48.36,
      attackdamageperlevel: 2.625,
      attackspeedoffset: 0,
      attackspeedperlevel: 2.11
    }
  },
  {
    version: '6.24.1',
    id: 'Heimerdinger',
    key: '74',
    name: 'Heimerdinger',
    title: 'the Revered Inventor',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Heimerdinger.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg',
    blurb:
      'From the Journal of Professor Cecil B. Heimerdinger<br><br>10.14<br><br>09:15<br><br>Current meteorological conditions in Bandle City seem optimal. Atmospheric pressure is ideal for today\'s experiments!<br><br>Running a fifth trial for my ...',
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 8
    },
    tags: ['Mage', 'Support'],
    partype: 'MP',
    stats: {
      hp: 476,
      hpperlevel: 75,
      mp: 307.2,
      mpperlevel: 40,
      movespeed: 340,
      armor: 19.04,
      armorperlevel: 3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 11.005,
      hpregenperlevel: 1.75,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 55.536,
      attackdamageperlevel: 2.7,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.36
    }
  },
  {
    version: '6.24.1',
    id: 'Velkoz',
    key: '161',
    name: 'Vel\'Koz',
    title: 'the Eye of the Void',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Velkoz.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg',
    blurb:
      'I pass into the sudden glare. Blink. Blink, blink, blink. My eyes adjust and evaluate the landscape before me.<br><br>There\'s a scurrying. I look down to find a small, white creature standing on its hind legs, sniffing at my body. It intrigues me....',
    info: {
      attack: 2,
      defense: 2,
      magic: 10,
      difficulty: 8
    },
    tags: ['Mage'],
    partype: 'MP',
    stats: {
      hp: 507.68,
      hpperlevel: 76,
      mp: 375.6,
      mpperlevel: 42,
      movespeed: 340,
      armor: 21.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 525,
      hpregen: 5.42,
      hpregenperlevel: 0.55,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 54.9379,
      attackdamageperlevel: 3.14159,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.36
    }
  }
];
const outChampions = [
  {
    version: '6.24.1',
    id: 'Cassiopeia',
    top: 'top5',
    key: '69',
    name: 'Cassiopeia',
    title: 'the Serpent\'s Embrace',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Cassiopeia.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    blurb:
      'Cassiopeia is a terrifying creature - half woman, half snake - whose slightest glance brings death. The youngest daughter of one of Noxus\' most influential families, she was once a beautiful and cunning temptress capable of manipulating the hardest ...',
    info: {
      attack: 2,
      defense: 3,
      magic: 9,
      difficulty: 10
    },
    tags: ['Mage'],
    partype: 'MP',
    stats: {
      hp: 525,
      hpperlevel: 75,
      mp: 375,
      mpperlevel: 60,
      movespeed: 328,
      armor: 25,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 5.5,
      hpregenperlevel: 0.5,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.034,
      attackspeedperlevel: 1.5
    }
  },
  {
    version: '6.24.1',
    id: 'KogMaw',
    top: 'top5',
    key: '96',
    name: 'Kog\'Maw',
    title: 'the Mouth of the Abyss',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/KogMaw.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg',
    blurb:
      '\'\'If that\'s just hungry, I don\'t want to see angry.\'\'<br><br>When the prophet Malzahar was reborn in Icathia, he was led there by an ominous voice which thereafter anchored itself to his psyche. From within, this voice bestowed upon him terrible ...',
    info: {
      attack: 8,
      defense: 2,
      magic: 5,
      difficulty: 6
    },
    tags: ['Marksman', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 517.76,
      hpperlevel: 82,
      mp: 322.2,
      mpperlevel: 40,
      movespeed: 325,
      armor: 19.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 500,
      hpregen: 5.92,
      hpregenperlevel: 0.55,
      mpregen: 8.675,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: -0.06,
      attackspeedperlevel: 2.65
    }
  },
  {
    version: '6.24.1',
    id: 'Mordekaiser',
    top: 'top5',
    key: '82',
    name: 'Mordekaiser',
    title: 'the Iron Revenant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Mordekaiser.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg',
    blurb:
      '\'\'All things must die... and yet I live on.\'\'<br><br>The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery ...',
    info: {
      attack: 4,
      defense: 6,
      magic: 7,
      difficulty: 4
    },
    tags: ['Fighter'],
    partype: 'None',
    stats: {
      hp: 525,
      hpperlevel: 73,
      mp: 0,
      mpperlevel: 0,
      movespeed: 325,
      armor: 20,
      armorperlevel: 3.75,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 4,
      hpregenperlevel: 0.3,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61,
      attackdamageperlevel: 5,
      attackspeedoffset: 0.04,
      attackspeedperlevel: 2.2
    }
  },
  {
    version: '6.24.1',
    id: 'Shaco',
    top: 'top5',
    key: '35',
    name: 'Shaco',
    title: 'the Demon Jester',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Shaco.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
    blurb:
      'Most would say that death isn\'t funny. It isn\'t, unless you\'re Shaco - then it\'s hysterical. He is Valoran\'s first fully functioning homicidal comic; he jests until someone dies, and then he laughs. The figure that has come to be known as the Demon ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 6,
      difficulty: 9
    },
    tags: ['Assassin'],
    partype: 'MP',
    stats: {
      hp: 582.12,
      hpperlevel: 84,
      mp: 297.2,
      mpperlevel: 40,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.37,
      hpregenperlevel: 0.55,
      mpregen: 7.155,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.58,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Sona',
    top: 'top5',
    key: '37',
    name: 'Sona',
    title: 'Maven of the Strings',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Sona.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg',
    blurb:
      'Sona has no memories of her true parents. As an infant, she was found abandoned on the doorstep of an Ionian adoption house, nestled atop an ancient instrument in an exquisite case of unknown origins. She was an unusually well-behaved child, always ...',
    info: {
      attack: 5,
      defense: 2,
      magic: 8,
      difficulty: 4
    },
    tags: ['Support', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 482.36,
      hpperlevel: 77,
      mp: 340.6,
      mpperlevel: 45,
      movespeed: 325,
      armor: 20.544,
      armorperlevel: 3.3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 5.42,
      hpregenperlevel: 0.55,
      mpregen: 11.5,
      mpregenperlevel: 0.4,
      crit: 0,
      critperlevel: 0,
      attackdamage: 50.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.03,
      attackspeedperlevel: 2.3
    }
  }
];

const inputRoles = [
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  },
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  }
];
const outputRoles = [
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  },
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
];
const descRoles = [
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  },
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  }
];

const inputMaxLifeChampions = [
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  },
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  }
];
const outputMaxLifeChampions = [
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
];

const inputValueMaxLifeChampions = [572.2, 577.8, 561.2];
const outputValueMaxLifeChampions = 577.8;
const outputValueMinLifeChampions = 561.2;

require('../src/data.js');

describe('window.dataLOL', () => {
  it('debería ser una objeto', () => {
    expect(typeof window.lol).toBe('object');
  });
});

describe('lol.getFiveChampeons', () => {
  it('debería ser una función', () => {
    expect(typeof lol.getFiveChampeons).toBe('function');
  });
});

describe('lol.filterData', () => {
  it('debería ser una función', () => {
    expect(typeof lol.filterData).toBe('function');
  });
});

describe('lol.sortData', () => {
  it('debería ser una función', () => {
    expect(typeof lol.sortData).toBe('function');
  });
});

describe('lol.computeStats', () => {
  it('debería ser una función', () => {
    expect(typeof lol.computeStats).toBe('function');
  });
});

describe('lol.calculateStats', () => {
  it('debería ser una función', () => {
    expect(typeof lol.calculateStats).toBe('function');
  });
});

describe('lol.getFiveChampeons', () => {
  it('debería retornar un array de objectos que filtre por la propiedad top y arroje los cinco elegidos', () => {
    expect(lol.getFiveChampeons(inputChampions)).toEqual(outChampions);
  });
});

describe('lol.filterData', () => {
  it('debería retornar un array de objectos y filtrar por el tipo de rol del campeón y mostrar la img, nombre y titulo', () => {
    expect(lol.filterData(input, 'Mage')).toEqual(output);
  });
});

describe('lol.sortData', () => {
  it('debería retornar el array ordenado de forma ascendente según sus parametros', () => {
    expect(lol.sortData(inputRoles, 'name', '')).toEqual(outputRoles);
  });
});

describe('lol.sortData', () => {
  it('debería retornar el array ordenado de forma descendente según sus parametros', () => {
    expect(lol.sortData(inputRoles, 'name', 'Desc')).toEqual(descRoles);
  });
});

describe('lol.computeStats', () => {
  it('debería retornar el array de los campeones que tengan mayor vida', () => {
    expect(lol.computeStats(inputMaxLifeChampions, 'Max')).toEqual(outputMaxLifeChampions);
  });
});

describe('lol.calculateStats', () => {
  it('debería retornar el array de los campeones que tengan mayor vida', () => {
    expect(lol.calculateStats(inputValueMaxLifeChampions, 'Max')).toEqual(outputValueMaxLifeChampions);
  });
});

describe('lol.calculateStats', () => {
  it('debería retornar el array de los campeones que tengan mayor vida', () => {
    expect(lol.calculateStats(inputValueMaxLifeChampions, 'Min')).toEqual(outputValueMinLifeChampions);
  });
});
