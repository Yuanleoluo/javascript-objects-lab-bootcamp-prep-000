var recipes = {prop: 1}

function updateObjectWithKeyAndValue(obj, key, value){
  return obj.assign({}, obj, {[key]: value})
}
