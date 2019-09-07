function post(url) {
  return function(body) {
    return function(onError, onSuccess) {  
      window.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      }).then(function(res){
        return res.status
      })
        .then(onSuccess)
        .catch(onError)
      return function(cancelError, cancelerError, cancelerSuccess) {
        cancelerSuccess()
      };
    }
  }
}
exports._post = post
