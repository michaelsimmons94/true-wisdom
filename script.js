$(document).ready(function() {
    var myurl= "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    var wisdom="";
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
           wisdom="<div class=\"quote\">"+json+"</div>";
           console.log(json);
           $("#topicResults").html(wisdom);
        }
    });
    $("#topicSubmit").click(function(e) 
    {
        e.preventDefault();
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
    
                wisdom="<div class=\"quote\">"+json+"</div>"+wisdom;
                $("#topicResults").html(wisdom);
            }
        });
        
    });
});