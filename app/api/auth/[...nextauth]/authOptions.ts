import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import client from '@/app/utils/prismaClient'

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
                    //find user
                    const userFromDb = await client.user.findFirst({
                        where: {
                            email: email as string
                        }
                    });

                    //compare password with one in the database

                    if(userFromDb && bcrypt.compareSync(password, userFromDb?.hashedPassword)) {
                        const {hashedPassword, ...rest} = userFromDb;
                        return rest;
                    } else {
                        throw new Error("invalid credentials")
                    }
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