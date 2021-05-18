import React from 'react';

const TabHeader = (props) => {
    const seletedStyle ={
        backgroundColor: "green",
        width: '200px',
        display: 'inline-block'
    }
    const notSelectedStyle ={
        backgroundColor: "grey",
        width: '200px',
        display: 'inline-block'
    }
    return (
        <div style={props.selected ? seletedStyle : notSelectedStyle } onClick={()=>props.handleClick(props.index)}>
            Tab # {props.index}: {props.title}
        </div>
    )
}

export default TabHeader