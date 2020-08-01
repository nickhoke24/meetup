"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=chbgtis694on90her8a9p1vttu" +
    "&client_secret=1rv1ocjnf75o8gsji2mlfi6uiu" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://nickhoke24.github.io/meetup/" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
