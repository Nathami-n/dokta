'use server'
import client from '@/app/utils/prismaClient'
import bcrypt from 'bcrypt'
import type { FieldValues } from 'react-hook-form'
import {redirect} from 'next/navigation'
import { supabase } from '../utils/supabase'

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

        const {hashedPassword, ...rest} = retrievedUser;
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
    const service = await client.doctor.findFirst({
        where:{
            patient_id: user?.id
        },
        orderBy: [
            {
                patient_id: 'desc'
            }
        ]
    })

    if(service === null) {
      const dokta =  await client.doctor.create({
            data: {
                patient_id: user?.id as string
            }
        })
       redirect(`/create/${dokta?.id}/service`)
    }
    //check for the description

    if(!service.speciality && !service.description && !service.location && !service.time_start && !service.end_time && !service.name) {
       return redirect(`/create/${service?.id}/service`);
    }
    //check for the availabilty of the description
    if(service.speciality && !service.description) {
       return redirect(`/create/${service?.id}/description`)
    }
} 

//create speciality
export const createDoctorSpeciality = async (formData: FormData) => {
    const speciality = formData.get("speciality");
    const id = formData.get("id");
    const res = await client.doctor.update({
        data: {
            speciality: speciality as string
        },
        where: {
            id: id as string
        }
    })
    return redirect(`/create/${res?.id}/description`);
}

//update the doctor services
export const createDoctorDescription = async (formData: FormData) => {
const name = formData.get('name');
const mail = formData.get('email');
const phone = formData.get('phone')

const charges = Number(formData.get('charges'))
const description = formData.get('description')

const time_start = formData.get('start');
const end_time = formData.get("end");
const  imageFile = formData.get('image') as File;

const {data} = await supabase.storage.from('Dokta').upload(`${imageFile.name}-${new Date().toISOString()}`, imageFile);


}