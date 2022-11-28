import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    session : { 
        jwt : true
    },
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET,
        }),
    ],
    secret : process.env.JWT_SECRET,
    database : process.env.data
})