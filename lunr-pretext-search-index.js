var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "How Newton’s Method Works",
  "body": " How Newton's Method Works  Text of section.  "
},
{
  "id": "sec-othersection-name",
  "level": "1",
  "url": "sec-othersection-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Creating the Formula",
  "body": " Creating the Formula  Here will will derive the Newton's method recursive formula.  "
},
{
  "id": "sec-section-usingtheformula",
  "level": "1",
  "url": "sec-section-usingtheformula.html",
  "type": "Section",
  "number": "1.3",
  "title": "Using the Formula",
  "body": " Using the Formula  In this section, we will learn how to use the recursive formula on some straightforward examples.  "
},
{
  "id": "sec-section-howgoodistheformula",
  "level": "1",
  "url": "sec-section-howgoodistheformula.html",
  "type": "Section",
  "number": "1.4",
  "title": "How Good Is Newton’s Method?",
  "body": " How Good Is Newton's Method?  The answer to the question \"how good is Newton's Method\" is \"it depends\". In this section, we will explore some functions and particular initial guesses and see how things go.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
