# task-discussion

# Steps to Setup the Project:

1. Download the project from https://github.com/Smi0001/task-discussion
2. This project need Node.js (if it is not yet installed, please install it from https://nodejs.org/en/download )
3. Open Node.JS command prompt, move to destination directory (to execute npm commands)
```
    For example the project folder task-discussion is located at "D:\GIT\task-discussion"
    Enter "D:" (press enter)
    Then enter "cd D:\GIT\task-discussion" (press enter) 
```
4. Enter **npm install** (press enter, this will install all dependencies of the project, and it would be ready to run).

# Step to Run the Project:

1.    Open Node.JS command prompt and execute **npm start**
2.    After this message - *webpack: Compiled successfully.*, open the browser, the project is available at **http://localhost:8080**
3.    Enter any of the following login credential pair to login successfully:
```
    username1: "shammi"
    password1: "password"
    username2: "shammi1"
    password2: "password"
    username3: "shammi2"
    password3: "password"
```
*Please feel free to comment in case of any ambiguity.*


# Technologies used
```NodeJS```
```Angular 1.5.7``` *component model - close to Angular2*
```HTML5```
```CSS```
```SASS```
```ES6``` *JavaScript - class model*
```WebPack```
```Docker```

*Will use Angular Material Libirary soon, found some issue in injecting to the main module.*


# Project Features
1. ```User authentication```
2. ```Session management```
3. ```Dashboard with user profile```
4. ```TODO page``` *User can add new TODO task, mark, unmark and filter the list with all/active/completed todos*
5. ```POST page``` *User can add new post, reply to any post, (search feature is pending)*
6. ```COMMENT section``` *click on post to see the comment section, comment/reply on the selected post*

*There is an issue in injecting Angular Material Library to the project, however the styling is done using Angular Material guidelines.*

# Pending tasks
1. Search posts
2. Include *Keep me Signed In* feature using ngCookies

# More plannig
1. Introduce ```MONGO DB``` to store database.
2. Introduce ```Registration```, ```Profile update``` features.
3. Introduce ```Google / Facebook / Social Media Authentication``` using ```OAUTH 2.0```
4. Deploy on ```Heroku``` / ```AWS``` servers to make it live.
5. Introduce ```Guest feature``` *to get feedback*


# References
1. https://www.npmjs.com/package/angular-1.5-cli
2. https://material.angularjs.org
3. http://materializecss.com/color.html
4. https://stackoverflow.com/
5. https://www.google.co.in
