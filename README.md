# Myapp - First Angular APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Angular Notes

This Readme file is used as a note behalf angular for better self learning, and use maximum utilization of developer resources

**My Notes contains some inappropriate words so please read it taking your own risk**

### Angular installation and structure

#### Installation steps

```
npm install -g @angular/cli
ng new myapp
cd myapp
ng serve --open
# or
ng serve -o
```

It creates port 4200 in localhost
__I also tried like `ng new .` after creating folder manually by mkdir but it didn't work__

#### Structure

It has main folder named `src`
Inside that, there are folders:

- app -> contains all the code of our application (HTML, CSS, TypeScript). It is divided into modules (e.g., features, shared), each one with its own components
- app -> contains all the code of our application
- assets -> images, icons etc.
- environments -> environment files for different deployment scenarios (dev, prod, staging etc.)
- favicon.ico -> Favicon for your site.
- index.html -> Main HTML page that will be served when you hit root URL.
- styles.css -> Global CSS file.
- browserslist -> Defines which browser versions the project supports. You can check more about this

And in our root directory of angular
- package.json and jackage-lock.json
- Some TS configuration
- ANgular configuration


### Angular is Frame work which is divided into 4 parts
- Components
- Templates
- Directives
- Dependency injection

### Components

**Angular documentation says components r main parts of angular which is webed by HTML, CSS and TS**

We can generate component by command-line
Let's generate our first component

```
ng generate component home
```

After hitting this cmd in terminal it created a folder named `home` inside `app` directory
`Ex. app/home`

Inside it there r 4 files
- A component file, `home.component.ts`
- A template file, `home.component.html`
- A CSS file, `home.component.css`
- A testing specification file, `home.component.spec.ts`

Angular says we could create it manually also but afterall i am lazy as a fuck so i am using maximum utilization of all resources.
Let's just observe and analyze the code inside it

**Home.Component.ts**
typescript class with decorator `@Component`, It tells to angular that this is a component.
Here we have metadata of component like selector(which is how we will refer this component), templateUrl(where html for this component resides)
Here we have metadata of our component like selector, templateUrl etc.

javascript object passed as argument to decorator function.

for now let's ignore css and html file because it's just template file, all the things inside componets is starting from TS file

**Code:**
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

```

### Life cycle

**__It would be better if u read life cycle on your own by [clicking here](https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence)__**

### There are 3 Types of binding in Angular

- Interpolation Binding ~ `{{variableName}}`
- Property Binding ~ `<div [innerText]="abcd"...`
- Event Bindings ~ `<div (click)="functionName()"...`

### Types of Directives

It can be used to change appearience of DOM Element,
It doesn't have templates.

- **Built in Strucutral Directives**

Ex:
`*ngIf`,
`*ngFor`,
`*ngSwitch`

Example:
```
<div 
    *ngIf="contents?.length>0" 
    *ngFor="let content of contents" 
>
    {{content}}
</div>
```

- **Attribute Directives**

Ex:
`ngClass`,
`ngStyle`

### Pipes

Pipes is simple things which we used differntly in vanilla js, let me show example for vanilla js

Let's create some varible value to uppercase:

```
let text = "Hello World!";
let result = text.toUpperCase();

//Output: HELLO WORLD!
```

But in angular we can't use those things in HTML templates
so for the solution there are Pipes

Let me show u example how we can do this with Pipe

```
<div>
    {{variableName | Uppercase}} //that's it
</div>
```

That was just an example of pipe, pipe is not limited with those things, let me tell u waht fucking we can get with those shits.

- [`DatePipe`](https://angular.io/api/common/DatePipe)	Formats a date value according to locale rules.
- [`UpperCasePipe`](https://angular.io/api/common/UpperCasePipe)	Transforms text to all upper case.
- [`LowerCasePipe`](https://angular.io/api/common/LowerCasePipe)	Transforms text to all lower case.
- [`CurrencyPipe`](https://angular.io/api/common/CurrencyPipe)	Transforms a number to a currency string, - formatted according to locale rules.
- [`DecimalPipe`](https://angular.io/api/common/DecimalPipe)	Transforms a number into a string with a decimal - point, formatted according to locale rules.
- [`PercentPipe`](https://angular.io/api/common/PercentPipe)	Transforms a number to a percentage string, formatted according to locale rules.