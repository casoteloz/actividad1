const {cursos, opciones} = require ('./cursos');
const fs = require('fs');
const argv = require('yargs')
		    .command('inscribir', 'Realizar inscripción', opciones)
		    .argv;
let {id_c, alumno, cedula} = opciones;

let logica = () =>{
	setTimeout(function(){
		console.log('Primer curso ' + cursos[0].nombre + ', id ' + cursos[0].id +', duracion ' + cursos[0].duracion + ' con un valor de ' + cursos[0].valor);
	}, 2000);	
}

let estructura = () =>{
	setTimeout(function(){
		console.log('Segundo curso ' + cursos[1].nombre + ', id ' + cursos[1].id +', duracion ' + cursos[1].duracion + ' con un valor de ' + cursos[1].valor);
	}, 4000);
}

let discretas = () =>{
	setTimeout(function(){
		console.log('Tercer curso ' + cursos[2].nombre + ', id ' + cursos[2].id +', duracion ' + cursos[2].duracion + ' con un valor de ' + cursos[2].valor);
	}, 6000);
}

let buscar = cursos.find( resultado => resultado.id ==  argv.id_c);

let listaCurso = () =>{
	logica();
	estructura();
	discretas();
}

if(argv.id_c == null){
	listaCurso();
}else if(buscar == null){	
	listaCurso();
	console.log('id curso incorrecto');
}else{
    let info_alumno = (opciones) => {
        let texto = 'Aspirante ' + argv.alumno + '\n' +
		            'número de identificacion ' + argv.cedula + '\n' +
		            'curso seleccionado ' + buscar.nombre + '\n' +
		            'el cual tiene una duracion de ' + buscar.duracion + '\n' +
		            ', con un valor de ' + buscar.valor ;
		            fs.writeFile('aspirante.txt', texto, (err) => {
		                if (err) throw err;
		                console.log('se ha creado el archivo');
		            });
    }
    info_alumno(opciones);	
}