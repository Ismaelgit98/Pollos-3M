// Lista de clientes estáticos
const CLIENTES_ESTATICOS = [
    { codigo: "1", nombre: "CARNICERIA CHAVEZ" },
    { codigo: "5", nombre: "DORLIN LOBO VILLALOBOS" },
    { codigo: "6", nombre: "ESTEBAN SANCHEZ GRANADOS" },
    { codigo: "7", nombre: "CARNICERIA LA CENTRAL" },
    { codigo: "8", nombre: "QUE POLLO EL HUMO" },
    { codigo: "11", nombre: "POLLO LOS PRIMOS PALERMO" },
    { codigo: "12", nombre: "QUE POLLO ROXANA" },
    { codigo: "14", nombre: "POLLOS TITO" },
    { codigo: "15", nombre: "GO RANCH" },
    { codigo: "16", nombre: "POLLOS PURA VIDA" },
    { codigo: "17", nombre: "SARA REBECA MOYA CORDOBA" },
    { codigo: "19", nombre: "POLLOS KLIVER" },
    { codigo: "21", nombre: "CARNICERIA SAN ANTONIO" },
    { codigo: "22", nombre: "SUPER LA EMILIA" },
    { codigo: "25", nombre: "CODE POLLO DEL CARIBE S.A." },
    { codigo: "27", nombre: "COMIDAS RÁPIDAS Y NO TAN RÁPIDAS ALIS" },
    { codigo: "28", nombre: "QUE POLLO EL LIMBO" },
    { codigo: "29", nombre: "SODA RAYO" },
    { codigo: "33", nombre: "MARTHA PALMITAS" },
    { codigo: "37", nombre: "POLLOS CYROS TURRIALBA" }, 
    { codigo: "40", nombre: "TIERRA DE CARNES" },
    { codigo: "41", nombre: "POLLO LOKO" },
    { codigo: "42", nombre: "RANCHO DE MAU" },
    { codigo: "43", nombre: "POLLOS DEL ATLANTICO" },
    { codigo: "46", nombre: "CHONG LU" },
    { codigo: "47", nombre: "POLLOS CYROS GUÁPILES" }, 
    { codigo: "48", nombre: "ANTOJITOS CHINO" },
    { codigo: "49", nombre: "MAURICIO FONSECA" },
    { codigo: "50", nombre: "POLLOS OLI" },
    { codigo: "51", nombre: "SUPER EL VERANO" },
    { codigo: "52", nombre: "DRAGÓN CALLEJERO" },
    { codigo: "53", nombre: "DISTRIBUIDORA VAEMSA" },
    { codigo: "54", nombre: "CHICHARRONERA EL UNO" },
    { codigo: "55", nombre: "PIZZERÍA CHERRYS" },
    { codigo: "56", nombre: "SHERDAN CARAMBOLA" },
    { codigo: "57", nombre: "EL 19 Y MEDIO" },
    { codigo: "58", nombre: "CESAR VILLAFRANCA" },
    { codigo: "59", nombre: "SODA MARIELOS" },
    { codigo: "60", nombre: "PEPE PÍO FINCA 11" },
    { codigo: "61", nombre: "SABOR CHINO GUACIMO" },
    { codigo: "62", nombre: "SABOR CHINO CARIARI" },
    { codigo: "63", nombre: "SABOR CHINO ANGEL" },
    { codigo: "64", nombre: "SUPER POLLO JEISON" },
    { codigo: "65", nombre: "SODA EBENEZER" },
    { codigo: "66", nombre: "ANDREA HORQUETAS" },
    { codigo: "67", nombre: "ANDRES LOBO" },
    { codigo: "68", nombre: "SABOR FAN" },
    { codigo: "69", nombre: "BAR LA CANTINA" },
    { codigo: "70", nombre: "SODA LA SABROSITA" },
    { codigo: "71", nombre: "PEPE PÍO DON JOSE" },
    { codigo: "72", nombre: "KATHERINE CARIARI" },
    { codigo: "73", nombre: "CARNES HOLY" },
    { codigo: "74", nombre: "CARNICERIA LA FRESQUITA" },
    { codigo: "75", nombre: "CENTRO RECREATIVO MICHI" },
    { codigo: "76", nombre: "SUPER EL AGUILA LA VIRGEN" },
    { codigo: "77", nombre: "AURORA CARIBE" },
    { codigo: "78", nombre: "NIMAR GUACIMO" },
    { codigo: "79", nombre: "CHESKYS GUACIMO" },
    { codigo: "80", nombre: "MARCELA ACEVEDO" },
    { codigo: "81", nombre: "SUPER EL UNO" },
    { codigo: "82", nombre: "POLLOS ARI" },
    { codigo: "83", nombre: "RESTAURANTE PUNTO VERDE" },
    { codigo: "84", nombre: "POLLOS CHITARIA" },
    { codigo: "85", nombre: "RESTAURANTE LOS ABUELOS" },
    { codigo: "86", nombre: "POLLOS KOKORIKO" },
    { codigo: "87", nombre: "AR CHICKEN" },
    { codigo: "88", nombre: "POLLOS CHINI" },
    { codigo: "89", nombre: "PEPE PÍO LA VIRGEN" },
    { codigo: "90", nombre: "WALTER PIZZERIA" },
    { codigo: "91", nombre: "PANADERIA HORQUETAS" },
    { codigo: "92", nombre: "EL WOKAZO" },
    { codigo: "93", nombre: "RESTAURANTE PAQUITO" },
    { codigo: "94", nombre: "WILTON HUMO" },
    { codigo: "95", nombre: "RESTAURANTE PASO AL CARIBE" },
    { codigo: "96", nombre: "LA PAPERIA SIQUIRRES" },
    { codigo: "97", nombre: "BAR LA MONTAÑITA" },
    { codigo: "98", nombre: "WILBERTH HOTEL" },
    { codigo: "99", nombre: "POLLOS CYROS CARIARI" }, 
    { codigo: "100", nombre: "POLLOS CYROS TURRIALBA #2" } 
];


