import React from 'react';
import './FormElement.css'

export default function FormElement(props){
    return (
        <div className="form-item">
            <div className="form-item-label">
                {props.label}
            </div>
            <div className="form-item-input">
                {props.item}
            </div>
        </div>
    )
}