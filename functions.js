function strLength(str) {
  if(str.length > 1 && str.length < 10) {
    return str.length;
  } else {
    throw new Error('wrong');
  }
}
 module.exports = strLength;