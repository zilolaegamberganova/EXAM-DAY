const form=document.querySelector(".form");
const emailInput=document.querySelector(".email-login");
const passwordInput=document.querySelector(".password-login")

API_KEY="2d1d86ae-72cd-4952-a797-fd2af18cff82"
BASE_URL="https://restful-api.dev/"


async function registerFunc(data){
    try{
        const response=await fetch(BASE_URL+"register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "x-api-key":API_KEY,
            },
            body:JSON.stringify(data),
            
        });
        const result=await response.json();
        if(result.token&&response.status===200){
            alert("Successfully");
            localStorage.setItem("user",JSON.stringify(result));
            form.requestFullscreen();
            window.location.href="login.html"
        }
        console.log(result);
        return result;
    }
    catch(error){
        
    }
    
}