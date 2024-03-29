'use server'
import client from '@/app/utils/prismaClient'
import bcrypt from 'bcrypt'
import type { FieldValues } from 'react-hook-form'
import {redirect} from 'next/navigation'

 export const createUser =  async (data: FieldValues) => {
    const {username, email, password} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name: username as string,
        hashedPassword,
        email: email as string
    }
    
    const user = await client.user.create({
        data: {
            ...newUser
        }
    })

    const {hashedPassword: pass, ...rest} = user
    return {rest}
};

export const validateUser = async (data:FieldValues) => {

    const {email, password} = data;
    try {
        const retrievedUser = await client.user.findUnique({
            where: {
                email: email,
            }
        })
        if(!retrievedUser) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, retrievedUser?.hashedPassword);
        if(!isPasswordValid) {
            return null;
        }

        const {hashedPassword, ...rest} = retrievedUser.toObject();
        return rest;

    } catch {

    }
};

export const CreateService = async (data: FieldValues) => {
    const {email} = data;
    //get user
    const user = await client.user.findUnique({
        where: {
            email: email as string
        }
    })

    //get doctor
    const service = await client.doctor.findMany({
        where:{
            patient_id: user?.id
        },
        orderBy: [
            {
                patient_id: 'desc'
            }
        ]
    })

    if(service.length === 0) {
      const dokta =   await client.doctor.create({
            data: {
                patient_id: user?.id as string
            }
        })
       redirect(`/create/${dokta?.id}/service`)
    }

} 