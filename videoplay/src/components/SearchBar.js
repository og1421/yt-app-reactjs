import React from "react";


class SearchBar extends React.Component{

    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event =>{
        //essa linha de código impede que quando o user clicar no enter 
        //n apagar o que tem dentro do input
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
        //TODO:MAKE SURE WE CALL
        //Callback from parent component
    };

    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;