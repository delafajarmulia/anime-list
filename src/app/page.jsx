import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async() => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

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
    </>
  );
}

export default Page