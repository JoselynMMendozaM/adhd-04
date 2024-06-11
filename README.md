# ACTIVIDAD PARA DESARROLLAR HABILIDADES Y DESTREZAS (ADHD 04)

|----------------|-------------------------------|-----------------------------|
|**Nombre**   |Joselyn Michelle Mendoza Molina`                     |
|**Carné**         |`2020-030618                     |



## ¿Qué es TypeScript?

Es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript. Añade tipado estático a JavaScript, lo que significa que las variables, funciones y otros elementos del código tienen tipos específicos asociados a ellos.

## ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?

-   **Tipado estático**
-   **Mejor legibilidad** 
-   **Mantenimiento más sencillo** 
-   **Mayor seguridad** 
-   **Interoperabilidad con JavaScript** 

## ¿Cómo se instala TypeScript en VSCode?

Existen dos métodos principales para instalar TypeScript en Visual Studio Code (VSCode) utilizando Node.js:

**Método 1: Instalación global con npm o yarn**

1.  **Abre tu terminal o símbolo del sistema.**
    
2.  **Asegúrate de tener Node.js instalado en tu sistema.** Puedes verificarlo ejecutando `node -v` en la terminal. Si no tienes Node.js instalado, puedes descargarlo desde [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager).
    
3.  **Una vez instalado Node.js, puedes instalar TypeScript globalmente usando npm**
>npm install -g typescript 
>
4.  **Para verificar que TypeScript** se haya instalado correctamente, ejecuta el siguiente comando:

## Delete a file
>tsc --version

**Método 2: Instalación mediante la extensión de VSCode**

1.  **Abre Visual Studio Code.**
2.  **Accede al Marketplace de extensiones (Ctrl+Shift+X o Cmd+Shift+X).**
3.  **Busca "TypeScript" y selecciona la extensión oficial de Microsoft.**
4.  **Haz clic en el botón "Instalar" para instalar la extensión.**
5.  **Una vez instalada la extensión, reinicia VSCode para que los cambios surtan efecto.**


## ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?

**Usando el compilador tsc:** Puede instalar el compilador TypeScript globalmente mediante npm o yarn. Una vez instalado, puede compilar un archivo TypeScript ejecutando el siguiente comando en su terminal:

>tsc <archivo-typescript.ts>
>
-   Esto generará un archivo JavaScript correspondiente con el mismo nombre.
    
-   **Usando un editor de código con soporte para TypeScript:** VSCode, WebStorm y otros editores de código populares tienen soporte integrado para TypeScript. Estos editores pueden compilar archivos TypeScript automáticamente a medida que escribe el código.

# ¿Qué extensión de archivo se utiliza para los archivos TypeScript?

La extensión de archivo estándar para los archivos TypeScript es `.ts`.s.


# ¿Cómo se define un tipo de dato en TypeScript?

Hay varias formas de definir tipos de datos en TypeScript:

-   **Tipos primitivos:** `number`, `string`, `boolean`, `null`, `undefined`
-   **Tipos de objeto:** `Object`, `Array`, `Date`, etc.
-   **Tipos de unión:** `number | string` (un valor puede ser un número o una cadena)
-   **Tipos de intersección:** `number & { name: string }` (un valor debe ser un número con una propiedad `name` de tipo cadena)
-   **Tipos personalizados:** Puede definir sus propios tipos de datos utilizando interfaces o clases.
Hay varias formas de definir tipos de datos en TypeScript:

-   **Tipos primitivos:** `number`, `string`, `boolean`, `null`, `undefined`
-   **Tipos de objeto:** `Object`, `Array`, `Date`, etc.
-   **Tipos de unión:** `number | string` (un valor puede ser un número o una cadena)
-   **Tipos de intersección:** `number & { name: string }` (un valor debe ser un número con una propiedad `name` de tipo cadena)
-   **Tipos personalizados:** Puede definir sus propios tipos de datos utilizando interfaces o clases.


## ¿Qué son los tipos de unión y cómo se declaran?

Un tipo de unión en TypeScript representa un valor que puede ser de uno de varios tipos posibles. Se declara utilizando el operador `|`. Por ejemplo, el tipo de unión `number | string` indica que un valor puede ser un número o una cadena.

## ¿Qué es un tipo literal en TypeScript y para qué se utiliza?

Un tipo literal en TypeScript representa un valor específico, como un número concreto o una cadena específica. Se utiliza para restringir el valor que puede asignarse a una variable. Por ejemplo, el tipo literal `10` indica que una variable solo puede contener el valor 10.

## **¿Qué son los tipos enumerados (Enums) y cómo se crean?**

Un tipo enumerado (enum) en TypeScript representa un conjunto de valores constantes con nombres asociados. Se utiliza para definir un conjunto de opciones válidas para una variable o parámetro. Se crea utilizando la palabra clave `enum`.






