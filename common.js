function  isIos() {
  const userAgent = window.navigator.userAgent.toLowerCase()
    ios = /iphone|ipod|ipad/.test(userAgent)
  //console.log(ios);
  return ios ? true : false
}
