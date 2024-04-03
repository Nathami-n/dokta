'use server'
import client from '@/app/utils/prismaClient'
import bcrypt from 'bcrypt'
import type { FieldValues } from 'react-hook-form'
import {redirect} from 'next/navigation'
import { supabase } from '../utils/supabase'

 export const createUser =  async (data: FieldValues) => {
    const {username, email, password,isDoctor} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name: username as string,
        hashedPassword,
        email: email as string,
        isDoctor: isDoctor ? true : false
    }
    
    const user = await client.user.create({
        data: {
            ...newUser
        }
    })

    const {hashedPassword: pass, ...rest} = user
    return rest
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

    } catch(error) {
        return null;
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

    if(service === null && user?.isDoctor === false) {
        return redirect('/unverified')
     }
    if(service === null && user?.isDoctor === true) {
      const dokta =  await client.doctor.create({
            data: {
                patient_id: user?.id as string
            }
        })
       redirect(`/create/${dokta?.id}/service`)
    };
    if(service?.complete){
        const dokta =  await client.doctor.create({
            data: {
                patient_id: user?.id as string
            }
        })
       redirect(`/create/${dokta?.id}/service`)
    }

    //check for the description

    if(!service?.speciality && !service?.description && !service?.location && !service?.time_start && !service?.end_time && !service?.name ) {
       return redirect(`/create/${service?.id}/service`);
    }
    //check for the availabilty of the description
    if(service?.speciality && service?.description && !service?.time_start && !service?.end_time && !service?.name) {
       return redirect(`/create/${service?.id}/description`)
    }
    if(service?.speciality && service?.description  && !service?.time_start && !service?.end_time && !service?.name){
        return redirect(`/create/${service?.id}/description`)
    }

    if(service?.speciality && service?.description && service?.time_start && !service?.end_time && !service?.name ){
        return redirect(`/create/${service?.id}/description`)
    }
    
    if(service?.speciality && service?.description && service?.time_start && service?.end_time && !service?.name ){
        return redirect(`/create/${service?.id}/description`)
    }
    if(service?.speciality && service?.description  && service?.time_start && service?.end_time && service?.name && !service?.location ){
        return redirect(`/create/${service?.id}/location`)
    }
    if(service?.location){
        return redirect('/')
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
const name = formData.get('name') as string;
const mail = formData.get('email') as string;
const phone = formData.get('phone') as string;

const charges = formData.get('charges');
const description = formData.get('description') as string;

const docId = formData.get('docId') as string;

const time_start = formData.get('start') as string;
const end_time = formData.get("end") as string;
const  imageFile = formData.get('image') as File;

const {data} = await supabase.storage.from('Dokta').upload(`${imageFile.name}-${new Date().toISOString()}`, imageFile, {
    cacheControl:'259200',
    contentType:'image/*'
});

 //update the user
 const res =  await client.doctor.update({
    where: {
        id: docId
    },
    data: {
        mail: mail,
        phone: phone,
        charges: Number(charges),
        description: description,
        time_start: time_start,
        end_time: end_time,
        image: data?.path,
        name: name,  
    }
 });
return redirect(`/create/${docId}/location`)
}

export const createLocation =  async (formData: FormData) => {
    const docId = formData.get('docId') as string;
    const country = formData.get('country') as string;
    const data = await client.doctor.update({
        where:{
            id: docId,
        }, 
        data: {
            location: country,
            complete: true,
        }
    });
    return redirect('/');
}

export const redirectUserToDoctor = (formData: FormData) => {
    const id = formData.get('id') as string;
    redirect(`/doctor/${id}`);
}