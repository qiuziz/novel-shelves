import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from '../resource-api';
import { GlobalsService } from '../../common/globals.service';

const matchUrlSearchParams = (url, urlSearchParams) => {
  if (!urlSearchParams) {
    return url.replace(/\/:[^?]+/g, '');
  }
  const u = new URLSearchParams();
  let _url = Object.keys(urlSearchParams).reduce((pre, next) => {
    if (pre.includes(':' + next)) {
      return pre.replace(':' + next, urlSearchParams[next]);
    } else {
      if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
        urlSearchParams[next].forEach(value => {
        u.append(next, value);
        });
      } else {
        u.append(next, urlSearchParams[next]);
      }
      return pre;
    }
  }, url);
  _url = _url.replace(/\/:[^?]+/g, '');
  return _url + (u.toString() === '' ? '' : '?' + u);
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers;
  private options;
  constructor(private http: HttpClient, private globals: GlobalsService) {
    this.headers = new HttpHeaders();
    this.options = {headers: this.headers};
   }

  get(url, urlSearchParams?, options?): Observable<any> {
    this.globals.loading = this.globals.loadOnce;
    return this.http.request('GET', matchUrlSearchParams(Resource[url], urlSearchParams), { ...this.options, ...options })
    .pipe(tap(() => {
      this.globals.loading = false;
    }));
  }

  post(url, urlSearchParams, bodyParams, options) {
    return this.http.request('POST', matchUrlSearchParams(Resource[url], urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(bodyParams)
      })
    )
    .pipe(tap(() => this.globals.loading = false));
  }

  delete(url, urlSearchParams, options) {
    return this.http.request('DELETE', matchUrlSearchParams(Resource[url], urlSearchParams), { ...this.options, ...options })
    .pipe(tap(() => this.globals.loading = false));
  }

  put(url, urlSearchParams, bodyParams, options) {
    return this.http.request('PUT', matchUrlSearchParams(Resource[url], urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(bodyParams)
      })
    )
    .pipe(tap(() => this.globals.loading = false));
  }

  patch(url, urlSearchParams, bodyParams, options) {
    return this.http.request('PATCH', matchUrlSearchParams(Resource[url], urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(bodyParams)
      })
    )
    .pipe(tap(() => this.globals.loading = false));
  }
}
