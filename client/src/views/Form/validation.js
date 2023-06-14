const validation = (form) => {

    let errors = { flag:false };
  
    //Name
    if (!form.name.trim()){
        errors.name = "These characters are required."; 
        errors.flag = true;           
    } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
        errors.name = "This feature must contain only letters.";  
        errors.flag = true;          
    }
//image
    if (!form.image){
        errors.image = "These characters are required."; 
        errors.flag = true;       
    }        
//attack
    if (!form.attack){
        errors.attack = "These characters are required.";
        errors.flag = true;
    }
//defense
    if (!form.defense){
        errors.defense = "These characters are required.";
        errors.flag = true;
    }
//speed
    if (!form.speed){
        errors.speed = "These characters are required.";
        errors.flag = true;
    }
//hp
    if (!form.hp){
        errors.hp = "These characters are required.";
        errors.flag = true;
    }
//weight
    if (!form.weight){
        errors.weight = "These characters are required.";
        errors.flag = true;
    }
//height
    if (!form.height){
        errors.height = "These characters are required.";
        errors.flag = true;
    }

    return errors;
}


export default validation;