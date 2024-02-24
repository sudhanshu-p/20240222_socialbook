import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-right-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './right-sidebar.component.html',
	styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

	/** Holds all the events the user has signed up for */
	@Input() eventsList: Array<NearbyEvents> = []

	/** Holds the Ad on the Right Sidebar */
	@Input() sidebarAdURL: String = ""

	/** Holds profile info of top conversations */
	@Input() conversations: Array<User> = []
}