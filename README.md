# Spanish version of GlobalNewsFetcher-NodeJS

## Descripción

GlobalNewsFetcher-NodeJS es una potente biblioteca de Node.js diseñada para simplificar la captura, transformación y carga (ETL) de noticias globales. Utilizando la API de TrawlingWeb, esta herramienta permite a los usuarios y clientes acceder y manipular noticias de cerca de 18 millones de fuentes globales, facilitando su integración en aplicaciones y sistemas en tiempo real.

## Características

- Integración fácil con proyectos basados en Node.js.
- Acceso a noticias de 18 millones de fuentes de 92 países en 43 idiomas, para una cobertura global y diversa.
- Herramientas ETL para capturar, procesar y cargar datos de noticias.
- Soporte para personalización avanzada en la recolección de noticias.

## Requisitos
- Estar dado de alta en algún ETL de TrawlingWeb. Si todavia no estas dado de alta hazlo aquí: [Register](https://dashboard.trawlingweb.com/register)
- Repositorio para el despliegue: [Npm Repository](https://www.npmjs.com/package/trawlingweb)

## Cómo empezar

### Instalación

```bash
npm install globalnewsfetcher-nodejs
```

## Uso básico
Aquí un ejemplo de cómo capturar noticias:

```bash
const GlobalNewsFetcher = require('globalnewsfetcher-nodejs');

// Configuración inicial
const gnf = new GlobalNewsFetcher({ apiKey: 'YOUR_API_KEY' });

// Captura y procesamiento de noticias
gnf.getNews({ query: 'technology' })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Parámetros ejemplo:
- protocol: "http"/"https"(default)
- ts: unixtimestamp in ms
- tsi: unixtimestamp in ms
- sort: "published"/"crawled"(default)
- order: "asc"/"desc"(default)
- format: "xml"/"json"(default)
- size: integer(100 default)


## Documentación
Consulta nuestra documentación oficial dentro del [DashBoard](https://dashboard.trawlingweb.com/), para más detalles sobre la configuración y los métodos disponibles. 

## Contribuir
¿Interesado en contribuir? Lee nuestra guía de contribución para saber cómo puedes ayudar a mejorar GlobalNewsFetcher-NodeJS.

## Licencia
### MIT License

Copyright (c) 2024 Trawlingweb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


# English version of GlobalNewsFetcher-NodeJS

# GlobalNewsFetcher-NodeJS

## Description

GlobalNewsFetcher-NodeJS is a powerful Node.js library designed to streamline the ETL (Extract, Transform, Load) process for global news. By leveraging the TrawlingWeb API, it enables users and clients to access and manipulate news from nearly 18 million global sources, facilitating real-time integration into applications and systems.

## Features

- Easy integration with Node.js projects.
- Access to news from 18 million sources across 92 countries in 43 languages, ensuring broad and diverse global coverage.
- ETL tools for capturing, processing, and loading news data.
- Support for advanced customization in news collection.

## Requirements
- Registration with a TrawlingWeb ETL account. If you are not yet registered, do so here: [Register](https://dashboard.trawlingweb.com/register)
- Repository for deployment: [Npm Repository](https://www.npmjs.com/package/trawlingweb)

## Getting Started

### Installation
```bash
npm install globalnewsfetcher-nodejs
```

## Basic Usage
Example of capturing news:
```bash
const GlobalNewsFetcher = require('globalnewsfetcher-nodejs');

// Configuración inicial
const gnf = new GlobalNewsFetcher({ apiKey: 'YOUR_API_KEY' });

// Captura y procesamiento de noticias
gnf.getNews({ query: 'technology' })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Example Parameters:
- protocol: "http"/"https"(default)
- ts: Unix timestamp in ms
- tsi: Unix timestamp in ms
- sort: "published"/"crawled"(default)
- order: "asc"/"desc"(default)
- format: "xml"/"json"(default)
- size: integer (100 default)


## Documentation
For more details on configuration and available methods, check our official documentation within the [DashBoard](https://dashboard.trawlingweb.com/).

## Contributing
Interested in contributing? Read our contribution guide to learn how you can help improve GlobalNewsFetcher-NodeJS.

## License
### MIT License

Copyright (c) 2024 Trawlingweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
