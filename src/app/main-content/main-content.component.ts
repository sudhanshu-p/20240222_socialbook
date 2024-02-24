import { Component, Input } from '@angular/core';
import { StoryGalleryComponent } from '../story-gallery/story-gallery.component';
import { WritePostContainerComponent } from '../write-post-container/write-post-container.component';
import { PostContainerComponent } from '../post-container/post-container.component';

@Component({
	selector: 'app-main-content',
	standalone: true,
	imports: [
		StoryGalleryComponent,
		WritePostContainerComponent,
		PostContainerComponent
	],
	templateUrl: './main-content.component.html',
	styleUrl: './main-content.component.css'
})

export class MainContentComponent {
	// User is taken as param from parent. 
	// This is just the default fallback value 
	@Input() user: User = {
		fname: "Error",
		lname: "404",
		profileIcon: "error.jpg"
	}

	/** Holds information for all the posts to be displayed */
	@Input() posts: Array<Post> = []

	/** Holds information for all the stories to be displayed */
	@Input() stories: Array<Story> = []
}