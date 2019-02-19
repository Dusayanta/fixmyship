$(document).ready(()=>
{
    $.validator.addMethod('customPasswordValidator', (value, element)=>{
        let rex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[$#_])(?=.*[A-Z])([a-zA-Z0-9$#_]{8})$/;//password must contain {0-9},{a-z},{A-Z},$,#,_
        let isValid=rex.test(value);
        return isValid;
    });
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(value);
        return isValid; 
    });
    
        $("#signup").click(()=>{
            $("#form-registration").validate({
                rules:{
                    name:{
                        required:true
                    },
                    password:{
                        required: true,
                        customPasswordValidator: true
                    },
                    email: {
                        required: true,
                        customEmailValidator: true
                    },
                    
                    phone: {
                        required: true,
                        min: 4000000001,
                        max: 9999999999
                    }
                },
                messages:
                {
                    name : 'Name cannot be left blank',
                    password:{
                        required:'Password cannot be left blank',
                        customPasswordValidator:'Password must contain 8 characters {[a-z] [A-Z] [0-9] [$,#,_]}'
    
                    },
                    email: {
                        required: 'Email cannot be left blank',
                        customEmailValidator: 'Please re-enter a valid email'
                    },
                    phone: {
                        required: 'Phone cannot be left blank',
                        min: 'Phone number cannot be less than 4000000001',
                        max: 'Phone number cannot be greater than 9999999999'
                    }
                }

            });
           
        });
        
});