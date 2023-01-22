import {React,useState} from 'react';
import './console.css';
import Cmd from './Cmd';   

const Console =()=> {
    const [cmdprelist, updatecmdlist] = useState(["Hello Everyone,Iam Srivathsan G","I Love Making Websites from Scrach!","Type, help for cmds"]);
    const addcmditem = (e) => {
    //   updatecmdlist( cmdlist => [...cmdlist, e]);
       switch (e.target.value) {
          case "skill":Skills();break;
          case "help":updatecmdlist( cmdlist => [...cmdlist, "type 'skill' for getting my skills","type 'cls' to clear screen"]);break;
          case "cls":updatecmdlist(["Hello Everyone,Iam Srivathsan G","I Love Making Websites from Scrach!","Type, help for cmds"]);break;
          default:updatecmdlist( cmdlist => [...cmdlist, `${e.target.value} is not recognized as an internal or external command`]);
      }
      e.target.value="";
       
    };  

    const cursorgames = (e) => {
  
      e.preventDefault()
  
         
      };
    const Skills = (e) => {

        updatecmdlist( cmdlist => [...cmdlist, "HTML, CSS, JS, React, PHP, SQL, C , Python"]);
    }
    const help = (e) => {

      updatecmdlist( cmdlist => [...cmdlist, "clear - cls"]);
  }
  return (
    <div className="console">
    <div id="cmdconatiner" className="consolebody">
      { cmdprelist.map(function(cmd){return <Cmd cmdstr={cmd}/>
    }
            ) }
       <p className="cmdinput"><span>&gt; </span><input onKeyUp ={(e) => e.key === "Enter"?addcmditem(e):cursorgames(e)} className="enteremd" contenteditable="true"/> </p>
    </div>
 </div>
  );
}

export default Console;
