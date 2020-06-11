export default {
  apiErrorCodes: {
    401: 'You are not authorized for this action. Sorry :-(',
    403: 'Something went wrong, maybe you are not allowed to do that?',
    404: 'We could not find that thing. Hmn!',
    500: 'An unknown server error occurred. Sorry!',
  },
  createConversationSuccess: 'You started a new conversation!',
  createEventSuccess: 'Woah! You created successfully your new event!',
  createPlaceSuccess: 'Ja! You successfully created a new place!',
  createResourceSuccess: 'Hurra! You successfully created a new resource!',
  deleteEventSuccess: 'Your event was successfully deleted!',
  deletePlaceSuccess: 'Your place was successfully deleted.',
  deleteResourceSuccess: 'Your resource was successfully deleted.',
  formSubmitError: 'Some information is missing, please check the form again!',
  gifStreamError: 'Sorry, .gif streaming is not possible. Please check your webcam permissions or try on a different device.',
  gifStreamErrorIOS: 'Sorry, .gif streaming is not available on iOS, use another device instead (your laptop for example). If you think Apple is the future: it\'s not, ANTIUNIVERSITY is! :-)',
  gifStreamStarted: 'Aaaaand action! .gif streaming started now!',
  gifStreamStopped: '.gif streaming stopped!',
  loginSuccess: 'Welcome!',
  logout: 'Goodbye! See you soon!',
  newMessageSuccess: 'Your message was sent!',
  notificationNewMessages: { one: 'You have {count} new message, click on the INBOX button in your right sidebar to read it.', other: 'You have {count} new messages, click on the INBOX button in your right sidebar to read them.' },
  redirectedUnauthenticated: 'You have to login before you can see that page.',
  requestPasswordToken: 'We just sent you an email with a link to reset your password. Check your spam folder if you can\'t find it.',
  requestRandomMeetingSuccess: 'Hurra! Well done! Check your inbox for details about your random meeting!',
  resetPassword: 'Yes! Your password has been reset!',
  resourceCreateFailure: 'Ouch, I couldn\'t create this, please check your fields again.',
  resourceUpdateFailure: 'Ouch, I couldn\'t update this, please check your fields again.',
  updateAdminConfigFailure: 'Could not save the configuration. Please check your fields and the documentation.',
  signUpPaypalSuccess: 'Thank you and welcome! You successfully created your account!',
  signUpFreeSuccess: 'Thank you and welcome! You successfully created your account!',
  signUpTransferFailure: 'Something with the registration went wrong',
  signUpTransferSuccess: 'Thank you for your registration! We just sent you an email with our bank account details! Please contact us if you didn\'t receive the mail in the next minutes or you have any questions.',
  signUpTransferTicketSuccess: 'Thank you! We just sent you an email with our bank account details! Please contact us if you didn\'t receive the mail in the next minutes or you have any questions.',
  unauthorizedView: 'Sorry, something went wrong!',
  updateEventSuccess: 'Yes! Your event was successfully updated!',
  updatePlaceSuccess: 'Your place was successfully updated.',
  updateProfileSuccess: 'Your profile has been successfully updated!',
  updateResourceSuccess: 'Your resource was successfully updated.',
  updateAdminConfigSuccess: 'Your configuration was saved successfully. You might need to refresh the page to see some changes.',
}
