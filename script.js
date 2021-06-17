$(document).ready(function(){
    
});

function formCheck(){

    
    $("#infoForm").validate({
        invalidHandler: function(){
            if (!$("input[type=checkbox]").is(":checked") || $("#date").val() == ""){
                alert("You have not filled all of the required fields! (marked by a *)")
            }
        },
        submitHandler: function(){
            if (!$("input[type=checkbox]").is(":checked") || $("#date").val() == ""){
                alert("You have not filled all of the required fields! (marked by a *)")
            }else{
                $("#payment").modal("show")
            }
        }
       
    });
   
    
 }
