import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import groupsService from "../../services/groups.service";


function GroupDetailsPage(props) {
  const [group, setGroup] = useState(null);
  const { groupId } = useParams();
  const getGroup = () => {

    groupsService.getGroup(groupId)    
    .then((response) => {
      const oneGroup = response.data;
      setGroup(oneGroup);
    })
    .catch((error) => console.log(error));
};


useEffect(()=> {
  getGroup();
}, [] );

    return (
      <div >
        {group && (
        <>
          <h1>{group.title}</h1>
          <p>{group.startTime}</p>
        </>
      )}
      </div>
    );
  }
  
  export default GroupDetailsPage;