// Lista de productos estáticos
const productos = [
    { codigo: "100200", nombre: "ALAS GRANEL" },
    { codigo: "100204", nombre: "ALAS 1XB" },
    { codigo: "100200", nombre: "ALAS MARINADAS 5XB" },
    { codigo: "100204", nombre: "ALAS 5XB" },
    { codigo: "100456", nombre: "CARCASA DE POLLO EN BOLSA" },
    { codigo: "100455", nombre: "CARCASA DE POLLO ENTERA A GRANEL" },
    { codigo: "100210", nombre: "CENTRO Y PUNTA DE ALA 5 KG" },
    { codigo: "81", nombre: "COSTILLA DE CERDO (KG)" },
    { codigo: "1604111", nombre: "CUARTOS EN BOLSA 1 KG" },
    { codigo: "100360", nombre: "CUARTOS DE POLLO A GRANEL" },
    { codigo: "400511", nombre: "EMPANIZADOR RUTEO" },
    { codigo: "100393", nombre: "FAJITAS" },
    { codigo: "100400", nombre: "MUSLO DESHUESADO GRANEL" },
    { codigo: "100401", nombre: "MUSLO DESHUESADO 1XB" },
    { codigo: "100402", nombre: "MUSLO DESHUESADO 5XB" },
    { codigo: "FPG", nombre: "PECHUGA DESHUESADA GRANEL" },
    { codigo: "PDHB1", nombre: "PECHUGA DESHUESADA 1XB" },
    { codigo: "PDHB5", nombre: "PECHUGA DESHUESADA 5XB" },
    { codigo: "76", nombre: "FILET DE PESCADO" },
    { codigo: "GAL-001", nombre: "GALLINA KILO" },
    { codigo: "351133", nombre: "GALLINA LIVIANA UNIDAD" },
    { codigo: "1585111", nombre: "HIGADO EN BOLSA 1 KG" },
    { codigo: "100451", nombre: "HIGADO DE POLLO A GRANEL" },
    { codigo: "400512", nombre: "MARINADOR RUTEO" },
    { codigo: "100440", nombre: "MENUDOS DE POLLO A GRANEL" },
    { codigo: "100441", nombre: "MENUDOS 1XB CONGELADO" },
    { codigo: "100442", nombre: "MENUDOS 5XB" },
    { codigo: "MEN-105", nombre: "MOLLEJAS 1XB CONGELADO" },
    { codigo: "MEN-106", nombre: "MOLLEJAS 5XB" },
    { codigo: "100444", nombre: "MOLLEJAS A GRANEL" },
    { codigo: "400520", nombre: "MORTADELA ESPECIAL REB 750G FRANKS" },
    { codigo: "100271", nombre: "MUSLO ENTERO A GRANEL" },
    { codigo: "100274", nombre: "MUSLO ENTERO 1XB" },
    { codigo: "100275", nombre: "MUSLO ENTERO 5XB" },
    { codigo: "100276", nombre: "MUSLO PARTIDO 5XB" },
    { codigo: "100277", nombre: "MUSLO PARTIDO MARINADO 5XB" },
    { codigo: "100278", nombre: "MUSLO PARTIDO MARINADO A GRANEL" },
    { codigo: "100330", nombre: "MUSLO REAL DE POLLO A GRANEL" },
    { codigo: "MRPBOL", nombre: "MUSLO REAL DE POLLO EN BOLSA" },
    { codigo: "NPFG", nombre: "NUGGETS DE POLLO EN BOLSA 1KG" },
    { codigo: "79", nombre: "PAPAS ECOFROST" },
    { codigo: "100447", nombre: "PATAS DE POLLO A GRANEL" },
    { codigo: "100448", nombre: "PATAS DE POLLO 1XB CONGELADO" },
    { codigo: "100448", nombre: "PATAS DE POLLO 5XB" },
    { codigo: "100254", nombre: "PECHUGA 1XB" },
    { codigo: "100255", nombre: "PECHUGA 5XB" },
    { codigo: "100251", nombre: "PECHUGA GRANEL" },
    { codigo: "PI", nombre: "PIEL A GRANEL" },
    { codigo: "100122", nombre: "POLLO LIMPIO 1.5 1XB" },
    { codigo: "100123", nombre: "POLLO LIMPIO 1.6 1XB" },
    { codigo: "100124", nombre: "POLLO LIMPIO 1.7 1XB" },
    { codigo: "100125", nombre: "POLLO LIMPIO 1.8 1XB" },
    { codigo: "100126", nombre: "POLLO LIMPIO 1.9 1XB" },
    { codigo: "100127", nombre: "POLLO LIMPIO 2K 1XB" },
    { codigo: "100128", nombre: "POLLO LIMPIO 2.2 1XB" },
    { codigo: "PLG-105", nombre: "POLLO LIMPIO 1.5 GRANEL" },
    { codigo: "PLG-106", nombre: "POLLO LIMPIO 1.6 GRANEL" },
    { codigo: "PLG-107", nombre: "POLLO LIMPIO 1.7 GRANEL" },
    { codigo: "PLG-108", nombre: "POLLO LIMPIO 1.8 GRANEL" },
    { codigo: "PLG-109", nombre: "POLLO LIMPIO 1.9 GRANEL" },
    { codigo: "PLG-110", nombre: "POLLO LIMPIO 2K GRANEL" },
    { codigo: "PLG-111", nombre: "POLLO LIMPIO 1,7 ENJARRADO A GRANEL" },
    { codigo: "PLG-112", nombre: "POLLO LIMPIO 1,8 ENJARRADO A GRANEL" },
    { codigo: "100153", nombre: "PORCIONADO 1.5 GRANEL" },
    { codigo: "100154", nombre: "PORCIONADO 1.6 GRANEL" },
    { codigo: "100155", nombre: "PORCIONADO 1.7 GRANEL" },
    { codigo: "100156", nombre: "PORCIONADO 1.8 GRANEL" },
    { codigo: "100157", nombre: "PORCIONADO 1.9 GRANEL" },
    { codigo: "100158", nombre: "PORCIONADO 2K GRANEL" },
    { codigo: "1624114", nombre: "PORCIONADO 1.5 MARINADO GRANEL" },
    { codigo: "1624115", nombre: "PORCIONADO 1.6 MARINADO GRANEL" },
    { codigo: "1624116", nombre: "PORCIONADO 1.7 MARINADO GRANEL" },
    { codigo: "1624117", nombre: "PORCIONADO 1.8 MARINADO GRANEL" },
    { codigo: "1624118", nombre: "PORCIONADO 1.9 MARINADO GRANEL" },
    { codigo: "1624119", nombre: "PORCIONADO 2K MARINADO GRANEL" },
    { codigo: "80", nombre: "POSTA DE CERDO (KG)" },
    { codigo: "400504", nombre: "SALCHICHAS KILO TUQURRIQUE" },
    { codigo: "300428", nombre: "TROZO MARINADO A GRANEL" },
    { codigo: "300429", nombre: "TROZO MARINADO 5XB" },
    { codigo: "100420", nombre: "TROZOS A GRANEL" },
    { codigo: "100422", nombre: "TROZOS DE POLLO 1XB" },
    { codigo: "100422", nombre: "TROZOS DE POLLO 5XB" },
    { codigo: "100423", nombre: "TROCITOS MARINADO A GRANEL" },
    { codigo: "100423", nombre: "TROCITOS MARINADO 5XB" }
];

