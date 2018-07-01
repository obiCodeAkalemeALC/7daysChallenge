$(document).ready(function() {
    $("#sizePicker").submit(function makeGrid(makeGrid) {
        $("table tr").remove();
        var rows = $("#inputHeight").val();
        var cols = $("#inputWeight").val();
            for (var i = 1; i <= rows; i++) {
                $("table").append("<tr></tr>");
                for (var j = 1; j <= cols; j++) {
                    $("tr:last").append("<td></td>");
                    $("td").attr("class", "cells");
                }
            }
        makeGrid.preventDefault();
        $(".cells").click(function() {
            let paint = $('#colorPicker').val();        
            if($(this).attr('style')){
                $(this).removeAttr('style');
            }else{
                $(this).attr('style', 'background-color:' + paint);
            }
        });
    });
});