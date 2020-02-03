import { HttpHeaders } from '@angular/common/http';
export interface HttpCallOptions {
    url: string,
    method: string,
    headers?: HttpHeaders,   //{ [key: string]: string },
    body?: any,
    params?: { [key: string]: string }
}