export enum TaskStatus {
  InProgress = "In Progress",
  Completed = "Completed",
  Deleted = "Deleted",
  Rescheduled = "Rescheduled",
}

export default interface Task {
  id?: string;
  title: string;
  status: TaskStatus;
  dueDate: string;
  rescheduledFrom: string;
  rescheduledTo: string;
}
