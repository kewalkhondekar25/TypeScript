import React, { useContext, useState } from 'react'
import { AppContext } from '../05-Context-API/Context';

const Events = () => {
    const context = useContext(AppContext);
    console.log(context);
    
    const [text, setText] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        
    }
  return (
    <section>
        <h3>Events</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={text}
                name="text"
                onChange={(e) => setText(e.target.value)} />
            <input type="email"
                value={email}
                name="email"
                onChange={handleEmail}
                />   
            <button>Submit</button>
        </form>
        <button
        onClick={() => {
          if(context?.theme === "dark"){
            context.setTheme("system")
            return;
          }  
          context?.setTheme("dark");
        }}>{context?.theme}</button>
    </section>
  )
}

export default Events