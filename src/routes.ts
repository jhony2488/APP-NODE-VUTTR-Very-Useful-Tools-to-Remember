import express from 'express'
const { Authentication } = require('./app/middlewares/auth')
const UsersControllers = require('./app/controllers/UsersControllers')
const ToolsControllers = require('./app/controllers/ToolsControllers')
const TagsControllers = require('./app/controllers/TagsControllers')
const AdminControllersUsers = require('./app/controllers/AdminControllers/AdminControllersUsers')

const router = express.Router()
const authentication = new Authentication()
//default
router.get('/', authentication.auth, (req, res) => {
  res.json({ version: '1.0.0' })
})

//users
router.get('/users/:id_users', authentication.auth, UsersControllers.index)
router.post('/users/login', authentication.auth, UsersControllers.login)
router.post('/users', authentication.auth, UsersControllers.create)
router.put('/users/:id_users', authentication.auth, UsersControllers.update)
router.patch(
  '/users/redefined_password/:id_users',
  authentication.auth,
  UsersControllers.redefinedPassword
)
router.delete('/users/:id_users', authentication.auth, UsersControllers.delete)

//tools
router.get('/tools', authentication.auth, ToolsControllers.index)
router.post('/tools/:id_users', authentication.auth, ToolsControllers.create)
router.put(
  '/tools/:id_tools/user/:id_users',
  authentication.auth,
  ToolsControllers.update
)
router.delete(
  '/tools/:id_tools/user/:id_users',
  authentication.auth,
  ToolsControllers.delete
)

//tags
router.get('/tags', authentication.auth, TagsControllers.index)
router.post('/tags', authentication.auth, TagsControllers.create)
router.put('/tags/:id_tags', authentication.auth, TagsControllers.update)
router.delete('/tags/:id_tags', authentication.auth, TagsControllers.delete)

// admin
router.get(
  '/admin/users',
  authentication.authAdmin,
  AdminControllersUsers.index
)
router.get(
  '/admin/users/:id_users',
  authentication.authAdmin,
  AdminControllersUsers.indexOne
)

module.exports = router
