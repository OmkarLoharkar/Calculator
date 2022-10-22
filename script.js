console.log("omkar")

let string = ""
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',(e)=>{

        //for is-equal-to button
        if(e.target.innerHTML == "="){
            string = string.replace("÷","/");
            string = string.replace("x","*");
            
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch{
                
                document.querySelector('input').value = "Invalid !";
            }
        }

        
        //for C button
        else if(e.target.innerHTML == "C"){
            string = '';
            document.querySelector('input').value = string;
        }

        //for addition button
        else if(e.target.innerHTML == "+"){
            len = string.length;
            laststr = string.slice(len-1,len);
            
            if (laststr == "-" || laststr == "x"  || laststr == "÷"){
                string = string.slice(0,-1);
                document.querySelector('input').value = string;
            }

            if(laststr != "+"){
                string+="+";
                document.querySelector('input').value = string;
            }
        }

        //for negative button
        else if(e.target.innerHTML == "-"){
            len = string.length;
            laststr = string.slice(len-1,len);
            
            if (laststr == "+" || laststr == "x"  || laststr == "÷"){
                string = string.slice(0,-1);
                document.querySelector('input').value = string;
            }
            if(laststr != "-"){
                string+="-";
                document.querySelector('input').value = string;
            }
        }

        //for multiply button
        else if(e.target.innerHTML == "x"){
            len = string.length;
            laststr = string.slice(len-1,len);
            
            if (laststr == "-" || laststr == "+"  || laststr == "÷"){
                string = string.slice(0,-1);
                document.querySelector('input').value = string;
            }

            if(laststr != "x"){
                string+="x";
                document.querySelector('input').value = string;
            }
        }

        //for division operator
        else if(e.target.innerHTML == "÷"){
            len = string.length;
            laststr = string.slice(len-1,len);
            
            if (laststr == "-" || laststr == "x"  || laststr == "÷"){
                string = string.slice(0,-1);
                document.querySelector('input').value = string;
            }

            if(laststr != "÷"){
                string+="÷";
                document.querySelector('input').value = string;
            }
        }

        //for delete last element
        else if(e.target.innerHTML== "⌫"){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }

        // for % calculation
        else if (e.target.innerHTML == "%"){
            string = string/100;
            document.querySelector('input').value = string;
        }

        //else 
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})