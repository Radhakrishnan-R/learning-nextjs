

const ParallelLayout = ({
    children,
    component1,
    component2,
    component3,
}) => {
  return (
    <>
    <div>{children}</div>
    <div className="flex gap-10 mt-10 text-lg font-medium">
        <div>{component1}</div>
        <div>{component2}</div>
        <div>{component3}</div>
    </div>
    
        
    </>
    
  )
}

export default ParallelLayout;