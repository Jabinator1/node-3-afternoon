module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')

        const {name, description, price, image_url} = req.body
        
        db.create_product([name, description, price, image_url])
        .then((response) => res.status(200).send(response))
        .catch(err => {console.log(err); res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })})
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {console.log(err); res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })})
    },

    getAll: (req, res) => {
        const db = req.app.get('db')
        
        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {console.log(err); res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })})
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const {params, query} = req
        

        db.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {console.log(err); res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })})
    },

    deleteFn: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {console.log(err); res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })})
    }
}