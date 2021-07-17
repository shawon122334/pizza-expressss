const Menu = require('../../models/menu')

function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find() //we want all records from db
            console.log(pizzas)
            return res.render('home', { pizzas: pizzas })
        }
    }
}

module.exports = homeController