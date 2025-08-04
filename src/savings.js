import React, { useState } from "react";
import './App.css';
import { RowEntry } from "./commonItems";
import { useIncStore } from "./store";

function Savings() {

    const { SavingsSum, IncomeSum } = useIncStore();
    const savings = SavingsSum();
    const income = IncomeSum();

    return (
        <>
            <h3 className='section1 font-bold text-xl'> Savings   <span> Rs.{SavingsSum().toFixed(2)} / month </span> </h3>
            <h3 className="percentage"> {income === 0 ? "" : `(${(savings / income * 100).toFixed(2)}% of income)`} </h3>
            <div className='flex-container2'>
                <RowEntry labelid={"homePurchase"} label={"Home purchase"} />
                <RowEntry labelid={"homeRenovation"} label={"Home renovation"} />
                <RowEntry labelid={"carPurchase"} label={"Car purchase"} />
                <RowEntry labelid={"emergencyFund"} label={"Emergency fund"} />
                <RowEntry labelid={"retirementFund"} label={"Retirement fund"} />
                <RowEntry labelid={"miscellaneous"} label={"Miscellaneous"} />
            </div>

        </>
    )
}


export default Savings;









// let sum = 0;
// for (const key in savings) {
//     sum = sum + (parseFloat(savings[key]) || 0)
// }

// const setHomeRenovation = (newHomeRenovation) => {
//     setSavings({...savings,homeRenovation:newHomeRenovation})
// }

// const setValue = (labelId) => {
//     return (newValue) => {
//         setSavings({ ...savings, [labelId]: newValue })
//     }
// }

// for (const key in savings) {
//     sum = sum + (parseFloat(savings[key].value) || 0)
// }