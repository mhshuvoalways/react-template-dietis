import React from "react";
import { Link } from "react-router-dom";

interface Props {
  showup?: boolean
  previewTitle?: string
}

const ProcessBody: React.FC<Props> = (props: Props) => {
  return (
    <div className="processbody-main">
      <div>
        <p className="processbody-main-tag-title">Create tag</p>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">Button Text</p>
          <input
            type="text"
            className="processbody-theme-select"
            value="Punctual"
          />
        </div>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">Status color</p>
          <input
            type="text"
            className="processbody-theme-select"
            value="Green"
          />
        </div>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">Chat message</p>
          <textarea
            value="[Client] showed up for work on [date time] on time."
            className="processbody-theme-select"
          ></textarea>
        </div>
        <div className="processbody-text-block">
          <p className="processbody-main-tag-input-title">Text blocks</p>
          <div className="processbody-text-block-items">
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Resident]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Name of resident
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[DateTime]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Datum und Uhrzeit
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[TeamName]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Name des Teams
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Teammanager]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Name des Teamleiters
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">
                [TeammanagerID]
              </p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                ID des Teamleiters
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Year]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Jahr als Nummer
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Month]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Monat als Text
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Resident]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Name of resident
              </p>
            </div>
            <div className="processbody-text-block-item">
              <p className="processbody-text-block-item-frist">[Day]</p>
              <p className="processbody-text-block-item-frist processbody-text-block-item-frist__sec">
                Wochentag als Text
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="processbody-right">
        <p className="processbody-title">Preview</p>
        <div className="processbody-main-right-items">
          <p className="processbody-main-right-ba">BA</p>
          <div className="processbody-main-right-item-right">
            <p
              className={`processbody-main-right-item-right-btn ${
                props.showup && "processbody-main-right-item-right-btn__showup"
              }`}
            >
              {props.previewTitle}
            </p>
            <p className="processbody-main-right-item-right-des">
              Max Müller ist am 18.01.2022 pünktlich zur Arbeit erschienen.
            </p>
            <p className="processbody-main-right-item-right-date">
              04.01.2022 - 7.18
            </p>
          </div>
        </div>
      </div>
      <div className="processbody-right-action-btn">
        <Link to="/process/actiontrigger">
          <button className="maincreate-ressort-btn btn">+ Add action</button>
        </Link>
      </div>
    </div>
  );
};

export default ProcessBody;
