import React from 'react';

const Card = (props) => {
    let classCard = "card";
    if("cardClass" in props){
        classCard += ' '+props.cardClass;
    }
    return (
                <div className={classCard}>
                    <div className="card-body">
                        <p className="card-text"><i className={props.iClass}></i> {props.nombre}</p>
                    </div>
                </div>
            );
}

export default Card;