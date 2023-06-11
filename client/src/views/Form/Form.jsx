import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import validation from "./validation";
import { createPokemon, getTypes } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])


    const [form, setForm] = useState({
        name:"",
        image:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        typeOne:"",
        typeTwo:"",

        })
    const [errors,setErrors] = useState({
        name: "Agrerar información",
        image: "Agrerar información",
        hp: "Agrerar información",
        attack: "Agrerar información",
        defense: "Agrerar información",
        speed: "Agrerar información",
        height: "Agrerar información",
        weight: "Agrerar información",
        typeOne: "Agrerar información",
        typeTwo: "Agrerar información",
    })

    const handleChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;

        setErrors(validation({...form, [prop]: value}))
        setForm({...form, [prop]: value})
    }

    const handleTypeOne = (event) => {
        setForm({ ...form, typeOne: event.target.value })
    }
    
    const handleTypeTwo = (event) => {
        setForm({ ...form, typeTwo: event.target.value })
    }
    const handleSubmit = (event) => {
       event.preventDefault();
        dispatch(createPokemon(form));

    }

    return(
        <div className={style.globalContent}>
            <div className={style.create}>
                <h2>Create Pokemon</h2>
               <img src={form.image} alt="img" />
                
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} value={form.name}/>
               <br />
               <label htmlFor="image">Image URL: </label>
               <input type="url" name="image" onChange={handleChange} value={form.image}/>
               
                <br />
                <label htmlFor="hp">Hp: </label>
                <input type="range" min="1" max="100" name="hp" onChange={handleChange} value={form.hp}/>
                <br />
                <label htmlFor="attack">Attack: </label>
                <input type="range" min="1" max="100" name="attack" onChange={handleChange} value={form.attack}/>
                <br />
                <label htmlFor="defense">Defense: </label>
                <input type="range" min="1" max="100" name="defense" onChange={handleChange} value={form.defense}/>
                <br />
                <label htmlFor="speed">Speed: </label>
                <input type="number" name="speed" onChange={handleChange} value={form.speed}/>
                <br />
                <label htmlFor="height">Height: </label>
                <input type="number" name="height" onChange={handleChange} value={form.height}/>

                <label htmlFor="weight">Weight: </label>
                <input type="number" name="weight" onChange={handleChange} value={form.weight}/>

                <div>
                <label htmlFor="types">Type One:</label>
                <select onChange={handleTypeOne} name='types' >
                <option value="All" >Select</option>
                 { types.map((type) => {
                        return (
                            <option key={type.id} value={type.name} > {type.name} </option>
                        )
                    })} 
                </select>
                </div>

            <div>
                <label> Type Two: </label>
                <select onChange={handleTypeTwo} name='types' >
                <option value="All" >Select</option>
                     { types.map((type) => {
                        return (
                            <option key={type.id} value={type.name} > {type.name} </option>
                        )
                    })} 
                </select>
                <br />
                    {errors.flag === true? <button >Create Pokemon</button> : <button type="submit">Create Pokemon</button>}   

                    </div>
                </form>
                </div>
 <div className={style.validation}>
 <div className={style.title} >
    <h2>📌 Validaciones:</h2>
    <p>- Deberán cumplirse las condiciones de validación para almacenar el nuevo Pokemon
        en la base de datos, de lo contrario, los datos no se guardarán.</p>
 </div>
<ul >
    <li className={errors.name? style.errorName: style.validName} >Name: {errors.name? errors.name : "Información correcta."}</li>
    <li className={errors.image? style.errorImg: style.validImg}>Image: {errors.image? errors.image : "Información correcta."}</li>
    <li className={errors.hp? style.errorHp : style.validHp}>Hp: {errors.hp? errors.hp : "Información correcta."}</li>
    <li className={errors.attack? style.errorAttack: style.validAttack}>Attack: {errors.attack? errors.attack : "Información correcta."}</li>
    <li className={errors.defense? style.errorDefense: style.validDefense}>Defense: {errors.defense? errors.defense : "Información correcta."}</li>
    <li className={errors.speed? style.errorSpeed: style.validSpeed}>Speed: {errors.speed? errors.speed : "Información correcta."}</li>
    <li className={errors.weight? style.errorWeight: style.validWeight}>Weight: {errors.weight? errors.weight : "Información correcta."}</li>
    <li className={errors.height? style.errorHeight: style.validHeight}>Height: {errors.height? errors.height : "Información correcta."}</li>
    <li className={errors.typeOne? style.errorTypes: style.validTypes}>Types: {errors.typeOne? errors.typeOne : "Información correcta."}</li>
</ul>
</div>

</div>
    )    
}

export default Form;