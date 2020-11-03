import React, {useState} from 'react'
import { connect } from 'react-redux';
import {ADD_CHOSEN_OPTION} from '../../actions';

function OptionCircle({options, option, addChoosenOptions}) {
    const choseRandomOption=()=>{
        return options[Math.floor(Math.random()*options.length)].name;
    }

    let computerOption = "";

    const handleOptionClick = ()=>{
        computerOption = choseRandomOption();
        const gameResult = checkWin(option.name);

        const choosenOptions= {
            gamerOption: option.name,
            computerOption: computerOption,
            gameResult: gameResult
        }

        addChoosenOptions(choosenOptions);
        console.log(choosenOptions);
        console.log(checkWin(option.name));
    }

    

    const checkWin= (option)=>{
        console.log(computerOption + " computer option")
        if(option === computerOption){
            return "draw"
        }
        else if(option === "paper" && computerOption==="rock"){
            return "win"
        }
        else if(option==="rock" && computerOption==="scissors"){
            return "win"
        }
        else if(option==="scissors" && computerOption==="paper"){
            return "win"
        }
        else{
            return "loose"
        }

    }

    return (
        <div className={`option_circle board_${option.name}`} onClick={handleOptionClick}>  
            <img src={process.env.PUBLIC_URL+`/images/icon-${option.name}.svg`} />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        options: state.options
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addChoosenOptions: (chosenOptions) =>{dispatch({type: 'ADD_CHOSEN_OPTION', chosenOptions: chosenOptions})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionCircle)