/*
* Copyright [2019] [Metamagic]
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'amexio-layout-item',
    template: `
        <ng-content></ng-content>
    `,
})
export class AmexioLayoutItemComponent implements OnInit {

    @Input('fit') fit: boolean;

    @Input('padding') padding: string;

    @HostBinding('style.flex-grow') public flexgrow: number;

    @HostBinding('style.padding') public lipadding: string;

    ngOnInit() {
        if (this.fit) {
            this.flexgrow = 1;
        }
        if (this.padding) {
            this.lipadding = this.padding;
        }
    }
}
