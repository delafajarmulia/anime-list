"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault() // mencegah perilaku default suatu elemen agar tidak terpicu, sehingga memungkinkan kontrol yang lebih besar atas alur aplikasi.
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }

    return(
        <div className="relative">
            <input 
                placeholder="cari anime" 
                className="w-full rounded p-2 mb-1.5 mt-1.5"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button 
                className="absolute top-3.5 end-1.5" 
                onClick={handleSearch}>
                    <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch