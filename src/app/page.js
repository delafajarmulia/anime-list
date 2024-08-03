import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async() => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  // console.log(topAnime)

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