import React from 'react';

const BreadCrumb = (props) => {
    return (
            <div id="contactoBread" className="breadcrumbRutaHogar" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{props.nombre}</li>
                </ol>
            </div>
            );
}

export default BreadCrumb;