
const Component1 = () => {

  function number(count){
    return Math.floor(Math.random() * count);
  }

  const randomNumber = number(2);

  if(randomNumber === 1){
   throw new Error("Im not working");
  }

  return (
    <div>Component1</div>
  )
}

export default Component1;