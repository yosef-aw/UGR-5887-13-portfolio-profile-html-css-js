function allLetter(name,num,flag = 's'){

    var letters = /^[A-Za-z]+$/;



    if (flag==='s'){
        if(name.value.match(letters)){

            document.getElementById('error-first-u').innerHTML = '';
            document.getElementById('error-last-u').innerHTML = '';
            
            return true; 
        
            }
        
        else{
    
            if (num === 1){
                document.getElementById('error-first-u').innerHTML = 'Name must have alphabet characters only';
            }
        
            else{
                document.getElementById('error-last-u').innerHTML = 'Name must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }




    else if(flag === 'p'){

        if(name.value.match(letters)){
            document.getElementById('error-comp-name').innerHTML = '';    
            document.getElementById('error-title').innerHTML = '';    
            document.getElementById('error-loc').innerHTML = '';    
            document.getElementById('error-email').innerHTML = '';    
            return true;
        }

        else{
            if (num === 1){
                document.getElementById('error-comp-name').innerHTML = 'Company Name must have alphabet characters only';
            }
        
            else if(num === 2){
                document.getElementById('error-title').innerHTML = 'Title must have alphabet characters only';
            }

            else if(num === 3){
                document.getElementById('error-loc').innerHTML = 'Location must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }




    else{
        if(name.value.match(letters)){
            document.getElementById('error-first').innerHTML = '';
            return true;
        
        }

        else{
            if (num === 1){
                document.getElementById('error-first').innerHTML = 'Name must have alphabet characters only';
            }
        
            else if(num === 2){
                document.getElementById('error-last').innerHTML = 'Name must have alphabet characters only';
            }

            else{
                document.getElementById('error-comp-name').innerHTML = 'Name must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }
}
function ValidateEmail(email,num,flag = 's'){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(flag==='s'){
        if(email.value.match(mailformat)){
        document.getElementById('error-email-u').innerHTML = '';
        document.getElementById('error-email-i').innerHTML = '';

        return true;
        }

        else{

        if(num===1){
            document.getElementById('error-email-u').innerHTML = 'You have entered an invalid email address!';
        }

        else{
            document.getElementById('error-email-i').innerHTML = 'You have entered an invalid email address!';
        }

        email.focus();
        return false;
        }
    }

    else if(flag === 'p'){
        if(email.value.match(mailformat)){
            document.getElementById('error-email').innerHTML = '';    
            return true;
            }
    
        else{
            document.getElementById('error-email').innerHTML = 'You have entered an invalid email address!';    
            email.focus();
            return false;
            }
    }

    else{
        if(email.value.match(mailformat)){
            document.getElementById('error-comp-email').innerHTML = '';    
            return true;
            }
    
        else{
            document.getElementById('error-comp-email').innerHTML = 'You have entered an invalid email address!';    
            email.focus();
            return false;
            }
    }
}


function validateFeedback(){
    console.log("ffffffffffffffffff")

    const fname = document.getElementById('fullname');
    const cemail = document.getElementById('email');
    const comment = document.getElementById('comment');

    if(allLetter(fname,1,'f')  && ValidateEmail(cemail,0,'f')){
        
        if (comment.value.length > 0){
            alert('Feddback successfully sent');
            return true;
        }

        else{
            document.getElementById('error-comment').innerHTML = 'Comment can not be empty';
            return false;
        }

    } 

    else{
        return false;
    }
}