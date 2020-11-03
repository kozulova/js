import React, {useState} from 'react'
import OptionCircle from './Sections/OptionCircle'
import bg from './../images/bg-triangle.svg'
import {connect} from 'react-redux'

function GameBoard({options, isGame, chosenOptions, startGame}) {

const [WinnerShown, setWinnerShown] = useState(false);

const showWinner = () =>{   
    setTimeout(() => {
        setWinnerShown(true);
    }, 2000);   
}

const playAgainHandler = ()=>{
    startGame(true);
    setWinnerShown(false);
}

const WinCircleImage=(option)=>{
    return(
    <div className={`option_circle board_${option}`}>  
            <img src={process.env.PUBLIC_URL+`/images/icon-${option}.svg`} />
    </div>
    )
}

const housePicked = () =>{
    if(!WinnerShown){
        return <div className="blue_circle"></div>
    }
    else{
        return (
            <div>
                    <div className="house_picked gameOverCircle">
                    <h3>The house picked</h3>
                    {WinCircleImage(chosenOptions.computerOption)}
                    </div>
            </div>        
        )
    }   
}

const renderOptionsCircles = ()=>{
    if(isGame){
        return (<div className="game_board " style={{backgroundImage: `url(${bg})`}}>
        {options.map((option, index)=><OptionCircle option={option} key={index}/>)}</div>)
    }
    else{
        showWinner();
        return (
            <div className="gameOverScreen">
                <div className="you_picked gameOverCircle">
                <h3>You picked</h3>
                {WinCircleImage(chosenOptions.gamerOption)}
                </div>
                
                {WinnerShown&&(<div className="result">
                    {chosenOptions.gameResult}
                    <br/>
                    <button onClick={playAgainHandler}>Play again</button>
                </div>)}
                
                {housePicked()}
                
            </div>
        )
    }
    
}
    return (
        
            <div>         
            {
                renderOptionsCircles()
            }              
            </div>
        
    )
}


const mapStateToProps = (state)=>{
    return{
        options: state.options,
        isGame: state.isGame,
        chosenOptions: state.chosenOptions
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        startGame: (isGame) =>{dispatch({type: 'START_GAME', isGame: isGame})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)