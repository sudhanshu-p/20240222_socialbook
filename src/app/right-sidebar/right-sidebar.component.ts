import { Component } from '@angular/core';

@Component({
	selector: 'app-right-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './right-sidebar.component.html',
	styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

	eventsList = [
		{ date: 18, month: "March", title: "Social Media", location: "Willson Tech Park" },
		{ date: 22, month: "June", title: "Mobile Marketing", location: "Willson Tech Park" }
	]

	sidebarAdUrl = "https://i.postimg.cc/CLXYx9BL/advertisement.png"

	friendList = [
		{name: "Mamta", image_url: "https://theleaderspage.com/wp-content/uploads/2020/10/69036751_2655543887846269_4912322128440721408_o-980x980.jpg"},
		{name: "Jackson Aston", image_url: "https://i.postimg.cc/4NhqByys/member-2.png"},
		{name: "Samona Rose", image_url: "https://i.postimg.cc/FH5qqvkc/member-3.png"},
		{name: "Mike Perez", image_url: "https://i.postimg.cc/Sx65bPcP/member-4.png"}
	]
}