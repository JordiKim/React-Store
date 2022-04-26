import React from 'react';
import { useNavigate } from 'react-router-dom';
class Login extends React.Component {
    // function handleClick() {  
    //     navigate('/home');  
    // };  

    handleSubmit = event => {
        let navigate = useNavigate();

        //  1.阻止默認事件行為
        event.preventDefault();
        //  2.獲取表單數據

        //  3.處理登入邏輯

        //  4.跳轉首頁視圖
        // this.props.history.push('/');
        // this.navigate('/login');  
        navigate('/', { replace: true });
    }

    // MyButton() {  
    //     let navigate = useNavigate();  
    //     function handleClick() {  
    //         navigate('/home');  
    //     };  
    //     return <button onClick={handleClick}>Submit</button>;  
    // }; 

    render() {
        // return <p>Login Component</p>; // 在js寫html的寫法稱為JSX，需要使用Babel轉碼器
        return (
            <div className="login-wrapper">
                <form className="box login-box" onSubmit={this.handleSubmit}>
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