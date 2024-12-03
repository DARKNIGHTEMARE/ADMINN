function mifunciona() {
    document.getElementById("primero").innerHTML = 
    +'<div class="contenido" style="width:200px ; height:200px ;">'
    +'<h1>Formulario de Registro de Estudiantes</h1>'
    +'<form id="student-form">'
        +'<section>'
            +'<fieldset>'
                 +'<legend>Información Personal</legend>'
                 +'<label for="name" style="color:red;">Nombre:</label>'
                 +'<input type="text" id="name" name="name" required style="height:50px ; width:500px ;">'

                 +'<label for="email">Correo Electrónico:</label>'
                 +'<input type="email" id="email" name="email" required style="height:50px ; width:500px ;">'

                 +'<label for="age">Edad:</label>'
                 +'<input type="number" id="age" name="age" min="1" required style="height:50px ; width:500px ;">'
                 +'</fieldset>'
        +'</section>'

        +'<section>'
            +'<fieldset>'
                +'<legend>Información del Curso</legend>'
                +'<label for="course">Curso de Interés:</label>'
                +'<select id="course" name="course" required style="height:70px ; width:500px ;">'
                    +'<option value="">Seleccione un curso</option>'
                    +'<option value="matematicas">Matemáticas</option>'
                    +'<option value="programacion">Programación</option>'
                    +'<option value="diseno">Diseño</option>'
                    +'<option value="historia">Historia</option>'
                +'</select>'
            +'</fieldset>'
        +'</section>'
        +'<br>'
        +'<br>'
        +'<button type="submit">Registrar</button>'
        
        +'</form>'
        +'</div>';
  }






  function mifuncionb() {
    document.getElementById("primero").innerHTML = 
     
    +'<center>'
    +'<h1>Crear una Nota</h1>'
    +'<form id="noteForm">'
        +'<label for="title">Título:</label>'
        +'<input type="text" id="title" name="title" required style="height:70px ; width:500px ;">'

        +'<label for="note">Nota:</label>'
        +'<textarea id="note" name="note" rows="5" required></textarea style="height:70px ; width:800px ;">'
        +'<br>'
        +'<button type="submit">Guardar Nota</button>'
    +'</form>'
    +'</center>';}



    function mifuncionc() {
        document.getElementById("primero").innerHTML = 
        '<style>' +
        'table {' +
            'border-collapse: collapse;' +
            'width: 100%;' +
        '}' +
        'th, td {' +
            'border: 1px solid #ddd;' +
            'padding: 8px;' +
            'text-align: left;' +
        '}' +
        'tr:nth-child(even) {' +
            'background-color: #f2f2f2;' +
        '}' +
    '</style>' +
    '<h1>Lista de Nombres y Correos</h1>' +
    '<table id="dataTable">' +
        '<thead>' +
            '<tr>' +
                '<th>#</th>' +
                '<th>Nombre</th>' +
                '<th>Correo Electrónico</th>' +
            '</tr>' +
        '</thead>' +
        '<tbody>' +
            '<tr>' +
                '<td>1</td>' +
                '<td>Juan Pérez</td>' +
                '<td>juan.perez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>2</td>' +
                '<td>Ana Gómez</td>' +
                '<td>ana.gomez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>3</td>' +
                '<td>Carlos Ruiz</td>' +
                '<td>carlos.ruiz@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>4</td>' +
                '<td>María López</td>' +
                '<td>maria.lopez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>5</td>' +
                '<td>Pedro Martínez</td>' +
                '<td>pedro.martinez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>6</td>' +
                '<td>Laura Sánchez</td>' +
                '<td>laura.sanchez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>7</td>' +
                '<td>Javier Torres</td>' +
                '<td>javier.torres@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>8</td>' +
                '<td>Clara Jiménez</td>' +
                '<td>clara.jimenez@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>9</td>' +
                '<td>Ricardo Morales</td>' +
                '<td>ricardo.morales@example.com</td>' +
            '</tr>' +
            '<tr>' +
                '<td>10</td>' +
                '<td>Sofía Castillo</td>' +
                '<td>sofia.castillo@example.com</td>' +
            '</tr>' +
            
        '</tbody>' +
    '</table>' ;}



    function mifunciond() {
        document.getElementById("primero").innerHTML = 
    
        '<style>' +
        'table {' +
            'border-collapse: collapse;' +
            'width: 100%;' +
        '}' +
        'th, td {' +
            'border: 1px solid #ddd;' +
            'padding: 8px;' +
            'text-align: left;' +
        '}' +
        'tr:nth-child(even) {' +
            'background-color: #f2f2f2;' +
        '}' +
    '</style>' +
    
    '<h1>Lista de Productos</h1>' +
    '<table id="dataTable">' +
        '<thead>' +
            '<tr>' +
                '<th>#</th>' +
                '<th>Nombre</th>' +
                '<th>Número de Producto</th>' +
                '<th>IVA</th>' +
            '</tr>' +
        '</thead>' +
        '<tbody>' +
            '<tr>' +
                '<td>1</td>' +
                '<td>Manzana</td>' +
                '<td><input type="number" id="manzana" name="manzana" min="0" value="0" style="height:50px; width:100px;"></td>' +
                '<td>16%</td>' +
            '</tr>' +
            '<tr>' +
                '<td>2</td>' +
                '<td>Zanahoria</td>' +
                '<td><input type="number" id="zanahoria" name="zanahoria" min="0" value="0" style="height:50px; width:100px;"></td>' +
                '<td>19%</td>' +
            '</tr>' +
            '<tr>' +
                '<td>3</td>' +
                '<td>Mandarina</td>' +
                '<td><input type="number" id="mandarina" name="mandarina" min="0" value="0" style="height:50px; width:100px;"></td>' +
                '<td>5%</td>' +
            '</tr>' +
            '<tr>' +
                '<td>4</td>' +
                '<td>Leche</td>' +
                '<td><input type="number" id="leche" name="leche" min="0" value="0" style="height:50px; width:100px;"></td>' +
                '<td>0%</td>' +
            '</tr>' +
            '<tr>' +
                '<td>5</td>' +
                '<td>Arroz</td>' +
                '<td><input type="number" id="arroz" name="arroz" min="0" value="0" style="height:50px; width:100px;"></td>' +
                '<td>16%</td>' +
            '</tr>' +
            '<tr>' +
                '<td colspan="2"></td>' +
                '<td><button onclick="formarPago()" style="height:100px; width:200px;">Formar Pago</button></td>' +
            '</tr>' +
        '</tbody>' +
    '</table>';
}

