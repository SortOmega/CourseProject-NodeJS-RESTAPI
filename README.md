# PROYECTO EXPRESS CON TYPESCRIPT

## Descripción

Aplicación web API REST CRUD, elaborada mediante Node.js y Express.js, basado en el proyecto del Curso de Node.js del Youtuber del canal "Desarrollo Útil". El lenguaje utilizado fue Typescript, para darle agregarle un poco de diferencia y complejitud al proyecto. Mas información detallada sobre el proyecto se puede encontrar en el repositorio oficial del Youtuber "Desarrollo Útil".

## Paquetes Usados

- ✅ express
- ✅ dotenv
- ✅ ajv
- ✅ ajv-formats
- ✅ ajv-errors
- ✅ jose
- ✅ bcrypt
- ✅ mongoose
- ✅ @sinclair/typebox

## Paquetes de Desarrollo Usados

- ✅ typescript
- ✅ ts-node-dev
- ✅ @types/express
- ✅ @types/dotenv
- ✅ @types/node
- ✅ @types/bcrypt

## Proceso de instalacion

- Dentro de la carpeta del proyecto, en una terminal o consola, ejecutaremos:

```
npm install
```

- Esto nos instalara todos los paquetes o dependecias de node que se encuentran en el archivo package.json

## Herramientas / Lenguajes

- [VSCode](https://code.visualstudio.com/) - Editor de codigo
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programacion y scripting web
- [NodeJs 16.16.0](https://nodejs.org/es/download/) - Motor de Javascript para ejecucion
- [Typscript 5.0.0-dev.20221113](https://www.typescriptlang.org/) - Lenguaje de programacion, superconjunto de Javascript
- [NPM](https://www.npmjs.com/) - Gestor de dependencias

## Scripts del Proyecto

- Iniciar la configuracion de typescript desde npm, obviando el primer parametro (que representa a npm) y el segundo paramentro con 'init' (que representa a tsc)

```
npm run tsc -- --init
```

- Vigilador de cambios y autoejecutacion para Typescript:

```
npm run dev
```

- Transpila todo el proyecto de Typescript a Javascript en una carpeta "build"

```
npm run tsc
```

- Ejecuta el Proyecto construido en "build" para produccion.

```
npm start
```

## Creditos

- Curso de Node.js y Express.js: [Desarrollo Útil](https://www.youtube.com/playlist?list=PL3aEngjGbYhnrRfZKMxzn79qdgPxL7OWM)
- Repositorio fuente basado del curso y del proyecto: [Desarrollo Útil](https://github.com/Desarrollo-Util/user-management-yt)
