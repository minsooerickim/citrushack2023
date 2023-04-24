import { ProtectedPage } from '@/components/Page';
import { CheckinForm } from '@/components/Form';

export default function CheckIn() {
  return (
    <ProtectedPage
      title="Check-In"
      // for D-Day, user needs to be signed-in, qualified, and must have NOT checked in already
      restrictions={['signin', 'qualified', 'checkedIn']}
      // dev-mode
      // restrictions={['admin']}
    >
      <CheckinForm />
    </ProtectedPage>
  );
}
