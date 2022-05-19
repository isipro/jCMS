============ ##Content Management System for small business websites =============

The project has two parts. One is the public website and the other is the administration.
The administration is located in the admin folder.

Its purpose is to be used as a template for quickly building websites.
As a start, the design is abstract with no bright colors. 
However, using the administration you can quickly add pictures and colors to create a basic small business website.
The admin can also be used by the site owner later. 


-------- ### Architecture --------

- basic MVC concept is used
  - data model
  - data 
  - controller logic with render function

- every time when the data is changed the view is rendered
- it can be easily hooked to a database and the static data can be substituted



-------- ### Admin --------

- only for the purpose of demonstrating bootstrap and jQuery
- changes only in the view without saving them to a db

- edit logo
- edit header colors
- edit background color of the main menu
- adding, deleting and changing the picture of the services. 

- [for demonstration purposes - which can be changes on a later released] 
  - the code is the same as of the website 
  - only one admin/admin.css is added and the admin/script.js is updated