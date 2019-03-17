import Joi from 'joi'

export default {
  updateConfig: {
    body: {
      baseUrl: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
      currency: Joi.string().uppercase().length(3).required(),
      defaultCity: Joi.string().required(),
      defaultCountry: Joi.string().required(),
      defaultLatitude: Joi.number().required(),
      defaultLongitude: Joi.number().required(),
      description: Joi.string().required(),
      festivalDateEnd: Joi.string().isoDate().required(),
      festivalDateStart: Joi.string().isoDate().required(),
      festivalTicketPrice: Joi.number(),
      gifStreamServerUrl: Joi.string().empty('').uri({ scheme: ['http', 'https'] }),
      googleMapApiKey: Joi.string().empty('').token(),
      isActivityStreamEnabled: Joi.boolean().required(),
      isAnonymizationEnabled: Joi.boolean().required(),
      isInboxEnabled: Joi.boolean().required(),
      isRandomMeetingEnabled: Joi.boolean().required(),
      isSignUpParticipantEnabled: Joi.boolean().required(),
      isSignUpVisitorEnabled: Joi.boolean().required(),
      mailAddressAdmin: Joi.string().email().required(),
      mailAddressRobot: Joi.string().email().required(),
      maximumParticipantsCount: Joi.number(),
      participationPrice: Joi.number(),
      timezone: Joi.string().required(),
      title: Joi.string().required(),
      transferBIC: Joi.string().empty(''),
      transferBankName: Joi.string().empty(''),
      transferIBAN: Joi.string().empty(''),
      transferReceiverName: Joi.string().empty(''),
      videoHomeId: Joi.string().empty(''),
      videoIntroductionId: Joi.string().empty(''),
    },
  },
}
