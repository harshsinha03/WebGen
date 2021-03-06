'use strict';
const nodemailer = require('nodemailer');
// Use .env in development mode, .env.production in production mode
const { emailConfig } = require('../../constants/EmailService');
const { logger } = require('../../logger/logger');

const getTransporter = () => nodemailer.createTransport(emailConfig);

const sendTextMail = async (to, subject, text = '', html = '') => {
  const transporter = getTransporter();
  const sentMessage = await transporter.sendMail({
    from: emailConfig.auth.user,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
  logger.info(`${to} || ${sentMessage.messageId}`);
};

const sendAttachmentMail = async (
  to,
  subject,
  text = '',
  html = '',
  attachments = [],
) => {
  const transporter = getTransporter();
  const sentMessage = await transporter.sendMail({
    from: emailConfig.auth.user,
    to: to,
    subject: subject,
    text: text,
    html: html,
    attachments: attachments,
  });
  logger.info(`${to} || ${sentMessage.messageId}`);
};

module.exports = { sendTextMail, sendAttachmentMail };
