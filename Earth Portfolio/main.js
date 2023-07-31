(function () {
    // const showcaseBody = document.querySelector(".showcase__body")
    const categoryPills = Array.from(document.querySelectorAll(".pill"))

    categoryPills.forEach((pill) => {
        const radio = pill.querySelector("input[name='category'][type='radio']")
        radio.addEventListener("input", async (e) => {
            const label = document.querySelector(`div.pill label[for='${e.target.id}']`)
            label.innerHTML += '<span class="loader"></span>'
            const i = await getItems(e.target.value)
            initItem(i)
            label.textContent = e.target.title
        })
    })

    function groupData(array = [], length = 3) {
        const groupSize = Math.ceil(array.length / 3);

        const groups = Array.from({ length }, () => []);

        for (let i = 0; i < array.length; i++) {
            const groupIndex = Math.floor(i / groupSize);
            groups[groupIndex].push(array[i]);
        }

        return groups
    }

    async function getItems(id) {
        const params = new URLSearchParams()
        params.set("categoryId", id)
        try {
            const request = await fetch("/request", {
                method: "POST",
                body: params
            })
            return await request.json()
        } catch (error) {
            console.error(error)
        }
    }

    function initItem(items) {
        const row = document.querySelector(".row")
        const groups = groupData(items)
        const elements = []

        groups.map((g) => {
            if (g.length != 0) {
                const column = document.createElement("div")
                column.classList.add("column")

                g.map((x) => {
                    if (x.type == "image/jpeg") {
                        const image = new Image()
                        const uri = x.thumbnailLink.split("=s")[0]
                        image.src = `/image/${uri.split("/")[3]}`
                        column.append(image)

                    } else if (x.type == "video/mp4") {
                        const iframeWrapper = document.createElement("div")
                        const iframe = document.createElement("iframe")
                        iframeWrapper.classList.add("iframe__wrapper")
                        iframe.src = x.embedLink
                        iframeWrapper.append(iframe)
                        column.append(iframeWrapper)
                    } else if (x.type == "application/pdf") {
                        const object = document.createElement("object")
                        object.data = x.webContentLink
                        object.type = x.type
                        object.border = 0
                        column.append(object)
                    }

                    elements.push(column)
                })
            }
        })
        // console.log(elements)
        row.replaceChildren(...elements)
    }

    function convertToBase64(blob) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise(resolve => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
    }

    Array.from(document.querySelectorAll(".nav__btn")).forEach((el) => {
        el.addEventListener("click", (e) => {
            const value = e.target.value
            console.log(e.target)
            if (value && /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(value)) {
                window.open(value, "_blank")
            }
        })
    })
})()