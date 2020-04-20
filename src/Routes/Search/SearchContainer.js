import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state={
        search=null,
        error=null,
        loading=true
    };
    render(){
        const{search, error, loading}=this.state;
        return(<SearchPresenter
        search={search}
        error={error}
        loading={loading}
        />)
    }
}