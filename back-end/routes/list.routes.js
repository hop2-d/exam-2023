const { Router } = require('express')
const {
    list,
    test,
    count,
    add,
    deelete,
    update,
    checked,
} = require('../controllers/list.controller')

const route = Router()

route
.get('/list', list)
.get('/test', test)
.get('/count', count)
.post('/add', add)
.delete('/delete', deelete)
.patch('/update', update)
.patch('/checked', checked)

exports.listRoute = route