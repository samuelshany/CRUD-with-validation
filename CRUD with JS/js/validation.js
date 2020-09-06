function validateProduct(name,price,desc)
{
    if((validateName(name) == true) &&(validatePrice(price) == true )&&(validateDesc(desc)== true))
    {
        document.getElementById('addbtn').removeAttribute('disabled');
    }
    else{
        document.getElementById('addbtn').disabled='true';
    }
   
    
    
}
function validateName(name)
{
    console.log(name);
    return true;

}
function validatePrice(price)
{
    console.log(price);
    return true;
}
function validateDesc(desc)
{
    console.log(desc);
    return true;
}
export {validateProduct};