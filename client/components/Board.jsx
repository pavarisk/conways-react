import React, { useEffect } from 'react'
// import { createBoard } from '../../lib'
import { createBoard, toggleCell } from '../action'
import { connect } from 'react-redux'

function Board (props) {
  const { board, dispatch } = props
  const size = 10

  useEffect(() => {
    dispatch(createBoard(size))
  }, [])

  function handleclick (cell, e) {
    e.preventDefault()
    dispatch(toggleCell(cell))
    console.log(board)
  }
  return (
    <div className='board'>
      {board.map((cell, i) => (
        <div key={i}>
          <div className={`cell alive-${cell.alive}`} onClick={e => handleclick(cell, e)}>{cell.row},{cell.col}</div>
        </div>
      ))}
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    board: state.board
  }
}

export default connect(mapStateToProps)(Board)
