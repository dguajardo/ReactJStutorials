import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // 4º approach SHORT CIRCUIT OPERATOR
        return this.state.isLoggedIn && <div> Welcome Diego</div>

        // 3º approach: TERNARY OPERATOR
        // return(
        //     this.state.isLoggedIn ?  (
        //     <div>Welcome Diego</div> 
        //     ) : (
        //     <div>Welcome Guest</div>
        // )
        //2º Approach ELEMENT VARIABLES
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Diego</div>
        // } else {
        //     message = <div>Welcome Guest</div>           
        // }
        // return <div>{message}</div>

        // 1º Aproach IF/ELSE
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Dxo</div>
        // }else{
        //     return <div>Welcome Guest</div>
     
        // }
        // return (
        //     <div>
        //         <div>Welcome Dxo</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
