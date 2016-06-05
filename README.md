**DISCLAIMER**: Code available in this respository is not appropriate for using in production, shouldn't be taken as example of "good code". We do not follow best practices here because we don't have to. We're just trying to create something good enough for our workshops. 

We'll create a device client and a web application. Device client will get sensor data and send it to a server. Web app will receive these sensor readings, display them and send commands back to device.  

## Environment Setup
* Download Visual Studio Code from [here](https://code.visualstudio.com) and install.
* Download nodejs from [here](https://nodejs.org/en/) and install.
* To check if node is properly installed, execute following command from command line;  
  `node -v`
* Check if NODE_PATH is defined by calling;
  `set NODE_PATH`  
  from command line. If you don't see 'Environment variable NODE_PATH not defined', then you're fine. 
  Otherwise set node_modules folder's path to NODE_PATH (typically in "c:\Program Files\nodejs\node_modules\"). 

## Develop Device Client
* Create a folder **Menemen**.
* Create a file called **constantvals.js** in this folder.
* Put the code in **MenemenWorkshop\constantvals.js** into this new file.
* In **Menemen**, create  folder **Device**
* In **Device**, create a file: **device.js**.
* Put the code in **MenemenWorkshop\Device\device.js** into this new file.
* Open command line, navigate to **Menemen\Device** folder and call;  
  `npm init`  
  Press enter for all the questions asked (so that you leave everything with the default values). 
  This will create a file with the name: **package.json** in **Device** folder.
* On the command line, call;    
  `npm install mqtt --save -g`  
  This command will install mqtt libraries and modify the **package.json** to add a reference to this package. 
  (Note: documentation for mqtt library is [here](https://www.npmjs.com/package/mqtt));
* *[OPTIONAL]*: Edit **Menemen\Device\package.json**. Change following part;  
```
"scripts": {   
  "test": "echo \"Error: no test specified\" && exit 1"   
}   
```
  to 
```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node device.js myDevice"
    }
```   
  to be able to start app from command line with **npm start**. Change *myDevice* to anything you want to represent the device id.


## Develop Web App
* Open command line and install express:  
  `npm install -g express`
* Install express generator:  
  `npm install -g express-generator`
* Navigate to **Menemen** and create a folder called **Server** in here.
* Open command line, navigate to **Menemen\Server** and call;  
  `npm install mqtt` 
* On the command line, navigate to **Menemen\Server** and call following command;  
  `express`  
  This will create a folder structure as below;
```   
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade
```   
* *[OPTIONAL]* Clean up unnecesessary items; delete **images** folder, **routes\users.js** and edit **app.js** and remove following lines;  
  `var users = require('./routes/users');`  
  and   
  `app.use('/users', users);`
* Open command line, navigate to **Menemen\Service** and execute;  
  `npm install`
* Now see if the boilerplate code works by running following command;  
  'npm start'  
  and opening `http://localhost:3000` in browser. If you see a welcome page, it's working.
* Create a file named **server.js** in **Menemen\Server** folder.
* Copy content of **MenemenWorkshop\Server\server.js** into this new file.
* *[INSTRUCTED]*: Modify following files;
<table>
    <thead>
        <th>Make this file</th>
        <th>look like this one</th>
    </thead>
    <tbody>
        <tr>
            <td>Menemen\Server\app.js</td>
            <td>MenemenWorkshop\Server\app.js</td>
        </tr>
        <tr>
            <td>Menemen\Server\routes\index.js</td>
            <td>MenemenWorkshop\Server\routes\index.js</td>
        </tr>
        <tr>
            <td>Menemen\Server\views\index.jade</td>
            <td>MenemenWorkshop\Server\views\index.jade</td>
        </tr>
        <tr>
            <td>Menemen\Server\public\stylesheets\style.css</td>
            <td>MenemenWorkshop\Server\public\stylesheets\style.css</td>
        </tr>                        
    </tbody>
</table>

* *[INSTRUCTED]*: Copy following files to target folders;
<table>
    <thead>
        <th>Copy this file</th>
        <th>to</th>
    </thead>
    <tbody>
        <tr>
            <td>MenemenWorkshop\Server\views\deviceDataTable.jade</td>
            <td>Menemen\Server\views\</td>
        </tr>
        <tr>
            <td>MenemenWorkshop\Server\public\javascripts\index-brw.js</td>
            <td>Menemen\Server\public\javascripts\</td>
        </tr>                      
    </tbody>
</table>
