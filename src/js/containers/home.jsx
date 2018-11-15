import React, {Component} from 'react'
import Header from '../components/header.jsx'
import Body from '../components/body.jsx'
import data from '../../json/info.json'

class Home extends Component{
    render(){
        return (
            <div>
                <Header {...data.personal}/>
                <Body 
                    education={data.education} 
                    skills={data.skills} 
                    experience={data.experience} 
                    integrations = {data.integrations}
                    recognitions={data.recognitions}
                    others={data.others}
                />
            </div> 
        )
    }
}

export default Home