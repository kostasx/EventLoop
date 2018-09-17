// Tiny library

//---------------------------------
// http://checkman.io/blog/creating-a-javascript-library/
// http://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796
//http://lea.verou.me/2015/04/idea-extending-native-dom-prototypes-without-collisions/

(function( window ){

    'use strict';

    function define_library () {

        var tinyLib = {};
        var doc = document;
        var ns = 'http://www.w3.org/2000/svg';

        function ElemSet( elem ) {
          this.elem = elem;
        }

        //---------------------------------

        tinyLib.get = function( selector, context ) {

          var contextElem = context ? context : doc;
          if ( context && context.elem  ) {
            contextElem = context.elem;
          }

          var nodeList = contextElem.querySelectorAll( selector );
          var elemsArr = Array.prototype.slice.call( nodeList );

          var elemsList = elemsArr.map( function( item ) {
            return new ElemSet( item );
          });

          if ( elemsList.length === 1 ) {
            return elemsList[0];
          }

          return elemsList;
        };

        //---------------------------------

        tinyLib.create = function ( tagName ) {
          var elem = doc.createElement( tagName );
          return new ElemSet( elem );
        };

        //---------------------------------

        tinyLib.createNS = function( elemName ) {
          var elem = doc.createElementNS( ns, tagName );
          return new ElemSet( elem );
        };

        //------------------------------
        // ElemSet Methods

        ElemSet.prototype.addClass = function ( classNames ) {
          var elem = this.elem;

          if ( typeof classNames === 'string') {
            classNames = [classNames];
          }

          classNames.forEach( function ( className ){
            elem.classList.add( className );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.removeClass = function ( classNames ) {

          var elem = this.elem;

          if ( typeof classNames === 'string') {
              classNames = [classNames];
          }

          classNames.forEach( function ( className ){
              elem.classList.remove( className );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.append = function( elem ) {
          var itemsToAdd = inputElemToItemsList( elem );
          var that = this;

          itemsToAdd.forEach( function( item ) {
            if ( !item ) {
              return;
            }
            that.elem.appendChild( item.elem );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.prepend = function( elem ) {
          var itemsToAdd = inputElemToItemsList( elem );
          var that = this;

          itemsToAdd.forEach( function( item ) {
            if ( !item ) {
              return;
            }
            that.elem.insertBefore( item.elem, that.elem.firstChild );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.clone = function() {
          var elemToClone = this.elem;
          var clonedElem = elemToClone.cloneNode(true);

          return new ElemSet( clonedElem );
        };

        //---------------------------------

        ElemSet.prototype.attr = function( attrName, attrVal ) {

          var elem = this.elem;
          var attrSet = {};

          if ( attrVal ) {
            attrSet[ attrName ] = attrVal;
          }
          else if ( typeof attrName === 'object' ) {
            attrSet = attrName;
          }

          if ( Object.keys(attrSet).length > 0 ) {
            for ( var key in attrSet ) {
              elem.setAttribute( key, attrSet[ key ]);
            }
            return this;
          }

          var out = elem.getAttribute( attrName );
          return out;

        };

        //---------------------------------

        ElemSet.prototype.val = function ( content ) {
          if ( !content ) {
            return this.elem.value;
          }

          this.elem.value = content;
          return this;
        };

        //---------------------------------

        ElemSet.prototype.html = function ( content ) {
          var elem = this.elem;

          if( content ) {
            elem.innerHTML = content;
            return this;
          }

          return elem.innerHTML;
        };

        //---------------------------------

        ElemSet.prototype.data = function ( content ) {
          var elem = this.elem;

          if( content ) {
            // Input: list
            if ( Array.isArray( content ) === true ) {
              var dataList = {};

              content.forEach(function( item ) {
                var data = elem.dataset[ item ];
                if ( data ) {
                  dataList[ item ] = data;
                }
              });

              return dataList;
            }
            // Input: object
            else if ( typeof content === 'object' ) {

              for( var key in content ) {
                elem.dataset[ key ] = content[ key ];
              }

              return elem.dataset;
            }
            // Input: string
            else if( typeof content === 'string' ) {
              var data = elem.dataset[ content ];
              return data;
            }

          }

          return null;
        };

        //---------------------------------
        // Colored console output

        var consoleStyles = {
          'h1': 'font: 2.5em/1 Arial; color: crimson;',
          'h2': 'font: 2em/1 Arial; color: orangered;',
          'h3': 'font: 1.6em/1 Arial; color: olivedrab;',
          'h4': 'font: bold 1.3em/1 Arial; color: midnightblue',
          'warn': 'padding: 0 .3rem; background: crimson; font: 2em/1 Arial; color: white'
        };

        tinyLib.out = function( msg, style ) {
          if ( !style || !consoleStyles[ style ] ) {
            style = '';
          }
          console.log( '%c' + msg, consoleStyles[ style ] );
        };

        tinyLib.dir = function( msg ) {
          console.dir( msg );
        };

        //---------------------------------

        function inputElemToItemsList( elem ) {
          var elemToAdd = elem;
          var itemsToAdd = [];

          if ( typeof elem === 'string' ) {
            elemToAdd = tinyLib.create( elem );
            itemsToAdd.push( elemToAdd );
          }
          else if ( Array.isArray( elem ) === true ) {
            itemsToAdd = elem;
          }
          else {
            itemsToAdd.push( elemToAdd );
          }

          return itemsToAdd;
        }

        //---------------------------------

        return tinyLib;
    }

    //---------------------------------

    if ( typeof tinyLib === 'undefined' ) {
        window.tinyLib = define_library();
    }

})(window);


function removeInjectedStylesheet(){

  var $injectStylesheet = document.querySelector("style#injected_stylesheet");

  if ( $injectStylesheet ){

    $injectStylesheet.remove();

  }

}

var $ = tinyLib;

var doc   = document;
var body  = $.get('body');
var aside = $.get('.l-aside');
var main  = $.get('.l-main');
var head  = $.get('head');

var navHolder     = $.create('ul').addClass('nav');
var contentHolder = $.create('div').addClass('content');
var stylesHolder  = $.create('style').attr({'id':'flex'});
var navMarker    = $.create('li').addClass('nav__marker');

var sections = [];
var navItems = {};
var navItemCurrent;

var demoWrapper = $.get('.demo-wrapper');
var codeWrapper = $.get('.code-wrapper');

var demoValueClassCurrent = 'demo-values__control--current';
var codeOffset = '  ';
var demoElemClasses = {
  'flex containers': '.parent' ,
  'flex items': '.child--featured'
};
var navItemCurrentClass = 'nav__item--current';
var localStorThemeKey = 'fbchTheme';

//---------------------------------------------
// CONTENT
//---------------------------------------------

function Item ( item, pos ){
    this.dataItem = item;
    this.pos = pos;

    var navItem = this.navItemElem();
    navHolder.append( navItem );

    if ( this.dataItem.type && this.dataItem.type == 'subheader' ) { return; }

    var contentItem = this.ContentItemElem();
    var styles = this.StylesItem();

    contentHolder.append( contentItem );
}

//---------------------------------------------
// NAV
//---------------------------------------------

Item.prototype.navItemElem = function () {

    var appliesToText = this.dataItem.appliesTo ? this.dataItem.appliesTo.replace("flex","").trim() : "";
    var elemContent = $.create('a')
                       .attr({
                        'href': '#' + this.dataItem.name,
                        'data-parent-nav-item': this.dataItem.name,
                        'class': 'nav__link'
                       })
                       .html(
                        this.dataItem.name 
                        + "<span>[ " + appliesToText + " ]</span>"
                      );
    // need to fix
    elemContent.elem.onclick = function() {
      removeInjectedStylesheet();
      navItemCurrent = elemContent;
      setCurrentNavItem();
    };

    if ( this.dataItem.type && this.dataItem.type === 'subheader' ) {
        elemContent = $.create('h2')
                       .attr({
                        'class': 'nav__subheader'
                       })
                       .html(this.dataItem.title);
    }

    var classList = ['nav__item', 'nav__item--' + this.dataItem.name];

    var elem = $.create('li')
                .addClass( classList )
                .attr( {'data-name' : this.dataItem.name} )
                .append( elemContent );

    navItems[ this.dataItem.name ] = elem;

    if ( !navItemCurrent ) {
      navItemCurrent = elem;
    }
    return elem;
};

//---------------------------------------------

function setCurrentNavItem ( elemSet ) {
    var parent;
    elemSet = elemSet ? elemSet : navItemCurrent;

    if ( !elemSet.elem ) { return; }

    unsetClass ( navItemCurrentClass );

    var elemSetEl = elemSet.elem;

    if ( elemSetEl.dataset.parentNavItem ) {
      parent = $.get('.nav__item--' + elemSetEl.dataset.parentNavItem);
    } else {
      parent = elemSet;
    }

    if ( parent ) {
      parent.addClass( navItemCurrentClass );
      navMarker.elem.style.top = parent.elem.offsetTop + 'px';
    }
}

//---------------------------------------------
// CONTENT
//---------------------------------------------

Item.prototype.ContentItemElem = function ( ) {

    var content = [
            this.contentItemTitle (),
            this.contentItemDemo (),
            this.contentItemDesc (),
            this.contentItemTarget (),
            this.contentItemInitial (),
            this.contentItemValues ()
            ];

    var elem = $.create('section')
                .addClass('content__item')
                .attr({id: this.dataItem.name})
                .append( content );
    sections.push( elem );
    return elem;
};

//---------------------------------------------

Item.prototype.contentItemTitle = function () {

  if ( !this.dataItem.link ) return;

    return $.create('a')
                .attr({ 
                  'target': '_blank',
                  'href'  : this.dataItem.link,
                  'class' : 'content__title'
                }).html(this.dataItem.name);

};

//---------------------------------------------

Item.prototype.contentItemTarget = function () {

    if ( !this.dataItem.appliesTo ){
        return;
    }

    var elem = $.create('p')
                .addClass('content__initial-value')
                .html('<b>Applies to</b>: ' + this.dataItem.appliesTo + '.');

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemInitial = function () {

    if ( !this.dataItem.initValue ){
        return;
    }

    var elem = $.create('p')
                .addClass('content__initial-value')
                .html('<b>Initial</b>: ' + this.dataItem.initValue + '.');

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemDemo = function () {

    this.demoWrapper = demoWrapper.clone();
    this.demoElem = $.get('.demo', this.demoWrapper);
    this.targetElemSelector = demoElemClasses[ this.dataItem.targetForDemo ];

    if ( this.dataItem.demoBefore ) {
      var view = $.get('.demo__view', this.demoWrapper);
      view.html( this.dataItem.demoBefore + view.html() );
    }

    // Class-marker
    this.demoClassName = 'demo--prop-' + this.dataItem.name;
    this.demoClass = '.' + this.demoClassName;

    this.demoElem.addClass( this.demoClassName );

    if ( this.targetElemSelector && this.targetElemSelector.search('featured') > -1 ) {
      this.demoElem.addClass( 'demo--has-featured' );
    }

    this.contentItemDemoValues();
    this.contentItemSetCSS();
    this.contentItemSetCodeText();

    return this.demoWrapper;
};

//---------------------------------------------

Item.prototype.contentItemGetCSS = function () {
  var rules = this.dataItem.cssRules;
  var parentClass = this.demoClass;
  var visibleStyles = '';
  var hiddenStyles = '';
  var that = this;

  if ( rules ) {
    rules.forEach( function(item, i){
      var rulesListHidden = '';
      var rulesListVisible = '';
      var styles = '';

      for (var rule in item.rules ) {
        var ruleString = rule + ': ' + item.rules[ rule ] + ';\n';

        rulesListHidden += codeOffset + ruleString;

        if ( rule === that.dataItem.name ) {
          ruleString = '<mark>' + ruleString + '</mark>';
        }

        rulesListVisible += codeOffset + ruleString;
      }

      hiddenStyles += parentClass + ' ' + item.selector + ' {\n';
      hiddenStyles += rulesListHidden;
      hiddenStyles += '}\n';

      visibleStyles += item.selector + ' {\n';
      visibleStyles += rulesListVisible;
      visibleStyles += '}\n';
    });

    that.visibleStyles = visibleStyles;
    that.hiddenStyles = hiddenStyles;
  }
};

//---------------------------------------------

Item.prototype.contentItemSetCSS = function () {

  this.stylesElem = $.create('style')
                     .attr({ id: 'style-' + this.dataItem.name });

  this.contentItemGetCSS();
  this.stylesElem.html( this.hiddenStyles );

  head.append( this.stylesElem );
};

//---------------------------------------------

Item.prototype.contentItemChangeCSSProp = function () {

  var rules = this.dataItem.cssRules;
  var current = this.currentValue;
  var targetSelector = this.targetElemSelector;
  var prop = this.dataItem.name;
  var that = this;

  if ( rules ) {
    rules.forEach( function(rule, i){
      if ( rule.selector === targetSelector ) {
        rule.rules[ prop ] = current;

        that.contentItemGetCSS();
        that.stylesElem.html( that.hiddenStyles );
        that.codesElem.html( that.visibleStyles );
      }
    });
  }
};

//---------------------------------------------

Item.prototype.contentItemSetCodeText = function () {
    this.codesElem = $.get('.demo__code', this.demoWrapper);
    this.codesElem.html( this.visibleStyles );
};

//---------------------------------------------

Item.prototype.contentItemDemoValues = function () {
    var items = [];
    var parentItem = this;
    var hasCurrent = false;

    if ( !this.dataItem.values && !this.dataItem.customValues ) {
        return;
    }

    var values = this.dataItem.values;

    if ( this.dataItem.customValues ) {
      values = this.dataItem.customValues;
    }

    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var valElem = new DemoControl( this, value );

        if ( value.current && value.current === true ) {
          valElem.addClass( demoValueClassCurrent );
          hasCurrent = true;
        }
        else if ( !this.dataItem.customValues
          && !hasCurrent
          && value.name === this.dataItem.initValue ) {
            valElem.addClass( demoValueClassCurrent );
            hasCurrent = true;
        }

        items = items.concat(valElem);
    }

    var elem = $.create('div').addClass('demo-values').append(items);

    this.demoWrapper.prepend( elem );

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemDesc = function () {

    if ( !this.dataItem.desc ) {
        return;
    }

    var elem = $.create('div')
                .addClass('content__desc')
                .html(this.dataItem.desc);

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemValues = function () {
    var items = [];

    if ( !this.dataItem.values ) {
        return;
    }

    for (var i = 0; i < this.dataItem.values.length; i++) {
        var value = this.dataItem.values[i];
        var id = this.dataItem.name + '__' + value.name;

        var dt = $.create('dt')
                  .attr({
                    id: id,
                    class: 'content-values__term',
                  })
                  .html(value.name);
        var dd = $.create('dd')
                  .attr({
                    class: 'content-values__desc',
                  })
                  .html(value.desc);

        items.push(dt, dd);
    }

    var elem = $.create('dl')
                .addClass('content-values')
                .append(items);
    return elem;
};

//---------------------------------------------
// DEMO CONTROLS
//---------------------------------------------

function DemoControl( parentObj, value ) {

    var valName = value.name;
    var that = this;

    this.elemSet = $.create('button')
                    .addClass('demo-values__control')
                    .html(valName)
                    .attr({'name': valName});

    this.elemSet.elem.onclick = function( ) {
        parentObj.currentValue = this.innerHTML;
        parentObj.contentItemChangeCSSProp();

        if ( !parentObj.currentElem ) {
          parentObj.currentElem = $.get('.' + demoValueClassCurrent, this.parentNode);
        }

        if ( parentObj.currentElem ) {
          parentObj.currentElem.removeClass( demoValueClassCurrent );
        }

        parentObj.currentElem = that.elemSet;
        that.elemSet.addClass( demoValueClassCurrent );
    };

    return this.elemSet;
}

//---------------------------------------------
// STYLES
//---------------------------------------------

Item.prototype.StylesItem = function () {

    var prop = this.dataItem.name;
    var values = this.dataItem.values;
    var target = this.dataItem.targetForDemo;
    var intValue = this.dataItem.initValue;
    var parentClass = this.demoClass;
    var childClass = this.demoClass + ' .flex-item';

    var parentStyles = '';

    if ( !this.dataItem.targetForDemo || !values) {
        return;
    }

    for (var i = 0; i < values.length; i++) {

        // Parent
        if ( target === 'flex container' ) {

            var value = values[i];
            var elemClass = '.' + prop + '--' + value.name;

            parentStyles += [
                elemClass + ' {',
                prop + ': ' + value.name + ';',
                '}\n'
                ].join('\n');

        }
    }

    var containerStyles = [
        parentStyles,
        // childsStyles
        ].join('\n');

    stylesHolder.elem.innerHTML += containerStyles;
};

//---------------------------------------------
// COMMON
//---------------------------------------------

function unsetClass ( className ) {
    var current = $.get('.' + className);

    if ( current.elem ) {
        current.removeClass( className );
    }
}

//---------------------------------------------

// Source: https://learn.javascript.ru/onscroll

function isVisible(elem) {

  var coords = elem.getBoundingClientRect();
  var koeff = 300;

  var windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  var topVisible = coords.top > 0 && coords.top < windowHeight / 2;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

//---------------------------------------------

// Source: https://davidwalsh.name/javascript-debounce-function

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//---------------------------------------------

var myEfficientFn = debounce(function() {

  sections.forEach( function( item, i ) {
    if( isVisible( item.elem ) && navItems[ item.elem.id ].elem ) {
        setCurrentNavItem ( navItems[ item.elem.id ] );
    }
  });

}, 100);

window.addEventListener('scroll', myEfficientFn);

(function createContent () {

  var dataLength = data.length;
  for (var i = 0; i < dataLength; i++) { var item = new Item( data[i], i ); }
  head.append( stylesHolder );
  main.append( contentHolder );
  aside.prepend( navHolder );
  navHolder.append( navMarker );
  setCurrentNavItem();

}());
