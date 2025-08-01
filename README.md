# Goty

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## 🚀 Flujo de despliegue automático con `npm run deploy`

Este proyecto está configurado para desplegar automáticamente en **Firebase Hosting** usando **GitHub Actions**, a través de un flujo basado en ramas: `master` (desarrollo) y `main` (producción).

---

### 🔁 Flujo de ramas: `master` ➜ `main`

- `master`: rama de trabajo y desarrollo habitual.
- `main`: rama de producción, activa el despliegue automático al hacer `push`.

---

### ✅ Paso 1: Crear y sincronizar rama `main` con `master` (solo 1ª vez)

```bash
git checkout master                # Estás en la rama principal
git checkout -b main               # Creas la rama main desde master
git push -u origin main            # Subes la rama main al remoto
```

---

### ⚙️ Paso 2: Configurar script de despliegue en `package.json`

```json
"scripts": {
  "deploy": "git checkout main && git pull origin main && git merge master && git push origin main"
}
```

Este script realiza:

1. Cambia a la rama `main`
2. Se asegura de tener la última versión remota (`pull`)
3. Fusiona cambios desde `master`
4. Hace `push` a `main` ➜ lo que **dispara GitHub Actions**

---

### 🚀 Paso 3: Ejecutar despliegue con un solo comando

```bash
npm run deploy
```

Este comando lanza automáticamente el flujo de:

- 🔁 Merge `master → main`
- ✅ GitHub Actions compila y construye el proyecto Angular
- 🔥 Despliegue automático a Firebase Hosting

---

### 🛡️ Recomendaciones

- Asegúrate de **haber hecho commit en `master`** antes del deploy:
  ```bash
  git add .
  git commit -m "🚀 Listo para despliegue"
  ```
- Protege la rama `main` desde GitHub si trabajas en equipo
- Revisa los logs del workflow desde GitHub → pestaña **Actions**

---

### 📁 Estructura del workflow GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`)

```yaml
name: Deploy to Firebase Hosting on merge

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm ci
      - run: npm run build -- --configuration=production

      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.firebaseServiceAccount }}
          channelId: live
          projectId: firestore-grafica-ee57a
```