import superagent from 'superagent';
import config from '../../../../config';
import { getToken } from '../authentication/token';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  if (process.env.NODE_ENV !== 'test') {
    if (typeof window === 'undefined') {
      // Prepend host and port of the API server to the path.
      return `http://${config('host')}:${config('port')}/api/v1${adjustedPath}`;
    }
  }
  // Prepend `/api/v1` to relative URL, to proxy to API server.
  return `${config('apiPrefix')}${adjustedPath}`;
}

function clean(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === null || obj[key] === undefined) {
      Reflect.deleteProperty(obj, key);
    }
  });
}

export default class ApiClient {
  constructor(host, req) {
    host = host || '';
    methods.forEach(method => {
      this[method] = (path, { params, data, headers, files, fields } = {}) =>
        new Promise((resolve, reject) => {
          const request = superagent[method](formatUrl(path));

          if (params) {
            request.query(params);
          }

          if (headers) {
            request.set(headers);
          }

          if (typeof window !== 'undefined') {
            const token = getToken();
            request.set('Authorization', `Bearer ${token}`);
          }

          if (files) {
            files.forEach(file => request.attach(file.key, file.value));
          }

          if (fields) {
            fields.forEach(item => request.field(item.key, item.value));
          }

          if (data) {
            clean(data);
            request.send(data);
          }

          request.end(
            (error, response) =>
              error ? reject(response || error) : resolve(response),
          );
        });
    });
  }

  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  /* eslint-disable class-methods-use-this */
  empty() {}
  /* eslint-enable class-methods-use-this */
}
