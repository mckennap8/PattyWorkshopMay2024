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
  "body": " How Newton's Method Works  Since Newton's method is used to approximate a root\/zero\/ -intercept of a differentiable function, we must define the function for which we are trying to solve the equation .  In order to get a visual understanding of how Newton's method works, we begin with a graph of .  !!Picture goes here!!  Newton's method always begins with the user making an initial guess for the -intercept being sought. We call this initial guess .  Next, we identify the point on the function and the tangent line to the function at that point.  !!Picture goes here!!  We know that the equation of this tangent line is:     (Make the above an exercise.)  We are interested in finding the -intercept of the tangent line above; we will call this -intercept . Note that its coordinates are . Using these coordinates, together with the tangent line formula above, we can give a formula for in terms of :     "
},
{
  "id": "sec-othersection-name",
  "level": "1",
  "url": "sec-othersection-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Creating the Formula",
  "body": " Creating the Formula  Here we will derive the Newton's method recursive formula.  "
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
  "id": "sec-section-theformulawiththeticalculator",
  "level": "1",
  "url": "sec-section-theformulawiththeticalculator.html",
  "type": "Section",
  "number": "1.4",
  "title": "Using the TI-84 to Repeatedly Evaluate the Recursive Formula",
  "body": " Using the TI-84 to Repeatedly Evaluate the Recursive Formula  Since it is such a repetitive process to repeatedly evaluate the same function, it will be straightforward to have our TI-84 calculators do the work for us.  "
},
{
  "id": "sec-section-howgoodistheformula",
  "level": "1",
  "url": "sec-section-howgoodistheformula.html",
  "type": "Section",
  "number": "1.5",
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
