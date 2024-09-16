"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 flex-col">
                <FileSearch size={32} className="text-color-primary"/>
                <h3 className="text-color-primary text-3xl font-bold">
                    Not Found
                </h3>
                <button onClick={() => router.back()} className="text-color-accent hover:text-color-primary transition-all underline">Back</button>
            </div>
        </div>
    )
}

export default NotFound