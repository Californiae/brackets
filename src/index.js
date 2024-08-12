module.exports = function check(str, bracketsConfig) {
    let ar = bracketsConfig.map(subArray => subArray[0] + subArray[1]).flat()
    // console.log(ar)
    let str1 = ''
    while (str != str1) {
      str1 = str
      ar.forEach(el => {
        str=str.replace(el,"")
        console.log(str, el);
      });
    }
    str.length > 0 ? str1=false : str1=true
    return(str1);
}
