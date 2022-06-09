# NODE

> Comandos:

        - Crear PACKAGE.JSON: npm init
        - Crear PACKAGE.JSON con valores por defecto: npm init -y
        - Instalar como Dependencia de Desarrollo: npm install [paquete] --save-dev
        - DesInstalar o eliminar un paquete: npm unisntall [paquete]
        - Versión específica: npm install [paquete]@n.n.n
        - Actualización de las dependencias instaladas en el proyecto: npm update

> Las clases se encuentran en la carpeta .CURSOS

    para probar el código: > node archivo.js

# Utilización App: Tabla de Multiplicar:

> Ejecución:

    node app --base=5 -l -h=10
    node app -b=7 -l -h=20
    node app --base=5 --list -h=20

```
> Options:

    --help     Show help                                                [boolean]
    --version  Show version number                                      [boolean]
    -b, --base     Base de Tabla de Multiplicar                [number] [required]
    -l, --list     [Opcional] Listar tabla creada       [boolean] [default: false]
    -h, --hasta    Multiplicador Final, valores: 1 a n      [number] [default: 10]
```

Proyecto en GitHub:
https://github.com/RodrigoRuizM/Node0E-04Bases.git

…or create a new repository on the command line

echo "# Node0E-04Bases" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RodrigoRuizM/Node0E-04Bases.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/RodrigoRuizM/Node0E-04Bases.git
git branch -M main
git push -u origin main
