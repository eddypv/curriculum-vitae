import React, {Component} from 'react'
import Header from '../components/header.jsx'
import data from '../../json/info.json'

class Home extends Component{
    render(){
        return (
            <div>
                <Header {...data.personal}/>
            </div> 
        )
    }
}

export default Home