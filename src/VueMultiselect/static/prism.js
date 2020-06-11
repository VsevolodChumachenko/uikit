/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+coffeescript+css-extras+git+jade+sass+scss&plugins=show-language+remove-initial-line-feed */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function () {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
      t = (_self.Prism = {
        util: {
          encode: function (e) {
            return e instanceof n
              ? new n(e.type, t.util.encode(e.content), e.alias)
              : 'Array' === t.util.type(e)
              ? e.map(t.util.encode)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (e) {
            return Object.prototype.toString
              .call(e)
              .match(/\[object (\w+)\]/)[1];
          },
          clone: function (e) {
            var n = t.util.type(e);
            switch (n) {
              case 'Object':
                var a = {};
                for (var r in e)
                  e.hasOwnProperty(r) && (a[r] = t.util.clone(e[r]));
                return a;
              case 'Array':
                return (
                  e.map &&
                  e.map(function (e) {
                    return t.util.clone(e);
                  })
                );
            }
            return e;
          },
        },
        languages: {
          extend: function (e, n) {
            var a = t.util.clone(t.languages[e]);
            for (var r in n) a[r] = n[r];
            return a;
          },
          insertBefore: function (e, n, a, r) {
            r = r || t.languages;
            var l = r[e];
            if (2 == arguments.length) {
              a = arguments[1];
              for (var i in a) a.hasOwnProperty(i) && (l[i] = a[i]);
              return l;
            }
            var o = {};
            for (var s in l)
              if (l.hasOwnProperty(s)) {
                if (s == n)
                  for (var i in a) a.hasOwnProperty(i) && (o[i] = a[i]);
                o[s] = l[s];
              }
            return (
              t.languages.DFS(t.languages, function (t, n) {
                n === r[e] && t != e && (this[t] = o);
              }),
              (r[e] = o)
            );
          },
          DFS: function (e, n, a) {
            for (var r in e)
              e.hasOwnProperty(r) &&
                (n.call(e, r, e[r], a || r),
                'Object' === t.util.type(e[r])
                  ? t.languages.DFS(e[r], n)
                  : 'Array' === t.util.type(e[r]) &&
                    t.languages.DFS(e[r], n, r));
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          for (
            var a,
              r = document.querySelectorAll(
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              ),
              l = 0;
            (a = r[l++]);

          )
            t.highlightElement(a, e === !0, n);
        },
        highlightElement: function (n, a, r) {
          for (var l, i, o = n; o && !e.test(o.className); ) o = o.parentNode;
          o &&
            ((l = (o.className.match(e) || [, ''])[1]), (i = t.languages[l])),
            (n.className =
              n.className.replace(e, '').replace(/\s+/g, ' ') +
              ' language-' +
              l),
            (o = n.parentNode),
            /pre/i.test(o.nodeName) &&
              (o.className =
                o.className.replace(e, '').replace(/\s+/g, ' ') +
                ' language-' +
                l);
          var s = n.textContent,
            u = { element: n, language: l, grammar: i, code: s };
          if (!s || !i) return t.hooks.run('complete', u), void 0;
          if ((t.hooks.run('before-highlight', u), a && _self.Worker)) {
            var g = new Worker(t.filename);
            (g.onmessage = function (e) {
              (u.highlightedCode = e.data),
                t.hooks.run('before-insert', u),
                (u.element.innerHTML = u.highlightedCode),
                r && r.call(u.element),
                t.hooks.run('after-highlight', u),
                t.hooks.run('complete', u);
            }),
              g.postMessage(
                JSON.stringify({
                  language: u.language,
                  code: u.code,
                  immediateClose: !0,
                })
              );
          } else
            (u.highlightedCode = t.highlight(u.code, u.grammar, u.language)),
              t.hooks.run('before-insert', u),
              (u.element.innerHTML = u.highlightedCode),
              r && r.call(n),
              t.hooks.run('after-highlight', u),
              t.hooks.run('complete', u);
        },
        highlight: function (e, a, r) {
          var l = t.tokenize(e, a);
          return n.stringify(t.util.encode(l), r);
        },
        tokenize: function (e, n) {
          var a = t.Token,
            r = [e],
            l = n.rest;
          if (l) {
            for (var i in l) n[i] = l[i];
            delete n.rest;
          }
          e: for (var i in n)
            if (n.hasOwnProperty(i) && n[i]) {
              var o = n[i];
              o = 'Array' === t.util.type(o) ? o : [o];
              for (var s = 0; s < o.length; ++s) {
                var u = o[s],
                  g = u.inside,
                  c = !!u.lookbehind,
                  f = 0,
                  h = u.alias;
                u = u.pattern || u;
                for (var p = 0; p < r.length; p++) {
                  var d = r[p];
                  if (r.length > e.length) break e;
                  if (!(d instanceof a)) {
                    u.lastIndex = 0;
                    var m = u.exec(d);
                    if (m) {
                      c && (f = m[1].length);
                      var y = m.index - 1 + f,
                        m = m[0].slice(f),
                        v = m.length,
                        k = y + v,
                        b = d.slice(0, y + 1),
                        w = d.slice(k + 1),
                        P = [p, 1];
                      b && P.push(b);
                      var A = new a(i, g ? t.tokenize(m, g) : m, h);
                      P.push(A),
                        w && P.push(w),
                        Array.prototype.splice.apply(r, P);
                    }
                  }
                }
              }
            }
          return r;
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var a = t.hooks.all;
            (a[e] = a[e] || []), a[e].push(n);
          },
          run: function (e, n) {
            var a = t.hooks.all[e];
            if (a && a.length) for (var r, l = 0; (r = a[l++]); ) r(n);
          },
        },
      }),
      n = (t.Token = function (e, t, n) {
        (this.type = e), (this.content = t), (this.alias = n);
      });
    if (
      ((n.stringify = function (e, a, r) {
        if ('string' == typeof e) return e;
        if ('Array' === t.util.type(e))
          return e
            .map(function (t) {
              return n.stringify(t, a, e);
            })
            .join('');
        var l = {
          type: e.type,
          content: n.stringify(e.content, a, r),
          tag: 'span',
          classes: ['token', e.type],
          attributes: {},
          language: a,
          parent: r,
        };
        if (
          ('comment' == l.type && (l.attributes.spellcheck = 'true'), e.alias)
        ) {
          var i = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(l.classes, i);
        }
        t.hooks.run('wrap', l);
        var o = '';
        for (var s in l.attributes)
          o += (o ? ' ' : '') + s + '="' + (l.attributes[s] || '') + '"';
        return (
          '<' +
          l.tag +
          ' class="' +
          l.classes.join(' ') +
          '" ' +
          o +
          '>' +
          l.content +
          '</' +
          l.tag +
          '>'
        );
      }),
      !_self.document)
    )
      return _self.addEventListener
        ? (_self.addEventListener(
            'message',
            function (e) {
              var n = JSON.parse(e.data),
                a = n.language,
                r = n.code,
                l = n.immediateClose;
              _self.postMessage(t.highlight(r, t.languages[a], a)),
                l && _self.close();
            },
            !1
          ),
          _self.Prism)
        : _self.Prism;
    var a = document.getElementsByTagName('script');
    return (
      (a = a[a.length - 1]),
      a &&
        ((t.filename = a.src),
        document.addEventListener &&
          !a.hasAttribute('data-manual') &&
          document.addEventListener('DOMContentLoaded', t.highlightAll)),
      _self.Prism
    );
  })();
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\w\W]*?-->/,
  prolog: /<\?[\w\W]+?\?>/,
  doctype: /<!DOCTYPE[\w\W]+?>/,
  cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      'attr-value': {
        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
        inside: { punctuation: /[=>"']/ },
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: /&#?[\da-z]{1,8};/i,
}),
  Prism.hooks.add('wrap', function (a) {
    'entity' === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, '&'));
  }),
  (Prism.languages.xml = Prism.languages.markup),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup);
