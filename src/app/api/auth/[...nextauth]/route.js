import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github"

export const authOption = { 
    providers: [  // kayak provider hp, ex: telkomsel, dll. kalo ini kayak github, fb,google, makanya pake siku
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}