import { Question } from './Question';

export interface GetResponse {
    response_code: number,
    results: Question[];
}