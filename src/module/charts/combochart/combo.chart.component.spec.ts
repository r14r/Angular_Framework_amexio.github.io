// import { ComboChartComponent } from './combo.chart.component';
// import { FormsModule } from '@angular/forms';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChartLoaderService } from './../chart.loader.service';
// import { ChartTitleComponent } from '../charttitle/chart.title.component';
// import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
// import { ChartAreaComponent } from '../chartarea/chart.area.component';
// import { VerticalAxisComponent } from '../verticalaxis/chart.verticalaxis.component';
// import { HorizontalAxisComponent } from '../horizontalaxis/chart.horizontalaxis.component';

// declare var google: any;
// describe('COMBO CHART', () => {
//     let combochartcomp: ComboChartComponent;
//     let charttitlecomp: ChartTitleComponent;
//     let chartlegendcomp: ChartLegendComponent;
//     let chartareacomp: ChartAreaComponent;
//     let chartvercomp: VerticalAxisComponent;
//     let charthorcomp: HorizontalAxisComponent;
//     let linefixture: ComponentFixture<ComboChartComponent>;
//     let charttitlefixture: ComponentFixture<ChartTitleComponent>;
//     let chartlegendfixture: ComponentFixture<ChartLegendComponent>;
//     let chartareafixture: ComponentFixture<ChartAreaComponent>;
//     let chartverfixture: ComponentFixture<VerticalAxisComponent>;
//     let charthorfixture: ComponentFixture<HorizontalAxisComponent>;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [FormsModule],
//             declarations: [ComboChartComponent, ChartTitleComponent, ChartLegendComponent, ChartAreaComponent, VerticalAxisComponent, HorizontalAxisComponent],
//             providers: [ChartLoaderService]
//         }).compileComponents();
//         linefixture = TestBed.createComponent(ComboChartComponent);
//         charttitlefixture = TestBed.createComponent(ChartTitleComponent);
//         chartlegendfixture = TestBed.createComponent(ChartLegendComponent);
//         chartareafixture = TestBed.createComponent(ChartAreaComponent);
//         chartverfixture = TestBed.createComponent(VerticalAxisComponent);
//         charthorfixture = TestBed.createComponent(HorizontalAxisComponent);
//         combochartcomp = linefixture.componentInstance;
//         charttitlecomp = charttitlefixture.componentInstance;
//         chartlegendcomp = chartlegendfixture.componentInstance;
//         chartareacomp = chartareafixture.componentInstance;
//         chartvercomp = chartverfixture.componentInstance;
//         charthorcomp = charthorfixture.componentInstance;
//         combochartcomp.chartTitleComponent = charttitlecomp;
//         combochartcomp.chartLengendComponent = chartlegendcomp;
//         combochartcomp.chartAreaComponent = chartareacomp;
//         combochartcomp.verticalComponent = chartvercomp;
//         combochartcomp.horizontalComponent = charthorcomp;

//     });
//     it('show chart', () => {
//         combochartcomp.chartAreaComponent = chartareacomp;
//         combochartcomp.showChart = false;
//         charttitlecomp.title = '';
//         expect(false).toBe(combochartcomp.showChart);
//         let newdata = [{ 'name': 'linechart' }];
//         combochartcomp.data = newdata;
//     });
//     it('dont show chart', () => {
//         combochartcomp.showChart = false;
//         expect(false).toBe(combochartcomp.showChart);
//     });
//     it('chartTitleTextStyle() properties', () => {
//         charttitlecomp.color = '';
//         charttitlecomp.fontname = '';
//         charttitlecomp.fontsize = 10;
//         charttitlecomp.bold = false;
//         charttitlecomp.position = '';
//         charttitlecomp.title = '';
//         charttitlecomp.italic = false;
//     });
//     it('chartLegendStyle() properties', () => {
//         chartlegendcomp.position = '';
//         chartlegendcomp.alignment = '';
//         chartlegendcomp.color = '';
//         chartlegendcomp.fontname = '';
//         chartlegendcomp.fontsize = '';
//         chartlegendcomp.bold = false;
//         chartlegendcomp.maxlines = null;
//     });
//     it('chartBackgroundStyle() properties', () => {
//         chartareacomp.chartbackgroundcolor = '';
//         chartareacomp.chartheight = 10;
//         chartareacomp.chartwidth = 10;
//         chartareacomp.leftposition = 10;
//         chartareacomp.topposition = null;