// Carga inicial uniendo los estáticos con los guardados por el usuario
let clientesCreados = JSON.parse(localStorage.getItem("clientesCreados")) || [];
let clientes = [...CLIENTES_ESTATICOS, ...clientesCreados];

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
let pedidoIdEditando = null;

function guardarDatos() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    localStorage.setItem("clientesCreados", JSON.stringify(clientesCreados));
}

function agregarNuevoCliente() {
    const txtNombre = document.getElementById("nuevoNombre").value.trim().toUpperCase();
    const txtCodigo = document.getElementById("nuevoCodigo").value.trim();

    if (!txtNombre) {
        alert("El nombre del cliente es obligatorio.");
        return;
    }

    if (txtCodigo) {
        const existeCodigo = clientes.some(c => c.codigo === txtCodigo);
        if (existeCodigo) {
            alert(`¡Advertencia! El código [${txtCodigo}] ya pertenece a otro cliente asignado.`);
            return;
        }
    }

    const nuevoCliente = {
        codigo: txtCodigo || "--",
        nombre: txtNombre
    };

    clientesCreados.push(nuevoCliente);
    clientes.push(nuevoCliente);

    guardarDatos();
    cargarClientes(clientes);
    
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevoCodigo").value = "";
    alert(`Cliente "${txtNombre}" agregado exitosamente.`);
}


