import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try{
        const {
            data:{results : nowPlaying}
        } = await movieApi.nowPlaying();
        const{ 
            data:{results : upcoming} 
        } = await movieApi.upcoming();
        const{
            data:{results : popular}
        } = await movieApi.popular();
        throw Error();
        this.setState({
            nowPlaying,
            upcoming,
            popular
        })
        console.log(upcoming);  
        
        } catch{
            this.setState({
                error: "Can't find movies informaition."
            })

        }finally{
            this.setState({
                loading:false
            }); 
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading }= this.state;
        return(<HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
        /> 
        );
    }
}