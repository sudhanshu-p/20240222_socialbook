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

	@Input() stories: Array<Story> = []
}