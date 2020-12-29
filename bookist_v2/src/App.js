import React, { Component } from 'react'
import Header from './Components/Header'
import BookList, { ListTitle } from './Components/BookList'
import ShelfTitle from './Components/Shelf'
import data from './data'

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';



class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      i: 0
    }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }
  // () TBD from last week's warmup
  inc() {
    if (this.state.i === this.state.data.length - 1) {
      this.setState({ i: 0 })
    } else {

      this.setState({ i: this.state.i + 1 })
    }
  }

  dec() {
    if (this.state.i === 0) {
      this.setState({ i: this.state.data.length - 1 })
    } else {

      this.setState({ i: this.state.i - 1 })
    }
  }

  render() {
    const { data, i } = this.state
    return (

      <div className="App">

        <Header />
        <ListTitle />
        <ShelfTitle />

        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App;
