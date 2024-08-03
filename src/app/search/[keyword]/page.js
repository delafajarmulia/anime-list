import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async({ params }) => {
    const { keyword } = params
    console.log(keyword)
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?key=${keyword}`
    )
    const searchAnime = await response.json()
    // console.log(searchAnime)

    return (
        <>
        {/* anime terpopuler */}
        <section>
            <Header title={`pencarian untuk ${keyword}...`}/>
            <AnimeList api={searchAnime}/>
        </section>
        </>
    );
}

export default Page