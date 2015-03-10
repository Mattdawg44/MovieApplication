/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var names = ["Blue Streak (1999), Starring: Martin Lawrence, Luke Wilson", "Mrs. Doubtfire (1993), Starring: Robin Williams, Sally Field", "Life of Pi (2012), Starring: Suraj Sharma, Irrfan Khan", "The Pacific (2010) Starring: James Badge Dale, Joseph Mazzello", "Rio (2011) Starring: Jesse Eisenberg, Leslie Mann", "An Unfinished Life (2005) Starring: Robert Redford, Jennifer Lopez", "The Woman In Black (2012) Starring: Lu Corfield, Daniel Radcliffe"];

function style_text(to_be_styled, text){
    var start=to_be_styled.search(text);
    var first_string=to_be_styled.substring(0,start);
    var second_string=to_be_styled.substring(start,text.length+start);
    var third_string=to_be_styled.substring(text.length+start,to_be_styled.length);
    return first_string +"<b>"+second_string+"</b>"+third_string;
}
function search() {
    var result = new Array();
    var text_field = $("field");
    var value = text_field.value;

    for (var i = 0; i < names.length; i++) {
        //trim the value, and make case insensitive comparison
        var start = names[i].toLowerCase().search(value.toLowerCase().trim()); 
        if (start != -1) //if the index is found
            result.push(names[i]);
    }
    show_search_results(text_field, result, "suggestions_box", "sub_suggestions");
}

function select(sub_suggestion){
    var data=sub_suggestion.getAttribute("data");
    $("field").value=data;  
    $("field").style.color="black";
    $("suggestions_box").style.display="none";
}

function show_search_results(text_field, results, sug_box, sug_item) {

    $(sug_box).style.display = results.length == 0 ? "none" : "block";
    $(sug_box).focus();
    /* find the position of the text field */
    var position = findPos(text_field);
    /* position the suggestion box under the text field */
    $(sug_box).style.top = position[1] + text_field.offsetHeight + "px";
    $(sug_box).style.left = position[0] + "px";
    $(sug_box).style.width = text_field.clientWidth + "px";

/* add the suggestion items */
    var html_code = "";
    for (var i = 0; i < results.length; i++) {
        html_code += "<div class='" + sug_item + "'data='" + results[i] + "' onclick='select(this)' ondblclick='select(this)' >";
        html_code += results[i];
        html_code += "</div>";
    }

    $(sug_box).innerHTML = html_code;
}

