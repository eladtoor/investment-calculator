import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
export const Header = () => {
    return (
        <div id="header">
            <img src={logo} alt="Investment calculator logo" />
            <h1>Investment Calculator</h1>
        </div>
    )
}
