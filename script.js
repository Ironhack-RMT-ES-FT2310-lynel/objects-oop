console.log("probando")


// OBJECTS


/* 

{
  nombreDePropiedad: valorDeLaPropiedad,
  nombreDePropiedad: valorDeLaPropiedad,
  nombreDePropiedad: valorDeLaPropiedad,
  nombreDePropiedad: valorDeLaPropiedad,
}

*/


let headPhones = {

  price: 100,
  isNew: false,
  brand: "SteelSeries",
  "max volume": 90,

  // someArr: [ "hola", "adios" ],
  // someObj: { name: "jorge" },
  // someFuncion: function() { }

}

// notacion de puntos
console.log( headPhones.price )

// notacion de corchetes
console.log( headPhones["max volume"]  )
console.log( headPhones["isNew"]  )

let propiedadAAnalizar = "brand"

console.log( headPhones.propiedadAAnalizar ) // undefined
console.log( headPhones[propiedadAAnalizar] ) // SteelSeries


console.log(headPhones)

// actualizar propiedades

headPhones.isNew = true
console.log(headPhones)

// crear propiedades => asignamos una que no exista

headPhones.color = "blue"
console.log(headPhones)


headPhones["fabrication code"] = "XZTY"
console.log(headPhones)

// borrar => delete

delete headPhones.brand
console.log(headPhones)



// analizar objetos


// Objeto global Object

console.log( Object.keys(headPhones) ) // array con nombres de propiedades

console.log( Object.values(headPhones) ) // array con valores de propiedades

// bucle for in => principalmente utilizado para iterar sobre objetos

for ( let nombreDePropiedad in headPhones ) {

  // let nombreDePropiedad = ???
  console.log(nombreDePropiedad)

  // console.log(headPhones.nombreDePropiedad)
  console.log( headPhones[nombreDePropiedad] )

}