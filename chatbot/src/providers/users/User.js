import React, {Component} from 'react'

class UserList extends Component{

    constructor(){
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(users =>{
                console.log(users)
            })
        
        
    }

}