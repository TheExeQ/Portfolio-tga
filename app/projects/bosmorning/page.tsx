import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Bo's Morning`,
    studio: 'Sad Centaur',

    genre: "Adventure",
    platform: "Windows",
    productionTime: "8 weeks (50%)",
    teamSize: "13",
    contributions: ["Rabbit Enemy", "Hedgehog Enemy", "Bird Enemy", "Frog Enemy"],

    description:
        (
            <div>
                My fifth project at The Game Assembly was an adventure top-down game called "Bo's Morning."
                The game revolved around a farmer named Bo, who had to save his farm from a plague that had caused all animals and plants in the area to become evil.<br /><br />
                In order to save his farm, Bo had to eliminate the infectious flower that was causing the plague.
                The game design involved a lot of creativity, as we had to think about how to create an immersive world for the player to explore
            </div>
        ),
    trailer: "/assets/projects/morningofbo/bo.mp4",
    poster: "/assets/projects/morningofbo/bo.png",

    team: [
        // SP
        {
            name: "Benjamin Ek",
            role: "SP",
            website: "https://www.benjaminek.com/"
        },
        {
            name: "Niklas Fredriksson",
            role: "SP",
            website: "https://www.niklasfredriksson.com/"
        },
        {
            name: "Niklas Jakobsen",
            role: "SP",
            website: "https://www.niklasjakobsen.dev/"
        },
        {
            name: "Neo Nemeth",
            role: "SP",
            website: "https://www.neonemeth.net/"
        },
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        // SG
        {
            name: "Victor Ek",
            role: "SG",
            website: "https://victorek.artstation.com/"
        },
        {
            name: "Elin Ekelöw",
            role: "SG",
            website: "https://elinekelow.artstation.com/"
        },
        {
            name: "Albin Gunther",
            role: "SG",
            website: "https://albingunther.artstation.com/"
        },
        // SA
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
        },
        {
            name: "Daniel Fornell",
            role: "SA",
            website: "https://danielnagy.portfoliobox.net/"
        },
        // LD
        {
            name: "Vanessa Grundström",
            role: "LD",
            website: "https://www.grundstromdesign.com/"
        },
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: ""
        },
        {
            name: "Linus Lindborg-Persson",
            role: "LD",
            website: ""
        },
    ],

    containers: [
        {
            title: "Rabbit",
            video: "/assets/projects/morningofbo/1.mp4",
            poster: ""
        },
        {
            title: "Hedgehog",
            video: "/assets/projects/morningofbo/2.mp4",
            poster: ""
        },
        {
            title: "Bird",
            video: "/assets/projects/morningofbo/3.mp4",
            poster: ""
        },
        {
            title: "Frog",
            video: "/assets/projects/morningofbo/4.mp4",
            poster: ""
        }
    ]
}

export default function Projects(): JSX.Element {
    return (
        <div className="w-full">
            <Project {...projectProp} />
        </div>
    )
}