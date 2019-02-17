# fixmyship
Points to note:
  1. Always maintain a proper alignment of your code, its easy to understand.
  2. Don't keep the JS or CSS code within the same html file. put the JS code in js folder and CSS code in css folder.
  3. While applying styling on the elements, never apply style on the whole element,
      like- 
        input{
         style: xyz;
         }

      There maybe the same element in other page and it will apply to that to. So, if you are applying style to an element always     attach it with a unique ID or Class Name that is not present in the css file.
