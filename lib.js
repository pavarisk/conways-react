function createBoard (size) {
  return createArr(size).map(() => createArr(size, [{ alive: false }]))
}

function createArr (size, fill = null) {
  return new Array(size).fill(fill)
}

console.log(createBoard(10))
module.exports = createBoard
