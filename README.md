#Animate.js
*Just animate it!*

`animate.js` is a simpje jQuery plugin that lets you do simple animations with custom preferences.

##Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="animate.css">
  </head>
```

2. Include jQuery and animate.js on your document's `<head>`

  ```html
  <head>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="animate.js"></script>
  </head>
```


3. Use the jQuery selector to select the object where you want the animation and that's it!
```javascript
$("#img").animate();
```

4. Finally, you can choose from different animations:

  * `poster`
  * `bounce`
  * `fallDown`
  * `elastic`

```javascript
$("#img").animate({
    animation: "elastic"
});
```

5. Make it your own! Choose your animation duration and make it loop!

```javascript
$("#img").animate({
    animation: "elastic",
    infinite: true,
    duration: 5
});
```