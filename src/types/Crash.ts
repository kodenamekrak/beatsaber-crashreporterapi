import { Mod } from './Mod';

export interface Crash {
    userId: string,
    uploadDate: string,
    stacktrace: string,
    mods?: Mod[],
    gameVersion?: string
    crashId: string,
}