import { dbContext } from "../db/DbContext.js"


class HousesService {
    async getAllHouses() {
        const houses = await dbContext.Houses.find().populate('creator', '-email')
        return houses
    }
    async searchHouse(searchQuery) {
        const houses = await dbContext.Houses.find(searchQuery)
        return {
            results: houses,

        }
    }
    async searchById(searchQuery) {
        const houses = await dbContext.Houses.findById(searchQuery)
        return {
            results: houses
        }
    }
}

export const housesService = new HousesService()