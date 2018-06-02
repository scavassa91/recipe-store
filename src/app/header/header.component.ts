import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() onSelectedPage = new EventEmitter<string>();

    selectPage (pageName) {
        this.onSelectedPage.emit(pageName);
    }
}