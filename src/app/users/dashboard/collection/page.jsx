import Header from "@/components/Dashboard/Header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return(
        <section className="mt-4 text-color-primary px-4">
            <Header title="My Collection"/>
            <div className="grid gap-4 sm:grod-cols-2 lg:grid-cols-4">
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image
                        src=""
                        alt=""
                        width={350}
                        height={350}
                        className="w-full"
                    />
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                        <h3 className="text-xl text-center">Anime Title</h3>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image
                        src=""
                        alt=""
                        width={350}
                        height={350}
                        className="w-full"
                    />
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                        <h3 className="text-xl text-center">Anime Title</h3>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image
                        src=""
                        alt=""
                        width={350}
                        height={350}
                        className="w-full"
                    />
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                        <h3 className="text-xl text-center">Anime Title</h3>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image
                        src=""
                        alt=""
                        width={350}
                        height={350}
                        className="w-full"
                    />
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                        <h3 className="text-xl text-center">Anime Title</h3>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page