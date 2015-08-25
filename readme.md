# Pinto jQuery Grid Layout Plugin (v1.1.0)

![preview](https://raw.github.com/maxlawrence/pinto/master/screenshot.png)

## Features
* lightweight (the minified version is under 1KB)
* autosize support
* fluid item width
* animation (CSS3 transition)

==========

* 1. [About](#about)
* 2. [Use](#how-to-use)
* 3. [Demo](#demo)
* 4. [License](#license)

### ABOUT

Pinto.js is a lightweight and customizable jQuery plugin for creating pinterest like responsive grid layout.
Pinto.js is intended for easy use and is fully deployable within minutes. The minified version is under 1KB.

### HOW TO USE

Pinto.js was built with quick and simple customization in mind. You can easily customize the entire experience by initializing with arguments. 

Example:
```html
<script type="text/javascript">
    $('#container').pinto();
</script>
```

Example:
```html
<script type="text/javascript">
    $('#container').pinto({
        itemSelector: '.block',
        itemWidth: 200,			
        marginX: 10,				
        marginY: 10, 				
        align: 'center',			    
        fitWidth: false,			    
        animate: true,				 
        autoResize: true,			
        resizeDelay: 50
    });
</script>
```

Default options:

```JavaScript
    itemSelector: '> div',		// block identificator;
    itemWidth: 220,				// width of one grid block in pixels;
	marginX: 10,				// width spacing between blocks in pixels;
    marginY: 10, 				// height spacing between blocks in pixels;
	align: 'left',			    // blocks alignment - 'left', 'right' or 'center';
	fitWidth: true,			    // adjusts block width to create optimal layout based on container size;
	animate: true,				// CSS animation when updating layout; 
	autoResize: true,			// updates layout after browser is resized;
	resizeDelay: 50				// time in milliseconds between browser resize and layout update;
```

### DEMO

Download repository and view the demo folder with an example.


### LICENSE

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

* * *

Copyright :copyright: 2015 Max Lawrence