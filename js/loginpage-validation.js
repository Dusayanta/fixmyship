$(document).ready(()=>
{
    console.log('running')
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(value);
        return isValid; 
    });
    
    $.validator.addMethod('customPasswordValidator', (value, element)=>{
        let rex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[$#_])(?=.*[A-Z])([a-zA-Z0-9$#_]{8})$/;//password must contain {0-9},{a-z},{A-Z},$,#,_
        let isValid=rex.test(value);
        return isValid;
    });
    
        $("#login").click(()=>{
            $("#login-form").validate({
                rules:{
                    email: {
                        required: true,
                        customEmailValidator: true
                    },
                    
                    password:{
                        required: true,
                        customPasswordValidator: true
                    }
                    
                    
                },
                messages:
                {
                    email: {
                        required: 'Email cannot be left blank',
                        customEmailValidator: 'Please re-enter a valid email'
                    },
                    password:{
                        required:'Password cannot be left blank',
                        customPasswordValidator:'Password must contain 8 characters {[a-z] [A-Z] [0-9] [$,#,_]}'
    
                    }
                    
                }

            });
           
        });
        
});