const Ajv = require('ajv')
const localize = require('ajv-i18n')
const addFormats = require('ajv-formats')
const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv)
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      // test: true,
      errorMessage: '这是不对的',
      minLength: 10,
    },
    bar: {
      type: 'string',
      format: 'email',
    },
  },
  required: ['foo'],
  additionalProperties: false,
}

ajv.addKeyword({
  keyword: 'test',
  macro: () => {
    return {
      minLength: 10,
    }
  },
})

const validate = ajv.compile(schema)

const data = {
  foo: 'hello',
  bar: 'abc@qq.com',
}

const valid = validate(data)
if (!valid) {
  // localize.zh(validate.errors)
  console.log(validate.errors)
}
