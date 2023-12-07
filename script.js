let knygos = [
  {
    isbn: 9786098233346,
    price: 7.99,
    year: 2006,
    title: "Bloga dukte",
    pagecount: 250,
    genre: ["drama", "family", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786098233391,
    price: 7.99,
    year: 2015,
    title: "Mergina kuria jis pazinojo",
    pagecount: 315,
    genre: ["romantic", "drama"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786099609324,
    price: 7.99,
    year: 2019,
    title: "Tapk ragana",
    pagecount: 150,
    genre: ["leisure", "family", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094792250,
    price: 6.99,
    year: 2007,
    title: "Sfera",
    pagecount: 450,
    genre: ["sci-fi", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094792335,
    price: 9.99,
    year: 2019,
    title: "Mes susitinkame cia",
    pagecount: 500,
    genre: ["sci-fi", "romantic", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273780,
    price: 7.99,
    year: 2019,
    title: "Sunaikinimas",
    pagecount: 509,
    genre: ["sci-fi"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786098233483,
    price: 12.99,
    year: 2018,
    title: "Artemide",
    pagecount: 199,
    genre: ["romantic", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273872,
    price: 4.99,
    year: 2015,
    title: "Fondas ir imperija",
    pagecount: 185,
    genre: ["sci-fi", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273902,
    price: 7.99,
    year: 2019,
    title: "Amzinybes fjordo pranasai",
    pagecount: 333,
    genre: ["science", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094442742,
    price: 5.99,
    year: 2004,
    title: "Bejegiai",
    pagecount: 777,
    genre: ["drama", "science"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094442940,
    price: 14.99,
    year: 2019,
    title: "Klajunai",
    pagecount: 172,
    genre: ["romantic", "family"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786090404386,
    price: 7.99,
    year: 2015,
    title: "Mergina, kuri pakliuvo i voratinkli",
    pagecount: 356,
    genre: ["leisure", "horror"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
];

for (let i = 0; i < knygos.length; i++) {
    const knyga = knygos[i];
    console.log(`${knyga.title}:`);
    for (const hero in knyga.heroes) {
      console.log(`    ${hero}: ${knyga.heroes[hero]}`);
    }
  }
