import React, {useState} from 'react';
import styles from './InviteOutput.module.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';

//NOTE: role and location aren't currently setup within the database.
//Need to update the Schema to include these if you want to displahy them.
//In the meantime, I have used person.email and person.mobile so that data can be displayed in results



const InviteOutput = (props) => {

  const [open, setOpen] = React.useState(false)

  const [selectedInvite, setSelectedInvite] = useState(null);



    const inviteArray = props.array.map((invite, index) => {
      //assign the inviter details to a new variable to make it easier to use
      let inviter = invite.inviterDetails[0];
        return (
          <div class="row pendinginvite" key={index}>
          <div class="col-9">
            {inviter.name} has sent you an invite to catch up!
          </div>
          <div class="col-3">
          <Button class="bluebtn"  onClick={() => {
                        setSelectedInvite(invite);
                        setOpen(true);
                      }}>View invite</Button>

    </div>
    </div>



        );
    });

    return (

        <div className={styles.List}>
            {inviteArray}



            {!!selectedInvite && (
            <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}

        open={open}
        dimmer={"blurring"}
      >
        <Modal.Header><h1>Invite from {selectedInvite.inviterDetails[0].name}</h1></Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header></Header>
            <p>
              How: In person<br /><br />
            </p>
            <p>When: {new Date(selectedInvite.meetupTime).toDateString()} at {new Date(selectedInvite.meetupTime).toLocaleTimeString("en-nz",{ hour: '2-digit', minute: '2-digit' })}</p>
            <p>Where: {selectedInvite.meetupPlace}</p>
            <p>&nbsp;</p>
            <p>

            How to contact:
            <ul>
              <li>Mobile: {selectedInvite.inviterDetails[0].mobile}</li>
              <li>Email: {selectedInvite.inviterDetails[0].email}</li>
            </ul>

            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <Button class="bluebtn"  onClick={() => {
                axios.get("https://api-dot-meet-work-mates.ts.r.appspot.com/meetup_invites/reject/"+selectedInvite.inviter+"/"+selectedInvite.invitee)
            .then((result) => {
                //set the search array within the state to contain the JSON result for displaying in the other components
                console.log(result);
              },
              // NOTE: it's important to handle errors here
              // instead of a catch() block so that we don't accidentally catch
              // exceptions from bugs within the component
              (error) => {
                //log any errorts to the console
                console.log(error);
              }
            )
                      setOpen(false);
                      window.location.reload();
                    }}>Decline invite</Button>
          <Button
            content="Accept"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)
            }
            positive
          />
        </Modal.Actions>
      </Modal>
  )}
        </div>
    )
}

export default InviteOutput
