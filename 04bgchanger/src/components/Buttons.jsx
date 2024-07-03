

function Buttons({color , textColor="white",onClick}){
    
    return (
        <>
        <button className="outline-none px-4 py-1 
              rounded-lg  shadow-sm"
                      style={{backgroundColor:color, color: textColor}}
                      onClick={onClick}
                      >{color}
                      
                      </button>
        </>
    )
}
export default Buttons;