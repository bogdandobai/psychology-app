import * as React from 'react';
import {Layout} from "@ui-kitten/components";
import { AppointmentsList } from "@src/modules/appointments/components";
import moment from 'moment';

export const Appointments = () => {
  return (
    <Layout style={{flex:1, backgroundColor: '#fdfaef'}}>
      <AppointmentsList
        data={[
          {id:1, date:moment().subtract(1, 'week')},
          {id:2, date:moment().add(1,'week')},
          {id:3, date:moment().add(2,'week')},
          {id:4, date:moment().add(3,'week')}
        ]}
      />
    </Layout>
  )
}
