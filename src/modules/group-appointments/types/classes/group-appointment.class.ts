import {NoteClass} from "@src/modules/group-appointments/types/classes/note.class";

export class GroupAppointment {
  id: string
  userId: number
  date: string
  title: string
  description: string
  image: number
  backgroundColor: string
  notes: NoteClass[]
}
