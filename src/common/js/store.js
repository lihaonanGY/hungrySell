export function saveToLocal(id, key, value) {
  let seller = window.localStorage._seller_;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    // 因为localStorage存储的是一个json字符串，如果我们想把json字符串拿出来的话，需要JSON.parse
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage._seller_ = JSON.stringify(seller);
};

// def: 默认值
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage._seller_;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
};
