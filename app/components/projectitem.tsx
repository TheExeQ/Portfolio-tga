import Link from "next/link"
import Image from "next/image"

interface Props {
    title: string;
    studio: string;
    image: string;
}

export default function ProjectItem(props: Props): JSX.Element {

    const TitleToLink = (title: string): string => {
        let result = title;
        result = result.replaceAll(/[^a-zA-Z0-9 ]/g, '');
        result = result.replaceAll(' ', '').toLowerCase();
        return result;
    }

    const titleLink = TitleToLink(props.title);

    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7AB0A] to-[#b4800f]">
            <Image className="rounded-xl group-hover:opacity-10 w-full h-full" src={props.image} width={1920} height={1080} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                    {props.title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                    {props.studio}
                </p>
                <Link href={`/projects/${titleLink}`}>
                    <p className="py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer text-center">More Info</p>
                </Link>
            </div>
        </div>
    )
}