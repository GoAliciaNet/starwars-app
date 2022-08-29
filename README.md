

## Introducción

Starwars o La Guerra de las Galaxias, es una serie de exitosas películas que desde su lanzamiento han tenido mucho éxito, razon por la cual, el numero de fans alrededor del mundo es enorme.
Es por ello que esta app esta construida para que sus fans puedan consultar el nombre de cada uno de los personajes que participan en la serie y una breve descripcion de algunas de sus caracteristicas principales, como estatura y peso.



## Stack tecnológico

Esta aplicación due construida con el lenguaje Javascript, y el framework React, aprovechando la herramienta Context para el manejo de estados globales.
Para el manejo de rutas se utiliza react-router-dom y se instaló prettier y eslint para asegurar que se trabaje con un codigo mas limpio y ordenado, que facilite la lectura para otros desarrolladores.



## Secciones

La aplicacion tiene dos secciones funcionales.

### Home

En esta vista se pueden observar las tarjetas con los nombres y datos de cada uno de los personajes. 
Los personajes que se muestran son consultados desde una API de 10 en 10 personajes y se van mostrando conforme el usuario va haciendo scroll.
Se pueden agregar a favoritos o eliminar


### favoritos

En esta vista se observan los personajes que se agregaron desde la vista de home, como favoritos.


# StarWars App

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
