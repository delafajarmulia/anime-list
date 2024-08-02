import Image from "next/image"
import Link from "next/link"

const AnimeList = ({id, title, images}) => {
    return(
        <Link href={`/${id}`} className="cursor-pointer">
            <Image 
                src={images}
                alt="anime image"
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-sm p-4">{title}</h3>
        </Link>
    )
}

export default AnimeList