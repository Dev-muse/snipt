import {PrismaClient} from '@prisma/client'

export const db = new PrismaClient();


// to create new record:
// db.snippet.create({
//     data:{
//         title:'',
//         code:'const code = ()=>{console.log}'
//     }
// })