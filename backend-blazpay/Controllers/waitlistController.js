const Waitlist = require('../Models/Waitlist')
exports . addEmailToWaitlist = async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    try {
        // Check if email already exists
        const existing = await Waitlist.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Email already in waitlist" });
        }

        // Save email to DB
        const newEntry = new Waitlist({ email });
        await newEntry.save();

        res.status(200).json({ message: "Email added to waitlist successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};


exports . getWaitlistCount = async (req, res) => {
    try {
        const count = await Waitlist.countDocuments();
        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

