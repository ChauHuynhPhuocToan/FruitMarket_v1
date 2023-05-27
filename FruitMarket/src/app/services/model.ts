export interface CartItem{
    id: string,
    image: string[],
    text: string,
    price: number,
    quantity: number,
    totalPrice: number
}

export interface CartData{
    items: CartItem[],
    subtotal: number,
    total: number
}

export interface ProductItem{
    id: string,
    image: string[],
    text: string,
    price: number,
    quantity: number
}