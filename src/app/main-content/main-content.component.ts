import { Component } from '@angular/core';
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

}
