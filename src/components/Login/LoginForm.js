import Input from "../UI/Input";
import "./LoginForm.css"


const LoginForm = (props) => {
    return (
        <form>
            <div className="login__elements">
                <Input className="login__element"
                    labelText="Username"
                    input={{
                        id: "username",
                        type: "text"
                    }}

                />
                <Input className="login__element"
                    labelText="Password"
                    input={{
                        id: "password",
                        type: "password"
                    }}
                />
            </div>
            <div className="login__actions">
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;
