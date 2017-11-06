import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import scrollView = require("tns-core-modules/ui/scroll-view");

declare var CGPointMake;

@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {

    public items = [];

    @ViewChild("scrollViewHorizontal1") public _scrollViewHorizontal1: ElementRef;
    @ViewChild("scrollViewHorizontal2") public _scrollViewHorizontal2: ElementRef;
    @ViewChild("scrollViewVertical1") public _scrollViewVertical1: ElementRef;
    @ViewChild("scrollViewVertical2") public _scrollViewVertical2: ElementRef;
    
    private scrollViewVertical1: ScrollView;
    private scrollViewVertical2: ScrollView;
    private scrollViewHorizontal1: ScrollView;
    private scrollViewHorizontal2: ScrollView;
    public native = false;
    
    ngOnInit(): void {
        this.scrollViewHorizontal1 = this._scrollViewHorizontal1.nativeElement;
        this.scrollViewHorizontal2 = this._scrollViewHorizontal2.nativeElement;
        this.scrollViewVertical1 = this._scrollViewVertical1.nativeElement;
        this.scrollViewVertical2 = this._scrollViewVertical2.nativeElement;
        
        this.items = [];
        for (var count = 0; count < 30; count++) {
            this.items.push(count.toString());
        }
    }

    public scrollHorizontal(args: scrollView.ScrollEventData) {
        if (this.native) {
            this.scrollViewHorizontal2.ios.contentOffset = CGPointMake(this.scrollViewHorizontal1.ios.contentOffset.x, 0);
        } else {
            this.scrollViewHorizontal2.scrollToHorizontalOffset(args.scrollX, false);
        }
    }

    public scrollVertical(args: scrollView.ScrollEventData) {
        if (this.native) {
            this.scrollViewVertical2.ios.contentOffset = CGPointMake(0, this.scrollViewVertical1.ios.contentOffset.y);
        } else {
           this.scrollViewVertical2.scrollToVerticalOffset(args.scrollY, false);
        }
    }

    public switchNative(value): void {
        this.native = value;
    }
            
    
}