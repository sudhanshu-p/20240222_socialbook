import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-post-container',
	standalone: true,
	imports: [],
	templateUrl: './post-container.component.html',
	styleUrl: './post-container.component.css'
})
export class PostContainerComponent {
	/** This is just the default if there is an error in fetching new posts. */
	@Input() post: Post =
		{
			poster: {
				fname: "Devendra",
				lname: "Fadnavis",
				profileIcon: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
			},
			timestamp: "",
			caption: "Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href='#'>#VkiveTutorials</a> <a href='#'>#YoutubeChannel</a>",
			image_url: "",
			comment_count: 120, like_count: 45, share_count: 9
		}
}