function formarPago() {
    const precios = {
        manzana: 10000,
        zanahoria: 10000,
        mandarina: 10000,
        leche: 10000,
        arroz: 10000
    };

    const ivas = {
        manzana: 0.16,
        zanahoria: 0.19,
        mandarina: 0.05,
        leche: 0.00,
        arroz: 0.16
    };

    let totalSinIva = 0;
    let totalConIva = 0;
    let detalles = '';

    // Calcular el total
    for (const producto in precios) {
        const cantidad = parseInt(document.getElementById(producto).value) || 0;
        const subtotalSinIva = precios[producto] * cantidad;
        const iva = subtotalSinIva * ivas[producto];
        const subtotalConIva = subtotalSinIva + iva;

        totalSinIva += subtotalSinIva;
        totalConIva += subtotalConIva;

        // Detalle por producto
        if (cantidad > 0) {
            detalles += `
                <h2>${producto.charAt(0).toUpperCase() + producto.slice(1)}: 
                Cantidad: ${cantidad}, 
                Precio sin IVA: $${subtotalSinIva.toFixed(2)}, 
                Precio con IVA: $${subtotalConIva.toFixed(2)} 
                (IVA: $${iva.toFixed(2)})</h2>
            `;
        }
    }

    // Crear el recibo
    const recibo = `

    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .cuadradoo{ text-align: center; width:1200px ; height:450px ; border-style: solid; }
    </style>

      <h1>Lista de Productos</h1>
    <table id="dataTable">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Número de Producto</th>
                <th>IVA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Manzana</td>
                <td><input type="number" id="manzana" name="manzana" min="0" value="0" style="height:50px; width:100px;"></td>
                <td>16%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Zanahoria</td>
                <td><input type="number" id="zanahoria" name="zanahoria" min="0" value="0" style="height:50px; width:100px;"></td>
                <td>19%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mandarina</td>
                <td><input type="number" id="mandarina" name="mandarina" min="0" value="0" style="height:50px; width:100px;"></td>
                <td>5%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Leche</td>
                <td><input type="number" id="leche" name="leche" min="0" value="0" style="height:50px; width:100px;"></td>
                <td>0%</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Arroz</td>
                <td><input type="number" id="arroz" name="arroz" min="0" value="0" style="height:50px; width:100px;"></td>
                <td>16%</td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td><button onclick="formarPago()" style="height:100px; width:200px;">Formar Pago</button></td>
            </tr>
        </tbody>
    </table>

        <div class="cuadradoo">
        <h2>Recibo de Pago</h2>
        ${detalles}
        <h2>Total sin IVA: $${totalSinIva.toFixed(2)}</h2>
        <h2>Total con IVA: $${totalConIva.toFixed(2)}</h2>
        </div>
    `;

    document.getElementById("primero").innerHTML = recibo;
    document.getElementById("primero").style.display = "block"; // Mostrar el recibo
}

// Llamar la función para mostrar los productos al cargar la página
mifunciond();