function cargarClientes() {
    // 1. Recargamos los datos del almacenamiento cada vez que necesitamos pintar la lista
    const creados = JSON.parse(localStorage.getItem("clientesCreados")) || [];
    const listaActualizada = [...CLIENTES_ESTATICOS, ...creados];
    
    const select = document.getElementById("clienteInput");
    if (!select) return;

    // 2. Usamos 'listaActualizada' en lugar de la variable global 'clientes'
    select.innerHTML = listaActualizada.map(c => 
        `<option value="${c.nombre}">[Cod: ${c.codigo}] ${c.nombre}</option>`
    ).join('');
}

function cargarProductosFiltrados(listaAMostrar = productos) {
    const select = document.getElementById("productoInput");
    if (!select) return;
    if (listaAMostrar.length === 0) {
        select.innerHTML = `<option value="">-- No se encontraron productos --</option>`;
        return;
    }
    select.innerHTML = listaAMostrar.map(p => 
        `<option value="${p.nombre}">[Cod: ${p.codigo}] ${p.nombre}</option>`
    ).join('');
    cambiarProducto();
}

function esPolloLimpio(nombreProducto) {
    if (!nombreProducto) return false;
    const nombre = nombreProducto.toUpperCase().trim();
    // Ahora detecta ambos tipos
    return nombre.startsWith("POLLO LIMPIO") || nombre.startsWith("PORCIONADO");
}

function extraerRangoDelNombre(nombreProducto) {
    if (!nombreProducto) return 1.2;

    const coincidencia = nombreProducto.match(/(\d+[\.,]\d+|\d+K|\d+\s*K)/);
    
    if (coincidencia) {
        let valor = coincidencia[0].toUpperCase();
        valor = valor.replace('K', '').replace(',', '.');
        return parseFloat(valor) || 1.2;
    }
    
    if (nombreProducto.includes("1.5")) return 1.5;
    if (nombreProducto.includes("1.6")) return 1.6;
    if (nombreProducto.includes("1.7") || nombreProducto.includes("1,7")) return 1.7;
    if (nombreProducto.includes("1.8") || nombreProducto.includes("1,8")) return 1.8;
    if (nombreProducto.includes("1.9")) return 1.9;
    if (nombreProducto.includes("2K") || nombreProducto.includes("2.0")) return 2.0;
    if (nombreProducto.includes("2.2")) return 2.2;

    return 1.2; 
}

function cambiarProducto() {
    const select = document.getElementById("productoInput");
    const selectTamano = document.getElementById("tamanoSelect");
    if (!select || !selectTamano) return;

    const labelTamano = document.querySelector('label[for="tamanoSelect"]') || selectTamano.previousElementSibling; 
    const inputKilogramos = document.getElementById("kilogramos"); 

    if (esPolloLimpio(select.value)) {
        if (labelTamano) labelTamano.style.display = "none";
        selectTamano.style.display = "none";
        selectTamano.value = ""; 
        if (inputKilogramos) {
            inputKilogramos.readOnly = true;
            inputKilogramos.placeholder = "Cálculo automático";
        }
    } else {
        if (labelTamano) labelTamano.style.display = "block";
        selectTamano.style.display = "block";
        if (inputKilogramos) {
            inputKilogramos.readOnly = false;
            inputKilogramos.placeholder = "Digite los kilos";
        }
    }
    calcularPesoAutomatico();
}

function calcularPesoAutomatico() {
    const select = document.getElementById("productoInput");
    const inputKilogramos = document.getElementById("kilogramos");
    if (!select || !inputKilogramos) return;

    if (esPolloLimpio(select.value)) {
        const inputUnidades = document.getElementById("unidades");
        const unidades = inputUnidades ? (Number(inputUnidades.value) || 0) : 0;
        const rango = extraerRangoDelNombre(select.value); // Calculado directamente desde el nombre
        
        if (unidades > 0) {
            inputKilogramos.value = (unidades * rango).toFixed(2);
        } else {
            inputKilogramos.value = ""; 
        }
    }
}

function cambiarProductoModal() {
    const select = document.getElementById("editProductoInput");
    const selectTamanoModal = document.getElementById("editTamanoSelect");
    if (!select || !selectTamanoModal) return;

    const labelTamanoModal = document.querySelector('label[for="editTamanoSelect"]') || selectTamanoModal.previousElementSibling; 
    const inputKilogramosModal = document.getElementById("editKilogramos"); 

    if (esPolloLimpio(select.value)) {
        if (labelTamanoModal) labelTamanoModal.style.display = "none";
        selectTamanoModal.style.display = "none";
        selectTamanoModal.value = ""; 
        if (inputKilogramosModal) inputKilogramosModal.readOnly = true;
    } else {
        if (labelTamanoModal) labelTamanoModal.style.display = "block";
        selectTamanoModal.style.display = "block";
        if (inputKilogramosModal) {
            inputKilogramosModal.readOnly = false;
        }
    }
    calcularPesoAutomaticoModal();
}

