const express = require('express');
const { addEmailToWaitlist, getWaitlistCount } = require('../Controllers/waitlistController');


const router = express.Router();

router.post("/waitlist", addEmailToWaitlist);
router.get("/waitlist/count", getWaitlistCount);

module.exports =router