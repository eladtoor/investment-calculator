import React from 'react'

export const UserInput = ({ setDataObject }) => {

    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label>INITIAL INVESMENT</label>
                    <input type="number" onChange={(e) => {
                        setDataObject(prevValue => {
                            return { ...prevValue, initialInvestment: +e.target.value }
                        })
                    }} />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" onChange={(e) => {
                        setDataObject(prevValue => {
                            return { ...prevValue, annualInvestment: +e.target.value }
                        })
                    }} />
                </p>



            </div>
            <div className='input-group'>
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" onChange={(e) => {
                        setDataObject(prevValue => {
                            return { ...prevValue, expectedReturn: +e.target.value }
                        })
                    }} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" onChange={(e) => {
                        setDataObject(prevValue => {
                            return { ...prevValue, duration: +e.target.value }
                        })
                    }} />
                </p>



            </div>

        </section>
    )
}
