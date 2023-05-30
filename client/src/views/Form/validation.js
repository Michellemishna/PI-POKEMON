const validation = (form) => {

    let errors = { flag: false };
  
    //Name
    if(!form.name.trim()){
        errors.name = "Este campo NO debe estar vacío.";
        errors.flag = true;
    }else if(form.name.length < 2 && form.name.length < 30){
        errors.name = "El nombre debe tener entre 2 y 30 caracteres.";
        errors.flag = true;
    }
  
    //Image
    if(!form.image.trim())  errors.image = "Se recomienda NO dejar vacío este campo."
    else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image))  errors.image = "Debe mantener un formato URL.";
  
    //Hp
    if(!form.hp.length){
        errors.hp = "Se recomienda NO dejar vacío este campo.";
    }else if(form.hp < 0){
        errors.hp = "Hp no puede ser menor de 0.";
        errors.flag = true;
    }

    //Attack
    if(!form.attack.length){
        errors.attack = "Se recomienda NO dejar vacío este campo.";
    }else if(form.attack < 0){
        errors.attack = "Attack no puede ser menor de 0.";
        errors.flag = true;
    }

    //Defense
    if(!form.defense.length){
        errors.defense = "Se recomienda NO dejar vacío este campo.";
    }else if(form.defense < 0){
        errors.defense = "Defense no puede ser menor de 0.";
        errors.flag = true;
    }

    //Speed
   if(!form.speed.length){
        errors.speed = "Se recomienda NO dejar vacío este campo.";
    }else if(form.speed < 0){
        errors.speed = "Speed no puede ser menor de 0.";
        errors.flag = true;
    }

     //Weight
     if(!form.weight.length){
        errors.weight = "Se recomienda NO dejar vacío este campo.";
    }else if(form.weight < 0){
        errors.weight = "Weight no puede ser menor de 0.";
        errors.flag = true;
    }

     //Height
     if(!form.height.length){
        errors.height = "Se recomienda NO dejar vacío este campo.";
    }else if(form.height < 0){
        errors.height = "Height no puede ser menor de 0.";
        errors.flag = true;
}

    //Types
     if(form.typeOne.length === 0 ){
        errors.types = "Debe estar seleccionado al menos UN type.";
         errors.flag = true;
     }
   
    return errors;
  }
  

export default validation;