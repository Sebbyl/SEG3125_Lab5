
$(document).ready(function(){
    $("#date").datetimepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
    })
    $("#btnradio0").change(function(){
        $("#date").datepicker("destroy");
        $("#date").datetimepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
        })
        $( "#date" ).datepicker("refresh");
    })
    $("#btnradio1").change(function(){
        $("#date").val("");
        $("#date").datepicker("destroy");
        $("#date").datetimepicker({
            beforeShowDay:
                function(date){
                    return [date.getDay() == 0 || date.getDay() == 1 ? false: true];
                }
        })
        $( "#date" ).datepicker("refresh");
    })
    $("#btnradio2").change(function(){
        $("#date").val("");
        $("#date").datepicker("destroy");
        
        $("#date").datetimepicker({
            beforeShowDay:
                function(date){
                    return [date.getDay() == 0 || date.getDay() == 6 ? false: true];
                }
        })
        $( "#date" ).datepicker("refresh");
    })
    $("#btnradio3").change(function(){
        $("#date").val("");
        $("#date").datepicker("destroy");
        
        $("#date").datetimepicker({
            beforeShowDay:
                function(date){
                    return [date.getDay() == 4 || date.getDay() == 5 ? false: true];
                }
        })
        $( "#date" ).datepicker("refresh");
    })

    
    
});





function formCheck(){
    $("#payment").modal("show")
    
    $("#infoForm").validate({
        invalidHandler: function(){
            
            
            alert("You have not filled all of the required fields! (marked by a *)")
            
        },
        submitHandler: function(){
            var phoneNumRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            var phoneNum = document.getElementById("phoneNumber").value
            if (!$("input[type=checkbox]").is(":checked") || $("#date").val() == ""){
                alert("You have not filled all of the required fields! (marked by a *)")
            }else if(!phoneNumRegex.test(phoneNum)){
                // console.log("work")
                $("#phoneError").css("visibility", "visible");
                
            }
            else{
                $("#payment").modal("show")
                $("#phoneError").css("visibility", "hidden");
                // console.log('not good')
            }
        }
       
    });
   
    
 }

 function cardCheck(){
    var visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    var creditRegex = /^(?:5[1-5][0-9]{14})$/
    var cvvRegex = /^[0-9]{3,4}$/
    var card = document.getElementById("cardNum").value
    var cvv = document.getElementById("CVV").value
    if ($("#visaCard").is(":checked")){
        if (!visaRegex.test(card)){
            $("#cardError").css("visibility", "visible");
            console.log("Visa Declined")
        }else{
            console.log("confirm")
            $("#cardError").css("visibility", "hidden");
        }

    }else if ($("#creditCard").is(":checked")){
        if (!creditRegex.test(card)){
            $("#cardError").css("visibility", "visible");
            console.log("Credit Declined")
        }else{
            console.log("confirm")
            $("#cardError").css("visibility", "hidden");
        }
        
    }
    if (!cvvRegex.test(cvv)){
        $("#cvvError").css("visibility", "visible");
        console.log("cvv Declined");
    }else{
        console.log("confirm")
        $("#cvvError").css("visibility", "hidden");
    }
    $("#cardInfo").validate({
            invalidHandler: function(){
                alert("You have not filled all of the required fields! (marked by a *)")
               
                
            },
            submitHandler: function(){
                var flag = false
                var visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
                var creditRegex = /^(?:5[1-5][0-9]{14})$/
                var cvvRegex = /^[0-9]{3,4}$/
                var card = document.getElementById("cardNum").value
                var cvv = document.getElementById("CVV").value
                if ($("#visaCard").is(":checked")){
                    if (!visaRegex.test(card)){
                        $("#cardError").css("visibility", "visible");
                        console.log("Visa Declined")
                        flag = true;
                    }else{
                        console.log("confirm")
                    }
            
                }else if ($("#creditCard").is(":checked")){
                    if (!creditRegex.test(card)){
                        $("#cardError").css("visibility", "visible");
                        console.log("Credit Declined")
                        flag = true;
                    }else{
                        console.log("confirm")
                    }
                    
                }
                if (!cvvRegex.test(cvv)){
                    $("#cvvError").css("visibility", "visible");
                    console.log("cvv Declined");
                    flag = true;
                }else{
                    console.log("confirm")
                    $("#cvvError").css("visibility", "hidden");
                }
                if (flag){
                    console.log("Err")
                }else{
                    $("#payment").modal("hide")
                    $("#confirm").modal("show")
                }
               
            }
           
        });
 }
