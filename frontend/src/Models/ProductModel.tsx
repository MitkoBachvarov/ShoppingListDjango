export class ProductModel {
    id?: number
    title: string | undefined
    description: string | undefined
  
    constructor(id: number, title: string, description: string) {
      this.id = id
      this.title = title;
      this.description = description;
    }
  }
