[![Build Status](https://travis-ci.com/Yizack/esmifrase.svg?branch=master)](https://travis-ci.com/Yizack/esmifrase)
[![dependencies Status](https://david-dm.org/yizack/esmifrase/status.svg)](https://david-dm.org/yizack/esmifrase)
# Esmifrase
Bot de twitter para publicar una frase de una lista de texto por día a las 12:00 con Node.js.

## Requerimientos Generales
- Solicitar [Twitter App](https://developer.twitter.com/en/apps)

### Configuración General
- Entrar en [Twitter Developers](https://developer.twitter.com/en/apps)
 y seleccionar `Details` en la app que desees utilizar\
[![Details Image1](https://yizack.com/images/esmifrase/twitter-app1.jpg)](https://developer.twitter.com/en/apps)
- Editar los detalles de tu App
[![Details Image2](https://yizack.com/images/esmifrase/twitter-app2.jpg)](https://developer.twitter.com/en/apps)
- Describir el uso de la App para los empleados de twitter
[![Descripción de la App](https://yizack.com/images/esmifrase/twitter-app3.jpg)](https://developer.twitter.com/en/apps)
- Asignar todos los permisos en la pestaña `Permissions`
[![Keys](https://yizack.com/images/esmifrase/twitter-app4.jpg)](https://developer.twitter.com/en/apps)
- Generar access token y access token secret en la pestaña `Keys and tokens`
[![Keys](https://yizack.com/images/esmifrase/twitter-app5.jpg)](https://developer.twitter.com/en/apps)
- Editar [`config.json`](https://github.com/Yizack/esmifrase/blob/master/config.json)
  - `consumer_key` Reemplazar `XXXXXX` con el Consumer API key .
  - `consumer_secret` Reemplazar `XXXXXX` con el Consumer API secret key.
  - `access_token` Reemplazar `XXXXXX` con el Access token.
  - `access_token_secret` Reemplazar `XXXXXX` con el Access token secret.
##

## Instalar en una PC local (Windows)
### Requerimientos
- Descargar e Instalar [Node.js](https://nodejs.org/)

### Configurar
- Abrir `cmd.exe` en Windows.
- Ejecutar `cd\` para ir a la raíz del disco local.
- Ejecutar para ir al directorio donde están los archivos del Discord Bot. Ejemplo `cd %USERPROFILE%\Documents\esmifrase`
- Ejecutar `npm install` para instalar dependencies.
- Ejecutar `node index.js` para activar el twitter bot.
##

## Sugerencias, preguntas o problemas
Si tienes sugerencias, preguntas o algún problema, no dudes en escribeme en [@Yizack](https://github.com/Yizack/esmifrase/issues/new).
