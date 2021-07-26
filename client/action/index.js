export const CREATE_BOARD = 'CREATE_BOARD'
export const TOGGLE_CELL = 'TOGGLE_CELL'
export const NEXT_BOARD = 'NEXT_BOARD'

export function createBoard (size) {
  return {
    type: CREATE_BOARD,
    size: size
  }
}

export function toggleCell (cell) {
  return {
    type: TOGGLE_CELL,
    cell: cell
  }
}

export function nextState (newBoard) {
  return {
    type: NEXT_BOARD,
    newBoard: newBoard
  }
}