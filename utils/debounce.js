export function debounce(func, delay) {
  var timeout
  return function (e) {
    clearTimeout(timeout)
    var context = this, args = arguments
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}

export function throttle(fn, threshhold) {
  var timeout
  var start = new Date;
  var threshhold = threshhold || 160
  return function () {

    var context = this, args = arguments, curr = new Date() - 0

    clearTimeout(timeout)
    if (curr - start >= threshhold) {
      fn.apply(context, args)
      start = curr
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, threshhold);
    }
  }
}
