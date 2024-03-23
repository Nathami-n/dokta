'use server'
import client from '@/app/utils/prismaClient'
import bcrypt from 'bcrypt'
import { FieldValues } from 'react-hook-form'

 export const createUser =  async (data: FieldValues) => {
    const {username, email, password} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        user_name: username,
        hashedPassword,
        email
    }
    
    const user = await client.user.create({
        data: {
            ...newUser
        }
    })

    const {hashedPassword: pass, ...rest} = user
    return {rest}
}