function calcularPesoAutomaticoModal() {
    const select = document.getElementById("editProductoInput");
    const inputKilogramosModal = document.getElementById("editKilogramos");
    if (!select || !inputKilogramosModal) return;

    if (esPolloLimpio(select.value)) {
        const inputUnidades = document.getElementById("editUnidades");
        const unidades = inputUnidades ? (Number(inputUnidades.value) || 0) : 0;
        const rango = extraerRangoDelNombre(select.value); // Calculado directamente desde el nombre
        
        if (unidades > 0) {
            inputKilogramosModal.value = (unidades * rango).toFixed(2);
        } else {
            inputKilogramosModal.value = "";
        }
    }
}

function agregarPedido() {
    const ruta = document.getElementById("rutaSelect").value;
    const clienteNombre = document.getElementById("clienteInput").value.toUpperCase(); // <--- .toUpperCase()
const productoNombre = document.getElementById("productoInput").value.toUpperCase(); // <--- .toUpperCase()
    const kilos = Number(document.getElementById("kilogramos").value);
    const tamano = document.getElementById("tamanoSelect").value;
    const unidades = document.getElementById("unidades").value; 

    if (!clienteNombre || !productoNombre || !kilos || kilos <= 0) {
        alert("Por favor valide que seleccionó un cliente, producto y asignó kilogramos válidos.");
        return;
    }

    const txtTamano = tamano || "";
    const txtUnidades = unidades || "";

    const indiceExistente = pedidos.findIndex(p => 
        p.ruta === ruta &&
        p.cliente === clienteNombre &&
        p.producto === productoNombre &&
        p.tamano === txtTamano
    );

    if (indiceExistente !== -1) {
        pedidos[indiceExistente].kilogramos = Number((pedidos[indiceExistente].kilogramos + kilos).toFixed(2));
        if (txtUnidades) {
            const unidadesActuales = Number(pedidos[indiceExistente].unidades) || 0;
            pedidos[indiceExistente].unidades = String(unidadesActuales + Number(txtUnidades));
        }
    } else {
        pedidos.push({
            id: Date.now(),
            ruta,
            cliente: clienteNombre,
            producto: productoNombre,
            kilogramos: kilos,
            unidades: txtUnidades, 
            tamano: txtTamano
        });
    }

    guardarDatos();
    mostrarPedidos();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("kilogramos").value = "";
    document.getElementById("unidades").value = "";
    document.getElementById("tamanoSelect").value = "";
    cargarClientes();
    cargarProductosFiltrados();
}

function mostrarPedidos() {
    const tabla = document.getElementById("tablaPedidos");
    if (!tabla) return;
    tabla.innerHTML = "";

    // ORDENAMOS POR ID DE FORMA DESCENDENTE (LOS MÁS RECIENTES PRIMERO)
    const pedidosOrdenados = [...pedidos].sort((a, b) => b.id - a.id);

    pedidosOrdenados.forEach(p => {
        tabla.innerHTML += `
        <tr>
            <td><strong>${p.ruta}</strong></td>
            <td>${p.cliente}</td>
            <td>${p.producto}</td>
            <td>${p.kilogramos} Kg</td>
            <td>${p.unidades || "-"}</td>
            <td>${p.tamano || "-"}</td>
            <td>
                <button class="btn-editar" onclick="editarPedido(${p.id}); return false;">Editar</button>
                <button class="btn-eliminar" onclick="eliminarPedido(${p.id}); return false;">Eliminar</button>
            </td>
        </tr>`;
    });

    generarReportes();
}

function abrirModal() {
    const modal = document.getElementById("modalEditar");
    if (modal) modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById("modalEditar");
    if (modal) modal.style.display = "none";
    pedidoIdEditando = null;
}

function editarPedido(id) {
    const p = pedidos.find(pedido => pedido.id === id);
    if (!p) return alert("Pedido no encontrado");

    pedidoIdEditando = id;
    document.getElementById("editRutaSelect").value = p.ruta;

    const selectCliente = document.getElementById("editClienteInput");
    if (selectCliente) {
        selectCliente.innerHTML = clientes.map(c => `<option value="${c.nombre}">[Cod: ${c.codigo}] ${c.nombre}</option>`).join('');
        selectCliente.value = p.cliente;
    }

    const selectProducto = document.getElementById("editProductoInput");
    if (selectProducto) {
        selectProducto.innerHTML = productos.map(pr => `<option value="${pr.nombre}">[Cod: ${pr.codigo}] ${pr.nombre}</option>`).join('');
        selectProducto.value = p.producto;
    }

    cambiarProductoModal();

    document.getElementById("editKilogramos").value = p.kilogramos;
    document.getElementById("editUnidades").value = p.unidades || "";
    
    if (!esPolloLimpio(p.producto)) {
        document.getElementById("editTamanoSelect").value = p.tamano || "";
    }

    abrirModal();
}

