/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function sort_array(data, attribute) {

    var len = data.length,
            min;

    for (var i = 0; i < len; i++) {

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (var j = i + 1; j < len; j++) {
            var x=data[j][attribute];
            var y=data[min][attribute];
            if (data[j][attribute] < data[min][attribute]) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            var temp = data[i];
            data[i]= data[min];
            data[min] = temp;
        }
    }

    return data;
}

