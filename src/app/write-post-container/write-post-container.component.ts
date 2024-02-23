import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-write-post-container',
	standalone: true,
	imports: [],
	templateUrl: './write-post-container.component.html',
	styleUrl: './write-post-container.component.css'
})
export class WritePostContainerComponent {
	// User is taken as param from parent. 
	// This is just the default fallback value 
	@Input() user: User = {
		fname: "Error",
		lname: "404",
		profileIcon: "error.jpg"
	}
}
