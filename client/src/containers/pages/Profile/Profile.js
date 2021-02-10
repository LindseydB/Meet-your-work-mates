import React, { Component } from 'react';

export default class Profile extends Component {
    //constructor
    constructor(props) {

        super(props);
        // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    // onChangeTodoDescription(e) {
    //     this.setState({
    //         todo_description: e.target.value
    //     });
    // }

    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    // onSubmit(e) {
    //     e.preventDefault();

    //     console.log(`Form submitted:`);
    //     console.log(`Todo Description: ${this.state.todo_description}`);
    //     console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    //     console.log(`Todo Priority: ${this.state.todo_priority}`);

    //     this.setState({
    //         todo_description: '',
    //         todo_responsible: '',
    //         todo_priority: '',
    //         todo_completed: false
    //     })
    // }

    render() {
        return (
            <div>
                <button
                // onClick={this.upload.bind(this)}
                >
                    Edit Profile
                </button>


                <div style={{ marginTop: 10 }}>
                    <h3>Annabel Username</h3>

                    <div>
                        <h5>Picture Uploader</h5>

                        <input
                            type="file"
                        // onChange={this.handlePictureSelected.bind(this)}
                        />
                        <br />
                        <div>
                            {/* {this.renderPreview()} */}
                        </div>
                        <hr />
                        <button
                        // onClick={this.upload.bind(this)}
                        >
                            Upload
                        </button>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                value="orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis dolor eget libero porta, et tristique mauris maximus. Suspendisse potenti. Etiam efficitur iaculis libero sit amet laoreet. Sed ornare, eros sit amet laoreet interdum, dolor leo posuere ligula, sit amet rutrum lectus nisi quis metus. Nunc sodales ipsum consectetur sapien auctor rutrum. Quisque vulputate quis turpis sit amet posuere. Aenean fringilla turpis arcu, quis semper libero facilisis eu. Vivamus gravida ante mi, non pharetra ex ultrices nec. Pellentesque vitae neque felis.

                            Nam molestie quam sit amet dui condimentum, fringilla rutrum justo cursus. Sed quis ornare tellus. Mauris urna eros, pretium at enim"
                            // value={this.state.todo_description}
                            // onChange={this.onChangeTodoDescription}
                            />
                        </div >
                        <div className="form-group">
                            <label>Role: </label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.todo_responsible}                          
                                onChange={this.onChangeTodoResponsible}
                            />
                        </div>
                        <div className="form-group">
                            <label>Department: </label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.todo_responsible}                          
                                onChange={this.onChangeTodoResponsible}
                            />
                        </div>
                        <div className="form-group">
                            <label>Location: </label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.todo_responsible}                          
                                onChange={this.onChangeTodoResponsible}
                            />
                        </div>
                        <div className="form-group">
                            <label>Interests: </label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.todo_responsible}                          
                                onChange={this.onChangeTodoResponsible}
                            />
                        </div>
                        <div className="form-group">
                            <label>Skills: </label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.todo_responsible}                          
                                onChange={this.onChangeTodoResponsible}
                            />
                        </div>


                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}