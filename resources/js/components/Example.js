import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: '',
            items: [],
            CurrentId: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getItem = this.getItem.bind(this);
        this.ChangeStatus = this.ChangeStatus.bind(this);
    }
    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getItem() {
        axios.get('/api/GetItem')
            .then(response => {

                this.setState({
                    items: response.data
                });
            })
    }
    addItem(e) {
        e.preventDefault();
        axios.post('/api/AddItem', {
                item: this.state.name
            })
            .then(response => {
                this.setState({
                    name: '',
                    error: '',
                });
                this.getItem()
            })
            .catch(error => {
                if (error.response.status == 422) {
                    this.setState({
                        error: error.response.data.errors.item[0]
                    });
                }
            });
    }
    ChangeStatus(id) {
        this.setState({
            CurrentId: id
        });
    }
    EditItem(status) {
        axios.post('/api/EditItem', {
                id: this.state.CurrentId,
                status: status
            })
            .then(response => {
                this.setState({
                    CurrentId: ''
                });
                this.getItem()
            });
    }

    componentDidMount() {
        this.getItem()
    }
  render() {
    const {
       items
    } = this.state;
    const mystyle = {
      padding: "10px",
      "listStyle": "none",
      "cursor": "pointer"
    };
    const newmystyle = {
      color: "white",
      backgroundColor: "#3490dc",
      padding: "10px",
      "listStyle": "none",
      "cursor": "pointer"
    };
    const ColorRed = {
      color: "red",
    };
    const listItemsOne = items.map((item) =>{
            if(item.status == 0)
            {

                return <li style={item.id == this.state.CurrentId ? newmystyle : mystyle} key={item.id} value={item.item} onClick={() => this.ChangeStatus(item.id)}>{item.item}</li>
            }
        }
    );
    const listItemsTwo = items.map((item) =>{
            if(item.status == 1)
            {
                return <li style={item.id == this.state.CurrentId ? newmystyle : mystyle} key={item.id} value={item.item} onClick={() => this.ChangeStatus(item.id)}>{item.item}</li>
            }
        }
    );
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 mt-2">
                    <div className="card">
                        <div className="card-header">Add item</div>   
                        <div className="card-body">
                            <strong>Item:</strong>
                            <input autoComplete="off" type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeValue}/>
                            <p style={ColorRed}>{this.state.error}</p>
                            <br/>
                            <button onClick={this.addItem} className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-2">
                    <div className="card">
                        <div className="card-header">Item1</div>   
                        <div className="card-body">
                            <ul className="pl-2">{listItemsOne}</ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mt-2 text-center">
                    <div><button onClick={() => this.EditItem(1)}>&#8919;</button></div>
                    <div className="mt-2" onClick={() => this.EditItem(0)}><button >&#8918;</button></div>
                </div>
                <div className="col-md-5 mt-2">
                    <div className="card">
                        <div className="card-header">Item2</div>   
                        <div className="card-body">
                            <ul className="pl-2">{listItemsTwo}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
