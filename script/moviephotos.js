/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init(){
    load_images();
}

function $(id){
    return document.getElementById(id);
}

function sort(){
    var value=$("combo_box").value.toLowerCase();
    movies["movies"]=sort_array(movies["movies"],value);
    
    load_images();
}

function load_images(){
    
var data=movies["movies"];
var html="";
for(var i=0;i<data.length;i++)
    html+=make_image(data[i]);

$("photos").innerHTML=html;
}
function load_list_images(){
    var data=movies["movies"];
    var html="";
    for(var i=0;i<data.length;i++)
        html+=make_list_image(data[i]);
    $("photos").innerHTML=html;
}

function make_image(data){
    var html="";
    html+="<div class='photo'>";
    html+="<img src='"+data["photo"]+"'>";
    if(data["HD"] === true){
        html+="<img class='HD' src='data/HD.png'>";
    }
    html+="<p class='arrow_box'>"+data["title"]+" Starring: "+data["Starring"]+"</p>";
    html+="<div class='description'></div>";
    html+="<p class='description'>"+data["title"]+"</p>";
    html+="<p class='date'>"+"("+data["year"]+")"+"</p>";
    html+="<p class='starring'> Starring: "+data["Starring"]+"</p>";
    html+="<p class='movie_description'> Description: "+data["Description"]+"</p>";
    html+="<p class='rating'> Rating: "+data["rating"]+"/5</p>";
    html+="</div>";
    return html;
}
/*
function make_image_list(data){
    var html="";
    html+="<div class='photo'>";
    html+="<img src='"+data["photo"]+"'>";
    html+="<div class='description'></div>";
    html+="<p class='description'>"+data["title"]+"</p>";
    html+="<p class='date'>"+"("+data["year"]+")"+"</p>";
    html+="<p class='starring'> Starring: "+data["Starring"]+"</p>";
    html+="<p class='description'> Description: "+data["Description"]+"</p>+</div>";
    html+="<img src='"+data["HD"]+">";
    html+="<p class='rating'> Rating: "+data["rating"]+"</p>";
    html+="</div>";
    return html;
}
*/

function make_grid(){
    $("photos").className="grid";
    $("grid_icon").src="data/grid_pressed.jpg";
    $("list_icon").src="data/list.jpg"; 
    load_images();
}

function make_list(){
    $("photos").className="list";
    $("list_icon").src="data/list_pressed.jpg";
    $("grid_icon").src="data/grid.jpg";
    load_list_images();
}



