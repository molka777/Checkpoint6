
import React from 'react'


const Filter = (props) => {
    return (
        <>
            <input style={{ width: '23%', marginLeft: '75%', marginTop: '1%' }} onChange={props.handleInput} type="text" />
        </>
    );
};
export default Filter;