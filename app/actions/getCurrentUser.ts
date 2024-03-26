import {getServerSession} from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import client from '../utils/prismaClient'

//function to get the user session from next-auth
export async function getCurrentUserSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser () {
    try {
        const session = await getCurrentUserSession();
        if(!session?.user?.email) {
            return null;
        }

        const currentUser = await client.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });
        if (!currentUser) {
            return null;
        }
    }catch(err: any) {
        return null;
    }
}