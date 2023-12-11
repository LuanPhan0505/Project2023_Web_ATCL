const homeRouter = require("./home")
const authRouter = require("./auth")
const cartRouter = require("./cart")
const productRouter = require("./product")

function route(app) {
    app.use('/', homeRouter)
    app.use('/auth', authRouter)
    app.use('/cart', cartRouter)
    app.use('/product', productRouter)
}

module.exports = route