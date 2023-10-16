import React, {useState} from "react";
import card_data from "../data/card_data";

function Card(props) {

  return(
    <>
    {card_data.map((cur,id) => {
      
      console.log(cur.total_amt);
      console.log("Hii");
    
      let disc_amt1 = cur.total_amt - ((cur.total_amt * cur.off_disc) / 100);
      let disc_amt2 = disc_amt1-(disc_amt1*cur.ext_disc)/100;
    
      const [extDis, setExtDis] = useState(disc_amt1);
      const [opacity, setOpacity] = useState('opacity-100');
    
      let inc = 0;
    
      let ext_discFun = () =>
      {
        if(inc == 0)
        {
          inc = 1;
        setOpacity('opacity-50')
        setExtDis(disc_amt2);
        }
        else
        {
          inc = 0;
        setOpacity('opacity-100')
        setExtDis(disc_amt1);
        }
      }
    
    
      // Liked
      const [first, setfirst] = useState( '🖤');
      let count = 0;
    
      let like = () => 
      {
        // if(count != 1)
        // {
        //   count = 1;
        //   console.log(count);
        //   setfirst('❤️');
        // }
        // else{
        //   count = 0;
        //   console.log(count);
        //  setfirst('🖤');
        // }
        setfirst(prev => prev ==='🖤' ?  '❤️' : '🖤')
      }
    
      // // Select in colour
      // const [itemColor,setItemColor] = useState();
    
      return (
        <>
              <div
                className='h-auto w-[20rem] shadow-lg shadow-gray-700 rounded-lg relative mx-auto grid grid_tem' key={id}
              >
                <div className=' absolute left-4 top-2 rounded-full shadow-sm shadow-gray-500 px-[0.4rem] py-[0.8rem] active:scale-90 bg-red-500 text-white font-bold'>
                  -{cur.off_disc}%
                </div>
                <div className=' absolute right-4 top-2 rounded-full shadow-sm shadow-gray-500 px-[0.30rem] py-1 cursor-pointer active:scale-90 bg-white'>
                  <span className="" onClick={like}>{first}</span>
                </div>
                <div className='rounded-lg overflow-hidden'>
                  <img src={cur.imgs_src[0]} className='w-100 h-auto ' alt='' />
                </div>
                <div className='p-4'>
                  <div className='h-auto grid grid-cols-2 justify-between'>
                    <h2 className=' text-xl font-bold'>{cur.item_name} </h2>
                    <div className='text-right'>
                      <h2 className='text-xl font-bold text-red-500'>{extDis} Rs</h2>
                      <p className='line-through text-gray-600'>
                        {cur.total_amt} Rs
                      </p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 justify-between my-2'>
                    <div className='flex flex-row gap-2'>
                      <div className='px-[10px] h-[20px] my-auto cursor-pointer shadow-md shadow-gray-500 bg-red-600 rounded-full'></div>
                      <div className='px-[10px] h-[20px] my-auto cursor-pointer shadow-md shadow-gray-500 bg-blue-800 rounded-full'></div>
                      <div className='px-[10px] h-[20px] my-auto cursor-pointer shadow-md shadow-gray-500 bg-white rounded-full'></div>
                    </div>
                    <div className='text-right'>⭐ {cur.rate}</div>
                  </div>
                  <p className=''>{cur.item_name}</p>
                  <div className={`active:scale-90 grid grid-cols-2 justify-between shadow-md shadow-gray-500 rounded-3xl w-[90%] mx-auto my-5 cursor-pointer ${opacity}`} onClick={ext_discFun}>
                    <p className='p-2 text-center text-md font-bold'>
                      Fest_Discount
                    </p>
                    <p className='bg-red-600 p-2 text-center rounded-3xl text-white '>
                      {cur.ext_disc}% Off
                    </p>
                  </div>
                  <button className='bg-red-600 w-[100%] mt-auto text-lg font-semibold p-2 text-center text-white active:scale-90'>
                    BUY NOW
                  </button>
                </div>
              </div>
        </>
      );
    })}
    </>
  )

  
}

export default Card;
