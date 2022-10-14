import React from 'react'

const LoanCalculator = () => {
  return (
    <div>
        <h2>Kredit kalkulyatoru</h2>
        <div>
            <form>
                <div>
                    <label htmlFor="credit_mount">Kredit məbləği</label>
                    <input type="range" name="credit_amount" id="credit_amount"/>
                </div>
                <div>
                    <div>
                    <label htmlFor="credit_duration">Kredit müddəti</label>
                    <input type="range" name="credit_duration" id="credit_duration"/>
                    </div>
                    <div>
                    <label htmlFor="percentage">Faiz dərəcəsi</label>
                    <input type="range" name="percentage" id="percentage"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoanCalculator