"use client"

const ColllectionBtn = ({ anime_mal_id, user_email }) => {
    const handleCollection = async() => {
        event.preventDefault()
        alert('test')
    }

    return(
        <button
            onClick={handleCollection}
            className="px-2 py-1 bg-color-accent rounded"
        >
            Add to Collection
        </button>
    )
}

export default ColllectionBtn