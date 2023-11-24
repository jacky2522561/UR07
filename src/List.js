
const List = ({value}) =>{

    const renderList = value.map((item,index)=>{
        return(
            <div key={index}>
                {item}
            </div>
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )
}

export default List;