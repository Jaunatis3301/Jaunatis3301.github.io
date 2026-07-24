export type Post = {
  slug: string;
  number: string;
  category: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: { heading?: string; paragraphs: string[]; quote?: string }[];
};
const hero = "/images/distance-between-looking-and-seeing.png";
const studio = "/images/making-room-for-the-accidental.png";
export const posts: Post[] = [
  {
    slug: "distance-between-looking-and-seeing",
    number: "01",
    category: "Visual Essay",
    title: "The Distance Between Looking and Seeing",
    dek: "A field note on patient observation, imperfect memory, and the frames we keep long after a place has disappeared.",
    date: "July 18, 2026",
    readingTime: "9 min read",
    image: hero,
    imageAlt: "A solitary figure looking through tall station windows in warm late-afternoon light",
    featured: true,
    body: [
      {
        paragraphs: [
          "I used to believe that looking was simply a matter of keeping one’s eyes open. The camera taught me otherwise. Attention has a temperature, a duration, and a distance of its own.",
          "At a station between two cities, I watched the light move across a stone floor until the room seemed to reveal a second architecture—one made only of shadow and waiting.",
        ],
      },
      {
        heading: "The patient frame",
        paragraphs: [
          "A useful image rarely arrives when called. It gathers slowly at the edge of intention. The work is less about capture than about becoming available to what is already happening.",
        ],
        quote: "The frame becomes honest only after the photographer stops asking it to perform.",
      },
      {
        heading: "What remains",
        paragraphs: [
          "Months later, the timetable and destination were gone from memory. What remained was the measured light, a person turned away, and the strange calm of not needing the scene to explain itself.",
          "Perhaps seeing begins where evidence ends: in the small interval between what appeared and what we carried home.",
        ],
      },
    ],
  },
  {
    slug: "making-room-for-the-accidental",
    number: "02",
    category: "Process",
    title: "Making Room for the Accidental",
    dek: "A note on looseness, unfinished plans, and the moments that make creative work feel alive.",
    date: "July 4, 2026",
    readingTime: "7 min read",
    image: studio,
    imageAlt: "Film strips and notes on a wooden editing desk beside a moving curtain at blue hour",
    body: [
      {
        paragraphs: [
          "The plan is useful until it starts protecting us from the work. In the edit room, the scenes that survive are often the ones nobody knew to request.",
        ],
        quote: "Leave one door in the process unlocked.",
      },
      {
        heading: "An unfinished map",
        paragraphs: [
          "I now make shot lists with deliberate gaps. They are not omissions; they are invitations for weather, fatigue, strangers, and the intelligence of the location.",
          "Structure gives the accidental somewhere to land. Without it, surprise is noise. With too much of it, surprise never enters.",
        ],
      },
    ],
  },
  {
    slug: "the-blue-hour-is-not-blue",
    number: "03",
    category: "Color",
    title: "The Blue Hour Is Not Blue",
    dek: "How memory, weather, and exposure change the emotional truth of a scene.",
    date: "June 18, 2026",
    readingTime: "6 min read",
    image: hero,
    imageAlt:
      "Architecture and a lone observer held between warm interior stone and cool exterior sky",
    body: [
      {
        paragraphs: [
          "Blue hour is a name we give to a negotiation. The sky cools while every window answers with warmth, and the camera chooses which side to believe.",
        ],
        quote: "Color is not what the light was. It is what the scene needed us to remember.",
      },
      {
        heading: "A temperature of memory",
        paragraphs: [
          "In grading, neutrality is rarely neutral. A small shift toward amber can turn distance into longing; a trace of green can make the same room feel recently abandoned.",
          "The ethical question is not whether the color is accurate, but whether its departure from accuracy is conscious.",
        ],
      },
    ],
  },
  {
    slug: "what-we-leave-outside-the-frame",
    number: "04",
    category: "Conversation",
    title: "What We Leave Outside the Frame",
    dek: "A conversation about absence, editing, and the ethics of attention.",
    date: "May 30, 2026",
    readingTime: "11 min read",
    image: studio,
    imageAlt: "A quiet editing room with film material gathered beneath mixed warm and cool light",
    body: [
      {
        paragraphs: [
          "Every frame is an argument made by exclusion. To point the camera is to decide what matters now—and what will disappear without witness.",
        ],
        quote: "Editing is not the art of removal. It is the art of responsibility.",
      },
      {
        heading: "The unseen cut",
        paragraphs: [
          "We talked about the shots that felt beautiful but unearned, and the quieter images that held a truth the production had not planned for.",
          "Absence is never empty. It shapes the pressure around everything we keep.",
        ],
      },
    ],
  },
  {
    slug: "four-windows-on-a-slow-train",
    number: "05",
    category: "Field Note",
    title: "Four Windows on a Slow Train",
    dek: "Brief observations collected between cities.",
    date: "May 12, 2026",
    readingTime: "4 min read",
    image: hero,
    imageAlt: "Railway lines seen through a sequence of tall station windows",
    body: [
      {
        paragraphs: [
          "07:14. A town passes before I can read its name. Laundry lifts from a balcony as if waving to somebody on another train.",
          "09:02. Rain turns the window into an editor. Buildings dissolve; one yellow umbrella survives the cut.",
        ],
        quote: "Travel is a sequence of images that refuse to become a story.",
      },
      {
        heading: "Near arrival",
        paragraphs: [
          "The final window shows my own reflection layered over the outskirts. For a moment I am both inside the carriage and already outside it.",
        ],
      },
    ],
  },
];
export const featuredPost = posts.find((p) => p.featured)!;
export const categories = [
  "All",
  "Visual Essay",
  "Process",
  "Color",
  "Conversation",
  "Field Note",
] as const;
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
