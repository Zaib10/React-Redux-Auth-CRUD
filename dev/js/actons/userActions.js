import Request from 'superagent' ;
import { SubmissionError } from 'redux-form'; 
apiBaseUrl = '/'
if(process.env.NODE_ENV== 'production'){
    apiBaseUrl= 'http://209.250.243.231:1111'
}else{
    apiBaseUrl= 'http://localhost:3333'
}

export function SignUp(data){    
    console.log("signup", data)
    const url = `${apiBaseUrl}/api/signup`
    return Request.post(url).send(data).then((Response=>{
       console.log("data is here:", Response.body)
       return {
           type :"Sign-Up",
           payload: Response.body
       }
       
   })).catch((err)=>{
    throw new  SubmissionError({_error: "Email or Password Incorrect"})
})
}
export function LogIn(data){    
    //console.log(data)
    
    const url = `${apiBaseUrl}"/api/login`
    return Request.post(url).send(data).then((Response=>{
        localStorage.setItem('token', Response.body.token);
        //localStorage.setItem('login', JSON.stringify(Response.body));
       console.log("data is here:", Response.body)
       //return Response;
       return {
           type :"LOG-IN",
           payload: Response.body
       }

       
   })).catch((err)=>{
    throw new  SubmissionError({_error: "Email or Password Incorrect"})
})
}
export function updateUser(data){    
    console.log("that to update", token)
    let token= localStorage.getItem("token")
    const id= data.id

    const url = `${apiBaseUrl}/api/updateUser/${id}`
    return Request.put(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token })
    .send(data).then((Response=>{
        localStorage.setItem('login', JSON.stringify(Response.body));
      console.log("data is here:", Response.body)
       //return Response;
       return {
           type :"Update-User",
           payload: Response.body
       }
       
   }))
   
}


export function getLoggedInUser(){    
    let token= localStorage.getItem("token")
    const url = `${apiBaseUrl}/api/getUserData`
    return Request.get(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token })
    .then((Response=>{
       //console.log("data is here:", Response)
       //return Response;
       return {
           type :"GET-DATA",
           payload: Response.body
       }
       
   }))
}

export function  selectUser(id){
    console.log("id is", id)
    const url = `${apiBaseUrl}/api/userFindById/${id}`
    return Request.get(url).then((Response=>{
       console.log("data is here:", Response.body)
       //return Response;
       return {
           type :"SELECTED-USER",
           payload: Response.body
       }
       
   }))
}
export function LogOut(){
    localStorage.clear();
    return{
        type: "LOG-OUT-USER"
    }
}
export function InitialData(userData){
    return{
        type: "LOAD-LOG-IN",
        payload: userData
    }
}