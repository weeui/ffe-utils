import omit from "omit.js";

/**
 * 插入CSS
 * @param url
 */
export function insertCSS(url: string) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
/**
 * 插入JS
 * @param url
 * @param async
 */
export function insertJS(url: string, async = false) {
  const ja = document.createElement("script");
  ja.type = "text/javascript";
  if (async) {
    ja.async = true;
  }
  ja.src = url;
  const s = document.getElementsByTagName("script")[0] as HTMLElement;
  if (s.parentNode) {
    s.parentNode.insertBefore(ja, s);
  } else {
    document.body.appendChild(s);
  }
}

/**
 * 判断是否全部为空格
 * @param str
 * @returns
 */
export function isAllSpace(str: string) {
  if (str == "") return true;
  const reg = "^[ ]+$";
  return new RegExp(reg).test(str);
}

/**
 * 去除字符串中首尾的空格
 * @param str
 * @returns
 */
export function trimStrSpace(str: string) {
  if (str) {
    str = str.replace(/^\s+/, "");
    for (let i = str.length - 1; i >= 0; i--) {
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
export function isHasSpecialStr(str: string) {
  const myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
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
export function compare(key: string, desc = true) {
  return function (a: any, b: any) {
    const value1 = a[key];
    const value2 = b[key];
    if (desc == true) {
      return value1 - value2; // 升序排列
    } else {
      return value2 - value1; // 降序排列
    }
  };
}

/**
 * 计算中英文混合输入字符的长度
 * @param str
 * @returns
 */
export function calculateNum(str: string) {
  let sum = 0;
  if (str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 255) {
        // sum = sum + 2; // 如果是汉字就算2个字符
        sum = sum + 1; // 汉字也算1个字符
      } else {
        sum++;
      }
    }
    return sum;
  } else {
    return 0;
  }
}

// object 排序
export function objCompare(key: string) {
  return (obj1: { [x: string]: string }, obj2: { [x: string]: string }) => {
    const value1 = parseFloat(obj1[key]);
    const value2 = parseFloat(obj2[key]);
    if (value2 > value1) {
      return 1;
    } else if (value2 < value1) {
      return -1;
    } else {
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
export function arrObjectReduce(arr: any[], key: string = "key") {
  const obj: any = {};
  return arr.reduce((cur, next) => {
    obj[next[key]] ? "" : (obj[next[key]] = true && cur.push(next));
    return cur;
  }, []);
}

/**
 * 树的扁平化遍历
 * @param data [源数组]
 * @param flat [拍平后的数组]
 */
export function flatTree(data: any[], flat: any[]) {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
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
export function getUrlSearchValue(name: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const url = window.location.search.substring(1).match(reg);
  if (url != null) return decodeURI(url[2]);
  return null;
}