function guardarCambiosPedido() {
    const ruta = document.getElementById("editRutaSelect").value;
    const clienteNombre = document.getElementById("editClienteInput").value;
    const productoNombre = document.getElementById("editProductoInput").value;
    const kilos = Number(document.getElementById("editKilogramos").value);
    const tamano = document.getElementById("editTamanoSelect").value;
    const unidades = document.getElementById("editUnidades").value;

    if (!kilos || kilos <= 0) {
        alert("Digite los kilogramos");
        return;
    }

    const index = pedidos.findIndex(p => p.id === pedidoIdEditando);
    if (index !== -1) {
        pedidos[index] = {
            ...pedidos[index],
            ruta,
            cliente: clienteNombre,
            producto: productoNombre,
            kilogramos: kilos,
            unidades: unidades || "",
            tamano: esPolloLimpio(productoNombre) ? "" : (tamano || "")
        };
    }

    guardarDatos();
    mostrarPedidos();
    cerrarModal();
}

window.onclick = function(event) {
    const modal = document.getElementById("modalEditar");
    if (event.target == modal) cerrarModal();
}

function eliminarPedido(id) {
    if (confirm("¿Eliminar pedido?")) {
        pedidos = pedidos.filter(p => p.id !== id);
        guardarDatos();
        mostrarPedidos();
    }
}

function generarReportes() {
    reporteCliente();
    reporteGeneral();
}

function reporteCliente() {
    const div = document.getElementById("reporteCliente");
    if (!div) return;
    div.innerHTML = "";

    const rutas = ["Turrialba", "Guapiles"];

    rutas.forEach(ruta => {
        const pedidosRuta = pedidos.filter(p => p.ruta === ruta);
        if (pedidosRuta.length === 0) return;

        div.innerHTML += `<h2>--- RUTA ${ruta.toUpperCase()} ---</h2>`;
        const clientesOrdenados = [...new Set(pedidosRuta.map(p => p.cliente))].sort();

        clientesOrdenados.forEach(cliente => {
            let total = 0;
            let html = `<h3>${cliente}</h3>`;

            pedidosRuta.filter(p => p.cliente === cliente).forEach(p => {
                total += Number(p.kilogramos);
                const txtTamano = p.tamano ? `(${p.tamano})` : "";
                html += `${p.producto} ${txtTamano} - ${p.kilogramos} Kg ${p.unidades ? "- " + p.unidades + " Unidades" : ""}<br>`;
            });

            html += `<strong>TOTAL ${cliente}: ${total.toFixed(2)} Kg</strong><hr>`;
            div.innerHTML += html;
        });
    });
}

function reporteGeneral() {
    const div = document.getElementById("reporteGeneral");
    if (!div) return;
    div.innerHTML = "";

    const rutas = ["Turrialba", "Guapiles"];
    let granTotalAbsoluto = 0;

    rutas.forEach(ruta => {
        const pedidosRuta = pedidos.filter(p => p.ruta === ruta);
        if (pedidosRuta.length === 0) return;

        div.innerHTML += `<h3>Ruta ${ruta}</h3>`;
        
        // Usamos un objeto para agrupar por "Producto + Tamaño"
        let resumen = {};
        let subtotalRuta = 0;

        pedidosRuta.forEach(p => {
            // Creamos una clave única que incluye el tamaño si existe
            const tamanoLabel = p.tamano ? ` (${p.tamano})` : "";
            const key = p.producto + tamanoLabel; 
            
            // Si la clave no existe, la inicializamos
            if (!resumen[key]) {
                resumen[key] = 0;
            }
            resumen[key] += Number(p.kilogramos);
        });

        // Mostramos los resultados separados por la clave única[cite: 3]
        for (let key in resumen) {
            subtotalRuta += resumen[key];
            div.innerHTML += `${key}: ${resumen[key].toFixed(2)} Kg<br>`;
        }
        
        granTotalAbsoluto += subtotalRuta;
        div.innerHTML += `<strong>Total Ruta ${ruta}: ${subtotalRuta.toFixed(2)} Kg</strong><hr>`;
    });

    if (pedidos.length === 0) {
        div.innerHTML = `<h2>TOTAL GENERAL COMPLETO: 0.00 Kg</h2>`;
    } else {
        div.innerHTML += `<h2>TOTAL GENERAL COMPLETO: ${granTotalAbsoluto.toFixed(2)} Kg</h2>`;
    }
}

function exportarPDF() {
    if (pedidos.length === 0) {
        alert("No hay pedidos registrados para exportar.");
        return;
    }

    const rutasConPedidos = [...new Set(pedidos.map(p => p.ruta))];

    if (rutasConPedidos.length > 1) {
        const opcion = prompt(
            "Se detectaron pedidos de múltiples rutas.\n\n" +
            "Digite el número de la opción que desea descargar:\n" +
            "1 - Solo Ruta Turrialba (1 archivo PDF)\n" +
            "2 - Solo Ruta Guapiles (1 archivo PDF)\n" +
            "Si presiona Cancelar, no se descargará nada."
        );

        if (opcion === null) return; 
        const seleccion = opcion.trim();

        if (seleccion === "1") {
            generarUnicoPDF("Turrialba");
        } else if (seleccion === "2") {
            generarUnicoPDF("Guapiles");
        } else {
            alert("Opción no válida. Descarga cancelada.");
        }
    } else {
        generarUnicoPDF(rutasConPedidos[0]);
    }
}

