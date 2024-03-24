import Validator from '../regex';

const checkList = [
  ['kobiche', true],
  ['1kobiche', false],
  ['kobiche1', false],
  ['_kobiche', false],
  ['-kobiche', false],
  ['kobiche-', false],
  ['kobiche_', false],
  ['k123b-_333BICHE', true],
  ['k1111biche', false],
];
const checkRegex = test.each(checkList);
checkRegex('check %s return %s', (name, expected) => {
  const checkClass = new Validator(name);
  const result = checkClass.validateUsername(name);
  expect(result).toBe(expected);
});
