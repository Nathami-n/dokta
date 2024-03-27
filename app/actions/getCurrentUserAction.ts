'use server'
import {getServerSession} from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'


//function to get the user session from next-auth
export async function getCurrentUserSession() {
    const ses = await getServerSession(authOptions);
    return ses;
}

export default async function getCurrentUser () {
    try {
        const session = await getCurrentUserSession();
        if(!session) {
            return null;
        }
        return session
    }catch(err: any) { 
        console.error(err);
    }
}