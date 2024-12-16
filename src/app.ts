/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

    console.log("App");
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
  }
  