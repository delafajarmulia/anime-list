import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"

const Page = async({ params: {id} }) => { // id itu berasal dari foldernya, sdgkan params udah dari next js
    const anime = await getAnimeResponse(`anime/${id}`)
    
    return(
        <div>
            <p className="text-color-primary text-center text-2xl pt-5">
                {anime.data.title} - {anime.data.year}
            </p>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center roundedd border border-color-primary p-2">
                    <h3>Rank</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center roundedd border border-color-primary p-2">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center roundedd border border-color-primary p-2">
                    <h3>Favorite</h3>
                    <p>{anime.data.favorites}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center roundedd border border-color-primary p-2">
                    <h3>Members</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center roundedd border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image 
                    src={anime.data.images.webp.image_url} 
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">
                    {anime.data.synopsis}
                </p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </div>
    )
}

export default Page