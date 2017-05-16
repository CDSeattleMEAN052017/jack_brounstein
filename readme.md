# GitHub Organization

I've created a [GitHub organization](https://github.com/orgs/CDSeattleMEAN052017) for this class.  Please create a repository in that organization with your name (so my repo is `jack_brounstein`) by clicking the green "New" button in the right-hand sidebar.  Each day, some assignments will be marked with **GitHub**; in addition to uploading those files to the platform, please also push them into your GitHub repo.  The hope is that this will help you become more familiar with using version control as well as make it convenient for me to check your progress at a glance.

Don't remember how to push things to GitHub?  Look up these commands:

* `git init`
* `git add .`
* `git commit -m "some message"`
* `git push`

Don't have access to the organization?  Send me your GitHub username on Slack.

# Syllabus 

## Week 1

### Monday, April 8

JavaScript fundamentals

Start reading OOP section

Assignments| 
---| 
JS Fundaments Part I| 
Be the Intepreter| 
Build Some Functions!| 
JS Fundamentals Part II| 
JS Fundamentals Part III| 
JS Scroll **GitHub**| 
Creating Objects I| 

Optional|
---|
Pok&#233;mon Battle|
Evolving Syntax|

### Tuesday, April 9

OOP

Afternoon: Deck Of Cards or JS Circles hackathon

Assignments|
---|
Creating Objects II|
Creating Objects III **GitHub**|

Optional|
---|
Bind, Call, and Apply|


### Wednesday, April 10

Advanced JavaScript: Callbacks, closures, immediate functions

We are mostly skipping the Node.js chapter--it explains in great detail how to run a web server with only Node, but for the rest of the course, we'll be using Express, which does the same thing but with much more convenient syntax.  However, make sure you read the "Node Modules" tab and complete the "Math Module" assignment.

Assignments|
---|
JavaScript Library|
Button Fun|
Math Module **GitHub**|

Optional|
---|
Hunting GitHub|
DojoQuery|
Fib + Nacci|
Game Ideas|


### Thursday, April 11

Express: Building a web server in JavaScript

We'll also be skipping the socket.io portion.  Sockets are really cool, but they're not covered on the belt exam, and I'd rather give you an extra day to practice full MEAN.  We'll talk about socket.io during project week.

Assignments|
---|
Survey Form **GitHub**|


### Friday, April 12

Oh no, Mongo!

Message board will probably take a chunk of your weekend.  Don't fret that it's taking too long--it's a large assignment, and it's important to do right.

Assignments|
---|
Intro to MongoDB|
Mongoose Dashboard|
Quoting Dojo Redux **GitHub**|
Message Board **GitHub**|

## Week 2

### Monday, April 15

Modularization: Turning one giant server file into several smaller files

We'll also talk about using `express-session` to handle login/registration

1955 API might not seem like much, but it's actually a very important assignment.  If you can complete it, you'll have pretty much all you need on the server side for a MEAN app...which is good, because tomorrow we start dealing with the client side.

Assignments|
---|
Modularized Mongoose|
1955 API **GitHub**|

### Tuesday, April 16

Angular 4!  ES2016, TypeScript, Components, and Event Listeners.

We use the Angular command-line interface (CLI) to create/manage our Angular projects, but the platform doesn't do a great job of explaining how to get or use it.  You can find details [here](https://cli.angular.io/), but the important commands are:

* `npm install -g @angular/cli` (this installs the CLI globally, so you should only need to do this once)
* `ng new project-name` (this may take a while)
* `ng generate component examples`
* `ng generate service example`
* `ng serve`

`ng serve` starts a virtual server, and after running it you should be able to see your page on http://localhost:4200

For all of these assignments, try to replicate the functionality using only one component.  (We'll discuss multiple, possibly nested, components tomorrow)

Assignments|
---|
My first Angular App|
Components in Components|
Components and Pipes **GitHub**|

Optional|
---|
Javascript & TypeScript Basic|

### Wednesday, April 17

Nested components, inputs and output

For these assignments, recreate the functionality, but don't use a service.  (Services will be covered tomorrow.)  For AlwaysNote, remember to use `@Input` and `@Output`!

Assignments|
---|
Task and Inputs **GitHub**|
Users|
User Validations **GitHub**|
AlwaysNote **GitHub**|

### Thursday, April 18

Angular routes and services

Read about the HTTP module, which we'll be using tomorrow to make requests to our server once we have a full MEAN app.

Assignments|
---|
Routing|
Routes and Subroutes|


### Friday, April 19

Angular review + full MEAN!

When running a full MEAN application, we'll replace `ng serve` with `ng build -w` (and `nodemon server.js`, of course!)

Five assignments may look like a lot, but the first four are all building individual pieces that are combined into MEAN Friends.

Assignments|
---|
File Structure and Simple Server|
Friends API|
Angular Friends|
Building Factories and Controllers|
MEAN Friends **GitHub**|


## Week 3

### Monday, April 22

Assignments|
---|
Login and Registration **GitHub**|

### Tuesday, April 23

As of now, you should have all the tools you need to pass the belt exam.  The next few days are just practicing and reinforcing this knowlege.

Assignments|
---|
MEAN Wall **GitHub**|

Optional|
---|
Use angular cookies and/or express-session to generate a persistent user after login|

### Wednesday, April 24

Deployment

Assignments|
---|
Mini-MEAN store **GitHub**|

### Thursday, April 25

Assignments|
---|
Discussion Board **GitHub**|

### Friday, April 26

BELT EXAM!
