var recipes = {prop: 1}

function updateObjectWithKeyAndValue(obj, key, value){
  var newobj = obj.assign({}, obj, {[key]: value})
  return newobj
}
