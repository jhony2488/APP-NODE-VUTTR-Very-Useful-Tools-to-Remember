const doc = require('./doc')
const swaggerAutogen = require('swagger-autogen')()

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

const outputFile = 'swagger_output.json'
const endpointsFiles = [
  `./${process.env.ORIGIN_SEQUELIZE}/routes.${process.env.EXTENSION_FILES_ROUTER}`,
]

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require(`./${process.env.ORIGIN_SEQUELIZE}/server.${process.env.EXTENSION_FILES_ROUTER}`)
})

