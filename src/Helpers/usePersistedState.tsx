import { useEffect, useState } from 'react';
import { Response } from '../Types/Helpers';

function usePersistedState<T>(key: string, initialState: T): Response<T> {

    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) 
            return JSON.parse(storageValue);
        return initialState;
    });

    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [ key, state])

    return [state, setState];
}

export default usePersistedState;