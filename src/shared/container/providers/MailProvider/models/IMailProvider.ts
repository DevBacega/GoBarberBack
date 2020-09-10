import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default interface IMailProvider {
    sendMail(to: string, body: string): Promise<void>;
}
