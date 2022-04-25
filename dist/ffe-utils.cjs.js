'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = Object.assign({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/**
 * 插入CSS
 * @param url
 */
function insertCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
/**
 * 插入JS
 * @param url
 * @param async
 */
function insertJS(url, async) {
    if (async === void 0) { async = false; }
    var ja = document.createElement("script");
    ja.type = "text/javascript";
    if (async) {
        ja.async = true;
    }
    ja.src = url;
    var s = document.getElementsByTagName("script")[0];
    if (s.parentNode) {
        s.parentNode.insertBefore(ja, s);
    }
    else {
        document.body.appendChild(s);
    }
}
/**
 * 判断是否全部为空格
 * @param str
 * @returns
 */
function isAllSpace(str) {
    if (str == "")
        return true;
    var reg = "^[ ]+$";
    return new RegExp(reg).test(str);
}
/**
 * 去除字符串中首尾的空格
 * @param str
 * @returns
 */
function trimStrSpace(str) {
    if (str) {
        str = str.replace(/^\s+/, "");
        for (var i = str.length - 1; i >= 0; i--) {
            if (/\S/.test(str.charAt(i))) {
                str = str.substring(0, i + 1);
                break;
            }
        }
    }
    return str;
}
/**
 * 检测特殊字符
 * @param str 待检测字符串
 * @returns
*/
function isHasSpecialStr(str) {
    var myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
    if (myReg.test(str)) {
        return true;
    }
    return false;
}
/**
 * 数组对象升降序方法
 * @param {*} key 用于排序的数组的key值
 * @param {*} desc 布尔值，为true是升序排序，false是降序排序
 * 使用 // arr.sort(compare('age'));
 */
function compare(key, desc) {
    if (desc === void 0) { desc = true; }
    return function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        if (desc == true) {
            return value1 - value2; // 升序排列
        }
        else {
            return value2 - value1; // 降序排列
        }
    };
}
/**
 * 计算中英文混合输入字符的长度
 * @param str
 * @returns
 */
function calculateNum(str) {
    var sum = 0;
    if (str) {
        var len = str.length;
        for (var i = 0; i < len; i++) {
            if (str.charCodeAt(i) > 255) {
                // sum = sum + 2; // 如果是汉字就算2个字符
                sum = sum + 1; // 汉字也算1个字符
            }
            else {
                sum++;
            }
        }
        return sum;
    }
    else {
        return 0;
    }
}
// object 排序
function objCompare(key) {
    return function (obj1, obj2) {
        var value1 = parseFloat(obj1[key]);
        var value2 = parseFloat(obj2[key]);
        if (value2 > value1) {
            return 1;
        }
        else if (value2 < value1) {
            return -1;
        }
        else {
            return 0;
        }
    };
}
/**
 * 数组对象去重
 * @arr 数组
 * @key 去重关键字，默认为key
 * arrObjectReduce(arr, 'id')
 */
function arrObjectReduce(arr, key) {
    if (key === void 0) { key = "key"; }
    var obj = {};
    return arr.reduce(function (cur, next) {
        obj[next[key]] ? "" : (obj[next[key]] = cur.push(next));
        return cur;
    }, []);
}
/**
 * 树的扁平化遍历
 * @param data [源数组]
 * @param flat [拍平后的数组]
 */
function flatTree(data, flat) {
    for (var i = 0; i < data.length; i++) {
        var node = data[i];
        flat.push(omit(node, ["children"]));
        if (node.children) {
            flatTree(node.children, flat);
        }
    }
    return flat;
}
/**
 * 获取地址栏参数
 * @param name
 * @returns
 */
function getUrlSearchValue(name) {
    var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"));
    var url = window.location.search.substring(1).match(reg);
    if (url != null)
        return decodeURI(url[2]);
    return null;
}

exports.arrObjectReduce = arrObjectReduce;
exports.calculateNum = calculateNum;
exports.compare = compare;
exports.flatTree = flatTree;
exports.getUrlSearchValue = getUrlSearchValue;
exports.insertCSS = insertCSS;
exports.insertJS = insertJS;
exports.isAllSpace = isAllSpace;
exports.isHasSpecialStr = isHasSpecialStr;
exports.objCompare = objCompare;
exports.trimStrSpace = trimStrSpace;
