import React from 'react';
import ReactDOM from 'react-dom';
import SpreadExcel from '../src/index'

console.log('start');

const Demo = () => {
    return (
        <div>
            <p>hello</p>
            <SpreadExcel/>
        </div>
    )
};

ReactDOM.render(<Demo/>, document.getElementById('app'));
//ReactDOM.render(<SpreadExcel/>, document.getElementById('app'));