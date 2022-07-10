export class ShoppingListModel {
    id?: number | undefined
    name: string | undefined
    description: string | undefined
    weekNumber: number | undefined
    products?: Array<string> | undefined


    constructor(id: number, name: string, description: string, weekNumber: number, products: Array<string>) {
        this.id = id
        this.name = name
        this.description = description
        this.weekNumber = weekNumber
        this.products = products
    }
}

