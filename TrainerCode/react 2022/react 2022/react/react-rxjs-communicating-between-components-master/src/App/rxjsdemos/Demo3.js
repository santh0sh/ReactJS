import React, { useState, useEffect } from 'react';

import { of } from 'rxjs';


const source = ['Murthy', 'Sriram', 'Kavitha'];
const names$ = of(source);

const useObservable = observable => {
    const [state, setState] = useState();

    useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, [observable]);

    return state;
};

export function Demo3() {
    const names = useObservable(names$);

    return (
        <div className="App">
            <br />
            <h3 className="bg-info">RxJS with React with Observable</h3>
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
