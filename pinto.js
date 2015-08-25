/*!
  Pinto jQuery Plugin
  @name pinto.js
  @description Lightweight and customizable jQuery plugin for creating pinterest like responsive grid layout
  @author Max Lawrence 
  @version 1.1.0
  @category jQuery plugin
  @copyright (c) 2015 Max Lawrence (http://www.avirtum.com)
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function($) {
    "use strict";
    
    function Pinto(config) {
        this.init(config);
    };
    
    Pinto.prototype = {
        //=============================================
        // Public Section
        //=============================================
        /**
         * Block identificator (selector)
         * @public
         * @type {string}
         */
        itemSelector: "> div",
        
        /**
         * Width of one grid block in pixels
         * @public
         * @type {number}
         */
        itemWidth: 220,
        
        /**
         * Width spacing between blocks in pixels;
         * @public
         * @type {number}
         */
        marginX: 10,
        
        /**
         * Height spacing between blocks in pixels;
         * @public
         * @type {number}
         */
        marginY: 10,
        
        /**
         * Blocks alignment - "left", "right" or "center"
         * @public
         * @type {string}
         */
        align: "left",
        
        /**
         * Adjusts block width to create optimal layout based on container size
         * @public
         * @type {boolean}
         */
        fitWidth: true,
        
        /**
         * CSS animation when updating layout
         * @public
         * @type {boolean}
         */
        animate: true,
        
        /**
         * Updates layout after browser is resized
         * @public
         * @type {boolean}
         */
        autoResize: true,
        
        /**
         * Time in milliseconds between browser resize and layout update
         * @public
         * @type {number}
         */
        resizeDelay: 50,
        
        //=============================================
        // Protected Section
        //=============================================
        /**
         * @protected
         */
        constructor: Pinto,
        
        /**
         * Container element. Should be passed into constructor config
         * @protected
         * @type {jQuery}
         */
        el: null,
        
        /**
         * Resize timer
         * @protected
         * @type {timer}
         */
        resizeTimer: null,

        /**
         * Init/reinit the widget
         * @param {object}
         */
        init: function(config) {
            $.extend(this, config);
            this.initWidget();
            this.layout();
        },
        
        /**
         * @protected
         */
        initWidget: function() {
            if (this.el.length == 0) {
                return;
            }
            
            if (this.el.css("position") != "relative") {
                this.el.css("position", "relative");
            }
            
            if (this.autoResize) {
                var _resize =  $(window).on("resize", $.proxy(this.resize, this));
                this.el.on("remove", _resize.unbind);
            }
        },
        
        /**
         * @protected
         */
        getSmallestIndex: function (a) {
            var index = 0;
            for (var i = 1, len = a.length; i < len; i++) {
                if (a[i] < a[index]) index = i;
            }
            return index;
        },
        
        /**
         * @protected
         */
        layout: function () {
            if (this.el.length == 0 || !this.el.is(":visible")) { 
                return;
            }
            
            var self = this,
            trans = (this.animate ? "top 0.5s, left 0.5s": "none"),
            items = this.el.find(this.itemSelector),
            width = this.el.innerWidth(),
            marginX = parseInt(this.marginX || 0),
            marginY = parseInt(this.marginY || 0),
            itemWidth = this.itemWidth,
            colsCount = Math.max(Math.floor(width/(itemWidth + marginX)),1),
            cols = [];
            
            var i = colsCount;
            while(i--) cols.push(0);
            
            var offset = 0;
            if (this.fitWidth) {
                itemWidth += Math.floor(0.5 + (width - (colsCount * (itemWidth + marginX))) / colsCount);
            } else {
                // calculate the offset based on the alignment of columns to the parent container
                if (this.align === "center") {
                    offset += Math.floor(0.5 + (width - (colsCount * (itemWidth + marginX))) >> 1);
                } else if (this.align === "right") {
                    offset += Math.floor(0.5 + width - (colsCount * (itemWidth + marginX)));
                };
            };
            
            items.each(function(index, item) {
                var $item = $(item),
                i = self.getSmallestIndex(cols);
                    
                $item.css({
                    position: "absolute",
                    top: cols[i] + marginY/2 + "px",
                    left: (itemWidth + marginX) * i + offset + "px",
                    width: itemWidth,
                    margin: marginY/2 + "px " + marginX/2 + "px",
                    transition: trans
                });
                
                cols[i] += $item.innerHeight() + marginY;
            });
            
            var height=0;
            i = colsCount;
            while(i--) if(cols[i]>height) height = cols[i];
            this.el.css({height:height});
        },
        
        /**
         * @protected
         */
         resize: function() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout($.proxy(this.layout, this), this.resizeDelay);
         }
    }
    
    //=============================================
    // Init jQuery Plugin
    //=============================================
    $.pinto = {
        // Default options (you may override them)
        defaults: Pinto.prototype
    };
    
    /**
     * @param CfgOrCmd - config object or command name
     * @param CmdArgs - some commands (like "value") may require an argument
     */
    $.fn.pinto = function(CfgOrCmd, CmdArgs) {
        var dataName = "pinto",
        instance = this.data(dataName);
        
        return this.each(function() {
            var el = $(this),
            instance = el.data(dataName),
            config = $.isPlainObject(CfgOrCmd) ? CfgOrCmd : {};

            if (instance) {
                instance.init(config);
            } else {
                var initialConfig = $.extend({}, el.data());
                
                config = $.extend(initialConfig, config);
                config.el = el;
                instance = new Pinto(config);
                el.data(dataName, instance);
            }
        });
    }
})(window.jQuery);