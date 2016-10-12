import React, { Component } from 'react'

function generateSnils() {
  const rnd = Math.floor(Math.random() * 999999999)
  const number = leftPad('' + rnd, 9, '0')

  let sum = number
    .split('')
    .map((val, i) => parseInt(val) * (9 - i))
    .reduce((a, b) => a + b)

  if (sum > 101) {
    sum = sum % 101
  }

  const checkSum = sum == 100 || sum == 101 ? '00' : leftPad('' + sum, 2, '0')
  return number + checkSum
}

function leftPad(str, len, ch) {
  const length = len - str.length + 1
  return length > 0 ? new Array(length).join(ch) + str : str
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {number: generateSnils()}
  }

  render() {
    return (
      <div>
        <h1>Генератор валидных номеров СНИЛС</h1>
        <h2>{this.state.number}</h2>
        <button onClick={() => this.setState({number: generateSnils()})}>Новое значение</button>
      </div>
    )
  }
}


export default App