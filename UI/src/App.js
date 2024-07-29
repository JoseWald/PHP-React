import React , {Component} from "react";
class App extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8000')
            .then(res=>res.json())
            .then(data=>this.setState({data}))
            .catch(err=>console.log('err'+err))
    }
    render(){
        return (
            <div>
                <h1>Data from PHP API:</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(item => (
                            <tr key={item.id}>
                                <td>{item.ID}</td>
                                <td>{item.nom}</td>
                                <td>{item.couleur}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }    
 
}
export default App
