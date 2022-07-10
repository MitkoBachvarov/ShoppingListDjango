export class ProductModel {
    id?: number
    name: string | undefined
    description: string | undefined
  
    constructor(id: number, name: string, description: string) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
