import React from 'react'

const BonusesCard = ({amount, title}) => {
    return (
        <div className="bonus-card">
            <span>{amount}</span>
            <h5>{title}</h5>
        </div>
    )
}

export default BonusesCard
