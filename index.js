// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArr = []
  for(var i = 0; i < musicians.length; i++){
    emptyArr.push( `${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyArr
}
