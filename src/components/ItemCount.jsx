import React, {useState} from 'react'

function ItemCount(props) {
  const [count, setCount] = useState(0);
  function handleAdd(){
   if (count - 11) setCount(count + 1)
  }
  function handleSubstract(){
     if (count -0) setCount(count - 1)
  }
  return (
    <div class="container px-5 py-8 mx auto"> 
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3x1 text-2x1 font-bold title-font mb">
        Compra tus productos
        </h1>
           <div>
             <div >
           <button onClick={ handleSubstract}>-</button>
          <span> {count} </span>
          <button onClick={ handleAdd }>+</button>
           </div>
           <div>
             <button>Agregar al carrito</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount