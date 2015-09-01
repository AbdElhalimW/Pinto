# Pinto jQuery Grid Layout Plugin

## Features
* lightweight
* autosize support
* fluid item width

==========

* [About](#about)
* [Use](#how-to-use)
* [Demo](#demo)
* [License](#license)

### ABOUT

Pinto.js is a lightweight and customizable jQuery plugin for creating pinterest like responsive grid layout.
Pinto.js is intended for easy use and is fully deployable within minutes.

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
        gapX: 10,
        gapY: 10,
        align: 'center',
        fitWidth: false,
        autoResize: true,
        resizeDelay: 50,
        onItemLayout: function($item, column, position) {}
    });
</script>
```

### DEMO

Download repository and view the demo folder with an example.


### LICENSE

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

* * *

Copyright :copyright: 2015 Max Lawrence