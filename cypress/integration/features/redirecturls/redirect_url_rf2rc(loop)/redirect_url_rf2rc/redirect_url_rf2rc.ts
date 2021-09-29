it('Test for redirect url for RF to RC', () => {

    cy.fixture('test-data-url').then((testdata: any)  => {
      cy.log(testdata);
      let keys = Object.keys(testdata)    
      let values = Object.values(testdata)    

      for (let index = 0; index < keys.length; index += 1) {
        if ((values[index]?.RC_baseUrl).includes('https://corporate.rabbitcare.com')){
          cy.log("==========================================================")
          cy.log("*this is test case no."index+1)
          cy.visit(values[index]?.RF_baseUrl, {
              auth: {
                username: 'shareinvestor',
                password: 'rabbitcare_1234',
              },
          })
          cy.log(values[index]?.RF_baseUrl)
          cy.log(values[index]?.RC_baseUrl)
          cy.wait(2000)
          cy.url().should('eq', values[index]?.RC_baseUrl)
          cy.get('.css-1u6jo85').should('not.exist')
          cy.get('.css-tr6dnf').should('not.exist')
          cy.get('.css-1k3k3fz').should('not.exist')
        }
        else {
          cy.log("==========================================================")
          cy.log("this is test case no."index+1)
          cy.visit(values[index]?.RF_baseUrl)
          cy.log(values[index]?.RF_baseUrl)
          cy.log(values[index]?.RC_baseUrl)
          cy.wait(2000)
          cy.url().should('eq', values[index]?.RC_baseUrl)
          cy.get('.css-1u6jo85').should('not.exist')
          cy.get('.css-tr6dnf').should('not.exist')
          cy.get('.css-1k3k3fz').should('not.exist')
        }
      }
    })
  })

