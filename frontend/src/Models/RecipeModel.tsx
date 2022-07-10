export class RecipeModel {
    id?: number
    name: string
    products: Array<RecipeProducts>

    constructor(id: number, name: string, products: Array<RecipeProducts>) {
        this.id = id
        this.name = name
        this.products = products
    }
}

export interface RecipeProducts {
    id?: number
    name: string
    recipeId: number
    amount: string
    availability: boolean
}
