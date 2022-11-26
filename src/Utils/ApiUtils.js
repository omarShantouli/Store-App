export function FetchData(url, method, body={}, options = {}){

    var _options = {...options}
    
    if(method.toUpperCase() === 'POST')
    {
        _options.body = JSON.stringify(body);
    }

    return fetch(url, {
        method,
        options: _options

    }).then(async (resp)=>{
        var status = resp.status;
        return {
            data : await resp.json(),
            status : status
        }
    })
}