import axios, {AxiosRequestConfig} from "axios";

interface Fetcher {
    url: string,
    options?: AxiosRequestConfig,
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:3010",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})


export const fetcher = async ({url, options = {}}: Fetcher) => {
    try {
        const response = await axiosInstance(url, options);
        return response.data;
    } catch (e) {
        throw new Error('Could not make the request:' + url);
    }
}
