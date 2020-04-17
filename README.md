# COMP2110/6110 Starter Kit - Citizen Science Web Application

This is the starter kit for the 2020 Web Application assignment. It contains a 
Python based web server that provides a JSON API to the data required for
the application.  You can run the Python server with the command:

```
python main.py
``` 
This requires Python 3 and the bottle library, I've included bottle with this project
so you should not need to download anything other than Python 3. 

The server will listen for requests on [http://localhost:8010](http://localhost:8010/). 

The main page of the application is generated by the Python code from the file `index.html` 
in the `views` folder.  You can edit this file to add anything you need to implement
your application.  If you rename the file, the server won't know where to find it, so don't.

Static files are served from the `static` folder.  You will see sub-folders for CSS, Javascript
and images.   If you want to refer to one of these files in your HTML, use a URL 
like `/static/js/main.js` or `/static/css/style.css`.  The leading `/` is important.  You can
add any other sub-folders you might want under the `static` folder and it will be served
by the application.

I have provided a few Javascript files in the project:
* `main.js` is the main entry point and is referenced from the `index.html` file
* `model.js` contains the outline of the Model object and the required methods that you must implement
* `util.js` provides a utility function
* `views.js` is empty for you to add your view functions to

The `cypress` directory contains tests to be run with the [Cypress](https://cypress.io) testing tool.
More details to follow...

