import { passwordCheckHandler } from 'next-password-protect';

export default passwordCheckHandler(process.env.PASSWORD, {
  cookieName: 'authorization'
});
