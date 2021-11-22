import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchNumbers, fetchAns } from '../../redux/formReducer/form.actions';
import { ADD_KEY } from '../../redux/formReducer/form.reducer';
import './form.css'

const Form = () => {
    let dispatch = useDispatch()
    
    let [number, setNumber] = useState({
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
        ans1: '',
        ans2: '',
        ans3: ''
    })

    // handle change
    let handleChange = (event) =>{
        setNumber({
            ...number,
            [event.target.name] : event.target.value
        })
    }

    // handle submit
    let handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(fetchNumbers(number))
        dispatch(fetchAns(number))

    }

    // view add
    let viewAdd = useSelector((state) =>{
        return state[ADD_KEY]

    })

    // handleReset
    let handleReset = () =>{
      setNumber({
          ...number,
          num1: '',
          num2: '',
          num3: '',
          num4: '',
          num5: '',
          num6: '',
          ans1: '',
          ans2: '',
          ans3: ''
          
      })
      this.state = {
        
      }
    }
     

    return (           
                <React.Fragment>
                    {/* <pre>{JSON.stringify(number)}</pre> */}
                    <div className='tab-body'>
<form onSubmit={handleSubmit} className='form-inline d-flex justify-content-end '>
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">produit 1</th>
      <th scope="col">produit 2</th>
      <th scope="col">produit 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">prix</th>
      <td for="num1">
          <input
      name='num1'
      value={number.num1}
      onChange={handleChange}
      type='number'
      placeholder='0'
      //  id='num1'
         /></td>
      <td for="num3">
      <input
      name='num3'
      value={number.num3}
      onChange={handleChange}
      type='number'
      placeholder='0'
      //  id='num3'
         />
      </td>
      <td for="num5">
      <input
      name='num5'
      value={number.num5}
      onChange={handleChange}
      type='number'
      placeholder='0'
      //  id='num5'
         />
      </td>
    </tr>
    <tr>
      <th scope="row">quantité</th>
      <td for="num2">
           <input
          name='num2'
          value={number.num2}
          onChange={handleChange}
          type='number'
          placeholder='0'
        //  id='num2'
         />
      </td>
      <td for="num4">
      <input
          name='num4'
          value={number.num4}
          onChange={handleChange}
          type='number'
          placeholder='0'
        //  id='num4'
         />
      </td>
      <td for="num6">
      <input
          name='num6'
          value={number.num6}
          onChange={handleChange}
          type='number'
          placeholder='0'
        //  id='num6'
         />
      </td>
    </tr>
    <tr>
      <th scope="row">CA</th>
      <td for="ans1"> 
      <input
        name='ans1'
        value={viewAdd.ans1}
        onChange={handleChange}
        type='number'      
         //  id="disabledInput" 
         //  id='ans1'
         disabled
         /></td>
         <td for="ans2"> 
      <input
        name='ans2'
        value={viewAdd.ans2}
        onChange={handleChange}
        type='number'      
         //  id="disabledInput" 
         //  id='ans2'
         disabled
         /></td>
         <td for="ans3"> 
      <input
        name='ans3'
        value={viewAdd.ans3}
        onChange={handleChange}
        type='number'      
         //  id="disabledInput" 
         //  id='ans3'
         disabled
         /></td>
      
    </tr>
  </tbody>
</table>
<div className='mb-2'>
 <div class="btnn">
<button 
 className='btn btn-secondary btn-sm mr-4 font-weight-bold'
 onClick={handleReset}
>RESET</button>
                                                                               
  <button 
 type="submit" 
 class="btn btn-sm btn-success font-weight-bold"
 >CALCUL
  </button>                                

           </div>                            
</div>
</form>
</div>
                </React.Fragment>           
        
    )
}

export default Form
