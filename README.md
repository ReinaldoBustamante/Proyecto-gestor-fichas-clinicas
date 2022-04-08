# Como ejecutar

Este proyecto se dividio en 2 partes (API, Front-end) por lo que para la ejecucion de este sistema se deberan clonar estos 2 repositorios 
[API](https://github.com/Spun1/fedent-api)  [Front-end](https://github.com/Spun1/fedent-implementacion).

Una vez clonados se debera inicializar la API.

# Inicializacion API

para ello debera tener Mysql o Phpmyadmin para poder gestionar la base de datos. Esta base de datos se podra encontra en el presente repositorio [BD](https://github.com/ReinaldoBustamante/Proyecto-gestor-fichas-clinicas/tree/main/BD) con el nombre de cfedent.sql

Tambien debera tener nodejs instalado. Esto se puede instalar con el siguiente comando:

~~~
sudo apt update

sudo apt install nodejs

node -v
~~~

Al tener todo esto debera importar cfedent.sql en MySql o Phpmyadmin. 

## Importar cfedent con consola MySql (Opcion 1)

Puede crear una base de datos con el nombre cfedent mediante comando en la consola mysql

~~~
CREATE DATABASE cfedent;
~~~

luego en la carpeta donde este la base de datos escribir lo siguiente

~~~
mysql -u username -p cfedent < cfedent.sql
~~~

una vez realizado esto puede verificar mediante comando sql si se creo exitosamente. para ello ingresar a la consola y escribir 

~~~
SHOW DATABASES;
~~~
al hacer esto debiera salir la bd creada anteriormente.

## Importar cfedent con Phpmyadmin(Opcion 2)

Para esto debera instalar phpmyadmin en su computadora, crear una base de datos, presionarla e ir a la opcion de importar. para esto seguir la siguiente imagen:

![image](https://help.wnpower.com/hc/article_attachments/360056945852/mceclip0.png)

**Tutorial instalar phpmyadmin windows:** https://www.youtube.com/watch?v=36ritPuyd00

## Editar archivo de configuracion.

Una vez tenga todo lo anterior debera acceder al archivo connection.js y editar los siguientes campos

~~~
const pool = mysql.createPool({
    host            : 'localhost',
    port            :  '3306',
    user            : 'root',
    password        : 'tu password',
    database        : 'cfedent'
    
})
~~~

## EJECUTAR API

Debera ejecutar el siguiente comando a nivel de la carpeta del repositorio fedent-api

~~~
npm start
~~~

Una vez realizada esto la api estara alojada en el puerto 5000 y podra acceder mediante http://localhost:5000/usuarios.


# Inicializar Aplicacion

Al ser una aplicacion desarrollada en react usted debera tener nodejs instalado pero como siguio el paso anterior esto ya lo deberia tener. Por lo tanto se mueve a la carpeta del repositorio fedent-implementacion y escribir en la consola.

~~~
 npm install
~~~

una vez instaladas las dependencias 

~~~
 npm start
~~~

ahora deberia poder acceder a la pagina mediante el puerto 3000.


![image](https://github.com/ReinaldoBustamante/Proyecto-gestor-fichas-clinicas/blob/main/img/pag.png)

**Para ingresar al sistema debera ocupar el usuario admin y contraseña admin**
