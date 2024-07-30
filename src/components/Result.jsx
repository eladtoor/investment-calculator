import React from 'react'

import { calculateInvestmentResults, formatter } from "../util/investment.js"


export const Result = ({ dataObject }) => {

    const result = calculateInvestmentResults(dataObject)
    let initialInvestment;
    if (result.length !== 0)
        initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment


    return (
        <table id="result"><thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
            <tbody>
                {result.map(((yearData, i) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={i}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                }))}




            </tbody>
        </table>
    )
}
