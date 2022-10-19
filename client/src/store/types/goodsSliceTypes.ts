export interface IGood {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    type_id: string
}

export interface IGoodsState{
    goods: IGood[], 
    loading: false
}