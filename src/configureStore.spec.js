import configureStore from './configureStore';

describe('configureStore', () => {
    it('should be a function', () => {
        expect(configureStore).toBeInstanceOf(Function);
    });

    it('should return object with store and persister objects', () => {
        let result = configureStore();

        expect(result.store).toBeDefined();
        expect(result.persistor).toBeDefined();

        global.window.devToolsExtension = () => {
            return f => f
        }

        result = configureStore();
        expect(result.store).toBeDefined();
        expect(result.persistor).toBeDefined();
    });
});
