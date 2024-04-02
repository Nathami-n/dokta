import client from '@/app/utils/prismaClient'
export const fetchService = async () => {
 const services = await client?.doctor.findMany({
        where:{
        complete: true,
        },
        select:{
            name: true,
            image: true,
            description: true,
            charges: true
        }
 });

 return services;
}