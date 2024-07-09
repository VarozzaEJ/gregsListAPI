import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router.get('', this.getAllHouses)
        this.router.get('/search', this.searchHouse)
        this.router.get('/IdSearch', this.searchById)
        this.router.use(Auth0Provider.getAuthorizedUserInfo)
        this.router.post('', this.createHouse)
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

    async searchHouse(request, response, next) {
        try {
            const searchQuery = request.query
            // console.log('👺👺👺', searchQuery);
            const houses = await housesService.searchHouse(searchQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async searchById(request, response, next) {
        try {
            const searchQuery = request.query
            const houses = await housesService.searchById(searchQuery)
            console.log('😈😈', request.query);
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(request, response, next) {
        try {
            const houseData = request.body
            const user = request.userInfo
            console.log('Creating House', user, houseData);
            houseData.creatorId = user.id
            console.log('Here is the creator Id', houseData.creatorId);
            const house = await housesService.createHouse(houseData)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
}