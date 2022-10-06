import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { LivrosMay } from "../entity/LivrosMay"

export class LivrosMayController {

    private userRepository = AppDataSource.getRepository(LivrosMay)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
    }

}