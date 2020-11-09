import React from 'react';

export const tabHeader = (props) => {
    const seletedStyle ={
        backgroundColor: "green",
        width: '200px',
        display: 'inline-block'
    }
    const notSelectedStyle ={
        backgroundColor: "grey",
        width: '200px',
    }
    return (
        <div style={props.selected ? seletedStyle : notSelectedStyle }>
            Tab # {props.index}: {props.title}
        </div>
    )
}

