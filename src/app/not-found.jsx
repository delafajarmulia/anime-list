"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 flex-col">
                <FileSearch size={32} className="text-color-primary"/>
                <h3 className="text-color-primary text-3xl font-bold">
                    Not Found
                </h3>
                <Link href='/' className="text-color-accent hover:text-color-primary transition-all underline">Back</Link>
            </div>
        </div>
    )
}

export default NotFound