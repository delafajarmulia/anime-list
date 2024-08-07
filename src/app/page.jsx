import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async() => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry") // untuk penyesuian ketika nanti fetch di animmelist
  recommendedAnime = reproduce(recommendedAnime, 8) // buat get random anime
  
  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header 
          title='Most Popular' 
          linkTitle='See All' 
          linkHref='/popular'
        />
        <AnimeList api={topAnime}/>
      </section>
      {/* anime rekomendasi */}
      <section>
        <Header 
          title='Recommendation' 
        />
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  );
}

export default Page