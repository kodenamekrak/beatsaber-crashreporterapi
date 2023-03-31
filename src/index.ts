import axios, { AxiosInstance } from 'axios';
import { getCrashById } from './api/crash';
import { getRecentCrashes } from './api/search';
import { SearchOptions } from './types/SearchOptions';
import { Crash } from './types/Crash';
import { CrashBreif } from './types/CrashBrief';

export class CrashReporterAPI {
    private name :string;
    private version: string;
    private axiosInstance: AxiosInstance;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
        this.axiosInstance = axios.create({
            baseURL: 'https://analyzer.questmodding.com/api/crashes',
            "headers": {
                'User-Agent': `${this.name}/${this.version}`
            }
        });
    }

    public async getCrashById(id: string): Promise<Crash> {
        return await getCrashById(this.axiosInstance, id);
    }

    public async getRecentCrashes(options?: SearchOptions): Promise<Array<CrashBreif>> {
        return await getRecentCrashes(this.axiosInstance, options);
    }
}