import React from 'react';

const BreadCrumb = (props) => {
    return (
            <div id="contactoBread" className="breadcrumbRutaHogar" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.nombre}</li>
                </ol>
            </div>
            );
}

export default BreadCrumb;