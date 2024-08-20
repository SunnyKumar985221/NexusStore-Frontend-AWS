interface Image {
    public_id: string;
    url: string;
}

interface Shop {
    name: string;
    shop_avatar: Image;
    ratings: number;
}

interface Reviews {
    user: any,
    comment: string,
    ratings: number
}

export interface ProductData {
    id: number;
    category: string;
    name: string;
    description: string;
    image_Url: Image[]; // Updated to Image[] type
    shop: Shop; // Updated to Shop type
    price: number;
    discount_price: number;
    ratings: number;
    total_sell: number;
    stock: number;
    reviews: Reviews[]
}

export interface SignupForm {
    name: string | null,
    email: string | null,
    password: string | null,
    cpassword: string | null,
    file: File | null
}