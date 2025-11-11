import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload
      if (state.itens.find((p) => p.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload
      if (!state.favoritos.find((p) => p.id === product.id)) {
        state.favoritos.push(product)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
