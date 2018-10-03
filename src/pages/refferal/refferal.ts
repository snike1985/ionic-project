import {AfterContentChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisibilityChanged} from '../../shared/configs/animations.config';

@IonicPage()
@Component({
    selector: 'jb-page-refferal',
    templateUrl: 'refferal.html',
    animations: [VisibilityChanged]
})
export class RefferalPage implements AfterContentChecked {

    public height: number;
    public fixed: boolean = false;
    public isLoad: boolean = false;
    public tabs = [
        {
            name: 'Invite',
            isActive: true
        },
        {
            name: 'Link',
            isActive: false
        }
    ];
    public curTab: string;
    public invitedModel: any[] = [
        {
            email: 'greenholt.katrine@gmail.com',
            status: 'sent',
            income: '0'
        },
        {
            email: 'lane_herman@art.com',
            status: 'reg',
            income: '0'
        },
        {
            email: 'kyla@friesen.com',
            status: 'income',
            income: '25'
        },
        {
            email: 'greenholt.katrine@gmail.com',
            status: 'sent',
            income: '0'
        },
        {
            email: 'lane_herman@art.com',
            status: 'reg',
            income: '0'
        },
        {
            email: 'kyla@friesen.com',
            status: 'income',
            income: '25'
        },
        {
            email: 'greenholt.katrine@gmail.com',
            status: 'sent',
            income: '0'
        },
        {
            email: 'lane_herman@art.com',
            status: 'reg',
            income: '0'
        },
        {
            email: 'kyla@friesen.com',
            status: 'income',
            income: '25'
        },
        {
            email: 'greenholt.katrine@gmail.com',
            status: 'sent',
            income: '0'
        },
        {
            email: 'lane_herman@art.com',
            status: 'reg',
            income: '0'
        },
        {
            email: 'kyla@friesen.com',
            status: 'income',
            income: '25'
        },
    ];
    public linksModel: any[] = [
        {
            url: 'https://jubiter.com/referral/cryptoman',
            name: 'Basic referral link',
            clicks: '4 678',
            regs: '57',
            deposits: '4',
            earned: '100',
        }
    ];

    @ViewChild(Content) public content: Content;
    @ViewChild('tabsNavigate') private tabsControls: ElementRef;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {

        this.fixed = false;

        this.setActiveTab();
    }

    public toggleTab(activeTab: any) {

        this.tabs.forEach((element) => {
            element.isActive = false;
        });

        activeTab.isActive = true;

        this.curTab = activeTab.name;

        this.content.scrollToTop();
    }

    public onScroll() {

        const curScroll = this.content.scrollTop;

        this.checkTabsControls(curScroll);
        this.lazyLoad(curScroll);

    }

    public ionViewDidLoad() {
        this.height = this.tabsControls.nativeElement.offsetHeight;
    }

    public ngAfterContentChecked() {
        this.checkTabsControls(this.content.scrollTop);
    }

    private setActiveTab() {

        this.tabs.forEach((element) => {

            if (element.isActive) {

                this.curTab = element.name;
            }
        });
    }

    private checkTabsControls(curScroll: number) {

        const elem = this.tabsControls.nativeElement;

        if (curScroll >= elem.offsetTop && !this.fixed) {
            this.fixed = true;
        }

        if (curScroll < elem.offsetTop && this.fixed) {
            this.fixed = false;
        }
    }

    private lazyLoad(curScroll: number) {

        const contentHeight = this.content.contentHeight;
        const scrollHeight = this.content.scrollHeight;

        if (scrollHeight === contentHeight + curScroll) {
            this.isLoad = true;

            setTimeout(() => {
                this.isLoad = false;
            }, 1000);
        }
    }

}
