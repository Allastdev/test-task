
import { localStorageGet } from './localStorage';

export default class FetchApi {
    static async post(bool, path, data, options = {}) {
      return await FetchApi.request(bool, path, 'POST', data, options);
    }
  
    static async get(bool, path, data, options = {}) {
      return await FetchApi.request(bool, path, 'GET', data, options);
    }
  
    static async put(bool, path, data, options = {}) {
      return await FetchApi.request(bool, path, 'PUT', data, options);
    }
  
    static async patch(bool, path, data, options = {}) {
      return await FetchApi.request(bool, path, 'PATCH', data, options);
    }
  
    static async delete(bool, path, data, options = {}) {
      return await FetchApi.request(bool, path, 'DELETE', data, options);
    }
  
    static async request(bool, path, method, data, options = {},) {
      const token = localStorageGet('access_token', false);

      let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      });

      if(bool){
        headers.append('Authorization', `Bearer ${token}`);
      }
  
      const myInit = {
        method,
        headers,
        body: JSON.stringify(data),
      };
  
      return await fetch(`${ path }`, myInit).then(res => {
        return res.json().then(json => {
          if (res.status >= 200 && res.status < 300) {
            return Promise.resolve(json);
          } else {
            return Promise.reject(json);
          }
        }).catch(e => {
          return Promise.reject(e);
        });
      }).catch(e => {
        return Promise.reject(e);
      });
    }
  
    static async upload(path, data, options = {}) {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'projectId': process.env.API_PROJECT_ID
      });
  
      let body = new FormData();
      for(let key in data) {
        body.append(key, data[key]);
      }
  
      const myInit = {
        method: 'POST',
        headers,
        body,
      };
  
      return await fetch(`${ path }`, myInit).then(res => {
        return res.json().then(json => {
          if (res.status >= 200 && res.status < 300) {
            return Promise.resolve(json);
          } else {
            return Promise.reject(json);
          }
        }).catch(e => {
          return Promise.reject(e);
        });
      }).catch(e => {
        return Promise.reject(e);
      });
    }
  }