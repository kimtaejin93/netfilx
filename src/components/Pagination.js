import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';

const Pagination = () => {
    let pageNum=parseInt(useSelector(state=>state.movie.pageNum));
    let page=[];
    if(pageNum<6){  
        for(let i=1;i<11;i++){
        
        page.push(i);
        
        
    }
}
else{
    for(let i=(pageNum-5);i<pageNum+5;i++){
        
        page.push(i);
        
        
    }
}
  
    const dispatch=useDispatch();




    const pageClick=(e)=>{
        
        let num=e.target.innerText
        console.log(e.target.innerText);
        window.scrollTo(0,0);
        dispatch({
            type:"PageClicked",
            payload:{num:num}
        })
        
    }
  return (
    <div className='pagination'>
        {page.map((page)=><Button variant="danger" onClick={(e)=>pageClick(e)}>{page}</Button>)}
    </div>
  )
}

export default Pagination