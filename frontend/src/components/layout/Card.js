import React from 'react';

const Card = (props) => {
    return (
                <div className="card {props.cardClass}">
                    <div className="card-body">
                        <p className="card-text"><i className={props.iClass}></i> {props.nombre}</p>
                    </div>
                </div>
            );
}

export default Card;