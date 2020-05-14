/*-Form Validation-*/
    window.onload = function () {
    
    // show / hide ProductID if Product info reason is selected from dropdown
    var formReason = document.getElementById("reason");
    formReason.addEventListener("change", function(){        
        var productIdFieldset = document.getElementById("product-id-fieldset");
        
        if (formReason.value === "product-info"){
            productIdFieldset.className = "";
        } else {
            productIdFieldset.className = "hidden";
        }
    });
    
    // form validation
    var formName = document.getElementById("name");
    formName.addEventListener("blur", function() {
        var hasNumber = /\d/;
        if (formName.value.length >= 7 && !hasNumber.test(formName.value)){
            formName.className = "valid-field";
        } else {
            formName.className = "invalid-field";
        }
    })  
    
    
    var formEmail = document.getElementById("email");
    formEmail.addEventListener("blur", function() {
        var isEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        
        if (isEmail.test(formEmail.value)){
            formEmail.className = "valid-field";
        } else {
            formEmail.className = "invalid-field";
        }
    })  
    
    var formProductId = document.getElementById("product-id");
    formProductId.addEventListener("blur", function() {
        var validProductIds = ["CLOY 1111", "CLOY 1112", "CLOY 1113", "CLOY 1114", "CLOY 1115", "CLOY 1116"];
        
        if (validProductIds.includes(formProductId.value)){
            formProductId.className = "valid-field";
        } else {
            formProductId.className = "invalid-field";
        }
    }) 
    
    var formMessage = document.getElementById("message");
    formMessage.addEventListener("blur", function() {
        
        if (formMessage.value.length > 10 && formMessage.value.length < 30 ){
            formMessage.className = "valid-field";
        } else {
            formMessage.className = "invalid-field";
        }
    }) 
};
