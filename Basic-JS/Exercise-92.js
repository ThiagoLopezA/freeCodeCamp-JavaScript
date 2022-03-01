// Manipulating Complex Objects

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

let newAlbum = {
  artist: "Generic music band",
  title: "A song title",
  release_year: 2022,
  formats: ["CD", "8T"],
  gold: true,
};

myMusic.push(newAlbum);
