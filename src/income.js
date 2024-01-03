import React from "react";
import { RowEntry } from "./commonItems";
import { useIncStore } from "./store";


function Income() {

    const { IncomeSum } = useIncStore();

    return (
        <>
            <h3 className='section1'> Income <span> Rs. {IncomeSum().toFixed(2)} </span> </h3>
            <div className='flex-container1'>
                <RowEntry labelid={"netIncome"} label={"My Net Income"} />
                <RowEntry labelid={"partnerIncome"} label={"My Spouse/ Partner's Income"} />
                <RowEntry labelid={"rentalIncome"} label={"Rental Property Income"} />
                <RowEntry labelid={"disabilityBenefit"} label={"Disability benefits"} />

            </div>
        </>
    )

}


export default Income;