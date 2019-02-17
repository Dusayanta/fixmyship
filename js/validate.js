// javascript for registration.html
const check = () =>
    	{ 	
    	let name1=document.getElementById('name1').value;
    	let name2=document.getElementById('name2').value;
    	let pwd=document.getElementById('pwd').value;
    	let conpwd=document.getElementById('conpwd').value;
    	if(pwd!=conpwd)
    	{
    		alert("Password and Confirm password have to be same");
    	}
    }

    $(document).ready(()=>{
     
     /*$('#show-form').click(()=>
     {
       $('#form1').fadeIn(300);
     });*/
/*animation for 1st name
       $('#name1').keypress(()=>{
        $('#name1').animate({
          width:'330px'
        });
     });
       
       $('#name2').keypress(()=>{
        $('#name2').animate({
          width:'330px'
        });
     }); */

// For first name

       $('#name1').mouseover(()=>{
        $('#name1').animate({
          width:'330px'
        });
     });

       $('#name1').mouseout(()=>{
        $('#name1').animate({
          width:'300px'
        });
     });

// For second name

       $('#name2').mouseover(()=>{
        $('#name2').animate({
          width:'330px'
        });
     });

       $('#name2').mouseout(()=>{
        $('#name2').animate({
          width:'300px'
        });
     });

//For email

       $('#email').mouseover(()=>{
        $('#email').animate({
          width:'330px'
        });
     });

       $('#email').mouseout(()=>{
        $('#email').animate({
          width:'300px'
        });
     });


// For mobile number
$('#phn').mouseover(()=>{
        $('#phn').animate({
          width:'330px'
        });
     });

       $('#phn').mouseout(()=>{
        $('#ephn').animate({
          width:'300px'
        });
     });
// For password

       $('#pwd').mouseover(()=>{
        $('#pwd').animate({
          width:'330px'
        });
     });

       $('#pwd').mouseout(()=>{
        $('#pwd').animate({
          width:'300px'
        });
     });

// For Confirm password

       $('#conpwd').mouseover(()=>{
        $('#conpwd').animate({
          width:'330px'
        });
     });

       $('#conpwd').mouseout(()=>{
        $('#conpwd').animate({
          width:'300px'
        });
     });
     
 // For date of birth also

 $('#dob').mouseover(()=>{
        $('#dob').animate({
          width:'330px'
        });
     });

       $('#dob').mouseout(()=>{
        $('#dob').animate({
          width:'300px'
        });
});
     

  /////////////////////////////////////      

      $('#submit').click((event)=>{
        let fnames=$('#name1').val();
        let lnames=$('#name2').val();
        let password=$('#pwd').val();
        let conpwd=$('#conpwd').val();
        let email=$('#email').val();
        let phn=$('#phn').val();
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let validate=regex.test(email);

        if(fnames=="")
        {
          event.preventDefault();
          $('#fname').html('<p>First Name cannot be blank</p>');
          $('#name1').focus(); 
          $('#name1').keypress(()=>{
          $('#fname').text(''); 
          });
        }
        else if(lnames=="")
        {
          event.preventDefault();
          $('#lname').html('<p>Last Name cannot be blank</p>');
          $('#name2').focus();
          $('#name2').keypress(()=>{
          $('#lname').text(''); 
          }); 
        }

        else if(email=='')
        {
          event.preventDefault();
          $('#mail').html('<p> Email cannot be blank</p>');
          $('#email').focus();
          $('#email').keypress(()=>{
            $('#mail').text('');

          });
        }

         //Email validation    
      else if(!validate)
        {
          event.preventDefault();
          $('#mail').html('<p>Please provide a validate email id</p>');
          $('#email').focus();
          $('#email').keypress(()=>{
            $('#mail').text('');

          });
        }


        else if(phn=='')
        {
          event.preventDefault();
          $('#phns').html('<p> Phone number cannot be blank</p>');
          $('#phn').focus();
          $('#phn').keypress(()=>{
            $('#phns').text('');

          });
        }

        // Phone number validation 
   
   else if((phn.length)<10)
        {
           event.preventDefault();
          $('#phns').html('<p>Phone number cannot be less than 10 digit</p>');
          $('#phn').focus();
          $('#phn').keypress(()=>{
            $('#phns').text(''); 
           });
 
        }   

     else if((phn.length)>10)
        {
           event.preventDefault();
          $('#phns').html('<p>Phone number cannot greater than 10 digit</p>');
          $('#phn').focus();
          $('#phn').keypress(()=>{
            $('#phns').text(''); 
           });
 
        }        

        else if(password=="")
        {
            event.preventDefault();
           $('#passwords').html('<p>Please give a password</p>');
           $('#pwd').focus(); 
           $('#pwd').keypress(()=>{
           $('#passwords').text(''); 
           });

        }
        
       else if((password.length)<8)
        {
           event.preventDefault();
           $('#passwords').html('<p>Password must be of atleast 8 characters</p>');
           $('#pwd').focus(); 
           $('#pwd').keypress(()=>{
           $('#passwords').text(''); 
           });
 
        }


          
         else if(conpwd=='')
        {
          event.preventDefault();
          $('#conpwds').html('<p> Confirm password cannot be blank</p>');
          $('#conpwd').focus();
          $('#conpwd').keypress(()=>{
            $('#conpwds').text('');

          });
        }
      

  // Pass & confpass validateion
         
          else if(password!=conpwd)
        {
          event.preventDefault();
          $('#conpwds').html('<p>Password and Confirm password must be same</p>');
          $('#conpwd').focus();
          $('#conpwd').keypress(()=>{
            $('#conpwds').text('');

          });
        }

   

});

      $('#pwd').keypress(()=>
          {
            $('#passwords').html('<p>Password must contain atleast one uppercase, one lower case and one special character');
            /*$('#pwd').keypress(()=>{
            $('#passwords').text(''); 
           });*/
          });
    });