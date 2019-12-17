# Vertical Real Estate México

## ¿Cómo correrlo localmente?
Una vez que se ha clonado el el repositorio, deben ser instaladas las dependencias para NPM y Bower, con los comandos:
```bash
npm install
bower install
```

El comando para correr el proyecto en localhost es:
```bash
gulp
```

Cuando terminen de minificarse los assets, el último paso es acceder en la barra de direcciones del navegador a la dirección:
> localhost:8080

En caso de no ser el puerto correcto, revisar en la consola una linea similar:
> Server started http://localhost:8080


## ¿Cómo correrlo en producción?
El procedimiento como se lleva a cabo dentro de Getmore. es el siguiente:
* **Agregar dominios**: Dentro de /src se encuentra la carpeta /nginx; a su vez contiene un archivo con el nombre del repositorio/carpeta del proyecto. Ahí es donde se agregan los dominios para producción. Hasta el momento solo se encuentra un dominio para el ambiente sandbox.
* **Despliegues**: Es imprescindible eliminar las siguientes carpetas que se ubican en la raíz del proyecto, si es que existen: /build, /dis y /.publish. Ejecutar los siguientes comandos que minificaran los assets para hacer un despliegue a la rama gh-pages:
```bash
gulp --production
gulp deploy
```

* **Conectarse al servidor remoto para realizar el despliegue**: En el servidor habrá que posicionarse en la carpeta que contiene los proyectos estáticos y realizar los siguientes pasos:
	* **Clonar rama de gh-pages**: Si existe eliminar primero la carpeta del proyecto:
  ```bash
  sudo rm -rf project-vre/
  ```
  Si no hay ninguna carpeta con el mismo nombre:
  ```bash
  git clone -b gh-pages --single-branch https://github.com/BlickLabs/project-vre.git
  ```
  * **Crear el enlace simbólico**: Primero posicionarse dentro de la carpeta del proyecto y ejecutar el siguiente comando:
  ```bash
  ln -sf /home/static/project-vre/project-project-vre /etc/nginx/sites-enabled/
  ```
  * **Reiniciar el servivicio de nginx**: Por último hay que reiniciar el servicio de nginx:
  ```bash
  sudo service nginx restart
  ```


## ¿Cómo está organizado el proyecto?

Aquí hay una breve explicación de cada archivo y directorio que se genera (excluyendo los obvios ...):

