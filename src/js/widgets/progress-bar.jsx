import React, {Component} from 'react';

class ProgressBar extends Component{
    render(){
        return(
            <div className="progress-bar">
                {
                    Array.apply(null, {length:this.props.length}).map((value, index)=>{
                        if(index < this.props.value){
                            return <div className="circle fill"></div>
                        }else{
                            return <div className="circle"></div>
                        }
                    })
                }
            </div>
        )
    }

}

export default ProgressBar;