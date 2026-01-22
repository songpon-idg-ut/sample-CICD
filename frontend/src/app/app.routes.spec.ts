import { routes } from './app.routes';

describe('App Routes', () => {
    it('should have routes defined', () => {
        expect(routes).toBeDefined();
    });

    it('should be an array', () => {
        expect(Array.isArray(routes)).toBe(true);
    });

    it('should be an empty array for now', () => {
        expect(routes.length).toBe(0);
    });
});
