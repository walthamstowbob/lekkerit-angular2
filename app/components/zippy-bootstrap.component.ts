import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy-bootstrap',
    template: `
    
    <div class="col-md-3">
    <div class="zippy">
        <div
            class="zippy-heading"
            (click)="toggle()">    
            {{ heading }}
        <i 
            class="pull-right glyphicon"
            [ngClass]="
                {
                    'glyphicon-chevron-down': !isExpanded,
                    'glyphicon-chevron-up': !isExpanded
                }">
        </i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">

        <div class="media">
        <div class="media-middle">
            <iframe 
                class="media-object" src="http://www.lekkerit.com" width="600" height="325" frameborder="0" allowfullscreen>
            </iframe>
                <a href="http://www.lekkerit.com" target="_blank" class="btn btn-primary">Bootstrap</a>

        </div>
        </div>
        <ng-content></ng-content>
        </div>
    </div>
    </div>
    
        `,        
})

export class ZippyBootstrapComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}