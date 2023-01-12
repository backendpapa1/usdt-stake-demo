import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [user,setUser] = useState('');
    const [password,setpassword] = useState('')
    const navigate = useNavigate();

    console.log('hi')
    useEffect(() => {
        if(localStorage.getItem('user') == 'user'){
            navigate('/stake')
        }else{
            console.log('cool')
        }
    },[])
    return (
        <div className={'flex d-flex flex-col items-center justify-center h-screen w-screen '} style={{padding:'5%'}}>
            <input onChange={(e)=> {setUser(e.target.value)} } value={user} type="text" placeholder={'username'} className={'h-4/4 p-2 border border-black outline-none'} />
            <br/>
            <input onChange={(e)=> {setpassword(e.target.value)} } value={password} type="password" placeholder={'password'} className={'h-4/4 p-2 border border-black outline-none'} />
                <br/>
            <button onClick={() => {
                if(password == '12345' && user == 'user' ){
                    localStorage.setItem('user',user);
                    localStorage.setItem('password',password);
                    setTimeout(()=> {
                        navigate('/stake')
                    },2000)
                }
            }} className={'h-4/4 p-2 pl-20 pr-20 bg-black text-white border border-black outline-none'}>
                Login
            </button>
        </div>
    )
}

export default Login;
