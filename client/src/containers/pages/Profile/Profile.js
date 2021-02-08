import React from 'react';



const Profile = () => {
 return (  
 <div>
 <div>
  <h3>Name</h3>
</div>

<TextField
id="multiline-flexible"
label="About"
multiline
rows="2"
value={this.state.about}
onChange={this.handleChange('about')}
/>
</div>
)

    
}


export default Profile
