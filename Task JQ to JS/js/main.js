onload = function() {

var addButton = document.getElementById('add'),
    counter = 1;

    addButton.onclick = function () {
        var row = document.createElement('tr'),
            name1 = document.getElementById('name').value,
            age1 = document.getElementById('age').value;

        row.innerHTML = '<td><input type="checkbox"></td><td>' + name1 + counter + '</td><td>' + age1 + counter +'</td><td><input id="buttonDel_' + counter + '" type="button" value="Delete"></td>';
        document.getElementById('student').appendChild(row);

        document.getElementById('buttonDel_' + counter).onclick = function () {
            document.getElementById('student').removeChild(this.parentNode.parentNode);
        }
        counter++;
    }

    var deleteAll = document.getElementById('delete_all');

    deleteAll.onclick = function () {
        var table = document.getElementById('student'),
            inputAll = table.getElementsByTagName('input'),
            delSelected = [],
            k = 0;
        for (var i = 0; i < inputAll.length; i++) {
            if (inputAll[i].type == 'checkbox' && inputAll[i].checked == true) {
                delSelected[k] = inputAll[i].parentNode.parentNode;
                k++;
            }; 
        };
        for (var i = 0; i < delSelected.length; i++) {
            table.removeChild(delSelected[i]);
        };
    }
}