USE REACT HOOKS LIBRARY 

=> import useForm from HOOKS
=> const {register,handleSubmit,formState:{errors},reset,trigger}=useForm(); inital decleration
trigger is used to call the validation before clicking on submit fn by calling this function on keyup
register is to catch the error
handleSubmit to handle finale onclick
formstate:{errors} to handle errors
reset : is used to clear all the values in the field best place to use this inside onSubmit function

=> use register method inside input field {...register("Username",{required:"Username is required"})}
=> onSubmit={handleSubmit(functionName,onError)} use this inside form tag
=> const functionName=(data)=>{ console.log(data)}
   const onError=(data)=>{console.log(data)}
=> if it satisfy the registered condition it comes under functionname function incase if it fails it comes under error function
=>