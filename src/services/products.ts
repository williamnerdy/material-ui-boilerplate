import api from '../configs/api'

type Product = {
  id: number
  image: string
  description: string
  amount: number
}

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get('/products')
  return data
}
