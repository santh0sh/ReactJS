import React, { useState } from 'react';



const source = ['Murthy', 'Sriram', 'Mallika'];

export function Demo1() {
    const [names, setNames] = useState(source);

    return (
        <div >
            <br/>
            <h3 className="bg-info">RxJS with React with Hook</h3>

            <List items={names} />
        </div>
    );
}

const List = ({ items = [], loading = false }) => (
    <ul className={loading ? 'loading' : null}>
        {items.map(item => (
            <li className="bg-warning text-left" key={item}>{item}</li>
        ))}
    </ul>
);


