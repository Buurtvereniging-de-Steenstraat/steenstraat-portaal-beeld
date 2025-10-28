export interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  content: string;
  image?: string | null;
}

export const newsItems: NewsItem[] = [
  {
    id: 2,
    title: "Rabo Clubsupport",
    date: new Date().toLocaleString("nl-NL", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    author: "Buurtvereniging",
    // excerpt: "Dankzij jullie stemmen hebben we €208,73 opgehaald met de Rabo Clubsupport.",
    content: "Dankzij jullie stemmen hebben we €208,73 opgehaald met de Rabo Clubsupport. Bedankt voor jullie stemmen.",
    image: "/clubkas2025.jpg"
  },
  // {
  //   id: 1,
  //   title: "Buurtfeest 2024 was een groot succes!",
  //   date: "15 december 2024",
  //   author: "Buurtvereniging",
  //   excerpt: "Ons jaarlijkse buurtfeest heeft weer vele bewoners samen gebracht voor een gezellige dag vol activiteiten.",
  //   content: "Ons jaarlijkse buurtfeest heeft weer vele bewoners samen gebracht voor een gezellige dag vol activiteiten. Het was een prachtige dag met veel gezelligheid, spelletjes en lekker eten. We kijken terug op een zeer geslaagd evenement dat de banden in onze buurt verder heeft versterkt.",
  //   image: null
  // },
  // {
  //   id: 2,
  //   title: "Nieuwe buurtschoonmaak gepland",
  //   date: "8 december 2024",
  //   author: "Buurtvereniging",
  //   excerpt: "Op zaterdag 21 december organiseren we een grote buurtschoonmaak. Alle bewoners zijn welkom om mee te helpen.",
  //   content: "Op zaterdag 21 december organiseren we een grote buurtschoonmaak. Alle bewoners zijn welkom om mee te helpen. We verzamelen om 09:00 uur bij het buurthuis. Neem je eigen handschoenen en gereedschap mee. Na afloop is er koffie en thee voor alle deelnemers.",
  //   image: null
  // },
  // {
  //   id: 3,
  //   title: "Winteractiviteiten voor kinderen",
  //   date: "1 december 2024",
  //   author: "Buurtvereniging",
  //   excerpt: "Tijdens de kerstvakantie organiseren we leuke winteractiviteiten voor alle kinderen uit de buurt.",
  //   content: "Tijdens de kerstvakantie organiseren we leuke winteractiviteiten voor alle kinderen uit de buurt. Er zijn verschillende activiteiten gepland zoals knutselen, spelletjes en een speciale kerstmiddag. Houd de agenda in de gaten voor het volledige programma.",
  //   image: null
  // },
  {
    id: 1,
    title: "Rabo Clubkascampagne",
    date: "23 juni 2025",
    author: "Buurtvereniging",
    // excerpt: "Ook dit jaar hebben wij ons ingeschreven voor de Rabo Clubkascampagne. Het stemmen is van 1 t/m 23 september a.s. via de Rabo app.",
    content: "Ook dit jaar hebben wij ons ingeschreven voor de Rabo Clubkascampagne. Het stemmen is van 1 t/m 23 september a.s. via de Rabo app. Maar wist je dat je alleen kunt meestemmen als je lid bent van de Rabobank? Heb je wel een rekening bij de Rabobank, maar je bent nog geen lid? Maak jezelf dan snel lid, zodat je ook voor onze gezellige buurtvereniging kunt mee stemmen. Jouw stem is namelijk geld waard. Dank alvast",
    image: "/clubactie.jpg"
  }
]; 