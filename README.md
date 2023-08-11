# Visor de Super Heroes (Dentsu Creative)

### Pasos para la instalacion del proyecto Front End
```
1.	Realice la instalación de Node.js desde el sitio https://nodejs.org/es/ (si aún no lo ha realizado), version v14.21.3.
2.	Clone el repositorio desde GitHub con el siguiente comando: git clone https://github.com/wilmarti/VisorSuperHeroes.git
3.	Abra la carpeta denominada FrontEndPrueba en un editor de codigo como Visual Studio code.
4.	Presione el comando “npm i”, para descargar todas las dependencias del proyecto.
5.	Para lanzar el Front End digite el comando “npm run serve”
7.	Copie la url que el comando anterior le entregue, ejemplo http://localhost:8082/ y péguela en el navegador de su preferencia.
8.	Debe observar algo como se muestra en la siguiente imagen:

### Herramientas utilizadas
```
1. JavaScript como lenguaje de alto nivel
2. Se utilizo Vue.js como Framework Front end
3. Para el Back End se utilizo el Api Rest de Marvel (https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=345d1a90c95c65fcb
e249e2906cef261&hash=5d1b5769ce0f6716c78da23702ad53e0)
4. Las utilidades extras utilizadas fueron las siguiente:
   * Axios




La pantalla principal de la prueba cuenta con el menú denominado Tienda, el cual tiene 2 submenús, así:

 
Al dar Click en el menú de Productos, podrá ver un top 20 de productos así, en donde podrá enviar productos al carro de compras.


 

La siguiente opción de menú es la denominada Carro de Compras, la cual se ve así: 
 
 

La pantalla anterior tiene las siguientes funcionalidades:

1.	Búsqueda de productos por cada letra ingresada filtra automáticamente.
2.	Conteo de la cantidad de productos dentro del carro de compras
3.	Lista de productos en el carro de compras con descripción, cantidad, valor unidad y valor total. 
4.	Botón de sacar del carro, el cual elimina el producto de carro y devuelve las unidades seleccionadas al stock de la tienda. Así:

 
5.	Botón Comprar el cual pide la siguiente informacion para poder hacer la transaccion.

 

La informacion solicitada es necesaria para realizar la compra y es almacenada en la tabla ventas de la base de datos.



```




 