* **.jshintrc**: Contiene los ajustes de jshint, no dude en modificarlo.
* **gulpfile.js**: Archivo principal que importa las tareas individuales de gulp.
* **gulpconfig.js**: Archivo de configuración para rutas y otros valores utilizados en gulptasks.
* **gulptasks/**:  Carpeta que contiene archivos individuales para cada tarea de gulp.
* **src/**: Todo el código y los recursos del proyecto.
  * **locales/**: Contiene los archivos JSON para las versiones en español e inglés. Aquí es donde se agrega, modifica o elimina la información contenida en las secciones.
  * **js/**: Todos los archivos JS.
    * **app.js**: Archivo JS donde puede establecer propiedades globales y valores predeterminados.
  * **templates/**: Archivos Nunjucks.
    * **partials/**: Contiene la plantilla base, así como los archivos para la barra de navegación (navbar) y pie de página (footer). Puede agregar tantos como necesite.
      * **base.njk**: Plantilla base (las secciones se extienden en este archivo).
      * **navbar.njk**: Barra de navegación.
    * **sections/**: Contiene un par de carpetas para las versiones en español e inglés del sitio.
      * **es/**: Contiene las plantillas para su versión en español.
      * **es/**: Contiene las plantillas para su versión en inglés.
    * **seo**: Contiene los archivos para los metatags y un par más para los scripts de facebook pixel y google analytics. Se pueden agregar, modificar o eliminar dependiendo las necesidades. La referencia hacia estos archivos se encuentra en:
    > base.njk
  * **styl/**: Archivos del preprocesador de CSS "Stylus".
    * **sections/** Archivos de estilos para todas las secciones dle sitio.
    * **partials/** "Archivos de estilos para la barra de navegación y el pié de página."
    * **vars.styl**: Contiene la declaración de variables para estilos.
    * **mixins.styl**: Contiene la declaración de mixinx y funciones para estilos.
    * **fonts.styl**: Contiene la declaración de Fuentes a utilizar dentro del sitio.
    * **utils.styl**: Clases de utilidad que no son directamente parte de los estilos del sitio web.
    * **base.styl**: Estilos compartidos entre todas (o la mayoría) de las secciones y que forman parte de los estilos del sitio web. Incluye archivos de barra de navegación y pie de página de forma predeterminada.
    * **main.styl**: Importa los otros archivos para ser minificados después.

## Cambios o adiciones en general.

Dependiendo de la sección que valla ser modificada, los archivos JSON contienen objetos referenciados a cada vista. (Salvo el archivo para la homepage, los demás archivos que conforman al sitio web pueden o no contener las claves de los objetos ya que al transformar la versión de VRE que era una aplicación a una página, se tomaron como base el contenido, sin adaptar a la metodología de trabajo que generalmente se implementa.)
En la plantilla **index.njk** la forma de pintar el título principal es de la siguiente forma:
```bash
<h1 class="home-cover-title gotham-book"><span class="home-cover-title-span"><span>{{es.home.cover.titleSpanPart1}}</span><br><span>{{es.home.cover.titleSpanPart2}}</span></span></h1>
```
Comienza por el objeto: **es**, que define el idioma. Siguiendo el árbol, continúa con el nombre de la vista: **home**, enseguida la sección: **cover** y por último el/los elemento(s), que dentro de la etiqueta: **titleSpanPart1** y **titleSpanPart2**.

Si se desea generar una iteración de elementos que son repetitivos podemos tomar el ejemplo de la misma plantilla de index.njk
 ```bash
<div class="home-apartments-carousel owl-carousel">
  {% for carousel in es.home.apartments.carousel %}
    <a href="{{ carousel.link }}">
    <div class="home-apartments-carousel-img-container">
      <img class="home-apartments-carousel-img" src="{{carousel.img}}">
      <span class="home-apartments-status gotham-medium">{{carousel.status}}</span>
      <div class="home-apartments-place">
        <h4 class="home-apartments-street gotham-book">{{carousel.street}}</h4>
        <h5 class="home-apartments-suburb gotham-medium">{{carousel.suburb}}</h5>
      </div>
    </div>
    </a>
  {% endfor %}
</div>
```

En este caso el objetivo es mostrar varios elementos dentro de un carrusel, entonces dentro de una sentencia **for** hay que iterar los arreglos de la información contenida en los archivos JSON, destinada para esa sección. [Para más información sobre Nunjucks y su funcionamiento](https://mozilla.github.io/nunjucks/)

Puntos de suma importancia a tomar en cuenta:
* **Links y rutas**: Por la forma en que se construyó el proyecto para tener un sitio multi idioma, todas las rutas que originalmente pueden considerarse sin **/** ahora deben llevarla, con excepción de si se va a evaluar un enlace en una condición. Ejemplos: **/es/index.njk**, **/en/allies.njk**, **/css/{{ projectFilesName }}.libs.css (dentro de base.njk)** y para evaluar enlaces: **es/index.njk**.
* **Diferenciar entre un enlace activo de uno que no lo está en los menús de navegación**: En todas las plantillas se encuentra una "directiva" que ayuda dentro de las condiciones de la barra de navegación, por ejemplo, index.njk contiene la siguiente directiva:
```bash
{% set view_name = "homepage" %}
```
Y la condición que ayuda a pintar de color el enlace activo dentro de la barra de navegación:
```bash
<span class="nav-option gotham-medium {% if view_name == nav.viewName %} active-section {% endif %} {% if section != 'index' %}nav-option-gray{% endif %}">{{nav.section}}</span>
```

