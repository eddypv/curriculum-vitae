# Pagina Web para Hoja de Vida

## Seciones

Informacion profesional que incluye las siguientes secciones:

* Contacto.
* Educación.
* Experiencia.
* Habilidades.
* Integraciones.
* Reconocimientos.
* Otros.

El archivo donde se encuentra todas las secciones es src/json/info.json

## Dependencias de desarrollo

* babel-core 6.26.3
* babel-loader  7.1.5
* babel-preset-es2015 6.24.1
* babel-preset-react 6.24.1
* babel-preset-stage-26.24.1
* clean-webpack-plugin 1.0.0
* css-loader 1.0.1
* file-loader 2.0.0
* mini-css-extract-plugin 0.4.4
* optimize-css-assets-webpack-plugin 5.0.1
* style-loader 0.23.1
* url-loader 1.1.2
* webpack 4.25.1
* webpack-cli 3.1.2
* webpack-dev-server 3.1.10

## Dependencias de producción

* react 16.6.0
* react-dom 16.6.0

## Instalación

Ejecutar el siguiente comando:

> npm install

## Generar el archivo vendor.js

Para optimizar el modo desarrollador es necesario crear un DLL con las librerias de terceros(react, react-dom). Para generar el archivo vendor.js ejecutar el siguiente comando:

> npm run build:dll

## Ejecutar modo desarrollo

> npm run build:dev

## Ejecutar modo producción

Para genera los archivos para produccion, ejecutar el siguiente comando: 

> npm run build:pro