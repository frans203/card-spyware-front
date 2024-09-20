import {useEffect, useState} from "react";

export const useHandleInput = (value: string) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        if (value.length > 0) {
            const timeout = setTimeout(() => {
                setDebounceValue(value);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [value]);

    return debounceValue;
}