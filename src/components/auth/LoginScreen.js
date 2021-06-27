import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        email: 'pepe@pepe.es',
        password: '123456'
    }); 

    const {email, password}= formLoginValues;


    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(formLoginValues);

    }

    return (
        <div className="container vh-100 ">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-8 ">
                    <div className="card shadow">
                        {/* <h3 className="card-header">Login</h3> */}
                        <div className="card-body">
                            <form onSubmit= { handleLogin } >
                                <div className="form-group">
                                    <label >Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email"
                                        value= {email}
                                        onChange={ handleLoginInputChange }
                                    />
                                    
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={ handleLoginInputChange }
                                        />

                                </div>
                                <div className="form-group form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" >Recuérdame</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                                <Link to="/register"
                                    className="form-text text-muted text-center">
                                        Registrarse
                                </Link>
                                    
                               

                                
                            </form>
                        </div>
                    </div>
                </div>

               
            </div>
            
        </div>
    )
}
