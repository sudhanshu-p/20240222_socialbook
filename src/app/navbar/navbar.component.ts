import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	/** User data, to be displayed in settings menu. */
	@Input() user: User = {
		fname: "User",
		lname: "007",
		profileIcon: "error.jpg"
	}

	/** Javascript for the UI */
	/** Stores if settings menu is open or not. */
	settingsMenuOpen = false
	/** Toggles the settings menu */
	toggleSettingsMenu() {
		this.settingsMenuOpen = !this.settingsMenuOpen
	}
}
