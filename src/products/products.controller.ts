import { Controller, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
        ): any {
        const storedProductId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: storedProductId}
    }
}