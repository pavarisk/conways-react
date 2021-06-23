import React from 'react'
import { createBoard } from '../../lib'

const size = 10
const board = createBoard(size)

function Board () {
  return (
    <div className="container">
      {board.map((row) => {
        row.forEach((cell) => {
          <div>
            <h1>{cell.alive}</h1>
          </div>
        })
      })}
    </div>
  )
}

export default Board
