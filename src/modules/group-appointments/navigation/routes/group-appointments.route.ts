import {GroupAppointment} from "@src/modules/group-appointments/types/classes";

export enum GroupAppointmentsRoutes {
  GROUP_APPOINTMENTS = 'GroupAppointments',
  GROUP_APPOINTMENT_DETAILS = 'GroupAppointmentDetails',
}

export type GroupAppointmentsProps = {
  [GroupAppointmentsRoutes.GROUP_APPOINTMENTS]: undefined;
  [GroupAppointmentsRoutes.GROUP_APPOINTMENT_DETAILS]: {appointment: GroupAppointment};
};
