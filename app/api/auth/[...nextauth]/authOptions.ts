import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions = {
    //define the authentication providers
    providers: [
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: {
                    label: 'Password',
                    type: 'password'
                },
                async authorize(credentials) {
                    //logic for authorization
                    if(!credentials === null) return;
                    const {email, password} = credentials;
                    //fetch user
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60, //lasts one day
    },

    pages: {
        signIn: '/signIn'
    }
}