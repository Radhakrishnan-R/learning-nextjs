

const Docs = ({params: {slug}}) => {

  if(slug?.length > 1){
    return <h1>Youre are viewing details of {slug[1]} from {slug[0]}</h1>
  }
  if(slug?.length < 2){
    return <h1>Youre are viewing details {slug[0]}</h1>
  }

  return (

    <h1>Im displayed when page.jsx macthes to the url that has docs as a segment in its path</h1>
  )
}

export default Docs;