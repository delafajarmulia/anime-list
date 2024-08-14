import { authUserSession } from "@/libs/auth-libs"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()

    // bang dea version
    // if(!user) redirect('/')

    // dela version
    // const UnSignInUser = () => {
    //     return(
    //         <div className="text-color-primary">
    //             <h1>sign in dulu broww</h1>
    //         </div>
    //     )
    // }

    // const SignInUser = () => {
    //     return(
    //         <div className="text-color-primary">
    //             <h1>welcome, {user.name}</h1>
    //             <Image
    //                 src={user.image}
    //                 alt="..."
    //                 width={100}
    //                 height={100}
    //             />
    //         </div>
    //     )
    // }

    // // dela version
    // return user ? <SignInUser /> : <UnSignInUser />

    return(
        <div className=" mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image
                src={user?.image}
                alt="..."
                width={100}
                height={100}
                className="py-2"
            />
            <div className="flex flex-wrap gap-4 py-8">
                <Link 
                    href="/users/dashboard/collection"
                    className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
                >
                    My Collection
                </Link>
                <Link 
                    href="/users/dashboard/comment"
                    className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )

    // bang dea version pake middleware
}

export default Page