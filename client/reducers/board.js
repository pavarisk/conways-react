import { CREATE_BOARD, TOGGLE_CELL, NEXT_BOARD } from '../action/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      var board = []
      for (var i = 0; i < action.size; i++) {
        for (var j = 0; j < action.size; j++) {
          board.push({ row: i, col: j, alive: false })
        }
      }
      return board
    case TOGGLE_CELL:
      var found = state.find(cell => cell.row === action.cell.row && cell.col === action.cell.col)
      found.alive = !found.alive
      var newState = [...state]
      return newState
    case NEXT_BOARD:
      return action.newBoard
    default:
      return state
  }
}

export default reducer
