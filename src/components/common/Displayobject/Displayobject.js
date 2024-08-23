

const DisplayObjectData=({dataobj={},title=""})=>{
       return(     
    <div>
    <h2>{title}</h2>
    {Object.keys(dataobj).map(attr=>{
        return(
            <div key={attr}>
                <span>{attr}</span>: &nbsp;
                <span> {dataobj[attr]}</span>
            </div>        )
    })}
</div>
)
}

export default DisplayObjectData