//     });

//     it('chartTitleStyle()', () => {
//         combochartcomp.chartTitleStyle();
//         combochartcomp.chartTitleComponent.color = 'red';
//         combochartcomp.chartTitleComponent.fontname = 'times new roman';
//         combochartcomp.chartTitleComponent.fontsize = 5;
//         combochartcomp.chartTitleComponent.bold = true;
//         combochartcomp.chartTitleComponent.italic = true;
//         combochartcomp.chartTitleStyle();
//     });
//     it('chartLegendStyle()', () => {
//         combochartcomp.chartLengendComponent.position = 'left';
//         combochartcomp.chartLengendComponent.maxlines = 5;
//         combochartcomp.chartLengendComponent.color = 'black';
//         combochartcomp.chartLengendComponent.fontsize = '12';
//         combochartcomp.chartLengendComponent.alignment = 'center';
//         combochartcomp.chartLengendComponent.fontname = 'times';
//         combochartcomp.chartLengendComponent.bold = true;
//         combochartcomp.chartLegendStyle();

//     });
//     it('chartVerticalStyle()', () => {
//         chartvercomp.title = '';
//         chartvercomp.titlecolor = '';
//         combochartcomp.chartVerticalStyle();
//     });
//     it('chartHorizontalStyle()', () => {
//         charthorcomp.title = '';
//         charthorcomp.titlecolor = '';
//         combochartcomp.chartHorizontalStyle();
//     })
//     it('chartBackgroundStyle()', () => {
//         combochartcomp.chartAreaComponent.chartbackgroundcolor = 'red';
//         combochartcomp.chartAreaComponent.chartheight = 50;
//         combochartcomp.chartAreaComponent.chartwidth = 100;
//         combochartcomp.chartAreaComponent.leftposition = null;
//         combochartcomp.chartBackground();
//     });

//     it('get data method', () => {
//         combochartcomp.data;
//         expect(combochartcomp.data).toBe(combochartcomp._data);
//     });
//     it('ngOnInit()', () => {
//         combochartcomp.ngOnInit();
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://www.gstatic.com/charts/loader.js';
//         script.async = false;
//         script.defer = true;
//         script.onload = () => {
//             combochartcomp.showChart = true;
//             const newdata = [{ name: 'linechart' }];
//             combochartcomp.data = newdata;
//             combochartcomp.drawChart();
//             expect(false).toBe(combochartcomp.hasLoaded);
//         };
//     });

//     it('Draw Chart Test', () => {
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://www.gstatic.com/charts/loader.js';
//         script.async = false;
//         script.defer = true;
//         script.onload = () => {
//             combochartcomp.showChart = true;
//             const newdata = [{ name: 'linechart' }];
//             combochartcomp.data = newdata;
//             combochartcomp.drawChart();
//             expect(false).toBe(combochartcomp.hasLoaded);
//         };
//     });
//     it('onResize()', () => {
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://www.gstatic.com/charts/loader.js';
//         script.async = false;
//         script.defer = true;
//         script.onload = () => {
//             combochartcomp.showChart = true;
//             const newdata = [{ name: 'linechart' }];
//             combochartcomp.data = newdata;
//             combochartcomp.onResize(ComponentFixture);
//             combochartcomp.drawChart();
//             expect(false).toBe(combochartcomp.hasLoaded);
//         };
//     });
// });






