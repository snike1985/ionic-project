import {Animation, PageTransition} from 'ionic-angular';

export class ModalLeaveDirect extends PageTransition {

    public init() {
        super.init();

        const ele = this.leavingView.pageRef().nativeElement;
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        const wrapperEle = ele.querySelector('.modal-wrapper');
        const wrapper = new Animation(this.plt, wrapperEle);

        wrapper.fromTo('display', 'none', 'none');
        backdrop.fromTo('display', 'none', 'none');

        this
            .element(this.leavingView.pageRef())
            .easing('none')
            .duration(0)
            .add(backdrop)
            .add(wrapper);
    }
}
