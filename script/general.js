/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function $(id) {
    return document.getElementById(id);
}

function findPos(obj) {

    var curleft = 0;
    var curtop = 0;

    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }

    return [curleft, curtop];
}

/*make the text equal to the initial text if the text is empty
 * if the text is equal to the intial text, make the text color gray
 */

function show_initial_if_empty(element, initial_text) {
    if (element.value.trim() === "")
        element.value = initial_text;

    if (element.value.trim() === initial_text)
        element.style.color = "gray";
}


function make_search_field(key, initial_text) {
    //the initial text color is gray
    var element = $(key);
    element.value = initial_text;
    element.style.color = "gray";

    //when the mouse is overm make the text color light gray
    element.onmouseover = function() {
        if (element.value.trim() === initial_text)
            element.style.color = "lightgray";
    };

    element.onmouseout = function() {
        show_initial_if_empty(element, initial_text);
    };
    element.onblur = function() {
        show_initial_if_empty(element, initial_text);
    };

    /* when the text field is in focus, make the text empty if it is
     * equal to the initial text
     */
    element.onfocus = function() {
        if (element.value.trim() === initial_text)
            element.value = "";
    };

    /* when the key is down
     * make the text empty if it is equal to the initial text
     * also make the text color black
     */
    element.onkeydown = function() {
        if (element.value.trim() === initial_text)
            element.value = "";
        element.style.color = "black";
    };
}
