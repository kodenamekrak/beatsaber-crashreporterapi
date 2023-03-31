import axios, { AxiosInstance } from "axios";
import { Crash } from '../types/Crash';

export async function getCrashById(instance: AxiosInstance, id: string): Promise<Crash> {
    try {
        const response = await instance.get<Crash>(`/${id}`);
        return response.data;
    }
    catch (error) {
        if(axios.isAxiosError(error)) {
            if(error.response.status == 404)
                throw `Could not find crash with id ${id}`;
        }
        throw error;
    }
}