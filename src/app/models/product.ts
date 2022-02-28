export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id: number, name: string, description = '', price = 0, imageUrl = 'https://cdn12.wildcraft.com/web-images/preview/styles/N367C4UUJQ4/1567677872594/1.JPG') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
}