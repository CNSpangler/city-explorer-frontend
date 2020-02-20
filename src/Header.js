import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to City Explorer!</h1>
                    <SearchBar />
                    <button>Search</button>
                </header>
            </div>
        )
    }
}
