export class ShoppingListModel {
    id?: number | undefined
    title: string | undefined
    description: string | undefined
    weekNumber: number | undefined
    products?: Array<string> | undefined


    constructor(id: number, title: string, description: string, weekNumber: number, products: Array<string>) {
        this.id = id
        this.title = title
        this.description = description
        this.weekNumber = weekNumber
        this.products = products
    }
}

