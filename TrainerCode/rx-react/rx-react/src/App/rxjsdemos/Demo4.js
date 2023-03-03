import React, { useState, useEffect } from 'react';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = user => `${user.name.first} ${user.name.last}`;
const names$ = ajax
    .getJSON(api)
    .pipe(map(({ results: users }) => users.map(getName)));

const useObservable = observable => {
    const [state, setState] = useState();

    useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, [observable]);

    return state;
};

export function Demo4() {
    const names = useObservable(names$);

    return (
        <div className="App">
            <br />
            <h3 className="bg-info">RxJS with React with ajax</h3>
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
