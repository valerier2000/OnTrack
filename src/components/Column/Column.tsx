import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
import { Typography, Box } from "@mui/material";
import { Task } from "../../types";

type ColumnProps = {
  columnId: string;
  title: string;
  tasks: Task[];
  handleTaskClick: (
    taskId: string,
    event: React.MouseEvent<HTMLElement>
  ) => void;
  isEditClicked: boolean;
};

export const Column = ({
  columnId,
  title,
  tasks,
  handleTaskClick,
  isEditClicked,
}: ColumnProps) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
          sx={{
            backgroundColor: snapshot.isDraggingOver
              ? "#EEEFF6"
              : "transparent",
            width: {
              xs: 320,
              md: 230,
              lg: 320,
            },
            minHeight: 500,
          }}
        >
          <Box sx={{ borderBottom: 2, borderColor: "primary.main", pb: 0.5 }}>
            <Typography variant="h6" sx={{ fontSize: "1.25rem" }}>
              {title}
            </Typography>
          </Box>
          {tasks.map((task, index) => {
            if (task.id === undefined) {
              return null;
            }

            return (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard
                      key={task.id}
                      taskId={task.id}
                      handleTaskClick={handleTaskClick}
                      isEditClicked={isEditClicked}
                      // handleTaskClick={() => console.log("Task clicked")}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};
