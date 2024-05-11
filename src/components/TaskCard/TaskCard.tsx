import React, { useCallback, useEffect, useState } from "react";
import { Typography, Grid, Box, IconButton } from "@mui/material";
import { useTaskStore } from "../../store/TaskStore";
import DateChip from "../CardComponents/DateChip";
import MembersAvatarsRow from "../CardComponents/MembersAvatarsRow";
import GenericCard from "../GenericCard/GenericCard";
import EntityIcon from "../CardComponents/EntityIcon";
import MenuDotsVertical from "../../assets/icons/MenuDotsVertical.svg";
import CloseIcon from "../../assets/icons/CloseIcon.svg";
import OptionsPopup from "../layout/OptionsPopup";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import useDeletion from "../../hooks/useDeletion";
// import { Task } from "../../types";
import { useProjectStore } from "../../store/ProjectStore";

interface TaskCardProps {
  // task: Task;
  taskId: string;
  handleTaskClick: () => void;
  isEditClicked: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskId,
  handleTaskClick,
  isEditClicked,
}) => {
  const task = useTaskStore((state) =>
    state.tasks.find((t) => t.id === taskId)
  );

  useEffect(() => {
    useProjectStore.getState().fetchProjects();
  }, []);

  const project = useProjectStore((state) => {
    return state.projects.find((p) => p.id === task?.projectId);
  });

  // console.log("project in TaskCard", project);
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { requestDelete, confirmDelete, isConfirmOpen, closeModal } =
    useDeletion();

  const handleOpenOptionsPopup = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget as HTMLButtonElement);
    setIsOptionsPopupOpen(true);
  };

  const handleDelete = useCallback(() => {
    if (task) {
      requestDelete(
        { id: task.id, type: "task" },
        useTaskStore.getState().deleteTask
      );
    }
  }, [task, requestDelete]);

  return (
    <GenericCard onClick={handleTaskClick}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} mb={2} container alignItems="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              {project && (
                <Typography
                  sx={{ fontSize: "1rem", color: "primary.main", mb: 1.5 }}
                >
                  {project.title}
                </Typography>
              )}
              <Typography variant="body1">{task?.title}</Typography>
            </Box>
            <IconButton
              aria-label="more options"
              onClick={isEditClicked ? handleDelete : handleOpenOptionsPopup}
            >
              {isEditClicked ? (
                <img src={CloseIcon} alt="Usuń" />
              ) : (
                <img src={MenuDotsVertical} alt="Więcej opcji" />
              )}
            </IconButton>
          </Box>
          <EntityIcon
            icon={task?.icon}
            style={{ width: "15px", height: "15px", marginLeft: "5px" }}
          />
        </Grid>

        <Grid item container xs={12} alignItems="center" spacing={2}>
          <Grid item xs={true}>
            <DateChip date={task?.dueDate ?? null} />
          </Grid>
          <Grid item xs={true} container justifyContent="flex-end">
            <MembersAvatarsRow members={task?.members ?? []} />
          </Grid>
        </Grid>
      </Grid>
      <OptionsPopup
        open={isOptionsPopupOpen}
        anchorEl={anchorEl}
        onClose={() => setIsOptionsPopupOpen(false)}
        onEdit={() => console.log("Edit Task")}
        onDelete={handleDelete}
      />
      <ConfirmDeleteModal
        isOpen={isConfirmOpen}
        onDeleteConfirm={confirmDelete}
        onClose={closeModal}
        itemName={task?.title}
        itemType="task"
      />
    </GenericCard>
  );
};

export default TaskCard;
