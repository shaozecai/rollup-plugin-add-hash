(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    alert('module1.js');

    function foo1() {
        alert('foo1');
    }
    function foo2() {
        alert('foo2');
    }

    foo1();
    foo2();

})));
