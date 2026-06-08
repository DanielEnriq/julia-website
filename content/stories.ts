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
      id: "afinity-grad",
      title: "The fight for affinity graduations",
      outlet: "Washington Square News",
      role: "Culture Editor",
      date: "2026-04-30",
      url: "https://nyunews.com/underthearch/graduation/2026/04/30/affinity-graduation/",
      image: "/images/affinity.jpeg",
      dek:
        "After NYU’s abrupt cancellation of affinity graduations in February, students quickly mobilized to reverse the university’s decision.",
      highlight:
        "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
      topics: ["criminal justice", "urban policy", "housing"],
    },
    {
    id: "personal-essay",
    title: "You cannot be Asian American without being against ICE",
    outlet: "Washington Square News",
    role: "Culture Editor",
    date: "2026-02-11",
    url: "https://nyunews.com/culture/iequity/2026/02/11/asian-american-identity-ice/",
    image: "/images/culture-corky-lee.jpg",
    dek:
      "“Asian American” is not just a label — it’s a political commitment against the forces of racism, capitalism and imperialism.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["criminal justice", "urban policy", "housing"],
  },
  {
    id: "borough-based-jails",
    title: "A precarious promise: What the tallest jail in the world means for those who live next to it",
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
    title: "“A minefield of access barriers”: Transportation for New Yorkers with disabilities",
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
    title: "The NYU students behind Mamdani’s historic win",
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
      id: "identity-bookstores",
      title: "5 identity-based bookstores to explore",
      outlet: "Washington Square News",
      role: "Contributing Writer",
      date: "2024-11-18",
      url: "https://nyunews.com/culture/iequity/2024/11/18/bookstores/",
      image: "/images/bookstores.jpg",
      dek:
        "Skip the corporate chains and flip through the unique shelves of five bookstores focused on showcasing the stories of marginalized groups.",
      highlight:
        "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
      topics: ["criminal justice", "urban policy", "housing"],
    },
    {
    id: "trans-bookstores",
    title:
      "‘A Space for Everyone I Love’: This Summer Brings the Hudson Valley’s First Black Trans-Owned Bookstore",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2026-04-06",
    url: "https://wjffradio.org/a-space-for-everyone-i-love-this-summer-brings-the-hudson-valleys-first-black-trans-owned-bookstore/",
    image: "/images/trans-bookstores.jpeg",
    dek:
      "Founder Awa-Moon Barnett envisions her new mobile bookshop as a pathway for increasing literacy and community organizing in the region.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
    {
    id: "no-justice",
    title:
      "‘There’s no justice’: New York introduces bill to increase oversight on body scanners in state prisons",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2026-04-06",
    url: "https://wjffradio.org/theres-no-justice-new-york-introduces-bill-to-increase-oversight-on-body-scanners-in-state-prisons/",
    image: "/images/no-justice-photo.jpg",
    dek:
      "The state bill follows hundreds of women coming out in the last year about being turned away for body scanners flagging menstrual products as contraband.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
    {
    id: "nonprofit-libraries",
    title:
      "Nonprofit Libraries No Longer Able to Process Passport Applications",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2026-03-19",
    url: "https://wjffradio.org/nonprofit-libraries-no-longer-able-to-process-passport-applications/",
    image: "/images/library-passport-photo.jpg",
    dek:
      "Making up almost half of New York’s libraries, nonprofit libraries had been able to process passport applications for decades until now.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
  {
    id: "ice-story",
    title:
      "From Slave Patrols to ICE: Scholars Say America’s Immigration Crackdown Has Deep Roots",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2026-03-02",
    url: "https://wjffradio.org/ice-is-a-product-of-an-american-history-of-violence/",
    image: "/images/ICE-protest.jpg",
    dek:
      "The rise in ICE violence against immigrant communities calls back to American history.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
    {
    id: "prison-books",
    title:
      "How a Local Nonprofit is Bringing Books to Prisons in New York",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2026-08-11",
    url: "https://wjffradio.org/how-a-local-nonprofit-is-bringing-books-to-prisons-in-new-york/",
    image: "/images/prison-books.jpg",
    dek:
      "The Prison Books Project is partnering with local bookstores in the Hudson Valley to increase access to books in state prisons.",
    highlight:
      "These are the first few lines of the story, this is what it would look like if you hover over each card. For example, this is random text....",
    topics: ["healthcare", "economics", "community"],
  },
  {
    id: "loved-ones-of-incarcerated-individuals",
    title:
      "‘They Treat Us Like Inmates’: Loved Ones of Incarcerated Individuals Cite Uncertainty and Powerlessness Navigating the System",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-09-04",
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
    title: "Understaffed or Overpopulated?: Looking Inside New York’s Prisons Post-Strike",
    outlet: "NPR Radio Catskill",
    role: "Reporter & Producer",
    date: "2025-08-26",
    url: "https://wjffradio.org/understaffed-or-overpopulated-looking-inside-new-yorks-prisons-post-strike/",
    image: "/images/catskill-prisons.jpg",
    dek:
      "Since the correctional officers’ strike, incarcerated New Yorkers are struggling amidst frequent lockdowns, an absence in programming and the summer heat.",
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

/*/
Stories to put on website: 	
  •	“The fight for affinity graduations.” Washington Square News, 30 Apr. 2026.
	•	“‘A Space for Everyone I Love’: This Summer Brings the Hudson Valley’s First Black Trans-Owned Bookstore.” Radio Catskill, 30 Apr. 2026.
	•	“5 identity-based bookstores to explore.” Washington Square News, 18 Nov. 2024.
*/
