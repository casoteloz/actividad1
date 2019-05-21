let cursos = [
	{
		id: 1,
		nombre: 'Lógica y programación',
		duracion: '6 meses',
		valor: '$400.000'
	},
	{
		id: 2,
		nombre: 'Estructura de datos',
		duracion: '8 meses',
		valor: '$900.000'
	},
	{
		id: 3,
		nombre: 'Matemáticas discretas',
		duracion: '4 meses',
		valor: '$500.000'
	}
]

const opciones = {
    id_c: {
        demand: true
    },
    alumno: {
        demand: true
    },
    cedula: {
        demand: true
    }
}


module.exports = {
	cursos,
	opciones
};

