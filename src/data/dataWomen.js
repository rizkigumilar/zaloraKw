const data = [
    {
        id: "1",
        productName: "item 1",
        image_url: "https://dynamic.zacdn.com/udckvp6yJpV1TshlK621DIUyEhg=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bodytalk-4164-5817591-4.jpg",
        image_url2: "https://dynamic.zacdn.com/HpZrI00XMFDji6-4VOkPFOc32r8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bodytalk-4163-5817591-1.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "2",
        productName: "item 2",
        image_url: "https://dynamic.zacdn.com/juK3GMj35N41sFQoveidLojmGiU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-7972-4642261-1.jpg",
        image_url2: "https://dynamic.zacdn.com/0DQB1hv1nMeR4syR3UD26aKWOjA=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-7972-4642261-2.jpg",
        productPrice: "Rp 295.000",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "3",
        productName: "item 3",
        image_url: "https://dynamic.zacdn.com/0L9wvn0o3OuOfgNYCYMteUD64TU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-8600-0632261-1.jpg",
        image_url2: "https://dynamic.zacdn.com/0mepF5lG9mlb171eM0vP72C9wFE=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-8601-0632261-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "4",
        productName: "item 1",
        image_url: "https://dynamic.zacdn.com/udckvp6yJpV1TshlK621DIUyEhg=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bodytalk-4164-5817591-4.jpg",
        image_url2: "https://dynamic.zacdn.com/HpZrI00XMFDji6-4VOkPFOc32r8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/bodytalk-4163-5817591-1.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "5",
        productName: "item 2",
        image_url: "https://dynamic.zacdn.com/juK3GMj35N41sFQoveidLojmGiU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-7972-4642261-1.jpg",
        image_url2: "https://dynamic.zacdn.com/0DQB1hv1nMeR4syR3UD26aKWOjA=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-7972-4642261-2.jpg",
        productPrice: "Rp 295.000",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "6",
        productName: "item 3",
        image_url: "https://dynamic.zacdn.com/0L9wvn0o3OuOfgNYCYMteUD64TU=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-8600-0632261-1.jpg",
        image_url2: "https://dynamic.zacdn.com/0mepF5lG9mlb171eM0vP72C9wFE=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-8601-0632261-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"

    },
    {
        id: "7",
        productName: "item 7",
        image_url: "https://dynamic.zacdn.com/fGZYd0-NEnpA29SwF1uagsPXZ_Y=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9128-7882461-1.jpg",
        image_url2: "https://dynamic.zacdn.com/m6xD8VwTThUOQS1wyCX96PX4wg0=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9129-7882461-2.jpg",
        image_url3: "https://dynamic.zacdn.com/9SgLK1K5HDvn3Okux1jyVcvdeck=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9130-7882461-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    {
        id: "8",
        productName: "item 8",
        image_url: "https://dynamic.zacdn.com/5rnyiBqIMh7fH0AA7zTHH5Pu0rk=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-3710-8882461-1.jpg",
        image_url2: "https://dynamic.zacdn.com/IYuSdReLcnLJLHUYQvtM1Zub-Dk=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-3710-8882461-2.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    {
        id: "9",
        productName: "item 9",
        image_url: "https://dynamic.zacdn.com/cpsMitdRlblsk6hV49shODgtfhQ=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-3157-7946341-2.jpg",
        image_url2: "https://dynamic.zacdn.com/OoY9uGh_KoZWnKO4I6jJ9UTCNz0=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-3157-7946341-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    {
        id: "10",
        productName: "item 7",
        image_url: "https://dynamic.zacdn.com/fGZYd0-NEnpA29SwF1uagsPXZ_Y=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9128-7882461-1.jpg",
        image_url2: "https://dynamic.zacdn.com/m6xD8VwTThUOQS1wyCX96PX4wg0=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9129-7882461-2.jpg",
        image_url3: "https://dynamic.zacdn.com/9SgLK1K5HDvn3Okux1jyVcvdeck=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-9130-7882461-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    {
        id: "11",
        productName: "item 8",
        image_url: "https://dynamic.zacdn.com/5rnyiBqIMh7fH0AA7zTHH5Pu0rk=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-3710-8882461-1.jpg",
        image_url2: "https://dynamic.zacdn.com/IYuSdReLcnLJLHUYQvtM1Zub-Dk=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/pavillion-3710-8882461-2.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    },
    {
        id: "12",
        productName: "item 9",
        image_url: "https://dynamic.zacdn.com/cpsMitdRlblsk6hV49shODgtfhQ=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-3157-7946341-2.jpg",
        image_url2: "https://dynamic.zacdn.com/OoY9uGh_KoZWnKO4I6jJ9UTCNz0=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/zalora-3157-7946341-4.jpg",
        productPrice: "Rp 129.500",
        description: `Lorem ipsum dolor sit amet`,
        category: "wanita"
    }
]

export default data
