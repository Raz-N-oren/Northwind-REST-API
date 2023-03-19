import dal from "../2-utils/dal";
import ProductModel from "../4-models/product-model";

async function getAllProducts(): Promise<ProductModel[]> {

    // Creating the query:
    const sql = `
    SELECT ProductID AS id,
        ProductName AS name,
        UnitPrice AS price,
        UnitsInStock AS stock
    FROM products
    `;

    // Execute:
    const products = await dal.execute(sql);

    return products;
}

export default{
    getAllProducts
}