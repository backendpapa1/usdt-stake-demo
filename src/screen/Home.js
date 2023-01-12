
import logo from '../assets/logo.svg'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect, useState} from "react";
import { useRanger } from "react-ranger";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [roi,setRoi] = useState(0);
    const [stake, setStake] = useState(0);
    const [value,setValue] = useState(0);
    const navigate = useNavigate();
    console.log('hi')
    useEffect(() => {
        if(localStorage.getItem('user') == 'user'){
            console.log('cool')
        }else{
            navigate('/')
        }
    },[])

    const marks = [
        {
            value: 30,
            label: '30',
        },
        {
            value: 90,
            label: '90',
        },
        {
            value: 180,
            label: '180',
        },
        {
            value: 365,
            label: '365 Days',
        },
    ];

    function valuetext(value) {
        console.log(value,'value');
        setValue(value);
        if(value > 180){
            // alert('hello')
            setRoi(((57/100) * stake));
            // setRoi(365);
        }
        if(value <= 180  ){
            setRoi(((27/100) * stake));

        }
        if(value <= 90){
            setRoi(((13/100) * stake));
            // setRoi(90);
        }
        if(value <= 30){
            setRoi(((4/100) * stake));
            // setRoi(30);
        }

    }
    const handleChange = (event) => {
        const value = event.target.value;
        setStake(value);
    };


    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }
    return (
        <div style={{padding:'5%'}} className={'flex d-flex flex-col justify-center h-screen w-screen '}>
            <div className={'flex d-flex flex-row justify-end  w-full '}>
                <button className={'bg-blue-500 p-3 pr-5 pl-5 font-semibold text-white rounded'} >Connect</button>
            </div>

            <div className={'flex d-flex flex-row justify-center  w-full '}>
                <img className={'w-1/4'} src={logo} />
            </div>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <p className={'text-center'}>Stake your USDT for: {stake}: {value} </p>
            </div>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <input onChange={handleChange} value={stake} type="number" placeholder={'1000'} className={'h-4/4 p-2 border border-black outline-none'} />
            </div>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <Box width={300}>

                    <Slider step={10} min={30} max={365}  getAriaValueText={valuetext}
                              marks={marks} defaultValue={0} aria-label="Default"  />
                </Box>
            </div>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <p>Profit is: ${roi.toFixed(2)}</p>

            </div>
            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>

                <p>Total receive: ${parseInt(roi)+ parseInt(stake)}</p>
            </div>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <button onClick={() => {
                    if(stake <=0){
                        alert('You havent staked yet')
                    }else{
                        alert('Staked! congratulations')
                    }

                }} className={'bg-blue-500 p-3 pr-5 pl-5 font-semibold text-white rounded'} >Stake</button>
            </div>
                <br/>
            <br/>
            <br/>

            <div className={'flex d-flex flex-row justify-center'} style={{marginTop:'2%'}}>
                <button onClick={() => {
                    console.log('hello')
                    localStorage.setItem('user',null);
                    localStorage.setItem('password',null);
                    setTimeout(() => {
                        navigate('/');
                    },2000);
                }} className={'bg-black p-3 pr-5 pl-5 font-semibold text-white rounded'} >Logout</button>
            </div>


        </div>
    )
}
export default Home;
