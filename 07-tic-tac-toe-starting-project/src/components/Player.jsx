import { useState} from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEdting, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(isEdting => !isEdting);
        if(isEdting){
            onChangeName(symbol, playerName);
        }
        
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = "Edit";

    if(isEdting){
        editablePlayerName = ( 
        <input type="text" required value={playerName} onChange={handleChange} /> 
        );
        buttonCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{buttonCaption}</button>
          </li>
    );
}