interface User {
    fname: String,
    lname: String,
    profileIcon: String
}

interface Link {
    title: String,
    url: String
}

interface Post {
    poster: User,
    timestamp: String,
    caption: String,
    image_url: String,
    comment_count: number, like_count: number, share_count: number
}

interface NearbyEvents {
    date: number,
    month: String,
    title: String,
    location: String
}

interface Story {
    id: number,
    story_image_url: String,
    poster: User
}