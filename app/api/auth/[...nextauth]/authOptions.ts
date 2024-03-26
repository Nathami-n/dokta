import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'
import client from '@/app/utils/prismaClient'
import { AuthOptions } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'

export const authOptions: AuthOptions = {

    //define the adapter
    adapter:PrismaAdapter(client),
    //define the authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: "offline",
                    response_type: "code"
                }            
            }
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: {label: 'Email', type:'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid credentials')
                }
                const user = await client.user.findUnique({
                    where: {
                        email: credentials.email  
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

                if(!isCorrectPassword) {
                    throw new Error("Invalid credentials")
                }

                return user;
            }
            })
        ],

    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60, //lasts one day
    },

    pages: {
        signIn: '/'
    },
    secret:process.env.NEXTAUTH_SECRET
}