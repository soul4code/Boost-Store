// measure - мера измерения (%, $, р)

const Benefit =({measure, num})=>{
    return <div className="checkbox-benefit">+{num}{measure}</div>
}

export default Benefit