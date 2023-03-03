import React, { useState, useEffect } from 'react';
import { of } from 'rxjs';


const source = ['Murthy', 'Sriram', 'kavitha'];
const names$ = of(source);

export function Demo2() {
    const [names, setNames] = useState();

    useEffect(() => {
        const subscription = names$.subscribe(setNames);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <br />
            <h3 className="bg-info">RxJS with React with useEffect</h3>
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

