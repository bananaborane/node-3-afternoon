module.exports = {
    create: (req, res, next)=>{
        let { name, description, price, image_url } = req.body;
        req.app.get('db').create_product([name, description, price, image_url])
        // goes into db/create_product.sql file and passes in name, desc, price and image_url
        .then(()=>res.send('product created'))
        .catch(err=>console.log(err))
    },
    getOne: (req, res, next)=>{
        let {id} = req.params;
        req.app.get('db').read_product(id)
        .then(product=>res.status(200).send(product))
        .catch(err=>console.log(err))
    },
    getAll: (req, res, next)=>{
        req.app.get('db').read_products()
        .then(products=>res.status(200).send(products))
        .catch(err=>console.log(err))
    },
    update: (req, res, next)=>{
        let { id } = req.params;
        let { description } = req.query;
        req.app.get('db').update_product([description, id])
        .then(() => res.sendStatus(200))
        .catch(err=>console.log(err))
    },
    delete: (req, res, next)=>{
        let {id} = req.params;
        req.app.get('db').delete_product(id)
        .then(()=>res.sendStatus(200))
        .catch(err=>console.log(err))
    },
}