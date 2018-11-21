// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArr = []
  for(i = 0; i < musicians.length - 1; i++){
    emptyArr.push( `${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyArr
}