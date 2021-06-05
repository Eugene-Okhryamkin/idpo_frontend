import React, {useEffect, useState} from "react";

const Login = () => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const auth = async (...data) => {
        const reqData = {
            username: data.login,
            password: data.password
        }

        await fetch("http://194.67.116.27:8080/api/auth/login", {
            method: "POST",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "POST",
            body: JSON.stringify(reqData)
        })
            .then(res => localStorage.setItem("TOKEN", res.json()))
    }

    const onBtnSubmit = e => {
        e.preventDefault();
        auth(login, password);
    }

    const onHandleLoginChange = e => setLogin(e.currentTarget);
    const onHandlePasswordChange = e => setPassword(e.currentTarget);

    const validate = () => {
        if(login && password) {
            return true;
        }

        return false;
    }

    const getAndSaveToken = async () => {
       await fetch("http://194.67.116.27:8080/api/auth/login")
            .then(res => localStorage.setItem("token", res.json()))
    }

    useEffect(() => {
        getAndSaveToken();
    }, [])

    return (
        <div className="container col-lg-5 mx-auto p-5 mt-5"
             style={{background: "#eee", borderRadius: "1em", boxShadow: "0 0 15px rgba(0,0,0,0.15)"}}>
            <h2 className="text-uppercase text-center my-4">account login</h2>

            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={onHandleLoginChange}/>
                <label htmlFor="name" className="form__label">Login</label>
            </div>

            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Password" name="password" id='password'
                       required onChange={onHandlePasswordChange}/>
                <label htmlFor="password" className="form__label">Password</label>
            </div>

            <button className="log-in-btn d-block mx-auto p-2 mt-5" disabled={!validate()} onClick={onBtnSubmit}>log in</button>
        </div>
    )
};

export default Login;