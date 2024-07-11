import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'any'
})
export class CustomHttp {
    
    constructor(
        private http: HttpClient,
    ) { }

    getAsBlob(url: string, headersAsJson?: any): Observable<Blob> {
        let httpHeaders: HttpHeaders = this.buildHeaders(headersAsJson, 'blob');
        return this.http.get(url, { headers: httpHeaders, responseType: 'blob' });
    }

    get<T>(url: string, headersAsJson?: any): Observable<T> {
        let httpHeaders: HttpHeaders = this.buildHeaders(headersAsJson, 'json');
        return this.http.get<T>(url, { headers: httpHeaders });
    }

    post<T>(url: string, body?: any, headersAsJson?: any): Observable<T> {
        const httpHeaders: HttpHeaders = this.buildHeaders(headersAsJson, 'json');
        return this.http.post<T>(url, body, { headers: httpHeaders });
    }

    delete<T>(url: string, headersAsJson?: any): Observable<T> {
        const httpHeaders: HttpHeaders = this.buildHeaders(headersAsJson, 'json');
        return this.http.delete<T>(url, { headers: httpHeaders });
    }

    private buildHeaders(headersAsJson?: any, responseType?: string): HttpHeaders {
        let httpHeaders = new HttpHeaders();
        const token = localStorage.getItem("auth_token");
        if (token) {
            httpHeaders = httpHeaders.set('Authorization', token);
        }
        if (responseType === 'json') {
            httpHeaders = httpHeaders
                .append('Accept', 'application/json')
                .append('Content-Type', 'application/json');
        } else if (responseType === 'blob') {
            httpHeaders = httpHeaders
                .append('Content-Type', 'application/pdf')
                .append('Accept', 'application/pdf');
        }
        if (headersAsJson) {
            for (const key in headersAsJson) {
                httpHeaders = httpHeaders.append(key, headersAsJson[key]);
            };
        }
        return httpHeaders;
    }

}