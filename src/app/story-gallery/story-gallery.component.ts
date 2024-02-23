import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-story-gallery',
	standalone: true,
	imports: [],
	templateUrl: './story-gallery.component.html',
	styleUrl: './story-gallery.component.css'
})
export class StoryGalleryComponent {

	// User is taken as param from parent. 
	// This is just the default fallback value 
	@Input() user: User = {
		fname: "Error",
		lname: "404",
		profileIcon: "error.jpg"
	}

	profile_img_url = "https://i.postimg.cc/TPh453Zz/upload.png"

	user_story_image_url = "https://i.postimg.cc/W4KfGPVh/status-1.png"

	getStyleExpression(id: number) {
		return 'background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url('
			+ this.stories[id - 2].story_image_url + ');'
	}

	getUserStoryStyles() {
		return 'background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url('
			+ this.user.profileIcon + ');'
	}

	stories = [
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