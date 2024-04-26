import React, {Component} from "react";
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        namejobs : []
    }

    removeNameJob = (index) => {
        const {namejobs} = this.state;
        this.setState({
            namejobs: namejobs.filter((namejob, i) => {
                return i != index;
            })
        })
    }

    handleSubmit = (namejob) => {
        this.setState({namejobs:[...this.state.namejobs, namejob]})
    }

    render(){
        const {namejobs} = this.state;
        return(
            <div className="container">
                <Table data={namejobs} removeData={this.removeNameJob}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;