En caso de considerar necesario la inclusión de un nuevo idioma para el proyecto:
* **Cambio de idioma en la barra de navegación**: Para no llevar a una confusión, el único punto a tomar en cuenta es que las condiciones evaluán si la vista está en inglés para que al hacer el cambio redireccione a su contraparte.

* **Agregar más archivos Json**: Si se considera la opción de agregar más archivos JSON, es necesario incluir una tarea de gulp indicándoselo. La ruta del archivo es la siguiente: **src/gulptasks/html.js**.
```bash
.pipe(data(function() {
  return require('../src/locales/es.json')
}))
```

## Agregar o modificar un desarrollo en la Homepage

Si se desea agregar, eliminar o modificar un desarrollo dentro del carrusel en la Homepage, únicamente habrá que acceder al archivo:
```
/src/locales/es.json
```
Y, siguiendo el siguiente árbol:
```
es.home.apartments.carousel
```
Modificar uno o varios valores, o inclusive, eliminar o modificar los objetos que están dentro del arreglo "carousel" ya que cada uno representa un desarrollo.

## Modificar un desarrollo en la vista de desarrollos

Existen tres estados en los que puede estar categorizado cada desarrollo y uno en el que se muestran todos. A su vez, hay contenedores para cada desarrollo, visto desde la estructura que se le da con HTML. Tomando en cuenta lo anterior, los siguientes ejemplos muestran las clases que se les asignan a los desarrollos para identificarlos en una u otra pestaña (El archivo a modificar es: /src/templates/sections/desarrollos.njk):

Para cambiar el estado de un desarrollo, primero que nada modificar la clases vre-develop-preventa, vre-develop-inmediata o vre-develop-vendido **al nuevo**.
```
PREVENTA: <div class="item vre-item-develop vre-develop-todos vre-develop-preventa">````
```
```
ENTREGA INMEDIATA: <div class="item vre-item-develop vre-develop-todos vre-develop-inmediata">
```
```
VENDIDO: <div class="item vre-item-develop vre-develop-todos vre-develop-vendido">
```

Después, cambiar el contenido de las etiquetas **<span></span>** y las clases inmediata, preventa, vendido según sea el caso
```
<div class="vre-filtro inmediata"><span class="vre-filtro-text gotham-book">Entrega Inmediata</span></div>
```
```
<div class="vre-filtro preventa"><span class="vre-filtro-text gotham-book">Preventa</span></div>
```
```
<div class="vre-filtro vendido"><span class="vre-filtro-text gotham-book">Vendido</span></div>
```

Es importante resaltar el hecho de que solamente se ejemplificaron las etiquetas HTML que son del interés para el cambio de estado de un desarrollo. Se recomienda ampliamente buscar dentro del editor de código alguna de las clases para ubicar rápidamente estás secciones.

## Agregar un nuevo desarrollo

Para generar una vista individual, se sugiere copiar el contenido de alguna de las vistas de desarrollo existentes e ir modificando el contenido para el nuevo desarrollo que se cree, así como respetar las rutas de las imágenes y enlaces dentro del sitio; obviamente reemplazando el nombre del recurso.

Cada vista individual posee una característica que permite mostrar en pestañas, partes del plano del desarrollo. Los datos de esta información se encuentran en el archivo /src/js/app.js dentro de un objeto. Aquí igualmente se recomienda copiar la informaciòn y adapatarla para evitar complicaciones; asimismo como incluir la coordenada para el desarrollo pues contiene un mapa de Google.

Para la vista de todos los desarrollos, de igual forma se recomienda copiar el contenido para solo hacer los ajustes pertinentes. 

Nótese que al final de esta vista también existe un mapa con las ubicaciones de los desarrollos. Al final del archivo desarrollos.html, hay un script que contiene las coordenadas de otro mapa con todas las ubicaciones; modificar o agregar según sea el caso.
