import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ResidentSub: React.FC = () => {
  const items = [
    {
      id: 1,
      name: "Name Vorname"
    },
    {
      id: 2,
      name: "Muster Hannes"
    },
    {
      id: 3,
      name: "Krauer, Josef"
    },
    {
      id: 4,
      name: "Kopf Jens"
    },
    {
      id: 5,
      name: "Name Vorname"
    }
  ];

  const handleOnDragEnd = (e): any => {
    if (!e.destination) return;
    const reorderedItem = items.splice(e.source.index, 1);
    items.splice(e.destination.index, 0, ...reorderedItem);
  };

  return (
    <div className="sidebarsub">
      <p className="sidebarsub-title">People not scheduled</p>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((el, index) => (
                <Draggable
                  draggableId={el.id.toString()}
                  index={index}
                  key={el.id}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="sidebarsub-resident">
                        <p className="sidebarsub-resident-first">V</p>
                        <p className="">{el.name}</p>
                        <p className="sidebarsub-resident-first sidebarsub-resident-first__last">
                          N
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ResidentSub;
