// const testBoard = [
//   { col: 0, row: 0, alive: true },
//   { col: 0, row: 1, alive: true },
//   { col: 0, row: 2, alive: true },
//   { col: 1, row: 0, alive: false },
//   { col: 1, row: 1, alive: false },
//   { col: 1, row: 2, alive: false },
//   { col: 2, row: 0, alive: false },
//   { col: 2, row: 1, alive: false },
//   { col: 2, row: 2, alive: false }
// ]

// const testCell = size => (testBoard[size])

function nextBoard (board) {
  const oldBoard = board
  const newBoard = []
  oldBoard.map(cell => {
    const neighbours = getNeighbours(cell, board)
    newBoard.push(nextCellState(cell, neighbours))
  })

  return newBoard
}

function getNeighbours (cell, board) {
  const { row, col } = cell
  let allNeighbours = []

  const b = board.find(cells => cells.row === row + 1 && cells.col === col)
  const t = board.find(cells => cells.row === row - 1 && cells.col === col)
  const l = board.find(cells => cells.row === row && cells.col === col - 1)
  const r = board.find(cells => cells.row === row && cells.col === col + 1)
  const bl = board.find(cells => cells.row === row + 1 && cells.col === col - 1)
  const br = board.find(cells => cells.row === row + 1 && cells.col === col + 1)
  const tl = board.find(cells => cells.row === row - 1 && cells.col === col - 1)
  const tr = board.find(cells => cells.row === row - 1 && cells.col === col + 1)

  allNeighbours = [b, t, l, r, bl, br, tl, tr]

  const neighbours = allNeighbours.filter(neighbour => neighbour !== undefined)

  return neighbours
}

function nextCellState (cell, neighbours) {
  const aliveCells = neighbours.filter(neighbour => neighbour.alive === true)

  if (aliveCells.length === 3 && !cell.alive) {
    cell.alive = true
    return cell
  }

  if (cell.alive === true && aliveCells.length < 2) {
    cell.alive = false
    return cell
  }

  if (cell.alive === true && aliveCells.length > 3) {
    cell.alive = false
    return cell
  }

  return cell
}

module.exports = nextBoard
