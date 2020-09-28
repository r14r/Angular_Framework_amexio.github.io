import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconLoaderService } from '../../../index';
import { GaugeChartComponent } from './gauge.chart.component';
import { DashboardLoaderService } from '../chart.loader.service';

describe('amexio-gauge-chart-dataPoint', () => {
    let comp: GaugeChartComponent;
    let fixture: ComponentFixture<GaugeChartComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [GaugeChartComponent],
            providers: [IconLoaderService, DashboardLoaderService],
        });
        fixture = TestBed.createComponent(GaugeChartComponent);
        comp = fixture.componentInstance;

    });

    it('check data variable', () => {
        let data: any;

        expect(comp.data).toBe(comp._data);
        comp.showChart = true;
        expect(comp.showChart).toBe(true);
        comp.showChart = true;
        expect(comp.showChart).toBe(true);

    });
    it('show chart', () => {

        comp.showChart = false;
        //comp.title = '';
        expect(false).toBe(comp.showChart);
        let newdata = [{ 'name': 'linechart' }];
        comp.data = newdata;
    });
    it('onResize()', () => {
        comp.onResize(ComponentFixture);
        comp.drawChart();
    });
    it('ngOnInit()', () => {
        comp.ngOnInit();
        expect(false).toBe(comp.hasLoaded);
    comp.drawChart();
    });


});


