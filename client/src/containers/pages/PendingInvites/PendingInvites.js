import React, {useEffect,useState} from 'react'
import "../../../bootstrap/css/bootstrap.min.css";
import InviteOutput from './InviteOutput';
import axios from 'axios';


const PendingInvites = () => {

  const [receivedInvites, setReceivedInvites] = useState([]);

  const email = JSON.parse(localStorage.getItem('currentUser')).email;

  //useEffect prevents this GET request from firing each render which can cause memory leaks if left unchecked
  useEffect(() => {
    axios.get("http://localhost:4000/meetup_invites/pending/"+email)
      .then((result) => {
          //set the search array within the state to contain the JSON result for displaying in the other components
          setReceivedInvites(result.data);
        },
        // NOTE: it's important to handle errors here
        // instead of a catch() block so that we don't accidentally catch
        // exceptions from bugs within the component
        (error) => {
          //log any errorts to the console
          console.log(error);
        }
      )
  },[])

    return (
      <div>
      <div class="row">
        <div class="col-12 titlebar">
            <h1 class="greeting">Pending Invites</h1>
            <InviteOutput array={receivedInvites} />
          </div>
        </div>
      </div>

    )
}

export default PendingInvites
