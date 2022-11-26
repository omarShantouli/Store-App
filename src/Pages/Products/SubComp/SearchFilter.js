import React from "react";

const DEFAULT_FILTER = "title/desc"

class SearchFilter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            textSearch : "",
            filterByState : DEFAULT_FILTER
        }
    }

   async onTextSearchChanged(e){
      await  this.setState({
            textSearch: e.target.value
        })

        if('onChange' in this.props)
        this.props.onChange(this.state.textSearch, this.state.filterByState)

    }

  async onFilterSelected(e){
       await this.setState({
            filterByState : e.target.value
        })
        if('onChange' in this.props)
        this.props.onChange(this.state.textSearch, this.state.filterByState)
    }

   async onResetForm(e){
        e.preventDefault();
     await   this.setState({
            textSearch : "",
            filterByState : DEFAULT_FILTER
        })
        
        if('onChange' in this.props)
        this.props.onChange(this.state.textSearch, this.state.filterByState)

    }


    render(){
        return(
            <div className="row ms-5 mt-3">
                
                    <form onSubmit={this.onResetForm.bind(this)}>
                        <div className="col-lg-7 col-md-10 d-flex">
                            <div className="me-2 flex-grow-1">
                               <input
                                value={this.state.textSearch}
                                onChange={this.onTextSearchChanged.bind(this)}
                                className="form-control"
                                type="text"
                                placeholder="Search..."/>
                            </div>
                        
                            <div className="me-2 flex-grow-2">
                                <select
                                 className="form-select"
                                 onChange={this.onFilterSelected.bind(this)}
                                 value={this.state.filterByState}
                                 >
                                    <option value="title">By Title</option>
                                    <option value="desc">By Description</option>
                                    <option value="title/desc">By Title/Desc</option>
                        
                                </select>
                            </div>

                            <div className="flex-grow-2">
                                <button className="btn btn-secondary">Reset</button>
                            </div>

                         </div>
                    </form>

               
            </div>
        )
    }
}

export default SearchFilter;