var inView=function () {
    /* scrolledItems
        {
            100: [ // Pixel value from the top
                {
                    el: DOMElement,
                    cb: callbackFunc
                }
            ],
            250: [
                {
                    el: DOMElement,
                    cb: callbackFunc
                }
            ]
        }
    */
    var scrolledItems={};
    
    function getTop(el) {
        return el.offsetTop;
    }
    
    function addToScrolledItems(el, cb) {
        var top=getTop(el);
        el.className+=' wait-to-be-scrolled';
        if(!scrolledItems[top]) scrolledItems[top]=[];
        scrolledItems[top].push({
            el: el,
            cb: cb
        });
    }
    
    function _add(el, cb) {
        if(el.length) {
            for(var a=0, len=el.length; a<len; a++) {
                addToScrolledItems(el[a], cb);
            }
        } else addToScrolledItems(el, cb);
    }
    
    function _del() {
        
    }
    
    function checkView() {
        var top=window.scrollY;
        var height=window.innerHeight;
        for(var y in scrolledItems) {
            if(y > top && y < (top+height-100)) {
                while(scrolledItems[y].length) {
                    var tmp=scrolledItems[y].shift();
                    tmp.cb.apply(tmp.el);
                }
            }
        }
    }
    
    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', checkView, false); 
        addEventListener('load', checkView, false); 
        addEventListener('scroll', checkView, false); 
        addEventListener('resize', checkView, false); 
    } else {
        _add=function () {
            console.log('*** Canceled inView');
        }
    }
    
    return {
        add: _add,
        del: _del
    }
}();

function delClass(el, classname) {
    el.className=(' '+ el.className +' ').replace(' '+ classname +' ', ' ');
}

inView.add(document.querySelectorAll('.graph-container'), function() {
    delClass(this, 'wait-to-be-scrolled');
    this.className+=' scrolled-in-view';
});