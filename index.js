var recipes = {prop: 1}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(obj, key, value){
  var newobj= Object.assign({}, obj)
  delete newobj[key]
  return newobj
}
