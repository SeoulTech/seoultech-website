var fs = require('fs'),
  exec = require('execSync').exec

describe('parser', function() {

  var ext =  (Math.random() + 1).toString(36).substring(14),
    spec = function(prepare, cleanup, expect) {
      return function() {
        var result
        prepare()
        result = exec('parse ./test/input ./test/output')
        expect(result.stdout, result.stderr)
        cleanup()
      }
    }

  it('creates temp dirs (simulate beforeAll)', function() {
    fs.mkdirSync('./test/input')
    fs.mkdirSync('./test/output')
    expect(fs.existsSync('./test/input')).toBe(true)
    expect(fs.existsSync('./test/output')).toBe(true)
  })

  it('parses files with non-empty name that end with .md', spec(
    function() {fs.writeFileSync('./test/input/test-1.md', '')},
    function() {
      fs.unlinkSync('./test/input/test-1.md')
      fs.unlinkSync('./test/output/test-1.js')
    },
    function(out, err) {
      expect(out).toContain('Done')
      expect(err).toBe(undefined)
      expect(fs.existsSync('./test/input/test-1.md')).toBe(true)
      expect(fs.existsSync('./test/output/test-1.js')).toBe(true)
    }
  ))

  it('parses files with non-empty name that end with .markdown', spec(
    function() {fs.writeFileSync('./test/input/test-2.markdown', '')},
    function() {
      fs.unlinkSync('./test/input/test-2.markdown')
      fs.unlinkSync('./test/output/test-2.js')
    },
    function(out, err) {
      expect(out).toContain('Done')
      expect(err).toBe(undefined)
      expect(fs.existsSync('./test/input/test-2.markdown')).toBe(true)
      expect(fs.existsSync('./test/output/test-2.js')).toBe(true)
    }
  ))

  it('does not parse files with other extensions', spec(
    function() {fs.writeFileSync('./test/input/test-3.' + ext, '')},
    function() {fs.unlinkSync('./test/input/test-3.' + ext)},
    function(out, err) {
      expect(out).toContain('Done')
      expect(err).toBe(undefined)
      expect(fs.existsSync('./test/input/test-3.' + ext)).toBe(true)
      expect(fs.existsSync('./test/output/test-3.js')).toBe(false)
    }
  ))

  it('does not parse files with empty names with .md or .markdown extensions', spec(
    function() {
      fs.writeFileSync('./test/input/.markdown', '')
      fs.writeFileSync('./test/input/.md', '')
    },
    function() {
      fs.unlinkSync('./test/input/.markdown')
      fs.unlinkSync('./test/input/.md')
    },
    function(out, err) {
      expect(out).toContain('Done')
      expect(err).toBe(undefined)
      expect(fs.existsSync('./test/input/.md')).toBe(true)
      expect(fs.existsSync('./test/input/.markdown')).toBe(true)
      expect(fs.existsSync('./test/output/.js')).toBe(false)
    }
  ))

  it('cleans up (simulate afterAll)', function() {
    fs.rmdirSync('./test/input')
    fs.rmdirSync('./test/output')
    expect(fs.existsSync('./test/input')).toBe(false)
    expect(fs.existsSync('./test/output')).toBe(false)
  })
})
