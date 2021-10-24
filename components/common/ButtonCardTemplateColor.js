import Link from "next/link";


const ButtonCardTemplateColor = (props)=>{
    return <Link href='/stages/2'>
      <a onClick={props.action} className="button-color matchmaking__info-btn">
    Buy it now
  </a>
    </Link>
  
}

export default ButtonCardTemplateColor