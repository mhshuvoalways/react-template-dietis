import React from "react";
import Plus from "../../assets/images/plus.svg";

interface Props {
  arrNumber: any
  title: string
  mainMenu: string
}

const Teams: React.FC<Props> = (props: Props) => {
  return (
    <div className="scheduleteambody">
      <p className="scheduleteambody-title">{props.title}</p>
      <div className="scheduleteambody-card-wrapper">
        {props.arrNumber.map((el: any) => (
          <div className="scheduleteambody-card" key={el}>
            <p className="scheduleteambody-card-para">Hoffman Volker</p>
            <p className="scheduleteambody-card-para">Thomas Heinz</p>
          </div>
        ))}
        <div className="scheduleteambody-card scheduleteambody-card__resident scheduleteambody-card__plus">
          <img src={Plus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Teams;