(Prism.languages.css = {
  comment: /\/\*[\w\W]*?\*\//,
  atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } },
  url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
  string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
  property: /(\b|\B)[\w-]+(?=\s*:)/i,
  important: /\B!important\b/i,
  function: /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/,
}),
  (Prism.languages.css.atrule.inside.rest = Prism.util.clone(
    Prism.languages.css
  )),
  Prism.languages.markup &&
    (Prism.languages.insertBefore('markup', 'tag', {
      style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: 'language-css',
      },
    }),
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'style-attr': {
          pattern: /\s*style=("|').*?\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: Prism.languages.markup.tag.inside,
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': { pattern: /.+/i, inside: Prism.languages.css },
          },
          alias: 'language-css',
        },
      },
      Prism.languages.markup.tag
    ));
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
  ],
  string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /(\.|\\)/ },
  },
  keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(true|false)\b/,
  function: /[a-z0-9_]+(?=\()/i,
  number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
  keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
  function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
})),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
    },
  }),
  Prism.languages.insertBefore('javascript', 'class-name', {
    'template-string': {
      pattern: /`(?:\\`|\\?[^`])*`/,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    Prism.languages.insertBefore('markup', 'tag', {
      script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: 'language-javascript',
      },
    }),
  (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
  var n = /#(?!\{).+/,
    t = { pattern: /#\{[^}]+\}/, alias: 'variable' };
  (e.languages.coffeescript = e.languages.extend('javascript', {
    comment: n,
    string: [
      /'(?:\\?[^\\])*?'/,
      { pattern: /"(?:\\?[^\\])*?"/, inside: { interpolation: t } },
    ],
    keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
  })),
    e.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: { comment: n, interpolation: t },
      },
    }),
    e.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\?[\s\S])*?`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
          rest: e.languages.javascript,
        },
      },
      'multiline-string': [
        { pattern: /'''[\s\S]*?'''/, alias: 'string' },
        {
          pattern: /"""[\s\S]*?"""/,
          alias: 'string',
          inside: { interpolation: t },
        },
      ],
    }),
    e.languages.insertBefore('coffeescript', 'keyword', {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    });
})(Prism);
(Prism.languages.css.selector = {
  pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
  inside: {
    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+(?:\(.*\))?/,
    class: /\.[-:\.\w]+/,
    id: /#[-:\.\w]+/,
  },
}),
  Prism.languages.insertBefore('css', 'function', {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/,
  });
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(\\?.)*?\1/m,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s(--|-)\w+/m } },
  coord: /^@@.*@@$/m,
  commit_sha1: /^commit \w{40}$/m,
};
!(function (e) {
  e.languages.jade = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
      lookbehind: !0,
    },
    'multiline-script': {
      pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: { rest: e.languages.javascript },
    },
    filter: {
      pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } },
    },
    'multiline-plain-text': {
      pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: { rest: e.languages.markup },
    },
    doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
    'flow-control': {
      pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
        },
        branch: {
          pattern: /^(?:if|unless|else|case|when|default|while)\b/,
          alias: 'keyword',
        },
        rest: e.languages.javascript,
      },
    },
    keyword: {
      pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
      lookbehind: !0,
    },
    mixin: [
      {
        pattern: /(^[\t ]*)mixin .+/m,
        lookbehind: !0,
        inside: {
          keyword: /^mixin/,
          function: /\w+(?=\s*\(|\s*$)/,
          punctuation: /[(),.]/,
        },
      },
      {
        pattern: /(^[\t ]*)\+.+/m,
        lookbehind: !0,
        inside: {
          name: { pattern: /^\+\w+/, alias: 'function' },
          rest: e.languages.javascript,
        },
      },
    ],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
      lookbehind: !0,
      inside: { rest: e.languages.javascript },
    },
    'plain-text': {
      pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
      lookbehind: !0,
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [
          {
            pattern: /&[^(]+\([^)]+\)/,
            inside: { rest: e.languages.javascript },
          },
          {
            pattern: /\([^)]+\)/,
            inside: {
              'attr-value': {
                pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                lookbehind: !0,
                inside: { rest: e.languages.javascript },
              },
              'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[!=(),]+/,
            },
          },
        ],
        punctuation: /:/,
      },
    },
    code: [
      {
        pattern: /(^[\t ]*(?:-|!?=)).+/m,
        lookbehind: !0,
        inside: { rest: e.languages.javascript },
      },
    ],
    punctuation: /[.\-!=|]+/,
  };
  for (
    var t =
        '(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+',
      n = [
        { filter: 'atpl', language: 'twig' },
        { filter: 'coffee', language: 'coffeescript' },
        'ejs',
        'handlebars',
        'hogan',
        'less',
        'livescript',
        'markdown',
        'mustache',
        'plates',
        { filter: 'sass', language: 'scss' },
        'stylus',
        'swig',
      ],
      a = {},
      i = 0,
      r = n.length;
    r > i;
    i++
  ) {
    var s = n[i];
    (s = 'string' == typeof s ? { filter: s, language: s } : s),
      e.languages[s.language] &&
        (a['filter-' + s.filter] = {
          pattern: RegExp(t.replace('{{filter_name}}', s.filter), 'm'),
          lookbehind: !0,
          inside: {
            'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
            rest: e.languages[s.language],
          },
        });
  }
  e.languages.insertBefore('jade', 'filter', a);
})(Prism);
!(function (e) {
  (e.languages.sass = e.languages.extend('css', {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore('sass', 'atrule', {
      'atrule-line': {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: { atrule: /(?:@[\w-]+|[+=])/m },
      },
    }),
    delete e.languages.sass.atrule;
  var a = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
    t = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
    ];
  e.languages.insertBefore('sass', 'property', {
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: { punctuation: /:/, variable: a, operator: t },
    },
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: a,
        operator: t,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    delete e.languages.sass.selector,
    e.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
        lookbehind: !0,
      },
    });
})(Prism);
(Prism.languages.scss = Prism.languages.extend('css', {
  comment: { pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)*url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
    inside: { placeholder: /%[-_\w]+/ },
  },
})),
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
      { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
    ],
  }),
  Prism.languages.insertBefore('scss', 'property', {
    variable: /\$[-_\w]+|#\{\$[-_\w]+\}/,
  }),
  Prism.languages.insertBefore('scss', 'function', {
    placeholder: { pattern: /%[-_\w]+/, alias: 'selector' },
    statement: /\B!(?:default|optional)\b/i,
    boolean: /\b(?:true|false)\b/,
    null: /\bnull\b/,
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0,
    },
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.util.clone(
    Prism.languages.scss
  ));
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var e = {
      css: 'CSS',
      clike: 'C-like',
      javascript: 'JavaScript',
      abap: 'ABAP',
      actionscript: 'ActionScript',
      apacheconf: 'Apache Configuration',
      apl: 'APL',
      applescript: 'AppleScript',
      asciidoc: 'AsciiDoc',
      aspnet: 'ASP.NET (C#)',
      autoit: 'AutoIt',
      autohotkey: 'AutoHotkey',
      basic: 'BASIC',
      csharp: 'C#',
      cpp: 'C++',
      coffeescript: 'CoffeeScript',
      'css-extras': 'CSS Extras',
      fsharp: 'F#',
      glsl: 'GLSL',
      http: 'HTTP',
      inform7: 'Inform 7',
      latex: 'LaTeX',
      lolcode: 'LOLCODE',
      matlab: 'MATLAB',
      mel: 'MEL',
      nasm: 'NASM',
      nginx: 'nginx',
      nsis: 'NSIS',
      objectivec: 'Objective-C',
      ocaml: 'OCaml',
      parigp: 'PARI/GP',
      php: 'PHP',
      'php-extras': 'PHP Extras',
      powershell: 'PowerShell',
      jsx: 'React JSX',
      rest: 'reST (reStructuredText)',
      sas: 'SAS',
      sass: 'Sass (Sass)',
      scss: 'Sass (Scss)',
      sql: 'SQL',
      typescript: 'TypeScript',
      vhdl: 'VHDL',
      vim: 'vim',
      wiki: 'Wiki markup',
      yaml: 'YAML',
    };
    Prism.hooks.add('before-highlight', function (a) {
      var s = a.element.parentNode;
      if (s && /pre/i.test(s.nodeName)) {
        var t =
          e[a.language] ||
          a.language.substring(0, 1).toUpperCase() + a.language.substring(1);
        s.setAttribute('data-language', t);
        var i,
          r,
          l = s.previousSibling;
        l &&
        /\s*\bprism-show-language\b\s*/.test(l.className) &&
        l.firstChild &&
        /\s*\bprism-show-language-label\b\s*/.test(l.firstChild.className)
          ? ((r = l.firstChild),
            r.getAttribute('data-language') !== t &&
              (r.setAttribute('data-language', t), (r.innerHTML = t)))
          : ((i = document.createElement('div')),
            (r = document.createElement('div')),
            (r.className = 'prism-show-language-label'),
            r.setAttribute('data-language', t),
            (r.innerHTML = t),
            (i.className = 'prism-show-language'),
            i.appendChild(r),
            s.parentNode.insertBefore(i, s));
      }
    });
  }
})();
!(function () {
  'undefined' != typeof self &&
    self.Prism &&
    self.document &&
    Prism.hooks.add('before-highlight', function (e) {
      if (e.code) {
        var s = e.element.parentNode,
          n = /\s*\bkeep-initial-line-feed\b\s*/;
        !s ||
          'pre' !== s.nodeName.toLowerCase() ||
          n.test(s.className) ||
          n.test(e.element.className) ||
          (e.code = e.code.replace(/^(?:\r?\n|\r)/, ''));
      }
    });
})();