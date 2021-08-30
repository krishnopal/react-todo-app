import React,{useState,useEffect} from 'react';
import logo from '../logo.svg';

// get data to localStorage
const getLocalStorage =()=>{
    let list = localStorage.getItem('shuvo');
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('shuvo'));
    }else{
        return [];
    }
}

const From = () => {

    const[inputdata,setInputdata]=useState('');
    const[item,setItem]=useState(getLocalStorage());

    // submit data
    const submitData =()=>{
        if(!inputdata){

        }else{
            setItem([...item,inputdata]);
            setInputdata('');
        }
    }
    // form reloading remove
    const SubmitonData = (e) =>{
        e.preventDefault();
    }
    // delete item
    const deleteItem = (id) =>{
        const dataMatchItem = item.filter((ele, i)=>{
            return i !== id;
        })
        setItem(dataMatchItem);
    }
    // remove all data 
    const removeAllData = ()=>{
        setItem([]);
    }
    // add data to localStorage 
    useEffect(()=>{
        localStorage.setItem('shuvo', JSON.stringify(item));
    },[item]);
    return (
        <>
            <div className='row mx-2'>
                <div className='col-lg-3 col-md-3 col-sm-12 '></div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className='bg-primary rounded mb-2 px-3 pb-2'>
                        <div className='text-center'>
                            <img src={logo} style={{ width: '80px', height: '80px' }} />
                            <h3 className='text-bold text-white'>Todo App in React Js </h3>
                        </div>
                        <form className='' onSubmit={SubmitonData}>
                            <div className="mb-2 px-3">
                                <label id='name' className='text-white'>Name</label>
                                <input 
                                value={inputdata}
                                onChange={(e)=>{setInputdata(e.target.value)}}
                                type='text' 
                                id='name' 
                                placeholder="Enter Your Name" 
                                className="form-control" />
                            </div>
                            <div className='text-center mb-3'>
                                <input type='submit' value='Submit' className="btn btn-info" onClick={submitData}/>
                            </div>
                        </form>
                    </div>
                    <div>
                        <table class="table px-2">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                item.map((ele, i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{ele}</td>
                                            <td><button className='btn btn-danger py-1 px-3' onClick={()=>{deleteItem(i)}}>Delete</button></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-2 text-center'>
                        <button className='btn btn-secondary' onClick={removeAllData}>Remove All Data</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'></div>
            </div>

        </>
    )
}
export default From;