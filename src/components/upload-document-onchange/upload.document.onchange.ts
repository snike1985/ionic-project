import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

import {ScanPage} from '../../pages/scan/scan';

import {uploadFilesConfig} from '../../shared/configs/upload.files.config';
import {VisibilityChanged} from '../../shared/configs/animations.config';

interface IuploadConfig {
    btnText: string;
    iconName: string;
    blockTitle?: string;
    blockHelper?: {
        title: string;
        text: string;
    };
}

@Component({
    selector: 'jb-upload-document-onchange',
    templateUrl: 'upload.document.onchange.html',
    animations: [VisibilityChanged]
})
export class UploadDocumentComponentOnchange implements OnInit {

    @Input() public data: any;

    @Output() public uloadedImageLength = new EventEmitter();

    public images: any[] = [];
    public config: IuploadConfig;
    public tooltipIsVisible: boolean = false;

    constructor(public actionSheetCtrl: ActionSheetController,
                private navCtrl: NavController,
                private camera: Camera) {
    }

    public presentActionSheet() {

        let curTitle: string;

        switch (this.data.type) {
            case 'id':
                curTitle = 'Add ID';
                break;
            case 'address':
                curTitle = 'Add Proof of Address';
                break;
            case 'selfie':
                curTitle = 'Add your Selfie';
                break;
        }

        const actionSheet = this.actionSheetCtrl.create({
            title: curTitle,
            buttons: [
                {
                    text: 'Take a picture',
                    handler: () => {
                        this.takePhoto();
                    }
                },
                {
                    text: 'Choose from gallery',
                    handler: () => {
                        this.takeFromGallery();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });

        actionSheet.present();
    }

    public toggleHelpText() {
        this.tooltipIsVisible = !this.tooltipIsVisible;
    }

    public deleteItem(index: any) {
        this.images.splice(index, 1);
        this.checkDisabled();
    }

    public sendImages() {

        if (this.data.type === 'id') {

            this.navCtrl.push(ScanPage,
                {
                    image: this.images[0],
                    title: 'Validating ID',
                    data: this.data
                });

        } else if (this.data.type === 'address') {

            this.data['isPending'] = true;
        }
    }

    public setImagesArr(dataUrl: string) {

        this.images.push({
            name: `image_${this.images.length}`,
            url: 'data:image/jpeg;base64,' + dataUrl,
            isLoad: true,
            isError: false
        });
        this.checkDisabled();
    }

    public checkDisabled() {

        let count = 0;

        this.images.forEach((image) => {

            if (image.isLoad) {
                count++;
            }
        });

        this.uloadedImageLength.emit(count);

        return !(this.images.length && count === this.images.length);
    }

    public ngOnInit() {
        this.config = uploadFilesConfig[this.data.type];
    }

    private chooseImage(type: string) {

        const options: CameraOptions = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };

        this.camera.getPicture(options).then((imageData) => {
            this.setImagesArr(imageData);

        }, (err) => {
            console.log('err', err);
        });
    }

    private takePhoto() {

        this.chooseImage('camera');
    }

    private takeFromGallery() {

        this.chooseImage('gallery');
    }
}
