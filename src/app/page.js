import Search from "@/components/Search";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async() => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  // console.log(anime.data)

  return (
    <div>
      <div className="p-4 pb-2 pt-5 flex justify-between">
        <h1 className="md:text-2xl text-xl font-semibold">Most Popular</h1>
        <Link
          href='/popular'
          className="md:text-base text-sm md:pt-0.5 pt-1 underline hover::text-indigo-500 tansition-all">
            See All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
          return( 
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList 
                id={data.mal_id} 
                title={data.title} i
                images={data.images.webp.image_url}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home