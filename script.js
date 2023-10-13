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


// Estructura de datos

const users = [
  {
    name: "Jorge",
    bitcoins: 0,
    hasNFTs: false
  },
  {
    name: "Antonio",
    bitcoins: 0,
    hasNFTs: false
  },
  {
    name: "Ruth",
    bitcoins: 0.2,
    hasNFTs: true
  }
]

// imprimir todo el obj el usuario jorge
console.log(users[0])

// queremos imprimir el nombre del primer usuario
console.log( users[0].name )
4
// quiero cambiar la propiedad hasNTFs de Antonio a ser verdadero
// users[1]["hasNFTs"] = true
users[1].hasNFTs = true
console.log(users[1])

// incrementar los bitcoins de Ruth en 1
console.log(users[2].bitcoins)
// users[2].bitcoins = users[2].bitcoins + 1
users[2].bitcoins += 1
console.log(users)

// queremos agregar un nuevo usuario a la lista
let newUser = {
  name: "Adrian",
  bitcoins: 10,
  hasNFTs: true
}

users.push( newUser )

console.log(users)



// creamos una funcion que recibe un usuario.
// 1. si el usuario tienen bitcoins y tiene NFTs entonces nos dice: "El usuario es un crypto bro!"
// 2. caso contrario: "no cree en crypto"

function doesCrypto(oneUser) {
  // let oneUser = ????

  // console.log(oneUser)
  if (oneUser.bitcoins > 0 && oneUser.hasNFTs === true) {
    console.log(`${oneUser.name} es un crypto bro!`)
  } else {
    console.log(`${oneUser.name} no cree en crypto!`)
  }

}

// doesCrypto( users[3] )

for (let i = 0; i < users.length; i++) {

  doesCrypto( users[i] ) // x4 

}



// metodos y la palabra this



let person = {
  name:  "Alice",
  place: "Pais de las maravillas",
  friends: [ "Sombrerero", "Gato Chesire", "Liebre de Marzo", "Humpty Dumpty", "Conejo Blanco" ],
  saludar() {
    // return "Hola, soy alice!"
    // return `Hola, soy ${person.name}!`
    console.log(this)
    // this siempre apunta al objeto en el cual se está estando el this
    return `Hola, soy ${this.name}!`
  },
  currentSize() {

    // cada vez que lo invoco me diga 
    // - 50% que Alice es pequeña
    // - 50% que Alice es Grande

    let randomNumber = Math.random() // 0 - 1
    // console.log(randomNumber)
    if ( randomNumber > 0.5 ) {
      return "Alice es pequeña!"
    } else {
      return "Alice es Grande!"
    }
  },
  desearFelizNoCumpleaños() {

    // cada vez que la invoque, le desee feliz no cumpleaños a un amigo aleatorio de Alice.

    let randomNumber = Math.random() * this.friends.length // 0 - 4.9999999
    let randomIndex = Math.floor(randomNumber)
    return `feliz feliz no cumpleaños a ${this.friends[randomIndex]}`

  }


  // objetoAnimado: {
  //   prop1: "Patata",
  //   unMetodo() {
  //     return this
  //   }
  // }

};

console.log( person.name );

// person.name = "Alice";
console.log( person.saludar(  ) )

console.log( person.currentSize() )

console.log( person.desearFelizNoCumpleaños() )




// CLASSES


class Hero {

  // propiedades
  constructor(patata, identity, hp) {
    this.name = patata;
    this.identity = identity;
    this.isEvil = false; // propiedad para todos. Valor por defecto.
    this.hp = hp
  }

  // metodos
  revelarSecreto() {
    return `Mi identidad secreta es ${this.identity}`
  }

  volverseVillano() {
    this.isEvil = true;
    return `${this.name} ahora es un villano!`
  }

}

let objeto1 = new Hero("Iron Man", "Tony Stark", 100)
console.log(objeto1)
console.log( objeto1.revelarSecreto() )
console.log( objeto1.volverseVillano() )
console.log(objeto1)

let objeto2 = new Hero("Black Widow", "Natasha Romanoff", 120)
console.log(objeto2)
console.log( objeto2.revelarSecreto() )


// subclase
class SuperHero extends Hero {

  // propiedades
  constructor(name, identity, hp, superpower) {
    super( name, identity, hp )
    this.superpower = superpower // esto solo lo tienen los SuperHeroes

  }

  // metodos => todos se heredan de la clase padre automaticamente
  useSuperpower( target ) {
    return `${this.name} está usando el poder de ${this.superpower} en ${target}`
  }

}

let object3 = new SuperHero("Spiderman", "Peter Parker", 60, "lanzar telarañas")
console.log(object3)

console.log(object3.useSuperpower( objeto1.name ))
console.log(object3.volverseVillano())