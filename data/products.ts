export type Product = {
    id: string;
    name: string;
    description: string;
    imageName: string;
    isAvailable: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Product #1",
        description: "Product #1 is a great product.",
        imageName: "placeholder.png",
        isAvailable: true,
    },
    {
        id: "2",
        name: "Product #2",
        description: "Product #2 is a great product.",
        imageName: "placeholder.png",
        isAvailable: false,
    },
    {
        id: "3",
        name: "Product #3",
        description: "Product #3 is a great product.",
        imageName: "placeholder.png",
        isAvailable: true,
    },
    {
        id: "4",
        name: "Product #4",
        description: "Product #4 is a great product.",
        imageName: "placeholder.png",
        isAvailable: false,
    }
]