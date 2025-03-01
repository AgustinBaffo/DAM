Web App Full Stack Base - Ionic frontend
========================================

Proyecto basado en [Web App Full Stack Base](https://github.com/AgustinBaffo/app-fullstack-base-2023-i08).

En esta extensión del proyecto se utiliza el framework Ionic (y Angular) para realizar el frontend.


<p align="center" justify-content="center">
    <img src="./outputs/dam.gif" alt="sides_image" class="center" width="80%"/>
</p>

## Update - Simulación ⭐⭐⭐

La última versión cuenta con un servicio de simulación de mediciones que se puede activar desde la pantalla de inicio. Al activarlo, se establecen valores aleatorios para las electroválvulas y las mediciones de los sensores. Las mediciones irán cambiando en función de una distribución normal, la cual es configurable en el servicio de simulación. Si la electroválvula está abierta, el suelo se volverá cada vez más húmedo hasta que alcance su saturación. Si se cierra la válvula, el suelo se irá secando hasta alcanzar el extremo opuesto.

## Como ejecutar 💻

Clonar este repositorio.
```
git clone https://github.com/AgustinBaffo/DAM.git
```

Sobre la carpeta app-fullstack-base-2022-i07 levantar el contendor:
```
cd app-fullstack-base-2022-i07
docker compose up
```

## Comenzando 🚀

Esta sección es una guía con los pasos esenciales para que puedas poner en marcha la aplicación.

### Instalar las dependencias

Para correr este proyecto es necesario que instales `Docker` y `Docker Compose`. 

En [este artículo](https://www.gotoiot.com/pages/articles/docker_installation_linux/) publicado en nuestra web están los detalles para instalar Docker y Docker Compose en una máquina Linux. Si querés instalar ambas herramientas en una Raspberry Pi podés seguir [este artículo](https://www.gotoiot.com/pages/articles/rpi_docker_installation) de nuestra web que te muestra todos los pasos necesarios.

En caso que quieras instalar las herramientas en otra plataforma o tengas algún incoveniente, podes leer la documentación oficial de [Docker](https://docs.docker.com/get-docker/) y también la de [Docker Compose](https://docs.docker.com/compose/install/).

Continua con la descarga del código cuando tengas las dependencias instaladas y funcionando.

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr el comando `docker compose up` desde la raíz del proyecto. Este comando va a descargar las imágenes de Docker de node, de typescript, de la base datos y del admin de la DB, y luego ponerlas en funcionamiento. 

Para acceder al cliente web ingresa a a la URL [http://localhost:8100/](http://localhost:8100/) y para acceder al admin de la DB accedé a [localhost:8001/](http://localhost:8001/). 

Si pudiste acceder al cliente web y al administrador significa que la aplicación se encuentra corriendo bien. 

> Si te aparece un error la primera vez que corres la app, deteńe el proceso y volvé a iniciarla. Esto es debido a que el backend espera que la DB esté creada al iniciar, y en la primera ejecución puede no alcanzar a crearse. A partir de la segunda vez el problema queda solucionado.

## Licencia 📄

Este proyecto está bajo Licencia ([MIT](https://choosealicense.com/licenses/mit/)). Podés ver el archivo [LICENSE.md](LICENSE.md) para más detalles sobre el uso de este material.
