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
          <p className="buttons">
            <button className="btn btn-lg btn-success btn-gen-snils" onClick={() => this.setState({number: generateSnils()})}>
              Новое значение
            </button>

            <button className='btn copy-btn' onClick={() => {
              if (!this.state.number) return

              void navigator.clipboard.writeText(this.state.number)
            }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
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