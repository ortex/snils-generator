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

function mask(num) {
  return `${num.substr(0, 3)} ${num.substr(3, 3)} ${num.substr(6, 3)} ${num.substr(9)}`
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {number: generateSnils()}
  }

  render() {
    return (
      <div className="container">

        <div className="header clearfix">
          <h3 className="text-muted">Генератор валидных номеров СНИЛС</h3>
        </div>

        <div className="jumbotron">
          <span className="number">{mask(this.state.number)}</span>
          <p>
            <button className="btn btn-lg btn-success btn-gen-snils" onClick={() => this.setState({number: generateSnils()})}>
              Новое значение
            </button>
          </p>
        </div>

        <footer className="footer">
          <p>&copy; 2016 | <a href="https://github.com/ortex/snils-generator">GitHub</a></p>
        </footer>
      </div>
    )
  }
}


export default App