

let productList;
if(localStorage.getItem('productData')== null)
{
 productList=[];
 addProductForm();
}
else
{
 productList=JSON.parse(localStorage.getItem('productData'));
 addProductForm();
 displayProducts();
}

function addProduct()
{
    let productName = document.getElementById('productNameInp').value;
    let productPrice = document.getElementById('productPriceInp').value;
    let productCategory = document.getElementById('productCatInp').value;
    let productDesc = document.getElementById('productDescInp').value;
    productName=productName.replace(" ","##");
    productDesc=productDesc.replace(" ","##");
        let product={
            name:productName,
            price:productPrice,
            category:productCategory,
            desc:productDesc
        }
        productList.push(product);
        localStorage.setItem('productData',JSON.stringify(productList));
        clearForm();
        displayProducts();
    
 
}
function displayProducts()
{
    let temp='';
    for(let i =0;i<productList.length;i++)
    {
        temp+=`
        <div class="col-md-3"  >
        <div class="productt">
                       
         <img src="./images/mofasa.jpg" class="img-fluid" >
        <h2>`+productList[i].name+`<span class="badge badge-primary">`+productList[i].category+`</span></h2>
       <p>`+productList[i].desc+`</p>
       <div class="price"><h4>`+productList[i].price+`</h4></div>
       <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete </button>
       <button class="btn btn-warning" onclick="updateForm(`+i+`)">update </button>
       </div>
       </div>`;
    }
    document.getElementById('product').innerHTML=temp;
}
function search(item)
{
    let temp ='';
    let Name=/^[a-z]|\d?[a-zA-Z0-9]?[a-zA-Z0-9\s&@.]+$/;
    if(Name.test(item)==true)
    {
    for(var i=0;i<productList.length;i++)
    {
        if(productList[i].name.includes(item.toLowerCase()))
        {
            temp+=`
        <div class="col-md-3"  >
        <div class="productt">
                       
         <img src="./images/mofasa.jpg" class="img-fluid" >
        <h2>`+productList[i].name+`<span class="badge badge-primary">`+productList[i].category+`</span></h2>
       <p>`+productList[i].desc+`</p>
       <div class="price"><h4>`+productList[i].price+`</h4></div>
       <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete </button>
       <button class="btn btn-warning" onclick="updateForm(`+i+`)">update </button>
       </div>
       </div>`;
        }
    }
    document.getElementById('product').innerHTML=temp;}
    else
    {
        displayProducts(); 
    }
}
function deleteProduct(index)
{
    var deleted =productList.splice(index,1);
    localStorage.setItem('productData',JSON.stringify(productList));
    displayProducts();
}
function clearForm()
{
    document.getElementById('productNameInp').value='';
    document.getElementById('productPriceInp').value='';
    document.getElementById('productCatInp').value='';
    document.getElementById('productDescInp').value='';
}
function updateForm(index)
{
    
    let temp=`
    <div class="col-md-12">
    <div class="product">
        <div class="form-group">
            <label >Product Name</label>
            <input class="form-control" onkeyup="validateName(this.value)" type="text" value="`+productList[index].name+`"  id="productNameInp">
        </div>
        <div class="form-group">
            <select class="custom-select"  id="productCatInp" aria-label="Example select with button addon">
                <option selected value="`+productList[index].category+`">`+productList[index].category+`</option>
                <option value="mobile">mobile</option>
                <option value="TV">TV</option>
                <option value="other">other</option>
              </select>
        </div>
        <div class="form-group">
            <label >Product Price</label>
            <input class="form-control" onkeyup="validatePrice(this.value)" value="`+productList[index].price+`" type="text"  id="productPriceInp">
        </div>
        <div class="form-group">
            <label >Product Desc</label>
            <textarea class="form-control" onkeyup="validateDesc(this.value)"   id="productDescInp">`+productList[index].desc+`</textarea>
        </div>
        <button id="addbtn" onclick="update(`+index+`)" class="btn btn-outline-primary">update Product</button>
    </div>
</div>`;
    document.getElementById('productForm').innerHTML=temp;

}
function update(index)
{
    let productName = document.getElementById('productNameInp').value;
    let productPrice = document.getElementById('productPriceInp').value;
    let productCategory = document.getElementById('productCatInp').value;
    let productDesc = document.getElementById('productDescInp').value;

    productList[index].name= productName;
    productList[index].price=productPrice;
    productList[index].category=productCategory;
    productList[index].desc=productDesc;
    localStorage.setItem('productData',JSON.stringify(productList));
    addProductForm();
}
function addProductForm()
{
    let temp=` <div class="col-md-12">
    <div class="product">
        <div class="form-group">
            <label >Product Name</label>
            <input onkeyup="validateName(this.value)" class="form-control" type="text"  id="productNameInp">
        </div>
        <div class="form-group">
        <label>Product Desc</label>
            <select class="custom-select" id="productCatInp" aria-label="Example select with button addon">
           
                <option value="mobile">mobile</option>
                <option value="TV">TV</option>
                <option value="other">other</option>
              </select>
        </div>
        <div class="form-group">
            <label >Product Price</label>
            <input class="form-control" type="text" onkeyup="validatePrice(this.value)"  id="productPriceInp">
        </div>
        <div class="form-group">
            <label >Product Desc</label>
            <textarea class="form-control" onkeyup="validateDesc(this.value)"   id="productDescInp"></textarea>
        </div>
        <button onclick="addProduct()" id="addbtn" class="btn btn-outline-primary">Add Product</button>
    </div>
</div>`;
    document.getElementById('productForm').innerHTML=temp;
    displayProducts();
}

function validateName(name)
{
    
    let Name=/^[a-z]|\d?[a-zA-Z0-9]?[a-zA-Z0-9\s&@.]+$/;
    if(Name.test(name)!=true)
    {
        document.getElementById('addbtn').disabled='true';
        
    }
    else
    {
        document.getElementById('addbtn').removeAttribute('disabled');   
    }
  

}
function validatePrice(price)
{
    let Price=/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
    
    if(Price.test(price)!=true)
    {
        document.getElementById('addbtn').disabled='true';   
    }
    else
    {
        document.getElementById('addbtn').removeAttribute('disabled');   
    }
}
function validateDesc(desc)
{
    
    let Desc=/^[a-z]|\d?[a-zA-Z0-9]?[a-zA-Z0-9\s&@.]+$/;
    if(Desc.test(desc)!=true)
    {
        document.getElementById('addbtn').disabled='true';
       
    }
    else
    {
        document.getElementById('addbtn').removeAttribute('disabled');   
    }
}