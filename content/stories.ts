export type Story = {
  id: string;

  title: string;
  outlet: string;
  role?: string;
  date: string;

  url: string;
  image: string;

  dek: string;
  highlight: string;
  topics?: string[];
};

const DEFAULT_IMAGE = "/images/portrait.jpg";

export const stories: Story[] = [
  {
    id: "borough-based-jails",
    title: "A Precarious Promise: What the Tallest Jail in the World Means for Those Who Live Next to It",
    outlet: "Washington Square News",
    role: "Culture Editor",
    date: "2025-09-17",
    url: "https://nyunews.com/2025/09/17/culture/iequity/borough-based-jails/",
    image: "/images/culture-iequity-boroughjails.jpg",
    dek:
      "As New York City finally closes Rikers Island, its plan to build four new jails — two of which are within minutes of NYU dorms — has not been without criticism.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["criminal justice", "urban policy", "housing"],
  },

  {
    id: "transportation-accessibility",
    title: "“A Minefield of Access Barriers”: Transportation for New Yorkers With Disabilities",
    outlet: "Washington Square News",
    role: "Culture Editor",
    date: "2025-10-06",
    url: "https://nyunews.com/underthearch/commuter/2025/10/6/transportation-accessibility/",
    image: "/images/Accesibility-Elevator.jpg",
    dek:
      "Despite New York City’s robust network of public transportation, residents with disabilities face everyday barriers in getting around.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["disability", "transportation", "infrastructure"],
  },

  {
    id: "mamdani-campaign",
    title: "The NYU Students Behind Mamdani’s Historic Win",
    outlet: "Washington Square News",
    role: "Culture Editor",
    date: "2025-11-19",
    url: "https://nyunews.com/culture/iequity/2025/11/19/students-behind-mamdani/",
    image: "/images/culture-iequity-students-Zohran-1200x800.jpg",
    dek:
      "Students who helped build Zohran Mamdani’s mayoral campaign now plan to carry the momentum through his tenure.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["student activism", "politics", "organizing"],
  },
  {
    id: "tiny-grains",
    title: "‘Tiny Grains’ is an emotional and intimate time capsule of Manhattan’s Chinatown",
    outlet: "Washington Square News",
    role: "Culture Editor",
    date: "2025-10-29",
    url: "https://nyunews.com/arts/visual/2024/10/29/tiny-grains/",
    image: "/images/tiny-grains.jpg",
    dek:
      "Pearl River Mart’s latest exhibition provides a snapshot of the Chinatown community’s perseverance during the pandemic.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["student activism", "politics", "organizing"],
  },
  {
    id: "loved-ones-of-incarcerated-individuals",
    title:
      "‘They Treat Us Like Inmates’: Loved Ones of Incarcerated Individuals Cite Uncertainty and Powerlessness Navigating the System",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-08-04",
    url: "https://wjffradio.org/they-treat-us-like-inmates-loved-ones-of-incarcerated-individuals-cite-uncertainty-and-powerlessness-navigating-the-system/",
    image: "/images/loved-ones.jpg",
    dek:
      "Families of incarcerated individuals are facing little-to-no support within the criminal legal system. ",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },


  {
    id: "prisons-post-strike",
    title: "Understaffed or Overpopulated? Looking Inside New York’s Prisons Post-Strike",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-08-26",
    url: "https://wjffradio.org/understaffed-or-overpopulated-looking-inside-new-yorks-prisons-post-strike/",
    image: "/images/catskill-prisons.jpg",
    dek:
      "Since the correctional officers’ strike, incarcerated individuals are facing frequent lockdowns, absences of programming, and the summer heat.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["incarceration", "labor", "public institutions"],
  },


  {
    id: "non-profit",
    title:
      "How an Indigenous-Led Non-Profit is Challenging the Hudson Valley’s Artistic Legacy",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-07-15",
    url: "https://wjffradio.org/forge-project-how-an-indigenous-led-non-profit-is-challenging-the-hudson-valleys-artistic-legacy/",
    image: "/images/non-profit.jpg",
    dek:
      "The Forge Project strives to support contemporary Indigenous artists while raising questions about the colonial histories of Western art.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
    {
    id: "local-pharmacies",
    title:
      "‘The System Is So Fundamentally Broken’: Local Pharmacies Confront Closures and Prescription Cuts",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-07-09",
    url: "https://wjffradio.org/the-system-is-so-fundamentally-broken-local-pharmacies-are-increasingly-having-to-cut-prescriptions-and-close-their-doors/",
    image: "/images/catskill-pharmacies.jpg",
    dek:
      "Local pharmacies are closing at increasing rates across the country and cite PBMs as the culprit for significant profit losses.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },

];