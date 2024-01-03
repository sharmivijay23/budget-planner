import React from "react";
import { useIncStore } from "./store";


export const Duration = ({ labelid }) => {

  const { storeDuration } = useIncStore();

  return (
    <>
      {/* <select className='period' value={labelid.duration}
        onChange={e => setValue({ ...labelid, duration: e.target.value })}
        onChangeCapture={e => storeDuration(duration, e.target.value)}  > */}
      <select className="period"
        labelid={labelid}
        value={useIncStore((state) => state[labelid].duration)}
        onChangeCapture={e => storeDuration(labelid, e.target.value)}  >
        <option> Select an option </option>
        <option> Weekly </option>
        <option> Monthly </option>
        <option> Yearly</option>
      </select>
    </>
  )
}

export const IncomeLable = ({ labelid, label }) => (
  <label htmlFor={labelid}> {label} </label>
)

export const Amount = ({ labelid }) => {

  const { storeValue } = useIncStore();

  const CaptureAmount = (e) => {
    e = storeValue(labelid, e.target.value)

  }

  return (

    // <input type="number"
    //   labelid={labelid}
    //   value={useIncStore((state) => state[labelid].value)}
    //   onChangeCapture={CaptureAmount(event.target.value)}
    //   placeholder="0.00"
    // />

    <input type="number"
      labelid={labelid}
      value={useIncStore((state) => state[labelid].value)}
      onChangeCapture={e => storeValue(labelid, e.target.value)}
      placeholder="0.00"
      min="0"
    />
  )
}

export const RowEntry = ({ labelid, label }) => (

  <div className='row'>

    <div className='column1'>
      <IncomeLable labelid={labelid} label={label} />
    </div>
    <div className='flexPeriod'>
      <Duration labelid={labelid} />
    </div>
    <div className='column3'>
      <Amount labelid={labelid} />
    </div>
  </div>
)