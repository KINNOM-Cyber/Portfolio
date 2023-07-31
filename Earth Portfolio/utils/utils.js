const constant = require("./constant")
const axios = require("axios").default

module.exports = {
    /**
     * 
     * @param {string} endpoint 
     * @param {{method: "GET" | "POST", data?: any, headers: object}} config 
     * @returns {{data, status, statusText, headers}}
     */
    makeRequest: function (endpoint, config = { method: "GET" }) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!endpoint) {
                    throw new Error("Endpoint is missing")
                }

                if (typeof config != "object") {
                    throw new TypeError("Invalid type of config")
                }

                const response = await axios(endpoint, config)
                const { data, status, statusText, headers } = response

                resolve({ data, status, statusText, headers })
            } catch (error) {
                // console.error(error)
                reject(error)
            }
        })
    },
    /**
     * 
     * @returns {{id: string, title: string, createdDate: string, modifiedDate: string}[]}
     */
    getCategorys: async function () {
        const { data, status } = await this.makeRequest(constant.getGoogleDriveEndPoint(constant.baseFileId))
        let collector = []

        if (!data || status != 200) {
            return null
        }

        const filterDriveFolder = Array.from(data.items).filter((d) => d.kind == "drive#file")

        if (!filterDriveFolder) {
            collector = []
        } else {
            filterDriveFolder.forEach((d) => {
                collector.push({ id: d?.id, title: d?.title.trim(), createdDate: d?.createdDate, modifiedDate: d?.modifiedDate })
            })
        }

        return collector
    },
    getItemsById: async function (id) {
        if (!id) {
            throw new Error("Id is missing")
        }

        const { data, status } = await this.makeRequest(constant.getGoogleDriveEndPoint(id))

        if (!data || status != 200) {
            throw new Error("Invalid data provided")
        }

        let collector = []

        
        Array.from(data.items).map((d) => {
            // d.webContentLink = d.webContentLink.split("&export")[0]
            collector.push({ id: d?.id, type: d?.mimeType, title: d?.title, metadata: d?.imageMediaMetadata, alternateLink: d?.alternateLink, embedLink: d?.embedLink, webContentLink: d?.webContentLink, thumbnailLink: d?.thumbnailLink })
        })

        return collector
    },

    /**
     * 
     * @param {string} url 
     */
    validateURL: function (url) {
        const googleImageDomains = new Set([
            'lh3.googleusercontent.com',
            'lh4.googleusercontent.com',
            'lh5.googleusercontent.com',
            'lh6.googleusercontent.com',
        ])

        if (!googleImageDomains.has(url)) {
            return true
        } else {
            return false
        }
    },

    paraserParams: function (params) {
        if (!params) {
            throw  new Error("Params is missing")
        }

        const searchParams = new URLSearchParams(params)

        if (!searchParams) {
            throw new Error("Invalid data provided")
        }

        let result = {}

        for (const [key, value] of searchParams.entries()) {
            result[key] = value
        }

        return result
    }

}