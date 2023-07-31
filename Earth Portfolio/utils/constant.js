require("dotenv").config()

module.exports = {
    baseFileId: "1wVk010rz_mk4Ml0WxZWJu2EIA7pOEP6L",
    googleImageBaseURL: 'https://lh6.googleusercontent.com/',
    endpoint: {
        getVideoInfo: 'https://drive.google.com/get_video_info?docid='
    },
    // GOOGLE_DRIVE_ENDPOINT: `https://www.googleapis.com/drive/v2/files?q='1wVk010rz_mk4Ml0WxZWJu2EIA7pOEP6L'+in+parents&key=${process.env.API_KEY}`,
    getGoogleDriveEndPoint: function(id) {
        const endpoint = `https://www.googleapis.com/drive/v2/files?q='${id}'+in+parents&key=${process.env.API_KEY}`
        return endpoint
    }
}