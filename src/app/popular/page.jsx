"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
      <HeaderMenu title={`Anime Terpopuler #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage = {setPage}
      />
    </div>
  )
}

export default Page