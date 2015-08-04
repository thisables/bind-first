import assert from 'assert';
import { bindFirst } from '../module';

it('should make a function bindable', () => {
	const hasPropFirst = (data, prop) => !!data[prop];

  const hasThisFirst = hasPropFirst::bindFirst()

	const data = { id: 1, name: 'foo' };

	assert.strictEqual(data::hasThisFirst('name'), true);
	assert.strictEqual(data::hasThisFirst('nope'), false);
});;
