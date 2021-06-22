const films = [
  {
    id: '1',
    name: 'The Grand Budapest Hotel',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'aviator.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Cruella',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#cccccc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A live-action prequel feature film following a young Cruella de Vil.',
    rating: 7.4,
    scoresCount: 49000,
    director: 'Craig Gillespie',
    starring: ['Emma Stone', 'Emma Thompson', 'Joel Fry'],
    runTime: 134,
    genre: 'Comedy',
    released: 2021,
    isFavorite: false,
  },
  {
    id: '3',
    name: 'A Quiet Place Part II',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'bohemian-rhapsody.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#333333',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.',
    rating: 7.9,
    scoresCount: 22000,
    director: 'John Krasinski',
    starring: ['Emily Blunt', 'Millicent Simmonds', 'Cillian Murphy'],
    runTime: 97,
    genre: 'Horror',
    released: 2020,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Army of the Dead',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'dardjeeling-limited.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#444444',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.',
    rating: 5.8,
    scoresCount: 110000,
    director: 'Zack Snyder',
    starring: ['Dave Bautista', 'Ella Purnell', 'Ana de la Reguera'],
    runTime: 148,
    genre: 'Action',
    released: 2021,
    isFavorite: false,
  },
  {
    id: '5',
    name: 'The Conjuring: The Devil Made Me Do It',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'johnny-english.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#555555',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The Warrens investigate a murder that may be linked to a demonic possession.',
    rating: 6.5,
    scoresCount: 30000,
    director: 'Michael Chaves',
    starring: ['Patrick Wilson', 'Vera Farmiga', 'Ruairi O\'Connor'],
    runTime: 112,
    genre: 'Horror',
    released: 2021,
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Wrath of Man',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'macbeth.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#dcdcdc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.',
    rating: 7.2,
    scoresCount: 48000,
    director: 'Guy Ritchie',
    starring: ['Jason Statham', 'Holt McCallany', 'Josh Hartnett'],
    runTime: 119,
    genre: 'Action',
    released: 2021,
    isFavorite: false,
  },
  {
    id: '7',
    name: 'Old',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'midnight-special.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#cfcfcf',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.',
    rating: 5.2,
    scoresCount: 4000,
    director: 'M. Night Shyamalan',
    starring: ['Gael García Bernal', 'Vicky Krieps', 'Thomasin McKenzie'],
    runTime: 90,
    genre: 'Drama',
    released: 2021,
    isFavorite: false,
  },
  {
    id: '8',
    name: 'From the Book of Saw',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    previewImage: 'mindhunter.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#hhhhhh',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A criminal mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.',
    rating: 5.3,
    scoresCount: 17000,
    director: 'Darren Lynn Bousman',
    starring: ['Chris Rock', 'Samuel L. Jackson', 'Max Minghella'],
    runTime: 93,
    genre: 'Crime',
    released: 2021,
    isFavorite: false,
  },
];

export default films;
