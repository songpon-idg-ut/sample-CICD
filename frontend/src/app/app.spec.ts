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

    it('should render title in header', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#title')?.textContent).toContain('Sample CICD App');
    });

    it('should render navigation menu', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const navMenu = compiled.querySelector('#nav-menu');
        expect(navMenu).toBeTruthy();
    });

    it('should have Home link in navigation', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#nav-menu')?.textContent).toContain('Home');
    });

    it('should have Features link in navigation', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#nav-menu')?.textContent).toContain('Features');
    });

    it('should render login form', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#login-form')).toBeTruthy();
    });

    it('should have username input field', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const usernameInput = compiled.querySelector('#username') as HTMLInputElement;
        expect(usernameInput).toBeTruthy();
        expect(usernameInput.placeholder).toBe('Username');
    });

    it('should have password input field', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const passwordInput = compiled.querySelector('#password') as HTMLInputElement;
        expect(passwordInput).toBeTruthy();
        expect(passwordInput.type).toBe('password');
        expect(passwordInput.placeholder).toBe('Password');
    });

    it('should have submit button', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const submitBtn = compiled.querySelector('#submit-btn');
        expect(submitBtn).toBeTruthy();
        expect(submitBtn?.textContent?.trim()).toBe('Sign in');
    });

    it('should render welcome message', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Welcome Back');
    });

    it('should render Feature A section', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const featureA = compiled.querySelector('#feature-a');
        expect(featureA).toBeTruthy();
        expect(featureA?.textContent).toContain('Feature A');
        expect(featureA?.textContent).toContain('Feature A Content');
    });

    it('should render Feature B section', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const featureB = compiled.querySelector('#feature-b');
        expect(featureB).toBeTruthy();
        expect(featureB?.textContent).toContain('Feature B');
        expect(featureB?.textContent).toContain('Feature B Content');
    });

    it('should render footer with copyright', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const footer = compiled.querySelector('#footer');
        expect(footer).toBeTruthy();
        expect(footer?.textContent).toContain('© 2024 Sample CICD');
    });

    it('should have proper header structure', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const header = compiled.querySelector('header');
        expect(header).toBeTruthy();
    });

    it('should have proper main content structure', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const main = compiled.querySelector('main');
        expect(main).toBeTruthy();
    });

    it('should have router outlet', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const routerOutlet = compiled.querySelector('router-outlet');
        expect(routerOutlet).toBeTruthy();
    });
});
