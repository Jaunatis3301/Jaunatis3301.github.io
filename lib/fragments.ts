export type Fragment = {
  id: string;
  date: string;
  place: string;
  time: string;
  text: string;
  image?: string;
  imageAlt?: string;
};

// Add, remove, or reorder entries here to manage the Fragments page.
export const fragments: Fragment[] = [
  {
    id: "wet-avenue",
    date: "July 21, 2026",
    place: "Beijing",
    time: "06:42",
    text: "The first bus turns a wet avenue into a moving strip of blue light.",
    image: "/images/covers/07-rain-window.png",
    imageAlt: "Rain-covered glass holding soft blue and violet city lights",
  },
  {
    id: "cinema-expression",
    date: "July 12, 2026",
    place: "Paris",
    time: "21:17",
    text: "Someone leaves a cinema carrying the expression of the final scene.",
  },
  {
    id: "station-clock",
    date: "July 2, 2026",
    place: "Berlin",
    time: "17:08",
    text: "The station clock is four minutes slow. Everybody beneath it appears to be waiting for a different future.",
    image: "/images/covers/02-night-train.png",
    imageAlt: "An empty late-night train carriage reflected in black rain-streaked windows",
  },
  {
    id: "blue-wall",
    date: "June 24, 2026",
    place: "Beijing",
    time: "14:31",
    text: "A blue wall changes color each time a cloud passes. The camera insists it is the same wall.",
  },
  {
    id: "unlocked-door",
    date: "June 9, 2026",
    place: "Edit room",
    time: "00:46",
    text: "Leave one door in the process unlocked. Surprise needs somewhere to enter.",
    image: "/images/covers/03-edit-room.png",
    imageAlt: "Film strips and editing equipment in a dark blue-violet studio",
  },
  {
    id: "empty-pool",
    date: "May 28, 2026",
    place: "Paris",
    time: "23:10",
    text: "An empty swimming pool sounds larger than a full one. Absence has its own acoustics.",
  },
  {
    id: "train-window",
    date: "May 12, 2026",
    place: "En route",
    time: "—",
    text: "A window, a reflection, then a landscape that belongs to neither side.",
  },
  {
    id: "winter-distance",
    date: "April 30, 2026",
    place: "Hebei",
    time: "05:58",
    text: "At this distance, the tree is not a subject. It is a measure of how much weather surrounds a life.",
    image: "/images/covers/06-winter-tree.png",
    imageAlt: "A solitary tree on a blue-black winter plain",
  },
  {
    id: "after-rain",
    date: "April 18, 2026",
    place: "Beijing",
    time: "22:03",
    text: "After rain, every street briefly becomes a second city—one built underneath the first.",
  },
];
