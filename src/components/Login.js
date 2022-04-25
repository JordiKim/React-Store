import React from 'react';

class Login extends React.Component {
    handleClick(event){
        event.preventDefault();
        alert('Clicked');
    }
    render() {
        // return <p>Login Component</p>; // 在js寫html的寫法稱為JSX，需要使用Babel轉碼器
        return (
            <div className="login-wrapper">
                <a href="/login" className="button" onClick={this.handleClick}>Click Me</a>
                <form className="box login-box">
                    <div className="field"> 
                        <label htmlFor="" className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field"> 
                        <label htmlFor="" className="label">PassWord</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="PassWord"/>
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;