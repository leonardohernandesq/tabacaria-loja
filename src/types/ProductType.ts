export type ProductType = {
    id: number;
    title: string;
    slug: string;
    price: number;
    short_description:  string;
    description: string;
    image: string;
    brand: string;
    model: string;
    colors: Array<string>;
    defaultCategory: {nome: string, image: string};
    categories: Array<string>;
    quantity: number;
    status: string;
    created_at: Date;
    updated_at: null | Date;
    deleted_at: null | Date;
    height: number;
    width: number;
    length: number;
    weight: number;
    material: string;
    country: string;
    products_related: Array<number>;
}