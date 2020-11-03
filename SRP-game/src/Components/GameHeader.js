import React from 'react'
import {connect} from 'react-redux';

function GameHeader({options, score}) {

    const renderOptions = ()=> (
        <div className="header_options">
        {options.map(option=>(<li key={option.id}>{option.name}</li>))}
        </div>
        )

    const renderScore = ()=>(
        
            <div className="header_score">
                <div className="score">Score</div>
                
                <div className="score_number">{score}</div>
            </div>
        
    )

    return (
        <div className="header">
            {renderOptions()}
            {renderScore()}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        options: state.options,
        score: state.score
    }
}

export default connect(mapStateToProps)(GameHeader)
