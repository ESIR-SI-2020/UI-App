# UiApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Prerequisites
- Angular
- Material
- Json-server (used to enable a fake backend for testing purpose)

## Common features
- To make http calls to get informations from a server, use the **HttpCaller** service with its method **call** with the appropriate parameters. Put the service as an dependency injection to your class. 
To have an example of how to use it you can see the **pokemon.service.ts** or **user.service.ts** services under the *services* folder.

- To see how to use your services inside your components you can make a look inside the **pokemon.component.ts** component or inside the user component.

- To use the json-server feature go to the root of the project and run the following command *json-server --watch mock_server.json* and don't hesitate to modify datas inside the **mock_server.json** file


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

