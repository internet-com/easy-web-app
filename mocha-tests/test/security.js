
//use zombie.js as headless browser
var Browser = require('zombie');
var assert = require('assert');
var app = null
describe( 
  'Security example page', 
  function() {
  
    before( 
        function() {
          app = require('../../examples/security');
          //this.server = http.createServer(app).listen(3000);
          // initialize the browser using the same port as the test application
          this.browser = new Browser({ site: 'http://localhost:8080/' });
        } 
    );
    
    // load the contact page
    before(
        function( done ) {
          this.browser.visit( '/securitydemo/', done);
        }
    );
    
    it( 'should show the header and footer', 
      function() {
          this.browser.assert.success();
          this.browser.assert.text( 'h1', 'Security Demo' );
          this.browser.assert.element( 'div.copyright-div' );
        }
    );  
    
  }
);