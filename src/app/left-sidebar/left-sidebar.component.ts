import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-left-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './left-sidebar.component.html',
	styleUrl: './left-sidebar.component.css'
})

export class LeftSidebarComponent {
	/** Don't need these to be abstracted, since they are part of UI
	 * The only reason they aren't hardcoded is easy of access.
	 */
	impLinks: Array<Link> = [
		{ title: "Latest News", url: "https://i.postimg.cc/RCj4MjnC/news.png" },
		{ title: "Friends", url: "https://i.postimg.cc/MpBwMtV0/friends.png" },
		{ title: "Groups", url: "https://i.postimg.cc/44FRWj1b/group.png" },
		{ title: "Marketplace", url: "https://i.postimg.cc/0jh39RtT/marketplace.png" },
		{ title: "Watch", url: "https://i.postimg.cc/VsXHCTVk/watch.png" }
	]

	@Input() userShortcuts: Array<Link> = []
}
