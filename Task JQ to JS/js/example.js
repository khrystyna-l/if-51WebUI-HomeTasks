$(function() {
    var count = 1;
    $("#add").click(function(event) {
        var name = $("#name").val();
        var age = $("#age").val();

        var row = "<tr><td id=\"check_"+count+"\"></td ><td id=\"name_"+count+"\"></td><td id=\"age_"+count+"\"></td><td id=\"delete_"+count+"\"></td></tr>"
        var checkbox = "<input name=\"check\" type=\"checkbox\" id=\"check_box_"+count+"\">"
        var button = "<input type=\"button\" id=\"button_del_"+count+"\" value=\"Delete\">"

        $("#student").append(row);
        $("#check_"+count+"").append(checkbox);
        $("#delete_"+count+"").append(button);

        $("#button_del_"+count+"").addClass("button_del");

        $("#name_"+count+"").text(name);
        $("#age_"+count+"").text(age);

        count++;
    });

    $("body").on("click",".button_del", function(event){
        $(this).parent("td").parent("tr").remove();
    });

    $("#delete_all").click(function(event) {
        $("input:checkbox:checked").each(function() {
            var check = ($(this).attr("id"));
            $("#"+check).parent("td").parent("tr").remove();
        });
    });
});

