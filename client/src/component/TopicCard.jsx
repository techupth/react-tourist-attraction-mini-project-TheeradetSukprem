export function TopicCard(props) {
    if (props.description || props.description.length > 100) {
      var DescriptionNotOverLength100 = props.description.substring(0, 100);
    } else {
      var DescriptionNotOverLength100 = '';
    }
  
    return (
        <div className="flex justify-center items-center flex-row  w-auto h-auto p-5">
        <img src={props.photo} alt="" className="border-2 border-red-500 w-24 h-24 " /> 
        <ul>
          <li><h1 className="font-medium">{props.topicName}</h1></li>
          <li><p>{DescriptionNotOverLength100}</p></li>
          <li><a href={props.url}>อ่านต่อ</a></li>   
          <li> หมวด :
            {props.tags.map((tag, eid) => ( 
              <span key={eid} className="" > {tag} </span> 
            ))}
          </li>
          {/* <li>
            {props.photos.map((photo, eid) => (
             <span img={eid}>{photo}</span>
            ))}
          </li> */  } 
        </ul>
      </div>
    );
  }
  