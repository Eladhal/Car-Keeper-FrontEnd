import {Component, OnInit} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';
import {HttpUserService} from '../../../services/user/http-user.service';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, DynamicComponentInterface {

    data: any;
    Image: any;

    constructor(private httpUserService: HttpUserService, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.httpUserService.getUser().subscribe(userFromDb => {
            this.httpUserService.getImage().subscribe(image => {

                const arrayBufferView = new Uint8Array(image);
                const blob = new Blob([arrayBufferView], {type: 'image/jpeg'});
                console.log(blob);
                const urlCreator = window.URL;
                const imageUrl = urlCreator.createObjectURL(blob);
                this.Image = imageUrl;


                // console.log(image);
                // this.Image = `'data:image/jpeg;base64,' + ${image.data}`;
                // this.data = userFromDb;
            });
        });
    }
}
