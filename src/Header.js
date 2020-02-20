import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                <SearchBar />
                </header>
            </div>
        )
    }
}