function generarUnicoPDF(ruta) {
    const pedidosRuta = pedidos.filter(p => p.ruta === ruta);
    if (pedidosRuta.length === 0) return; 

    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    const imgLogo = new Image();
    // Quitamos la barra diagonal inicial para evitar conflictos de rutas relativas en producción
    imgLogo.src = '/img/logo.jpeg'; 

    // Establecemos un temporizador de seguridad (Timeout) de 800ms.
    // Si la imagen no carga en ese tiempo, descargamos el PDF de todas formas sin el logo.
    let pdfGenerado = false;
    const timeoutSeguridad = setTimeout(() => {
        if (!pdfGenerado) {
            pdfGenerado = true;
            console.warn("La carga del logo tardó demasiado. Generando PDF sin logo por seguridad.");
            completarPDF(doc, ruta, pedidosRuta, null);
        }
    }, 800);

    imgLogo.onload = function() {
        if (!pdfGenerado) {
            pdfGenerado = true;
            clearTimeout(timeoutSeguridad);
            completarPDF(doc, ruta, pedidosRuta, imgLogo);
        }
    };

    imgLogo.onerror = function() {
        // Si falla el primer intento, probamos directamente sin logo para asegurar la descarga en móvil
        if (!pdfGenerado) {
            pdfGenerado = true;
            clearTimeout(timeoutSeguridad);
            completarPDF(doc, ruta, pedidosRuta, null);
        }
    };
}

function completarPDF(doc, ruta, pedidosRuta, imgElement) {
    let y = 25;

    if (imgElement) {
        try {
            doc.addImage(imgElement, 'JPEG', 160, 10, 30, 30);
        } catch (e) {
            console.warn("No se pudo incrustar el logo en el PDF:", e);
        }
    }

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text("POLLOS 3M", 20, y);
    y += 7;

    doc.setFontSize(10);
    doc.setFont("Helvetica", "normal");
    doc.text("Calidad y Frescura 100%", 20, y);
    y += 5;
    doc.text("Contacto: 7116 4497", 20, y);
    y += 12;

    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text(`REPORTE DE PEDIDOS - RUTA ${ruta.toUpperCase()}`, 20, y);
    y += 10;

    let totalRuta = 0;
    const clientesOrdenados = [...new Set(pedidosRuta.map(p => p.cliente))].sort();

    // Listado detallado por cliente
    clientesOrdenados.forEach(cliente => {
        if (y > 260) { doc.addPage(); y = 20; }

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(11);
        doc.text(`   Cliente: ${cliente}`, 20, y);
        y += 6;

        let totalCliente = 0;
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);

        pedidosRuta.filter(p => p.cliente === cliente).forEach(p => {
            if (y > 270) { doc.addPage(); y = 20; }

            totalCliente += Number(p.kilogramos);
            totalRuta += Number(p.kilogramos);
            
            const t = p.tamano ? ` (${p.tamano})` : "";
            let linea = `     - ${p.producto}${t}: ${p.kilogramos} Kg`;
            if (p.unidades) linea += ` (${p.unidades} Unid)`;

            doc.text(linea, 20, y);
            y += 6;
        });

        doc.setFont("Helvetica", "bold");
        doc.text(`     TOTAL ${cliente}: ${totalCliente.toFixed(2)} Kg`, 20, y);
        y += 10;
    });

    // --- NUEVO APARTADO: RESUMEN CONSOLIDADO POR PRODUCTO (CORREGIDO) ---
    y += 10;
    if (y > 250) { doc.addPage(); y = 20; }
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text("RESUMEN CONSOLIDADO POR PRODUCTO:", 20, y);
    y += 8;
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);

    let resumen = {};
    pedidosRuta.forEach(p => {
        const t = p.tamano ? ` (${p.tamano})` : "";
        const key = p.producto + t;
        
        if (!resumen[key]) {
            resumen[key] = { kilos: 0, unidades: 0 };
        }
        resumen[key].kilos += Number(p.kilogramos);
        resumen[key].unidades += (Number(p.unidades) || 0);
    });

    for (let key in resumen) {
        let lineaResumen = ` - ${key}: ${resumen[key].kilos.toFixed(2)} Kg`;
        if (resumen[key].unidades > 0) {
            lineaResumen += ` (${resumen[key].unidades} Unidades)`;
        }
        
        doc.text(lineaResumen, 25, y);
        y += 6;
        if (y > 270) { doc.addPage(); y = 20; }
    }
    // --------------------------------------------------------

    y += 5;
    if (y > 250) { doc.addPage(); y = 20; }
    
    doc.line(20, y, 100, y);
    y += 8;
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(13);
    doc.text(`TOTAL RUTA ${ruta.toUpperCase()}: ${totalRuta.toFixed(2)} Kg`, 20, y);

    doc.save(`Reporte_Ruta_${ruta}.pdf`);
}

