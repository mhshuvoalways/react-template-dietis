import React from "react";

interface Props {
  topValue: string
}

const SidebarSub: React.FC<Props> = (props: Props) => {
  return (
    <div className="sidebarsub">
      <p className="sidebarsub-title">
        {props.topValue === "Teams"
          ? "Nicht eingeteilte Teamleiter"
          : "People not scheduled"}
      </p>
      <div className="sidebarsub-items">
        {props.topValue === "Teams"
          ? (
          <div>
            <p className="sidebarsub-item">Bock Irene</p>
            <p className="sidebarsub-item">Zbinden Sonja</p>
            <p className="sidebarsub-item">Binder Ingo</p>
            <p className="sidebarsub-item">Bock Irene</p>
            <p className="sidebarsub-item">Zbinden Sonja</p>
            <p className="sidebarsub-item">Binder Ingo</p>
            <p className="sidebarsub-item">Bock Irene</p>
            <p className="sidebarsub-item">Zbinden Sonja</p>
            <p className="sidebarsub-item">Bock Irene</p>
          </div>
            )
          : (
          <div>
            <div className="sidebarsub-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="">Name Vorname</p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                N
              </p>
            </div>
            <div className="sidebarsub-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="">Muster Hannes</p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                N
              </p>
            </div>
            <div className="sidebarsub-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="">Krauer, Josef</p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                N
              </p>
            </div>
            <div className="sidebarsub-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="">Kopf Jens</p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                N
              </p>
            </div>
            <div className="sidebarsub-resident">
              <p className="sidebarsub-resident-first">V</p>
              <p className="">Name Vorname</p>
              <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                N
              </p>
            </div>
          </div>
            )}
      </div>
    </div>
  );
};

export default SidebarSub;
