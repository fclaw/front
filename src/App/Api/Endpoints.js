import * as e from './Foreign/src/index.js';

export const mkApiClient = function(host, credentials)
{ 
  let cred_val = credentials != null ? Object.values(credentials)[0] : null;
  let cred_name = credentials != null ?  credentials.constructor.name.replace(/[0-9]/g, '') : null;
  if (cred_val != null && typeof cred_val != 'string') { throw "credential not a string: " + credentials}
  else   
  { 
    let cl = new e.ApiClient(host); 
    if (cred_val != null) { cl.defaultHeaders = {'Authorization': cred_name + ' ' + cred_val}; }
    else cl.defaultHeaders = {}
    return ()  => { return cl; };
  } 
}

export const mkUserApi = client => { return function () { return new e.UserApi(client); } }

// Data BasicCredentials
export const constructBasicCredentials = 
function (email, pass)
{ 
    return function () {
      let cred = new e.BasicCredentials();
      cred.setLogin(email);
      cred.setPassword(pass);
      return cred; 
    }
}
export const validateJSONBasicCredentials = obj => { return e.ResponseBasicAuth.validateJSON(obj) }
export const apiUserLoginBasicGet = function(obj, api) { return function (onError, onOk) { api.apiUserLoginBasicPost(obj).then(onOk).catch(onError) }; }
export const getCredentialsBasicAuth = obj => { return obj.getSuccess(); } 

export const mkFrontApi = client => { return function () { return new e.FrontApi(client); } }

export const putFrontendLog = function(obj, api) { return function (onError, onOk) { api.apiFrontendLogPut(obj).then(onOk).catch(onError) }; }
export const constructFrontendLog = 
function (build, msg)
{ 
    return function () {
      let log = new e.RequestFrontendLog();
      log.setBuild(build);
      log.setMsg(msg);
      return log; 
    }
}

export const getDataFromResponse = json => () => { e.Response.validateJSON(json); return e.Response.constructFromObject(json).getSuccess(); }


export const mkFileApi = client => { return function () { return new e.FileApi(client); } }

export const sendFiles = function(bucket, files, api) { return function (onError, onOk) { api.apiFileBucketPut(bucket, files).then(onOk).catch(onError) }; }

export const sendMsgToTelegram = function(config, body) { return function (onError, onOk) {} }
