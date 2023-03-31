import { AxiosInstance } from 'axios';

import { CrashBreif } from "../types/CrashBrief";
import { SearchOptions } from "../types/SearchOptions";

export async function getRecentCrashes(instance: AxiosInstance, options?: SearchOptions): Promise<Array<CrashBreif>> {
    var parameters: string = '';

    if (options) {
        parameters = '?';

        if (options.search)
            parameters += `search=${options.search}&`;

        if (options.age)
            parameters += `date=${Math.floor(options.age)}&`;

        if (options.userId)
            parameters += `userId=${options.userId}&`;

        if (options.limit)
            parameters += `limit=${Math.floor(options.limit)}&`;

        if (options.version)
            parameters += `version=${options.version}`;
    }

    try {
        const response = await instance.get<CrashBreif[]>(parameters);
        return response.data;
    } 
    catch (error) {
        throw error;
    }
}