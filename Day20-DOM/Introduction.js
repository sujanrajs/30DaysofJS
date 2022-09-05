/* 
HTML document is structured as a JavaScript Object.

Every HTML element has a different properties which can help to manipulate it.
It is possible to get, create, append or remove HTML elements using JavaScript.

Selecting HTML element using JavaScript is similar to selecting using CSS.
To select an HTML element, we use tag name, id, class name or other attributes.
*/

/* 
Getting Element
We can access already created element or elements using JavaScript.
To access or get elements we use different methods. The code below has four h1 elements.
Let us see the different methods to access the h1 elements.
*/

/* 
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
*/

/* 
Getting elements by tag name
getElementsByTagName():takes a tag name as a string parameter and
this method returns an HTMLCollection object.
An HTMLCollection is an array like object of HTML elements.
The length property provides the size of the collection.
Whenever we use this method we access the individual elements using index or
after loop through each individual items. An HTMLCollection does not support
all array methods therefore we should use regular for loop instead of forEach.

document.getElementsByTagName('tagname')
*/
