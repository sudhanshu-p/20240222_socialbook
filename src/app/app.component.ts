import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LeftContainerComponent } from './left-container/left-container.component'
// import { RightContainerComponent } from './right-container/right-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,
		// LeftContainerComponent,
		// RightContainerComponent
		NavbarComponent,
		LeftSidebarComponent,
		RightSidebarComponent,
		MainContentComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	/** Data of the user */
	readonly user: User = {
		fname: "Donald",
		lname: "Trump",
		profileIcon: "http://2.bp.blogspot.com/-pUJdrhSqMuk/USS0opBBxXI/AAAAAAAAbVc/t2KV65EEFhA/s1600/Salman-Khan-1.jpg"
	}

	/** Shortcuts that are specific to the user. */
	readonly userShortcuts: Array<Link> = [
		{ title: "Hyderabad Foods", url: "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg" },
		{ title: "HTML Engineering course", url: "https://3.bp.blogspot.com/-RaQkWMDZh2M/VxNsYbqan6I/AAAAAAAACSQ/vNUFQVEmiaAgQTgnx3WUY7U7Tq5G9gvKgCLcB/s1600/html-editor-.png" },
		{ title: "Full Strack Development", url: "https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" },
		{ title: "Website Experts", url: "https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" }
	]

	/** All the posts on a user's homepage */
	readonly posts: Array<Post> = [
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: "",
			caption: "Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI desings. #VkiveTutorials #YoutubeChannel",
			image_url: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
			comment_count: 120, like_count: 45, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholso",
			timestamp: "",
			caption: 'Like and share this video with friends, tag @Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
			image_url: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png",
			comment_count: 812, like_count: 1928, share_count: 2
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: "",
			caption: 'Like and share this video with friends, tag @Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
			image_url: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png",
			comment_count: 73, like_count: 4, share_count: 62
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: "",
			caption: 'Like and share this video with friends, tag @Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
			image_url: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png",
			comment_count: 9, like_count: 9, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: "",
			caption: 'Like and share this video with friends, tag @Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
			image_url: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png",
			comment_count: 9, like_count: 9, share_count: 9
		}
	]

	/** The top conversations for this user */
	readonly conversationList: Array<User> = [
		{ fname: "Mamta", lname: "Didi", profileIcon: "https://theleaderspage.com/wp-content/uploads/2020/10/69036751_2655543887846269_4912322128440721408_o-980x980.jpg" },
		{ fname: "Jackson", lname: "Aston", profileIcon: "https://i.postimg.cc/4NhqByys/member-2.png" },
		{ fname: "Samona", lname: "Rose", profileIcon: "https://i.postimg.cc/FH5qqvkc/member-3.png" },
		{ fname: "Mike", lname: "Perez", profileIcon: "https://i.postimg.cc/Sx65bPcP/member-4.png" }
	]

	/** All the events the user has signed up for. */
	readonly eventsList: Array<NearbyEvents> = [
		{ date: 18, month: "March", title: "Social Media", location: "Willson Tech Park" },
		{ date: 22, month: "June", title: "Mobile Marketing", location: "Willson Tech Park" }
	]

	readonly sidebarAdURL: String = "https://i.postimg.cc/CLXYx9BL/advertisement.png"

	/** Holds the stories information. */
	readonly stories: Array<Story> = [
		{
			id: 2,
			story_image_url: "https://theleaderspage.com/wp-content/uploads/2020/10/69036751_2655543887846269_4912322128440721408_o-980x980.jpg",
			profile_image_url: "https://theleaderspage.com/wp-content/uploads/2020/10/69036751_2655543887846269_4912322128440721408_o-980x980.jpg",
			user_name: "Mamta"
		},
		{
			id: 3,
			story_image_url: "https://assets.telegraphindia.com/telegraph/2906988a-88db-4bfe-b04f-36f76ac64591.jpg",
			profile_image_url: "https://ourneta.com/wp-content/uploads/2020/01/DEVENDRA-GANGADHARRAO-FADNAVIS.jpg",
			user_name: "Devendra"
		},
		{ id: 4, story_image_url: "https://i.postimg.cc/3J7fCBsC/status-4.png", profile_image_url: "https://i.postimg.cc/FH5qqvkc/member-3.png", user_name: "Samona" },
		{ id: 5, story_image_url: "https://i.postimg.cc/9Fp8x9V3/status-5.png", profile_image_url: "https://i.postimg.cc/Sx65bPcP/member-4.png", user_name: "John Doe" },
	]
}
