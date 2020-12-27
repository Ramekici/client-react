import React from 'react'

export default function InputText(props) {
    return (
        <div className="col-lg-6">
            <label htmlFor={props.id}> {props.label} </label>
            <input className="form-control" 
            type={props.type} id={props.id}
            value={props.value} onChange={props.onChangeHandler} />
        </div>
    )
}
