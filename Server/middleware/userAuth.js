import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized: Login again" });
    }

    try {
        const tokendecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokendecode.userId) {
            req.body.userId = tokendecode.userId;  
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized: Login again" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default userAuth;