const fs = require('fs')

class Contenedor {
    constructor(route) {
        this.route = route
    }

    async save(object) {
        const list = await this.getAll()

        if (list.length > 0 && list.some((el) => el.name === object.name)) {
            console.log('This product is already in the catalog');
            return
        }

        let newId
        if(list.length == 0) {
            newId = 1
        } else {
            newId = list[list.length - 1].id + 1
        }

        const newObject = { ...object, id: newId }

        list.push(newObject)

        try {
            await fs.promises.writeFile(this.route, JSON.stringify(list, null, 2))
            return newId
        } catch (error) {
            throw new Error(`It's impossible to save this product: ${error}`)
        }
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile(this.route, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    async getById(id) {
        try {
            const list = await this.getAll()
            return list.find(item => item.id === id) ?? null
        } catch (error) {
            throw new Error(`There is no product with that id: ${error}`)
        }
    }

    async deleteById(id) {
        const list = await this.getAll()

        const newList = list.filter(item => item.id != id)

        try {
            await fs.promises.writeFile(this.route, JSON.stringify(newList, null, 2))
        } catch (error) {
            throw new Error(`This product cannot be deleted: ${error}`)
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.route, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`You cannot delete all products: ${error}`)
        }
    }
}

module.exports = Contenedor