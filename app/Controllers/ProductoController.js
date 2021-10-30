'use strict'
const Producto = use('App/Models/Producto')

class ProductoController {
    
    async listar({request, response}) {
        return await Producto.all()
    }

    async buscarPorId({request, response}) {
        return await Producto.findBy(request.params.id)
    }

    async guardar({request, response}) {
        return await Producto.create(request.body)
    }

    async actualizar({request, response}) {
        return await Producto.update(request.body, request.params.id)
    }

    async borrar({request, response}) {
        return await Producto.delete(request.params.id)
    }
}

module.exports = ProductoController