const HandleErrorTask = (req, res, next) => {
  const { text } = req.body
  if (text != "" && text != null) {
    next()
  } else {
    res.send(`Text is undefinied : ${text}`)
  }
}
const HandleErrorId = (req, res, next) => {
  const { _id } = req.body
  if (_id != "" && _id != null) {
    next()
  } else {
    res.send(`Id is undefinied : ${_id}`)
  }
}
const HandleErrorBool = (req, res, next) => {
  const { isDone } = req.body
  if ((isDone == true || isDone == false) && isDone != null) {
    next()
  } else {
    res.send(`There is no more bool data : ${isDone}`)
  }
}
module.exports = { HandleErrorTask, HandleErrorId, HandleErrorBool }