function limpiarDatos() {
    if (!confirm("¿Borrar todos los pedidos registrados? (Nota: Los clientes agregados manualmente se reiniciarán)")) return;

    localStorage.removeItem("pedidos");
    localStorage.removeItem("clientesCreados");
    pedidos = [];
    clientesCreados = [];
    clientes = [...CLIENTES_ESTATICOS];
    
    cargarClientes();
    cargarProductosFiltrados();
    mostrarPedidos(); 
    alert("Datos e historial reiniciados correctamente.");
}

function actualizarListas() {
    const listC = document.getElementById("listaClientes");
    const listP = document.getElementById("listaProductos");
    
    // Llenamos las listas con los nombres en MAYÚSCULAS para que siempre coincidan
    listC.innerHTML = clientes.map(c => `<option value="${c.nombre.toUpperCase()}">`).join('');
    listP.innerHTML = productos.map(p => `<option value="${p.nombre.toUpperCase()}">`).join('');
}

// --- NUEVA FUNCIÓN PARA ELEGIR RUTA DE RESUMEN ---
function exportarResumenPorRuta() {
    if (pedidos.length === 0) {
        alert("No hay pedidos registrados.");
        return;
    }

    // 1. Detectar las rutas únicas existentes
    const rutasUnicas = [...new Set(pedidos.map(p => p.ruta))];

    // 2. Lógica inteligente: Si solo hay una ruta, descargar directo
    if (rutasUnicas.length === 1) {
        generarPDFResumen(rutasUnicas[0]);
    } 
    // 3. Si hay más de una, preguntar
    else {
        let mensaje = "Seleccione la ruta que desea descargar:\n\n";
        rutasUnicas.forEach((ruta, index) => {
            mensaje += `${index + 1} - ${ruta}\n`;
        });

        const seleccion = prompt(mensaje);

        if (seleccion !== null) {
            const indice = parseInt(seleccion) - 1;
            if (indice >= 0 && indice < rutasUnicas.length) {
                generarPDFResumen(rutasUnicas[indice]);
            } else {
                alert("Opción no válida.");
            }
        }
    }
}

// --- NUEVA FUNCIÓN QUE GENERA EL PDF SOLO DE PRODUCTOS ---
function generarPDFResumen(ruta) {
    const pedidosRuta = pedidos.filter(p => p.ruta === ruta);
    if (pedidosRuta.length === 0) {
        alert("No hay pedidos en esta ruta.");
        return;
    }

    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let y = 25;
    let totalKilosRuta = 0; // Acumulador para el gran total

    // Preparar el logo
    const imgLogo = new Image();
    imgLogo.src = '/img/logo.jpeg'; // Asegúrate de que esta ruta sea correcta

    // Función que dibuja el contenido del PDF
    const procesarPDF = (img) => {
        // 1. Dibujar Logo si existe
        if (img && img.complete) {
            try {
                doc.addImage(img, 'JPEG', 160, 10, 30, 30);
            } catch (e) {
                console.error("Error al cargar el logo:", e);
            }
        }

        // 2. Encabezado
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(18);
        doc.text(`RESUMEN CONSOLIDADO: ${ruta.toUpperCase()}`, 20, y);
        y += 15;

        // 3. Lógica de consolidado
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);

        let resumen = {};
        pedidosRuta.forEach(p => {
            const t = p.tamano ? ` (${p.tamano})` : "";
            const key = p.producto + t;
            
            if (!resumen[key]) {
                resumen[key] = { kilos: 0, unidades: 0 };
            }
            resumen[key].kilos += Number(p.kilogramos);
            resumen[key].unidades += (Number(p.unidades) || 0);
            
            // Sumar al total de la ruta
            totalKilosRuta += Number(p.kilogramos);
        });

        // 4. Dibujar lista de productos
        for (let key in resumen) {
            let linea = ` - ${key}: ${resumen[key].kilos.toFixed(2)} Kg`;
            if (resumen[key].unidades > 0) {
                linea += ` (${resumen[key].unidades} Unidades)`;
            }
            doc.text(linea, 20, y);
            y += 8;
        }

        // 5. Dibujar Total Final
        y += 10;
        doc.line(20, y, 100, y); // Línea divisoria
        y += 8;
        doc.setFont("Helvetica", "bold");
        doc.text(`TOTAL RUTA ${ruta.toUpperCase()}: ${totalKilosRuta.toFixed(2)} Kg`, 20, y);

        // 6. Guardar
        doc.save(`Resumen_Productos_${ruta}.pdf`);
    };

    // Ejecutar con carga de imagen
    imgLogo.onload = () => procesarPDF(imgLogo);
    imgLogo.onerror = () => procesarPDF(null);
}

// Inicialización segura de la aplicación
window.addEventListener('DOMContentLoaded', () => {
    cargarClientes();
    cargarProductosFiltrados();
    mostrarPedidos();
    actualizarListas()
});