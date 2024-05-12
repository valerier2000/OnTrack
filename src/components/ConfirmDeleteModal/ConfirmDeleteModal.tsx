import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import SmallButton from "../../styledComponents/SmallButton";
import CloseButton from "../CloseButton/CloseButton";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onDeleteConfirm: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  itemName: string | undefined;
  itemType: "task" | "project";
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onDeleteConfirm,
  onClose,
  itemName,
  itemType,
}) => {
  const itemLabel = itemType === "task" ? "to zadanie" : "ten projekt";

  return (
    <Dialog maxWidth="md" open={isOpen} onClose={onClose}>
      <CloseButton onClick={onClose} right={10} top={10} />
      <DialogContent
        sx={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          width: "450px",
        }}
      >
        <Typography sx={{ textAlign: "center", mt: 7, mb: 3 }}>
          Czy na pewno chcesz usunąć {itemLabel}{" "}
          {itemName && (
            <span style={{ fontWeight: "bold" }}> "{itemName}"</span>
          )}
          ?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <SmallButton
            variant="contained"
            type="button"
            onClick={onDeleteConfirm}
            sx={{ m: 1 }}
          >
            Usuń
          </SmallButton>
          <SmallButton
            variant="contained"
            onClick={onClose}
            sx={{ m: 1, backgroundColor: "#5E5F7D" }}
          >
            Anuluj
          </SmallButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
