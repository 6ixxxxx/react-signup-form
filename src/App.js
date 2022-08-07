import React from "react"
import "./App.css"

export default function App() {
    
    
    const [holdValues, setValues] = React.useState({
        email:"", password:"", confirmPass:"", okayToEmail: false
    })
    function switchUp(event) {
    const {name, value, type, checked} = event.target
        setValues(prevValues =>{
        return{...prevValues, 
        [name]: type === "checkbox" ? checked : value}    
        }
      )
    }
    
    function handleSubmit(event) {
    const {password, confirmPass, okayToEmail} = holdValues
        event.preventDefault()
        let gg = "Input password"
        password && confirmPass ? 
        (password === confirmPass ? gg = "Successfully signed up" : gg = "passwords do not match") : gg = "Input password"
        console.log(gg)
        
        (okayToEmail ? console.log("Thanks for signing up for our newsletter!"): "Not P")
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={switchUp}
                    name="email"
                    className="form--input"
                    value={holdValues.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={switchUp}
                    name="password"
                    className="form--input"
                    value={holdValues.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={switchUp}
                    name="confirmPass"
                    className="form--input"
                    value={holdValues.confirmPass}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={switchUp}
                        name="okayToEmail"
                        checked={holdValues.okayToEmail}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
