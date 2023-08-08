import { validateData, getImage } from "../utils/make-avatar.js";

const MakeAvatar = (req,res) => {
    // console.log("URL Queries:",req.query);
    let data = validateData(req.query)

    const generatedImage = getImage(data)
    res.status(200)
    res.end(generatedImage)
}

export { MakeAvatar };