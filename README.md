# Visor de Super Heroes (Dentsu Creative)
El presente proyecto, corresponde al entregable correspondiente a la prueba técnica para la empresa Dentsu como desarrollador Full Stack y la funcionalidad principa consiste en desarrollar un visor de superhéroes que permita a los usuarios navegar entre ellos, conocer sus habilidades y votar para establecer un ranking.

## Características del Visor

- Cada superhéroe tiene una página interna.
- El visor está diseñado para dispositivos móviles.
- La interfaz muestra una vista de cuadrícula con tarjetas individuales. Cada tarjeta contiene la imagen, el nombre, la descripción y el editor del superhéroe.
- Cada tarjeta cuenta con botones "Me Gusta" y "No me Gusta", cuyos votos se almacenan en una Cookie o en LocalStorage.
- Los resultados se presentan de manera paginada en grupos de 9 tarjetas.

## Ranking de los 10 Más Votados

- Existe una tercera vista que muestra un slider con el ranking "Los 10 más votados". Los usuarios pueden acceder a esta vista a través de un botón en la vista principal.

## Notas para los Desarrolladores

- El servicio debe ser implementado en un lenguaje de alto nivel y puede hacer uso de frameworks.
- El servicio debe proporcionar tokens para consumir la API.
- Se permite el uso de frameworks Frontend como AngularJs, Angular, ReactJs, VueJs, entre otros.
- Los desarrolladores tienen flexibilidad para tomar decisiones relacionadas con la interfaz gráfica.
- Se necesita un método que exponga la información de los superhéroes inscritos para la API.

# Pasos para la instalacion del proyecto Front End

1.	Realice la instalación de Node.js desde el sitio https://nodejs.org/es/ (si aún no lo ha realizado), version v14.21.3.
2.	Clone el repositorio desde GitHub con el siguiente comando: git clone https://github.com/wilmarti/VisorSuperHeroes.git
3.	Abra la carpeta denominada FrontEndPrueba en un editor de codigo como Visual Studio code.
4.	Presione el comando “npm i”, para descargar todas las dependencias del proyecto.
5.	Para lanzar el Front End digite el comando “npm run serve”
7.	Copie la url que el comando anterior le entregue, ejemplo http://localhost:8082/ y péguela en el navegador de su preferencia.
8.	Debe observar algo como se muestra en la siguiente imagen:

# Buenas Prácticas de Desarrollo Front-End

Este proyecto de páctica contiene un conjunto de buenas prácticas para el desarrollo front-end. Estas prácticas están diseñadas para mejorar la calidad del código, la colaboración y la mantenibilidad de proyectos front-end.

## Contenido

1. [Estructura de Carpetas](#estructura-de-carpetas)
2. [Nomenclatura y Convenciones](#nomenclatura-y-convenciones)
3. [Rendimiento](#rendimiento)
4. [Compatibilidad con Navegadores](#compatibilidad-con-navegadores)
5. [Control de Versiones](#control-de-versiones)
6. [Herramientas y Dependencias](#herramientas-y-dependencias)
7. [Diseño para dispositivos móviles](#diseño-para-dispositivos-móviless)
8. [Recursos Adicionales Utilizados](#recursos-adicionales-utilizados)

## Estructura de Carpetas

- La carpeta principal del proyecto se denomina FrontEndPrueba, la cual organiza los archivos de manera lógica y coherente para facilitar la navegación y el mantenimiento.
- El proyecto usa la siguiente estructura de carpetas: `src/`,`components/`,`router/`,`store/`,`views/`,`assets/`, `css/`, `js/`, `images/`, etc., lo cual evidencia la organizacion de la estructura y de los correspondientes archivos.

## Nomenclatura y Convenciones

- Se utilizaron nombres de variables, componentes e identificadores descriptivos y significativos.
- Se Siguio una convención de nomenclatura consistente la cual fue camelCase.

## Rendimiento

- Optimiza y comprime tus recursos (imágenes, CSS, JS) para reducir los tiempos de carga.
- Minimiza las solicitudes HTTP combinando archivos CSS y JS.
- Utiliza técnicas como el "lazy loading" para retrasar la carga de recursos no visibles inicialmente.

## Accesibilidad

- Diseña y desarrolla con la accesibilidad en mente para garantizar que todos los usuarios puedan acceder a tu contenido.
- Usa etiquetas semánticas apropiadas para estructurar el contenido.
- Proporciona descripciones alternativas (atributo `alt`) para las imágenes.

## Compatibilidad con Navegadores

- Prueba y asegúrate de que tu sitio funcione correctamente en una variedad de navegadores y dispositivos.
- Considera el uso de herramientas como Autoprefixer para manejar los prefijos de proveedores en CSS.

## Control de Versiones

- Utiliza un sistema de control de versiones, como Git, para rastrear y administrar los cambios en tu código.
- Crea ramas separadas para características, correcciones y experimentos, y realiza fusiones a la rama principal (por ejemplo, `main` o `master`) mediante solicitudes pull.

## Herramientas y Dependencias

- JavaScript como lenguaje de alto nivel.
- Se utilizo Vue.js como Framework Front end
- Para el Back End se utilizo el Api Rest de Marvel (https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=345d1a90c95c65fcb
e249e2906cef261&hash=5d1b5769ce0f6716c78da23702ad53e0)
Las utilidades y dependencias extras utilizadas fueron las siguiente:
   * Axios (es un paquete que encontraremos en npm y que nos permite hacer peticiones o llamadas al contenido de un enlace HTTP.)
   * Vuetify (Biblioteca de interfaz de usuario de Vue que ofrece componentes de Material Design Framework)
   * ScrollDiv (componente contenedor de desplazamiento basado en vue.js)
   * VuePaginate (componente de paginacion basado en vue.js)
- Proporciona instrucciones claras sobre cómo configurar el entorno de desarrollo y cómo instalar dependencias.

## Diseño para dispositivos móviles

- El sistema fue diseñado utilizando Vuetify (Biblioteca de interfaz de usuario de Vue que ofrece componentes de Material Design Framework),esta libreria facilita el traajo para el manejo de interfaces de usuario responsivas, es decir, autoajusables a dispositivos móviles, tabien se trabajo con el sistema de cajas Flexbox, el cual es un modelo de diseño CSS3 para manejo de estructuras responsivas.
- Tambien se realizo el diseño con tarjetas, para facilitar la vista y navegación en el sitio y cualquier dispositivo movil.

## Recursos Adicionales Utilizado
  1. Reutilizacion de funciones
2. try catch
3. identacion de codigo
4. documentación de codigo
5. Async away
6. Estucturacion en vistas y en componentes
7. .ENV
---


```




 
