import Project, { ProjectProps } from "../../components/project";

const projectProp: ProjectProps = {
  title: "Bard Knight",
  studio: "Grump Studios",

  genre: "Platformer",
  platform: "Windows",
  productionTime: "8 weeks (50%)",
  teamSize: "15",
  contributions: ["Player", "Moving Platforms"],

  description: (
    <div>
      My fourth project at The Game Assembly was a 2.5D platformer that was
      unlike anything I had worked on before. The game was called "Bard Knight"
      and it was about a knight who had to collect musical instruments and
      traverse through levels to complete his songs. <br />
      <br />
      What made this project unique was that we got the chance to collaborate
      with students from a music school called Östra Grevie. This collaboration
      allowed us to incorporate music into the gameplay in a way that was both
      fun and educational.
    </div>
  ),
  trailer: "https://www.youtube.com/embed/d5nEUgpLKEA?si=LwRRMlN3CPlqMmTF",
  poster: "/assets/projects/bardknight/bardknight.png",

  team: [
    // SP
    {
      name: "Casper Bengtsson",
      role: "SP",
      website: "https://www.casperbengtsson.com/",
    },
    {
      name: "Andréas Isaksson",
      role: "SP",
      website: "https://www.andreasisaksson.com/",
    },
    {
      name: "Ivar Jönsson",
      role: "SP",
      website: "https://www.ivarjonsson.com/",
    },
    {
      name: "Samuel Ryberg",
      role: "SP",
      website: "https://www.samuelryberg.com/",
    },
    {
      name: "Mateusz Salaga",
      role: "SP",
      website: "https://www.mateuszsalaga.com/",
    },
    // SG
    {
      name: "David Bohlin",
      role: "SG",
      website: "https://david_bohlin.artstation.com/",
    },
    {
      name: "Simon Grefbäck",
      role: "SG",
      website: "https://simongrefback.artstation.com/",
    },
    {
      name: "Mirjam Hildahl",
      role: "SG",
      website: "https://confusedswedee.artstation.com/",
    },
    // SA
    {
      name: "Jonas Berggren",
      role: "SA",
      website: "https://jonasbanimation.portfoliobox.net/",
    },
    {
      name: "Daniel Fornell",
      role: "SA",
      website: "http://www.danielfornell.com/",
    },
    {
      name: "Hugo Jansson",
      role: "SA",
      website: "https://hugojansson.portfoliobox.net/",
    },
    // LD
    {
      name: "Christoffer Carlsvärd",
      role: "LD",
      website: "https://carlsvard.wixsite.com/portfolio",
    },
    {
      name: "Christoffer Janbris",
      role: "LD",
      website: "https://christofferjanbris.wixsite.com/portfolio",
    },
    // ÖG
    {
      name: "Alexander Eggers",
      role: "ÖG",
      website: "",
    },
    {
      name: "Nikolaus Harryson",
      role: "ÖG",
      website: "",
    },
  ],

  containers: [
    {
      title: "Player Movement",
      video: "https://www.youtube.com/embed/tHaz97BsMV4?si=q8PyB-gUaUKkQGBh",
      poster: "",
    },
    {
      title: "Moving Platforms",
      video: "https://www.youtube.com/embed/34auqhuaVMs?si=Hq3mxPgzGMFPyFNX",
      poster: "",
    },
  ],
};

export default function Projects(): JSX.Element {
  return (
    <div className="w-full">
      <Project {...projectProp} />
    </div>
  );
}
