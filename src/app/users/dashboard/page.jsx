import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()

    const UnSignInUser = () => {
        return(
            <div className="text-color-primary">
                <h1>sign in dulu broww</h1>
            </div>
        )
    }
    const SignInUser = () => {
        return(
            <div className="text-color-primary">
                <h1>welcome, {user.name}</h1>
                <Image 
                    src={user.image}
                    alt="..."
                    width={100}
                    height={100}
                />
            </div>
        )
    }


    return user ? <SignInUser /> : <UnSignInUser />
}

export default Page