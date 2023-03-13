import React from "react";
import Plus from "../../assets/images/plus.svg";

interface Props {
  arrNumber: any
  title: string
  mainMenu: string
}

const Residents: React.FC<Props> = (props: Props) => {
  return (
    <div className="scheduleteambody">
      <p className="scheduleteambody-title">{props.title}</p>
      <div className="scheduleteambody-card-wrapper">
        {props.arrNumber.map((el: any) => (
          <div
            className="scheduleteambody-card scheduleteambody-card__container"
            key={el}
          >
            <p className="scheduleteambody-card-resident-title">
              Team V. Hofmann
            </p>
            <div className="scheduleteambody-card-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="scheduleteambody-card-para__resident">
                Thomas Heinz
              </p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                V
              </p>
            </div>
          </div>
        ))}
        <div className="scheduleteambody-card scheduleteambody-card__resident scheduleteambody-card__plus">
          <img src={Plus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Residents;
