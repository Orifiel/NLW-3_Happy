import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import { Request, Response } from "express"

export default {
    //Buscando todos os Orfanatos cadastrados
    async index(request:Request, response:Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages)
    },
    
    // Buscando um orfanato especifico através do ID.
    async show(request:Request, response:Response) {
        const { id } = request.params
        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage)
    },

    // Criando um novo Orphanato
    async create(request:Request, response:Response) {
        const { 
            name,
            latitude, 
            longitude, 
            about, 
            instructions, 
            opening_hours,
            open_on_weekends
         } = request.body
    
         const orphanagesRepository =  getRepository(Orphanage);

         const requestImages = request.files as Express.Multer.File[];
         const images = requestImages.map(image => {
             return { path: image.filename }
         })

         const orphanages = orphanagesRepository.create({
            name,
            latitude, 
            longitude, 
            about, 
            instructions, 
            opening_hours,
            open_on_weekends,
            images
         })
    
         await orphanagesRepository.save(orphanages)
    
        return response.status(201).json(orphanages)
    }
    }
