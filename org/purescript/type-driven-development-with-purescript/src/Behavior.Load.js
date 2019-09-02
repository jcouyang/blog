function get(url) {
  return function(onError, onSuccess) {  
    window.fetch(url).then(function(res){
      return res.text()
    })
      .then(onSuccess)
      .catch(onError)
    return function(cancelError, cancelerError, cancelerSuccess) {
      cancelerSuccess()
    };
  }
}
exports._get = get
