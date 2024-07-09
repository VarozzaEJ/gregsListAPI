import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router.get('', this.getAllHouses)
    }

    async getAllHouses(request, response, next) {
        try {
            const houses = await housesService.getAllHouses()
            response.send(houses)
            console.log(houses);
        } catch (error) {
            next(error)
        }
    }
}