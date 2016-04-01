# Pinto jQuery Grid Layout Plugin

* [About](#about)
* [Use](#how-to-use)
* [License](#license)

### ABOUT

Pinto.js is a customizable jQuery plugin for creating a pinterest like responsive grid layout.
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
        itemClass: 'pintobox',
        itemSkipClass: 'pintoskip',
        itemWidth: 200,
        gapX: 10,
        gapY: 10,
        align: 'center',
        fitWidth: false,
        autoResize: true,
        resizeDelay: 50,
        onItemLayout: function(el, column, position) {}
    });
</script>
```


### LICENSE

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)