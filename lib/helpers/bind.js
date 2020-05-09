'use strict';
/**定义封装函数返回一个函数
 * 这个函数接受参数并将参数转化为数组
 * 根据传入的函数fn和对象thisArg调用参数
 */
module.exports = function bind(fn, thisArg) 
{
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) 
    {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
