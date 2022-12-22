import React from 'react';

const CheckBox = (props) => {
    let id = 'flexCheckDefault';
    if ("id" in props) {
        id = props.id;
    }
    return (
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" value={props.value} name={id} id={id} />
                <label className="form-check-label" htmlFor={id}>
                    {props.nombre}
                </label>
            </div>
            );
}

export default CheckBox;