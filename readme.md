# Esmifrase
Bot de twitter para publicar una frase por día de una lista de texto con Node.js.

## Requerimientos Generales
- Solicitar [Twitter App](https://developer.twitter.com/en/apps)

### Configuración General
- Entrar en [Twitter Developers](https://developer.twitter.com/en/apps)
 y seleccionar `Details` en la app que desees utilizar\
[![Details Image1](https://github.com/Yizack/yizack.github.io/raw/master/img/esmifrase/twitter-app1.jpg)](https://developer.twitter.com/en/apps)
- Editar los detalles de tu App
[![Details Image2](https://github.com/Yizack/yizack.github.io/raw/master/img/esmifrase/twitter-app2.jpg)](https://developer.twitter.com/en/apps)
- Describir el uso de la App para los empleados de twitter
[![Descripción de la App](https://github.com/Yizack/yizack.github.io/raw/master/img/esmifrase/twitter-app3.jpg)](https://developer.twitter.com/en/apps)
- Asignar todos los permisos en la pestaña `Permissions`
[![Keys](https://github.com/Yizack/yizack.github.io/raw/master/img/esmifrase/twitter-app4.jpg)](https://developer.twitter.com/en/apps)
- Generar access token y access token secret en la pestaña `Keys and tokens`
[![Keys](https://github.com/Yizack/yizack.github.io/raw/master/img/esmifrase/twitter-app5.jpg)](https://developer.twitter.com/en/apps)
- Editar `config.json`
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