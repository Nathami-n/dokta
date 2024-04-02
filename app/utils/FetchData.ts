import client from '@/app/utils/prismaClient'
export const fetchService = async (search:{filter?: string} | undefined) => {
 const services = await client?.doctor.findMany({
        where:{
        complete: true,
        speciality: search?.filter || undefined
        },
        select:{
            name: true,
            image: true,
            description: true,
            charges: true,
            location: true,
        }
 });

 return services;
}