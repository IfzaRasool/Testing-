 function stringLength(str) {
    let strlength = str.length;
    if(!strlength || str === ' '){
        return 'Error no string';
    }else if(strlength > 10) {
        return 'The length of the string is no more than 10';
    }else {
        return strlength;
    }
  }
 // stringLength('This is mygggjgjg');
   module.exports = stringLength;