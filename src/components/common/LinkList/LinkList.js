import { Link } from "react-router-dom";

const LinkList=({linkArr=[],containerclass="",linkClass=""})=>{
    return(
        <div className={containerclass}>
            {linkArr.map((el)=>{
                return(
                    <Link to={`/${el.key}`}key={el.key} className={linkClass}>{el.label}</Link>
                )
            })}
        </div>
    )
}

export default LinkList