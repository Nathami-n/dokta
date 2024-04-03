import {PrismaClient} from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}
declare global {
    var clientGlobal: PrismaClient | ReturnType<typeof prismaClientSingleton> 
}

const client = globalThis.clientGlobal ?? prismaClientSingleton();

export default client;

if (process.env.NODE_ENV !== 'production') globalThis.clientGlobal = client; 