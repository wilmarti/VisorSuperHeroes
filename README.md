# Visor de Super Heroes (Dentsu Creative) - Descripción del Proyecto
El Visor de Superhéroes es una aplicación diseñada para permitir a los usuarios explorar una lista de superhéroes, conocer sus habilidades y votar por ellos para crear un ranking. Este proyecto se enmarca en la prueba técnica para la posición de desarrollador Full Stack en Dentsu.

## Características Principales

- Cada superhéroe cuenta con su propia página interna que muestra información detallada sobre él.
- La interfaz está optimizada para dispositivos móviles, asegurando una experiencia de usuario fluida en diferentes pantallas.
- La vista principal presenta una cuadrícula de tarjetas individuales. Cada tarjeta incluye la imagen, el nombre, la descripción y el editor del superhéroe.
- Los usuarios pueden votar por los superhéroes usando los botones "Me Gusta" y "No me Gusta", y estos votos se almacenan de forma persistente en una Cookie o en LocalStorage.
- Los resultados se presentan de manera paginada, mostrando grupos de 9 tarjetas por página.
- Una vista adicional presenta un slider que muestra el ranking de "Los 10 más votados". Los usuarios pueden acceder a esta vista a través de un botón en la vista principal.

## Tecnologías Utilizadas
- Vue.js: Se utiliza Vue.js como el framework principal para construir la interfaz de usuario y gestionar los componentes de la aplicación.
- Axios: La biblioteca Axios se emplea para realizar solicitudes HTTP y comunicarse con la API de superhéroes.
- Vuetify: Vuetify es un framework de diseño que proporciona componentes y estilos predefinidos para crear una interfaz atractiva y coherente.
- Token (informática), también llamado componente léxico es una cadena de caracteres que tiene un significado coherente en cierto lenguaje de programación. Token de seguridad, utilizado para facilitar el proceso de autenticación de usuarios.
- ScrollDiv (componente contenedor de desplazamiento basado en vue.js)
- VuePaginate (componente de paginacion basado en vue.js)

## Notas para los Desarrolladores
- El servicio backend debe ser implementado en un lenguaje de alto nivel y puede hacer uso de frameworks según tu elección.
- Asegúrate de proporcionar tokens para la autenticación y consumo de la API de superhéroes.
- En el frontend, tienes la libertad de elegir entre frameworks Frontend como AngularJs, Angular, ReactJs, VueJs, entre otros.
- Toma decisiones relacionadas con la interfaz gráfica para crear una experiencia de usuario atractiva y funcional.
- Asegura que el método que exponga la información de los superhéroes inscritos para la API esté correctamente implementado y accesible.

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

- Se optimizaron y comprimieron los recursos (imágenes, CSS, JS) para reducir los tiempos de carga.
- Minimiza las solicitudes HTTP utilizando librerias como axios.
- Se utilizaron herramientas de almacenamiento del navegador, como lo son LocalStorage y Cookies.

## Compatibilidad con Navegadores

- Se Probó y aseguró que el sitio funciona correctamente en una variedad de navegadores y dispositivos.

## Control de Versiones

- Se Utilizó el sistema de control de versiones Git, para rastrear y administrar los cambios en el código.
- Se crearon ramas separadas para características, correcciones y experimentos, y se realizaron fusiones a la rama principal `master` mediante solicitudes pull.

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
- Se realizó el diseño con tarjetas (cards), para facilitar la vista y navegación en el sitio y cualquier dispositivo movil.

## Recursos Adicionales Utilizados
- Reutilizacion de funciones
- Try-Catch (La declaración try... catch señala un bloque de instrucciones a intentar ( try ), y especifica una respuesta si se produce una excepción ( catch ))
- Identacion de codigo (Presentación correcta del codigo fuente en cuanto a espacios y tabulaciones)
- Documentación de codigo
- Async away (característica sintáctica de muchos lenguajes de programación que permite estructurar una función asíncrona sin bloqueo de forma similar a una función síncrona ordinaria)
- Estucturacion en vistas y en componentes (La programación orientada a componentes (que también es llamada basada en componentes) es una rama de la ingeniería del software, con énfasis en la descomposición de sistemas ya conformados en componentes funcionales o lógicos con interfaces bien definidas usadas para la comunicación entre componentes.)
- .ENV (El archivo .env permite personalizar las variables de entorno de trabajo individuales. Puesto que el archivo .env está oculto)
---

``` 
