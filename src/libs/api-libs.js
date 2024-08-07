export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resources, objectProperty) => {
    const response = await getAnimeResponse(resources)
    return response.data.flatMap(item => item[objectProperty]) // buat get data berdasarkan objectPropertynya
}

export const reproduce = (data, gap) => {
    const randNumberForRecommendation = (Math.floor(Math.random() * data.length - gap) + 1) // buat ambil random number recommendatition
    const randNumberForRecommendationLast = randNumberForRecommendation + gap

    const response = {
        data: data.slice(randNumberForRecommendation, randNumberForRecommendationLast)
    }
    return response
}