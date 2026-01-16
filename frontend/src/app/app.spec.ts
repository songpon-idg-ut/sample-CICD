import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'Sample CICD App' title`, () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        // @ts-ignore
        expect(app.title()).toEqual('Sample CICD App');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Sample CICD App');
    });
});
