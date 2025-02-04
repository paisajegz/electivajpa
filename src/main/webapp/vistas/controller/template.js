var template={}

 
template.factura=`
<div class="modal fade modal-factura" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Factura</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <div class="modal-body">
        <h3>Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <p>Nombre: <span id="modal-cliente-nombre"></span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-cliente-apellido"></span></p>
            </div>
            <div class="col-md-6">
                <p>Correo: <span id="modal-cliente-correo"></span></p>
            </div>
            <div class="col-md-6">
                <p>Telefono: <span id="modal-cliente-telefono"></span></p>
            </div>
            <div class="col-md-6">
                <p>Documento: <span id="modal-cliente-documento"></span></p>
            </div>
            <div class="col-md-6">
                <p>Tipo Documento: <span id="modal-cliente-tipodoc"></span></p>
            </div>
        </div>
        <h3>Vendedor</h3>
        <div class="row">
            <div class="col-md-6">
                <p>Nombre: <span id="modal-vendedor-nombre"></span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-vendedor-apellido"></span></p>
            </div>
        </div>
        <h3>Productos</h3>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">cantidad</th>
                <th scope="col">precio</th>
                </tr>
            </thead>
            <tbody id="modal-product">
            </tbody>
        </table>
        <div>
        </div>
    </div>
    <div class="modal-footer">s
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
  </div>
</div>

<div id="container-facturas">
<h2 class="mb-4">Facturas</h2>

<div class="container-fluid my-5">
    <div >
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Fecha</th>
                <th scope="col">Total</th>
                <th scope="col">Eventos</th>
              </tr>
      
            </thead>
            <tbody id="table-factura">
                <tr>
                    <td scope="row">1</td>
                    <td>DASJDAKDJASDJ</td>
                    <td>jasudauduas jasuduas jjuasaud uasd</td>
                    <td>192292929</td>
                    <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
    </div>
    
</div>
</div>`;




template.crearFactura=`
<div id="container-crear-factura">
    <div class="card my-5">
        <div class="card-header">
            <h2 class="mb-4">crear facturas</h2>
        </div>
        <div class="card-body">
            <h3>Descripcion</h3>
            <input type="text" id="factura-descripcion"/>
            <div class="card">
                <div class="card-header">
                    <h3>Datos del cliente</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 px-3 my-2">
                            <label for="">Digite Documento</label>
                            <input class="w-100" type="text" onkeyup="buscarCliente(this)">
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Nombre: <span id="span-nombre"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Apellido: <span id="span-apellido"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Telefono: <span id="span-telefono"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Correo: <span id="span-correo"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Tipo Documento: <span id="span-tipodoc"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Documento: <span id="span-doc"></span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card my-5">
                <div class="card-header">
                    <h1>Agregar Producto</h1>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <label>Digite codigo del producto:</label><br>
                            <input type="text" class="w-50" onKeyUp="buscarProducto(this)" /> 
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">codigo: <span id="span-codigo"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Nombre: <span id="span-nombre"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">Precio: <span id="span-precio"></span></label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <label for="">cantidad: <span id="span-cantidad"></span> </label>
                        </div>
                        <div class="col-md-6 px-3 my-2">
                            <button class="btn btn-success" onclick="agregarproductoFactura()" id="btn-agregar-pro-fac" disabled>Agregar al factura</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card my-5" id="productos-crear-factura">
                <div class="card-header">
                    <h1>Productos</h1>
                </div>
                <div class="card-body">
                    
                <table class="w-100 text-center">
                    <thead>
                        <tr>
                            <th style="width: 10%;">id</th>
                            <th style="width: 20%;">nombre</th>
                            <th style="width: 10%;">cantidad</th>
                            <th style="width: 30%;">precio unidad</th>
                            <th style="width: 30%;">Total</th>
                        </tr>                                       
                    </thead>
                    <tbody id="contenido-factura">
                    </tbody>
                </table>
                </div>
                <div class="card-footer">
                    total: <span id="total-factura"></span>
                    <button class="btn btn-danger" id="btn-limpiar-factura">limpiar todo</button><button class="btn btn-success" id="btn-enviar-factura" onclick="hacerpago()">Pagar</button>
                </div>
            </div>
        </div>
    </div>
</div>`


template.cliente=`
<div id="container-clientes" >
    <div class="card">
        <div class="card-header">
            <h2 class="mb-4">clientes</h2>
        </div>
        <div class="card-body">
            <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Doc</th>
                    <th scope="col">Primer Nombre</th>
                    <th scope="col">Segundo Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">tipo Documento</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody id="cliente-container">
                </tbody>
              </table>
        </div>
    </div>
</div>
`


template.crearCliente=`
<div id="container-crear-clientes">
    <div class="card">
        <div class="card-header">
            <h2 class="mb-4">Crear Clientes</h2>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Primer Nombre</label><br>
                    <input class="w-100" type="text" id="txt-cliente-prinombre" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Segundo Nombre</label><br>
                    <input class="w-100" type="text" id="txt-cliente-segnombre" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Primer Apellido</label><br>
                    <input class="w-100" type="text" id="txt-cliente-priapellido" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Segundo Apellido</label><br>
                    <input class="w-100" type="text" id="txt-cliente-segapellido" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Telefono</label><br>
                    <input class="w-100" type="text" id="txt-cliente-telefono" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Correo</label><br>
                    <input class="w-100" type="text" id="txt-cliente-correo" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Digite Documento</label><br>
                    <input class="w-100" type="text" id="txt-cliente-doc" />
                </div>
                <div class="col-md-6 px-3 my-2">
                    <label for="">Selleccionw Documento</label><br>
                    <select class="form-control" id="txt-cliente-tipodoc">
                        <option value="C.C.">Cedula de Ciudadania</option>
                        <option value"T.I.">Tarjeta de Identidad</option>
                        <option value"NIT">NIT</option>
                    </select> 
                </div>
                <button class="btn btn-danger my-3 mx-3" onclick="limpiarCliente()">Limpiar campos</button><button class="btn btn-success my-3 mx-3" onclick="agregarCliente()">Agregar usuario</button>
            </div>
        </div>
    </div>
</div>`; 