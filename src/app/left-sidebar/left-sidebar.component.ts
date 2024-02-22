import { Component } from '@angular/core';

@Component({
	selector: 'app-left-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './left-sidebar.component.html',
	styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
	impLinks = [
		{ title: "Latest News", url: "https://i.postimg.cc/RCj4MjnC/news.png" },
		{ title: "Friends", url: "https://i.postimg.cc/MpBwMtV0/friends.png" },
		{ title: "Groups", url: "https://i.postimg.cc/44FRWj1b/group.png" },
		{ title: "Marketplace", url: "https://i.postimg.cc/0jh39RtT/marketplace.png" },
		{ title: "Watch", url: "https://i.postimg.cc/VsXHCTVk/watch.png" }
	]

	userShortcuts = [
		{ title: "Web Developers", url: "https://i.postimg.cc/3JHVf7vG/shortcut-1.png" },
		{ title: "Web Design course", url: "https://i.postimg.cc/rFCbvb1P/shortcut-2.png" },
		{ title: "Full Strack Development", url: "https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" },
		{ title: "Website Experts", url: "https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" }
	]
}
