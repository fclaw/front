export const createWebSocket = 
  function create(url) {
    return function (protocols) {
        let ws = new WebSocket(url, protocols);
        ws.binaryType = "blob";
        return ws;
      };
 };

export const readyStateImpl = function(ws) {
    return function () { return ws.readyState; };
}
  
export const getObject = 
function(ws) { 
  return function(onErr, onOk) { 
    ws.onmessage = function(event) { onOk(JSON.parse(event.data)); }
    ws.onerror = function(err) { onErr(err) }
  }; 
}


