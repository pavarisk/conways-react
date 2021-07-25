import React, { useEffect, useState } from 'react'
import nextBoard from '../../lib'
import { createBoard, toggleCell, nextState } from '../action'
import { connect } from 'react-redux'

function Board (props) {
  const { board, dispatch } = props
  const size = 20

  useEffect(() => {
    dispatch(createBoard(size))
  }, [])

  function handleclick (cell, e) {
    e.preventDefault()
    dispatch(toggleCell(cell))
  }

  function nextBoardState () {
    if (nextBoard(board) !== board) {
      dispatch(nextState(nextBoard(board)))
      console.log('nextBoardState fired')
    } else return board
  }

  const play = play => setInterval(() => { nextBoardState() }, 500)

  function handleStop () {
    clearInterval(play)
    console.log('stop fired')
  }

  function resetBoard () {
    const resetBoard = board.map(cell => {
      cell.alive = false
      return cell
    })
    dispatch(nextState(resetBoard))
  }

  return (
    <>
      <div className='board'>
        {board.map((cell, i) => (
          <div key={i}>
            <div className={`cell alive-${cell.alive}`} onClick={e => handleclick(cell, e)}></div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={play}>play</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={nextBoardState}>next</button>
        <button onClick={resetBoard}>reset</button>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  console.log(state.board)
  return {
    board: state.board
  }
}

export default connect(mapStateToProps)(Board)
