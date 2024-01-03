import React, { useState } from "react";
import './App.css';
import { RowEntry } from "./commonItems";
import { useIncStore } from "./store";

export function Expenses() {

    const { ExpensesSum } = useIncStore();


    return (
        <>
            <h3 className='section1'> Expenses <span> Rs. {ExpensesSum().toFixed(2)}</span></h3>

            <div className='flex-container3'>
                <RowEntry labelid={"studentLoan"} label={"Student loan"} />
                <RowEntry labelid={"personalLoan"} label={"Personal loan"} />
                <RowEntry labelid={"creditCard"} label={"Credit card"} />
                <RowEntry labelid={"housing"} label={"Housing"} />
                <RowEntry labelid={"communications"} label={"Communications"} />
                <RowEntry labelid={"food"} label={"Food"} />
                <RowEntry labelid={"insurance"} label={"Insurance"} />
                <RowEntry labelid={"transportation"} label={"Transportation"} />
                <RowEntry labelid={"education"} label={"Education"} />
                <RowEntry labelid={"medical"} label={"Medical"} />
                <RowEntry labelid={"personalCare"} label={"Personal care"} />
                <RowEntry labelid={"recreation"} label={"Recreation"} />
                <RowEntry labelid={"pets"} label={"Pets"} />

            </div>

        </>
    )
}






// let sum = 0;
//     for (const key in expenses) {
//         sum = sum + (parseFloat(expenses[key].value) || 0)
//     }

//     const setValue = (labelid) => {
//         return (newValue) => {
//             setExpenses({ ...expenses, [labelid]: newValue })
//         }
//     }
