import React, {useState } from "react";

const DEFAULT_FILTER = "title/desc"

function SearchFilter(props){

    const [textSearch, setTextSearch] = useState("");
    const [filterByState, setFilterByState] = useState(DEFAULT_FILTER);

    function onTextSearchChanged(e){

         setTextSearch(e.target.value);
         if('onChange' in props)
         props.onChange(textSearch, filterByState)
    }

      function onFilterSelected(e){

       setFilterByState(e.target.value);
       if('onChange' in props)
       props.onChange(textSearch, filterByState)
    }


      function onResetForm(e){
        e.preventDefault();

        setTextSearch("");
        setFilterByState(DEFAULT_FILTER);

       if('onChange' in props)
         props.onChange("", filterByState)
    }



        return(
            <div className="row ms-5 mt-3">
                
                    <form onSubmit={onResetForm}>
                        <div className="col-lg-7 col-md-10 d-flex">
                            <div className="me-2 flex-grow-1">
                               <input
                                value={textSearch}
                                onChange={onTextSearchChanged}
                                className="form-control"
                                type="text"
                                placeholder="Search..."/>
                            </div>
                        
                            <div className="me-2 flex-grow-2">
                                <select
                                 className="form-select"
                                 onChange={onFilterSelected}
                                 value={filterByState}
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

export default SearchFilter;