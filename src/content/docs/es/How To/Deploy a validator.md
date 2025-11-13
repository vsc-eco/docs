---
title: Cómo desplegar un nodo validador de VSC
sidebar:
  order: 9
---

Este repositorio aloja el archivo Docker Compose necesario para desplegar el nodo VSC.

## Requisitos previos

Requisitos:
- Cuenta de Hive (mínimo de 100 HP para los creditos de recursos - RC).
- 2000 Hive vinculado a tu nodo VSC (necesario para participar en el consenso).
- Conocimiento técnico en el uso de una interfaz de línea de comandos (CLI).
- Docker y docker-compose instalados. Consulta [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) para ver la guía de instalación de Docker.

Los requisitos del sistema son muy bajos; en el futuro, los requisitos aumentarán a medida que se incremente el uso de la red.

Requisitos del sistema:
- Raspberry pi 4 o superior.
- 4 núcleos, 8 GB de RAM o superior.

## Configuración

1. Instalar [Docker](https://docs.docker.com/get-docker/) y [Docker compose v2](https://docs.docker.com/compose/install/).
2. `git clone https://github.com/vsc-eco/vsc-deployment` Clona este repositorio como un usuario normal (no como root/administrador) en la ubicación deseada. Es crucial asegurarse de que el usuario de Docker tenga permisos de escritura en el directorio donde planeas iniciar el archivo Docker Compose.
3. `docker compose run init` Inicializar los archivos de configuración
4. Edita el archivo de configuración ubicado en `./data/config/identityConfig.json` y asegúrate de agregar tu nombre de usuario de Hive y tu clave activa (active key).
4. `docker compose up -d` Inicia los contenedores de Docker. Esto añadirá un servidor GraphQL en el puerto 8080, una instancia de MongoDB en el puerto 27021 y una conexión libp2p en el puerto 10720.

## Puesta en marcha

Para lanzar el nodo, ejecuta `docker compose up -d` desde la línea de comandos (o `docker-compose up -d`, dependiendo de tu versión de Docker Compose).

Para la observación de registros en tiempo real, usa `docker logs go-vsc-node -f`.

## Mantenimiento

El nodo está diseñado para auto-actualizarse según sea necesario. Sin embargo, en raras ocasiones, la configuración de despliegue puede requerir actualizaciones manuales no cubiertas por las actualizaciones automáticas. Si tal situación surge, informaremos a la comunidad a través de nuestros canales de comunicación habituales: [discord](http://discord.gg/yvGXZsQTU6) y [twitter](https://x.com/magi_network).

Puedes deshabilitar las actualizaciones automáticas configurando la variable de entorno `AUTO_UPDATE` como *false*. Sin embargo, recomendamos mantener esta función habilitada para garantizar que el nodo esté siempre actualizado. En nuestro ecosistema en rápida evolución, es crucial mantener el nodo actualizado para una salud óptima de la red.
