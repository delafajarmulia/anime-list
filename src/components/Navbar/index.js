import Link from "next/link"

const Navbar = () => {
    return(
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2 mx-2">
                <Link 
                    href='/' 
                    className="font-bold text-white text-2xl">
                        DelAnimeList
                </Link>
                <input 
                    placeholder="cari anime" 
                    className="rounded p-1 mb-1.5 mt-1.5"
                />
            </div>
        </header>
    )
}

export default Navbar