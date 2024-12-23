import { EVENT_TYPES } from "./constant";

export interface CustomButtonProps {
  variant: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  value: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export interface SnackbarProps {
  message: string;
  severity: "success" | "error" | "warning" | "info";
  open: boolean;
  onClose?: () => void;
}

export interface TodoObject {
  id: number;
  title: string;
  isUrgent: boolean;
  completed: boolean;
}

export type EventTypeValues = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
